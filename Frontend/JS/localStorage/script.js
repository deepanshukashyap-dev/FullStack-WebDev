const input = document.getElementById('input-name')
const submitButton = document.getElementById('submit-btn')
const userName = document.getElementById('user-name')


submitButton.addEventListener('click',() => {
    const name = input.value;
    console.log(name);

    const value = localStorage.setItem('name',name);    //storing the userName into the localStorage using setItem
    location.reload();    //reload from the current location
})

window.addEventListener('load',() => {
    const value = localStorage.getItem('name');  //getting the name from the localStorage using the key
    userName.innerText = value;
})