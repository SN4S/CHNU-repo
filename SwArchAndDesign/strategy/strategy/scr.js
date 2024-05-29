class NotaryService {
    constructor() {
        this.serviceName = '';
    }

    bookAppointment(clientName) {
        throw new Error('Method not implemented');
    }
}

class NotarialActsService extends NotaryService {
    constructor() {
        super();
        this.serviceName = 'Notarial Acts';
    }

    bookAppointment(clientName) {
        console.log(`Booking an appointment for ${this.serviceName} with ${clientName}`);
    }
}

class CertificationService extends NotaryService {
    constructor() {
        super();
        this.serviceName = 'Certification';
    }

    bookAppointment(clientName) {
        console.log(`Booking an appointment for ${this.serviceName} with ${clientName}`);
    }
}

class ClientBookingSystem {
    constructor(service) {
        this.service = service;
    }

    setService(service) {
        this.service = service;
    }

    bookAppointment(clientName) {
        this.service.bookAppointment(clientName);
    }
}

function main() {
    const notarialActsService = new NotarialActsService();
    const certificationService = new CertificationService();

    const bookingSystem = new ClientBookingSystem(notarialActsService);
    bookingSystem.bookAppointment('John Smith');

    bookingSystem.setService(certificationService);
    bookingSystem.bookAppointment('Alice Johnson');
}

main();
