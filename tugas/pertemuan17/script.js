function buatSegitiga(tinggi) {
  let bintang = "";
  for (let i = 1; i <= tinggi; i++) {
    for (let s = tinggi - i; s > 0; s--) {
      bintang += " ";
    }
    for (let j = 0; j < 2 * i - 1; j++) {
      bintang += "*";
    }
    bintang += "\n";
  }
  return bintang;
}

function buatBelahKetupat(tinggi) {
  let bintang = "";
  let n = Math.ceil(tinggi / 2);

  for (let i = 1; i <= n; i++) {
    for (let s = n - i; s > 0; s--) {
      bintang += " ";
    }
    for (let j = 0; j < 2 * i - 1; j++) {
      bintang += "*";
    }
    bintang += "\n";
  }

  for (let i = n - 1; i >= 1; i--) {
    for (let s = n - i; s > 0; s--) {
      bintang += " ";
    }
    for (let j = 0; j < 2 * i - 1; j++) {
      bintang += "*";
    }
    bintang += "\n";
  }

  return bintang;
}

const areaOutput = document.getElementById("hasilPola");

const polaSegitiga = buatSegitiga(5);

if (areaOutput) {
  areaOutput.innerHTML += "=== Segitiga Sama Kaki ===\n";
  areaOutput.innerHTML += polaSegitiga;
}
console.log("=== Segitiga Sama Kaki ===");
console.log(polaSegitiga);

const polaBelahKetupat = buatBelahKetupat(9);

if (areaOutput) {
  areaOutput.innerHTML += "\n=== Belah Ketupat ===\n";
  areaOutput.innerHTML += polaBelahKetupat;
}
console.log("\n=== Belah Ketupat ===");
console.log(polaBelahKetupat);
