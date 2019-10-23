
const mainBtn = document.querySelector('#button')
const content = document.querySelector('#showlist');
const intro = document.querySelector('#intro')
const rightShowCase = document.querySelector('#rightshow')
const leftShowCase = document.querySelector('#leftshow')
const about = document.querySelector('#about')
// console.log(mainBtn);
mainBtn.addEventListener('click', showContent);
let showContentFlag = false;

// mainBtn.addEventListener('click', showContent)


 function showContent() {
    if(showContentFlag === false) {
        content.style.display = 'block';
        rightShowCase.className = 'rightshow'
        leftShowCase.className = 'leftshow'
        mainBtn.style.background = 'gray';
        mainBtn.firstChild.className = 'fa fa-close'
        showContentFlag = true;
        intro.style.display = 'none';
        about.style.display = 'inline-block'
        about.className = 'aboutmyself'
        //leftShowCase.style.display = 'none'
    }else {
        mainBtn.firstChild.className = 'fa fa-bars'
        content.style.display = 'none';
        rightShowCase.className = ''
        about.style.display = 'none'
        
        leftShowCase.className = ''
        mainBtn.style.background = 'black';
        intro.style.display = '';
        //leftShowCase.style.display = 'block'
        showContentFlag = false;
    }
    
 }
//     if(showContentFlag === false) {
//         content.style.display = 'block'
//         showContentFlag = true;
//     }else {
//         content.style.display = 'none';
//         showContentFlag = false;
//     }
//     //console.log(list)
   
// }
