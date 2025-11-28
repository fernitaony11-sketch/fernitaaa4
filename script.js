document.getElementById("absenForm").addEventListener("submit", function(e){
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let kelas = document.getElementById("kelas").value;
    let keterangan = document.getElementById("keterangan").value;
    let waktu = new Date().toLocaleTimeString();

    let data = {
        nama: nama,
        kelas: kelas,
        keterangan: keterangan,
        waktu: waktu
    };

    let absensi = JSON.parse(localStorage.getItem("absensiPaskibra")) || [];
    absensi.push(data);
    localStorage.setItem("absensiPaskibra", JSON.stringify(absensi));

    tampilkanData();
    document.getElementById("absenForm").reset();
});

// Tampilkan data
function tampilkanData() {
    let absensi = JSON.parse(localStorage.getItem("absensiPaskibra")) || [];
    let tabel = document.getElementById("absenTable");

    tabel.innerHTML = "";

    absensi.forEach(item => {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.nama}</td>
            <td>${item.kelas}</td>
            <td>${item.keterangan}</td>
            <td>${item.waktu}</td>
        `;

        tabel.appendChild(tr);
    });
}

tampilkanData();

// Reset data
document.getElementById("resetData").addEventListener("click", function(){
    if (confirm("Yakin ingin menghapus semua data absensi?")) {
        localStorage.removeItem("absensiPaskibra");
        tampilkanData();
    }
});
