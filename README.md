# Kafa Topu Oyunu
## ⚽ Genel Bakış

Bu proje, popüler arcade futbol oyunlarından esinlenerek geliştirilmiş, iki oyunculu basit ve eğlenceli bir Kafa Topu oyunudur. Hızlı refleksler ve stratejik zıplamalarla rakibinize gol atmaya çalıştığınız ve 1 dakika içinde en çok skor üretenin kazandıği bu oyun, gollerden sonra ve başlangıçta geri sayım özelliği ile daha dinamik bir deneyim sunar.

## ✨ Özellikler

-   **İki Oyunculu Yerel Maç:** Arkadaşlarınızla aynı klavyede rekabet edin.
-   **Basit Kontroller:** Kolayca öğrenilebilen ve akıcı oynanış sağlayan sezgisel kontroller.
-   **Fizik Tabanlı Top ve Oyuncu Hareketleri:** Gerçekçi top sekme ve oyuncu zıplama mekanikleri.
-   **Geri Sayım Sistemi:** Oyun başlangıcında ve her golden sonra gergin bir 3-2-1 geri sayımı.
-   **Skor Takibi ve Süre Sınırı:** Maç boyunca skoru ve kalan süreyi takip edin.
-   **Görsel Geri Bildirimler:** Gol ekranı ve oyun sonu mesajları ile net bildirimler.
-   **P5.js Altyapısı:** Modern web tarayıcılarında sorunsuz çalışan, esnek bir çizim ve animasyon kütüphanesi.

## 🚀 Nasıl Oynanır?

1.  `index.html` dosyasını bir web tarayıcısında açın.
2.  Oyunun talimat ekranı görünecektir.
3.  Herhangi bir tuşa bastığınızda talimatlar kaybolur ve **3-2-1 geri sayımı** başlar.
4.  Geri sayım bittiğinde oyun başlar! Amacınız, topu rakibinizin kalesine sokarak gol atmaktır.

### Kontroller

| Oyuncu         | Hareket   | Tuş |
| :------------- | :-------- | :-- |
| **Kırmızı Oyuncu (Sol)** | Sola Git   | `A` |
|                | Sağa Git   | `D` |
|                | Zıpla     | `W` |
|                | Şut Çek   | `S` |
| **Mavi Oyuncu (Sağ)** | Sola Git   | `←` |
|                | Sağa Git   | `→` |
|                | Zıpla     | `↑` |
|                | Şut Çek   | `↓` |

-   Oyun bittiğinde veya takılı kaldığında, oyunu yeniden başlatmak için `R` tuşuna basın.
-   Geri sayım sırasında (oyun başında ve gollerden sonra) oyuncular hareket edemez ve süre durur.

## 🛠️ Kurulum

Bu oyunu çalıştırmak için herhangi bir özel kurulum gerekmez. Sadece tüm proje dosyalarını indirip `index.html` dosyasını doğrudan bir web tarayıcısında (Chrome, Firefox, Edge vb.) açmanız yeterlidir.

### Proje Yapısı
kafa-topu/
├── index.html            # Oyunumuzu barındıran web sayfası 🌐
├── p5.js                 # Oyunun görsel ve interaktif ruhu: P5.js kütüphanesi ✨
├── config.js             # Oyunun genel ayarları ve durum değişkenleri ⚙️
├── assets.js             # Tüm resim ve medya yüklemeleri burada gerçekleşir 🖼️
├── player.js             # Oyuncu karakterlerinin tanımı ve davranışları 🧍
├── ball.js               # Futbol topunun fizik motoru ve çizimi ⚽
├── environment.js        # Saha, kaleler ve tribünler gibi oyun ortamı öğeleri 🏟️
├── ui.js                 # Skor, süre, talimatlar ve geri sayım ekranları 📊
├── game.js               # Oyunun ana mantığı, çarpışmalar ve gol kontrolleri 🎮
├── input.js              # Kullanıcı klavye girdilerini yönetir ⌨️
└── main.js               # Oyunun kalbi: kurulum (setup) ve ana çizim döngüsü (draw) ❤️
└── 1.png                 # Oyuncu 1'in sevimli kafa resmi 🧑‍🦰
└── 2.png                 # Oyuncu 1'in havalı krampon resmi 👟
└── 3.png                 # Oyuncu 2'nin karizmatik kafa resmi 🧑‍🦳
└── 4.png                 # Oyuncu 2'nin şık krampon resmi ⚽️

## 🤝 Katkıda Bulunma

Projeye katkıda bulunmaktan çekinmeyin! Yeni özellikler eklemek, hataları düzeltmek veya performansı artırmak için pull request'ler gönderebilirsiniz. Lütfen katkıda bulunmadan önce mevcut kod stilini ve yapısını inceleyin.

## 📄 Lisans

Bu proje, açık kaynaklıdır ve belirli bir lisans belirtilmemiştir. Kodu kullanmakta, değiştirmekte ve dağıtmakta serbestsiniz.

---
