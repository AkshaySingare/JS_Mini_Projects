let div = document.getElementsByClassName("container")[0];
let n = document.getElementById("name");

function Invalid() { //Print Invalid Message
    let old = document.querySelector(".Invalid");
    if(old)old.remove();
  let s = document.createElement("span");
  s.textContent = "Invalid_Name";
  s.setAttribute("class","Invalid");
  div.append(s);
  return ;
}
function valid(){ //If Valid Then Remove Invalid MSG
    n.style.border="3px solid green";
    let old = document.getElementsByClassName("Invalid")[0];
    if (old) old.remove();
}

n.addEventListener("blur", () => { 
    valid(); 
  let val = n.value;
  val = val.trim();
  if ( val.length < 2 || val.length > 50) {
    Invalid();
  }

  val = val.toLowerCase(); //Converted into Lower Case
  let count = 0;
  while (val.length > count) {
    //Checked rether than alphabet are present or not.
    if (
         !(
        val.charCodeAt(count) == 32 ||
        (val.charCodeAt(count) >= 97 &&
          val.charCodeAt(count) <= 122)
      )
    ){
      Invalid();
      break;
    }
    count++;
  }
});
