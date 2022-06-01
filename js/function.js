let opener= document.getElementById('open')
let container = document.querySelector('.modal-container')
//////
let closer= document.getElementById('close')

// let close = document.querySelector('.close')
// let closee = document.querySelector('nav')
// console.log(closee)

opener.addEventListener('click', display)
function display (){
    container.style.display = "block"
    container.style.animation= "all, 10s, linear"
 
    // closee.style.display = "none"
    // container.style.opacity = "0"
}
closer.addEventListener('click', disable)
function disable (){
    container.style.display = "none"

    // closee.style.display = "none"
    // container.style.opacity = "0"
}

// closee.addEventListener('click', displa)
// function displa (){
//     container.style.visibility = "none"
//     // closee.style.display = "none"
//     // container.style.opacity = "0"
// }









// closee.addEventListener('click', show)
// function show (){
//     container.style.opacity = "0"
// }

// close.addEventListener('click', closer);
// function closer (){
//      container.style.display = "none"

//  }



//   opener.style.fontSize = "50px"
//  function display(){
//     container.style.opacity= '1'
//  }


























// image.addEventListener('click', function())

// const open = document.getElementById('open');
// const medal_container = document.getElementById('modal_container');
// const close = document.getElementById('close')
//  console.log(open)
// open.addEventListener('click'; () =>{
//     medal_container.classList.add('show')
// };

// const open = document.querySelector('#open');
// const modal_container = document.querySelector('#modal_container');
// const close = document.querySelector('#close');


// open.addEventListener('click', function(){
// modal_container.classList.add('show');
// });


// close.addEventListener('click', function (){
//     modal_container.classList.remove('show');
// });

// modal_container.addEventListener('click', function(e){
//     if(e.open !== this) return;
//     modal_container.classList.remove('show');


// }
// })


