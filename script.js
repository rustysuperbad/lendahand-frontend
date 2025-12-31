// Smooth scroll navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// City selection handling
const exploreBtn = document.querySelector('.hero button');
const citySelect = document.querySelector('.hero select');

if (exploreBtn && citySelect) {
  exploreBtn.addEventListener('click', () => {
    if (citySelect.value === 'Select your city') {
      alert('Please select a city first');
      return;
    }

    document
      .querySelector('#opportunities')
      .scrollIntoView({ behavior: 'smooth' });

    console.log('City selected:', citySelect.value);
  });
}
