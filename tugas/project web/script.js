const form = document.getElementById("absenForm");
const tabel = document.getElementById("dataAbsensi");

let absensi = JSON.parse(localStorage.getItem("absensi")) || [];

function tampilData() {
  tabel.innerHTML = "";
  absensi.forEach((data, index) => {
    tabel.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${data.nama}</td>
        <td>${data.nim}</td>
        <td>${data.matkul}</td>
        <td>${data.status}</td>
        <td>
          <button class="hapus" onclick="hapusData(${index})">Hapus</button>
        </td>
      </tr>
    `;
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const dataBaru = {
    nama: nama.value,
    nim: nim.value,
    matkul: matkul.value,
    status: statusbar.value,
  };

  absensi.push(dataBaru);
  localStorage.setItem("absensi", JSON.stringify(absensi));

  form.reset();
  tampilData();
});

function hapusData(index) {
  absensi.splice(index, 1);
  localStorage.setItem("absensi", JSON.stringify(absensi));
  tampilData();
}

tampilData();
