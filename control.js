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
}

const shoppingCartApp = new Controller(productsView);

shoppingCartApp.init();