document.addEventListener("DOMContentLoaded", function () {
    
    const messageInput = document.getElementById("messageInput");
    const sendMessageButton = document.getElementById("sendMessageButton");
    const messageContainer = document.getElementById("messageContainer");
    const commissionButton = document.getElementById("commissionButton");
    const endProjectButton = document.getElementById("endProject");
    const sendComissionButton = document.getElementById("con");

    sendComissionButton.addEventListener("click", function () {
        submitFormAndSendMessage();
    });

    sendMessageButton.addEventListener("click", function () {
        sendMessage();
    });
    
    messageInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });

    commissionButton.addEventListener("click", function () {
        sendCommissionText();
    });


    endProjectButton.addEventListener("click", function () {
        endProjectText();
        sendRateForm();
    });

        // Initialize the modal
        const fillOutModal = new bootstrap.Modal(document.getElementById('fillOutModal'));

        function submitFormAndSendMessage() {
            // Get the values from the form fields
            const projectName = document.getElementById("projName").value;
            const projectObjectives = document.getElementById("projObj").value;
            const projectStartDate = document.getElementById("projectStartDate").value;
            const projectEndDate = document.getElementById("projectEndDate").value;
            const projectDescription = document.getElementById("projDesc").value;
            const projectAmount = document.getElementById("projAmount").value;
        
            const isFormValid = validateForm();
        
            // Check if the form is valid before proceeding
            if (isFormValid) {
                // Create a new message element with the form data
                const messageElement = document.createElement("div");
                messageElement.classList.add("container", "d-flex", "flex-row-reverse", "pt-2", "message-entry");
        
                const cardElement = document.createElement("div");
                cardElement.classList.add("card", "text-start", "h-100", "w-auto", "bg-brown", "rounded-3", "message-container", "message-display");
        
                const cardBodyElement = document.createElement("div");
                cardBodyElement.classList.add("card-body", "action");
        
                // Add form data to the message
                cardBodyElement.innerHTML = `
                    <p>Project Name : <span>${projectName}</span></p>
                    <p>Project Objectives : <span>${projectObjectives}</span></p>
                    <p>Project Start Date : <span>${projectStartDate}</span></p>
                    <p>Project End Date : <span>${projectEndDate}</span></p>
                    <p>Project Description : <span>${projectDescription}</span></p>
                    <p>Project Amount : <span>${projectAmount}</span></p>
                    <div class="text-center">
                        <button class="btn text-center w-100" data-bs-toggle="modal" data-bs-target="#triggerActionModal" onclick="openTriggerActionModal()">Trigger Actions</button>
                    </div>
                `;
        
                cardElement.appendChild(cardBodyElement);
                messageElement.appendChild(cardElement);
        
                // Append the new message element to the message container
                messageContainer.appendChild(messageElement);
        
                // Clear the form fields
                document.getElementById("projName").value = "";
                document.getElementById("projObj").value = "";
                document.getElementById("projectStartDate").value = "";
                document.getElementById("projectEndDate").value = "";
                document.getElementById("projDesc").value = "";
                document.getElementById("projAmount").value = "";
    
                fillOutModal.hide();
                
                clearError();
            }
        }
        

    function sendMessage() {
        const messageText = messageInput.value;

        if (messageText.trim() !== "") {
            // Create a new message element
            const messageElement = document.createElement("div");
            messageElement.classList.add("container", "d-flex", "flex-row-reverse", "pt-2", "message-entry");

            const cardElement = document.createElement("div");
            cardElement.classList.add("card", "text-start", "h-100", "w-auto", "bg-brown", "rounded-3", "message-container", "message-display");

            const cardBodyElement = document.createElement("div");
            cardBodyElement.classList.add("card-body");

            const cardTextElement = document.createElement("p");
            cardTextElement.classList.add("card-text", "fc-white");
            cardTextElement.textContent = messageText;

            cardBodyElement.appendChild(cardTextElement);
            cardElement.appendChild(cardBodyElement);
            messageElement.appendChild(cardElement);

            // Append the new message element to the message container
            messageContainer.appendChild(messageElement);

            // Clear the input field
            messageInput.value = "";

        }
    }

    // Function to send commission text
    function sendCommissionText() {
        const commissionText = "Commission Form"; // Modify this text as needed

        // Create a new message element
        const messageElement = document.createElement("div");
        messageElement.classList.add("container", "d-flex", "flex-row-reverse", "pt-2", "message-entry");

        const cardElement = document.createElement("div");
        cardElement.classList.add("card", "text-start", "h-100", "w-auto", "bg-brown", "rounded-3", "message-container", "message-display");

        const cardBodyElement = document.createElement("div");
        cardBodyElement.classList.add("card-body");

        const cardTextElement = document.createElement("p");
        cardTextElement.classList.add("card-text", "fc-white", "fw-bolder");
        cardTextElement.textContent = commissionText;

        cardBodyElement.appendChild(cardTextElement);
        cardElement.appendChild(cardBodyElement);
        messageElement.appendChild(cardElement);

        // Append the new message element to the message container
        messageContainer.appendChild(messageElement);

        // Clear the input field (if needed)
        messageInput.value = "";
    }
        // Add event listener for the "Yes" button in the "End Project" modal


    
        // Function to send the end project text
        function endProjectText() {

            const endProjectText = "The Project Has Ended! <br> You can now rate each other!";
    
            // Create a new message element for the end project text
            const endProjectMessageElement = document.createElement("div");
            endProjectMessageElement.classList.add("container","pt-2");
    
            const endProjectCardElement = document.createElement("div");
            endProjectCardElement.classList.add("card", "border-0", "w-100","d-flex","transparent");
    
            const endProjectCardBodyElement = document.createElement("div");
            endProjectCardBodyElement.classList.add("card-body", "text-center");
    
            const endProjectCardTextElement = document.createElement("p");
            endProjectCardTextElement.classList.add("card-text", "device-type");
            endProjectCardTextElement.innerHTML = endProjectText;
    
            endProjectCardBodyElement.appendChild(endProjectCardTextElement);
            endProjectCardElement.appendChild(endProjectCardBodyElement);
            endProjectMessageElement.appendChild(endProjectCardElement);
    
            // Append the new message element to the message container
            messageContainer.appendChild(endProjectMessageElement);
        }
    
        // Function to send the rate form
        function sendRateForm() {
            const rateFormText = "Rate Form"; // Modify this text as needed
    
            // Create a new message element for the rate form
            const rateFormMessageElement = document.createElement("div");
            rateFormMessageElement.classList.add("container", "d-flex", "flex-row-reverse", "pt-2", "message-entry");
    
            const rateFormCardElement = document.createElement("div");
            rateFormCardElement.classList.add("card", "text-start", "h-100", "w-auto", "bg-brown", "rounded-3", "message-container", "message-display");
    
            const rateFormCardBodyElement = document.createElement("div");
            rateFormCardBodyElement.classList.add("card-body");
    
            const rateFormCardTextElement = document.createElement("p");
            rateFormCardTextElement.classList.add("card-text", "fc-white", "fw-bolder");
            rateFormCardTextElement.textContent = rateFormText;
    
            rateFormCardBodyElement.appendChild(rateFormCardTextElement);
            rateFormCardElement.appendChild(rateFormCardBodyElement);
            rateFormMessageElement.appendChild(rateFormCardElement);
    
            // Append the new message element to the message container
            messageContainer.appendChild(rateFormMessageElement);
        }
});

