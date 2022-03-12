export default function animation(){
   const backgroundText = () =>{
        const contenedor = document.querySelector(".information__text");

    contenedor.addEventListener("mousemove", e =>{
            const x = e.pageX - e.target.offsetLeft;
            const y = e.pageY - e.target.offsetTop;

            e.target.style.setProperty('--x', `${ x }px`)
            e.target.style.setProperty('--y', `${ y }px`)    
    });
   }

   const showCards = () =>{
          let cards = Array.from(document.querySelectorAll(".skill__card"));
          window.addEventListener("scroll", () =>{
              let scrollTop = document.documentElement.scrollTop;
         
              const mediaqueryM = window.matchMedia("(min-width: 576px)"),mediaqueryG = window.matchMedia("(min-width: 991px)"); 

             cards.forEach( card => {
                if(scrollTop >= 500){
                    card.style.opacity = "1";
                    card.classList.add("show");
                }
                 
                if(scrollTop < 500){
                    card.style.opacity = "0";
                    card.classList.remove("show");
                }

                if(mediaqueryM.matches){
                    if(scrollTop >= 800){
                        card.style.opacity = "1";
                        card.classList.add("show");
                    }

                    if(scrollTop < 800){
                        card.style.opacity = "0";
                        card.classList.remove("show");
                    }
                }

                if(mediaqueryG.matches){
                    if(scrollTop >= 450){
                        card.style.opacity = "1";
                        card.classList.add("show");
                    }

                    if(scrollTop < 450){
                        card.style.opacity = "0";
                        card.classList.remove("show");
                    }
                }                  
               
            });

          });
   }

   backgroundText();
   showCards();
           
      document.addEventListener("click", (e) => { 
           const $card = Array.from(document.querySelectorAll(".card")),
                 $btn = Array.from(document.querySelectorAll("#seeMore")); 

                if(e.target.matches("#seeMore")){       
                    let index = $btn.indexOf(e.target),
                    mensaje = $btn[index].value;  
                    mensaje === "Descripción"
                    ? $btn[index].value = "Cerrar"
                    : $btn[index].value = "Descripción"      

                    $card[index].classList.toggle("active");
                }        
    });
} 
