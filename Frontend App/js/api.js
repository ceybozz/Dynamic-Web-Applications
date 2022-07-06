//const url = 'http://127.0.0.1:8000';

const url = 'http://127.0.0.1:8000/users/';

//const url = 'https://rest-small.herokuapp.com/users/';

//console.log(fetch(url));

//R=GET
//Get All, converted to JSON for cleanest possible result to work with
function getAllJSON() {
    const result = fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
    return result;
}

//R=GET, by ID
function getById(id) {
    const completeUrl = url + '{user_id}?user_Id=' + id;

    const result = fetch(completeUrl)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
    return result;
}

// C=POST
function create(data) {
    const JSONData = JSON.stringify(data);
    console.log(JSONData);
    const result = fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSONData
    });
    return result;
}

//U=PUT
function update(data) {
    const JSONData = JSON.stringify(data);

    console.log(JSONData);
    const result = fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSONData
    });
    return result;
}

//D=DELETE
function remove(data) {
    const JSONData = JSON.stringify(data);

    console.log(JSONData);
    const result = fetch(url, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSONData
    });
    return result;
}