export default function chat() {
  const $container = document.querySelector(".chat__container"),
    $inputs = document.querySelector(".inputs"),
    $response = document.querySelector(".response"),
    $chatDay = document.querySelector(".chat__body--text p:nth-child(2"),
    $chatTime = document.querySelector(".chat__header p:nth-child(2"),
    $chatBody = document.querySelector(".chat__body--info");

  let time = new Date(),
    day = time.toLocaleDateString("es-MX", { weekday: "long" }),
    hour = time.getHours();

  function capitalize(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }

  $chatDay.textContent = `Espero y estes teniendo un buen ${capitalize(day)}.`;

  if (hour >= 7 && hour <= 12) {
    $chatTime.textContent = "Hola, Buen día.";
  }

  if (hour > 12 && hour <= 18) {
    $chatTime.textContent = "Hola, Buenas tardes.";
  }

  if (hour > 18 && hour <= 24) {
    $chatTime.textContent = "Hola, Buenas noches.";
  }

  const $containerRes = document.createElement("div");
  $containerRes.className = "container__response";

  document.addEventListener("click", (e) => {
    if (
      e.target.matches("#chat__btn") ||
      e.target.matches(".chat__close") ||
      e.target.matches(".contact")
    ) {
      e.preventDefault();

      $container.classList.toggle("hidden");

      if (!($response.children.length === 0)) {
        $response.removeChild($response.children[0]);
        $chatBody.appendChild($inputs);
      }
    }

    if (e.target.matches(".email")) {
      $chatBody.removeChild($chatBody.children[1]);
      $containerRes.innerHTML = `
                <p class="email__res-p1">Mi email es </p>
                <p class="email__res-p2" id="email">navarro.alejandro@outlook.es </p>            
                <input type="button" value="Atrás" class="return email__res-btn1">
                <input type="button" value="Copiar" class="copy email__res-btn2">
            `;

      $response.appendChild($containerRes);
    }

    if (e.target.matches(".social")) {
      $chatBody.removeChild($chatBody.children[1]);
      $containerRes.innerHTML = `
                <p class="social__res-p1">Mis redes sociales son </p>
                <p class="social__res-p2"><a href="https://www.linkedin.com/in/alejandro-navarro-0ab254218/"  target="_blank">Linkedin</a></p>
                <p class="social__res-p3"><a href="https://github.com/AlexNavDev" target="_blank">GitHub</a></p>
                <p class="social__res-p4"><a href="https://twitter.com/AlexNavDev" target="_blank">Twitter</a></p>
                <input type="button" value="Atrás" class="return social__res-btn">
            `;

      $response.appendChild($containerRes);
    }

    const copy = (id) => {
      let aux = document.createElement("input");
      aux.setAttribute("value", document.getElementById(id).innerHTML);
      document.body.appendChild(aux);
      aux.select();
      document.execCommand("copy");
      document.body.removeChild(aux);
    };

    if (e.target.matches(".copy")) {
      copy("email");
      const p = document.createElement("p");
      p.textContent = `Email copiado al portapales, buen ${capitalize(day)}.`;
      p.className = "message";
      $containerRes.appendChild(p);

      setTimeout(() => {
        $response.removeChild($containerRes);
        $chatBody.appendChild($inputs);
      }, 2000);
    }

    if (e.target.matches(".return")) {
      $response.removeChild($containerRes);
      $chatBody.appendChild($inputs);
    }

    if (e.target.matches(".cv")) {
      let a = document.createElement("a"),
        filePath = "./assets/pdf/CV-Alejandro.pdf";

      a.setAttribute("href", filePath);
      a.setAttribute("target", "_blank");
      a.click();
      $container.classList.toggle("hidden");
    }
  });
}
