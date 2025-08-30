let input=document.getElementById("input");
let msg= document.getElementById("msg");
  let attemp = document.getElementById("attemt");
let buttons=document.getElementById("buttons")


    attemp=[]
    for(i=0;i<8;i++){
        attemp.push(i);
    }

function display(value){
    input.value+=value;
}

function erase(){
    input.value=input.value.slice(0,-1)
}

let value = document.getElementById("random");
value.innerText=Math.ceil(Math.random()*100)


function cheak(){

    if(input.value.length==0){
        alert("Please Enter Some Value ")
    }
  else{
    i=attemp.pop()
    document.getElementById("attempt")
    attempt.innerText="Attempt Remaining :"+i;
   if(i==0){
    alert("You Lost ! Better Luck Next Time")
    location.reload()
    }                                                               
  }


    let guess = Number(input.value);
let target = Number(value.innerText);

if (guess === target) {
    msg.innerText = "Correct Answer!";
    value.style.color = "#00ff00"; 

    document.querySelectorAll("button").forEach(btn => {
        if (btn.id !== "reset") {
            btn.disabled = true;
        }
    });
}

else if (guess < 0 || guess > 100) {
    msg.innerText = "Number Not Allowed!";
    input.value="";
}
else if (guess < target) {
    msg.innerText = "Try Greater Number";
    input.value="";
}
else if (guess > target) {
    msg.innerText = "Try Lower Number";
    input.value="";
}


    }



function reset(){
    location.reload();
}

");
