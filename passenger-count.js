let count = 0;
let display = document.getElementById("display");
 function increment(){
       //count = count + 1;
       count += 1;
       //console.log(count);
       display.innerText = count; //this display passenger counts
 }
 let saveEl = document.getElementById('save-el');


 function save(){
     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
     let countstr =  count + " - ";
     // 3. Render the variable in the saveEl using innerText
     saveEl.textContent += countstr; //what += helped here is to keep the word Previous inside p tag
     // NB: Make sure to not delete the existing content of the paragraph
     //console.log(count)
     //entriesDisplay.innerText = "Previous entries: " + count + "-";

     //resetting incrementation after we save the passenger count
     count = 0; 
     display.innerText = count;
 }