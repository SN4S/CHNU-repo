function getBlocksInfo() {
    console.clear()
    var blocks = document.querySelectorAll('.block');
    blocks.forEach(function(block) {
        var rect = block.getBoundingClientRect();
        var containerRect = document.getElementById('container').getBoundingClientRect();
        var top = rect.top - containerRect.top + document.getElementById('container').scrollTop;
        var left = rect.left - containerRect.left;
        console.log('Розміри блоку: ' + rect.width + 'x' + rect.height);
        console.log('Координати верхнього лівого кута: (' + left + ', ' + top + ')');
    });
    var container = document.getElementById('container');
    console.log('Позиція прокрутки контейнера: ' + container.scrollTop);
}


function toggleElement(id) {
    var element = document.querySelector('[data-toggle-id="' + id + '"]');
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

function resizeBlock(block) {
    var newSize = prompt('Введіть новий розмір блоку у форматі "ширина, висота":');
    if (newSize) {
        var sizes = newSize.split(',');
        var width = sizes[0].trim();
        var height = sizes[1].trim();
        block.style.width = width + 'px';
        block.style.height = height + 'px';
        getBlocksInfo();
    }
}

function addBlock() {
    var container = document.getElementById('container');
    var block = document.createElement('div');
    block.classList.add('block');
    var id = Math.random().toString(36).substr(2, 9); // Генеруємо випадковий id
    block.dataset.toggleId = id;
    block.onclick = function() {
        resizeBlock(block);
    };
    container.appendChild(block);
    var toggleButton = document.createElement('button');
    toggleButton.textContent = 'Показати/сховати';
    toggleButton.onclick = function() {
        toggleElement(block.dataset.toggleId); // Передаємо ідентифікатор, а не сам елемент
    };
    container.appendChild(toggleButton);
}
