function cariAngka () {
  const acakAngka = Math.floor(Math.random() * 4) + 1;
  return acakAngka;
}

function getHasil (comp, player){
  if (player == comp) {
    return 'benar';
  } else {
    return 'salah';
  }
}

function ulang () {
  const gambar = document.querySelectorAll('img');
  gambar.forEach(function (pil) {
    pil.setAttribute('src', 'images/depan.png');
  })
}

const pilihan = document.querySelectorAll('img');
pilihan.forEach(function(pil) {
  pil.addEventListener('click', function(){
    const angkaPlayer = Math.floor(Math.random() * 4) + 1;
    const angkaComp = cariAngka();
    const hasil = getHasil(angkaComp, angkaPlayer);


    pil.setAttribute('src', 'images/'+hasil+'.jpg');

    setTimeout (function() {
      ulang();
    },1000);

  });
});
