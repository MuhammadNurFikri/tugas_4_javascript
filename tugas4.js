// variabel dengan nilai tinggi badan 
var soleh = 150;
var oyen = 180;
var anabul = 170;


// menentukan tinggi badan tertinggi
let tertinggi;

if (oyen > anabul && oyen > soleh) {
	tertinggi = oyen;
}else if (anabul > oyen && anabul > soleh) {
	tertinggi= anabul;
}else {
	tertinggi = soleh;
}


// menampilkan hasil urutan tinggi badan 
function tinggi_badan() {
	if (tertinggi == oyen) {
		console.log("Siswa dengan tinggi badan tertinggi adalah Oyen dengan tinggi " + oyen + " cm");
		if (anabul > soleh) {
			console.log("Siswa dengan tinggi badan kedua adalah anabul dengan tinggi " + anabul + " cm");
			console.log("Siswa dengan tinggi badan ketiga adalah soleh dengan tinggi " + soleh + " cm");
		}
	}
}

console.log("Urutan Tinggi Badan (Siswa Oyen : " + oyen + " cm" + ", Siswa Anabul : " + anabul + " cm" + ", Siswa Soleh : " + soleh + " cm" + ")")
tinggi_badan()