function onHomeButtonClick() {
  var newHomePageLink = document.createElement('a');
  newHomePageLink.href = 'index.html';
  document.body.appendChild(newHomePageLink);
  newHomePageLink.click();
}

document.getElementById('homeButton').addEventListener('click', onHomeButtonClick);

// Функция для обработки нажатия на кнопку "Submit"
function onSubmitButtonClick() {
  var userInput = document.getElementById('userInput').value;
  //document.getElementById('displayText').textContent = userInput;
  var newResultLink = document.createElement('a');
  newResultLink.href = 'newResult.html?text=' + encodeURIComponent(userInput);
  document.body.appendChild(newResultLink);
  newResultLink.click();
}

// Добавляем обработчик события для кнопки "Submit"
document.getElementById('submitButton').addEventListener('click', onSubmitButtonClick);