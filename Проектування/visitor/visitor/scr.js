
class ClientVisitor {
    visitRegularClient(client) {
        console.log(`Regular client: ${client.getName()}, has requested an appointment.`);
    }

    visitPrimeClient(client) {
        console.log(`Prime client: ${client.getName()}, has requested an appointment.`);
    }
}

class RegularClient {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    accept(visitor) {
        visitor.visitRegularClient(this);
    }
}

class PrimeClient {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    accept(visitor) {
        visitor.visitPrimeClient(this);
    }
}

function main() {
    const clients = [
        new RegularClient("John Doe"),
        new PrimeClient("Jane Smith")
    ];

    const visitor = new ClientVisitor();

    clients.forEach(client => {
        client.accept(visitor);
    });
}

main();
