class Client {
    constructor(name, appointmentDate) {
        this.name = name;
        this.appointmentDate = appointmentDate;
    }

    getName() {
        return this.name;
    }

    getAppointmentDate() {
        return this.appointmentDate;
    }
}

class AppointmentList {
    constructor() {
        this.clients = [];
    }

    addClient(client) {
        this.clients.push(client);
    }

    [Symbol.iterator]() {
        let position = 0;
        let clients = this.clients;

        return {
            next: function() {
                if (position < clients.length) {
                    return { value: clients[position++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

class ElectronicAppointmentSystem {
    static main() {
        const appointmentList = new AppointmentList();

        appointmentList.addClient(new Client("John", "2022-01-10"));
        appointmentList.addClient(new Client("Alice", "2022-01-15"));
        appointmentList.addClient(new Client("Bob", "2022-01-20"));

        for (let client of appointmentList) {
            console.log(`Client: ${client.getName()}, Appointment Date: ${client.getAppointmentDate()}`);
        }
    }
}

ElectronicAppointmentSystem.main();
