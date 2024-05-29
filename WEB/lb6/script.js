const productList = new Map();
const productListDisplay = document.querySelector('.products_list__container');
const productsFilterInput= document.querySelector('.product_filter_input')
const createProductButton = document.getElementById('create_product_button');
const pricesSum = document.querySelector('.products_sum span')

createProductButton.addEventListener('click', createProduct);
productListDisplay.addEventListener('click', deleteProduct);
productsFilterInput.addEventListener('input', filter);
productListDisplay.addEventListener('click', popup);

function renderCards() {
    productListDisplay.innerHTML = '';
    for (let [name, detail] of productList) {
        productListDisplay.insertAdjacentHTML(
            "afterbegin",
            `<div class="product_item" data-name="${name}">
                <div class="product_item_photo">
                    <img src="images/${detail.image}">
                </div>
                <div class="product_item_content">
                    <div class="product_item_title popup-link">Назва: ${name}</div>
                    <div class="product_item_price popup-link">Ціна: ${detail.price} грн</div>
                    <button class="product_item_delete">Видалити</button>
                </div>
            </div>`
        );
    }
    sumOfPrices()

}

function sumOfPrices() {
    if (productList.size > 0) {
        let sum = 0;
        for (let value of productList.values() ) {
            sum += parseInt(value.price);
        }
        pricesSum.textContent = `${sum} грн`;
    }
}

function popup(event) {
    const parentElement = event.target.closest(".product_item");
    const productName = parentElement.getAttribute('data-name');
    const product = productList.get(productName);
    if (event.target.classList.contains('popup-link')) {
        const prevValue = document.querySelector('.popup_last_value');
        const popupButton = document.querySelector('.popup_button button');

        togglePopup();

        if (event.target.classList.contains('product_item_price')) {
            popupButton.onclick = () => newPrice(productName);
            prevValue.textContent = ` ${product.price} грн`;

        }else if (event.target.classList.contains('product_item_title')) {
            popupButton.onclick =  () => newName(productName);
            prevValue.textContent = productName;
        }
    }
}



function newName(productName) {
    const newValue = document.querySelector('.popup_name_input').value;
    console.log(productName);
    const product = productList.get(productName);

    const ProductDetail = { price: product.price, image: product.image};

    productList.set(newValue, ProductDetail);

    productList.delete(productName);
    renderCards();
    togglePopup();
}

function newPrice(productName) {

    const newValue = document.querySelector('.popup_name_input').value;

    const product = productList.get(productName);
    product.price = newValue;
    renderCards();
    togglePopup();
}

const popupBody = document.querySelector('.popup');
const popupClose = document.querySelector('.popup_close');
const body = document.querySelector('body');
function togglePopup() {
    popupBody.classList.toggle('open');

    if (popupBody.classList.contains('open')) {
        body.classList.add('lock');
    } else {
        body.classList.remove('lock');
    }
}


popupClose.addEventListener('click', togglePopup);


function filter() {
    const productsFilterValue = document.querySelector('.product_filter_input').value.toLowerCase();
    const productsItems = document.querySelectorAll('.product_item');

    productsItems.forEach(element => {
        const itemTitle = element.querySelector('.product_item_title');
        const titleText = itemTitle.textContent.toLowerCase();

        if (!titleText.includes(productsFilterValue)) {
            element.style.display = 'none';
        } else {
            element.style.display = 'flex';
        }
    });
}

function deleteProduct(event) {
    if (!event.target.classList.contains('product_item_delete')) return;

    const parentElement = event.target.closest(".product_item");
    const productName = parentElement.getAttribute('data-name');
    parentElement.classList.add('deleted');
    setTimeout(() => { productList.delete(productName); renderCards()}, 1000)

}

function createProduct() {
    const productName = document.getElementById('input_name').value;
    const productPrice = document.getElementById('input_price').value;
    const productImg = document.getElementById('imageInput').files[0];

    if (!productImg) {
        alert("Файл (фото) не вибрано");
        return;
    }

    if (isNaN(productPrice) || productPrice <= 0) {
        alert("Введіть коректну ціну продукта");
        return;
    }


    const ProductDetail = { price: productPrice, image: productImg.name };
    productList.set(productName, ProductDetail);
    console.log(productList);
    renderCards();
    const productItem = document.querySelector('.product_item');
    if (productItem) {
        productItem.classList.add('new');
    }
}

window.addEventListener('beforeunload', () => {
    localStorage.setItem("products", JSON.stringify(Array.from(productList.entries())));
});

window.addEventListener('load', () => {
    const raw = localStorage.getItem("products");
    const products = JSON.parse(raw);
    if (products) {
        products.forEach(([key, value]) => {
            productList.set(key, value);
        });
        renderCards();
    }
});