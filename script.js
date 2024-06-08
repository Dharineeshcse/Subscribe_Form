const scriptURL =
  "https://script.google.com/macros/s/AKfycbxjQGoiH4yI21ybRKtPh33sWhpxGwyzFsvaxMk6DJm2Qlvq7CNeZG9rvaEzX3lBgc-Y/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then()
    .catch((error) => console.error("Error!", error.message));
});



const btn = document.getElementById('btn');
const msg = document.getElementById('msg');
msg.innerHTML = "";

btn.addEventListener('click' , function(){
    msg.innerHTML = "Thanks For Subscribing!!";
    setTimeout(function (){
        msg.innerHTML = "";
        form.reset();
    } , 3000);
});
