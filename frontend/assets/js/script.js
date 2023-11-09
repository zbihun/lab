import {
    addItemToPage,
    renderItemsList,
} from "./dom_util.js"

const clearButton = document.getElementById("clear_button");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search_button");
const calculateButton = document.getElementById("calculate_button");
const resultPlace = document.getElementById("result");
const sortZoos = document.getElementById("sort_button");
const tab1 = document.getElementById("tab-1");
const tab2 = document.getElementById("tab-2");
const tab2_link = document.getElementById("tab2-link");


const createForm = document.getElementById("page2");
const editForm = document.getElementById("page3");
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tab2_link.addEventListener("click", () => {
    createForm.style.display = "flex";
    editForm.style.display = "none";
});

tabLinks.forEach(tabLink => {
    tabLink.addEventListener('click', () => {
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        });

        const tabId = tabLink.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId);
        tabContent.classList.add('active');
    });
});


let response = await fetch("http://127.0.0.1:8000/zoo/");
let zoos = await response.json();

zoos.forEach(zoo => addItemToPage(zoo));

searchButton.addEventListener("click", () => {
    const search_zoos_by_name = zoos.filter(zoo => zoo.name.search(searchInput.value) !== -1);

    renderItemsList(search_zoos_by_name);
})

clearButton.addEventListener("click", () => {
    renderItemsList(zoos);

    searchInput.value = "";
})


function calculateTotalVisitors(zoos) {
    let totalVisitors = 0;
    for (let i = 0; i < zoos.length; i++) {
        totalVisitors += zoos[i].visitors;
    }
    return totalVisitors;
}

calculateButton.addEventListener("click", () => {
    let totalVisitors = calculateTotalVisitors(zoos);
    resultPlace.textContent = totalVisitors;
});

sortZoos.addEventListener("click", () => {
    zoos.sort((a, b) => a.animals - b.animals);
    renderItemsList(zoos);
});

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const searchValue = searchInput.value.toLowerCase();
    const filteredZoos = zoos.filter(zoo => zoo.name.toLowerCase().includes(searchValue));
    renderItemsList(filteredZoos);
});

clearButton.addEventListener("click", (event) => {
    event.preventDefault();
    searchInput.value = "";
    renderItemsList(zoos);
});


function validateForm() {
    if (!document.getElementById('create_zoo').checkValidity()) {
        alert('Please fill in appropriate data.');
        return false;
    }
    return true;
}

document.getElementById('create_zoo').addEventListener('submit', function (event) {
    if (!validateForm()) {
        return;
    }
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('http://127.0.0.1:8000/zoo/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    })
        .then(response => response.json())
        .then(data => {
            console.log("Added data", data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

document.getElementById('edit_zoo').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const id = document.getElementById('edit-id').value;
    console.log({id});
    fetch(`http://127.0.0.1:8000/zoo/${id}/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    })
        .then(response => response.json())
        .then(data => {
            console.log("Edited data", data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

const editButtons = document.getElementsByClassName("edit_button");
Array.prototype.forEach.call(editButtons, function (el) {
    el.addEventListener("click", () => {
        tab1.classList.remove('active');
        tab2.classList.add('active');
        const id = el.getAttribute("a").replace("item-", "");
        fetch(`http://127.0.0.1:8000/zoo/${id}/`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('edit-id').value = id;
            document.getElementById('edit_name_input').value = data.name;
            document.getElementById('edit_amount_of_animals_input').value = data.animals;
            document.getElementById('edit_visitors_per_year_input').value = data.visitors;
            createForm.style.display = "none";
            editForm.style.display = "flex";
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

const deleteButtons = document.getElementsByClassName("delete_button");
Array.prototype.forEach.call(deleteButtons, function (el) {
    el.addEventListener("click", () => {
        const id = el.getAttribute("a").replace("item-", "");
        fetch(`http://127.0.0.1:8000/zoo/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log("Deleted data", data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});
