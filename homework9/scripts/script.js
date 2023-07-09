// 1
document.addEventListener ('DOMContentLoaded', function() {
  var numbersDiv = document.querySelector('.numbers');
  for (var i = 100; i >= 50; i -= 10) {
    var paragraph = document.createElement ('p');
    paragraph.textContent = i;
    numbersDiv.appendChild (paragraph); }
});

// 2
document.addEventListener ('DOMContentLoaded', function() {
  var flowers = ["Роза", "Тюльпан", "Нарцисс", "Пиона", "Ромашка"];
  var container = document.querySelector('.strings_container');
  for (var i = 0; i < flowers.length; i++) {
    var paragraph = document.createElement ('p');
    paragraph.textContent = flowers [i];
    container.appendChild (paragraph); }
});

// 3
const users = [
  { first_name: 'Иван', last_name: 'Иванов', age: 23 },
  { first_name: 'Петр', last_name: 'Петров', age: 25 },
  { first_name: 'Сидор', last_name: 'Сидоров', age: 16 },
  { first_name: 'София', last_name: 'Слободян', age: 33 },
];

let container = document.querySelector(".users_container");
for (let i = 0; i < users.length; i++) {
  let user = users[i];
  if (user.age >= 18) {
    let card = document.createElement("div");
    card.classList.add("user_card");

    let nameElement = document.createElement("p");
    nameElement.appendChild(document.createTextNode("Имя: " + user.first_name));
    let lastName = document.createElement("p");
    lastName.appendChild(document.createTextNode("Фамилия: " + user.last_name));
    let age = document.createElement("p");
    age.appendChild(document.createTextNode("Возраст: " + user.age));

    card.appendChild(nameElement);
    card.appendChild(lastName);
    card.appendChild(age);
    container.appendChild(card);
  }
}
