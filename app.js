let login = prompt("Käyttäjänimi", "");
if(login === "Admin") {

    let pass = prompt("Salasana?", "");

    if (pass === "Mestari") {
        alert( "Tervetuloa!");
    } else if (pass === "" || pass ===null) {
        alert( "Peruutettu");
    } else {
        alert( "Väärä Salasana");
    }

} else if (login === "" || login === null) {
    alert("Peruutettu");
} else {
    alert( "Tuntematon Käyttäjänimi");
}
