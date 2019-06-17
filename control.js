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

    addProductToCart(item) {
        cart.push(item);
    }
}

const shoppingCartApp = new Controller(productsView);

shoppingCartApp.init();