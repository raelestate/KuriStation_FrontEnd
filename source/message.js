document.addEventListener("DOMContentLoaded", function () {
    
    const messageInput = document.getElementById("messageInput");
    const sendMessageButton = document.getElementById("sendMessageButton");
    const messageContainer = document.getElementById("messageContainer");
    const commissionButton = document.getElementById("commissionButton"); // Add this line\
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

    // Add event listener for the "Commission Text" button
    commissionButton.addEventListener("click", function () {
        sendCommissionText();
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

// Initialize the "Edit Commission Details" modal
const editCommissionModal = new bootstrap.Modal(document.getElementById('editCommissionModal'));

// Add an event listener to the "Edit Commission Details" button in the "Trigger Action" modal
document.getElementById("editCommissionButton").addEventListener("click", function () {
    // Assuming you have a function to populate the edit modal with existing data
    populateEditCommissionModalWithExistingData();

    // Show the edit modal
    editCommissionModal.show();
});

// Function to populate the edit modal with existing data for editing
function populateEditCommissionModalWithExistingData() {
    // Assuming you have data for the commission form
    const existingData = {
        projectName: "",
        projectObjectives: "",
        projectStartDate: "",
        projectEndDate: "",
        projectDescription: "",
        projectAmount: ""
        // Add other existing data fields here
    };

    document.getElementById("editprojName").value = existingData.projectName;
    document.getElementById("editprojObj").value = existingData.projectObjectives;
    document.getElementById("editprojectStartDate").value = existingData.projectStartDate;
    document.getElementById("editprojectEndDate").value = existingData.projectEndDate;
    document.getElementById("editprojDesc").value = existingData.projectDescription;
    document.getElementById("editprojAmount").value = existingData.projectAmount;
    // Set other form fields as needed
}

function saveEditedCommission() {
    // Get the values from the edit modal form fields
    const editedProjectName = document.getElementById("editprojName").value;
    const editedProjectObjectives = document.getElementById("editprojObj").value;
    const editedProjectStartDate = document.getElementById("editprojStartDate").value;
    const editedProjectEndDate = document.getElementById("editprojEndDate").value;
    const editedProjectDesc = document.getElementById("editprojDesc").value;
    const editedProjectAmount = document.getElementById("editprojAmount").value;
    // Get other edited form fields as needed

    // Handle saving the edited commission details here
    // Update the commission data with the edited values

    // Close the edit modal after saving
    const editCommissionModal = new bootstrap.Modal(document.getElementById('editCommissionModal'));
    editCommissionModal.hide();
}