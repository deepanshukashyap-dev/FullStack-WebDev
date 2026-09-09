 const buttons = document.querySelectorAll('.button');
//  console.log(buttons);      //nodeList
const body = document.querySelector("body")

buttons.forEach(function(btn){
    // console.log(btn)
    //EventListner
    btn.addEventListener('click',function(event){
        console.log(event);  //gives the complete event object
        console.log(event.target); //gives the element on which event is occurred
        if(event.target.id==='grey'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id==='white'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id==='blue'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id==='yellow'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id==='purple'){
            body.style.backgroundColor = event.target.id;
        }
    })
})

