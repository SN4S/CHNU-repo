class AppointmentScheduler {
    constructor() {
        this.observers = [];
        this.appointmentDate = "";
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers() {
        for (const observer of this.observers) {
            observer.update();
        }
    }

    setAppointmentDate(appointmentDate) {
        this.appointmentDate = appointmentDate;
        this.notifyObservers();
    }

    getAppointmentDate() {
        return this.appointmentDate;
    }
}

// Concrete observer interface
class Observer {
    update() {}
}

// Concrete observer 1
class Client extends Observer {
    constructor(name, office) {
        super();
        this.name = name;
        this.office = office;
        this.office.addObserver(this);
    }

    cancelAppointment() {
        this.office.removeObserver(this);
    }

    update() {
        console.log(`${this.name}: New appointment date is set for ${this.office.getAppointmentDate()}`);
    }
}

// Concrete observer 2
class Manager extends Observer {
    constructor(name, office) {
        super();
        this.name = name;
        this.office = office;
        this.office.addObserver(this);
    }

    update() {
        console.log(`${this.name}: New appointment date is set for ${this.office.getAppointmentDate()}`);
    }
}

// Main function
function electronicAppointmentSystem() {
    const office = new AppointmentScheduler();

    // Create clients
    const client1 = new Client("Client 1", office);
    const client2 = new Client("Client 2", office);

    // Create manager
    const manager = new Manager("Manager", office);

    // Set appointment date
    office.setAppointmentDate("2022-10-31");

    // Client 2 cancels appointment
    client2.cancelAppointment();

    // Set new appointment date
    office.setAppointmentDate("2022-11-15");
}

// Run the main function
electronicAppointmentSystem();
