let intro = "Enter the number of your operation: ";
let firstTwo = "\n1. Addition\n2. Subtraction";
let lastTwo = "\n3. Multiplication\n4. Division";

do
{
    let choice = Number(prompt(intro + firstTwo + lastTwo));
    if(choice < 5)
    {
        let x = Number(prompt("Enter first digit: "));
        let y = Number(prompt("Enter second digit: "));
        var answer = null;
    
        switch(choice)
        {
            case 1: alert("The sum is: " + (x + y)); break;
            case 2: alert("The difference is: " + (x - y)); break;
            case 3: alert("The product is: " + (x * y)); break;
            case 4: alert("The quotient is: " + (x / y)); break;
        }
        answer = prompt("Do you want to use calculator again? y/n: ");
    }
    else
        alert("That is an invalid choice!");
}while(answer != "n");

//submitted by Tuso, Vonne Harvey B.