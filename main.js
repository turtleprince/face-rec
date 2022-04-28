Webcam.attach("#camera");
camera = document.getElementById("camera");
      
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });



function take_snap()
{
    Webcam.snap(function(captured_image) {
        document.getElementById("result").innerHTML = '<img id= "captured_image" src= "'+captured_image+'">';
       
    });
}
console.log("ml5 version : ", ml5.version);

ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json",model_Loaded);


function model_Loaded(){

console.log("Your model has been loaded");
} 