const userList = document.getElementById('user');

// hanterar data från site
getAllJSON().then((users) => {
    //console.log('Från funktionsanrop', users);
    // loopa igenom array
    users.forEach((user) => {
        // för varje user, lägg till förnamn och efternamn i dropdown
        const currentUserHTML = `
        <option value="${user.email}">
            ${user.f_name} ${user.l_name}
        </option>`;

        userList.insertAdjacentHTML("beforeend", currentUserHTML);
    });
});

function deleteUser(event) {
    //prevent default behavior of the submit button (reload page)
    event.preventDefault();
    // create user obj from values in the form input fields
    // när vi klickar på knappen 'Delete'
    const user = {
        email: userList.value
    };

    // anropa api-funktion remove
    remove(user).then(result => {
        console.log(result);
        // dirigera användaren till read
        window.location.href = '/Users/ceybo/Desktop/gik2f8-js-frontend-start/read.html';
    }).catch(error => {
        console.log(error);
    });
}