const products = new Map();
const orders = new WeakMap();

function addProduct() {
    const productName = document.querySelector('.shop_input_addName').value;
    const productPrice = document.querySelector('.shop_input_addPrice').value;
    const productAmount = document.querySelector('.shop_input_addAmount').value;
    if (!products.has(productName) ) {
        products.set(productName, {productPrice: productPrice, productAmount: productAmount});
        console.log('Продукт додано.')
        updateProductInfo()} else {
        console.log("Продукт з даною назвою вже існує.")
    }
}

const addProductButton = document.querySelector('.shop_addProduct_button');

addProductButton.addEventListener("click", addProduct);

function removeProduct() {
    const productName = document.querySelector('.shop_input_RemoveName').value;
    if (products.has(productName)) {
        products.delete(productName);
        console.log('Продукт видалено.')
        updateProductInfo()
    } else {
        console.log('Продукта з такою назвою немає.')
    }
}

const removeProductButton = document.querySelector('.shop_removeProduct_button');
removeProductButton.addEventListener("click", removeProduct);

function renewProduct() {
    const productName = document.querySelector('.shop_input_renewName').value;
    const productPrice = document.querySelector('.shop_input_renewPrice').value;
    const productAmount = document.querySelector('.shop_input_renewAmount').value;

    if (products.has(productName)) {
        products.set(productName, {productPrice: productPrice, productAmount: productAmount});
        console.log('Інформацію про продукт оновлено.')
        updateProductInfo() }
    else {
        console.log("Даного продукту немає.")
    }
}

const renewButton = document.querySelector('.shop_button_renew');

renewButton.addEventListener("click", renewProduct);

function findProduct() {
    const productName = document.querySelector('.shop_input_searchProduct').value;
    const findList = document.querySelector('.shop_info_searchProduct');

    if (products.has(productName)) {
        let prop = products.get(productName);
        findList.textContent = `${productName}: ціна ${prop.productPrice}, кількість ${prop.productAmount}`
    } else {
        findList.textContent= '';
        console.log('Продукту з даною назвою не знайдено.')
    }
}

const findProductButton = document.querySelector('.shop_button_searchProduct');
findProductButton.addEventListener("click", findProduct);

function updateProductInfo() {
    const Productlist = document.querySelector('.shop_products_list');
    const spanElements = [...Productlist.getElementsByTagName("span")];

    if (spanElements.length > 0) {
        spanElements.forEach(spanElement =>  spanElement.parentNode.removeChild(spanElement));
    }
    for (let [key,value] of products) {
        let spanElement = document.createElement('span');
        spanElement.classList.add('shop_products_list_item');
        spanElement.textContent = `${key}: ціна ${value.productPrice}, кількість ${value.productAmount}`
        Productlist.appendChild(spanElement);

    }
}
const createOrderButton = document.querySelector('.shop_orderAmount_button');
function createOrder() {
    const orderName = document.querySelector('.shop_input_orderName').value;
    const productName = document.querySelector('.shop_input_ordertitle').value;
    const productAmount = document.querySelector('.shop_input_orderAmount').value;
    const productInStorage = products.get(productName);
    if (products.has(productName) && parseInt(productAmount) > 0 && parseInt(productAmount) <= productInStorage.productAmount) {
        const detailOrder = {productName: productName, productAmount: productAmount};
        orders.set(detailOrder, orderName);
        productInStorage.productAmount = parseInt(productInStorage.productAmount) - parseInt(productAmount);
        updateProductInfo();
    }
}
createOrderButton.addEventListener('click', createOrder)