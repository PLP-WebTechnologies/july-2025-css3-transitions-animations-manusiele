function addNumbers(a, b) {
  return a + b;
}
let globalMessage = "I'm global!";
function showScopeDemo() {
  let localMessage = "I'm local!";
  return globalMessage + ' ' + localMessage;
}
function showFunctionDemo() {
  const output = document.getElementById('function-demo-output');
  const sum = addNumbers(3, 4);
  const scopeMsg = showScopeDemo();
  output.innerHTML =
    `<strong>addNumbers(3, 4):</strong> ${sum}<br>` +
    `<strong>Scope Demo:</strong> ${scopeMsg}`;
}
function triggerBoxAnimation() {
  const box = document.getElementById('js-animated-box');
  box.classList.add('animated');
  setTimeout(() => {
    box.classList.remove('animated');
  }, 1000);
}
function toggleModal() {
  const modal = document.getElementById('modal');
  modal.classList.toggle('show');
} 