// Load Daily Photo
fetch('photos/daily.json')
    .then(response => response.json())
    .then(data => {
        const dailyPhotoSection = document.querySelector('.daily-photo');
        dailyPhotoSection.innerHTML = `
            <img src="${data.image}" alt="Daily Photo">
            <p class="date">${data.date}</p>
        `;
    })
    .catch(error => console.error('Error loading daily photo:', error));

// Load Gallery Photos
fetch('photos/gallery.json')
    .then(response => response.json())
    .then(data => {
        const photoGrid = document.querySelector('.photo-grid');
        data.forEach(photo => {
            const photoItem = document.createElement('div');
            photoItem.classList.add('photo-item');
            photoItem.innerHTML = `
                <img src="${photo.image}" alt="Gallery Photo">
                <p class="date">${photo.date}</p>
            `;
            photoGrid.appendChild(photoItem);
        });
    })
    .catch(error => console.error('Error loading gallery photos:', error));
