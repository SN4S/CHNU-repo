class Command {
    execute() {
        throw new Error("This method must be implemented by subclasses");
    }
}

class NotaryOffice {
    bookAppointment(clientName) {
        console.log(`Booking an appointment for client: ${clientName}`);
    }
}

class BookAppointmentCommand extends Command {
    constructor(notaryOffice, clientName) {
        super();
        this.notaryOffice = notaryOffice;
        this.clientName = clientName;
    }

    execute() {
        this.notaryOffice.bookAppointment(this.clientName);
    }
}

class CustomerBookingSystem {
    constructor() {
        this.commands = [];
    }

    addCommand(command) {
        this.commands.push(command);
    }

    executeCommands() {
        this.commands.forEach(command => {
            command.execute();
        });
        this.commands = [];
    }
}


const notaryOffice = new NotaryOffice();
const bookingSystem = new CustomerBookingSystem();

const bookAppointmentCmd = new BookAppointmentCommand(notaryOffice, "John Doe");
bookingSystem.addCommand(bookAppointmentCmd);
bookingSystem.executeCommands();

const bookAppointmentCmd2 = new BookAppointmentCommand(notaryOffice, "Jane Smith");
bookingSystem.addCommand(bookAppointmentCmd2);
bookingSystem.executeCommands();
