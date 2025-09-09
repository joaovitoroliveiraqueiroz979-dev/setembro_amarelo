const mensagens = [
  "Você é mais forte do que imagina ಠ_ಠ",
  "Nunca se esqueça: sua vida importa (¬_¬ )",
  "Você não está sozinho, estamos juntos ╯︿╰",
  "Acredite: dias melhores virão ᕦ(ò_óˇ)ᕤ",
  "Sempre existe esperança 💖",
];

document.getElementById("btnMensagem").addEventListener("click", () => {
  const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
  document.getElementById("mensagem").innerText = aleatoria;
});
