function onHomeButtonClick() {
    var newHomePageLink = document.createElement('a');
    newHomePageLink.href = 'index.html';
    document.body.appendChild(newHomePageLink);
    newHomePageLink.click();
  }
  
  document.getElementById('homeButton').addEventListener('click', onHomeButtonClick);

  // Функция для извлечения параметров из URL
  function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const queryArray = queryString.split('&');
    
    queryArray.forEach(query => {
      const pair = query.split('=');
      params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    });
  
    return params;
}

// Получаем текст из параметров URL
const queryParams = getQueryParams();
const userText = queryParams['text'] || '';
let userText2 = userText.split(',,,');
  
// Получаем элемент для отображения текста
const displayTextElement = document.getElementById('displayText');

// Функция для обновления интерфейса и привязки событий
function updateUI() {
    displayTextElement.textContent = '';

    userText2.forEach((element, index) => {
        const div = document.createElement('div');
        div.style.border = '1px solid black'; // Добавляем рамку
        div.style.padding = '10px';
        div.style.margin = '5px auto'; // Центрируем рамку
        div.style.width = '300px'; // Уменьшаем ширину рамки

        const textElement = document.createElement('p');
        textElement.textContent = element;
        div.appendChild(textElement);

        const likeButton = document.createElement('button');
        likeButton.textContent = 'Like';
        likeButton.style.marginLeft = '10px';

        const countElement = document.createElement('span');
        countElement.textContent = ' 0'; // Начальное значение голосов
        countElement.style.marginLeft = '5px';

        likeButton.addEventListener('click', () => {
            const currentCount = parseInt(countElement.textContent, 10);
            if (likeButton.classList.contains('liked')) {
                countElement.textContent = ' ' + (currentCount - 1);
                likeButton.classList.remove('liked');
            } else {
                countElement.textContent = ' ' + (currentCount + 1);
                likeButton.classList.add('liked');
            }
        });

        div.appendChild(likeButton);
        div.appendChild(countElement);

        displayTextElement.appendChild(div);
    });
}

// Проверяем, существует ли элемент с id='displayText'
if (displayTextElement) {
    updateUI();
} else {
    console.error('Element with id "displayText" not found');
}
  
// Функция для обработки нажатия на кнопку "Submit"
function onSubmitButtonClick() {
    const userInput2 = document.getElementById('userInput').value;
    userText2.push(userInput2);
    const newResult2Link = document.createElement('a');
    newResult2Link.href = 'newResult.html?text=' + encodeURIComponent(userText2.join(',,,'));
    document.body.appendChild(newResult2Link);
    newResult2Link.click();
}

// Добавляем обработчик события для кнопки "Submit"
document.getElementById('submitButton').addEventListener('click', onSubmitButtonClick);
