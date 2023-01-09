const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("director");
const urlElement = document.querySelector("#url");

// UI Objesi baslatma
const ui = new UI();

// tum eventleri yukleme

function eventListeners(){
    form.addEventListener("submit",addFilm);
}
function addFilm(e){
    const title = titleElement.ariaValueMax;
    const director = directorElement.ariaValueMax;
    const url = urlElement.value;


   if(title === "" || director === "" || url  === ""){  
       // hata 
       ui.displayMessages("tum alanalari doldur..." , "danger");

   }else{
       const newFilm = new Film(title,director,url);

       ui.addFilmToUI(newFFilm); 
       ui.displayMessages("Film basraiyla ","success");
       
   }

   ui.clearInputs(titleElement,urlElement,directorElement);

    e.preventDefault();

}