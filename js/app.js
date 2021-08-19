function getPin(){
  const pin = Math.round(Math.random()*10000);

  const pinString=pin+'';
  if(pinString.length == 4){
      return pin;
  }
  else{
     return getPin();
  }
   
}

function generatePin(){
    const pinValue=getPin();
    document.getElementById('display-pin').value=pinValue;
}


document.getElementById('keypad').addEventListener('click',function(event){
   const keypadNumber=event.target.innerText;
   const CalcInput=document.getElementById('display-calculation');
   if(isNaN(keypadNumber)){
    
     if(keypadNumber == 'C'){
       CalcInput.value='';
     }
   }
   else{
   const previousCalc=CalcInput.value;
   const newCalc=previousCalc + keypadNumber;
  CalcInput.value=newCalc;
   }

});

function verifyPin(){
  const randomPin=document.getElementById('display-pin').value;
  const typedPin=document.getElementById('display-calculation').value;

  if(randomPin==typedPin){
    document.getElementById('correct').style.display='block'
    document.getElementById('incorrect').style.display='none'
  }else{
       document.getElementById('incorrect').style.display='block'
       document.getElementById('correct').style.display='none'
  }

}