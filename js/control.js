class Controller {
	constructor(productsView) {
	    this.productsView = productsView;
	}
    
    init() {
        for (let i = 0; i < productsData.length; ++i) {
            this.addItemToInventory(productsData[i])
        }
        this.productsView.init();
    }

    getProducts() {
        return inventory;
    }

    getCart() {
        return cart;
    }

    getItemFromInventory(item) {
        return inventory[inventory.indexOf(item)];
    }

    addItemToInventory(item) {
        inventory.push(new Item(item));
    }

    getItemFromCart(item) {
        if (cart.includes(item)) {
            return cart[cart.indexOf(item)];
        } else return null;
    }

    addProductToCart(item) {
        if (!cart.includes(item) && item.getAmount() > 0) {
            cart.push(item);
        }
    }

    removeItemFromCart(item) {
        let index = cart.indexOf(item);
        cart.splice(index, 1);
    }

    updateAmount(item, value) {
        item.setAmount(value);
        // productsData[productsData.indexOf(item)].amount = value;
        if (cart.includes(item)) {
            // cart[cart.indexOf(item)].amount = value;
            return true;
        }else {
            return false;
        }
    }  
}

const shoppingCartApp = new Controller(productsView);

shoppingCartApp.init();