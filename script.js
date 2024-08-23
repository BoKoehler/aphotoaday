document.getElementById('generateBtn').addEventListener('click', function() {
    // Assume images are named photo1.jpg, photo2.jpg, etc.
    const totalImages = 16; // Update this number based on how many images you have
    const randomIndex = Math.floor(Math.random() * totalImages) + 1;
    const imageElement = document.getElementById('randomPhoto');
    imageElement.src = `images/photo${randomIndex}.jpg`;
    imageElement.classList.add('show');

    // Use an alternative quote API
    fetch('https://type.fit/api/quotes')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const randomQuote = data[Math.floor(Math.random() * data.length)];
            const quoteElement = document.getElementById('randomQuote');
            quoteElement.textContent = `"${randomQuote.text}" — ${randomQuote.author || 'Unknown'}`;
            quoteElement.classList.add('show');
        })
        .catch(error => {
            console.error('Error fetching the quote:', error);
            const quoteElement = document.getElementById('randomQuote');
            quoteElement.textContent = "Sorry, we couldn't load a quote at this time. Please try again later.";
            quoteElement.classList.add('show');
        });
});
