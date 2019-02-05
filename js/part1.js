function sum(){
  console.log(arguments);
  let summ = 0;
  for (var i = 1; i < arguments.length; i++) {
   summ += arguments[i];
  }
  console.log(summ);
  return summ;
}
function multip(){
  let mul = 1;
  for (var i = 1; i < arguments.length; i++) {
   mul *= arguments[i]; 
  }
  console.log(mul);
  return mul;
}


function applyAll(...rest){
  if ( arguments[0] == sum ) {
   sum.apply(applyAll, arguments);
  } else {
    multip.apply(applyAll, arguments);
  }
}

applyAll(multip, 1,2,3);