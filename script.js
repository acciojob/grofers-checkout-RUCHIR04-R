const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const prices = document.querySelectorAll(".price");
    let totalPrice = 0;
    prices.forEach(price => {
        totalPrice += parseInt(price.textContent);
    });
    
    const newRow = document.createElement("tr");
    const newCell = document.createElement("td");
    
    newCell.setAttribute("colspan", "2");
    newCell.textContent = `Total Price: Rs ${totalPrice}`;
 
    newRow.appendChild(newCell);
    document.querySelector("table").appendChild(newRow);
    
    getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);

