document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("messageInput");
    const sendMessageButton = document.getElementById("sendMessageButton");
    const messageContainer = document.getElementById("messageContainer");

    sendMessageButton.addEventListener("click", function () {
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
    });
});