document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['#f0f0f0', '#ffcccb', '#d1ffcc', '#ccd1ff', '#ffeccc'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});