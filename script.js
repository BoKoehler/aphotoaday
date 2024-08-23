document.getElementById('generateBtn').addEventListener('click', function() {
    // Assume images are named photo1.jpg, photo2.jpg, etc.
    const totalImages = 16; // Update this number based on how many images you have
    const randomIndex = Math.floor(Math.random() * totalImages) + 1;
    const imageElement = document.getElementById('randomPhoto');
    imageElement.src = `images/photo${randomIndex}.jpg`;
    imageElement.classList.add('show');

    // Local array of quotes
    const quotes = [
        { text: "Eat a french fry to make your day better", author: "Lillian" },
        { text: "Just do it", author: "Lillian" },
        { text: "What the sigma", author: "Lillian" },
        { text: "McDonalds should be your main source of calories", author: "Lillian" },
        { text: "Toes", author: "Lillian" },
        { text: "English or Spanish?", author: "Lillian" },
    ];

    // Select a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteElement = document.getElementById('randomQuote');
    quoteElement.textContent = `"${randomQuote.text}" — ${randomQuote.author}`;
    quoteElement.classList.add('show');
});
