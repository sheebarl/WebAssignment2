let number=document.querySelectorAll('.btn1');
let solution=document.querySelector('.result');
let calchistory=document.querySelector(".history");
let addbutton=document.querySelector('.btn_plus');
let subbutton=document.querySelector('.btn_sub');
let mulbutton=document.querySelector('.btn_mul');
let divbutton=document.querySelector('.btn_div');
let equbutton=document.querySelector('.btn_equ');
let ptbutton=document.querySelector('.btn_pt');
let clrbutton=document.querySelector('.btn_clr');
let history = " ";




for(let i=0; i<number.length; i++){
    number[i].addEventListener('click',event =>{
        solution.value += number[i].value;
        console.log(number[i]);
        //addToHistory(solution.value);
    });
}

addbutton.addEventListener('click',event => {
    solution.value += '+';
});

subbutton.addEventListener('click',event => {
    solution.value += '-';
});

mulbutton.addEventListener('click',event => {
    solution.value += '*';
});

divbutton.addEventListener('click',event => {
    solution.value += '/';
});

ptbutton.addEventListener('click',event => {
    solution.value += '.';
   
});

equbutton.addEventListener('click',event => {
    let x=solution.value;
    console.log(x);
    let y=eval(x);
    solution.value=y;
    addToHistory(x + '=' + solution.value);
   
});

clrbutton.addEventListener('click',event => {
    solution.value="";
    addToHistory(" ");
});

function addToHistory(val) {
   // history='';
    history = history + val +'\n';
   calchistory.innerText= history ;
}



