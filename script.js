const account = {
    owner: "Your Name",
    balance: 5000,
    pin: "1234",

    deposit(amount) {
        this.balance = this.balance + amount;
        return "New balance is ₦" + this.balance;
    },

    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient funds";
        } else {
            this.balance = this.balance - amount;
            return "New balance is ₦" + this.balance;
        }
    },

    checkBalance() {
        return "Balance is ₦" + this.balance;
    }
};

console.log(account.deposit(2000));
console.log(account.withdraw(1000));
console.log(account.withdraw(10000));
console.log(account.checkBalance());
// NUMBER SEVEN
const order = {
    orderId: 101,

    customer: {
        name: "Tunde",
        email: "tunde@gmail.com",
        address: "Lagos"
    },

    product: {
        name: "Shoe",
        price: 10000,
        quantity: 2
    },

    isDelivered: false,

    totalPrice() {
        return this.product.price * this.product.quantity;
    },

    summary() {
        return "Order " + this.orderId + ": " +
            this.customer.name + " ordered " +
            this.product.quantity + "x " +
            this.product.name + " = ₦" +
            this.totalPrice();
    }
};

console.log(order.totalPrice());
console.log(order.summary());

const { name } = order.customer;
console.log(name);
// NUMBER EIGHT
const book = {
    title: "JS for Beginners",
    author: "John Doe",
    pages: 200,
    isRead: false,

    readBook() {
        this.isRead = true;
    },

    addInfo(publisher, year) {
        this.publisher = publisher;
        this.year = year;
    }
};

book.readBook();
book.addInfo("Tech Books Ltd", 2025);

console.log(book);