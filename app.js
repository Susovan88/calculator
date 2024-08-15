let container=document.querySelector(".btn-container");
let btns=document.querySelectorAll(".btn");
let input=document.querySelector(".input");
let output=document.querySelector(".output");
let strIn="";
output.vlaue="0";

btns.forEach((btn)=>{
    btn.addEventListener("click",function(){
        if(btn.innerText=="="){
            try{
                output.value=eval(strIn);
            }catch(err){
                output.value="Error!"
            }
            strIn="";
        }else if (btn.innerText=="AC"){
            input.value="";
            output.value="0";
            strIn="";
        }else if(btn.innerText=="DEL"){
            strIn=strIn.substring(0,strIn.length-1);
            input.value=strIn;
        }
        else{
            strIn=strIn+btn.innerText;
            input.value=strIn;
            console.log(...strIn);
            output.value="0";
        }
    });
});