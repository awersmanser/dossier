
const chatWindow = document.querySelector(".chat-window");
const notificationOkButton = document.querySelector(".cybr-btn");
const modalWindowBackground = document.querySelector(
  ".modal-window__background"
);
const modalWindowBody = document.querySelector(".modal-window__body");
const modalWindow = document.querySelector(".modal-window");
const chatCloseButton = document.querySelector(".chat-window__close-button");
const chatOpenButton = document.querySelector(".open-chat-button");
const notificationText = document.querySelector(".modal-window__content");
const messageInput = document.querySelector(".chat-window__input-message");
const messageLenght = document.querySelector(".chat-window__message-lenght");


  
notificationOkButton.addEventListener("click", closeNotification);
modalWindowBackground.addEventListener("click", closeNotification);


function toggleChat() {
  chatWindow.classList.toggle("hidden-bottom");
  document.querySelector(".open-chat-button").classList.toggle("hidden-bottom");
}

function callNotification(text) {
  modalWindow.style.visibility = "visible";
  modalWindowBackground.style.opacity = "1";
  modalWindowBody.style.transform = "translateY(0) scale(1)";
  notificationText.textContent = text;
}

function closeNotification() {
  modalWindow.style.visibility = "hidden";
  modalWindowBackground.style.opacity = "0";
  modalWindowBody.style.transform = "translateY(200%) scale(0)";
}

function toggleHeaderMenu() {
  document.querySelector(".header-menu").classList.toggle("hidden-top");
}