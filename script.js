document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeContent');
  
    if (button) {
      button.addEventListener('click', () => {
        const sections = document.querySelectorAll('main section'); // Select all sections in <main>
        sections.forEach(section => {
          section.style.backgroundColor = 'red'; // Change each section's background color to red
        });
        alert('Sections background color changed to red!');
      });
    }
  });
