let oo=document.getElementById("logo");
oo.innerHTML=`<img src="./images/earth-modified.png" alt="" height="55vh" width="55vw" >`;
        

function bigImg(x){

    let calWeigh=1;

    let ourPlanet=`<img src="./images/earth-modified.png" alt="" height="55vh" width="55vw" >`;

    if(x.id=="ourFirst"){
        calWeigh=0.38;
        ourPlanet=`<img src="./images/mercury-modified.png" alt="" height="55vh" width="55vw" >`;
    }else if(x.id=="ourSecond") {
        ourPlanet=`<img src="./images/vv-modified.png" alt="" height="55vh" width="55vw" >`;
        calWeigh=0.91;
    }else if(x.id=="ourThird") {
        
        calWeigh=1;
    }else if(x.id=="ourFourth") {
        ourPlanet=`<img src="./images/mars-modified.png" alt="" height="55vh" width="55vw" >`;
        calWeigh=0.38;
    }else if(x.id=="ourFifth") {
        ourPlanet=`<img src="./images/jupyter-modified.png" alt="" height="55vh" width="55vw" >`;
        calWeigh=2.34;
    }else if(x.id=="ourSixth") {
        calWeigh=1.06;
        ourPlanet=`<img src="./images/saturnNew-removebg-preview.png" alt="" height="55vh" width="55vw" >`;
    }else if(x.id=="ourSeventh") {
        
        ourPlanet=`<img src="./images/uranus-modified.png" alt="" height="55vh" width="55vw" >`;
        calWeigh=0.92;
    }else if(x.id=="ourEight") {
        calWeigh=1.19;
        ourPlanet=`<img src="./images/neptune-modified.png" alt="" height="55vh" width="55vw" >`;
    }else{
        calWeigh=1;
    }

    let oo=document.getElementById("logo");
    
    oo.innerHTML=ourPlanet;
     

    let ourWeight=document.getElementById("ourInp");
    let resultWeight=(Number.parseInt(ourWeight.value))*calWeigh;
    
    
    let fillWeight=document.getElementById("resultInp");
    fillWeight.value=resultWeight;
    console.log(fillWeight.value);

}