




/* window.addEventListener('load', changeTextOnLoad);  /* "When the entire page has 
finished loading, execute the changeTextOnLoad function."  */

function changeTextOnLoad() {
    var title = document.getElementById('title');
    title.innerText = 'Text changed on load!';
} */


/* 2.

window.addEventListener('load', andratext); 

function andratext() {
    var title = document.getElementById('title');
    title.innerHTML = '<p>hejsan!</p>';
} */



/* 3.

let btn = document.getElementById("btn");

function addlist() {
    let lista = document.getElementById("lista");
    let newElement = document.createElement('li');
    newElement.textContent = "Ny lista";
    lista.appendChild(newElement);
}

btn.addEventListener('click', addlist); */



/* 4.

let btn = document.getElementById("btn");

function addlist() {
    let btnclass = document.getElementsByClassName("btnclass");
    
    for (let i = 0; i < btnclass.length; i++) { 
       currentContent = btnclass[i].innerHTML 

       if (currentContent === "hej") {
        btnclass[i].innerHTML = "Hej på dig!";
       } else {
        btnclass[i].innerHTML = "hej";
        }
    }
}

btn.addEventListener('click', addlist); */


/* 5.

let btn = document.getElementById("btn");
let buttonclass = document.getElementsByClassName("buttonclass");
let buttonclass2 = document.getElementsByClassName("buttonclass2");

function changebutton(){    
btn.classList.remove("buttonclass")
btn.classList.add("buttonclass2")
}


btn.addEventListener('click', changebutton); */


/* 6.

let btn = document.getElementById("btn");
let buttonclass = document.getElementsByClassName("buttonclass");
let buttonclass2 = document.getElementsByClassName("buttonclass2");

function changebutton(){    
btn.classList.toggle("buttonclass")
btn.classList.toggle("buttonclass2")
}


btn.addEventListener('click', changebutton); */


/* 7.

let btn = document.getElementById("btn");
let buttonclass = document.getElementsByClassName("buttonclass");

function changebutton(){    
    const sections = document.getElementsByTagName("section");
    for (let i = 0; i < sections.length; i++) {
    sections[i].classList.add("buttonclass")
}
}

btn.addEventListener('click', changebutton); */

/* 
8 - 9  (NUMMER 9 ÄR EJ KLAR!!!)


let btn = document.getElementById("btn");
const theDiv = document.body.querySelector('div');
const theLi = document.body.getElementsByTagName('li');

function changebutton() {
    let childrenCount = theDiv.childElementCount;
        console.log("Det finns " + childrenCount + " children med tillhörande childNodes.");
            if (theDiv.hasChildNodes()) {
                let children = theDiv.childNodes;
                for (let i = 0; i < children.length; i++) {
                    theLi.innerHTML. += "!"
                    console.log(children[i].nodeName);
        }
    }
}

btn.addEventListener('click', changebutton); */



/* 10 & 11

let btn = document.getElementById("btn");
let title = document.getElementById("title");    //child//
let random = document.getElementById("random");  //parent//

function changebutton() {
    if(random.contains(title)) {
        random.removeChild(title) 
    } else {
        random.appendChild(title)
    }
}     

btn.addEventListener('click', changebutton);
 */


/* Funkar nästan, får upp null som värde?? */

/* let btn = document.getElementById("btn");
let lista = document.getElementById("lista li")
let lista2 = document.getElementById("lista2")

function moveItem (){
    lista2.prepend(lista);
}

btn.addEventListener('click', moveItem); */