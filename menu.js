const addButtons = document.querySelectorAll('.add-btn');
const orderList = document.getElementById('order-list');
const totalElem = document.getElementById('total');
const discountElem = document.getElementById('discount');
const finalElem = document.getElementById('final');
const datetimeElem = document.getElementById('datetime');

let total = 0;

addButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.parentElement;
    const name = card.getAttribute('data-name');
    const price = parseFloat(card.getAttribute('data-price'));

    // Add item to order list
    const li = document.createElement('li');
    li.textContent = `${name} - $${price.toFixed(2)}`;
    orderList.appendChild(li);

    // Update totals
    total += price;
    const discount = total * 0.1;
    const final = total - discount;

    totalElem.textContent = total.toFixed(2);
    discountElem.textContent = discount.toFixed(2);
    finalElem.textContent = final.toFixed(2);

    // Update date/time
    const now = new Date();
    datetimeElem.textContent = now.toLocaleString();
  });
});
