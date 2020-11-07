const dogs = [
    { name: 'Sammy' },
    { name: 'Roscoe' },
    { name: 'Artichoke' }
];

main();

async function main() {
    displayDogs();
}

function displayDogs() {
    for(const dog of dogs) {
        const dogElement = document.createElement('li');
        dogElement.className = 'list-group-item';
        dogElement.innerText = dog.name;

        document.getElementById('dog-list').appendChild(dogElement);
    }
}
