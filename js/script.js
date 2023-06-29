let modalWindow = document.querySelector('.modal-container');
let modalForm = document.querySelector('.modal-window');
let buttonModalOpen = document.querySelector('.modal-window-open-button');
let buttonModalClose = document.querySelector('.modal-close-button');

buttonModalOpen.onclick = function() {
    modalWindow.classList.add('modal-window-open');
}

buttonModalClose.onclick = function() {
    modalWindow.classList.remove('modal-window-open');
}

modalWindow.onclick = function() {
    modalWindow.classList.remove('modal-window-open');
}

modalForm.onclick = function(event) {
    event.stopPropagation();
}
