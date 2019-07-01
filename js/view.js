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
            item.id = "inventory-item-" + products[i].id;
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
            input.addEventListener('input', () => {
                this.updateAmount(products[i], input.value);
                this.renderTotalCost();
            });
            
            // Create button element
            let button = document.createElement("BUTTON");
            button.innerText = "Add to cart";
            button.className = "add-item";
            button.addEventListener('click', () => {
                this.addToCart(products[i]);
                this.renderTotalCost();
                this.renderTotalItems();
            });

            // Append child nodes accordigly      
            itemInfo.append(p1, p2, input, button);
            item.append(itemPic, itemInfo);
            inventory.append(item);
        }
    }
    
    addToCart(item) {
        shoppingCartApp.addProductToCart(item);
        const cart = document.getElementById('cart');

        // Create outer divs
        let cartItem = document.createElement('div');
        cartItem.className = "buy-item";
        cartItem.id = "cart-item-" + item.id;
        let itemPic = document.createElement('div');
        itemPic.className = "item-pic2";

        // Create image element
        let pic = document.createElement('img');
        pic.src = item.image;
        pic.alt = item.name;
        itemPic.append(pic);

        // Create product info div
        let itemInfo = document.createElement('div');
        itemInfo.className = "item-info2";

        // Create text elements
        let p1 = document.createElement("P"); 
        p1.innerText = item.name;
        p1.className = "product-name";
        let p2 = document.createElement("P");
        let price = (item.price * item.amount).toFixed(2);
        p2.innerText = price + "₪";  // add per kilo to price for friuts and vegis
        p2.className = "price";

        // Create input element
        let input = document.createElement("input");
        input.type = "number";
        input.className = "item-amount";
        input.min = "0";
        input.value = item.amount;
        input.addEventListener('input', () => {
            this.updateAmount(item, input.value);
            this.renderTotalCost();
        });

        // Create button element
        let button = document.createElement("I");
        button.innerText = "cancel";
        button.className = "material-icons cancel-btn";
        button.addEventListener('click', () => {
            this.cancelProduct(item);
            this.renderTotalCost();
            this.renderTotalItems();
        });

        // Append child nodes accordigly      
        itemInfo.append(p1, input, p2, button);
        cartItem.append(itemPic, itemInfo);
        cart.append(cartItem);
    }

    updateAmount(item, value) {
        if (shoppingCartApp.updateAmount(item, value)) {
            let cartItem = document.getElementById("cart-item-" + item.id);
            cartItem.getElementsByClassName("item-amount")[0].value = value;
            cartItem.getElementsByClassName("price")[0].innerText = (item.price * item.amount).toFixed(2);
        }
        
        let inventoryItem = document.getElementById("inventory-item-" + item.id);
        inventoryItem.getElementsByClassName("quantity")[0].value = value;
    }

    totalCost() {
        const cartProducts = shoppingCartApp.getCart();
        let totalCost = 0;
        for (let i = 0; i < cartProducts.length; ++i) {
            totalCost += Number((cartProducts[i].price * cartProducts[i].amount).toFixed(2));
        }

        return (totalCost).toFixed(2);
    }

    renderTotalCost() {
        let total = this.totalCost();
        document.getElementsByClassName("total-cost")[0].innerHTML = total + ' &#8362';
    }

    totalItems() {
        const cartProducts = shoppingCartApp.getCart();
        let total = 0;
        for (let i = 0; i < cartProducts.length; ++i) {
            ++total;
        }
        return total;
    }

    renderTotalItems() {
        let total = this.totalItems();
        document.getElementsByClassName("badge")[0].innerHTML = total;
    }
    
    cancelProduct(item) {
        shoppingCartApp.removeItemFromCart(item);
        document.getElementById("cart-item-" + item.id).remove();
    }
}

const productsView = new View();