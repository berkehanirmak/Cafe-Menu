  function oyla(container, kahveTuru) {
    var yildizlar = container.children;
    var puan = 0;
    for (var i = 0; i < yildizlar.length; i++) {
        if (yildizlar[i].classList.contains('secildi')) {
            puan = yildizlar.length - i;
            break;
        }
    }

    alert('"' + kahveTuru + '" için puan verdiniz. İlginiz için teşekkür ederiz. ');
}

document.addEventListener('DOMContentLoaded', function () {
    var yildizlar = document.querySelectorAll('.rating>span');
    yildizlar.forEach(function (yildiz) {
        yildiz.addEventListener('click', function () {
            var seciliIndex = Array.from(yildizlar).indexOf(yildiz);
            yildizlar.forEach(function (digerYildiz, index) {
                if (index <= seciliIndex) {
                    digerYildiz.classList.add('secildi');
                } else {
                    digerYildiz.classList.remove('secildi');
                }
            });
        });
    });
});