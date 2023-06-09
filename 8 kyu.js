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

//Тип суммы
function typeOfSum(a, b) {
  return typeof(a+b)
}

//Calculate BMI
function bmi(weight, height) {
  let a =weight/(height*height)
 if(a<=18.5){
   return "Underweight"
 }else if (a<=25){
   return "Normal"
 }else if (a<=30){
   return "Overweight"
 }else {
   return "Obese"
 }
}

//
function enough(cap, on, wait){
  return (on+wait)<=cap?0:Math.abs(cap-on-wait)

  // your code here
}
//Sum The Strings
function sumStr(a,b) {
  let rezult = Number(a)+Number(b)
  console.log(rezult)
  return String(rezult)
}

//Sentence Smash
function smash (words) {
   return words.join(' ')
};

//Разобрать хороший int из проблемы char
function getAge(inputString){
  console.log(inputString)
  return Number(inputString[0])

}

//I love you, a little , a lot, passionately ... not at all
function howMuchILoveYou(nbPetals) {
    if(nbPetals%6==1 ){
      return "I love you"
    }else if(nbPetals%6==2){
      return "a little"
    }else if(nbPetals%6==3){
      return "a lot"
}else if(nbPetals%6==4){
      return "passionately"
  }else if(nbPetals%6==5){
      return "madly"
  }else {
    return "not at all"
  }
  }


//Это даже?
function testEven(n) {
  return n%2==0?true:false;
  }

  //Ближайший лифт
  function elevator(left, right, call){
let leftDistance = Math.abs(call - left);
  let rightDistance = Math.abs(call - right);
  if (left == right) return "right";
  return leftDistance < rightDistance ? "left":"right";
}


//Grasshopper - Debug sayHello
function sayHello(name) {
  return  `Hello, ${name}`
}

//Рассчитать среднее
function findAverage(array) {
  if (array==0){
    return 0
  }
  let rezult=0
  let a=array.map(function(top){
   rezult+=top 
  })
  return rezult/array.length
}

//Convert a String to a Number!
const stringToNumber = function(str){
  // put your code here
  return Number(str);
}

//Серия для начинающих #4 Таракан
function cockroachSpeed(s) {
  return Math.floor((s/3.6)*100)
}

//
What is between?
 function between(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}


//Сумма без наибольшего и наименьшего числа
function sumArray(array) {
  if (array==null){
    return 0
  }
  let sort=array.sort(function(a,b){
    return a-b
  })
  let a=0;
  for(let y=1;y<sort.length-1;y++){
   a+= sort[y]
  }
return a
}

//Is it a palindrome?
function isPalindrome(x) {
 // var re = /[\W_]/g;
  var lowRegStr = x.toLowerCase();
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}


//Grasshopper - функция перемещения в терминальной игре
function move (position, roll) {
  return position+roll*2
  // return the new position
}

//Помогите элитному отряду бразильских войск BOPE
function magNumber(info){
  let gan=info[0]
  let street=info[info.length-1] 
  if(gan=="PT92"){
     return Math.ceil(Math.abs(((street*3)/17)))
  }else if(gan=="M4A1"|| gan=="M16A2"){
    return Math.ceil(Math.abs(((street*3)/30)))
    }else if(gan=="PSG1"){
     return Math.ceil(Math.abs(((street*3)/5)))
    }
}

//Добро пожаловать!
function greet(language) {
  let lan={
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
}
  
  if(lan[language]){
    return lan[language]
  }else{
    return 'Welcome'
  }
}

//Вернуть день
function whatday(num) {
 
  return  num==1 ? "Sunday":
  num==2 ? "Monday":
  num==3 ? "Tuesday":
  num==4 ? "Wednesday":
  num==5 ? "Thursday":
  num==6 ? "Friday":
  num==7 ? "Saturday":"Wrong, please enter a number between 1 and 7";
}

//Включите его!
function switchItUp(number){
switch(number){
    case 0:
    return "Zero";
    break;
    case 1:
    return "One";
    break;
  case 2:
    return "Two";
    break;
  case 3:
    return "Three";
    break;
  case 4:
    return "Four";
    break;
  case 5:
    return "Five";
    break;
  case 6:
    return "Six";
    break;
  case 7:
    return "Seven";
    break;
  case 8:
    return "Eight";
    break;
    case 9:
    return "Nine";
    break;
}
}

//Make a function that does arithmetic!
function arithmetic(a, b, operator){
  switch (operator){
      case "add":
      return a+b;
      break;
      case "subtract":
      return a-b;
      break;
      case "multiply":
      return a*b;
      break;
      case "divide":
      return a/b;
      break;
  }
}
//Удаление гласных
function shortcut (string) {
  let a=/[aeiuo]/gi
  return string.replace(a,'');
}

//
Grasshopper - Check for factor
function checkForFactor (base, factor) {
  if(base%factor==0){
    return true
  }else {
    return false
  }
}


//Are You Playing Banjo?
function areYouPlayingBanjo(name) {
return name[0]=='r'|| name[0]=='R'?`${name} plays banjo`:`${name} does not play banjo`
}

//Подсчет нечетных чисел ниже n
function oddCount(n){
  return Math.floor(n/2)

  //Volume of a Cuboid
  class Kata {
  static getVolumeOfCuboid= (length, width, height) => length * width *height
    // your code here
}

//
Найдите первое непоследовательное число
function firstNonConsecutive (arr) {
  if (arr.length < 2) {
    return null;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i-1] + 1) {
      return arr[i];
    }
  }
  return null;
}

//Кузнечик - Голы Месси
var laLigaGoals=43
var championsLeagueGoals=10
var copaDelReyGoals=5

var totalGoals=laLigaGoals+championsLeagueGoals+copaDelReyGoals

//Кузнечик — Отладка
function weatherInfo (temp) {
  let c=(temp-32)*(5/9)

  if (c < 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}
  

//DNA to RNA Conversion
function DNAtoRNA(dna) {
  let re=/T/gi;
  return dna.replace(re,'U')
}

//Grasshopper - Messi goals function
let goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals)=> 
laLigaGoals+copaDelReyGoals+championsLeagueGoals
  // code goes here

//Добавить длину

function addLength(s) {
  const words = s.split(' '); // Разделяем строку на слова
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const length = word.length.toString(); // Получаем длину слова и преобразуем в строку
    result.push(word + ' ' + length); // Добавляем в массив слово с длиной
  }
  return result;
}

  