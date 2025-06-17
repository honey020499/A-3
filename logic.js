var err = "";
var required = "";

$(function() {
    function isEmail(mail) {
        var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]{2,4}$/;
        return regex.test(mail);
    }

    function numeric(value) {
        return !isNaN(value) && !isNaN(parseFloat(value));
    }
function isValidPassword(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
}
    $("#button").on("click", function() {
        err = "";
        required = "";

        if ($("#email").val() == "") {
            required += "Email is required.<br>";
        } else if (!isEmail($("#email").val())) {
            err += "Invalid email address.<br>";
        }

        if ($("#num").val() == "") {
            required += "Phone number is required.<br>";
        } else if (!numeric($("#num").val())) {
            err += "Invalid phone number.<br>";
        }

        if ($("#pass").val() == "") {
            required += "Password is required.<br>";
        } else if (!isValidPassword($("#pass").val())) {
            err += "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.<br>";
        }

        if ($("#pass").val() !== $("#conpass").val()) {
            err += "Passwords do not match.<br>";
        }

        if (err == "" && required == "") {
            $("#errors").html("You are registered.");
        } else {
            $("#errors").html(err + required);
        }
    });
});
