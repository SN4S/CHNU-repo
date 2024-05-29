class Client {
    constructor(name, phone, email) {
        this._name = name;
        this._phone = phone;
        this._email = email;
    }

    get Name() {
        return this._name;
    }

    set Name(value) {
        this._name = value;
    }

    get Phone() {
        return this._phone;
    }

    set Phone(value) {
        this._phone = value;
    }

    get Email() {
        return this._email;
    }

    set Email(value) {
        this._email = value;
    }
}

class ClientPool {
    constructor() {
        this.MAX_POOL_SIZE = 5;
        this.availableClients = [];

        for (let i = 0; i < this.MAX_POOL_SIZE; i++) {
            this.availableClients.push(this.createClient());
        }
    }

    getClient() {
        console.log(this.availableClients.length);
        if (this.availableClients.length === 0) {
            console.log("All clients are currently in use. Please try again later.");
            return null;
        }

        const client = this.availableClients.shift();
        console.log("Client " + client.Name + " is assigned.");
        return client;
    }

    releaseClient(client) {
        if (!this.availableClients.includes(client) && this.availableClients.length < this.MAX_POOL_SIZE) {
            this.availableClients.push(client);
            console.log("Client " + client.Name + " is released.");
        }
    }

    createClient() {
        return new Client("John Doe", "1234567890", "john.doe@example.com");
    }
}

function main() {
    const pool = new ClientPool();

    const client1 = pool.getClient();
    const client2 = pool.getClient();

    client2.Name = "OLGE";
    pool.releaseClient(client1);
    pool.releaseClient(client2);

    const client3 = pool.getClient();
    const client44 = pool.getClient();
    const client4 = pool.getClient();
    const client5 = pool.getClient();
    const client6 = pool.getClient();

    const client67 = pool.getClient();

    const client68 = pool.getClient();

    pool.releaseClient(client3);
    const client7 = pool.getClient();

    pool.releaseClient(client4);
    pool.releaseClient(client5);
    pool.releaseClient(client6);
    pool.releaseClient(client7);
    pool.releaseClient(client1);
    pool.releaseClient(client2);
    pool.releaseClient(client3);
}

main();
