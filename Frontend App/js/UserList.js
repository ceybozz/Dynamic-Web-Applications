const userContainer = document.querySelector('ul.gallery');

console.log(userContainer);

// hanterar data från deras site
getAllJSON().then((users) => {
    //console.log('Från funktionsanrop', users);
    // loopa igenom array
    users.forEach((user) => {
        // för varje user, anrop render user
        // skicka med aktuell user i loopen
        userHTML = renderUser(user);
        // lägg till varje user i container
        userContainer.insertAdjacentHTML('beforeend', userHTML);
    });
});