document.addEventListener("DOMContentLoaded", function () {
    const notificationContainer = document.getElementById("notificationContainer");
    const notificationText = document.getElementById("notificationText");
    const messageContainer = document.getElementById("messageContainer");
    let originalBodyMarginTop; // Store the original margin-top value

    // Function to show the notification
    function showNotification(text) {
        notificationText.textContent = text;
        notificationContainer.style.display = "flex";

        // Get the current computed margin-top value of the body
        const computedStyle = getComputedStyle(document.body);
        originalBodyMarginTop = computedStyle.marginTop;

        // Calculate the new margin-top value by adding 2em
        const newMarginTop = `calc(${originalBodyMarginTop} + 2em)`;
        document.body.style.marginTop = newMarginTop;

        setTimeout(function () {
            hideNotification(function () {
                // Callback function to reset margin-top after hiding
                document.body.style.marginTop = originalBodyMarginTop;
            });
        }, 10000); // Display for 10 seconds (10,000 milliseconds)
    }

    // Function to hide the notification
    function hideNotification(callback) {
        // Reset margin-top of the body to the original value
        document.body.style.marginTop = originalBodyMarginTop;

        setTimeout(function () {
            notificationContainer.style.display = "none";
            if (typeof callback === "function") {
                callback();
            }
        });
    }

    showNotification("Please note that KuriStation is not accountable for transactions outside the app.");
});

var triggerActionModal = new bootstrap.Modal(document.getElementById('triggerActionModal'), {
    backdrop: 'static',
    keyboard: false
});

// Function to handle opening the modal
function openTriggerActionModal() {
    triggerActionModal.show();
}



// FOR THE SLIDER

const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');
const sliderContainer = document.querySelector('.custom-slider');

sliderContainer.style.backgroundColor = '#D7B9A7';

slider.addEventListener('input', () => {
    const currentValue = slider.value;
    sliderValue.textContent = currentValue + '%';

    // Calculate the width of the filled part
    const fillWidth = (currentValue / 99) * 99;

    // Set the custom property to control the background size
    slider.style.setProperty('--fill-width', `${fillWidth}%`);
});

///FOR THE RATINGS

const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        // Reset all stars
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add("checked");
            } else {
                s.classList.remove("checked");
            }
        });
    });
});