function toogleMobileMenu(){
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.querySelector('.mobile-overlay');
    
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}