function random(){
 let a=document.getElementById("input").value


 let span=document.getElementById("span")

    span.innerHTML=Math.floor (Math.random() * a+1)

}