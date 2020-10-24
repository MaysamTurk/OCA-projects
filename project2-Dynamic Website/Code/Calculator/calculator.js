input = (inputValue) => {
    if (OutPut.value != 0) {

        document.getElementById('OutPut').value += inputValue;
    } else {
        document.getElementById('OutPut').value = inputValue;
    }
}



Equa = (result) => {

    //To get the result
    var x = document.getElementById("OutPut").value;
    console.log(x);


    // For ABS
    var y = x.replace('abs(', "Math.abs(");

    //Power
    y = y.replace('p(', "Math.pow(");


    //For factorial
    Factorial = (n) => {
        var ans = 1;

        for (var i = 2; i <= n; i++)
            ans = ans * i;
        return ans;
    }
    y = y.replace('!(', 'Factorial(');


    //test the result
    try {
        var result = eval(y);
    } catch (e) {} finally {}

    //If their is an error
    var test;
    if (typeof (result) === typeof (test)) {

        document.getElementById("errors").innerText = 'Syntax Error';
    } else {
        document.getElementById("errors").innerText = ' ';

    }



    // print the result in the Answer felid
    document.getElementById("Results").innerText = `Answer:  ${result}`;

    //To write the history without repeating
    if (result != x) {
        document.getElementById("history").innerHTML +=
            `<p class='Equation'> ${x}  </p>
 <p class='Answer'>= ${result}  </p>
 `;
        // Clear the Output
        document.getElementById("OutPut").value = '0';


    }
    // print the last answer in the OutPut
    Answer = () => {
        if (OutPut.value != 0) {
            document.getElementById('OutPut').value += result;
        } else {
            document.getElementById('OutPut').value = result;
        }
    }

    clears = (x) => {
        document.getElementById(x).value = '0';
        document.getElementById(x).innerHTML = ' ';
        document.getElementById("errors").innerText = ' ';
        document.getElementById("Results").innerText = 'Answer:';
        result = 0;


    }


}


Delete = (x) => {
    //delete the error statement
    document.getElementById("errors").innerText = ' ';

    x = document.getElementById('OutPut').value;
    if (x != 'undefined' && x != 'Infinity') {

        x = x.slice(0, -1);
        document.getElementById('OutPut').value = x;
    }
    // delete full word of undefined or Infinity
    else {
        document.getElementById('OutPut').value = ' ';

    }
}

//Dark Mood
darkLightMode = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
}