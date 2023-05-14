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
//Потрошители троллей
function disemvowel(str) {
  let a=/[AEIOU]/gi; 
  return str.replace(a,'');
}
        
//Округлить до следующего числа, кратного 5
function roundToNext5(n){
  return Math.ceil(n/5)*5
}

//Удалить якорь из URL
function removeUrlAnchor(url){
 

  const index = url.indexOf("#");
  if (index === -1) {
    return url;
  }
  return url.substring(0, index);
}

//Количество человек в автобусе
var number = function(busStops){
  let rezult=0;
  for(let a=0;a<busStops.length;a++){
    rezult+=busStops[a][0]
    rezult-=busStops[a][1]
      console.log(busStops[a][1])
  }return rezult
  // Good Luck!
}

//Найдите следующий идеальный квадрат!
function findNextSquare(sq) {
  let rezult =Math.sqrt(sq)
  if(Math.sqrt(sq)!==Math.floor(Math.sqrt(sq))){
     return -1
     }else {
       return (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1)
     }
}

//Highest and Lowest
function highAndLow(numbers){
  let create=numbers.split(' ').sort(function(a,b){
    return a-b;
  })
  console.log(create)
  return create[create.length-1]+' '+create[0]
}


//Sort array by string length
function sortByLength (array) {
  return array.sort(function(a,b){
    return a.length-b.length
  })
};

//Complementary DNA
function DNAStrand(dna){
  var complement = {'A': 'T', 'C': 'G', 'G': 'C', 'T': 'A'};
  var result = '';
  for (var i = 0; i < dna.length; i++) {
    result += complement[dna[i]];
  }
  return result;
}

//Бывшие и Оз
function XO(str) {
  const xCount = (str.match(/[xX]/g) || []).length;
  const oCount = (str.match(/[oO]/g) || []).length;
  return xCount === oCount;
  }








