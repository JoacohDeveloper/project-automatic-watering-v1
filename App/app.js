
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
const ourWork = document.querySelector('.ourWorkText');
const upper = document.querySelector(".upperThings");
const arrow = document.querySelector('.downArrow');
const container1 = document.querySelector(".firstPart__container");
const afterBar = document.querySelector('.afterBar');
const afterSpan = document.querySelector('.afterSpan');
const projectCard= document.querySelectorAll('.projectCard');
const h4 = document.querySelectorAll('.prjah4');
const contactTitle = document.querySelector('.contactTitle');
const referrerContent = document.querySelector(".referrerContent");
const referrerparraf = document.querySelector(".referrersparraf");
const referrersTitle = document.querySelector(".referrers");
const rt = document.querySelector(".referrers");
const wm = document.querySelector(".wm");
const sm3 = document.querySelector('.whats');
const hreftext1 = document.querySelectorAll('.hreftext1'); 
const priceItem = document.querySelectorAll('.item'); 
const priceText = document.querySelectorAll('.pricestext'); 
const contact = document.querySelector('.contactContainer')
const submit = document.querySelector('#submit');
const pricesFText = document.querySelector('.pricesFText');
const pricesTitle = document.querySelector('.pricesTitle');





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

   priceItem.forEach((e)=>{
    e.style.background = "#fff"
   })

   priceText.forEach((e)=> {
    e.style.color = "#000"
   })

           contact.style.background = "#5a5a5a"
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

       contact.style.background = "#000"

       projectCard.forEach(i => {
        i.style.background = "#000";
       });

       priceItem.forEach((e)=>{
        e.style.background = "#000"
       })
    
       priceText.forEach((e)=> {
        e.style.color = "#fff"
       })

});

en.addEventListener('click',()=>{
    en.classList.toggle('eN');
    esp.classList.toggle('esP');
    pj3.innerHTML = "Water easily and with less responsibility";
    pj4.innerHTML = "known for";
    pj5.innerHTML = "projects of which  we are part:";
    rt.innerHTML = "Referrers";
    contactTitle.innerHTML = "Contact";
    submit.innerHTML = "submit";
    wm.innerHTML = "work method"
    pricesTitle.innerHTML = "Prices"
    pricesFText.innerHTML = "the prices of our products are in relation to certain parameters, if you have any questions you can contact us in our contact section or by whatsapp.";
    ourWork.innerHTML = "Our work method consists of the performance of each of our minimal actions, committing all our tasks to the singular resolution of themselves, in such a way that we can ensure that our work involves many skills in order to perform satisfactorily and exquisitely until the simplest functionality of it.";
    referrerparraf.innerHTML = '"With the help of our partners we were able to carry out each one of our vague imperfections at will, that is why it is worth mentioning the help of our closest partners and references in the field in an honorable way."';
    hreftext1.forEach((e) => {
        e.innerHTML = "View More...";
        
    });
})

esp.addEventListener('click',()=>{
    en.classList.toggle('eN');
    esp.classList.toggle('esP');
    rt.innerHTML = "Referentes";
    pj3.innerHTML = "Riegue fácilmente y con menos responsabilidad";
    pj4.innerHTML = "conocidos por";
    pj5.innerHTML = "proyectos de los cuales fuimos parte:";
    wm.innerHTML = "método de trabajo";
    submit.innerHTML = "enviar";
    contactTitle.innerHTML = "Contacto";
    pricesTitle.innerHTML = "Precios"
    pricesFText.innerHTML = "los precios de nuestros productos están en relación a ciertos parámetros, si tienes alguna duda puedes contactarnos en nuestra sección de contacto o por whatsapp.";
    ourWork.innerHTML = "Nuestro método de trabajo se basa en la realización de cada una de nuestras acciones mínimas, comprometiendo todas nuestras tareas a la singular resolución de las mismas, de tal manera que podemos asegurar que nuestro trabajo involucra muchas habilidades para poder desempeñarnos satisfactoria y exquisitamente hasta la más simple funcionalidad de si.";
    referrerparraf.innerHTML = "“Con la ayuda de nuestros socios pudimos llevar a cabo a nuestro antojo cada una de nuestras vagas imperfecciones, por eso vale la pena mencionar la ayuda de nuestros socios más cercanos y referentes en la materia de manera honrosa.”";
    hreftext1.forEach((e) => {
        e.innerHTML = "Ver Más...";
        
    });
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




