class Customer {
    recordDetails(details) {
        throw new Error("Method 'recordDetails' must be implemented");
    }
}

class CustomerRecord extends Customer {
    constructor(name) {
        super();
        this.name = name;
    }

    recordDetails(address) {
        this.address = address;
        console.log(`Customer Name: ${this.name}, Address: ${address}`);
    }
}

class CustomerRecordFactory {
    constructor() {
        this.recordMap = new Map();
    }

    getCustomerRecord(name) {
        let record = this.recordMap.get(name);

        if (!record) {
            record = new CustomerRecord(name);
            this.recordMap.set(name, record);
        }

        return record;
    }
}

class NotaryOffice {
    constructor(recordFactory) {
        this.recordFactory = recordFactory;
    }

    createCustomer(name, address) {
        const customer = this.recordFactory.getCustomerRecord(name);
        customer.recordDetails(address);
    }
}

function main() {
    const recordFactory = new CustomerRecordFactory();
    const notaryOffice = new NotaryOffice(recordFactory);

    // Creating and recording customer details
    notaryOffice.createCustomer("John Doe", "123 Main St");
    notaryOffice.createCustomer("Jane Smith", "456 Oak St");
    notaryOffice.createCustomer("John Doe", "789 Elm St");
}


main();
