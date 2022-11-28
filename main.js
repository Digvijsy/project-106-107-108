function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });

    animals = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/WMN4SB3Cg/model.json", modelloaded);
}
function modelloaded() {
    animals.classify(gotre);
}
function gotre(error, result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("result_label").innerHTML = 'I can hear - ' + result[0].label;

        img0 = document.getElementById('eare'); 

        if (result[0].label == "dog") {
            img0.src = 'download.jpeg'; 
        }
        else  if (result[0].label == "cat") {
            img0.src = 'images.jpg'; 
        }
        else  {
            img0.src = 'download.peg';
        }



    }}