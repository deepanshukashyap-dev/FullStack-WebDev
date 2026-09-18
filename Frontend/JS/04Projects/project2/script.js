const form = document.querySelector('#bmiForm');  //fetch form by id

form.addEventListener("submit",function(event){  //adding event listner in form

    event.preventDefault();                       //prevent default reload event on submit

    const height = parseInt(document.querySelector('#height').value) //JavaScript me .value hamesha string return karta hai isliye we use parseint
    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('.result')

    if(height=== '' || height<=0 || isNaN(height)){
        result.innerHTML=`Please Give a valid height ${height}`;
    }else if (weight=== '' || weight<=0 || isNaN(weight) ){
        result.innerHTML=`Please Give a valid height ${weight}`;
    }else {
        const bmi = (weight/((height*height)/10000)).toFixed(2);

        //show the result
        result.innerHTML = `Your BMI is <b>${bmi}</b>`;
        }
})