function add()
{
    var a =  parseFloat(document.getElementById("no1").value);
    var b =  parseFloat(document.getElementById("no2").value);
    var x = a + b;
    document.getElementById("output").innerHTML = x;
}
function subt()
{
    var a =  parseFloat(document.getElementById("no1").value);
    var b =  parseFloat(document.getElementById("no2").value);
    var x = a - b;
    document.getElementById("output").innerHTML = x;
}
function mult()
{
    var a =  parseFloat(document.getElementById("no1").value);
    var b =  parseFloat(document.getElementById("no2").value);
    var x = a * b;
    document.getElementById("output").innerHTML = x;
}
function divd()
{
    var a =  parseFloat(document.getElementById("no1").value);
    var b =  parseFloat(document.getElementById("no2").value);
    var x = a / b;
    document.getElementById("output").innerHTML = x;
}