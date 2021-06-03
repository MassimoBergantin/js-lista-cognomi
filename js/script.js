


// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array dove sono presenti già altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione “umana” (partendo da 1) della lista in cui il nuovo utente si trova




var usersurname = prompt("Dimmi il tuo cognome");
var listacognomi = ['Zanella','Verdi','Neri','Bossi','Alfonsi'];

listacognomi.push(usersurname);

listacognomi.sort();

document.getElementById("output").innerHTML = listacognomi;


for (var i = 0; i <= listacognomi.length; i ++); {
    document.getElementById("output").innerHTML = listacognomi;   
}
