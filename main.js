Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    
    function take_snapshot(){
    Webcam.snap(function (dataURL){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+dataURL+'">';
        
    });
    
    }
    console.log('ml5.version', ml5.version);
    
    classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dyriKXpva/model.json',modelLoaded);
    
    function modelLoaded(){
        console.log('Model Loaded!')
    }
    
    function check(){
        img=document.getElementById("captured_image");
        classifier.classify(img,gotResult);
    }
    
    function gotResult(error, result){
    
        if(error){
            console.log("Error!");
        }
        else{
            console.log(result);
            document.getElementById("result_emotion_name").innerHTML=result[0].label;
            document.getElementById("result_emotion_name2").innerHTML=result[1].label;
    
            
    
        }
    
    }