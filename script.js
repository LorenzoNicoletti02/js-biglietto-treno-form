// Funzione per calcolare il prezzo del biglietto
function calcolaPrezzo(km, eta) {
    const prezzoPerKm = 0.21;
    let prezzo = km * prezzoPerKm;

    // Applicazione sconto in base all'età
    if (eta < 18) {
        prezzo *= 0.80; // Sconto 20% per i minorenni
    } else if (eta > 65) {
        prezzo *= 0.60; // Sconto 40% per gli over 65
    }

    return prezzo.toFixed(2); // Restituisci il prezzo con 2 decimali
}

// Gestione del pulsante "Genera"
document.getElementById('generateButton').addEventListener('click', function(event) {
    event.preventDefault();

    // Ottieni i valori dai campi di input
    const nomeCognome = document.getElementById('nameInput').value;
    const km = parseFloat(document.getElementById('kmInput').value);
    const eta = parseInt(document.getElementById('ageInput').value);

    // Verifica che i campi siano validi
    if (nomeCognome === '' || isNaN(km) || isNaN(eta) || km <= 0 || eta <= 0) {
        alert('Per favore, inserisci tutti i dati correttamente.');
        return;
    }

    // Calcola il prezzo
    const prezzo = calcolaPrezzo(km, eta);

    // Mostra il risultato
    document.getElementById('ticketPrice').textContent = prezzo;
    document.getElementById('result').style.display = 'block';
});

// Gestione del pulsante "Annulla"
document.getElementById('cancelButton').addEventListener('click', function(event) {
    // Reset dei campi di input e del risultato
    document.getElementById('ticketForm').reset();
    document.getElementById('result').style.display = 'none';
});