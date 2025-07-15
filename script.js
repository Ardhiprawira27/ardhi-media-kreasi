// Inisialisasi AOS (Animate On Scroll) library
AOS.init({
    duration: 1000, // Durasi animasi dalam milidetik
    once: true,    // Animasi hanya terjadi sekali saat elemen masuk viewport
    delay: 50,     // Sedikit delay awal untuk efek yang lebih halus
});

// Logika untuk tombol "Kembali ke Atas"
const scrollTopBtn = document.getElementById('scroll-top-btn');

window.addEventListener('scroll', () => {
    // Tampilkan tombol jika posisi scroll lebih dari 300px dari atas
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    // Menggulir halaman ke atas dengan efek halus
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Logika untuk Menu Hamburger DIHAPUS SEPENUHNYA
// const hamburger = document.querySelector('.hamburger');
// const mobileMenu = document.querySelector('.mobile-menu');
// const mobileMenuItems = document.querySelectorAll('.mobile-menu a');

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('open');
//     mobileMenu.classList.toggle('open');
//     document.body.classList.toggle('no-scroll');
// });

// mobileMenuItems.forEach(item => {
//     item.addEventListener('click', () => {
//         hamburger.classList.remove('open');
//         mobileMenu.classList.remove('open');
//         document.body.classList.remove('no-scroll');
//     });
// });