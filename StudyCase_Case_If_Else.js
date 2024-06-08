// * Study Case 
// E-commerce memberikan cashback besar-besaran menggunakan coupon code. Seorang pembeli akan dapat cashback dari 
// total pembelian barang yang dia beli. Berikut rincian coupon:
// a. FreeOngkir
// Jika pembelian lebih dari atau sama dengan 50000. Maka akan ada potongan 10%. Jika pembelian antara 30000 dan 50000. Maka akan ada potongan 5%.
// Jika kurang dari 30000. Maka akan ada potongan 2.5%
// b. Free15%
// Jika pembelian lebih dari atau sama dengan 30000. Maka akan ada potongan 15%. Jika kurang dari 300000. Maka akan ada potongan 0%
// Contoh proses:
// Total pembelian 100000 dan memilih coupon FreeOngkir, maka result: "Total pembelian anda Rp. 90000 */


var price = 100000;
var couponcode = "FreeOngkir";
var total = 0;


switch (couponcode) {
    case 'FreeOngkir':
        if (price >= 5000) {
            total = price * 0.9
        } else if (price >= 30000 && price < 50000) {
            total = price * 0.95
        } else {
            total = price * 0.975
        }
        break;
    case 'Free15%':
        if (price >= 30000) {
            total = price * 0.85
        } else {
            total = price 
        }
        break;
}

console.log("Total pembelian " + price + " dan memilih coupon"+ couponcode + ". maka, Total pembayaran anda sebanyak: Rp. " + total + "'");


//pertemuan 4 
// var murid =[
//     [1, "Vincent", 3.5],
//     [2,"Udin", 3.0],
//     [3, "Mamang", 2.1]
// ]

// if (murid[2] >= 3.0) {
//     console.log ("Lulus")
// } else {
//     console.log("Gagal")
// }

// console.log(murid)