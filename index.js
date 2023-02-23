const shoeBtn = document.getElementById('shoe-btn'); // shoe button target korchi
const tableBody = document.getElementById('table-body'); // table body target korchi
const total = document.getElementById('total'); // total ke target korchi
let no = 1; //serial set korchi
shoeBtn.addEventListener('click', function () {
    const shoeField = document.getElementById('shoe-field'); // shoe input field
    const shoePrice = document.getElementById('shoe-price'); // shoe price
    const quantity = parseFloat(shoeField.value); // shoe input field er value nicchi
    if (isNaN(quantity)) { // input field er value number kina check kortesi
        alert('Please input a number'); // alert dicchi
        return; // function theke ber hocchi
    }
    const price = parseFloat(shoePrice.innerText); // shoe price er inner text nicchi
    const product = "Shoe"; // product er nam save kortesi

    const subTotal = price * quantity; // subtotal calculate kortesi
    const tr = document.createElement('tr'); // tr toiri korchi
    tr.innerHTML = ` 
    <th>${no}</th>
    <td>${product}</td>
    <td>${quantity}</td>
    <td>${subTotal}</td>
    `;//tr e innerhtml set kortesi
    tableBody.appendChild(tr); //table e tr add kortesi
    no++; // serial number barachhi
    shoeField.value = "";//input field khali kortesi
    const newTotal = parseFloat(total.innerText) + subTotal; //new total hisheb kortesi
    total.innerText = newTotal; //new total set kortesi
});

const shoeCard = document.getElementById('shoe-card');

shoeCard.addEventListener('mouseover', function () {
    console.log('mouse over on shoe card');
});

//shoe card work end here

const bagBtn = document.getElementById('bag-btn');
bagBtn.addEventListener('click', function () {
    const bagField = document.getElementById('bag-field'); // bag input field
    const bagPrice = document.getElementById('bag-price'); // bag price
    const quantity = parseFloat(bagField.value); // bag input field er value nicchi
    if (isNaN(quantity)) { // input field er value number kina check kortesi
        alert('Please input a number'); // alert dicchi
        return; // function theke ber hocchi
    }
    const price = parseFloat(bagPrice.innerText); // bag price er inner text nicchi
    const product = "Bag"; // product er nam save kortesi

    const subTotal = price * quantity; // subtotal calculate kortesi
    const tr = document.createElement('tr'); // tr toiri korchi
    tr.innerHTML = ` 
    <th>${no}</th>
    <td>${product}</td>
    <td>${quantity}</td>
    <td>${subTotal}</td>
    `;//tr e innerhtml set kortesi
    tableBody.appendChild(tr); //table e tr add kortesi
    no++; // serial number barachhi
    bagField.value = "";//input field khali kortesi
    const newTotal = parseFloat(total.innerText) + subTotal;//new total hisheb kortesi
    total.innerText = newTotal;//new total set kortesi
});

//bag card work end here

const capBtn = document.getElementById('cap-btn');
capBtn.addEventListener('click', function () {
    const product = "Cap";
    const quantity = 3;
    const price = 90;
    const subTotal = quantity * price;
    const tr = document.createElement('tr'); // tr toiri korchi
    tr.innerHTML = ` 
    <th>${no}</th>
    <td>${product}</td>
    <td>${quantity}</td>
    <td>${subTotal}</td>
    `;//tr e innerhtml set kortesi
    tableBody.appendChild(tr); //table e tr add kortesi
    no++; // serial number barachhi
});