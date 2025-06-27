// environment.js

function sahayiCiz() {
  fill(34, 139, 34);
  rect(0, zemin, width, height - zemin);
}

function kaleleriCiz() {
  // Sol kale
  stroke(255)
  strokeWeight(kale1.direkKalinlik)
  line(kale1.x, kale1.y, kale1.x, kale1.y + kale1.yukseklik)
  line(kale1.x, kale1.y, kale1.x + kale1.genislik, kale1.y)
  line(kale1.x, kale1.y + kale1.yukseklik, kale1.x + kale1.genislik, kale1.y + kale1.yukseklik)

  // Sol kale ağı
  stroke(255, 255, 255, 100)
  strokeWeight(1)
  for (let y = kale1.y + 20; y < kale1.y + kale1.yukseklik; y += 40) {
    line(kale1.x, y, kale1.x + kale1.genislik, y)
  }
  for (let x = kale1.x + 10; x <= kale1.x + kale1.genislik; x += 20) {
    line(x, kale1.y, x, kale1.y + kale1.yukseklik)
  }

  // Sağ kale
  stroke(255)
  strokeWeight(kale2.direkKalinlik)
  line(kale2.x, kale2.y, kale2.x, kale2.y + kale2.yukseklik)
  line(kale2.x, kale2.y, kale2.x - kale2.genislik, kale2.y)
  line(kale2.x, kale2.y + kale2.yukseklik, kale2.x - kale2.genislik, kale2.y + kale2.yukseklik)

  // Sağ kale ağı
  stroke(255, 255, 255, 100)
  strokeWeight(1)
  for (let y = kale2.y + 20; y < kale2.y + kale2.yukseklik; y += 40) {
    line(kale2.x, y, kale2.x - kale2.genislik, y)
  }
  for (let x = kale2.x - 10; x >= kale2.x - kale2.genislik; x -= 20) {
    line(x, kale2.y, x, kale2.y + kale2.yukseklik)
  }

  strokeWeight(1)
  stroke(0)
}

function tribunleriCiz() {
  // Üst tribün
  fill(100, 100, 100);
  rect(0, 150, width, 150);
  
  let x = 20; // Başlangıç X konumu
  let y = 150; // Başlangıç Y konumu

  // Seyirciler - üst tribün
  for (let i = 0; i < 4; i++) { // 4 satır
    for (let k = 0; k < 20; k++) { // 20 sütun
      // Seyirci indeksini doğru hesapla
      let seyirciIndex = (i * 20 + k) % seyirciRenk.length; // Hata düzeltme: seyirciRenkleri yerine seyirciRenk kullanıldı.
      
      // Seyirci silüetleri
      fill(50, 50, 50);
      ellipse(x, y + 15, 12, 12); // kafa
      rect(x - 6, y + 20, 12, 20); // vücut
      
      // Her seyirciye farklı bir renk atama
      fill(seyirciRenk[seyirciIndex]); // Seyirci renk dizisinden renk al
      rect(x - 5, y + 22, 10, 15); // Renkli vücut

      // Kollar
      fill(50, 50, 50);
      rect(x - 8, y + 25, 3, 8);
      rect(x + 5, y + 25, 3, 8);
      
      x += 40; // X konumunu güncelle
    }
    x = 20; // X konumunu sıfırla
    y += 35; // Y konumunu güncelle
  }
}