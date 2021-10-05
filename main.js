NoseX=0;
NoseY=0;
difference=0;
RightWristX=0;
LeftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550 , 500);

    canvas= createCanvas(550 , 550);
    canvas.position(560 , 150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function draw(){
    document.getElementById('square_side').innerHTML = 'Width and Height of a Squre will be '+difference+'px'
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    square(NoseX, NoseY , difference);
}

function gotPoses(results){
if(results.length > 0)
{
// console.log(results);
 NoseX=results[0].pose.nose.x;
 NoseY=results[0].pose.nose.y;
 //console.log('nose x='+ NoseX +'nose y= '+ NoseY);

 RightWristX=results[0].pose.rightWrist.x;
 LeftWristX=results[0].pose.leftWrist.x;
 difference = floor(LeftWristX-RightWristX);
 console.log=('difference='+ difference +'right wrist x= '+ RightWristX +'left wrist x= '+LeftWristX);
}
}