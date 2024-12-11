document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeContent');
  
    if (button) {
      button.addEventListener('click', () => {
        const sections = document.querySelectorAll('main section');
        sections.forEach(section => {
          section.style.backgroundColor = #F08080;
        });
        alert('The Color to some areas are now coral!');
      });
    }
  });
