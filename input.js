// input.js

function keyPressed() {
  // Oyun bekliyorken (geri sayım aktifken) oyuncuların hareketini engelle
  if (oyunBekliyor) return;

  // Oyun ilk defa başlıyorsa (talimatlar ekranından oyuna geçiş)
  if (!oyunBasladi) {
    oyunBasladi = true;
    // İlk başlangıçta topuSifirla() veya geri sayım burada çağrılmıyor.
    // main.js'deki draw() fonksiyonu ilk kurulumu yönetecek.
    return; // İlk tuşa basışta sadece oyunu başlat ve geri dön
  }

  // Oyun bittiğinde 'R' tuşu ile sıfırla
  if (oyunBitti && keyCode === 82) { // R tuşu (82)
    oyunuSifirla();
    return;
  }

  // Eğer oyun bittiyse veya gol ekranı aktifse başka tuş basmalarını yoksay
  if (oyunBitti || golEkrani) return;


  // Oyuncu 1 kontrolleri
  if (keyCode === 65) oyuncu1.hizX = -oyuncu1.hiz; // A - sol
  if (keyCode === 68) oyuncu1.hizX = oyuncu1.hiz; // D - sağ
  if (keyCode === 87 && !oyuncu1.zipliyor) { // W - zıpla
    oyuncu1.hizY = -oyuncu1.ziplamaGucu;
    oyuncu1.zipliyor = true;
  }
  if (keyCode === 83 && !oyuncu1.sutCekiyor) { // S - şut
    oyuncu1.sutCekiyor = true;
    oyuncu1.sutSayaci = 15;
    sutCek(oyuncu1, true);
  }

  // Oyuncu 2 kontrolleri
  if (keyCode === LEFT_ARROW) oyuncu2.hizX = -oyuncu2.hiz;
  if (keyCode === RIGHT_ARROW) oyuncu2.hizX = oyuncu2.hiz;
  if (keyCode === UP_ARROW && !oyuncu2.zipliyor) {
    oyuncu2.hizY = -oyuncu2.ziplamaGucu;
    oyuncu2.zipliyor = true;
  }
  if (keyCode === DOWN_ARROW && !oyuncu2.sutCekiyor) {
    oyuncu2.sutCekiyor = true;
    oyuncu2.sutSayaci = 15;
    sutCek(oyuncu2, false);
  }
}

function keyReleased() {
  // Oyuncu 1
  if (keyCode === 65 || keyCode === 68) {
    oyuncu1.hizX = 0;
  }

  // Oyuncu 2
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    oyuncu2.hizX = 0;
  }
}