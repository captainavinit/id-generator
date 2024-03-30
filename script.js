document.getElementById('userInfoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    
    fetch('/generate', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const userInfoDiv = document.getElementById('userInfo');
        userInfoDiv.innerHTML = ''; // Clear previous data
        for (const key in data) {
            userInfoDiv.innerHTML += `<p><strong>${key}:</strong> ${data[key]}</p>`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
