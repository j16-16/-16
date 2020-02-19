var myH = document.querySelector('h1');
myH.textContent = 'Helloworld!';
document.querySelector('html').onclick = function() {
    alert('痛っ! ');
};

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/b.jpg') {
      myImage.setAttribute ('src','images/a.jpg');
    } else {
      myImage.setAttribute ('src','images/b.jpg');
    }
};

myH.onclick=function(){
  var flg;
  var flg2;　//真偽を入れる変数の宣言
  if(myH.textContent==='Helloworld!') {
    flg = confirm("Helloworld!をworld!に変えますか？"); //真偽の代入

    if (flg == true) myH.textContent = 'world!'; //真なら背景色変更
  }else{
    flg2 = confirm("world!をHelloworld!に変えますか？");
    if(flg2 == true)myH.textContent = 'Helloworld!';
  }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hellow,' + myName;
}


myButton.onclick = function() {
  setUserName();
};
