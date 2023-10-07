function validateForm() {
    // Get references to the date input fields
    const startDateInput = document.getElementById("projectStartDate");
    const endDateInput = document.getElementById("projectEndDate");

    // Regular expressions for validating date formats
    const datePatternDDMMYYYY = /^\d{2}\/\d{2}\/\d{4}$/;
    const datePatternMMDDYYYY = /^\d{2}\/\d{2}\/\d{4}$/;

    // Check if the start date is in the correct format
    if (!datePatternDDMMYYYY.test(startDateInput.value) && !datePatternMMDDYYYY.test(startDateInput.value)) {
        displayError("Invalid start date format. Please use dd/mm/yyyy or mm/dd/yyyy.");
        return false; // Prevent form submission
    }

    // Check if the end date is in the correct format
    if (!datePatternDDMMYYYY.test(endDateInput.value) && !datePatternMMDDYYYY.test(endDateInput.value)) {
        displayError("Invalid end date format. Please use dd/mm/yyyy or mm/dd/yyyy.");
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

function displayError(message) {
    const errorDiv = document.getElementById("error-message");
    errorDiv.textContent = message;
}

function clearError() {
    const errorDiv = document.getElementById("error-message");
    errorDiv.textContent = "";
}

function parseDate(inputDate) {
    const parts = inputDate.split('/');
    if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10);
        if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
            return new Date(year, month - 1, day);
        }
    }
    return null; // Invalid date format or invalid date components
}

function formatDate(input) {
    const parts = input.value.split('/');
    if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10);
        
        if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
            const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
            input.value = formattedDate;
        }
    }
}