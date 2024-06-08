//Unjuk Keterampilan Wan Shafiyya Lazuardi

//    Pada salah satu Latihan Full Stack Javascript, coach memberikan sebuah contoh kode menghitung 
//    huruf vokal. Pada contoh yang diberikan tersebut, coach memberikan peluang kepada Anda untuk 
//    melakukan perbaikan kode, serta memadukan dengan pembelajaran lainnya agar sesuai dengan kriteria di bawah:
//      1. Anda diminta untuk membuat sebuah aplikasi console Javascript.
//      2. Buatlah fungsi hitungVokal() yang mengembalikan object berisi jumlah huruf vokal (baik huruf vokal besar mau pun kecil).
//      3. Lengkapi tubuh program sehingga dapat dapat dipanggil dari node secara sempurna.
//      4. File kode Javascript harus disimpan dengan nama hitungVokalSempurna.js.
//      5. Cara pemanggilannya adalah: node hitungVokalSempurna.js <kalimat>
//      6. Hasil yang diharapkan adalah, sebagai contoh:


function hitungVokal(kalimat) {
    const vokal = ['A', 'I', 'U', 'E', 'O'];
    const vokalCount = {
        A: 0,
        I: 0,
        U: 0,
        E: 0,
        O: 0,
        Total: 0
    };

    for (let char of kalimat.toUpperCase()) {
        if (vokal.includes(char)) {
            vokalCount[char]++;
            vokalCount.Total++;
        }
    }

    return vokalCount;
}

function main() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.log("Silakan masukkan kalimat yang akan dihitung huruf vokalnya:");
        return;
    }

    const kalimat = args.join(" ");
   
    const hasilVokal = hitungVokal(kalimat);

    console.log(`Kalimat: ${kalimat}`);
    console.log("Jumlah huruf vokal");
    console.log("------------------");
    console.log(`A: ${hasilVokal.A}`);
    console.log(`I: ${hasilVokal.I}`);
    console.log(`U: ${hasilVokal.U}`);
    console.log(`E: ${hasilVokal.E}`);
    console.log(`O: ${hasilVokal.O}`);
    console.log(`Total: ${hasilVokal.Total}`);
}

main();

