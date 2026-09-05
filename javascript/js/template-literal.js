const item = {
    name: 'AA',
    code: 'BB',
    price: 10
};

document.write(
          'Item Name: ' + 
          item.name + '<br>' + 
          'Item Code: ' + item.code + '<br>' + 
          'Item Price: ' + item.price + '<br>');
  
//Template literal
document.write(
                `Item Name: ${item.name} <br>
                Item code: ${item.code} <br>
                Item price: ${item.price}
                `)