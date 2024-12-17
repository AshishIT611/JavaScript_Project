document.getElementById("btn").addEventListener("click",()=>{
    document.getElementById("cubeVolumeFormula").innerHTML="side<sup>3</sup>";
    document.getElementById("cubeSurfaceAreaFormula").innerHTML="6*side<sup>2</sup>";
    let side=document.getElementById("cube-side").value;
    let volume=Math.pow(side,3);
    let surfaceArea=6*Math.pow(side,2);
    document.getElementById("cubeResult").innerHTML=`Volume: ${volume} Surface Area: ${surfaceArea}`;
});
document.getElementById("btn1").addEventListener("click",()=>{
    document.getElementById("sphereVolumeFormula").innerHTML="4/3*π*radius<sup>3</sup>";
    document.getElementById("sphereSurfaceAreaFormula").innerHTML="4*π*radius<sup>2</sup>";
    let side=document.getElementById("sphere-side").value;
    let volume=(4/3)*Math.PI*Math.pow(side,3);
    let surfaceArea=(4*Math.PI)*Math.pow(side,2);
    document.getElementById("sphereResult").innerHTML=`Volume: ${volume} Surface Area: ${surfaceArea}`;
});
document.getElementById("btn2").addEventListener("click",()=>{
    document.getElementById("cylinderVolumeFormula").innerHTML="π*radius<sup>2</sup>*height";
    document.getElementById("cylinderSurfaceAreaFormula").innerHTML="2*π*radius*height+2*π*radius<sup>2</sup>";
    let radius=document.getElementById("cylinder-radius").value;
    let height=document.getElementById("cylinder-height").value;
    let volume=(Math.PI)*Math.pow(radius,2)*height;
    let surfaceArea=(2*Math.PI)*radius*height+(2*Math.PI)*Math.pow(radius,2);
    document.getElementById("cylinderResult").innerHTML=`Volume: ${volume} Surface Area: ${surfaceArea}`;
});
document.getElementById("btn3").addEventListener("click",()=>{
    document.getElementById("coneVolumeFormula").innerHTML="1/3*π*radius<sup>2</sup>*height";
    document.getElementById("coneSurfaceAreaFormula").innerHTML="π*radius*height+π*radius<sup>2</sup>";
    let radius=document.getElementById("cone-radius").value;
    let height=document.getElementById("cone-height").value;
    let volume=(1/3)*(Math.PI)*Math.pow(radius,2)*height;
    let surfaceArea=(Math.PI)*radius*height+(Math.PI)*Math.pow(radius,2);
    document.getElementById("coneResult").innerHTML=`Volume: ${volume} Surface Area: ${surfaceArea}`;
});
document.getElementById("btn4").addEventListener("click",()=>{
    document.getElementById("rectangularPrismVolumeFormula").innerHTML ="length*width*height";
    document.getElementById("rectangularPrismSurfaceAreaFormula").innerHTML="2*(length*width+length*height+width*height)";
    let length=document.getElementById("rectangularPrism-length").value;
    let width=document.getElementById("rectangularPrism-width").value;
    let height=document.getElementById("rectangularPrism-height").value;
    let volume=length*width*height;
    let surfaceArea=2*(length* width+length*height+width*height);
    document.getElementById("rectangularPrismResult").innerHTML=`Volume:${volume} Surface Area:${surfaceArea}`;
});
document.getElementById("btn5").addEventListener("click",()=>{
    document.getElementById("pyramidVolumeFormula").innerHTML ="1/3*length*width*height";
    document.getElementById("pyramidSurfaceAreaFormula").innerHTML="length*width+length*height+width*height";
    let length=document.getElementById("pyramid-length").value;
    let height=document.getElementById("pyramid-heigth").value;
    let width=document.getElementById("pyramid-width").value;
    let volume=(1/3)*length*width*height;
    let surfaceArea=length*width+length*height+width*height;
    document.getElementById("pyramidResult").innerHTML=`Volume:${volume} Surface Area:${surfaceArea}`;
});
document.getElementById("btn6").addEventListener("click", () => {
    document.getElementById("tetrahedronVolumeFormula").innerHTML = "(side<sup>3</sup>)/(6√2)";
    let side = document.getElementById("tetrahedron-side").value;
    let volume = Math.pow(side, 3) / (6 * Math.sqrt(2));
    document.getElementById("tetrahedronResult").innerHTML = `Volume: ${volume}`;
});
document.getElementById("btn7").addEventListener("click", () => {
    document.getElementById("hemisphereVolumeFormula").innerHTML = "2/3*π*radius<sup>3</sup>";
    document.getElementById("hemisphereSurfaceAreaFormula").innerHTML = "3*π*radius<sup>2</sup>";
    let radius = document.getElementById("hemisphere-side").value;
    let volume = (2 / 3) * Math.PI * Math.pow(radius, 3);
    let surfaceArea = 3 * Math.PI * Math.pow(radius, 2);
    document.getElementById("hemisphereResult").innerHTML = `Volume: ${volume} Surface Area: ${surfaceArea}`;
});
document.getElementById("btn8").addEventListener("click", () => {
    document.getElementById("torusVolumeFormula").innerHTML = "(2π<sup>2</sup>)*radius<sup>2</sup>*tube radius";
    document.getElementById("torusSurfaceAreaFormula").innerHTML = "4*π<sup>2</sup>*radius*tube radius";
    let radius = document.getElementById("torus-radius").value;
    let tubeRadius = document.getElementById("torus-tube-radius").value;
    let volume = (2 * Math.PI * Math.PI) * Math.pow(tubeRadius, 2) * radius;
    let surfaceArea = (4 * Math.PI * Math.PI) * tubeRadius * radius;
    document.getElementById("torusResult").innerHTML = `Volume: ${volume} Surface Area: ${surfaceArea}`;
});