class INotaryBookingFactory {
    createBooking() {}
    createClient() {}
}

// Concrete Factory 1
class MeetingBookingFactory extends INotaryBookingFactory {
    createBooking() {
        return new MeetingBooking();
    }
    createClient() {
        return new IndividualClient();
    }
}

// Concrete Factory 2
class OnlineBookingFactory extends INotaryBookingFactory {
    createBooking() {
        return new OnlineBooking();
    }
    createClient() {
        return new CorporateClient();
    }
}

// Abstract Product 1
class IBooking {
    scheduleBooking() {}
}

// Concrete Product 1
class MeetingBooking extends IBooking {
    scheduleBooking() {
        console.log("Meeting booking scheduled.");
    }
}

// Concrete Product 2
class OnlineBooking extends IBooking {
    scheduleBooking() {
        console.log("Online booking scheduled.");
    }
}

// Abstract Product 2
class IClient {
    getClientDetails() {}
}

// Concrete Product 2
class IndividualClient extends IClient {
    getClientDetails() {
        console.log("Individual client details retrieved.");
    }
}

// Concrete Product 2
class CorporateClient extends IClient {
    getClientDetails() {
        console.log("Corporate client details retrieved.");
    }
}

// Client using Abstract Factory
class Program {
    static main() {
        let meetingFactory = new MeetingBookingFactory();
        let meetingBooking = meetingFactory.createBooking();
        meetingBooking.scheduleBooking();
        let individualClient = meetingFactory.createClient();
        individualClient.getClientDetails();

        let onlineFactory = new OnlineBookingFactory();
        let onlineBooking = onlineFactory.createBooking();
        onlineBooking.scheduleBooking();
        let corporateClient = onlineFactory.createClient();
        corporateClient.getClientDetails();
    }
}

Program.main();
