const game=document.querySelector('.game');
const msgcont=document.querySelector('.msgcont');
const msg=document.querySelector('.msg');
const cont=document.querySelector('.container');
const boxes=document.querySelectorAll('.box');
const re=document.querySelector('.restart');
const ng=document.querySelector('.new');
let turn0=true;
const win=[[1,2,3],
[4,5,6],
[7,8,9],
[1,4,7],
[2,5,8],
[3,6,9],
[1,5,9],
[3,5,7]]
boxes.forEach(box=>{
    box.addEventListener('click',()=>{
    if(turn0){
        box.textContent='0';
        box.style.backgroundColor='green';
        turn0=false;
        box.disabled=true;
        check();
    }
    else{
        box.textContent='X';
        box.style.backgroundColor='green';
        turn0=true;
        box.disabled=true;
        check();
    }
    })
})
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.textContent='';
    }
}
const show=(won)=>{
    msgcont.classList.remove('hide');
    msg.innerText=`Game Over !!
    Congrats Winner is ${won}`;
    cont.classList.add('hide');
    boxes.forEach(box => box.classList.add('hide'));
    re.classList.add('hide');
    ng.classList.remove('hide');
    disable();
}
const check=()=>{
    
    for(let pattern of win){
        let p1=boxes[pattern[0]-1].textContent;
        let p2=boxes[pattern[1]-1].textContent;
        let p3=boxes[pattern[2]-1].textContent;
          if(p1!==""&&p2!==""&&p3!==""&&p1===p2&&p2===p3){
            show(p1);
            haswin=true;
            return;
          }
         
            
        const allBoxes = [...boxes].every((box) => box.innerText !== "");
        if (allBoxes) {
            msgcont.classList.remove('hide');
            msg.innerText = 'Match Drawn';
        cont.classList.add('hide');
    boxes.forEach(box => box.classList.add('hide'));
    re.classList.add('hide');
    ng.classList.remove('hide');
    disable();
    }
};
         }
re.addEventListener('click',()=>{
 window.location.reload();
})
ng.addEventListener('click',()=>{
 window.location.reload();
})