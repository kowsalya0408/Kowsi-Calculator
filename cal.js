const inputValue= document.getElementById("userinput");
const calculate=document.querySelectorAll(".operations").forEach(function(item){
    item.addEventListener("click",function(e){});
});

const number=document.querySelectorAll(".number").forEach(function(item){
    item.addEventListener("click", function(e){
        console.log(e.target.innerText);
        console.log(inputValue.innerText +e.target.innerText);
        inputValue.innerText.value=input

    });
});

function hello(){
    alert("Hii");
};