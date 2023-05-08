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

// Проверить тот же случай
function sameCase(a, b){
  if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) {
    return -1;
  }
  if(a.toUpperCase()===a && b.toUpperCase()===b){
    return 1;
  }else if (a.toLowerCase()===a && b.toLowerCase()===b){
    return 1
  }else if (a.toUpperCase()===a && b.toLowerCase()===b){
    return 0;
  }else if(a.toLowerCase()===a && b.toUpperCase()===b ){
    return 0;
    }
  }

//Повтор строки
function repeatStr (n, s) {
  let a=[];
  for(let i=1;i<=n;i++){
    a.push(s);
  }
  return a.join('')
}

//Keep up the hoop
function hoopCount (n) {
 return  n>=10?  "Great, now move on to tricks":  "Keep at it until you get it";
   //your code goes here    
}


//Регулярное выражение проверяет PIN-код
function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}

//квартал года
const quarterOf = (month) => 
  month>=1 && month<=3? 1:
   month>=4 && month<=6 ? 2:
   month>=7 && month<=9 ? 3:
    4;
    
//Противоположный номер

    function opposite(number) {
  return number*-1
}
  

//Общее количество баллов
function points(games) {
  let rezult=0;
  for(let a=0;a<games.length;a++){
    var item=games[a].split(":");
    if (item[0]>item[1]){
      rezult+=3;
    }else if(item[0]===item[1]){
      rezult +=1
    }  
  }
  return rezult;
  }

//Поддельный двоичный файл
function fakeBin(x){
  var str='';
  for(let a=0;a<x.length;a++){
    if(x[a]<5){
      str+='0';
    } else {
    str+='1';
}
    }
  return str;
  }

  //Четным или нечетным
  function evenOrOdd(number) {
  if(number%2==0){
    return "Even";
  }else{
    return "Odd";
  }
  
}

//Обратные слова
function reverseWords(str) {
  // Разбиваем строку на слова
  const words = str.split(' ');
  // Переворачиваем каждое слово и сохраняем обратно в массив
  const reversedWords = words.map(word => word.split('').reverse().join(''));
  // Объединяем слова обратно в строку с пробелами
  return reversedWords.join(' ');
} 

// Итоговая оценка студента
function finalGrade (exam, projects) {
  if(exam>90 || projects>10){
    return 100;
  }else if(exam>75 && projects>=5){
    return 90;
  }else if(exam>50 && projects>=2){
    return 75;
  }else {
    return 0
  }
}

//Преобразовать число в перевернутый массив цифр
function digitize(n) {
const min = 0;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
  const number = n;
const digitsArray = number.toString().split('').reverse().map(Number);
  
  return digitsArray;
  }

  //Инвертировать значения
  function invert(array) {
return array.map(item =>item*-1)
}

//Иголка в стоге сена
function findNeedle(haystack) {
  return "found the needle at position "+haystack.indexOf('needle');
  }
  
//Сумма положительных
  function positiveSum(arr) {
  let sum=0;
  arr.map(item =>{
    if(Math.sign(item)===1){
      sum+=item
    }
  })
  return sum;
}

//Basic Mathematical Operations
function basicOp(operation, value1, value2){
  if(operation=='+'){
    return value1 + value2
  }else if (operation=='-'){
    return value1 - value2;
    }else if (operation=='*'){
    return value1 * value2
  }else {
    return value1 / value2
  }
  }

  //Reversed Strings
  function solution(str){
  return str.split('').reverse().join('');
}

//Возвращаемые строки
function greet(name){
 return "Hello, "+name+ " how are you doing today?"
}

//Серия для начинающих #1 Школьная работа с документами
function paperwork(n, m) {
  return n<0 ||m<0?0:n*m
}

//бормотание
function accum(s) {
  return s.split('').map(function(leter,index){
    return leter.toUpperCase()+leter.toLowerCase().repeat(index);
  })
  .join('-');
  }

