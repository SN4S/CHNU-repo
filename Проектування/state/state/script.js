
class AppointmentState {
    confirmAppointment() {
        console.log("Appointment is already confirmed.");
    }

    cancelAppointment() {
        console.log("Appointment canceled successfully.");
    }
}

class ScheduledState extends AppointmentState {
    cancelAppointment() {
        console.log("Appointment canceled successfully.");
    }
}

class ConfirmedState extends AppointmentState {
    confirmAppointment() {
        console.log("Appointment is already confirmed.");
    }

    cancelAppointment() {
        console.log("Cannot cancel a confirmed appointment.");
    }
}

class CanceledState extends AppointmentState {
    confirmAppointment() {
        console.log("Appointment is already canceled.");
    }

    cancelAppointment() {
        console.log("Appointment is already canceled.");
    }
}

class Appointment {
    constructor() {
        this.state = new ScheduledState();
    }

    setState(state) {
        this.state = state;
    }

    confirm() {
        this.state.confirmAppointment();
    }

    cancel() {
        this.state.cancelAppointment();
        if (this.state instanceof ScheduledState) {
            this.setState(new CanceledState()); 
        }
    }
}

function main() {
    const appointment = new Appointment();

    appointment.confirm(); 
    appointment.cancel(); 
    
    appointment.setState(new ConfirmedState());

    appointment.confirm();
    appointment.cancel(); 
}

main();
