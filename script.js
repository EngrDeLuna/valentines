// MODAL ELEMENTS
const modal = document.getElementById("valModal");
const modalTitle = document.getElementById("modalTitle");
const modalMessage = document.getElementById("modalMessage");
const closeBtn = document.querySelector(".close-modal");

// BUTTONS
const cuteBtn = document.querySelector(".val-btn.cute");
const romanticBtn = document.querySelector(".val-btn.romantic");
const wittyBtn = document.querySelector(".val-btn.witty");

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

  // Get a random message from HTML and replace {{name}} with actual name
  const messageTemplate = getRandomMessage(type);
  const finalMessage = messageTemplate.replace(/{{name}}/g, name);

  // Set modal title and message
  modalTitle.textContent = type === "cute" ? `Hi ${name} 🥰` : `Dear ${name} ❤️`;
  modalMessage.innerHTML = finalMessage;

  // Show modal
  modal.style.display = "flex";
}

// BUTTON EVENTS
cuteBtn.addEventListener("click", () => openModal("cute"));
romanticBtn.addEventListener("click", () => openModal("romantic"));
wittyBtn.addEventListener("click", () => openModal("witty"));

// CLOSE MODAL
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// CLOSE WHEN CLICKING OUTSIDE
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});



const bgVideo = document.querySelector(".bg-video");

// Try playing the video on load
window.addEventListener("load", () => {
  bgVideo.play().catch(() => {
    // fallback for mobile: play on first user interaction
    document.body.addEventListener("touchstart", () => {
      bgVideo.play();
    }, { once: true });
  });
});









const music = document.querySelector('audio');
music.volume = 0.5; // 50% volume
