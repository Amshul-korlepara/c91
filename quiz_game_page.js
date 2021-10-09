function send(){
    number1=document.getElementById("Number1").value;
    number2=document.getElementById("Number2").value;
      actual_answer= parseInt(number1) / parseInt(number2);
      document.getElementById("quiz").innerHTML=number1+"/"+number2;
      document.getElementById("Number1").value="";
      document.getElementById("Number2").value="";
}