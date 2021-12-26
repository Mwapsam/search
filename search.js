const search = () => {
    const searchBox = document.getElementById('search-item').value.toUpperCase();
    const storeItems = document.getElementById('product-list');
    const product = document.querySelectorAll('.product');
    const pname = storeItems.getElementsByTagName('h2');
    
    for (let j = 0; j < pname.length; j++) {
      let match = product[j].getElementsByTagName('h2')[0];
  
      if (match) {
        let textValue = match.textContent || match.innerHTML;
  
        if (textValue.toUpperCase().indexOf(searchBox) > -1) {
          product[j].style.display = '';
        } else {
          product[j].style.display = 'none';
        }
      }
    }
  };