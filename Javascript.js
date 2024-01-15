    //1.Menghitung gaji karyawan//
let nama = prompt("1.Masukkan nama anda")
let gaji_pokok = parseFloat(prompt("1.Masukkan Gaji Pokok anda"))
let tunj = 20/100 * gaji_pokok
let pajak = 15/100 * (gaji_pokok + tunj)
let gaji_bersih = gaji_pokok + tunj - pajak
console.log (`Nama Karyawan : ${nama}, tunjangan yang didapatkan : ${tunj}, pajak : ${pajak}, gaji bersih : ${gaji_bersih}`)

//2.Konversi jam-menit-detik ke detik//
let jam = parseFloat(prompt("2.Masukkan Berapa Jam"))
let menit = parseFloat(prompt("2.Masukkan Berapa Menit"))
let detik = parseFloat(prompt("2.Masukkan Berapa detik"))
let jumlahdetik = (jam * 3600) + (menit * 60) + detik
console.log (`2.Jadi jumlah detiknya adalah : ${jumlahdetik} detik`)

//3.Konversi detik ke jam-menit-detik //
let jumlahdetik1 = parseFloat(prompt("3.Masukkan berapa detiknya"))
let jam1 = jumlahdetik1 / 3600
let hsljam = Math.floor(jam1) 
let menit1 = jumlahdetik1 / 60 
let menit2 = Math.floor(menit1) 
let kurangjam = hsljam * 60 
let hslmenit = menit2 - kurangjam 
let kurangmenit = hslmenit * 60 
let kurangjam1 = hsljam * 3600 
let hsldetik = jumlahdetik1 - kurangmenit - kurangjam1 
console.log (`jadi ${jumlahdetik1} detik jika dikonversi menjadi ${hsljam} jam, ${hslmenit} menit ${hsldetik} detik`)

