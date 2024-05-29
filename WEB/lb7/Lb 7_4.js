document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("#tabs-container button");
    const tabContents = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const tabName = button.getAttribute("data-tabname");


            tabContents.forEach(content => {
                if (content.getAttribute("data-tabcontent") === tabName) {
                    content.classList.add("active");
                    setTimeout(() => {
                        content.style.display = "block";
                    }, 50); // Затримка перед зміною display для анімації
                } else {
                    content.classList.remove("active");
                    setTimeout(() => {
                        content.style.display = "none";
                    }, 50); // Затримка перед зміною display для анімації
                }
            });

            buttons.forEach(btn => {
                if (btn === button) {
                    btn.classList.add("active");
                } else {
                    btn.classList.remove("active");
                }
            });
        });
    });
    
    if (buttons.length > 0) {
        buttons[0].click(); 
    }
});
