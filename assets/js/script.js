// card one 
function kAccessoriesOne() {
    const productList = document.getElementById('product-list');
    const kAccessoriesOne = document.getElementById('k-accessories-one').innerText;
    const listItem = document.createElement('li');
    (productList.appendChild(listItem)).innerText = kAccessoriesOne; 
    // calculation part
    const AccessoriesOnePriceString = document.getElementById('k-accessories-one-price').innerText;
    const AccessoriesOnePrice = parseFloat(AccessoriesOnePriceString);
    const totalPriceString = document.getElementById('total-price');
    const totalPrice = totalPriceString.innerText;
    const price = parseFloat(totalPrice);
    totalPriceString.innerText = (price + AccessoriesOnePrice).toFixed(2);
    // make purchase button 
    if ((price + AccessoriesOnePrice) > 0) {
        document.getElementById('make-purchase').removeAttribute('disabled');
        document.getElementById('make-purchase').style.cursor = 'pointer';
    }
}
// card two 
function kAccessoriesTwo() {
    const productList = document.getElementById('product-list');
    const kAccessoriesTwo = document.getElementById('k-accessories-two').innerText;
    const listItem = document.createElement('li');
    (productList.appendChild(listItem)).innerText = kAccessoriesTwo;
    // calculation part
    const AccessoriesTwoPriceString = document.getElementById('k-accessories-two-price').innerText;
    const AccessoriestwoPrice = parseFloat(AccessoriesTwoPriceString);
    const totalPriceString = document.getElementById('total-price');
    const totalPrice = totalPriceString.innerText;
    const price = parseFloat(totalPrice);
    totalPriceString.innerText = (price + AccessoriestwoPrice).toFixed(2);
    // make purchase button 
    if ((price + AccessoriestwoPrice) > 0) {
        document.getElementById('make-purchase').removeAttribute('disabled');
        document.getElementById('make-purchase').style.cursor = 'pointer';
    }
}
// card three 
function homeCooker() {
    const productList = document.getElementById('product-list');
    const homeCooker = document.getElementById('home-cooker').innerText;
    const listItem = document.createElement('li');
    (productList.appendChild(listItem)).innerText = homeCooker; 
    // calculation part
    const homeCookerPriceString = document.getElementById('home-cooker-price').innerText;
    const homeCookerPrice = parseFloat(homeCookerPriceString);
    const totalPriceString = document.getElementById('total-price');
    const totalPrice = totalPriceString.innerText;
    const price = parseFloat(totalPrice);
    totalPriceString.innerText = (price + homeCookerPrice).toFixed(2);
    // make purchase button 
    if ((price + homeCookerPrice) > 0) {
        document.getElementById('make-purchase').removeAttribute('disabled');
        document.getElementById('make-purchase').style.cursor = 'pointer';
    }
}
// card four 
function sportsCap() {
    const productList = document.getElementById('product-list');
    const sportsCap = document.getElementById('sports-cap').innerText;
    const listItem = document.createElement('li');
    (productList.appendChild(listItem)).innerText = sportsCap; 
    // calculation part
    const sportsCapPriceString = document.getElementById('sports-cap-price').innerText;
    const sportsCapPrice = parseFloat(sportsCapPriceString);
    const totalPriceString = document.getElementById('total-price');
    const totalPrice = totalPriceString.innerText;
    const price = parseFloat(totalPrice);
    totalPriceString.innerText = (price + sportsCapPrice).toFixed(2);
    // make purchase button 
    if ((price + sportsCapPrice) > 0) {
        document.getElementById('make-purchase').removeAttribute('disabled');
        document.getElementById('make-purchase').style.cursor = 'pointer';
    }
}
// card five 
function jerseySet() {
    const productList = document.getElementById('product-list');
    const jerseySet = document.getElementById('jersey-set').innerText;
    const listItem = document.createElement('li');
    (productList.appendChild(listItem)).innerText = jerseySet;
    // calculation part
    const jerseySetPriceString = document.getElementById('jersey-set-price').innerText;
    const jerseySetPrice = parseFloat(jerseySetPriceString);
    const totalPriceString = document.getElementById('total-price');
    const totalPrice = totalPriceString.innerText;
    const price = parseFloat(totalPrice);
    totalPriceString.innerText = (price + jerseySetPrice).toFixed(2);
    // make purchase button 
    if ((price + jerseySetPrice) > 0) {
        document.getElementById('make-purchase').removeAttribute('disabled');
        document.getElementById('make-purchase').style.cursor = 'pointer';
    }
}
// card six 
function sportsCates() {
    const productList = document.getElementById('product-list');
    const sportsCates = document.getElementById('sports-cates').innerText;
    const listItem = document.createElement('li');
    (productList.appendChild(listItem)).innerText = sportsCates; 
    // calculation part
    const sportsCatesPriceString = document.getElementById('sports-cates-price').innerText;
    const sportsCatesPrice = parseFloat(sportsCatesPriceString);
    const totalPriceString = document.getElementById('total-price');
    const totalPrice = totalPriceString.innerText;
    const price = parseFloat(totalPrice);
    totalPriceString.innerText = (price + sportsCatesPrice).toFixed(2);
    // make purchase button 
    if ((price + sportsCatesPrice) > 0) {
        document.getElementById('make-purchase').removeAttribute('disabled');
        document.getElementById('make-purchase').style.cursor = 'pointer';
    }
}
// card seven 
function relaxChair() {
    const productList = document.getElementById('product-list');
    const relaxChair = document.getElementById('relax-chair').innerText;
    const listItem = document.createElement('li');
    (productList.appendChild(listItem)).innerText = relaxChair; 
    // calculation part
    const relaxChairPriceString = document.getElementById('relax-chair-price').innerText;
    const relaxChairPrice = parseFloat(relaxChairPriceString);
    const totalPriceString = document.getElementById('total-price');
    const totalPrice = totalPriceString.innerText;
    const price = parseFloat(totalPrice);
    totalPriceString.innerText = (price + relaxChairPrice).toFixed(2);
    // make purchase button 
    if ((price + relaxChairPrice) > 0) {
        document.getElementById('make-purchase').removeAttribute('disabled');
        document.getElementById('make-purchase').style.cursor = 'pointer';
    }
}
// card eight 
function childrenPlay() {
    const productList = document.getElementById('product-list');
    const childrenPlay = document.getElementById('children-play').innerText;
    const listItem = document.createElement('li');
    (productList.appendChild(listItem)).innerText = childrenPlay;
    // calculation part
    const childrenPlayPriceString = document.getElementById('children-play-price').innerText;
    const childrenPlayPrice = parseFloat(childrenPlayPriceString);
    const totalPriceString = document.getElementById('total-price');
    const totalPrice = totalPriceString.innerText;
    const price = parseFloat(totalPrice);
    totalPriceString.innerText = (price + childrenPlayPrice).toFixed(2);
    // make purchase button 
    if ((price + childrenPlayPrice) > 0) {
        document.getElementById('make-purchase').removeAttribute('disabled');
        document.getElementById('make-purchase').style.cursor = 'pointer';
    }
}
// card nine 
function flexibleSofa() {
    const productList = document.getElementById('product-list');
    const flexibleSofa = document.getElementById('flexible-sofa').innerText;
    const listItem = document.createElement('li');
    (productList.appendChild(listItem)).innerText = flexibleSofa; 
    // calculation part
    const flexibleSofaPriceString = document.getElementById('flexible-sofa-price').innerText;
    const flexibleSofaPrice = parseFloat(flexibleSofaPriceString);
    const totalPriceString = document.getElementById('total-price');
    const totalPrice = totalPriceString.innerText;
    const price = parseFloat(totalPrice);
    totalPriceString.innerText = (price + flexibleSofaPrice).toFixed(2);
    // make purchase button 
    if ((price + flexibleSofaPrice) > 0) {
        document.getElementById('make-purchase').removeAttribute('disabled');
        document.getElementById('make-purchase').style.cursor = 'pointer';
    }
}
// -----------Coupon Part -----------
// coupon validation 
document.getElementById('discount-field').addEventListener('keyup', function () {
    const applyBtn = document.getElementById('apply-btn');
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const totalFinalPrice = parseFloat(totalPriceString);
    const discountInputField = document.getElementById('discount-field');
    if (discountInputField.value === 'SELL200' && totalFinalPrice >= 200) {
        applyBtn.removeAttribute('disabled');
        applyBtn.style.background = '#a3e635';
        applyBtn.style.cursor = 'pointer';
    }
    else {
        applyBtn.setAttribute('disabled', true);
        applyBtn.style.background = '#E527B2';
        applyBtn.style.cursor = 'not-allowed';
    }
});  
// apply button calculation
document.getElementById('apply-btn').addEventListener('click', function () {
    const discountInputField = document.getElementById('discount-field');
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const totalFinalPrice = parseFloat(totalPriceString);
    if (discountInputField.value === 'SELL200' && totalFinalPrice >= 200) {
        apply();
    }
});
function apply() {
    console.log('heh');
    const totalPrice = document.getElementById('total-price');
    const totalPriceString = totalPrice.innerText;
    const totalFinalPrice = parseFloat(totalPriceString);
    const discountPrice = document.getElementById('discount-price'); 
    const total = document.getElementById('total');

    discountPrice.innerText = ((20 / 100) * totalFinalPrice).toFixed(2);
    total.innerText = (totalFinalPrice - ((20 / 100) * totalFinalPrice)).toFixed(2);
}