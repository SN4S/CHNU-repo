class Client{
    constructor() {
        this.name= null;
        this.email = null;
        this.phone = null;
        this.appointmentDate = null;
    }
    
    details(){
        return "Client{" +
            "name='" + this.name + '\'' +
            ", email='" + this.email + '\'' +
            ", phone='" + this.phone + '\'' +
            ", appointmentDate='" + this.appointmentDate + '\'' +
            '}';
    }
}

class ClientBuilder{
    constructor() {
        this.client = new Client();
    }

    setName(name) {
    this.client.name = name;
    return this;
}

setEmail(email) {
    this.client.email = email;
    return this;
}

setPhone(phone) {
    this.client.phone = phone;
    return this;
}

setAppointmentDate(appointmentDate) {
    this.client.appointmentDate = appointmentDate;
    return this;
}

build() {
    return this.client;
    }
}

const clBuilder = new ClientBuilder();
const cli = clBuilder
    .setName("John Doe")
    .setEmail("johndoe@example.com")
    .setPhone("1234567890")
    .setAppointmentDate("2022-07-15")
    .build();

console.log(cli.details())