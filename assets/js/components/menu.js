export default function menu() {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".menu") || e.target.matches(".menu > span")) {
      menuToggle();
      lineWidthSpan();
    }

    if (e.target.matches(".navbar li a")) {
      menuToggle();
      lineWidthSpan();
    }
  });
}

const menuToggle = () => {
  const $lines = document.querySelectorAll(".menu span"),
    $logo = document.querySelector(".logo"),
    $navBar = document.querySelector(".navbar"),
    $navLinks = document.querySelectorAll(".navbar li"),
    mediaquery = window.matchMedia("(max-width: 991px)");

  if (mediaquery.matches) {
    $lines.forEach((line) => line.classList.toggle("open"));
    $navBar.classList.toggle("open");
    $logo.classList.toggle("open");

    $navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade .3s ease forwards ${
            index / 5 + 0.5
          }s`);
    });
  }
};

const lineWidthSpan = () => {
  const $logo = document.querySelector(".logo"),
    $menu = document.querySelector(".menu span"),
    $span = document.querySelector(".menu span:nth-child(2)");

  let coordsLogo = $logo.getBoundingClientRect(),
    coordsSpan = $span.getBoundingClientRect(),
    lineWidth = coordsSpan.left - coordsLogo.left;

  $menu.classList.contains("open")
    ? ($span.style.transform = `translateX(-${lineWidth}px)`)
    : ($span.style.transform = `translateX(0)`);
};

const changeIcon = () => {
  const icons = [
    "./assets/img/icons/user.svg",
    "./assets/img/icons/skill.svg",
    "./assets/img/icons/projects.svg",
    "./assets/img/icons/theme.svg",
    "./assets/img/icons/contact.svg",
  ];

  const $list = Array.from(document.querySelectorAll(".navbar a"));

  $list.forEach((el) => {
    el.addEventListener("mouseover", (e) => {
      let index = $list.indexOf(e.target);
      $list[index].style.background = `url(${icons[index]}) no-repeat`;
      $list[index].style.backgroundSize = "20%";
      $list[index].style.backgroundPosition = "center";
      $list[index].dataset.text = $list[index].textContent;
      $list[index].textContent = "";
    });

    el.addEventListener("mouseout", (e) => {
      let index = $list.indexOf(e.target);
      $list[index].style.background = "";
      $list[index].textContent = `${$list[index].dataset.text}`;
    });
  });
};

changeIcon();
