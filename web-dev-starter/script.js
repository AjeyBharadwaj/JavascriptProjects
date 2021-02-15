function showMessage(message) {
    console.log("Replacing : '" + document.getElementById("test").innerHTML + "' with '" + message + "'");
    document.getElementById("test").innerHTML = message;
}


function print_val(value) {
    console.log("VALUE : " + value)
}

function test(val) {
    val = val+10;
}

let value=10
print_val(value)
test(200);
print_val(value)

showMessage(Math.PI)