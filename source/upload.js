    ///This displays the Photo uploaded HEKHOKK --- For the Posting and Listing
    document.getElementById('photo-input').addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
            const uploadedImage = document.getElementById('uploaded-image');
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';
            document.querySelector('.upload-text').textContent = 'Tap to change Image';
        };
        reader.readAsDataURL(file);
        }
    });