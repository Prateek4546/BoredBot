

const containter = document.getElementById("container");
const text = document.getElementById("text");
const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
 
fetch("https://apis.scrimba.com/bored/api/activity")
.then(response => response.json())
.then(data =>{
    console.log(data.activity);
      text.innerHTML = `<h5>${data.activity}</h5>`;
      console.log(text);
} 
);


});

