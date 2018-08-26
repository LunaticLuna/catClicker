
let CATNUMS = 5;
let names = ['a','b','c','d','e'];
class Cat{
	constructor(id,name=names[id],pic = `cat_picture${id+1}.jpeg`){
		this.name = name;
        this.clickCount = 0;
        this.pic = pic;
        this.id = id
	}
    addCount(){
        this.clickCount += 1;
    }
}

let cats = [];
for(let i = 0; i < CATNUMS;i++){
    cats.push(new Cat(i));
}
let currentCat = 0;
let isInputShown = false;
function addCat(name, pic){
    cats.push(new Cat(CATNUMS,name,pic));
    CATNUMS += 1;
    names.push(name);
}
//generate cat buttons
function generateButtons(num){
    for(let i = 0; i < num;i++){
        let mydiv = document.getElementById("catlist");
        let newcontent = document.createElement('button');
        newcontent.setAttribute("id", 'button'+i);
        const text = document.createTextNode(names[i])
        newcontent.appendChild(text);
        mydiv.appendChild(newcontent)

   
    }
}
function addButton(){
    let mydiv = document.getElementById("catlist");
    let newcontent = document.createElement('button');
    newcontent.setAttribute("id", 'button'+(CATNUMS-1));
    const text = document.createTextNode(names[CATNUMS-1])
    newcontent.appendChild(text);
    mydiv.appendChild(newcontent);
}
function updateViewCounter(id){
    $('.counter').text(cats[id].clickCount);
}
function updateViewCurrent(id){
    let pics = document.getElementsByClassName("clicker")[0];
    pics.src = cats[id].pic;
    counter = document.getElementsByClassName("counter")[0];
    counter.innerHTML = cats[id].clickCount;
}
function showInputArea(){
    var x = document.getElementById("inputs");
    x.style.display = 'block';
}
function hideInputArea(){
    var x = document.getElementById("inputs");
    x.style.display = "none";
}
//controller
function bindPic(){
    $('.clicker').click(function(){
        cats[currentCat].addCount();
        updateViewCounter(currentCat)
    })
}
function bindButtons(){
    const b = document.getElementById('catlist');
    // console.log(b.innerHTML);
    b.addEventListener("click",function(e){

        const id = e.target.id;
        console.log(id);
        const i = id.slice(6);
        console.log(i);

        updateCurrentCat(parseInt(i));
    });
}
function updateCurrentCat(id){
    currentCat = id;
    updateViewCurrent(currentCat);
}
function bindAdmin(){
    hideInputArea();
    const e = document.getElementById('admin');
    e.addEventListener('click',function(){
        showInputArea();
    })
}
function bindSubmit(){
    const e = document.getElementById('submit');
    e.addEventListener('click',function(){
        const name = document.getElementById('nameInput').value;
        const url = document.getElementById('pictureInput').value;
        addCat(name,url);
        addButton();
        hideInputArea();
    })
}
function start(){
    generateButtons(CATNUMS);
    bindButtons();
    bindPic();
    updateCurrentCat(0);
    bindAdmin();
    bindSubmit();
}
start();

