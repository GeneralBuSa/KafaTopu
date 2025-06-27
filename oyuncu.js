
function oyuncuyuGuncelle(oyuncu) {
  if (oyunBekliyor) {
    oyuncu.hizX = 0;
    oyuncu.hizY = 0;
    return; // Oyuncuyu güncelleme
  }
  oyuncu.x += oyuncu.hizX
  oyuncu.hizY += oyuncu.yercekimi
  oyuncu.y += oyuncu.hizY

  // Zemin çarpışması
  if (oyuncu.y + oyuncu.kafaYaricap > zemin - oyuncu.kramponYukseklik) {
    oyuncu.y = zemin - oyuncu.kafaYaricap - oyuncu.kramponYukseklik
    oyuncu.hizY = 0
    oyuncu.zipliyor = false
  }

  // Ekran sınırları
  if (oyuncu.x - oyuncu.kafaYaricap < 0) oyuncu.x = oyuncu.kafaYaricap
  if (oyuncu.x + oyuncu.kafaYaricap > width) oyuncu.x = width - oyuncu.kafaYaricap
}

function oyuncuyuCiz(oyuncu, kafaResmi, solTaraf) {
  // Kafa - resim yoksa daire çiz
  if (kafaResmi) {
    imageMode(CENTER)
    image(kafaResmi, oyuncu.x, oyuncu.y, oyuncu.kafaYaricap * 2, oyuncu.kafaYaricap * 2)
  } else {
    // Varsayılan kafa çizimi
    fill(solTaraf ? color(255, 100, 100) : color(100, 100, 255))
    stroke(0)
    strokeWeight(2)
    ellipse(oyuncu.x, oyuncu.y, oyuncu.kafaYaricap * 2, oyuncu.kafaYaricap * 2)
    
    // Basit yüz
    fill(0)
    ellipse(oyuncu.x - 8, oyuncu.y - 5, 4, 4) // sol göz
    ellipse(oyuncu.x + 8, oyuncu.y - 5, 4, 4) // sağ göz
    arc(oyuncu.x, oyuncu.y + 5, 15, 10, 0, PI) // ağız
  }

  // Krampon - hangi oyuncuya göre farklı krampon resmi kullan
  push()
   const xOffset = solTaraf ? 10 : -10;
  translate(oyuncu.x + xOffset, oyuncu.y + oyuncu.kafaYaricap+12)

  if (oyuncu.sutCekiyor) {
    if (solTaraf) rotate(oyuncu.kramponAci)
    else rotate(-oyuncu.kramponAci)
  }

  if (solTaraf && kramponResmi1) {
    image(kramponResmi1, 0, 0, oyuncu.kramponGenislik, oyuncu.kramponYukseklik)
  } else if (!solTaraf && kramponResmi2) {
    image(kramponResmi2, 0, 0, oyuncu.kramponGenislik, oyuncu.kramponYukseklik)
  } else {
    // Varsayılan krampon çizimi
    fill(solTaraf ? color(150, 75, 0) : color(0, 0, 150))
    stroke(0)
    strokeWeight(2)
    rect(-oyuncu.kramponGenislik/2, -oyuncu.kramponYukseklik/2, 
         oyuncu.kramponGenislik, oyuncu.kramponYukseklik)
    
    // Krampon detayları
    fill(255)
    for (let i = 0; i < 3; i++) {
      ellipse(-oyuncu.kramponGenislik/3 + i * oyuncu.kramponGenislik/3, 
              oyuncu.kramponYukseklik/4, 3, 3)
    }
  }
  pop()
  noStroke()
}

function sutAnimasyonlariniGuncelle() {
  // Oyuncu 1 şut animasyonu
  if (oyuncu1.sutCekiyor) {
    if (oyuncu1.sutSayaci > 7.5) {
      oyuncu1.kramponAci = map(oyuncu1.sutSayaci, 15, 7.5, 0, -PI / 3)
    } else {
      oyuncu1.kramponAci = map(oyuncu1.sutSayaci, 7.5, 0, -PI / 3, PI / 4)
    }

    oyuncu1.sutSayaci--

    if (oyuncu1.sutSayaci <= 0) {
      oyuncu1.sutCekiyor = false
      oyuncu1.kramponAci = 0
    }
  }

  // Oyuncu 2 şut animasyonu
  if (oyuncu2.sutCekiyor) {
    if (oyuncu2.sutSayaci > 7.5) {
      oyuncu2.kramponAci = map(oyuncu2.sutSayaci, 15, 7.5, 0, -PI / 3)
    } else {
      oyuncu2.kramponAci = map(oyuncu2.sutSayaci, 7.5, 0, -PI / 3, PI / 4)
    }

    oyuncu2.sutSayaci--

    if (oyuncu2.sutSayaci <= 0) {
      oyuncu2.sutCekiyor = false
      oyuncu2.kramponAci = 0
    }
  }
}
function sutCek(oyuncu, solTaraf) {
  const mesafe = dist(futbolTop.x, futbolTop.y, oyuncu.x, oyuncu.y + oyuncu.kafaYaricap)

  if (mesafe < oyuncu.kafaYaricap * 2 + futbolTop.yaricap) {
    const sutKuvveti = 25
    futbolTop.hizX = solTaraf ? sutKuvveti : -sutKuvveti
    futbolTop.hizY = -sutKuvveti / 2
  }
}