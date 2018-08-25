
// var cats = $(".cat");
// var buttons = $("button");

// function hideAllCats(){
// 	for (var i=0; i<cats.length; i++){
// 		$(cats[i]).hide();
// 	}
// }

// function bindButtonToCat(idNumber){
// 	$("#button"+idNumber).click(function(){
// 		hideAllCats();
// 		$("#cat"+idNumber).show();
// 	})
// }

// function bindCounterToCat(idNumber){
// 	var cat = "#cat"+idNumber
// 	$(cat).click(function(){
// 		var count = $(cat+" > .counter").text();
// 		count = parseInt(count) + 1;
// 		$(cat+" > .counter").text(count);
// 	})
// }

// for (var i=1; i<=buttons.length; i++){
// 	bindButtonToCat(i);
// }

// for (var i=1; i<=cats.length; i++){
// 	bindCounterToCat(i);
// }

// hideAllCats();
// $("#cat1").show();

const CATNUMS = 5;
const names = ['a','b','c','d','e'];
class Cat{
	constructor(id){
		this.name = names[id];
        this.clickCount = 0;
        this.pic = `cat_picture${id+1}.jpeg`;
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
function updateViewCounter(id){
    $('.counter').text(cats[id].clickCount);
}
function updateViewCurrent(id){
    let pics = document.getElementsByClassName("clicker")[0];
    pics.src = `cat_picture${id+1}.jpeg`;
    counter = document.getElementsByClassName("counter")[0];
    counter.innerHTML = cats[id].clickCount;
}
//controller
function bindPic(){
    $('.clicker').click(function(){
        cats[currentCat].addCount();
        updateViewCounter(currentCat)
    })
}
function bindButtons(){
    for(let i = 0; i < CATNUMS;i++){
        const b = document.getElementById('button'+i);
        // console.log(b.innerHTML);
        b.addEventListener("click",function(){
            updateCurrentCat(i);
        });
        // console.log("bind button"+i)
    }
}
function updateCurrentCat(id){
    console.log("change to cat"+id);
    currentCat = id;
    updateViewCurrent(currentCat);
}
function start(){
    generateButtons(CATNUMS);
    bindButtons();
    bindPic();
    updateCurrentCat(0);
}
start();

