// Soal 1
function hitunglingkaran(){
    var radius = document.getElementById("radius").value;
    if (radius > 0){
        var luas = 3.14 * radius * radius;
        var keliling = 2 * 3.14 * radius;
        document.getElementById("lingkaranOutput").innerText = "luas : " + luas + "cm², keliling :" + keliling + "cm²"; 
    }else {
        document.getElementById("lingkaranOutput").innerText = "Masukan jari-jari yang valid!";
    }
}

// soal 2
function hitungduit(){
    var rupiah = document.getElementById("rupiah").value;
    if (rupiah > 0){
        var kurs = 15.870;
        var dollar = rupiah / kurs;
        document.getElementById("hasilduit").innerText = "nilai : $ " + dollar.toFixed(2);
    } else {
        document.getElementById("hasilduit").innerText = "masukan nilai yang valid!!"
    }
}

//soal 3
function hitungpenjumlahan(){
    var bil1 = parseFloat(document.getElementById("bil1").value) || 0;

    var bil2 = parseFloat(document.getElementById("bil2").value) || 0;

    var jumlah = bil1 + bil2;
    document.getElementById("hasiljumlah").innerText =  "jumlah: " + jumlah.toFixed(2);
}