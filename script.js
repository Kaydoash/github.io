document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('changeContent');
  
  if (button) {
    button.addEventListener('click', () => {
      document.body.style.backgroundColor = '#ADD8E6'; // Change background color
      alert('Background color changed!');
    });
  }
});

