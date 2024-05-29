class IClient {
    RegisterAppointment() {}
}

class IndividualClient extends IClient {
    constructor(appointmentScheduler) {
        super();
        this._appointmentScheduler = appointmentScheduler;
    }

    RegisterAppointment() {
        console.log("Реєструю призначення для індивідуального клієнта.");
        this._appointmentScheduler.ScheduleAppointment();
    }
}

class CorporateClient extends IClient {
    constructor(appointmentScheduler) {
        super();
        this._appointmentScheduler = appointmentScheduler;
    }

    RegisterAppointment() {
        console.log("Реєструю призначення для корпоративного клієнта.");
        this._appointmentScheduler.ScheduleAppointment();
    }
}

class IAppointmentScheduler {
    ScheduleAppointment() {}
}

class OnlineAppointmentScheduler extends IAppointmentScheduler {
    ScheduleAppointment() {
        console.log("Призначення заплановано онлайн.");
    }
}

class OfflineAppointmentScheduler extends IAppointmentScheduler {
    ScheduleAppointment() {
        console.log("Призначення заплановано офлайн.");
    }
}

let onlineScheduler = new OnlineAppointmentScheduler();
let offlineScheduler = new OfflineAppointmentScheduler();

let individualClient = new IndividualClient(onlineScheduler);
individualClient.RegisterAppointment();

let corporateClient = new CorporateClient(offlineScheduler);
corporateClient.RegisterAppointment();
