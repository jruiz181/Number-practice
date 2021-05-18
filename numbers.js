
//-------------global variables--------------

var first = (document.getElementById("first"));
var second = (document.getElementById("second"));
var third = (document.getElementById("third"));
var fourth = (document.getElementById("fourth"));
var fifth = (document.getElementById("fifth"));
var sixth = (document.getElementById("sixth"));
var output = (document.getElementById("output"));

//--------Function order button----------------

function order(){
    num1= parseFloat(first.value);
    num2= parseFloat(second.value);
    num3 = parseFloat(third.value);
    num4 = parseFloat(fourth.value);
    num5 = parseFloat(fifth.value);
    num6 = parseFloat(sixth.value);

    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;

    o1 = Math.min(num1, num2, num3, num4, num5, num6);

    if (o1 === num1){
        num1 = num2;
        num2 = num3;
        num3 = num4;
        num4 = num5;
        num5 = num6;
    }else if(o1 === num2){
        num1 = num1;
        num2 = num3;
        num3 = num4;
        num4 = num5;
        num5 = num6;
    }else if(o1 === num3){
        num1 = num1;
        num2 = num2;
        num3 = num4;
        num4 = num5;
        num5 = num6;
    }else if(o1 === num4){
        num1 = num1;
        num2 = num2;
        num3 = num3;
        num4 = num5;
        num5 = num6;
    }else if(o1 === num5){
        num1 = num1;
        num2 = num2;
        num3 = num3;
        num4 = num4;
        num5 = num6;
    }else if(o1 === num6){
        num1 = num1;
        num2 = num2;
        num3 = num3;
        num4 = num4;
        num5 = num5;
    }

    o2 = Math.min(num1, num2, num3, num4, num5);

    if (o2 === num1){
        num1 = num2;
        num2 = num3;
        num3 = num4;
        num4 = num5;
    }else if(o2 === num2){
        num1 = num1;
        num2 = num3;
        num3 = num4;
        num4 = num5;
    }else if(o2 === num3){
        num1 = num1;
        num2 = num2;
        num3 = num4;
        num4 = num5;
    }else if(o2 === num4){
        num1 = num1;
        num2 = num2;
        num3 = num3;
        num4 = num5;
    }else if(o2 === num5){
        num1 = num1;
        num2 = num2;
        num3 = num3;
        num4 = num4;
    }

    o3 = Math.min(num1,num2,num3,num4);

    if (o3 === num1){
        num1 = num2;
        num2 = num3;
        num3 = num4;
        num4 = num5;
    }else if(o3 === num2){
        num1 = num1;
        num2 = num3;
        num3 = num4;
        num4 = num5;
    }else if(o3 === num3){
        num1 = num1;
        num2 = num2;
        num3 = num4;
        num4 = num5;
    }else if(o3 === num4){
        num1 = num1;
        num2 = num2;
        num3 = num3;
        num4 = num5;
    }

    o4 = Math.min(num1,num2,num3);

    if (o4 === num1){
        num1 = num2;
        num2 = num3;
        num3 = num4;
    }else if(o4 === num2){
        num1 = num1;
        num2 = num3;
        num3 = num4;
    }else if(o4 === num3){
        num1 = num1;
        num2 = num2;
        num3 = num4;
    }

    o5 = Math.min(num1,num2);
    if (o5 === num1){
        num1 = num2;
        num2 = num2;

    }else if(o5 === num2){
        num1 = num1;
        num2 = num2;

    }

    o6 = Math.min(num1);

     output.innerHTML = o1 + " , " + o2 + " , " + o3 +" , " + o4 +" , " + o5 +" , " + o6
}

//--------------function mean-------------------

function mean(){
    num1= parseFloat(first.value);
    num2= parseFloat(second.value);
    num3 = parseFloat(third.value);
    num4 = parseFloat(fourth.value);
    num5 = parseFloat(fifth.value);
    num6 = parseFloat(sixth.value);

    var mean = ( num1 + num2 + num3 + num4 + num5 + num6 ) / 6;
    console.log(mean);
    output.innerHTML = mean;
    
    return true
}

//---------------Function range--------------------

function range(){
    num1= parseFloat(first.value);
    num2= parseFloat(second.value);
    num3 = parseFloat(third.value);
    num4 = parseFloat(fourth.value);
    num5 = parseFloat(fifth.value);
    num6 = parseFloat(sixth.value);

    var large = Math.max(num1, num2, num3, num4, num5, num6);
    var small = Math.min(num1, num2, num3, num4, num5, num6);

    output.innerHTML = large - small;
    return true
}

//-------------function smallest number---------------

function small(){
    num1= parseFloat(first.value);
    num2= parseFloat(second.value);
    num3 = parseFloat(third.value);
    num4 = parseFloat(fourth.value);
    num5 = parseFloat(fifth.value);
    num6 = parseFloat(sixth.value);
    
    var small = Math.min(num1, num2, num3, num4, num5, num6);

    output.innerHTML = small;

    return true
}

//----------------function largest number-----------------

function large(){
    num1= parseFloat(first.value);
    num2= parseFloat(second.value);
    num3 = parseFloat(third.value);
    num4 = parseFloat(fourth.value);
    num5 = parseFloat(fifth.value);
    num6 = parseFloat(sixth.value);
    
    var large = Math.max(num1, num2, num3, num4, num5, num6);

    output.innerHTML = large;

    return true
}

//-----------------function middle------------------------------

function middle(){
    num1= parseFloat(first.value);
    num2= parseFloat(second.value);
    num3 = parseFloat(third.value);
    num4 = parseFloat(fourth.value);
    num5 = parseFloat(fifth.value);
    num6 = parseFloat(sixth.value);

