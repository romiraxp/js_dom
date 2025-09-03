// TODO: write code here

// comment this to pass build
//const unusedVariable = "variable";

// for demonstration purpose only
//export default function demo(value) {
//  return `Demo: ${value}`;
//}

//console.log("app.js included");
//import { getRandomArbitrary } from "./firstshow";
//import getRandomArbitrary from "./firstshow";
document.addEventListener('DOMContentLoaded', () => {
  function getRandomValue(min, max) {
    return Math.round((Math.random() * (max - min) + min),0);
  }
  
/*  function addIcon(id) {
    return `
            <td class="cells" id=${id}><img src="../pic/goblin_small.png"></td>`
  }*/

/*  function getId() {
    const randomValue = getRandomValue(0,15);    
    const _list = document.querySelectorAll('.cells');
    for (let i = 0; i <= _list.length; i++) {
      let idValue = _list[i]['id']
      if (randomValue == idValue) {
        return idValue;
      }
    }
  }*/
  
    //let idValue = getId();  
  const showInterval = setInterval(() => {
    let randomValue = getRandomValue(0,15);    
    document.getElementById(randomValue).innerHTML = '<img src="../pic/goblin_small.png">' 
    setTimeout(() => { 
      clearInterval(showInterval); 
    }, 10000);
  },1000)

/*  const showInterval = setInterval(() => {
  document.getElementById(getId()).innerHTML = '<img src="../pic/goblin_small.png">' 
    setTimeout(() => { 
      clearInterval(showInterval); 
      //alert('stop'); 
    }, 60000);
  },1000)*/

  /*const hideInterval = setInterval(() => {
  document.getElementById(getId()).innerHTML = 'fgfg' 
  clearInterval(hideInterval);
  },2000)*/

})