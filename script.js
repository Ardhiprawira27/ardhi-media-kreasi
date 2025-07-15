// Inisialisasi AOS (Animate On Scroll) library
AOS.init({
    duration: 1000, // Durasi animasi dalam milidetik (diperpanjang sedikit)
    once: true,    // Animasi hanya terjadi sekali saat elemen masuk viewport
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