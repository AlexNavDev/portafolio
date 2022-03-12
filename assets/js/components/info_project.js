export default async function infoProject() {
  const $error = document.querySelector(".error"),
    $template = document.getElementById("project__template").content,
    $card = document.querySelector(".cards__container"),
    $fragment = document.createDocumentFragment();

  try {
    const response = await fetch("assets/js/json-info/projects.json"),
      infoData = await response.json(),
      dataProjects = infoData.projects;

    if (!response.ok)
      throw ($error.innerHTML = `<p> Error! status: ${response.status}</p>`);

    dataProjects.forEach((projects) => {
      $template.querySelector(
        ".face__back-content h2"
      ).textContent = `${projects.idProject}`;
      $template.querySelector(
        ".face__back-content h3"
      ).textContent = `${projects.name}`;
      $template.querySelector(
        ".face__back-content p"
      ).innerHTML = `${projects.info}`;
      $template.querySelector(".face__front-img img").src = `${projects.img}`;
      $template.querySelector(".face__front-img img").alt = `${projects.name}`;
      $template.querySelector(".card__face__back a").href = `${projects.url}`;
      $template.querySelector(".card__footer a").href = `${projects.url}`;

      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $card.appendChild($fragment);
  } catch (error) {
    $error.innerHTML = `<p> ${error}</p>`;
  }
}
