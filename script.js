//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// -------------------------Banka Uygulaması---------------------------------------
//---------------------------------------------------------------------------------

let bakiye = 1000

let hesapla = function(){
   let secim = Number(prompt("Bankamıza Hoşgeldniz\n 1-Bakiye Sorgula\n 2-Para Çek\n 3-Para Yatır\n 4-Çıkış Yap"))
   switch(secim) {
    case 1:
      console.log(bakiye)
      return hesapla()
    // break;
    case 2:
      let cekilen = Number(prompt("Ne Kadar Para Çekeceksiniz?"))
      bakiye = bakiye - cekilen
      return hesapla()
    // break;
    case 3:
      let yatirilan = Number(prompt("Ne Kadar Para Yatıracaksınız?"))
      bakiye = bakiye + yatirilan
      return hesapla()
    // break;
    case 4:
        console.log("İyi Günler...")
      return 0
    default:
        console.log("Lütfen Doğru Bir Seçim Yapınız!!!")
      return hesapla()
  }
}

// -----------------------------------------------------------------------------------------
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// -------------------------Random hex code renk oluşturucu---------------------------------------
//------------------------------------------------------------------------------------------------

const renkUret = () => {
    let renk = Math.floor(Math.random() * (16777216 + 1)).toString(16)
    while(renk.length < 6){
    renk = "0" + renk;
    }
    renk = "#" + renk;
    
    return renk;
}
let renklendir = function(){
    console.log("Üretilen Renk Kodu: " + renkUret());
    const div = document.getElementById("kutu")
    div.style.backgroundColor = renkUret()
}


// --------------------------------------------------------------------------------------------------
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// -------------------------Random Şifre Oluşturma--------------------------------------------------
//--------------------------------------------------------------------------------------------------


let sifreUret = function(){
  let uretilenSifre = []
  let karakterler  = [    "a",    "b",    "c",    "ç",    "d",    "e",    "f",    "g",    "ğ",    "h",    "ı",    "i",    "j",    "k",    "l",    "m",    "n",    "o",    "ö",    "p",    "r",    "s",    "ş",    "t",    "u",    "ü",    "v",    "y",    "z",    "q",    "w",    "x",    "A",    "B",    "C",    "Ç",    "D",    "E",    "F",    "G",    "Ğ",    "H",    "I",    "I",    "J",    "K",    "L",    "M",    "N",    "O",    "Ö",    "P",    "R",    "Ş",    "T",    "U",    "Ü",    "V",    "Y",    "Z",    "Q",    "W",    "X",    0,    1,    2,    3,    4,    5,    6,    7,    8,    9,    10,    "!",    "'",    "^",    "+",    "%",    "&",    "/",    "(",    ")",    "=",    "?",    "-", "_",    "*",    ",",    ";",    "`","{",    "}",    "[",    "]",    "@",    "|",    "<",    ">",    ".",    ":",    "é",    "$","#","£","€", "₺"]

  console.log("Havuzdaki Başlangıç Karakter Sayısı: " + karakterler.length)
  let sifre = []

  let karakterSayisi = prompt("Karakter sayısını giriniz")
   for(let i = 0; i < karakterSayisi; i++){
    let diziBoyutu = karakterler.length
    let randomSayi = Math.random() * diziBoyutu
    let randomIndeks = Math.floor(randomSayi)

    let randomKarakter = karakterler[randomIndeks]
    sifre.push(randomKarakter)
    let silinecek = randomKarakter
    let index = karakterler.indexOf(silinecek)
      if(index > -1){
        karakterler.splice(index,1)
      }

   }
   
   for(let i = 0; i<sifre.length;i++){
    uretilenSifre = uretilenSifre + sifre[i]
   }

   console.log("Kullanılan Karakter Sayısı: " + sifre.length)
   console.log("Üretilen Benzersiz Şifre: " + uretilenSifre)
   console.log("Üretilen Şifrenin Dizi Hali: " + sifre)
   console.log("Kullanılmayan Karakter Sayısı: " + karakterler.length)
   
   
   return sifre
}
