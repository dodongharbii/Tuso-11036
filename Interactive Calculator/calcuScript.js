let main = document.getElementsByTagName("body")[0];
main.style.backgroundColor = "white";


let titleName = document.getElementsByClassName("header")[0];
titleName.style.textAlign = "center";
titleName.style.fontFamily = "arial, serif";
titleName.style.backgroundColor = "white";
titleName.style.color = "black";

let inputBox = document.getElementsByClassName("tile")[0];
inputBox.style.width = "400px";
inputBox.style.height = "350px";
inputBox.style.backgroundColor = "darkGray";
inputBox.style.borderRadius = "30px";
inputBox.style.padding = "20px";

let content = document.getElementsByClassName("mainContent")[0];
content.style.width = "100vw";
content.style.height = "100vh";
content.style.display = "grid";
content.style.justifyContent = "center";

let numText = document.getElementsByClassName("number")[0];
numText.style.fontFamily = "arial, serif";

let numText1 = document.getElementsByClassName("number")[1];
numText1.style.fontFamily = "arial, serif";

let field = document.getElementsByClassName("textfield")[0];
field.style.width = "100%";
field.style.height = "35px";

let field1 = document.getElementsByClassName("textfield")[1];
field1.style.width = "100%";
field1.style.height = "35px";

let ans = document.getElementsByClassName("answer")[0];
ans.style.textAlign = "center";
ans.style.fontSize = "20px";
ans.style.color = "white";
ans.style.fontWeight = "bold";
ans.style.fontFamily = "arial, serif";

let addBtn = document.getElementsByClassName("btn-primary")[0];
addBtn.style.width = "70px";
addBtn.style.height = "50px";
addBtn.style.borderRadius = "10px";
addBtn.style.backgroundColor = "gray";
addBtn.style.color = "white";

let subtractBtn = document.getElementsByClassName("btn-primary")[1];
subtractBtn.style.width = "70px";
subtractBtn.style.height = "50px";
subtractBtn.style.borderRadius = "10px";
subtractBtn.style.backgroundColor = "gray";
subtractBtn.style.color = "white";

let multiplyBtn = document.getElementsByClassName("btn-primary")[2];
multiplyBtn.style.width = "70px";
multiplyBtn.style.height = "50px";
multiplyBtn.style.borderRadius = "10px";
multiplyBtn.style.backgroundColor = "gray";
multiplyBtn.style.color = "white";

let divideBtn = document.getElementsByClassName("btn-primary")[3];
divideBtn.style.width = "70px";
divideBtn.style.height = "50px";
divideBtn.style.borderRadius = "10px";
divideBtn.style.backgroundColor = "gray";
divideBtn.style.color = "white";

let modeBtn = document.getElementsByClassName("mode")[0];
modeBtn.style.width = "70px";
modeBtn.style.height = "50px";
modeBtn.style.borderRadius = "10px";
modeBtn.style.backgroundColor = "black";
modeBtn.style.color = "white";
modeBtn.style.marginLeft = "160px";
modeBtn.style.marginTop = "30px";

let op = document.getElementsByClassName("operations")[0];
op.style.marginLeft = "40px";

getInputValue = () =>
{
    var num1 = Number(document.getElementsByClassName("textfield")[0].value);
    var num2 = Number(document.getElementsByClassName("textfield")[1].value);
    return {num1, num2};
}

toAdd = (input) =>
{
    input.num1 != 0 && input.num2 != 0 ? ans.innerHTML = input.num1+input.num2 : ans.innerHTML = "Missing input";
}

toSubtract = (input) =>
{
    input.num1 != 0 && input.num2 != 0 ? ans.innerHTML = input.num1-input.num2 : ans.innerHTML = "Missing input";
}

toMultiply = (input) =>
{
    input.num1 != 0 && input.num2 != 0 ? ans.innerHTML = input.num1*input.num2 : ans.innerHTML = "Missing input";
}

toDivide = (input) =>
{
    input.num1 != 0 && input.num2 != 0 ? ans.innerHTML = input.num1/input.num2 : ans.innerHTML = "Missing input";
}

addBtn.addEventListener("click", function()
{
    toAdd(getInputValue());
});

subtractBtn.addEventListener("click", function()
{
    toSubtract(getInputValue());
});

multiplyBtn.addEventListener("click", function()
{
    toMultiply(getInputValue());
});

divideBtn.addEventListener("click", function()
{
    toDivide(getInputValue());
});

modeBtn.addEventListener("click", function()
{
    if(main.style.backgroundColor == "white")
    {
        main.style.backgroundColor = "black";
        titleName.style.color = "white";
        titleName.style.backgroundColor = "black";
        modeBtn.style.backgroundColor = "white";
        document.getElementsByClassName("btn")[4].innerHTML = "Light Mode";
        modeBtn.style.color = "black";
    }
    else if(main.style.backgroundColor == "black")
    {
        main.style.backgroundColor = "white";
        titleName.style.color = "black";
        titleName.style.backgroundColor = "white";
        modeBtn.style.backgroundColor = "black";
        document.getElementsByClassName("btn")[4].innerHTML = "Dark Mode";
        modeBtn.style.color = "white";
    }
})
