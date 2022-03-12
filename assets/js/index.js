import menu from "./components/menu.js";
import colorTheme from "./components/color_theme.js";
import animation from "./components/animation_project.js";
import infoProject from "./components/info_project.js";
import chat from "./components/chat.js";

document.addEventListener("DOMContentLoaded", () =>{
    menu();   
    animation();
    infoProject();
    chat();
});

 colorTheme();