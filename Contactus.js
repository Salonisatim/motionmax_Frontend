
        
        const menuBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.getElementById('navLinks');
        
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.dropdown > a').forEach(item => {
            item.addEventListener('click', (e) => {
                if(window.innerWidth <= 768) {
                    item.parentElement.classList.toggle('active-mobile');
                }
            });
        });

        document.querySelectorAll('.dropdown-menu li > a').forEach(item => {
            item.addEventListener('click', (e) => {
                if(window.innerWidth <= 768) {
                    item.parentElement.classList.toggle('active-mobile');
                }
            });
        });



         function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}
        

document.querySelectorAll('.dropdown > a').forEach(link => {

    link.addEventListener('click', function(e) {

        if (window.innerWidth <= 768) {

            const parent = this.parentElement;

            // if dropdown not opened yet -> open menu
            if (!parent.classList.contains('active-mobile')) {

                e.preventDefault();

                document.querySelectorAll('.dropdown').forEach(item => {
                    item.classList.remove('active-mobile');
                });

                parent.classList.add('active-mobile');

            }
            // second click will go to Courses.html automatically
        }

    });

});


        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const phone = document.getElementById('phone').value;

            if(phone.length < 10) {
                alert("Please enter a valid phone number (at least 10 digits).");
                return;
            }
            
            const btn = e.target.querySelector('button');
            btn.innerText = "Sending...";
            btn.style.opacity = "0.7";
            btn.disabled = true;

            setTimeout(() => {
                alert(`Thank you, ${firstName}! Your message has been sent successfully.`);
                btn.innerText = "Send Message";
                btn.style.opacity = "1";
                btn.disabled = false;
                e.target.reset();
            }, 1500);
        });
   