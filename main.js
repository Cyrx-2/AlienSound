function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/f8n3rlCo-/model.json", modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error , results)
{
    console.log("gotResult");
    if(error)
    {
        console.error(error)
    }
    else
    {
        console.log(results);
        colorR = Math.floor(Math.random() * 255) +1;
        colorG = Math.floor(Math.random() * 255) +1;
        colorB = Math.floor(Math.random() * 255) +1;

        document.getElementById("result_label").innerHTML = "I can hear" + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accruacy =" + (results[0].confidence*100).toFixed(2) +"%";
        document.getElementById("result_label").style.color = "rgb("+ colorR+","+colorG+","+colorB+")";
        document.getElementById("result_confidence").style.color = "rgb("+ colorR+","+colorG+","+colorB+")";

        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");

        if(results[0].label == "clapping")
        {
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png"
        }
        if(results[0].label == "Background Noise")
        {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png"
        }
        if(results[0].label == "crunching")
        {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png"
        }
        if(results[0].label == "tapping")
        {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif"
        }
    }
    
}
