
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
const esp = document.querySelector('.esp');
const en = document.querySelector('.en');
const lang = document.querySelector('.lang');
const btnQuit = document.querySelector('.btn-quit');
const brg = document.querySelector('.btn-brg');
var brge = document.querySelector('.burgerbtn');
const menu = document.querySelector('.menu-afteR');
const pj3 = document.querySelector('.pj3');
const pj4 = document.querySelector('.pj4');
const fill = document.querySelector('.asd');
const pj5 = document.querySelector('.pj5');
const btnlinks = document.querySelectorAll("#linkbtnmenu");
const upper = document.querySelector(".upperThings");
const arrow = document.querySelector('.downArrow');
const container1 = document.querySelector(".firstPart__container");
const afterBar = document.querySelector('.afterBar');
const afterSpan = document.querySelector('.afterSpan');
const projectCard= document.querySelectorAll('.projectCard');
const h4 = document.querySelectorAll('.prjah4');
const referrerContent = document.querySelector(".referrerContent");
const referrerparraf = document.querySelector(".referrersparraf");
const referrersTitle = document.querySelector(".referrers");
const rt = document.querySelector(".referrers");
const wm = document.querySelector(".wm");
const sm3 = document.querySelector('.whats');





document.addEventListener('scroll', ()=> {
    var y = scrollY;
    scrollY === 20;
    if(y >= 20 ){
        upper.classList.add('upperThingS');
        arrow.classList.add('downArroW');
    }else if(y < 20){
        upper.classList.remove('upperThingS');
        arrow.classList.remove('downArroW');
    };

});


brg.addEventListener('click', ()=> {
    menu.classList.toggle('menu-after');
});


btnQuit.addEventListener('click', ()=> {
    menu.classList.toggle('menu-after');
});


light.addEventListener('click', ()=> {
    light.classList.toggle('lightT');
    dark.classList.toggle('dark');
    container1.style.background = "#fff";
    referrerContent.style.background = "#fff";
    pj3.style.color= "#000";
    referrersTitle.style.color= "#000";
   afterBar.style.background = "#000";
   referrerparraf.style.color = "#000"
   afterSpan.style.background = "#fff";
   projectCard.forEach(i => {
    i.style.background = "#fff";
   })
   h4.forEach(i => {
    i.style.color= "#000"
   })

    
});

dark.addEventListener('click', ()=> {
    light.classList.toggle('lightT');
    dark.classList.toggle('dark');
    container1.style.background = "#000";
    referrerContent.style.background = "#000";
    referrerparraf.style.color = "#fff"
    pj3.style.color= "#fff";
    referrersTitle.style.color= "#fff";
    afterBar.style.background = "#fff";
    afterSpan.style.background = "#000";
    h4.forEach(i => {
        i.style.color= "#fff"
       });

       projectCard.forEach(i => {
        i.style.background = "#000";
       });


});

en.addEventListener('click',()=>{
    en.classList.toggle('eN');
    esp.classList.toggle('esP');
    pj3.innerHTML = "Water easily and with less responsibility";
    pj4.innerHTML = "known for";
    pj5.innerHTML = "projects of which  we are part:";
    rt.innerHTML = "Referrers";
    wm.innerHTML = "work method"
})

esp.addEventListener('click',()=>{
    en.classList.toggle('eN');
    esp.classList.toggle('esP');
    rt.innerHTML = "Referentes";
    pj3.innerHTML = "Riegue fácilmente y con menos responsabilidad";
    pj4.innerHTML = "conocidos por";
    pj5.innerHTML = "proyectos de los cuales fuimos parte:";
    wm.innerHTML = "método de trabajo"
})

document.addEventListener('scroll', ()=> {
    var y = scrollY;
    if(y > 25){
        fill.classList.add('asdE');
        brg.classList.add('burgerBtN');
    }else  if(y < 25){
        fill.classList.remove('asdE');
        brg.classList.remove('burgerBtN');
    }
});


btnlinks.forEach((item)=> {
    item.addEventListener('click', ()=> {
        menu.classList.remove("menu-after");
    })
})





function darkTheme(background, text) {
    background.style.background = "#000";
    text.style.color= "#fff";
}

function lightTheme(background, text){
background.style.background = "#fff";
text.style.color= "#000";
}