//Противоположности притягиваются
function lovefunc(flower1, flower2){
     if(flower1 % 2!==0  && flower2 % 2===0){
    return true
  }else if(flower1 % 2==0 && flower2 % 2!==0){
    return true
  }else{
    return false
  }
     }
console.log(lovefunc(2,2))

//Вам нужен только один - Новичок
function check(a, x) {
 return a.includes(x)
}

//Обратная последовательность
 function reverseSeq(n){
  let rezult=[];
  for(let a=0;a<n;a++){
    rezult.push(n-a)
  }
  return rezult;
}

//Преобразование логических значений в строки «Да» или «Нет».
let boolToWord=( bool) => bool===true?"Yes":"No";

//
Найдите наименьшее целое число в массиве
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a,b)=>a-b)[0]
  }
}

//Удалить строковые пробелы
function noSpace(x){
  let a=/\s+/g;
  return x.replace(a,'');
}

//Grasshopper - Summation
var summation = function (num) {
  let a=0;
  for(let i=0;i<=num;i++){
    a+=i
  }
  return a;
}

//Find Maximum and Minimum Values of a List
var min = function(list){
    list.sort(function(a,b){
      return a-b
    })
    return list[0];
}

var max = function(list){
list.sort(function(a,b){
      return a-b
    })
    return list[list.length-1];
}

//Сохраняйте увлажнение!
function litres(time) {
  return Math.floor(0.5*time);
}
//Новичок - Заблудился без карты
function maps(x){
  let rezult=[];
   x.map(function(name){
    rezult.push(name*=2)
  })
return rezult;
}

//Кузнечик — персонализированное сообщение
function greet (name, owner) {
return  name===owner?"Hello boss":"Hello guest";
}

//Он выживет?
function hero(bullets, dragons){
return bullets/2>=dragons
}

//MakeUpperCase
function makeUpperCase(str) {
  return str.toUpperCase();
  // Code here
}

//Третий угол треугольника
function otherAngle(a, b) {
  return 180-(a+b);
}

//Кузнечик - Зачетная книжка
function getGrade (s1, s2, s3) {
  let rezult= (s1+s2+s3)/3;
  console.log(rezult)
  if(90<=rezult && rezult<=100){
    return "A";
  }else if (80<=rezult&&rezult<90){
    return "B";
}else if (70<=rezult&&rezult<80){
    return "C";
  }else if (60<=rezult&&rezult<70){
    return "D";
  }else {
    return "F";
  }
  }

  //Часы для начинающих серии №2
  function past(h, m, s){
 return s*1000+ m*60000+h*3600000
  //#Happy Coding! ^_^
}

//Площадь или периметр
const areaOrPerimeter = function(l , w) {
  if(l==w){
    return l*w
  }else{
    return l*2+w*2
  }
};



//Удаление элементов
function removeEveryOther(arr){
let newArr = [arr[0]];
for (let i = 2; i < arr.length; i += 2) {
  newArr.push(arr[i]);
}
return newArr
  }

//Вдвое старше
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let year=sonYearsOld*2
  let rezult=dadYearsOld-year
  return Math.abs(rezult)
}

//
Convert a string to an array
function stringToArray(string){
  return string.split(' ');
}

//Новичок - сокращай, но увеличивай
function grow(x){
  let rezult=1;
  for(let a=0;a<x.length;a++){
    rezult*=x[a]
  }
  console.log(rezult)
return rezult;
}

//Вы сделаете это?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump/mpg<=fuelLeft ? true : false;
};

//Годы кошки, годы собаки
var humanYearsCatYearsDogYears = function(humanYears) {
  let cat=0
  let dog=0
 if(humanYears==1){
   cat+=15
   dog+=15
 }else if(humanYears==2){
   cat+=24
   dog+=24
 }else {
    cat+=24+4*(humanYears-2)
    dog+=24+5*(humanYears-2)
 }
  return [humanYears,cat,dog];
}

//Двойной Чар
function doubleChar(str) {
  return [...str].map(s=>s.repeat(2)).join('');
}

//Исправьте ошибки программы распознавания символов
function correct(string){
  return(string.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S'))
  
}
