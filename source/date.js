function validateForm() {
    // Cache DOM elements
    const startDateInput = document.getElementById("projectStartDate");
    const endDateInput = document.getElementById("projectEndDate");
    const errorDiv = document.getElementById("error-message");

    // Regular expressions for more permissive date formats (dd/mm/yyyy or mm/dd/yyyy)
    const datePattern = /^(\d{1,2}\/\d{1,2}\/\d{2,4}|\d{1,2}\/\d{1,2}\/\d{2})$/;

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
            let [day, month, year] = parts.map(part => parseInt(part, 10));
            if (year < 100) {
                // Handle 2-digit year (e.g., '20' for 2020)
                year += 2000;
            }
            if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
                return new Date(year, month - 1, day);
            }
        }
        return null; // Invalid date format or invalid date components
    }

    // Check if the date format is valid
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
