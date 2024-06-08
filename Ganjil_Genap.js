
//Tampilkan 5 angka ganjil dan genap pertama.
//Result:
//1 adalah ganjil
//2 adalah genap
//3 adalah ganjil
//4 adalah genap
//5 adalah ganjil

for (var i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        console.log(i + " adalah genap");
    } else {
        console.log(i + " adalah ganjil");
    }
}
