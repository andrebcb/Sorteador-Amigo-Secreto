const colors = ["#bb0000", "#ffffff"];

function iniciarConfetes() {
  const end = Date.now() + 5 * 1000;  // Define o tempo de duração para 5 segundos

  function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });

    confetti({
      particleCount: 2,
      angle: 120,
      spread: 100,
      origin: { x: 1 },
      colors: colors,
    });

    // Verifica se o tempo de 5 segundos passou
    if (Date.now() < end) {
      requestAnimationFrame(frame);  // Repetir o frame se ainda não acabou
    }
  }

  frame();  // Inicia a animação
}
