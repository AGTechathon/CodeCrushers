
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Stop form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy check (you can replace with real backend validation)
    if (username === 'admin' && password === '1234') {
        window.location.href = 'home.html'; // Redirect to next page
    } else {
        alert('Invalid username or password');
    }
  });

