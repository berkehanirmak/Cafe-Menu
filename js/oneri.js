// Çay önerileri
var cayOnerileri = [
    "Bugünün favorisi: Kuşburnu Ada Çayı!",
    "Fincan Çayı ile gününüzü renklendirin.",
    "Yeşil Çay, sağlık dolu bir tercih!",
    "Ada Çayı ile tatil hissi yaşayın.",
    "Ihlamur Çayı, rahatlatıcı bir seçenek.",
    "Kış Çayı sizi soğuktan korur.",
    "Papatya Çayı, günün stresini alır.",
    "Melisa Çayı ile huzurlu bir an.",
];

// Sayfa yüklendiğinde çalışacak fonksiyon
function rastgeleCayOnerisi() {
    // Rastgele bir çay önerisi seç
    var randomIndex = Math.floor(Math.random() * cayOnerileri.length);
    var randomOneri = cayOnerileri[randomIndex];

    // Öneriyi HTML içine yerleştir
    var oneriElementi = document.getElementById("cayOnerisi");
    oneriElementi.innerHTML = randomOneri;
}
// Milkshake önerileri
var milkshakeOnerileri = [
    "Günün favorisi: Kavunlu Milkshake!",
    "Çikolatalı Milkshake ile tatlı bir mola.",
    "Oreolu Milkshake, eşsiz bir lezzet deneyimi.",
    "Çilekli Milkshake, taze ve hafif bir seçenek.",
    "Muzlu Milkshake, enerji dolu bir içecek.",
    "Vişneli Milkshake, ferahlatıcı bir tercih.",
    "Karadutlu Milkshake, yoğun ve lezzetli.",
];

function rastgeleMilkshakeOnerisi() {
    var randomIndex = Math.floor(Math.random() * milkshakeOnerileri.length);
    var randomOneri = milkshakeOnerileri[randomIndex];

    var oneriElementi = document.getElementById("milkshakeOnerisi");
    oneriElementi.innerHTML= randomOneri;
}

var sicakkahveOnerileri = [
    "Bugünün favorisi: Yoğun aromalı Americano!",
    "Latte, süt sevenler için ideal bir seçenek.",
    "Cappuccino, hafif köpük sevenlere önerilir.",
    "Flat White, güçlü kahve sevenler için.",
    "Espresso, klasik ve etkileyici bir tercih.",
    "Espresso Macchiato, sade ve lezzetli.",
    "Cortado, süt oranı dengeli bir içecek."
];

function rastgeleSicakKahveOnerisi() {
    var randomIndex = Math.floor(Math.random() * sicakkahveOnerileri.length);
    var randomOneri = sicakkahveOnerileri[randomIndex];
    var oneriElementi = document.getElementById("sicakKahveOnerisi");
    oneriElementi.innerHTML = randomOneri;
}
var smoothieOnerileri = [
    "Çilek Smoothie, taze ve lezzetli!",
    "Böğürtlen Smoothie, enerji dolu bir seçenek.",
    "Orman Meyveleri Smoothie, vitamin deposu.",
    "Kivi Smoothie, ferahlatıcı bir içecek.",
    "Yeşil Elma Smoothie, sağlıklı ve hafif.",
    "Karadut Smoothie, yoğun ve lezzetli.",
    "Mango Smoothie, tropikal bir lezzet deneyimi.",
    "Kavun Smoothie, serinletici bir tercih.",
    "Muz Smoothie, enerji ve potasyum kaynağı.",
    "Vişne Smoothie, tatlı ve ekşi birleşimi.",
    "Karpuz Smoothie, sıcak günlerin favorisi."
];

function rastgeleSmoothieOnerisi() {
    var randomIndex = Math.floor(Math.random() * smoothieOnerileri.length);
    var randomOneri = smoothieOnerileri[randomIndex];
    var oneriElementi = document.getElementById("smoothieOnerisi");
    oneriElementi.innerHTML = randomOneri;
}


// Soğuk kahve önerileri
var sogukKahveOnerileri = [
    "Ice Evreka, serinletici bir lezzet.",
    "Ice Americano, kafein dolu bir içecek.",
    "Ice Latte, hafif ve kremalı bir seçenek.",
    "Ice Zebra Mocha, çikolata ve kahvenin muhteşem uyumu.",
    "Ice Mocha, soğuk ve lezzetli.",
    "Ice White Mocha, beyaz çikolata sevenlere özel.",
    "Ice Karamel Mocha, karamel notalarıyla zenginleşen bir lezzet."
];

function rastgeleSogukKahveOnerisi() {
    var randomIndex = Math.floor(Math.random() * sogukKahveOnerileri.length);
    var randomOneri = sogukKahveOnerileri[randomIndex];
    var oneriElementi = document.getElementById("sogukKahveOnerisi");
    oneriElementi.innerHTML = randomOneri;
}


// Türk kahvesi önerileri
var turkKahvesiOnerileri = [
    "Damla Sakızlı Türk Kahvesi, eşsiz bir aroma sunar.",
    "Dağ Çilekli Türk Kahvesi, taze çilek notalarıyla öne çıkar.",
    "Çikolatalı Türk Kahvesi, çikolata severler için ideal bir seçenek.",
    "Menengiç Kahvesi, geleneksel bir lezzet sunar.",
    "Dibek Kahvesi, özel baharatlarıyla dikkat çeker.",
    "Kervansaray Kahvesi, zengin ve aromatik bir içecektir.",
];

// Günün Türk Kahvesi önerisi
function rastgeleTurkKahvesiOneri() {
    var randomIndex = Math.floor(Math.random() * turkKahvesiOnerileri.length);
    var randomOneri = turkKahvesiOnerileri[randomIndex];
    var oneriElementi = document.getElementById("turkKahvesiOnerisi");
    oneriElementi.innerHTML = randomOneri;
}


