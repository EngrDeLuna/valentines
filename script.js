// MODAL ELEMENTS
const modal = document.getElementById("valModal");
const modalTitle = document.getElementById("modalTitle");
const modalMessage = document.getElementById("modalMessage");
const closeBtn = document.querySelector(".close-modal");

// BUTTONS
const cuteBtn = document.querySelector(".val-btn.cute");
const romanticBtn = document.querySelector(".val-btn.romantic");
const wittyBtn = document.querySelector(".val-btn.witty");

// INPUT CONTAINER
const formContainer = document.querySelector(".form-container");
const buttonContainer = document.querySelector(".button");

// INPUT
const nameInput = document.getElementById("userName");

// GET RANDOM MESSAGE FROM HTML
function getRandomMessage(type) {
  const container = document.getElementById(`${type}-messages`);
  const messages = container.querySelectorAll("p");
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex].innerHTML;
}

// OPEN MODAL FUNCTION
function openModal(type) {
  const name = nameInput.value.trim();

  if (!name) {
    alert("Please enter your name first 💗");
    return;
  }

  const messageTemplate = getRandomMessage(type);
  const finalMessage = messageTemplate.replace(/{{name}}/g, name);

  modalTitle.textContent = type === "cute" ? `Hi ${name} 🥰` : `Dear ${name} ❤️`;
  modalMessage.innerHTML = finalMessage;

  modal.style.display = "flex";
}

// SHOW INITIAL MODAL ON PAGE LOAD
window.addEventListener("load", () => {
  modalTitle.textContent = "Welcome!";
  modalMessage.innerHTML = "Your Valentine message will appear here... 💌";
  modal.style.display = "flex";

  // Hide input/buttons initially
  formContainer.style.display = "none";
  buttonContainer.style.display = "none";
});

// CLOSE MODAL
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";

  // Show input and buttons after initial modal is closed
  formContainer.style.display = "block";
  buttonContainer.style.display = "block";
});

// CLOSE WHEN CLICKING OUTSIDE
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    formContainer.style.display = "block";
    buttonContainer.style.display = "block";
  }
});

// BUTTON EVENTS
cuteBtn.addEventListener("click", () => openModal("cute"));
romanticBtn.addEventListener("click", () => openModal("romantic"));
wittyBtn.addEventListener("click", () => openModal("witty"));

// BG VIDEO & MUSIC
const bgVideo = document.querySelector(".bg-video");
window.addEventListener("load", () => {
  bgVideo.play().catch(() => {
    document.body.addEventListener("touchstart", () => bgVideo.play(), { once: true });
  });
});

const bgMusic = document.getElementById("bgMusic");
window.addEventListener("load", () => {
  bgMusic.play().catch(() => {
    document.body.addEventListener("click", () => bgMusic.play(), { once: true });
  });
});
