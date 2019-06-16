class View {
	init() {
        this.renderProducts();
    }

    renderProducts() {
        const products = shoppingCartApp.getProducts();
        const inventory = document.getElementById('inventory');
        inventory.innerHTML = ''; // clear HTML from the DOM
        for (let i = 0; i < products.length; ++i) {
            // Create outer divs
            let item = document.createElement('div');
            item.className = "item";
            let itemPic = document.createElement('div');
            itemPic.className = "item-pic";

            // Create image element
            let pic = document.createElement('img');
            pic.src = products[i].image;
            pic.alt = products[i].name;
            itemPic.append(pic);

            // Create product info div
            let itemInfo = document.createElement('div');
            itemInfo.className = "item-info";

            // Create text elements
            let p1 = document.createElement("P"); 
            p1.innerText = products[i].name;
            p1.className = "product-name";
            let p2 = document.createElement("P"); 
            p2.innerText = products[i].price + "₪";  
            p2.className = "price";

            // Create input element
            let input = document.createElement("input");
            input.type = "number";
            input.className = "quantity";
            input.min = "0";
            input.value = "0";

            // Create button element
            let button = document.createElement("BUTTON");
            button.innerText = "Add to cart";
            button.className = "add-item";

            // Append child nodes accordigly      
            itemInfo.append(p1, p2, input, button);
            item.append(itemPic, itemInfo);
            inventory.append(item);
        }
    }
}


const productsView = new View();