document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const luckyButton = document.getElementById('lucky-button');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        if (query) {
            alert(`Hai cercato: ${query}`);
        } else {
            alert('Inserisci una parola chiave nella barra di ricerca.');
        }
    });

    luckyButton.addEventListener('click', () => {
        alert('Mi sento fortunato!');
    });
});
