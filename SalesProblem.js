var productProfitArray = [
  { "ProductA": -75 },
  { "ProductB": -70 },
  { "ProductC": 98 },
  { "ProductD": 5 },
  { "ProductE": -88 },
  { "ProductF": 29 },
];

function topProduct (productProfitArray) {
  var length = productProfitArray.length;
  if (length < 1) return "No Data";

  let values = [];
  productProfitArray.forEach(e => {
    values.push(Number(Object.values(e)))
  });

  var v = values.sort((b, a) => { return b - a; })[length - 1];

  return productProfitArray.find(el => Number(Object.values(el)) === v);
}

function bottomProduct (productProfitArray) {
  var length = productProfitArray.length;
  if (length < 1) return "No Data";

  let values = [];
  productProfitArray.forEach(e => {
    values.push(Number(Object.values(e)))
  });

  var v = values.sort((b, a) => { return b - a; })[0]

  return productProfitArray.find(el => Number(Object.values(el)) === v);
}

function zeroProfitProduct (productProfitArray) {
  var length = productProfitArray.length;
  if (length < 1) return "No Data";

  let values = [];
  productProfitArray.forEach(e => {
    values.push(Number(Object.values(e)))
  });

  var v = values.reduce((accumulator, currentValue) =>
        accumulator === 0 ? currentValue :
        currentValue > 0 && currentValue <= Math.abs(accumulator) ? currentValue :
        currentValue < 0 && -currentValue < Math.abs(accumulator) ? currentValue : accumulator
    , 0)

  return productProfitArray.find(el => Number(Object.values(el)) === v)
}


var topProductValue = topProduct(productProfitArray);
var bottomProductValue = bottomProduct(productProfitArray);
var zeroProfitProductValue  = zeroProfitProduct(productProfitArray);

console.log(topProductValue);
console.log(bottomProductValue);
console.log(zeroProfitProductValue);

document.write(JSON.stringify(topProductValue));
document.write(JSON.stringify(bottomProductValue));
document.write(JSON.stringify(zeroProfitProductValue));