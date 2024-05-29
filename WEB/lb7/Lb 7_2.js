function addBlock() {
    const content = prompt('Введіть текст для нового блоку:');
    if (!content) return;

    const container = document.getElementById('blocks');

    const randomColor = getRandomColor();
    const blockSize = Math.floor(Math.random() * 100) + 50;

    const block = document.createElement('div');
    block.classList.add('block', 'fade-in');
    block.style.backgroundColor = randomColor;
    block.style.width = `${blockSize}px`;
    block.style.height = `${blockSize}px`;
    block.textContent = content;

    const colorSelect = document.createElement('select');
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']; // Список кольорів
    colors.forEach(color => {
        const option = document.createElement('option');
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
    });

    colorSelect.addEventListener('change', function() {
        block.style.backgroundColor = this.value; // Зміна коліру блоку при виборі нового кольору зі списку
    });

    block.appendChild(colorSelect);

    block.addEventListener('click', function() {
        const rect = block.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        alert(`Розміри блоку: ${block.offsetWidth}px × ${block.offsetHeight}px\nКоординати відносно веб-сторінки: (${rect.left}px, ${rect.top + scrollTop}px)`);
    });

    // Додаємо обробники подій для зміни кольору при наведенні мишки
    block.addEventListener('mouseover', function() {
        block.style.backgroundColor = getRandomColor(); // Зміна коліру при наведенні
    });

    block.addEventListener('mouseout', function() {
        block.style.backgroundColor = randomColor; // Повернення попереднього коліру при знятті мишки
    });

    container.appendChild(block);

    container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
