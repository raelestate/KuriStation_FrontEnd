document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("messageInput");
    const sendMessageButton = document.getElementById("sendMessageButton");
    const messageContainer = document.getElementById("messageContainer");


    sendMessageButton.addEventListener("click", function () {
        sendMessage();
    });

    messageInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default behavior (form submission)
            sendMessage();
        }
    });

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

