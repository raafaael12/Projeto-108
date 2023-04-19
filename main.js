//https://teachablemachine.withgoogle.com/models/Xiz8iQXSg/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hfKSkG0HT/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)

    if(results[0].label == "Cachorro"){
      document.getElementById("imagem").src = "cachorro.jpg"
      document.getElementById("result_label").innerHTML = "Posso ouvir - Latidos"
    }
    else if(results[0].label=="Gato"){
        document.getElementById("imagem").src = "gato.jpg"
        document.getElementById("result_label").innerHTML = "Posso ouvir - Miados"
    }
    else if(results[0].label=="Pássaro"){
        document.getElementById("imagem").src = "passaro.jpg"
        document.getElementById("result_label").innerHTML = "Posso ouvir - Piados"
    }
    else{
        document.getElementById("imagem").src = "ruido.jpg"
        document.getElementById("result_label").innerHTML = "Posso ouvir - Ruídos"
}
}
}