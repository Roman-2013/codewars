//Quadrants
function quadrant(x, y) {
  if(x>=0 && y>=0){
    return 1;
  }else if(x<0 && y>=0){
    return 2;
  }else if(x<0 && y<0){
    return 3;
  }else if (x>=0 && y<0) {
    return 4;
  }
}

//Считать по Х
function countBy(x, n) {
  let z = [];
  for(let i=1;i<=n;i++){
    z.push(x*i);
  }
   return z;
}

//Сокращение имени из двух слов
function abbrevName(name){
  for(let a=1;a<name.length;a++){
    if(name[a]==" "){
      var i=name[a+1];
    }
  }
  return name[0]+"."+i; 
}

//Сокращение имени из двух слов
function abbrevName(name){
  for(let a=1;a<name.length;a++){
    if(name[a]==" "){
      var i=name[a+1];
    }
  }  
  return name[0].toUpperCase()+"."+i.toUpperCase(); 
}

//Суммарный смешанный массив
  function sumMix(x) {
  return x.reduce((acc, curr) => acc + Number(curr), 0);
}

//Считать овец...
function countSheeps(arrayOfSheep) {
  var i=0;
  for(let a=0;a<arrayOfSheep.length;a++){
    if(arrayOfSheep[a]){
      i++;
    }
    }
  return i;
}

//Транспорт в отпуске
function rentalCarCost(d) {
  if(d<3){
    return d*40;
  }else if(3 <=d && d< 7){
    return d * 40 - 20;
  }else {
    return d * 40 - 50;
  }
}

//
L1: Установить будильник
function setAlarm(employed, vacation){
  if(employed && vacation==false){
    return true;
  }else{
    return false
  }
}

//Thinkful - Logic Drills: Traffic light
function updateLight(current) {
  if(current=="green"){
    return "yellow";
  }else if(current=="yellow"){
    return "red";
  }else if(current=="red"){
    return "green";
  }
}

//Вернуть отрицательный результат
function makeNegative(num) {
 var a= String(num);
  if(a[0]==='-'){
    return Number(a)
  }return Number(-a);
  
  }

  //Побеждает самая высокая прибыль!
  function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

//Remove exclamation marks
function removeExclamationMarks(s) {
  let i=[];
  for(let a=0;a<s.length;a++){
    if(s[a]=='!'){
    delete s[a];
    }else{
      i.push(s[a])
    }
  }
  return i.join('');
}