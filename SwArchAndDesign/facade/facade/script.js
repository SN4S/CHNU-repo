class Client {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class BookingSystem {
    bookAppointment(client) {
        console.log("Appointment booked for customer: " + client.getName());
    }
}

class PaymentSystem {
    processPayment(client, amount) {
        console.log("Payment processed for customer: " + client.getName() + ", Amount: " + amount);
    }
}

class BookingFacade {
    constructor() {
        this.bookingSystem = new BookingSystem();
        this.paymentSystem = new PaymentSystem();
    }

    bookAndPay(client, amount) {
        this.bookingSystem.bookAppointment(client);
        this.paymentSystem.processPayment(client, amount);
    }
}


let client = new Client("John");

let bookingFacade = new BookingFacade();

bookingFacade.bookAndPay(client, 100.0);
