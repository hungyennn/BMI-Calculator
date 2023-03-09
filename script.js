let bmiText = document.querySelector('#bmiText');
bmiText.style.display = "none";

let btn = document.querySelector('.calBmi');
let reset = document.querySelector('.reset');
const input = document.querySelector('input');

function bmi(weight, height)
{
  let w = parseInt(weight);
  let h = parseInt(height)/100; 
  let bmi = (w/(h*h)).toFixed(2); 
  return bmi;
}

// 取出輸入值寫入畫面
function calBmi(e)
{
  console.log(e);
  let weight = document.querySelector('.weight').value;
  let height = document.querySelector('.height').value;
  let resultTxt = document.querySelector('#resultText');
  let bmiText = document.querySelector('#bmiText');
  
  //print
  if((weight != "") && (height != ""))
  {
    bmiText.style.display = "block";
    resultTxt.innerHTML = bmi(weight, height);
    bmiText.innerHTML = checkBmi(bmi(weight,height));
  }
  else
  {
    bmiText.style.display="none";
    alert("請輸入身高體重！");
    return;
  };
}

function checkBmi(bmi)
{
  if(bmi < 18.5)
  {
    return "太輕了"
  }
  else if( bmi >= 18.5 &&  bmi < 25.0)
  {
    return "體重正常"
  }
  else if( bmi >= 25 &&  bmi < 30)
  {
    return "過重了"
  }
  else if( bmi  >= 30)
  {
    return "肥胖"
  }
}

// 清空值
function undo(e)
{
  document.querySelector('.weight').value='';
  document.querySelector('.height').value='';
  bmiText.style.displat = "none";
  resultText.innerHTML = 0;
  return
}

btn.addEventListener('click', calBmi);
reset.addEventListener('click', undo);