let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/testMark.png') {
      myImage.setAttribute('src','images/testMark2.png');
    } else {
      myImage.setAttribute('src','images/testMark.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('あなたの名前を入力してください．');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name',myName);
        myHeading.textContent = '視力は回復するよ，' + myName;
    }
    if(!localStorage.getItem('name')) {
        setUserName();
    } else {
        let storedName = localStorage.getIetm('name');
        myHeading.textContent = '視力は回復するよ' + storedName;
    }
}

myButton.onclick = function() {
    setUserName();
}