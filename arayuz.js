// ui.js

function bilgileriGoster() {
  textSize(32);
  fill(255);
  stroke(0);
  strokeWeight(2);
  textAlign(CENTER);
  text(oyuncu1.skor + " - " + oyuncu2.skor, width / 2, 50);

  textSize(24);
  fill(255);
  textAlign(CENTER);
  const dakika = Math.floor(kalanSure / 60);
  const saniye = kalanSure % 60;
  text("Süre: " + (dakika < 10 ? "0" : "") + dakika + ":" + (saniye < 10 ? "0" : "") + saniye, width / 2, 80);
  noStroke();
}

function talimatlariGoster() {
  fill(0, 0, 0, 200);
  stroke(255);
  strokeWeight(2);
  rect(150, 200, 500, 200);

  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER);
  text("KAFA TOPU OYUNU", width / 2, 240);

  textSize(16);
  text("Kırmızı Oyuncu: A (Sol), D (Sağ), W (Zıpla), S (Şut)", width / 2, 280);
  text("Mavi Oyuncu: ← (Sol), → (Sağ), ↑ (Zıpla), ↓ (Şut)", width / 2, 310);
  text("Oyunu başlatmak için herhangi bir tuşa basın", width / 2, 340);
  text("Oyun bittiğinde R tuşu ile yeniden başlat", width / 2, 370);
}

function golEkraniGoster() {
  background(0, 0, 0, 200);
  fill(255, 255, 0);
  stroke(255);
  strokeWeight(2);
  textSize(60 + sin(golEkraniSayaci * 0.3) * 10);
  textAlign(CENTER);
  text("GOL!", width / 2, height / 2 - 50);

  fill(255);
  noStroke();
  textSize(30);
  const golAtanText = golAtan === 1 ? "KIRMIZI OYUNCU" : "MAVİ OYUNCU";
  text(golAtanText, width / 2, height / 2 + 20);

  golEkraniSayaci++;
  if (golEkraniSayaci > 120) {
    golEkrani = false;
    golEkraniSayaci = 0;
  }
}

function sonucEkraniGoster() {
  background(0, 0, 0, 200);
  fill(255);
  textSize(40);
  textAlign(CENTER);
  text("OYUN BİTTİ", width / 2, height / 2 - 50);

  textSize(30);
  const kazanan = oyuncu1.skor > oyuncu2.skor ? "KIRMIZI OYUNCU KAZANDI!" :
                   oyuncu2.skor > oyuncu1.skor ? "MAVİ OYUNCU KAZANDI!" : "BERABERE!";
  text(kazanan, width / 2, height / 2);
  textSize(24);
  text("Yeniden başlamak için 'R' tuşuna basın", width / 2, height / 2 + 50);
}

function geriSayimiBaslat() {
  geriSayimAktif = true;
  geriSayimSayaci = 180; // Yaklaşık 3 saniye (60 FPS * 3)
  geriSayimMetni = "3";
  oyunBekliyor = true; // Geri sayım başladığında oyunu bekleme moduna al
}

function geriSayimiCiz() {
  if (geriSayimAktif) {
    fill(255, 255, 255); // Kırmızı renk
    textSize(100);
    textAlign(CENTER, CENTER);
    text(geriSayimMetni, width / 2, height / 2);

    geriSayimSayaci--;
     if (geriSayimSayaci === 180) geriSayimMetni = "3";
    if (geriSayimSayaci === 120) geriSayimMetni = "2";
    if (geriSayimSayaci === 60) geriSayimMetni = "1";
    if (geriSayimSayaci <= 0) {
      geriSayimAktif = false;
      geriSayimMetni = "";
      oyunBekliyor = false; // Geri sayım bittiğinde oyunu beklemeden çıkar
      sonZamanKontrol = millis(); // Süre akmaya başlasın
    }
  }
}