class IBooking {
    book() {
        throw new Error("Method 'book' must be implemented.");
    }
}

class NotaryOffice extends IBooking {
    book() {
        console.log("Booking system for the notary office");
    }
}

class BookingDecorator extends IBooking {
    constructor(decoratedBooking) {
        super();
        this.decoratedBooking = decoratedBooking;
    }

    book() {
        this.decoratedBooking.book();
    }
}

class ClientBookingDecorator extends BookingDecorator {
    constructor(decoratedBooking) {
        super(decoratedBooking);
    }

    book() {
        super.book();
        this.addClientBookingFunctionality();
    }

    addClientBookingFunctionality() {
        console.log("Adding client booking functionality");
    }
}

class ScheduleBookingDecorator extends BookingDecorator {
    constructor(decoratedBooking) {
        super(decoratedBooking);
    }

    book() {
        super.book();
        this.addScheduleBookingFunctionality();
    }

    addScheduleBookingFunctionality() {
        console.log("Adding schedule booking functionality");
    }
}

class NotificationBookingDecorator extends BookingDecorator {
    constructor(decoratedBooking) {
        super(decoratedBooking);
    }

    book() {
        super.book();
        this.addNotificationBookingFunctionality();
    }

    addNotificationBookingFunctionality() {
        console.log("Adding notification booking functionality");
    }
}

let basicBooking = new NotaryOffice();
basicBooking.book();
console.log();

let decoratedBooking = new NotificationBookingDecorator(
    new ScheduleBookingDecorator(
        new ClientBookingDecorator(new NotaryOffice())
    )
);
decoratedBooking.book();
