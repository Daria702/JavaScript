// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком
// та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку,
// на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит
// (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)



 let urlString = 'https://jsonplaceholder.typicode.com/users'
  let urlObj = new URL(urlString);
  fetch(urlObj).then(value => value.json()).then(value => console.log(value));



fetch(urlString)
    .then(response => response.json())
    .then(users => {
        let ul = document.createElement('ul');
        for (const user of users) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.innerText = user.id + " - " + user.name;
            a.href = urlString + '/' + JSON.stringify(user.id);
            li.appendChild(a);
            ul.appendChild(li);
        }
        document.body.append(ul);
    });