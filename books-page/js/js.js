// تحديد العناصر
const toggleMenu = document.querySelector('.toggle-menu'); // أيقونة الهامبرغر
const navMenu = document.querySelector('nav ul'); // قائمة الروابط داخل الـ nav

// عند النقر على زر الهامبرغر
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu'); // إضافة/إزالة الفئة show-menu لعرض/إخفاء القائمة
});





// ScrollReveal Configuration
const sr = ScrollReveal({
    distance: '50px', // مسافة الحركة
    duration: 1200,   // مدة التأثير
    delay: 200,       // تأخير بين العناصر
    reset: false       // إعادة التأثير عند التمرير مجددًا
});


sr.reveal('.menu-section .menu-card', {
    origin: 'top', // تتحرك من الأسفل
    interval: 50
});
sr.reveal('.menu-section .menu-more-button', {
    origin: 'top', // تتحرك من الأعلى
    scale: 0.9,    // تصغير ثم تكبير
    interval: 50
});