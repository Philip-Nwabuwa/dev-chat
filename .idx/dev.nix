{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_18
    pkgs.openssl_3_1.bin
    pkgs.libressl_3_6.bin
  ];
  idx.extensions = [
    
  ];
}