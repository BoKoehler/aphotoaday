document.getElementById('generateBtn').addEventListener('click', function() {
    // Assume images are named photo1.jpg, photo2.jpg, etc.
    const totalImages = 16; // Update this number based on how many images you have
    const randomIndex = Math.floor(Math.random() * totalImages) + 1;
    const imageElement = document.getElementById('randomPhoto');
    imageElement.src = `images/photo${randomIndex}.jpg`;
    imageElement.classList.add('show');

    // Fetch a random quote from an API
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const quoteElement = document.getElementById('randomQuote');
            quoteElement.textContent = `"${data.content}" — ${data.author}`;
            quoteElement.classList.add('show');
        })
        .catch(error => {
            console.error('Error fetching the quote:', error);
        });
});
