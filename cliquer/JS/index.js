const refuseButton = document.getElementById("refuse");
const acceptButton = document.getElementById("accept");
const customizeButton = document.getElementById("customize");
const boomContainer = document.getElementById('boomContainer'); // GIF
const boomSound = document.getElementById('boomSound'); // Son boom
const evilLaugh = document.getElementById("siren"); // Son machiavélique

let refuseClicks = 0;
let refuseMessages = [
  "Ah vraiment ? Vous n’aimez pas partager ?",
  "50 clics restants pour valider votre refus."
];
let isScreenShaking = false;
let hasRefused = false;

refuseButton.addEventListener("mouseover", () => {
  if (!hasRefused) {
    refuseButton.textContent = getRandomHoverText(refuseButton.textContent);
  }
});

refuseButton.addEventListener("click", () => {
  if (!hasRefused) {
    alert(refuseMessages[0]);
    refuseClicks++;
    hasRefused = true;
    moveRefuseButton();
  } else {
    if (refuseClicks === 1) {
      alert(refuseMessages[1]);
      playsiren();
      refuseClicks++;
    } else if (refuseClicks < 5) {
      alert(`${5 - refuseClicks} clics restants pour valider votre refus.`);
      refuseClicks++;
    } else {
      stopsiren();
      alert("Enfin ! Vous avez refusé.");
      resetRefuseButton();
    }
  }
});

acceptButton.addEventListener("click", () => {
  alert("Merci ! Nous savons maintenant que vous êtes à Paris, que vous utilisez Chrome, et que vous aimez les cookies au chocolat.");
  if (!isScreenShaking) {
    isScreenShaking = true;
    shakeScreen();
    setTimeout(() => {
      alert("D’accord, mais nous garderons un œil sur vous. 👀");
      isScreenShaking = false;
    }, 1500);
  }
});

customizeButton.addEventListener("click", () => {
  alert("Personnalisation en cours... Préparez-vous à une expérience frustrante.");
  window.location.href = "customize.html";
});

function getRandomHoverText(currentText) {
  const texts = ["Refuser", "Non merci", "Finalement oui"];
  let newText = currentText;
  while (newText === currentText) {
    newText = texts[Math.floor(Math.random() * texts.length)];
  }
  return newText;
}

function moveRefuseButton() {
  const popup = document.querySelector(".popup");
  const maxX = popup.offsetWidth - refuseButton.offsetWidth;
  const maxY = popup.offsetHeight - refuseButton.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  refuseButton.style.position = "absolute";
  refuseButton.style.left = `${randomX}px`;
  refuseButton.style.top = `${randomY}px`;
}

function resetRefuseButton() {
  refuseButton.textContent = "Refuser";
  refuseButton.style.position = "static";
}

function shakeScreen() {
  document.body.classList.add("shake");

  setTimeout(() => {
    document.body.classList.remove("shake"); 
    boomContainer.style.display = 'block';
  
    boomSound.currentTime = 0;
    boomSound.play();
  
    setTimeout(() => {
      boomContainer.style.display = 'none'; 
  
      boomSound.pause();
      boomSound.currentTime = 0; 
    }, 1000); 
  }, 500); 
}

function playsiren() {
  siren.loop = true; 
  siren.currentTime = 0;
  siren.play();
}

function stopsiren() {
  siren.pause();
  siren.currentTime = 0;
  siren.loop = false;
}
