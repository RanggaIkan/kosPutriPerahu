// Menunggu sampai seluruh konten HTML dimuat
window.addEventListener('DOMContentLoaded', (event) => {

    // Ambil elemen header
    const header = document.getElementById('header');

    // Tambahkan event listener saat window di-scroll
    window.addEventListener('scroll', () => {
        // 'window.scrollY' adalah jarak scroll dari atas
        // Jika jarak scroll lebih dari 50px
        if (window.scrollY > 50) {
            // Tambahkan kelas 'scrolled' ke header
            header.classList.add('scrolled');
        } else {
            // Hapus kelas 'scrolled' jika kembali ke atas
            header.classList.remove('scrolled');
        }
    });

});

// ======== SCRIPT UNTUK SCROLLSPY ========

// Ambil semua section yang punya ID
const sections = document.querySelectorAll('section[id]');

// Ambil semua link menu
const navLinks = document.querySelectorAll('.nav-menu a');

// Fungsi untuk 'spy' scroll
function scrollActive() {
    // Dapatkan posisi Y scroll saat ini
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        // 'offsetTop' adalah jarak section dari atas halaman
        // '100' adalah offset (jarak 'trigger' sebelum section-nya pas di atas)
        const sectionTop = current.offsetTop - 100; 
        const sectionId = current.getAttribute('id');

        // Cari link yang 'href'-nya sama dengan ID section
        const link = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
        
        if (link) { // Pastikan link-nya ada
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Jika kita di dalam section, tambahkan kelas 'active-link'
                link.classList.add('active-link');
            } else {
                // Jika tidak, hapus kelasnya
                link.classList.remove('active-link');
            }
        }
    });
}

// Jalankan fungsi 'scrollActive' setiap kali user scroll
window.addEventListener('scroll', scrollActive);

// ======== SCRIPT UNTUK HAMBURGER MENU ========
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

// Event listener untuk tombol hamburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// (Bonus) Tutup menu saat salah satu link di-klik
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ======== SCRIPT UNTUK EFEK SCROLL REVEAL ========
// Pastikan script ini ada SETELAH kode hamburger

// Inisialisasi ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',    // Muncul dari bawah
    distance: '60px',    // Jarak 60px
    duration: 1500,      // Durasi 1.5 detik
    delay: 200,          // Delay 0.2 detik
    reset: false         // Animasi hanya jalan sekali
});

// Targetkan elemen-elemen yang mau dianimasi
sr.reveal('.hero-content', { origin: 'top' }); // Hero muncul dari atas

// Judul section
sr.reveal('#fasilitas h2, #galeri h2, #kontak h2', { delay: 300 });
sr.reveal('.section-subtitle', { delay: 400 });

// Targetkan kartu (dengan interval)
sr.reveal('.card', { interval: 200 }); 

// Targetkan bagian kontak
sr.reveal('.kontak-info', { origin: 'left' });
sr.reveal('.kontak-peta', { origin: 'right', delay: 400 });