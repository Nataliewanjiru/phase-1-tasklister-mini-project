document.addEventListener("DOMContentLoaded", () => {
  let submit = document.forms["create-task-form"]["submit"];
let text =document.forms["create-task-form"]["new-task-description"];
let list = document.getElementById("tasks")
let button = document.createElement('button')
   button.textContent="del"
 

submit.addEventListener("click", (event)=>{
    if(text.value){
     let newList =document.createElement("li");
     newList.textContent= text.value;
     list.append(newList);
      newList.append(button);
      text.value="";
      event.preventDefault()
    }
  })


  button.addEventListener("click", (e)=>{
   e.target.parentNode.remove()
  })
   
});


