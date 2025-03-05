const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll(".price");
    
    let totalPrice = 0;
    
    prices.forEach(price => {
        totalPrice += parseInt(price.textContent);
    });
    
    let totalRow = document.querySelector("#ans");
    if (!totalRow) {
       
        const newRow = document.createElement("tr");
        const newCell = document.createElement("td");
     
        newCell.setAttribute("colspan", "2");
        newCell.setAttribute("id", "ans");
        newCell.textContent = `Total Price: Rs ${totalPrice}`;
       
        newRow.appendChild(newCell);
        document.querySelector("table").appendChild(newRow);
    } else {
        
        totalRow.textContent = `Total Price: Rs ${totalPrice}`;
    }
    
    getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);