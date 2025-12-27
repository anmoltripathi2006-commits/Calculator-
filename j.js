function calculateSum() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Please enter valid numbers";
        return;
    }

    let sum = a + b;
    document.getElementById("result").innerText = "Sum = " + sum;
}
