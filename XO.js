// Tentukan function untuk menghitung jumlah dari huruf X dan O yang masuk
// Result:
// X: 1
// O: 1

function countXO(str) {
    let countX = 0;
    let countO = 0;
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase(); 
      if (char === 'x') {
        countX++;
      } else if (char === 'o') {
        countO++;
      }
    }
    
    console.log(`X: ${countX}`);
    console.log(`O: ${countO}`);
  }
  
  countXO("xo");  // Output: X: 1, O: 1
  countXO("XXoo");  // Output: X: 2, O: 2
  countXO("XoXoX");  // Output: X: 3, O: 2
  