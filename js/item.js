class Item {
    constructor(item) {
        this.id = item.id;
        this.name = item.name;
        this.image = item.image;
        this.price = item.price;
        this.catagory = item.catagory;
        this.amount = 0;
    }
 
    getId(){
        return this.id;
    }
     
    setId(newId){
        this.id = newdI;
    }
     
    getName(){
        return this.name;
    }
     
    setName(newName){
        this.name = newName;
    }
     
    getImage(){
        return this.image;
    }
     
    setImage(newImage){
        this.image = newImage;
    }

    getPrice(){
        return this.price;
    }
     
    setPrice(newPrice){
        this.price = newPrice;
    }

    getAmount(){
        return this.amount;
    }
     
    setAmount(newAmount){
        this.amount = newAmount;
    }
}