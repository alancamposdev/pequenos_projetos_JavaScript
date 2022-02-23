const btnCalculate = document.getElementById('button');

function validate(){
  const weight   = document.getElementById('weight').value;
  const height   = document.getElementById('height').value;
  const response = document.getElementById('response');
  if( weight !== '' && height !== '')
  {   
   
    const imc = (weight / (height*height)).toFixed(1);    
    
    let classification = ['Abaixo do peso','Peso ideal','Sobrepeso','Obesidade grau I','Obesidade grau II', 'Obesidade grau III'];
    function res(){
      if( imc < 18.5){
        response.textContent = 
        `Seu IMC é de ${imc}. Você está  ${classification[0]}`
      }
      else if( imc < 25){
        response.textContent = 
        `Seu IMC é de ${imc}. Você está no ${classification[1]}`
      }
      else if( imc < 30){
        response.textContent = 
        `Seu IMC é de ${imc}. Você está com ${classification[2]}`
      }
      else if( imc < 35){
        response.textContent = 
        `Seu IMC é de ${imc}. Você está com ${classification[3]}`
      }
      else if( imc < 40){
        response.textContent = 
        `Seu IMC é de ${imc}. Você está com ${classification[4]}`
      }
      else if( imc > 40){
        response.textContent = 
        `Seu IMC é de ${imc}. Você está  com${classification[5]}`
      }
    }res();
  }
  else
  {
    response.textContent = " Preencha todos os campos ";
  }
}
function openResponse(){
  response.style.background = "#E8F0FE";
  response.style.minHeight = "80px";

  
 
}
btnCalculate.addEventListener('click',validate);
btnCalculate.addEventListener('click', openResponse);

 
   
  

