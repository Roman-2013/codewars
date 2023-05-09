//Сумма двух наименьших положительных целых чисел
function sumTwoSmallestNumbers(numbers) {  
  let rezult=numbers.sort(function(a,b){
     return a-b;
    console.log(numbers)
  })
  return numbers[0]+numbers[1]
}

//Строка заканчивается?
function solution(str, ending){
    return str.endsWith(ending);
}

//
function stray(numbers) {
    return numbers.find(ele => numbers.indexOf(ele) === numbers.lastIndexOf(ele));
}
        
  


