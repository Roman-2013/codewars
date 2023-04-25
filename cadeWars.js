
//Удаление первого и последнего символа
function removeChar(str){
 if(str<=2){
   return '';
 }else{
   return str.slice(1,-1);
 };
 }

//Сравнивает первые и последние буквы 

function feast(beast, dish) {
  return beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length-1) === dish.charAt(dish.length-1);
}

//Умножает на 8 если четное,на 9 если не четное
function multiplication(num) {
  if (num % 2 === 0) {
    return num * 8;
  } else {
    return num * 9;
  }
}



//Возвращает true если сегодняшняя дата
function isToday(date) {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}


//Функция hello world
function greet(){
  return "hello world!";
};

//Функция умноужения
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i*2;
}
//Подсчет овец 
function countSheep(num) {
  let result = '';
  for (let i = 1; i <= num; i++) {
    result = result.concat(i + ' sheep...');
  }
  return result;
}
//Возвращает цифру с 2-мя знаками после запятой
function twoDecimalPlaces(n) {
  const a = n;
const b= parseFloat( a.toFixed(2));
return b;
}
