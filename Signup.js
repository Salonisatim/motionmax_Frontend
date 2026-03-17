
    const form = document.getElementById('signupForm');
    const passInput = document.getElementById('userPass');
    const confirmInput = document.getElementById('confirmPass');
    const toggle = document.getElementById('toggleCheck');
    const bar = document.getElementById('bar');
    const meterBox = document.getElementById('meterBox');
    const label = document.getElementById('strengthLabel');
    const btn = document.getElementById('mainBtn');

    // 1. Password Visibility
    toggle.addEventListener('change', () => {
        const type = toggle.checked ? 'text' : 'password';
        passInput.type = type;
        confirmInput.type = type;
    });

    // 2. Strong Password Validator
    passInput.addEventListener('input', () => {
        const val = passInput.value;
        meterBox.style.display = 'block';
        
        let score = 0;
        if (val.length >= 8) score++; // Length
        if (/[A-Z]/.test(val)) score++; // Uppercase
        if (/[0-9]/.test(val)) score++; // Number
        if (/[^A-Za-z0-9]/.test(val)) score++; // Special Char

        // Update UI based on score
        const widths = ['25%', '50%', '75%', '100%'];
        const colors = ['#ef4444', '#f59e0b', '#3b82f6', '#22c55e'];
        const texts = ['Weak', 'Fair', 'Good', 'Strong!'];

        if (val === "") {
            meterBox.style.display = 'none';
            label.innerText = "";
        } else {
            bar.style.width = widths[score - 1] || '10%';
            bar.style.backgroundColor = colors[score - 1] || '#ef4444';
            label.innerText = texts[score - 1] || 'Very Weak';
            label.style.color = colors[score - 1] || '#ef4444';
        }
    });

    // 3. Submit Logic with Strength Requirement
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('userEmail').value;
        const pass = passInput.value;
        const confirm = confirmInput.value;

        // Reset animations
        passInput.classList.remove('shake-error');
        confirmInput.classList.remove('shake-error');

        // CHECK 1: Strength Requirement
        const isStrong = (pass.length >= 8 && /[A-Z]/.test(pass) && /[0-9]/.test(pass) && /[^A-Za-z0-9]/.test(pass));
        
        if (!isStrong) {
            passInput.classList.add('shake-error');
            alert("Please create a STRONG password. It must include 8+ characters, an uppercase letter, a number, and a symbol.");
            return;
        }

        // CHECK 2: Match
        if (pass !== confirm) {
            confirmInput.classList.add('shake-error');
            alert("Passwords do not match!");
            return;
        }

        // Action
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Encrypting...';
        btn.disabled = true;

        setTimeout(() => {
            alert("Account created successfully with a Strong Password!");
            btn.innerHTML = 'Create Secure Account';
            btn.disabled = false;
            form.reset();
            meterBox.style.display = 'none';
            label.innerText = "";
        }, 1500);
    });
