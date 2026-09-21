/* =========================================================================
   Instituto PSI & DH — comportamento da página

   São três coisas, só:
   1. a barra com o WhatsApp aparece depois do hero
   2. o hero emerge uma vez, na carga
   3. espaços de imagem mostram o contorno quando o arquivo não existe

   Nada anima ao entrar na tela durante a rolagem. É proposital: a descida
   já é o movimento da página.
   ========================================================================= */

(function () {
  "use strict";

  var menosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------- 1. barra flutuante */

  var dock = document.getElementById("dock");
  var pendente = false;

  function aoRolar() {
    if (pendente) return;
    pendente = true;

    requestAnimationFrame(function () {
      pendente = false;

      var rolagem = window.scrollY || window.pageYOffset;

      /* a barra flutuante entra quando o hero sai */
      if (dock) {
        dock.classList.toggle("is-visivel", rolagem > window.innerHeight * 0.75);
      }
    });
  }

  /* --------------------------------------------- 2. a entrada única do hero */

  var entrada = document.querySelector("[data-enter]");
  if (entrada) {
    if (menosMovimento) {
      entrada.classList.add("is-dentro");
    } else {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { entrada.classList.add("is-dentro"); });
      });
    }
  }

  /* ------------------------------------- 3. contorno quando falta a imagem */

  Array.prototype.forEach.call(document.querySelectorAll(".slot"), function (slot) {
    var img = slot.querySelector("img");
    if (!img) return;

    function marcarFalta() { slot.classList.add("sem-imagem"); }

    if (img.complete) {
      if (!img.naturalWidth) marcarFalta();
    } else {
      img.addEventListener("error", marcarFalta);
    }
  });

  /* ------------------------------------------------------------- disparos */

  aoRolar();

  window.addEventListener("scroll", aoRolar, { passive: true });
  window.addEventListener("resize", aoRolar);
  window.addEventListener("load", aoRolar);
})();
