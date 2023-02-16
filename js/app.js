let count = 0;
let finalTotal = 0;

// first card
document.getElementById("first-btn").addEventListener("click", function () {
  count++;
  const productName = document.getElementById("first-name").innerText;
  const productPrice = document.getElementById("first-price").innerText;
  const productQuantity = document.getElementById("first-quantity").innerText;

  const total = parseInt(productPrice) * parseInt(productQuantity);

  showData(productName, productPrice, productQuantity, total);
  disabledButton("first-btn");
  totalAmount(total);
});

// second card
document.getElementById("second-btn").addEventListener("click", function () {
  count++;
  const productName = document.getElementById("second-name").innerText;
  const productPrice = document.getElementById("second-price").innerText;
  const productQuantity = document.getElementById("second-quantity").innerText;

  const total = parseInt(productPrice) + parseInt(productQuantity);

  showData(productName, productPrice, productQuantity, total);
  disabledButton("second-btn");
  totalAmount(total);
});

// third card
document.getElementById("third-btn").addEventListener("click", function () {
  count++;
  const productName = document.getElementById("third-name").innerText;
  const productPrice = document.getElementById("third-price").innerText;
  const productQuantity = document.getElementById("third-quantity").innerText;

  const total = parseInt(productPrice) + parseInt(productQuantity);

  showData(productName, productPrice, productQuantity, total);
  disabledButton("third-btn");
  totalAmount(total);
});

// fourth card
document.getElementById("fourth-btn").addEventListener("click", function () {
  count++;
  const productName = document.getElementById("fourth-name").innerText;
  const productPrice = document.getElementById("fourth-price").innerText;
  const productQuantity = document.getElementById("fourth-quantity").innerText;

  const total = parseInt(productPrice) - parseInt(productQuantity);

  showData(productName, productPrice, productQuantity, total);
  disabledButton("fourth-btn");
  totalAmount(total);
});

// fifth card
document.getElementById("fifth-btn").addEventListener("click", function () {
  count++;
  const productName = document.getElementById("fifth-name").innerText;
  const productPrice = document.getElementById("fifth-price").value;
  const productQuantity = document.getElementById("fifth-quantity").value;

  if (isNaN(productPrice) || isNaN(productQuantity)) {
    alert("Please number of value");
  } else if (productPrice === "" || productQuantity === "") {
    alert("Please enter number of amount");
  } else {
    const total = parseInt(productPrice) / parseInt(productQuantity);
    showData(productName, productPrice, productQuantity, total);
    disabledButton("fifth-btn");
    totalAmount(total);
  }
});

function totalAmount(total1) {
  finalTotal += total1;
  const total = document.getElementById("total-amount");
  total.innerText = finalTotal;
}

function showData(productName, productPrice, productQuantity, total) {
  const tbody = document.getElementById("table-data");

  const tr = document.createElement("tr");
  tr.innerHTML = `
  <th>${count}</th>
  <th>${productName}</th>
  <td>${productPrice}</td>
  <td>${productQuantity}</td>
  <td>${total}</td>
  `;
  tbody.appendChild(tr);

  const totalProduct = document.getElementById("total-product");
  totalProduct.innerText = tbody.children.length;
}

function disabledButton(id) {
  document.getElementById(id).setAttribute("disabled", true);
}
