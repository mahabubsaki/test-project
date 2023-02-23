const tableBody = document.getElementById('table-body');
const shoeBtn = document.getElementById('shoe-btn');
const total = document.getElementById('total');
let no = 1;
shoeBtn.addEventListener('click', function (e) {
    const shoeField = document.getElementById('shoe-field');
    const showPrice = document.getElementById('shoe-price');
    const product = 'Shoe';
    const quantiy = parseFloat(shoeField.value);
    const price = parseFloat(showPrice.innerText);
    const subTotal = quantiy * price;
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>${no}</th>
    <td>${product}</td>
    <td>${quantiy}</td>
    <td>${subTotal}</td>
    `;
    tableBody.appendChild(tr);
    no++;
    const newTotal = subTotal + parseFloat(total.innerText);
    total.innerText = newTotal;
    shoeField.value = "";
});