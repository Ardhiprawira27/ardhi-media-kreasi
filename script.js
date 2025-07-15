document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,     // Durasi animasi (ms)
        easing: 'ease-in-out', // Easing default
        once: true,         // Animasi hanya sekali saat scroll ke elemen
        mirror: false,      // Animasi hanya saat scrolling ke bawah
    });

    // --- Hamburger Menu Functionality ---
    const hamburgerToggle = document.querySelector('.hamburger-toggle');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const closeBtn = document.querySelector('.close-btn');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    if (hamburgerToggle && mobileNavOverlay && closeBtn) {
        hamburgerToggle.addEventListener('click', function() {
            mobileNavOverlay.classList.toggle('open');
            hamburgerToggle.classList.toggle('open'); // Untuk animasi ikon X
            document.body.classList.toggle('no-scroll'); // Mencegah scroll body
        });

        closeBtn.addEventListener('click', function() {
            mobileNavOverlay.classList.remove('open');
            hamburgerToggle.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });

        // Close mobile menu when a link is clicked
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNavOverlay.classList.remove('open');
                hamburgerToggle.classList.remove('open');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // --- Active Nav Link Highlight (Desktop & Mobile) ---
    const desktopNavLinks = document.querySelectorAll('.desktop-nav a');
    const allNavLinks = [...desktopNavLinks, ...mobileNavLinks]; // Gabungkan semua link

    // Fungsi untuk menandai link aktif
    function setActiveNavLink() {
        const currentPath = window.location.pathname.split('/').pop(); // Ambil nama file dari URL
        
        allNavLinks.forEach(link => {
            const linkPath = link.getAttribute('href').split('/').pop();
            // Cek jika path saat ini kosong (mungkin index.html tanpa nama file)
            // atau jika path sesuai dengan nama file halaman
            if (currentPath === '' && linkPath === 'index.html') {
                link.classList.add('active');
            } else if (linkPath === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    setActiveNavLink(); // Jalankan saat halaman dimuat

    // --- Scroll to Top Button ---
    const scrollTopBtn = document.getElementById('scroll-top-btn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) { // Tampilkan tombol setelah scroll 300px
                scrollTopBtn.style.display = 'flex'; // Gunakan flex untuk centering icon
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Animasi scroll halus
            });
        });
    }

    // --- Placeholder untuk Fungsionalitas Form Penawaran (penawaran.html) ---
    const offerForm = document.querySelector('.offer-form-container form'); // Selektor disesuaikan
    if (offerForm) {
        offerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form submit secara default
            
            // Di sini Anda akan menambahkan logika untuk mengirim data form.
            // Contoh: Menggunakan Fetch API untuk mengirim ke backend (jika ada),
            // atau cukup menampilkan pesan sukses.
            
            alert('Permintaan penawaran Anda telah terkirim! Kami akan segera menghubungi Anda.');
            offerForm.reset(); // Mengosongkan form setelah submit
            // Anda bisa tambahkan: window.location.href = 'terima-kasih.html';
        });
    }

    // --- Placeholder untuk Fungsionalitas Filter Katalog (stationery.html) ---
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.querySelector('.filter-section button');
    const productGrid = document.querySelector('.product-grid');

    if (categoryFilter && searchInput && searchButton && productGrid) {
        function filterProducts() {
            const selectedCategory = categoryFilter.value.toLowerCase();
            const searchTerm = searchInput.value.toLowerCase();
            const productCards = productGrid.querySelectorAll('.product-card');

            productCards.forEach(card => {
                const productCategory = card.querySelector('.product-category')?.textContent.toLowerCase() || ''; // Tambah optional chaining
                const productName = card.querySelector('h3')?.textContent.toLowerCase() || '';
                const productDescription = card.querySelector('p')?.textContent.toLowerCase() || '';

                const matchesCategory = (selectedCategory === 'all' || productCategory.includes(selectedCategory));
                const matchesSearch = (productName.includes(searchTerm) || productDescription.includes(searchTerm));

                if (matchesCategory && matchesSearch) {
                    card.style.display = 'flex'; // Tampilkan kartu
                } else {
                    card.style.display = 'none'; // Sembunyikan kartu
                }
            });
        }

        // Event Listeners untuk trigger filter
        categoryFilter.addEventListener('change', filterProducts);
        searchButton.addEventListener('click', filterProducts);
        // Opsional: tambahkan event listener untuk input agar filter real-time saat mengetik
        searchInput.addEventListener('keyup', filterProducts); 

        // Initial filter on page load
        filterProducts();
    }

});