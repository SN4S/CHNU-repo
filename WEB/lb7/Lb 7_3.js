document.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('node-header')) {
        const nodeChildren = target.nextElementSibling;

        
        if (nodeChildren) {
            nodeChildren.style.display = (nodeChildren.style.display === 'block') ? 'none' : 'block';
        }
    }
});
