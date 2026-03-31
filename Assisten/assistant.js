function Pertanyaan_1() {
    let Jawaban = document.getElementById("kotak_jawaban1");

    if (Jawaban) {
        Jawaban.innerHTML = "I'm fine, thanks for asking 😊";
    }
}

function Pertanyaan_2() {
    let Jawaban = document.getElementById("kotak_jawaban2");

    if (Jawaban.innerHTML === "") {
        Jawaban.innerHTML = "I am a simple AI created by Kai that can help users to tell about this website.";
    }
    else {
        Jawaban.innerHTML = "I am a simple AI created by Kai that can help users to tell about this website.";   
    }
}