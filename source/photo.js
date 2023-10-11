const fileInput = document.getElementById('fileInput');
const photoContainer = document.querySelector('.photo-container');
const photoCounter = document.getElementById('photoCounter');

let photoCount = 0;

fileInput.addEventListener('change', (event) => {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        if (photoCount < 6) {
            const file = files[i];
            const imageURL = URL.createObjectURL(file);

            const photoDiv = document.createElement('div');
            photoDiv.classList.add('photo');

            const img = document.createElement('img');
            img.src = imageURL;

            const removeBtn = document.createElement('button');
            removeBtn.innerHTML = '&times;';
            removeBtn.classList.add('remove-photo');
            removeBtn.addEventListener('click', () => {
                photoDiv.remove();
                photoCount--;
                updatePhotoCounter();
            });

            photoDiv.appendChild(img);
            photoDiv.appendChild(removeBtn);
            photoContainer.appendChild(photoDiv);

            photoCount++;
            updatePhotoCounter();
        } else {
            alert('You can only upload up to 6 photos.');
            break;
        }
    }
});

function updatePhotoCounter() {
    photoCounter.textContent = `${photoCount}/6`;
}

// Add this event listener to handle photo clicks
photoContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const imageURL = event.target.src;
        const modal = document.getElementById('photoModal');
        const modalImg = document.getElementById('modalImage');

        modal.style.display = 'block';
        modalImg.src = imageURL;

        // Add a click event to close the modal when clicking outside the image
        modal.onclick = function () {
            modal.style.display = 'none';
        };
    }
});