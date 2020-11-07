const dogs = [
    // { name: 'Sammy' },
    // { name: 'Roscoe' },
    // { name: 'Artichoke' }
];

main();

async function main() {
    await loadDogs();
    displayDogs();
}

async function loadDogs() {
    const response = await fetch('/api/dogs');
    const json = await response.json();
    for(const dog of json.dogs) {
        dogs.push(dog);
    }
}

function displayDogs() {
    for(const dog of dogs) {
        const dogElement = document.createElement('li');
        dogElement.className = 'list-group-item';
        dogElement.innerText = dog.name;

        document.getElementById('dog-list').appendChild(dogElement);
    }
}
