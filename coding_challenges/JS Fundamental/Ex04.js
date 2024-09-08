function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];

const tips = bills.map(calcTip);

console.log("bills: "+bills);
console.log("tips: "+ tips);


const total = bills.map((bill, index) => bill + tips[index]);

console.log("total: "+total);