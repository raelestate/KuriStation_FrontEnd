function validateForm() {
    // Cache DOM elements
    const startDateInput = document.getElementById("projectStartDate");
    const endDateInput = document.getElementById("projectEndDate");
    const errorDiv = document.getElementById("error-message");

    // Regular expression for validating date formats
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;

    // Function to display an error message
    function displayError(message) {
        errorDiv.textContent = message;
    }

    // Function to clear error message
    function clearError() {
        errorDiv.textContent = "";
    }

    // Function to parse a date string
    function parseDate(inputDate) {
        const parts = inputDate.split('/');
        if (parts.length === 3) {
            const [day, month, year] = parts.map(part => parseInt(part, 10));
            if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
                return new Date(year, month - 1, day);
            }
        }
        return null; // Invalid date format or invalid date components
    }

    // Check if both dates are in the correct format
    if (!datePattern.test(startDateInput.value) || !datePattern.test(endDateInput.value)) {
        displayError("Invalid date format. Please use dd/mm/yyyy or mm/dd/yyyy.");
        return false; // Prevent form submission
    }

    // Convert start and end dates to Date objects
    const startDate = parseDate(startDateInput.value);
    const endDate = parseDate(endDateInput.value);

    // Check if the start date is earlier than the end date
    if (startDate >= endDate) {
        displayError("Start date must be earlier than end date.");
        return false; // Prevent form submission
    }

    // Clear any previous error messages
    clearError();

    // Form is valid, allow submission
    return true;
}
