document.getElementById('sampleForm44').addEventListener('submit', function (e) {
						e.preventDefault(); // Prevent the default form submission
			
						// Get form data
						const formData = new FormData(this);
			
						// Replace 'your-secret-key' with your actual secret key
						const secretKey = 'HJ6KE4UYmJGSHdddXocCk0cFNaqBxpyb';
			
						// Construct the URL with the secret key
						const apiUrl = `https://demo3.neeryks.com/wp-json/wcra/v1/form_data/?secret_key=${secretKey}`;
			
						// Send the POST request
						fetch(apiUrl, {
							method: 'POST',
							body: formData
						})
						.then(response => {
							if (!response.ok) {
								throw new Error('Network response was not ok');
							}
							return response.json();
						})
						.then(data => {
							// Handle the successful response from the server here
							console.log(data);

							const successMessage = document.createElement('p');
                			successMessage.textContent = 'Query Submitted';
                			document.body.appendChild(successMessage);

							setTimeout(() => {
                    			location.reload();
                			}, 3000); // Refr
						})
						.catch(error => {
							// Handle errors that occur during the fetch
							console.error('Error:', error);
			
							// Display an error message to the user
							const errorMessage = document.createElement('p');
							errorMessage.style.color = 'red';
							errorMessage.textContent = 'An error occurred while submitting the form. Please try again later.';
							this.appendChild(errorMessage);
						});
						
					});
