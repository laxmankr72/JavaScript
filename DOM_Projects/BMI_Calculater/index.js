const form = document.querySelector("form");
let bmi =null;

form.addEventListener("submit", function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const para = document.querySelector('#para');

    if(height === '' || height<0 || isNaN(height)){
        results.innerHTML = `please give a valid height ${height}`;
    } else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight ${weight}`;
    } else{
       bmi = (weight / ((height*height)/10000).toFixed(2));
       results.innerHTML = `<span> ${bmi} </span>`;
    }

    if(bmi<18.5){
        para.innerHTML = `you are Under Weight`;
    }else if(bmi > 18.5 && bmi< 24.9){
        para.innerHTML = `your weight is Normal`;
    }else{
        para.innerHTML = `OverWeight!!!`;
    }

});