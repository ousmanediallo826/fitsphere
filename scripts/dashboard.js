document.addEventListener('DOMContentLoaded', () => {
    // Clear all form inputs on page load
    const clearFormInputs = (formId) => {
        const form = document.getElementById(formId);
        if (form) {
            const inputs = form.querySelectorAll("input, select");
            inputs.forEach(input => input.value = "");
        }
    };

    // Comment out for debugging
    // clearFormInputs("membershipForm");

    // Restrict card number to 16 digits
    const cardInput = document.getElementById('card');
    cardInput.addEventListener('input', (e) => {
        if (cardInput.value.length > 16) {
            cardInput.value = cardInput.value.slice(0, 16); // Trim input to 16 digits
        }
    });

    document.getElementById("registerButton").addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default behavior

        const form = document.getElementById("membershipForm");
        const inputs = form.querySelectorAll("input, select");
        let allFilled = true;

        // Log input values
        inputs.forEach(input => {
            console.log(`${input.id}: ${input.value}`);
            if (!input.value.trim()) {
                allFilled = false;
                input.style.border = "2px solid red"; // Highlight empty fields
            } else {
                input.style.border = ""; // Reset border for filled fields
            }
        });

        if (!allFilled) {
            alert("Please fill in all required fields.");
            return;
        }

        // Payment Validation
        const cardHolder = document.getElementById('cardHolder').value.trim();
        const cardNumber = document.getElementById('card').value.trim();
        const expireDate = document.getElementById('expire').value;
        const cvv = document.getElementById('cvv').value.trim();
        const phoneNumber = document.getElementById('phone').value.trim(); // Assuming phone field ID is "phone"

        console.log('Card Holder:', cardHolder);
        console.log('Card Number:', cardNumber);
        console.log('Expiration Date:', expireDate);
        console.log('CVV:', cvv);
        console.log('Phone Number:', phoneNumber);

        const today = new Date();
        const expiration = new Date(expireDate);
        const errors = [];

        if (!/^[a-zA-Z\s]+$/.test(cardHolder)) {
            errors.push("Card holder name must contain only letters and spaces.");
        }

        if (!/^\d{16}$/.test(cardNumber)) {
            errors.push("Card number must be exactly 16 digits.");
        }

        if (!/^\d{10}$/.test(phoneNumber)) {
            errors.push("Phone number must be exactly 11 digits.");
        }

        if (!/^\d{3}$/.test(cvv)) {
            errors.push("CVV must be exactly 3 digits.");
        }

        if (expiration <= today || isNaN(expiration.getTime())) {
            errors.push("Expiration date must be a valid future date.");
        }

        if (errors.length > 0) {
            alert("Validation failed:\n" + errors.join("\n"));
            return;
        }

        alert("Payment information is valid! Redirecting to the dashboard...");
        window.location.href = "dashboard.html";
    });
});
