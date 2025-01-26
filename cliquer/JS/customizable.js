function nextStep(stepId) {
    document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
    document.getElementById(stepId).classList.add('active');
}
  
function fakeError() {
    alert("Erreur ! Vous devez accepter les cookies essentiels.");
}
  
document.addEventListener('DOMContentLoaded', () => {
    const infiniteMenu = document.getElementById('infinite-menu');
    for (let i = 0; i < 50; i++) {
      const button = document.createElement('button');
      button.textContent = `Sous-catégorie ${i + 1}`;
      button.onclick = () => alert("Cette sous-catégorie est inutile.");
      infiniteMenu.appendChild(button);
    }
});
  
function resetSteps() {
    nextStep('step1');
}
  