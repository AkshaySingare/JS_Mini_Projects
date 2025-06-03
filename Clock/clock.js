// Styling for body
let bd = document.body;
bd.style.height="100vh";
bd.style.width="100vw";
bd.style.background="antiquewhite url(clock1.jpg) no-repeat";
bd.style.backgroundSize="cover";
bd.style.display="flex";
bd.style.justifyContent="center";
bd.style.alignItems="center";

// div created and centerd 
let div = document.createElement("div");
bd.append(div);
div.style.height="30vh";
div.style.width="60vw";
div.style.background="transparent";
div.style.display="flex";
// div.style.justifyContent="center";
div.style.alignItems="flex-start";

// div for background color and border
let div_1 = document.createElement("div");
div_1.style.height="12vh";
div_1.style.width="30vh";
div_1.style.display="flex";
div_1.style.justifyContent="center";
div_1.style.alignItems="center";
div_1.style.background="crimson";
div_1.style.borderRadius="25px";

div.append(div_1);

// inside the div are created
let inside_div = document.createElement("div");
inside_div.style.display="flex";
inside_div.style.width="13vw";
inside_div.style.height="9vh";
inside_div.style.backgroundColor="dimgrey";
inside_div.style.justifyContent="space-evenly";
inside_div.style.alignItems="baseline";
inside_div.style.borderRadius="25px";

div_1.append(inside_div);

// h1 for hour and h2 for min and seconds
let hour = document.createElement("h2");
let min = document.createElement("h2");
let sec = document.createElement("h2");

// appended inside the inner div
inside_div.append(hour);
inside_div.append(min);
inside_div.append(sec);

// seted the setInterval Funnction to call again and agaiin
// for asses date
let set_int = setInterval(function(e){
    // alert("Hellow");
    let d = new Date();   
    hour.textContent=d.getHours();
    min.textContent=":  "+d.getMinutes();
    sec.textContent= ":  "+d.getSeconds();
}, 1000)

// let s = setInterval(function(e){
//     alert("Hellow");
// },5000)





