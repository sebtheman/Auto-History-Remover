document.getElementById('switchforextension').addEventListener('click', function() {
    var x = document.getElementById('switchforextension');
    var ischeckboxchecked = x.checked;
    console.log(ischeckboxchecked)
    console.log(x.checked)
    if (x.checked == true) {
        console.log("The if statement says the checkbox is checked");
    }
    else {
        console.log("The if statement says the checkbox is not checked");
    }
});