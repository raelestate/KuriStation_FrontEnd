    /** For the pop-up script */
    const addLink = document.querySelector('#add');
    const notifLink = document.querySelector('#notif');
    const accLink = document.querySelector('#account');

    const collapseSection1 = document.querySelector('#collapseSection1');
    const collapseSection2 = document.querySelector('#collapseSection2');
    const collapseSection3 = document.querySelector('#collapseSection3');

    function hideSections() {
        collapseSection1.classList.remove('show');
        collapseSection2.classList.remove('show');
        collapseSection3.classList.remove('show');
    }
    accLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior

        if (collapseSection3.classList.contains('show')) {
            collapseSection3.classList.remove('show');
        } else {
            hideSections(); // Close other sections
            collapseSection3.classList.add('show');
        }

        // Scroll to the clicked section
        scrollToSection(collapseSection1);
    });

    addLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior

        if (collapseSection1.classList.contains('show')) {
            collapseSection1.classList.remove('show');
        } else {
            hideSections(); // Close other sections
            collapseSection1.classList.add('show');
        }

        // Scroll to the clicked section
        scrollToSection(collapseSection1);
    });

    notifLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior

        if (collapseSection2.classList.contains('show')) {
            collapseSection2.classList.remove('show');
        } else {
            hideSections(); // Close other sections
            collapseSection2.classList.add('show');
        }

        // Scroll to the clicked section
        scrollToSection(collapseSection2);
    });

    // Function to scroll to a section smoothly
    function scrollToSection(section) {
        let offset = parseFloat(getComputedStyle(document.body).marginTop);
        window.scrollTo({
            top: section.offsetTop - offset,
            behavior: 'smooth' // Smooth scrolling effect
        });
    }

    
    ///This displays the Photo uploaded HEKHOKK --- For the Posting and Listing
    document.getElementById('photo-input').addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
            const uploadedImage = document.getElementById('uploaded-image');
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = 'block';
            document.querySelector('.upload-text').textContent = 'Change Image';
        };
        reader.readAsDataURL(file);
        }
    });

