
// NAME: IAN NDOLO MWAU
 //REG NO: SCT211-0034/2022
        document.addEventListener('DOMContentLoaded', function() {
            // Function to handle form submission
            function handleFormSubmission(event) {
                event.preventDefault(); // Prevent the default form submission behavior

                // Get form data
                const firstName = document.getElementById('firstName').value;
                const lastName = document.getElementById('lastName').value;
                const email = document.getElementById('email').value;
                const phone = document.getElementById('Phone').value;
                const gender = document.querySelector('input[name="gender"]:checked').value;
                const continent = document.getElementById('continent').value;
                const message = document.getElementById('message').value;

                // Construct the message to be displayed
                const formMessage = `
                    <p><strong>First Name:</strong> ${firstName}</p>
                    <p><strong>Last Name:</strong> ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Gender:</strong> ${gender}</p>
                    <p><strong>Continent:</strong> ${continent}</p>
                    <p><strong>Message:</strong> ${message}</p>
                `;

                // Update the formResponse div with the constructed message
                document.getElementById('formResponse').innerHTML = formMessage;
                alert('Thank you  for your message. We will get back to you soon.');
            }

            // Attach the handleFormSubmission function to the form's submit event
            document.getElementById('contactForm').addEventListener('submit', handleFormSubmission);
            
        });
