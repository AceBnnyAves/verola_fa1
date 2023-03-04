function Talk(){

	//First part
	alert("...");
    alert("OH!...");
    alert("I didnt notice you there oops");
    var forename = prompt("Whats your name? I mean the name that your friends call you");
    var h = prompt("Not to intrude but can I ask about your height too? use inches pls");
    var w = prompt("Last thing, could you state for your weight too? in kilograms specifically...");
    alert("...");
    alert("Ooooh");

    //inches to foot caculator part lol
    let height = Number(h);
    let A_height = height * 0.0833333;
    let B_height = Math.trunc(A_height);
    let C_height = A_height - B_height;
    let D_height = Math.round(C_height*10);

    //kg to lbs calculator AAAAAAAA
    let weight = Number(w);
    let A_weight = weight * 2.20462;
    let B_weight = Math.trunc(A_weight);

    //Second part
    alert("Hi! " + forename + "!!\nYour height in foot is " + B_height + "'" + D_height + "''\nAnd your weight in pounds is " + B_weight + "lbs");
    alert("...");
    alert("Sorry that sounds weird, anyways can you fill this form?");
    alert("*Gives you a form paper*");
    var fn = prompt("Forename:");
    var sn = prompt("Surname:");
    var y = prompt("Year of Birth:");
    alert("*hands back paper*");

    //calculates the age from the year
    const d = new Date();
    current = d.getFullYear();
    let y_data = Number(y);
    let age = current - y_data;

    //Third part
    alert("Oh thank you");
    alert("Your full name is " + fn + " " + sn + "! and you must be " + age + " by now");
    var choice = confirm("Do you agree of me using your priv data?");

    //element id assignment
    document.getElementById("full_name").innerHTML = fn + " " + sn;
    document.getElementById("Age").innerHTML = age;
    document.getElementById("birth_year").innerHTML = y;
    document.getElementById("tall").innerHTML = B_height + "'" + D_height + "''";
    document.getElementById("heavy").innerHTML = B_weight + "lbs";
    document.getElementById("nick").innerHTML = forename;

    //the confirmation part
    if(choice == true){
	alert("Thanks! I promise I wont sell it online")
    }else{
	alert("Thats ok, dont worry")
	document.getElementById("thide").style.display = "none";
	document.getElementById("whide").style.display = "none";
	document.getElementById("nhide").style.display = "none";
	document.getElementById("hidden").style.display = "block";
    }
    alert("Thanks for everything!")
    alert("I gotta go now, pls have this... Thanks!");

    //button change
    document.getElementById("engage").style.display = "none";
    document.getElementById("button").style.display = "block";
}

function paper(){
	document.getElementById("paper").style.display = "block";
	document.getElementById("button").style.display = "none";
}