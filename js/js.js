
// switch active
let a = document.getElementById('item1');
let b = document.getElementById('item2');
let c = document.getElementById('item3');
let d = document.getElementById('item4');

function switchitem(id){
    if(id==='item1'){
        a.classList.remove('active');
        b.classList.remove('active');
        c.classList.remove('active');
        d.classList.remove('active');
 
        a.classList.add('active');
    }else if(id==='item2'){
        a.classList.remove('active');
        b.classList.remove('active');
        c.classList.remove('active');
        d.classList.remove('active');
 
        b.classList.add('active');
    }else if(id==='item3'){
        a.classList.remove('active');
        b.classList.remove('active');
        c.classList.remove('active');
        d.classList.remove('active');
 
        c.classList.add('active');
    }else if(id==='item4'){
        a.classList.remove('active');
        b.classList.remove('active');
        c.classList.remove('active');
        d.classList.remove('active');
 
        d.classList.add('active');
    }
}


// scroll

window.onscroll = function(){
    let value =scrollY;
    console.log(value);
    if(value>=2735)
    {
        a.classList.remove('active');
        b.classList.remove('active');
        c.classList.remove('active');
        d.classList.remove('active');
 
        d.classList.add('active');

    }else if(value>=2193){
        a.classList.remove('active');
        b.classList.remove('active');
        c.classList.remove('active');
        d.classList.remove('active');
 
        c.classList.add('active');
    }else if(value>=1407){
        a.classList.remove('active');
        b.classList.remove('active');
        c.classList.remove('active');
        d.classList.remove('active');
 
        b.classList.add('active');
    }else if(value>=690){
        a.classList.remove('active');
        b.classList.remove('active');
        c.classList.remove('active');
        d.classList.remove('active');
 
        a.classList.add('active');
    }else{
        a.classList.remove('active');
        b.classList.remove('active');
        c.classList.remove('active');
        d.classList.remove('active');
    }
}