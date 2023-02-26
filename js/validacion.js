function validacion() {
    
    let nombre, telefono, correo, mensaje, expresion;
    nombre = document.getElementById("Nombre").value;
    telefono = document.getElementById("Telefono").value;
    correo = document.getElementById("Correo").value;
    mensaje = document.getElementById("Mensaje").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if (nombre === "" || telefono === "" || correo === "" || mensaje === "") {
        alert("All fields are required");
        return false;
    } else if (nombre.lenght > 30) {
        alert("The name field is too long. Minimum characters 30");
        return false;
    } else if (telefono.lenght > 10) {
        alert("The telephone field is very long. Minimum characters 10");
        return false
    } else if (isNaN(telefono)) {
        alert("The telephone field only admits numbers");
        return false;
    } else if (correo.lengtth > 50) {
        alert("The email field is too long. Minimum characters 50");
        return false
    } else if (!expresion.test(correo)) {
        alert("The email format is invalid");
        return false
    }

}