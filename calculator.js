function Add(){
    document.getElementById('output').value="";
    var Value1=parseInt(document.getElementById('Value1').value);
    var Value2=parseInt(document.getElementById('Value2').value);
    output=Value1+Value2;
    document.getElementById('output').innerHTML=output;
    document.getElementById('Value1').value="";
    document.getElementById('Value2').value=output;
}
function Subract(){
    var Value1=parseInt(document.getElementById('Value1').value);
    var Value2=parseInt(document.getElementById('Value2').value);
    output=Value1-Value2;
    document.getElementById('output').innerHTML=output;
    document.getElementById('Value1').value="";
    document.getElementById('Value2').value=output;
}
function Multiply(){
    var Value1=parseInt(document.getElementById('Value1').value);
    var Value2=parseInt(document.getElementById('Value2').value);
    output=Value1*Value2;
    document.getElementById('output').innerHTML=output;
    document.getElementById('Value1').value="";
    document.getElementById('Value2').value=output;
}
function Division(){
    var Value1=parseInt(document.getElementById('Value1').value);
    var Value2=parseInt(document.getElementById('Value2').value);
    output=Value1/Value2;
    if(Value1==0 || Value2==0){
        alert("0 division not possible");
    }
    else{document.getElementById('output').innerHTML=output;}
    document.getElementById('Value1').value="";
    document.getElementById('Value2').value=output;
}