class Controller {
	constructor(productsView) {
	    this.productsView = productsView;
	}
    
    init() {
        this.productsView.init();
    }

    getProducts() {
        return productsData;
    }

    getCart() {
        return cart;
    }

    getItemFromInventory(item) {
        return productsData[productsData.indexOf(item)];
    }

    getItemFromCart(item) {
        return cart[cart.indexOf(item)];
    }

    addProductToCart(item) {
        if (!cart.includes(item) && item.amount > 0) {
            cart.push(item);
        }
    }

    updateAmount(item, value) {
        productsData[productsData.indexOf(item)].amount = value;
        if (cart.includes(item)) {
            cart[cart.indexOf(item)].amount = value;
        }
    }

    updatePrice() {
        
    }

   
}

const shoppingCartApp = new Controller(productsView);

shoppingCartApp.init();