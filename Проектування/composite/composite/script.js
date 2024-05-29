class IClientRecord {
    print() {}
}

class LeafClientRecord extends IClientRecord {
    constructor(name) {
        super();
        this.name = name;
    }

    print() {
        console.log("Client Record: " + this.name);
    }
}

class CompositeClientRecord extends IClientRecord {
    constructor(name) {
        super();
        this.name = name;
        this.children = [];
    }

    add(clientRecord) {
        this.children.push(clientRecord);
    }

    remove(clientRecord) {
        const index = this.children.indexOf(clientRecord);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    print() {
        console.log("Client Record: " + this.name);
        this.children.forEach(clientRecord => {
            clientRecord.print();
        });
    }
}

const client1 = new LeafClientRecord("John Doe");
const client2 = new LeafClientRecord("Jane Smith");
const client3 = new LeafClientRecord("Robert Johnson");

const composite1 = new CompositeClientRecord("Company 1");
composite1.add(client1);
composite1.add(client2);

const composite2 = new CompositeClientRecord("Company 2");
composite2.add(client3);

const composite3 = new CompositeClientRecord("Main Company");
composite3.add(composite1);
composite3.add(composite2);

composite3.print();