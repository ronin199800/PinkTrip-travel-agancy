// convert numbers to persian
function numbersToPersian (el) {
    ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'].forEach((num, index) => {
        el.textContent = el.textContent.replace(new RegExp(index, 'g'), num);
    });
};

function traverseToLeaf (el) {
    if (el.childNodes.length === 0) return;

    el
        .childNodes
        .forEach(node => {
            if (node.nodeType === 3) {
                numbersToPersian(node);
                } else {
                traverseToLeaf(node);
            }
        });
};

traverseToLeaf(document.querySelector('body'));
//call  btn animation

let classes =document.querySelector('#nav-btn').classList
setInterval(()=>{
classes.toggle('shake-m')
},3000)
//navigation bar
if (matchMedia('only screen and (max-width: 992px)').matches){
    const node = document.createElement("i");
    node.setAttribute('class','fa-solid fa-bars')
    document.querySelector('#toggle-btn').appendChild(node)

    const spanNode = document.createElement('span')
    spanNode.setAttribute('class','back-menu')
    spanNode.innerHTML = 'بازگشت'
    spanNode.id = 'back'
    document.querySelector('ul.nav-items>li.nav-item .hotel').appendChild(spanNode)


    const spanNode2 = document.createElement('span')
    spanNode2.setAttribute('class','back-menu')
    spanNode2.setAttribute('id','back2')
    spanNode2.innerHTML = 'بازگشت'
    document.querySelector('ul.nav-items>li#nav-tour>ul').appendChild(spanNode2)

    //close-btn
    const close = document.createElement('span')
    close.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    close.setAttribute('class', 'close')
    close.setAttribute('id','close')
    document.querySelector('nav ul.nav-items').appendChild(close)
    document.querySelector('#close').addEventListener('click',()=>{
    document.querySelector('nav .nav-items').classList.remove('show')
    document.querySelector('ul.nav-items>li.nav-item ul.hotel').classList.remove('show')
    document.querySelector('ul.nav-items>li#nav-tour>ul').classList.remove('show')
    document.querySelectorAll('ul.nav-items>li.nav-item .hotel ul').forEach((items)=>{
        items.classList.remove('show')
    })
    document.querySelectorAll('ul.nav-items>li#nav-tour>ul>li>ul>div.tour-items-m').forEach((items)=>{
        items.classList.remove('show')
    })
})
document.querySelector('ul.nav-items>li#nav-hotel').addEventListener('click',()=>{
    document.querySelector('ul.nav-items>li.nav-item ul.hotel').classList.add('show')
    
},{capture : true})
    document.querySelector('#back').addEventListener('click',()=>{
    document.querySelector('ul.nav-items>li.nav-item ul.hotel').classList.remove('show')
})
document.querySelector('ul.nav-items>li#nav-tour').addEventListener('click',()=>{
    document.querySelector('ul.nav-items>li#nav-tour>ul').classList.add('show')
},{capture : true})
document.querySelector('#back2').addEventListener('click',()=>{
    document.querySelector('ul.nav-items>li#nav-tour>ul').classList.remove('show')

})
let supMenuLvl1 = document.querySelectorAll('ul.nav-items>li.nav-item .hotel>li')
supMenuLvl1.forEach((items)=>{
    items.addEventListener('click',(e)=>{
        const subMenuLvl1 = e.currentTarget.children[1]
        subMenuLvl1.classList.add('show')
        subMenuLvl1.classList.add('modifiy')
    })
})


let supMenu = document.querySelectorAll('ul.nav-items>li#nav-tour>ul>li>ul .tada')
supMenu.forEach((items)=>{
    items.addEventListener('click',(e)=>{
        const subMenu = e.currentTarget.nextElementSibling
        subMenu.classList.add('show')
        subMenu.classList.add('modifiy')
    })
})

document.querySelector('#toggle-btn').addEventListener('click',()=>{
    document.querySelector('nav ul.nav-items').classList.add('show')
})

}

//slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//global call btn
    const callBtn = document.createElement('a')
    callBtn.innerHTML = ' <i class="fa-solid fa-phone"></i>'
    callBtn.href = 'tel:48000082'
    callBtn.setAttribute('class','g-call')
    document.querySelector('body').appendChild(callBtn)
    let btnClasses = callBtn.classList
    setInterval(()=>{
        btnClasses.toggle('pulse')
},2500)
//new tour

function removeActive(){
    document.querySelectorAll('.new-tour-container .tour-body .tour-body-items').forEach((s)=>{
        s.classList.forEach((c)=>{
            if(c === 'active-new'){
               s.classList.remove('active-new') 
            }
        })
    }) 
    document.querySelectorAll('.new-tour-container .tour-head>span').forEach((s)=>{
        s.classList.forEach((c)=>{
            if(c === 'active-new-h'){
               s.classList.remove('active-new-h') 
            }
        })
    }) 
}
document.getElementById('khareji-h').classList.add('active-new-h')
document.getElementById('khareji-b').classList.add('active-new')

document.getElementById('dakheli-h').addEventListener('click',()=>{
    removeActive()
    document.getElementById('dakheli-h').classList.add('active-new-h')
    document.getElementById('dakheli-b').classList.add('active-new')
})
document.getElementById('khareji-h').addEventListener('click',()=>{
    removeActive()
    document.getElementById('khareji-h').classList.add('active-new-h')
    document.getElementById('khareji-b').classList.add('active-new')
})
document.getElementById('noroz-h').addEventListener('click',()=>{
    removeActive()
    document.getElementById('noroz-h').classList.add('active-new-h')
    document.getElementById('noroz-b').classList.add('active-new')
})
document.getElementById('lahze-akhari-h').addEventListener('click',()=>{
    removeActive()
    document.getElementById('lahze-akhari-h').classList.add('active-new-h')
    document.getElementById('lahze-akhari-b').classList.add('active-new')
})

function removeActiveLink(){
    document.querySelectorAll('.footer-link').forEach((s)=>{
        s.classList.forEach((c)=>{
            if(c === 'link-active'){
               s.classList.remove('link-active') 
            }
        })
    }) 
    document.querySelectorAll('.link-h>span').forEach((s)=>{
        s.classList.forEach((c)=>{
            if(c === 'link-active-h'){
               s.classList.remove('link-active-h') 
            }
        })
    }) 
}
document.getElementById('turkey-hh').classList.add('link-active-h')
document.getElementById('turkey-bb').classList.add('link-active')

document.getElementById('turkey-hh').addEventListener('click',()=>{
    removeActiveLink()
    document.getElementById('turkey-hh').classList.add('link-active-h')
    document.getElementById('turkey-bb').classList.add('link-active')
})
document.getElementById('dakheli-hh').addEventListener('click',()=>{
    removeActiveLink()
    document.getElementById('dakheli-hh').classList.add('link-active-h')
    document.getElementById('dakheli-bb').classList.add('link-active')
})
document.getElementById('khareji-hh').addEventListener('click',()=>{
    removeActiveLink()
    document.getElementById('khareji-hh').classList.add('link-active-h')
    document.getElementById('khareji-bb').classList.add('link-active')
})





































































