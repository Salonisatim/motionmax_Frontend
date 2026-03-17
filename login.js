

    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('loginEmail');
    const passInput = document.getElementById('loginPass');
    const toggle = document.getElementById('toggleCheck');
    const loginBtn = document.getElementById('loginBtn');

    // 1. Password Visibility Toggle
    toggle.addEventListener('change', () => {
        passInput.type = toggle.checked ? 'text' : 'password';
    });

    // 2. Login Validation & Security Logic
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const pass = passInput.value.trim();
        let hasError = false;

        // Reset Styles
        emailInput.classList.remove('shake-error');
        passInput.classList.remove('shake-error');

        // Simple Front-end Security Check
        if (!email || !email.includes('@')) {
            emailInput.classList.add('shake-error');
            hasError = true;
        }

        if (pass.length < 1) {
            passInput.classList.add('shake-error');
            hasError = true;
        }

        if (hasError) return;

        // 3. Simulated Secure Authentication
        loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
        loginBtn.disabled = true;

        // Simulate server delay for security/encryption check
        setTimeout(() => {
            // This is where you would normally validate against a database
            if (email === "" && pass === "") {
                alert("Login Successful! Redirecting to Dashboard...");
                // window.location.href = "dashboard.html"; 
            } else {
                alert("Invalid email or password. Please try again.");
                loginBtn.innerHTML = '<i class="fas fa-right-to-bracket"></i> Login to Account';
                loginBtn.disabled = false;
                passInput.value = ""; // Clear password on failure for security
                passInput.classList.add('shake-error');
            }
        }, 1500);
    });
