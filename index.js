let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

   let delBtn  = document.createElement("button");
   delBtn.innerText = "Delete";
   delBtn.classList.add("delete");
   item.appendChild(delBtn);


    ul.appendChild(item);
    inp.value = " ";
    console.log(" Add New Task");
});

ul.addEventListener("click", function(e){
    if(e.target.nodeName == "BUTTON"){
      let listitem = e.target.parentElement;
      listitem.remove();
      console.log("Delete");
    }

})


