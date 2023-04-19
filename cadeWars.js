
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

