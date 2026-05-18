{ pkgs, ... }:
let
  node_20_19 = pkgs.stdenv.mkDerivation rec {
    pname = "nodejs";
    version = "20.19.0";
    src = pkgs.fetchurl {
      url = "https://nodejs.org/dist/v${version}/node-v${version}-linux-x64.tar.xz";
      sha256 = "sha256-tOM2WE1iq++tMbrs/3rxZyaL6bt90R8SlxEubu08oNU=";
    };
    dontBuild = true;
    installPhase = ''
      mkdir -p $out
      cp -r * $out/
    '';
  };
in {
  channel = "stable-24.05";
  packages = [
    node_20_19
  ];
}
