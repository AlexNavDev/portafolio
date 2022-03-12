export default function colorTheme(){
    let valor = 0;

    const theme = () =>{  
        localStorage.setItem("theme", "primero");
        document.documentElement.setAttribute("data-theme", "primero");
        trans();
        valor = 0;
    }

    const theme2 = () =>{
        localStorage.setItem("theme", "segundo");
        document.documentElement.setAttribute("data-theme", "segundo");
        trans();
        valor = 1;
    }

    const theme3 = () =>{
        localStorage.setItem("theme", "tercero");
        document.documentElement.setAttribute("data-theme", "tercero");
        trans();
        valor = 2;
    }

    const $container = document.querySelector(".container"),
          $divContainer = document.createElement("div");

          $divContainer.classList = "container__theme";   
          
           let $radio = `<input type="radio" id="radio" name="radio" value="1" checked> Tema 1`;

            for (let i = 2; i <= 3; i++) {
                $radio += `<input type="radio" id="radio" name="radio" value="${i}"> Tema ${i}`;    
            }

            $divContainer.innerHTML = `
                    <div class="container__theme">
                    <div class="body__theme">
                    <h2>Temas</h2>                        
                            <div class="radio">
                                ${$radio}                  
                            </div>
                    </div>
                    </div>
            `;

            $container.appendChild($divContainer);
            $divContainer.style.transform = "scale(0)";

    document.addEventListener('click', (e) =>{      
            const $radios = document.querySelectorAll("#radio");
            $radios[valor].checked = "true";
    
            if(e.target.parentNode.className == "theme" ){
                e.preventDefault();
                $divContainer.style.transform = "scale(1)";
               
                } 
       
            if(e.target.matches("#radio")){
                if(e.target.value == 1)theme();

                if(e.target.value == 2) theme2();        
                            
                if(e.target.value == 3){theme3()}
            
                $divContainer.style.transform = "scale(0)";
            }
    });

    document.addEventListener("DOMContentLoaded", () =>{
        if(localStorage.getItem("theme") === null) localStorage.setItem("theme", "");

        if(localStorage.getItem("theme") === "primero")theme();

        if(localStorage.getItem("theme") === "segundo")theme2();

        if(localStorage.getItem("theme") === "tercero")theme3();
    });

      function trans(){
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
            }, 3000)
      }   
}

