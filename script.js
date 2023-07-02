const toggleButton = document.getElementById('toggle')

const nav = document.getElementById('nav')

toggleButton.addEventListener('click', () => nav.classList.toggle('active'))
