function setLanguage(lang) {
  document.querySelectorAll("[data-lang-el]").forEach(el => {
    const text = el.getAttribute(`data-lang-${lang}`) || el.textContent;
    el.textContent = text;
  });
}
document.querySelectorAll('.sample-card img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

// Κλείσιμο modal όταν πατάς το X
document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('imageModal').style.display = 'none';
});

// Κλείσιμο modal αν κάνεις κλικ έξω από την εικόνα
document.getElementById('imageModal').addEventListener('click', (e) => {
  if (e.target.id === 'imageModal') {
    e.target.style.display = 'none';
  }
});
