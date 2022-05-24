window.onload = () => {
  let button = document.querySelector("#btn");

  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  let name = document.querySelector("#name").value;

  let gender = document.querySelector("#gender").value;

  let height = parseInt(document.querySelector("#height").value);

  let weight = parseInt(document.querySelector("#weight").value);

  let result = document.querySelector("#result");

  if (height === "" || isNaN(height))
    result.innerHTML = "Provide a valid Height!";

  else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a valid Weight!";

  else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6)
      result.innerHTML = `<span>${name} :</span> <span>${gender}</span> Under Weight <span style='color: rgb(28, 123, 183)';>${bmi}</span>`;
    
      else if (bmi >= 18.6 && bmi < 25)
      result.innerHTML = `<span>${name} :</span> <span>${gender}</span> Normal <span style='color: rgb(23, 147, 23)'>${bmi}</span>`;
    
      else if (bmi >= 25 && bmi < 30)
      result.innerHTML = `<span>${name} :</span> <span>${gender}</span> Over Weight  <span style='color: rgb(240, 206, 34)'>${bmi}</span>`;
   
      else
      result.innerHTML = ` <span>${name} :</span> <span>${gender}</span> Obese <span style='color: rgb(195, 28, 28)'>${bmi}</span>`;
  }
}
