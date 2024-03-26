export interface Project {
  idProject: number;
  name: string;
  info: string;
  api: string;
  tech: string;
  imageMovil: string;
  image: string;
  url: string;
  developed: string;
}

export interface ProjectsData {
  react: Project[];
  typescript: Project[];
}

type DataProjects = {
  [key: string]: Project[];
};

//proyectos React
import imageStore from "../assets/img/react/store.jpg";
import imageStoreMovil from "../assets/img/react/storemovil.jpg";
import imageMeal from "../assets/img/react/meal.jpg";
import imageMealMovil from "../assets/img/react/mealmovil.jpg";
import imagePokemon from "../assets/img/react/pokemon.jpg";
import imagePokemonMovil from "../assets/img/react/pokemonmovil.jpg";
import imagePassword from "../assets/img/react/password.jpg";
import imagePasswordMovil from "../assets/img/react/passwordmovil.jpg";
import imageQuiz from "../assets/img/react/quiz.jpg";
import imageQuizMovil from "../assets/img/react/quizmovil.jpg";

//proyectos TypeScript
import imageTaskify from "../assets/img/typescript/taskify.jpg";
import imageTaskifyMovil from "../assets/img/typescript/taskifymovil.jpg";
import imageCv from "../assets/img/typescript/cv.jpg";

const projectsData: DataProjects = {
  react: [
    {
      idProject: 1,
      name: "Fake-Store",
      info: "Esta página fue diseñada en Mobile First, simulando una tienda online con categorías de productos y un carrito de compras. Permite filtrar productos por categorías y agregar los favoritos al carrito. En una ventana modal, se muestra una lista de productos donde es posible ajustar las cantidades de compra.",
      api: "Los datos se consumen desde https://fakestoreapi.com",
      tech: "Desarrollada utilizando fetch async await, useReducer, custom hooks y Tailwind CSS.",
      imageMovil: imageStoreMovil,
      image: imageStore,
      url: "https://alexnavdev.github.io/react-fake-store/",
      developed: "react",
    },
    {
      idProject: 2,
      name: "Meals-Recipes",
      info: "Esta página fue diseñada en Mobile First, se puede buscar recetas de cocina ya sea por nombre, ingrediente o por un filtro de categorías, las recetas preferidas se pueden agregar a favoritos que a su vez se almacena en localStorage.",
      api: "Los datos se consumen desde la página web en su versión gratuita. https://themealdb.com",
      tech: "Desarrollada con fetch async await, styled-components y custom hooks.",
      imageMovil: imageMealMovil,
      image: imageMeal,
      url: "https://alexnavdev.github.io/react-meal-recipes/",
      developed: "react",
    },
    {
      idProject: 3,
      name: "Poke-Api",
      info: "Esta página fu e diseñada en Mobile First, se puede realizar una búsqueda por nombre o id del pokemon, se puede realizar un filtro por el tipo de pokemon y su poder. Los pokemones deseados se pueden agregar a la sección favoritos que a su vez se almacena en localStorage.",
      api: "Los datos se consumen desde https://pokeapi.com",
      tech: "Desarrollada con fetch async await, styled-components, custom hooks y context.",
      imageMovil: imagePokemonMovil,
      image: imagePokemon,
      url: "https://alexnavdev.github.io/react-poke-api/",
      developed: "react",
    },
    {
      idProject: 4,
      name: "Pass-Generator",
      info: "Esta página fue diseñada en Mobile First, se trata de generar un password con las opciones letras minúsculas, mayúsculas, numeros o simbolos, tambien cuenta con la opción que el password empieze con la primera letra en mayúscula.",
      imageMovil: imagePasswordMovil,
      image: imagePassword,
      api: "",
      tech: "Desarrollada con styled-components, custom hooks.",
      url: "https://alexnavdev.github.io/react-password-generator/",
      developed: "react",
    },
    {
      idProject: 5,
      name: "Quiz",
      info: "Esta página fue diseñada en Mobile First, en este juego se tienen cuatro categorías a eligir o se puede elegir una categoria random, el juego finaliza al terminar las cuatro categorías consecutivamente y al final se almacena el nombre o alias del jugador en localStorage.",
      api: "",
      tech: "Desarrollada con styled-components, custom hooks y context.",
      imageMovil: imageQuizMovil,
      image: imageQuiz,
      url: "https://alexnavdev.github.io/react-quiz/",
      developed: "react",
    },
  ],
  typescript: [
    {
      idProject: 1,
      name: "Tastify-App",
      info: "Esta página fue diseñada en Mobile First,esta aplicación ayuda a gestionar las tareas diarias evitando caracteres especiales y limitando cada tarea a cincuenta caracteres, ademas alerta sobre tareas repetidas, permite editar, eliminar y filtrar tareas por prioridad, las tareas guardan persistencia en localStorage.",
      api: "",
      tech: "Desarrollada con Tailwind CSS y custom hooks.",
      imageMovil: imageTaskifyMovil,
      image: imageTaskify,
      url: "https://alexnavdev.github.io/typescript-app-taskify/",
      developed: "typescript",
    },
    {
      idProject: 2,
      name: "CV-Application",
      info: "Esta página está diseñada exclusivamente para la vista de escritorio. Te brinda la oportunidad de completar un Curriculum Vitae con un diseño previamente creado, permitiéndote ingresar tus datos de manera sencilla. Además, tienes la opción de personalizar el color de tu CV de acuerdo a tus preferencias. Si lo deseas, también puedes imprimir o guardar el archivo resultante como un PDF.",
      api: "",
      tech: "Desarrollada con Tailwind CSS y custom hooks.",
      imageMovil: "",
      image: imageCv,
      url: "https://alexnavdev.github.io/typescript-cv-maker/",
      developed: "typescript",
    },
  ],
};

export default projectsData;
