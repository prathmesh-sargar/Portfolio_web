const scriptURL =
"https://script.google.com/macros/s/AKfycbyUDl5oBPujtHhZ03e1CdVFzCUQi3fdv72-I5MSa0A2Xeu_G8bYL75aNcxMRFPewQwY/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
e.preventDefault();
fetch(scriptURL, { method: "POST", body: new FormData(form) })
  .then((response) =>
    alert("Thank you! your form is submitted successfully... ✨👍")
  )
  .then(() => {
    window.location.reload();
  })
  .catch((error) => console.error("Error!", error.message));
});

let text=document.querySelector(".dsecond");

let reload = () =>{
    setTimeout(()=>{
        text.textContent="Student";
    },0); 
    setTimeout(()=>{
        text.textContent="Developer";
    },5000);
    setTimeout(()=>{
        text.textContent="MERN Learner";
    },7800);
}


//call the function
reload();
//repeat the same process
setInterval(reload,13000);
