//written by Charity Smith
// Canine Rescue
// Meet the dogs
//written Dec 12-20/ 2023

fetch('./Sprint.json')
  .then(response => response.json())
  .then(pets => {
        // Create a container to hold the pet data
        const container = document.createElement('div');
        container.id = 'PetContainer';
    
        pets.forEach(pet => {
            // Create a new div for each pet
            const petDiv = document.createElement('div');
            petDiv.className = 'pet';
        
        // Add the pet's data to the div
        petDiv.innerHTML = `
        <h2>${getName(pet)}</h2>
        <p>Satus: ${getStatus(pet)}</p>
        <p>Age: ${getAge(pet)}</p>
        <p>Breed: ${getBreed(pet)}</p>
        <p>Gender: ${getGender(pet)}</p>
        <p>Size: ${getSize(pet)}</p>
        <p>Neutered/Spayed: ${getFixed(pet)}</p>
        <p>Good with Kids: ${getKids(pet)}</p>
        <p>Good with Dogs: ${getDogs(pet)}</p>
        <p>Good with Cats: ${getCats(pet)}</p>
        `;
    
         // Add the pet's div to the container
         container.appendChild(petDiv);
    
         // Also log the data to the console
         console.log(getName(pet));
         console.log(getStatus(pet));
         console.log(getAge(pet));
         console.log(getBreed(pet));
         console.log(getGender(pet));
         console.log(getSize(pet));
         console.log(getFixed(pet));
         console.log(getKids(pet));
         console.log(getDogs(pet));
         console.log(getCats(pet));});
         // Add the container to the body of the HTML
    document.body.appendChild(container);
})
.catch(error => {
  // Handle any errors that occur while fetching the file
  console.error(error);
    });

// Name
function getName(pet) {
    return `${pet.name}`;
}

// Availability
function getStatus(pet) {
    switch (pet.AdoptionStat) {
        case "Available":
            return`${pet.name} is available for adoption.`;
        case "Pending":
            return`Adoption is pending for ${pet.name}. They will be going home soon!`;
        case "Palative foster only":
            return`${pet.name} is searching for a palative foster home to live out the rest of their days.`;
        case "Currently unavailable":
            return`${pet.name} is currently unavailable for adoption. They will available soon.`;
    }
}

// Age
function getAge(pet) {
    switch (pet.age) {
        case pet.age < 1:
            return`${pet.name} is ${pet.age} years old. Apuppy under 1.`;
        case pet.age > 7:
            return`${pet.name} is ${pet.age} years old. A senior dog.`;
        default:
            return`${pet.name} is ${pet.age} years old. An adult dog.`;
    }
}

// Breed
function getBreed(pet) {
    return pet.breed;
}

// Gender
function getGender(pet) {
    return pet.gender;
}

// Size
function getSize(pet) {
    switch (pet.breed) {
        case "Border collie":
            return`${pet.name} is a medium dog.`;
        case "Beagle":
            return`${pet.name} is a small dog.`;
        case "Golden retriever":
            return`${pet.name} is a large dog.`;
        case "Akita":
            return`${pet.name} is a medium dog.`;
        case "Greyhound":
            return`${pet.name} is a large dog.`;
        case "Chihuahua":
            return`${pet.name} is an extra small dog.`;
        case "Cane corso":
            return`${pet.name} is an extra large dog.`;
        case "Shetland sheepdog":
            return`${pet.name} is a medium dog.`
        case "Rottweiler":
            return`${pet.name} is a large dog.`
        default:
            return`${pet.name} is a dog of unknown size.`;
    }
}

// Fixed
function getFixed(pet) {
    switch (pet.isNeutered) {
        case true:
            return `Yes`
        case false:
            return `No. ${pet.name} will be neutered/spayed before they are adopted.`
    }
}

// Kids
function getKids(pet) {
    switch (pet.isGoodKids) {
        case true:
            return `Yes`;
        case false:
            return `No. ${pet.name} can not be placed in a home with kids.`;
    }
}

// Dogs
function getDogs(pet) {
    switch (pet.isGoodDogs) {
        case true:
            return `Yes`;
        case false:
            return `No. ${pet.name} can not be placed in a home with other dogs.`;
    }
}


// Cats
function getCats(pet) {
    switch (pet.isGoodCats) {
        case true:
            return `Yes`
        case false:
            return `No. ${pet.name} can not be placed in a home with cats or small animals.`
    }
}
