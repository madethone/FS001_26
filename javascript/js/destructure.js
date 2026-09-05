const item = { itemName: 'Hello', code: 'Hi' };

document.write(item.itemName);
document.write(item.code);


//ES6 - destucturing
const { itemName, code } = item;
document.write(itemName);
document.write(code);


const data = { 
    product: { 
        prodName: '', 
        prodCode: '', 
        prodPrice: { 
             USD: 10, 
             KHR: 40000 
        }
    } 
};
const { product } = datsa;
const { prodName, prodCode, prodPrice } = product;
const { USD, KHR } = prodPrice;


