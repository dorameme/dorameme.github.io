let myHeading=document.querySelector('h1');
myHeading.textContent="안녕 세상에서 제일 멋진 오빠!";

document.querySelector('html').onclick= function(){
    alert('가을이 두두둥쟝!!');
}
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
   if(mySrc === 'images/happy-gaul.png') {
   myImage.setAttribute ('src','images/queen-gaul.png');
    } else {
      myImage.setAttribute ('src','images/happy-gaul.png');
    }
}
let myButton=document.querySelector('button');
function setUserName(){
    let myName=prompt('이름이 뭐야??^ㅅ^');
    if(myName===null||!myName){
        setUserName();
    }
    else{
    localStorage.setItem('name',myName);
    myHeading.innerHTML="우아 멋져! "+myName;
    }
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName=localStorage.getItem('name');
    myHeading.innerHTML="최고다"+storedName;
}

myButton.onclick=function(){
    setUserName();
}