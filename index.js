function cacherImg(event)
{
    // sur mouse Event :  event.srcElement
    event.srcElement.style.display ="none";
}
function cacherAllImg()
{
    let images = document.querySelectorAll('img');
    images.forEach(image=>{
        image.style.display ="none";

    })
}

let bouton= document.querySelector('#buttonC');
bouton.addEventListener('click',cacherAllImg)

let images =document.querySelectorAll('img');
images.forEach(image=>{
    image.addEventListener('dblclick',cacherImg);
})


function afficherAllImg() 
{
    let images = document.querySelectorAll('img');
    images.forEach(image=>{
        image.style.display ="block";

    })
    
}

bouton= document.querySelector('#buttonA');
bouton.addEventListener('click',afficherAllImg)



bouton = document.querySelector('div')
bouton.removeEventListener("dblclick",cacherAllImg);
