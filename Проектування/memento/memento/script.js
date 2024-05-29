class Client {
    constructor() {
        this.name = '';
        this.phoneNumber = '';
    }

    setName(name) {
        this.name = name;
    }

    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    getName() {
        return this.name;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    save() {
        return new Memento(this.name, this.phoneNumber);
    }

    restore(memento) {
        this.name = memento.getName();
        this.phoneNumber = memento.getPhoneNumber();
    }

    toString() {
        return `Client{name='${this.name}', phoneNumber='${this.phoneNumber}'}`;
    }
}

class Memento {
    constructor(name, phoneNumber) {
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

    getName() {
        return this.name;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }
}

class Caretaker {
    constructor() {
        this.mementos = [];
    }

    addMemento(memento) {
        this.mementos.push(memento);
    }

    getMemento(index) {
        return this.mementos[index];
    }
}

// Client code to test the Memento pattern
function main() {
    // Create a Notary Office System
    const caretaker = new Caretaker();
    const client = new Client();

    // Make changes to the client object
    client.setName('John Doe');
    client.setPhoneNumber('+1234567890');

    // Save the current state of the client
    caretaker.addMemento(client.save());

    // Make more changes to the client object
    client.setName('Jane Smith');
    client.setPhoneNumber('+9876543210');

    // Save the new state of the client
    caretaker.addMemento(client.save());

    // Restore the previous state of the client
    client.restore(caretaker.getMemento(0));

    // Print the current state of the client
    console.log(`Current state of the client: ${client}`);
}

// Execute the main function
main();
