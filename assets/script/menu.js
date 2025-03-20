function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}
document.addEventListener('click', function (event) {
    // Check if the clicked element is the hamburger
    if (event.target && event.target.id === 'hamburger') {
        toggleMenu();
    }
});