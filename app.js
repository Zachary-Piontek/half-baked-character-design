// import needed modules

// state
const character = {
    head: 'bird',
    middle: 'dress',
    pants: 'white',
    phrases: []
};

// components

// Designer
const designSection = document.getElementById('design-section');
const [headSelect, middleSelect, pantsSelect] = designSection.querySelectorAll('select');

headSelect.addEventListener('change', () => {
    character.head = headSelect.value;
    displayDesign();
});

console.log(headSelect);
console.log(character);
console.log(displayDesign());

middleSelect.addEventListener('change', () => {
    // *** Complete the middle select change handler
});

console.log(middleSelect);

pantsSelect.addEventListener('change', () => {
    // *** Complete the pants select change handler
});

function displayDesigner() {
    headSelect.value = character.head;
    // *** Assign the initial values of the middle select and pants select!
    middleSelect.value = character.middle;
    pantsSelect.value = character.pants;
}
console.log(character);
console.log(pantsSelect);

// AddPhrase
const addPhraseSection = document.getElementById('add-phrase-section');
const phraseInput = addPhraseSection.querySelector('input');
// *** Select the button from the add phrase section
// const phraseButton = ?;

function handleAddPhrase() {
    // *** add the current phrase value to the character phrases

    displayPhrases();
    phraseInput.value = '';
    phraseInput.focus();
}

// *** Add a click handler to the phrase button that calls handleAddPhrase

phraseInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleAddPhrase();
    }
});

// Character
const characterSection = document.getElementById('character-section');
const [headImage, middleImage, pantsImage] = characterSection.querySelectorAll('img');

function displayCharacter() {
    // *** Set the src properties for the three images.
    // You can use:
    // 'assets/character/' + <get prop value here> + '-head.png'
    // to format the correct file name
    headImage.src = 'assets/character/' + character.head + '-head.png';
    middleImage.src = 'assets/character/' + character.middle + '-middle.png';
    pantsImage.src = 'assets/character/' + character.pants + '-pants.png';
}
console.log(headImage);
console.log(pantsImage);

// Phrases
const phrasesSection = document.getElementById('phrases-section');
const phraseList = phrasesSection.querySelector('ul');

function displayPhrases() {
    phraseList.innerHTML = '';

    // ** Create an li for each phrase and append to the list
}

// page load actions
function displayDesign() {
    displayCharacter();
    displayPhrases();
}

displayDesigner();
displayDesign();


