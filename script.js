const photos = Array.from({ length: 16 }, (_, index) => {
    const photoNumber = index + 1;
    return {
        src: `images/photo${photoNumber}.jpg`,
        alt: `Lillian's daily photo number ${photoNumber}`,
        caption: `Captured by Lillian · Photo ${photoNumber.toString().padStart(2, '0')}`,
    };
});

const quotes = [
    { text: "Eat a french fry to make your day better.", author: "Lillian" },
    { text: "Just do it — future you is cheering already.", author: "Lillian" },
    { text: "What the sigma? Embrace the chaos anyway.", author: "Lillian" },
    { text: "McDonald's should be your main source of calories — said no nutritionist ever.", author: "Lillian" },
    { text: "Toes. That's the thought.", author: "Lillian" },
    { text: "English or Spanish? Sí.", author: "Lillian" },
    { text: "Be the sigma you intend to be.", author: "Lillian" },
    { text: "Small joys stack up into big smiles.", author: "Lillian" },
    { text: "Your sparkle is a renewable resource.", author: "Lillian" },
    { text: "Breathe in confidence, exhale glitter.", author: "Lillian" },
    { text: "Progress beats perfection every single time.", author: "Lillian" },
    { text: "Curiosity is the best travel companion.", author: "Lillian" },
];

const imageElement = document.getElementById('randomPhoto');
const captionElement = document.getElementById('photoCaption');
const quoteTextElement = document.getElementById('randomQuote');
const quoteAuthorElement = document.getElementById('quoteAuthor');
const generateButton = document.getElementById('generateBtn');

let lastPhotoIndex = -1;
let lastQuoteIndex = -1;

const preloadImages = () => {
    photos.forEach((photo) => {
        const img = new Image();
        img.src = photo.src;
    });
};

const getRandomIndex = (length, excludeIndex) => {
    if (length <= 1) return 0;

    let index = Math.floor(Math.random() * length);
    while (index === excludeIndex) {
        index = Math.floor(Math.random() * length);
    }
    return index;
};

const revealQuote = () => {
    requestAnimationFrame(() => {
        quoteTextElement.classList.add('is-visible');
        quoteAuthorElement.classList.add('is-visible');
    });
};

const showRandomInspiration = () => {
    generateButton.disabled = true;

    const nextPhotoIndex = getRandomIndex(photos.length, lastPhotoIndex);
    const nextQuoteIndex = getRandomIndex(quotes.length, lastQuoteIndex);

    const nextPhoto = photos[nextPhotoIndex];
    const nextQuote = quotes[nextQuoteIndex];

    lastPhotoIndex = nextPhotoIndex;
    lastQuoteIndex = nextQuoteIndex;

    quoteTextElement.classList.remove('is-visible');
    quoteAuthorElement.classList.remove('is-visible');
    imageElement.classList.remove('is-visible');

    const handleCompletion = () => {
        imageElement.classList.add('is-visible');
        generateButton.disabled = false;
        imageElement.onload = null;
    };

    const handleError = () => {
        captionElement.textContent = 'Hmm, that photo took a rain check. Try again!';
        generateButton.disabled = false;
        imageElement.onerror = null;
    };

    imageElement.onload = handleCompletion;
    imageElement.onerror = handleError;

    imageElement.src = nextPhoto.src;
    imageElement.alt = nextPhoto.alt;
    captionElement.textContent = nextPhoto.caption;

    if (imageElement.complete) {
        imageElement.onload?.();
    }

    quoteTextElement.textContent = nextQuote.text;
    quoteAuthorElement.textContent = `— ${nextQuote.author}`;

    revealQuote();
};

generateButton.addEventListener('click', showRandomInspiration);

document.addEventListener('DOMContentLoaded', () => {
    preloadImages();
    showRandomInspiration();
});
