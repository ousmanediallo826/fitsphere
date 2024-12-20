document.addEventListener('DOMContentLoaded', () => {
   
    const clearFormInputs = (formId) => {
        const form = document.getElementById(formId);
        if (form) {
            const inputs = form.querySelectorAll("input, select");
            inputs.forEach(input => input.value = "");
        }
    };

    
    

    
    const cardInput = document.getElementById('card');
    cardInput.addEventListener('input', (e) => {
        if (cardInput.value.length > 16) {
            cardInput.value = cardInput.value.slice(0, 16); 
        }
    });

    document.getElementById("registerButton").addEventListener("click", function (e) {
        e.preventDefault();

        const form = document.getElementById("membershipForm");
        const inputs = form.querySelectorAll("input, select");
        let allFilled = true;

      
        inputs.forEach(input => {
            console.log(`${input.id}: ${input.value}`);
            if (!input.value.trim()) {
                allFilled = false;
                input.style.border = "2px solid red"; 
            } else {
                input.style.border = "";
            }
        });

        if (!allFilled) {
            alert("Please fill in all required fields.");
            return;
        }

    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const ecFname = document.getElementById('ec_fname').value.trim();
    const ecLname = document.getElementById('ec_lname').value.trim();
    const number = document.getElementById('ec_phone').value.trim();
    const relationship = document.getElementById('relationship').value.trim();

    if (!fname || !lname || !email || !phone || !dob || !ecFname || !ecLname || !number || !relationship) {
        alert("Please fill out all fields!");
        return;
    }

    const userInfo = { fname, lname, email, phone, dob, ecFname, ecLname, number, relationship };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));


        // Payment Validation
        const cardHolder = document.getElementById('cardHolder').value.trim();
        const cardNumber = document.getElementById('card').value.trim();
        const expireDate = document.getElementById('expire').value;
        const cvv = document.getElementById('cvv').value.trim();
        const phoneNumber = document.getElementById('phone').value.trim(); 
        
        
        console.log('Card Holder:', cardHolder);
        console.log('Card Number:', cardNumber);
        console.log('Expiration Date:', expireDate);
        console.log('CVV:', cvv);
        console.log('Phone Number:', phoneNumber);
        
        const today = new Date();
        const expiration = new Date(expireDate);
        const errors = [];
     



        if (expireDate <= today) {
            alert('The expiration date should be a future date.');
            return;
        }
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
        window.location.href = "../dashboard.html";
    });
});
document.addEventListener("DOMContentLoaded", function () {

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    
    if (userInfo) {
       
        console.log("Retrieved User Info:", userInfo);

       
        const displayName = document.getElementById("displayName");
        const displayEmail = document.getElementById("displayEmail");
        const displayPhone = document.getElementById("displayPhone");
        const displayDOB = document.getElementById("displayDOB");
        const displayFname = document.getElementById('displayFname');
        const displayPhoneNum = document.getElementById('displayphone');
        const displayRelationship = document.getElementById('relationship')

       
        if (displayName && displayEmail && displayPhone && displayDOB && displayFname && displayPhoneNum && displayRelationship) {

            displayName.textContent = `${userInfo.fname} ${userInfo.lname}`;
            displayEmail.textContent = userInfo.email;
            displayPhone.textContent = userInfo.phone;
            displayDOB.textContent = userInfo.dob;
            displayFname.textContent = `${userInfo.ecFname} ${userInfo.ecLname}`;
            displayPhoneNum.textContent = userInfo.number;
            displayRelationship.textContent = userInfo.relationship
        } else {
            console.error("Some display elements are missing in the HTML.");
        }
    } else {
        console.error("No user info found in localStorage.");
    }
});
