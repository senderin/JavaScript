function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}

function myFunction2() {
    var inpObj = document.getElementById("id1");
	var message=document.getElementById("demo2");
    if (!inpObj.checkValidity()) {
        message.innerHTML = inpObj.validationMessage;
    }
	
	if (inpObj.validity.rangeOverflow) {
       txt = "Value too large";
	   message.innerHTML=message.innerHTML+"<br>"+txt;
    }
	
	if (inpObj.validity.rangeUnderflow) {
       txt = "Value too small";
	   message.innerHTML=message.innerHTML+"<br>"+txt;
    }
}