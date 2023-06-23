let modalWindow = document.querySelector('.modal-container');
let modalForm = document.querySelector('.modal-window');
let buttonModalOpen = document.querySelector('.modal-window-open');
let buttonModalClose = document.querySelector('.modal-close-button');

buttonModalOpen.onclick = function() {
    modalWindow.style.display = 'flex';
}

buttonModalClose.onclick = function() {
    modalWindow.style.display = 'none';
}

modalWindow.onclick = function() {
     modalWindow.style.display = 'none';
}

modalForm.onclick = function(event) {
    event.stopPropagation();
}
