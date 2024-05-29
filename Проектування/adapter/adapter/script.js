class ElectronicBookingSystem {
    bookAppointment(clientName, appointmentDate) {}
}

// Adaptee class
class NotaryOffice {
    bookNotary(notaryName, appointmentDate) {
        console.log(`Booking notary ${notaryName} for appointment on ${appointmentDate}`);
    }
}

// Adapter class
class NotaryOfficeAdapter extends ElectronicBookingSystem {
    constructor(notaryOffice) {
        super();
        this.notaryOffice = notaryOffice;
    }

    bookAppointment(clientName, appointmentDate) {
        // Convert the client booking to the format of the NotaryOffice class
        const splitName = clientName.split(" ");
        const notaryName = `${splitName[0]} ${splitName[1][0]}.`; // "John Smith" -> "John S."

        // Call the NotaryOffice's method to book the appointment
        this.notaryOffice.bookNotary(notaryName, appointmentDate);
    }
}

// Client class
class Client {
    constructor(bookingSystem) {
        this.bookingSystem = bookingSystem;
    }

    bookAppointment(clientName, appointmentDate) {
        this.bookingSystem.bookAppointment(clientName, appointmentDate);
    }
}

const notaryOffice = new NotaryOffice();
const bookingSystem = new NotaryOfficeAdapter(notaryOffice);

const client = new Client(bookingSystem);
client.bookAppointment("John Smith", "2022-01-01");
