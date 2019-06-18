class View {

	init() {
        this.renderInventory();
    }

    renderInventory() {
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
            p2.innerText = products[i].price + "₪";  // add per kilo to price for friuts and vegis
            p2.className = "price";

            // Create input element
            let input = document.createElement("input");
            input.type = "number";
            input.className = "quantity";
            input.min = "0";
            input.value = products[i].amount;
            input.addEventListener('input', () => this.updateAmount(products[i], input.value));
            
            // Create button element
            let button = document.createElement("BUTTON");
            button.innerText = "Add to cart";
            button.className = "add-item";
            button.addEventListener('click', () => this.addToCart(products[i]));

            // Append child nodes accordigly      
            itemInfo.append(p1, p2, input, button);
            item.append(itemPic, itemInfo);
            inventory.append(item);
        }
    }

    updateAmount(item, value) {
        shoppingCartApp.updateAmount(item, value);
        // let cartItem = shoppingCartApp.getItemFromCart(item);
        // let inventoryItem = shoppingCartApp.getItemFromInventory(item);
        // console.log(cartItem, inventoryItem);
        // if (cartItem)
            // document.getElementsByClassName("item-amount")[itemIndex].value = cartItem.amount;
        // document.getElementsByClassName("quantity")[0].value = inventoryItem.amount;
        this.renderCart(); // IMRPOVE: only rerender input value without looping through entire array 
        this.renderInventory(); // IMRPOVE: only rerender input value without looping through entire array
       
    }

    addToCart(item) {
        shoppingCartApp.addProductToCart(item);
        this.renderCart();
    }

    renderCart() {
        const cartProducts = shoppingCartApp.getCart();
        const cart = document.getElementById('cart');
        cart.innerHTML = ''; // clear HTML from the DOM
        for (let i = 0; i < cartProducts.length; ++i) {
            // Create outer divs
            let item = document.createElement('div');
            item.className = "buy-item";
            let itemPic = document.createElement('div');
            itemPic.className = "item-pic2";

            // Create image element
            let pic = document.createElement('img');
            pic.src = cartProducts[i].image;
            pic.alt = cartProducts[i].name;
            itemPic.append(pic);

            // Create product info div
            let itemInfo = document.createElement('div');
            itemInfo.className = "item-info2";

            // Create text elements
            let p1 = document.createElement("P"); 
            p1.innerText = cartProducts[i].name;
            p1.className = "product-name";
            let p2 = document.createElement("P"); 
            let price = (cartProducts[i].price * cartProducts[i].amount).toFixed(2);
            p2.innerText = price + "₪";  // add per kilo to price for friuts and vegis
            p2.className = "price";

            // Create input element
            let input = document.createElement("input");
            input.type = "number";
            input.className = "item-amount";
            input.min = "0";
            input.value = cartProducts[i].amount;
            input.addEventListener('input', () => this.updateAmount(cartProducts[i], input.value));

            // Create button element
            let button = document.createElement("I");
            button.innerText = "cancel";
            button.className = "material-icons cancel-btn";
            button.addEventListener('click', this.cancelProduct);

            // Append child nodes accordigly      
            itemInfo.append(p1, input, p2, button);
            item.append(itemPic, itemInfo);
            cart.append(item);
        }
    }
    
    cancelProduct() {
        console.log("product canceled");
    }


}

const productsView = new View();