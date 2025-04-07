  document.querySelectorAll('.section-info').forEach(section => {
    const bg = section.getAttribute('data-bg');
    section.style.setProperty('--bg-img', `url(${bg})`);
  });

