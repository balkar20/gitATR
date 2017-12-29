function hamburger(size , stuffing){
    this.size = size;
    this.stuffing = stuffing || [];
    var numStuffing = [];
        if(stuffing !== 0 )
        numStuffing.push(stuffing);
    
    this.addStuffing = function(stuffing) {
        
        if(numStuffing.length < 5  && ~numStuffing.indexOf(stuffing) >= 0){
            size = "SIZE_SMALL"
            numStuffing.push(stuffing);
            console.log("Добавлена начинка: " + stuffing);
        }
        else if(numStuffing.length <=10 && ~numStuffing.indexOf(stuffing) >= 0 ){
            size = "SIZE_LARGE"
            numStuffing.push(stuffing);
            console.log("Добавлена начинка: " + stuffing);
        }
           else 
        {
            console.log("Нельзя добалять начинку к маленькому гамбургеру, если такая уже есть, и если уже добавлено 5 начинок.Так же нельзя добавлять начинку к большому гамбургеру, если уже добавленео 10 начинок !!!")
        }
    }
    this.getStuffing = function(){
        return numStuffing;
        
    }
    
    
    this.getSize = function(){
        if(numStuffing.length <= 5 && numStuffing.length >= 0){
            this.size = "SIZE_SMALL";
        }
        else if (numStuffing.length > 5 && numStuffing.length <= 10){
            this.size = "SIZE_LARGE";
        }
        else{
            console.log("Такого размера нет в ассортименте !!!");
        }
        
        return this.size; 
    }
    
}


var Product = new hamburger("SIZE_LARGE", "CHEESE");

console.log(Product.size);
console.log(Product.stuffing);

Product.addStuffing("ONION");
Product.addStuffing("SALT");
Product.addStuffing("KECTHUP");
Product.addStuffing("MORKVA");
Product.addStuffing("LAKOMKA");
Product.addStuffing("LAKOMKA");


console.log(Product.stuffing);
console.log(Product.getSize());

console.log(Product.getStuffing());







