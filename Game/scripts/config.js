function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid;
    playerConfigOverlayElement.style.display = 'block';
    backDropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backDropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    configErrorsElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();
    console.log(enteredPlayername);

    if (!enteredPlayername) { // enteredPlayerName === ''
        event.target.firstElementChild.classList.add('error');
        configErrorsElement.textContent = 'Lütfen Geçerli Bir Kullanıcı Adı Giriniz';
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;
    Players[editedPlayer - 1].name = enteredPlayername;
    closePlayerConfig();
}
