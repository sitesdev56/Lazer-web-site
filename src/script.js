
const slides = document.querySelectorAll('.slide');
const carrossel = document.getElementById('carrossel');
const btnAvancar = document.querySelector('.avancar');
const btnVoltar = document.querySelector('.voltar');

let index = 0;

function atualizarSlide() {
  slides.forEach(slide => slide.classList.remove('ativo'));
  const slideAtivo = slides[index];
  slideAtivo.classList.add('ativo');

  // Centraliza manualmente o slide no contêiner
  const carrosselCenter = carrossel.offsetWidth / 2;
  const slideCenter = slideAtivo.offsetLeft + (slideAtivo.offsetWidth / 2);
  const scrollLeft = slideCenter - carrosselCenter;

  carrossel.scrollTo({
    left: scrollLeft,
    behavior: 'smooth'
  });
}

btnAvancar.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  atualizarSlide();
});

btnVoltar.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  atualizarSlide();
});

// Inicializa com a imagem certa
atualizarSlide();

