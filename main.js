let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #000000;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #264646;">Soy estudiante de Ingenieria Biomedica.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
