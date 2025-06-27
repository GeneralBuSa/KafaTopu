// game.js

function zamanGuncelle() {
  // Oyun bekliyorsa (geri sayım aktifse) süreyi ilerletme
  if (oyunBekliyor) {
    sonZamanKontrol = millis(); // Süre akmaya başlayana kadar sonZamanKontrol'ü güncelle
    return;
  }

  const simdikiZaman = millis();
  if (simdikiZaman - sonZamanKontrol >= 1000) {
    kalanSure--;
    sonZamanKontrol = simdikiZaman;
    if (kalanSure <= 0) {
      oyunBitti = true;
      kalanSure = 0;
    }
  }
}

// Gol sonrası veya oyun sıfırlandıktan sonra çağrılır. Geri sayımı başlatır.
function topuSifirla() {
  futbolTop.x = width / 2;
  futbolTop.y = 120;
  futbolTop.hizX = 0;
  futbolTop.hizY = 0;

  oyuncu1.x = 150;
  oyuncu1.y = zemin - oyuncu1.kafaYaricap - oyuncu1.kramponYukseklik;
  oyuncu1.hizX = 0;
  oyuncu1.hizY = 0;
  oyuncu1.zipliyor = false;

  oyuncu2.x = 650;
  oyuncu2.y = zemin - oyuncu2.kafaYaricap - oyuncu2.kramponYukseklik;
  oyuncu2.hizX = 0;
  oyuncu2.hizY = 0;
  oyuncu2.zipliyor = false;

  geriSayimiBaslat(); // Top sıfırlandığında geri sayımı başlat
  oyunBekliyor = true; // Oyunu bekleme moduna al
}

// Oyun ilk başladığında bir kez çağrılır. Geri sayım başlatmaz.
function topuVeOyunculariIlkKonumlandir() {
  futbolTop.x = width / 2;
  futbolTop.y = 120;
  futbolTop.hizX = 0;
  futbolTop.hizY = 0;

  oyuncu1.x = 150;
  oyuncu1.y = zemin - oyuncu1.kafaYaricap - oyuncu1.kramponYukseklik;
  oyuncu1.hizX = 0;
  oyuncu1.hizY = 0;
  oyuncu1.zipliyor = false;

  oyuncu2.x = 650;
  oyuncu2.y = zemin - oyuncu2.kafaYaricap - oyuncu2.kramponYukseklik;
  oyuncu2.hizX = 0;
  oyuncu2.hizY = 0;
  oyuncu2.zipliyor = false;

  oyunBekliyor = false; // İlk kurulumda bekleme modunda değil
  geriSayimAktif = false; // İlk kurulumda geri sayım aktif değil
  geriSayimMetni = ""; // İlk kurulumda geri sayım metni yok
}

function oyunuSifirla() {
  oyuncu1.skor = 0;
  oyuncu2.skor = 0;
  oyuncu1.sutCekiyor = false;
  oyuncu2.sutCekiyor = false;
  oyuncu1.kramponAci = 0;
  oyuncu2.kramponAci = 0;
  kalanSure = 60;
  sonZamanKontrol = millis();
  oyunBasladi = false; // Oyun başlangıç ekranına döner
  oyunBitti = false;
  golEkrani = false;
  golEkraniSayaci = 0;

  geriSayimAktif = false;
  geriSayimMetni = "";
  oyunBekliyor = false; // Oyunu sıfırlarken bekleme durumunu da sıfırla

  oyunIlkKurulduMu = false; // YENİ: Oyunu sıfırlarken bu bayrağı da sıfırla ki bir sonraki başlangıçta ilk kurulum yapılsın
}

function golleriKontrolEt() {
const handleGol = (oyuncuSkor, golAtanNo) => {
    oyuncuSkor === 1 ? oyuncu1.skor++ : oyuncu2.skor++;
    golAtan = golAtanNo;
    golEkrani = true;
    golEkraniSayaci = 0;
    topuSifirla(); // Gol olduğunda topu sıfırla ve geri sayımı başlat (burası 3-2-1'i gösterir)
  };

  // Sol kale (oyuncu 2 gol atar)
  if (
    futbolTop.x  < kale1.x + kale1.genislik &&
    futbolTop.y > kale1.y &&
    futbolTop.y < kale1.y + kale1.yukseklik-futbolTop.yaricap
  ) {
    handleGol(2, 2);
  }

  // Sağ kale (oyuncu 1 gol atar)
  if (
    futbolTop.x > kale2.x - kale2.genislik &&
    futbolTop.y > kale2.y &&
    futbolTop.y < kale2.y + kale2.yukseklik-futbolTop.yaricap
  ) {
    handleGol(1, 1);
  }
}

function carpismalariKontrolEt() {
  // Kafa çarpışmaları
  const mesafe1Kafa = dist(futbolTop.x, futbolTop.y, oyuncu1.x, oyuncu1.y);
  if (mesafe1Kafa < futbolTop.yaricap + oyuncu1.kafaYaricap) {
    const aci = atan2(futbolTop.y - oyuncu1.y, futbolTop.x - oyuncu1.x);
    futbolTop.hizX = cos(aci) * 15;
    futbolTop.hizY = sin(aci) * 15;
  }

  const mesafe2Kafa = dist(futbolTop.x, futbolTop.y, oyuncu2.x, oyuncu2.y);
  if (mesafe2Kafa < futbolTop.yaricap + oyuncu2.kafaYaricap) {
    const aci = atan2(futbolTop.y - oyuncu2.y, futbolTop.x - oyuncu2.x);
    futbolTop.hizX = cos(aci) * 15;
    futbolTop.hizY = sin(aci) * 15;
  }
}