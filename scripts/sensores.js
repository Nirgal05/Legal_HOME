

function activate(id) {
    let element = document.getElementById(id);
    element.innerHTML = "Activo";
}

function deactivate(id) {
    let element = document.getElementById(id);
    element.innerHTML = "Inactivo";
}
