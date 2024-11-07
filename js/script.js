function calculateBMI() {
    // Mendapatkan nilai dari input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // cm ke meter
    const age = parseInt(document.getElementById('age').value);

    // Validasi input
    if (isNaN(weight) || weight <= 0) {
        alert("Masukkan berat badan yang valid!");
        return;
    }
    if (isNaN(height) || height <= 0) {
        alert("Masukkan tinggi badan yang valid!");
        return;
    }
    if (isNaN(age) || age <= 0) {
        alert("Masukkan usia yang valid!");
        return;
    }

    // Menghitung BMI
    const bmi = weight / (height * height);

    // Menentukan kategori berdasarkan nilai BMI
    let category;
    if (bmi < 18.5) {
        category = "Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal (Ideal)";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Kelebihan Berat Badan";
    } else {
        category = "Obesitas";
    }

    // Menampilkan hasil
    document.getElementById('bmiResult').innerText = "BMI: " + bmi.toFixed(1);
    document.getElementById('bmiCategory').innerText = "Kategori: " + category;
}

function downloadResult() {
    // Membuat hasil download sederhana
    const bmiResult = document.getElementById('bmiResult').innerText;
    const bmiCategory = document.getElementById('bmiCategory').innerText;
    const result = `Hasil BMI:\n${bmiResult}\n${bmiCategory}`;

    // Membuat file teks
    const blob = new Blob([result], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Hasil_BMI.txt";
    link.click();
}
