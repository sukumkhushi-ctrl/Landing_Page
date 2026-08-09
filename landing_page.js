document.addEventListener('DOMContentLoaded', () => {
    // Navigation toggle
    const menuToggle = document.getElementById('menutoggle');
    const navmenu = document.getElementById('navmenu');

    if (menuToggle && navmenu) {
        menuToggle.addEventListener('click', () => {
            navmenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navmenu) navmenu.classList.remove('active');
            if (menuToggle) {
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            }
        });
    });

    // Modal elements
    const leadModal = document.getElementById('leadModal');
    const modalClose = document.getElementById('modalClose');
    const openModalBtns = document.querySelectorAll('.open-modal');

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (leadModal) leadModal.classList.add('active');
        });
    });

    if (modalClose && leadModal) {
        modalClose.addEventListener('click', () => {
            leadModal.classList.remove('active');
        });
    }

    if (leadModal) {
        leadModal.addEventListener('click', (e) => {
            if (e.target === leadModal) {
                leadModal.classList.remove('active');
            }
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your message has been sent to our team.');
            e.target.reset();
        });
    }

    // Modal Form
    const modalForm = document.getElementById('modalForm');
    if (modalForm) {
        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Welcome aboard! Check your email to set up your account.');
            e.target.reset();
            if (leadModal) leadModal.classList.remove('active');
        });
    }
});