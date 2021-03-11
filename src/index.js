module.exports = function reverse (n) {
    
  let str = n.toString().split('').reverse().join('');
  let number = parseInt(str,10) ;
  return number;
}
