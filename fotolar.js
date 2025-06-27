function preload() {
  // Resim yüklemede hata yakalama
  try {
    kafaResmi1 = loadImage("1.png")
    kafaResmi2 = loadImage("3.png")
    kramponResmi1 = loadImage("2.png")
    kramponResmi2 = loadImage("4.png")
  } catch (error) {
    console.log("Resimler yüklenemedi, varsayılan şekiller kullanılacak")
  }

}