let images = document.querySelector('.images')  //fetching iamges container 
images.addEventListener('click', function(e){   //adding event listner , direct bhi kar sakte the
    console.log(e.target.parentNode);    //just printing to check in console
    let toRemove = e.target.parentNode;   //targeting parent node of img , only target se img target hoga
    toRemove.remove()   //Approach1        //removing parent node which in li puraa

    // approach2
    // toRemove.parentNode.removeChild(toRemove)
})