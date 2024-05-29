class Mediator {
    sendMessage(message, colleague) {
        throw new Error('Method sendMessage must be implemented');
    }
}

class Colleague {
    constructor(mediator) {
        this.mediator = mediator;
    }

    receiveMessage(message) {
        throw new Error('Method receiveMessage must be implemented');
    }

    sendMessage(message) {
        throw new Error('Method sendMessage must be implemented');
    }
}

class NotaryOffice extends Mediator {
    constructor() {
        super();
        this.colleagues = [];
    }

    addColleague(colleague) {
        this.colleagues.push(colleague);
    }

    sendMessage(message, colleague) {
        this.colleagues.forEach(c => {
            if (c !== colleague) {
                c.receiveMessage(message);
            }
        });
    }
}

class Client extends Colleague {
    constructor(name, mediator) {
        super(mediator);
        this.name = name;
    }

    receiveMessage(message) {
        console.log(`${this.name} received message: ${message}`);
    }

    sendMessage(message) {
        this.mediator.sendMessage(message, this);
    }
}

class ClientRegistrationSystem {
    static main() {
        const office = new NotaryOffice();

        const client1 = new Client("John", office);
        const client2 = new Client("Alice", office);
        const client3 = new Client("Bob", office);

        office.addColleague(client1);
        office.addColleague(client2);
        office.addColleague(client3);

        client1.sendMessage("Hello everyone!");
    }
}

ClientRegistrationSystem.main();
