// ================= WHATSAPP =================

function whatsapp(numero, mensagem = "") {
    const texto = encodeURIComponent(mensagem);
    window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
}

// seleciona TODOS os botões
const botoesWhatsapp = document.querySelectorAll(".btn-whatsapp");

botoesWhatsapp.forEach(botao => {
    botao.addEventListener("click", () => {
        whatsapp(
            "5548988212107",
            "Olá! Vim pelo site e gostaria de fazer uma encomenda 😊"
        );
    });
});



const track = document.querySelector(".carrossel-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const container = document.querySelector(".carrossel-container");

let position = 0;

function getImageWidth() {
  return document.querySelector(".foto").offsetWidth + 20;
}

function getMaxScroll() {
  return track.scrollWidth - container.offsetWidth;
}

nextBtn.addEventListener("click", () => {
  position -= getImageWidth();

  if (Math.abs(position) > getMaxScroll()) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
});

prevBtn.addEventListener("click", () => {
  position += getImageWidth();

  if (position > 0) position = 0;

  track.style.transform = `translateX(${position}px)`;
});