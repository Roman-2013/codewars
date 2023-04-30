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