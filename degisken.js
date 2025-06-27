// config.js

// Oyun Nesneleri
let futbolTop, oyuncu1, oyuncu2, kale1, kale2;

// Resimler
let kafaResmi1, kafaResmi2, kramponResmi1, kramponResmi2;

// Ayarlar ve Sabitler
const seyirciRenkleri = [];
const zemin = 550;

// Oyun Durumu Değişkenleri
let oyunBasladi = false;
let oyunBitti = false;
let kalanSure = 60;
let sonZamanKontrol;

// Gol Ekranı Değişkenleri
let golEkrani = false;
let golEkraniSayaci = 0;
let golAtan = 0; // 1 veya 2

// Geri Sayım Değişkenleri
let geriSayimAktif = false;
let geriSayimSayaci = 0;
let geriSayimMetni = "";
let oyunBekliyor = false; // Oyunun geri sayım nedeniyle durakladığını belirtir

// Seyirci Renkleri
let seyirciRenk = [];

let oyunIlkKurulduMu = false; // YENİ: Oyunun ilk kurulumunun yapılıp yapılmadığını kontrol eder