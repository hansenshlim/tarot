function card(name, description, image) {
  this.name = name;
  this.description = description;
  this.image = image;
}

var deck = [
  new card(
    "Temperance",
    'latihlah keseimbangan, kesabaran dan lakukan apapun dengan sewajarnya, ambil lah jalan tengah, hindari hal" ekstrim untuk ketenangan pribadi.',
    "temperance"
  ),
  new card(
    "The Lovers",
    "Kamu sedang dihadapkan oleh pilihan dalam hubungan, sebuah godaan hati atau dilema dalam memilih pasangan.., ingat lah untuk sesuatu yang baru datang, maka ada yang harus jadi korban. apapun pilihanmu, jangan dianggap enteng.",
    "lovers"
  ),
  new card(
    "The High Priestess",
    "saatnya merenung dan percayakan permasalahan mu kepada intuisi mu.",
    "priestess"
  ),
  new card(
    "Three of Swords",
    "lagi sakit hati atau kecewa ya? kasian.",
    "three-swords"
  ),
  new card(
    "Three of Pentacles",
    "ada progress dari apa yang kamu lakukan nih, kesuksesan bisa didapat asal tetap konsisten ya!",
    "pentacles"
  ),
  new card(
    "The Devil",
    "jng mudah tergoda dengan janji-janji manis ya! kartu ini menandakan ada godaan.",
    "devil"
  ),
  new card(
    "King of Wands",
    "kamu akan memimpin sesuatu dan akan mendapatkan pencapain, waktunya showoff!, tapi hati-hati, semakin tinggi posisi, maka akan semakin kesepian..",
    "wands"
  ),
  new card(
    "Nine of Swords",
    "kamu terlalu khawatir akan situasi yang ada..... tenangkan diri.. semua tidak sekacau yang kamu kira",
    "nine-swords"
  ),
  new card(
    "The Fool",
    "ada baiknya sebelum melangkah kamu pikirkan dulu matang-matang, dan menerima masukan dari orang yang kamu percaya",
    "thefool"
  ),
  new card(
    "The Magician",
    "kamu adalah orang yang sudah expert di bidang mu, dan sepertinya kamu diberi banyak pekerjaan yang seakan mustahil.. namun tetap kamu selesaikan.",
    "themagician"
  ),
  new card(
    "Justice",
    "melambangkan keadilan, sepertinya kamu akan dihadapkan ke masalah yang memaksa dirimu untuk menjadi bijaksana.",
    "justice"
  ),
  new card(
    "Hermit",
    "sepertinya akan datang masa perenungan untuk hidupmu, semoga cepat dapat jawaban dari segala pergumulan mu ya",
    "hermit"
  ),
  new card(
    "Chariot",
    "pantaskan lah sikap mu dengan posisimu, jika ingin menjadi seorang manager maka bersikaplah sebagai seorang manager, jangan gegabah",
    "chariot"
  ),
];

function getRandom(num) {
  var randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
}

document.getElementById("draw").onclick = function () {
  var index = getRandom(13);
  var currentCard = deck[index];

  document.getElementById("display").innerHTML =
    '<img src="images/' +
    currentCard.image +
    '.jpg"><h3>' +
    currentCard.name +
    "</h3><p>" +
    currentCard.description +
    "</p>";
};
