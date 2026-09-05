function fetchUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then(data => {
            if (data.length > 0) {
                data.forEach(element => {
                    document.querySelector('tbody').innerHTML += `
                    <tr>
                        <th>${element.id}</th>
                        <th>${element.name}</th>
                        <th>${element.phone}</th>
                        <th>${element.email}</th>
                        <th>
                            <button id="detail" onclick="handleViewUser(${element.id})">Detail</button>
                            <button id="edit">Edit</button>
                            <button id="delete" onclick="handleDeleteUser(${element.id})">Delete</button>
                        </th>
                    </tr>
                `
                });

            }
        })

}
//call to delete user
function handleDeleteUser(userId) {
    console.log(userId);

    if (!userId) {
        alert('No user ID!');
    }

    fetch('https://jsonplaceholder.typicode.com/users/' + userId, {
        method: 'DELETE'
    })
}

let inputName = document.getElementById('name');
let inputPhone = document.getElementById('phone');
let inputEmail = document.getElementById('email');

//call to get detail user
function handleViewUser(userId) {
    if (!userId) {
        alert("No user ID!");
    }
    fetch('https://jsonplaceholder.typicode.com/users/' + userId, {
        method: 'GET'
    }).then(res => res.json())
        .then(data => {
            inputName.value = data.name;
            inputPhone.value = data.phone;
            inputEmail.value = data.email;
        })
}

//Call to create user
function handleCreateUser() {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
            //data for create
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

//call to update user
function handleUpdateUser(userId) {
    fetch('https://jsonplaceholder.typicode.com/users/' + userId, {
        method: 'PUT',
        body: JSON.stringify({
           //data for update
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


//call fetch user functionn
fetchUser();
