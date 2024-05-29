namespace adapter;

interface IElectronicBookingSystem
{
    void BookAppointment(String clientName, string apointmentDate);
}

class NotaryOffice
{
    public void BookNotary(String notaryName, string apointmentDate)
    {
        Console.WriteLine("Booking notary " + notaryName + " for appointment on " + apointmentDate);
    }
}

class NotaryOfficeAdapter : IElectronicBookingSystem {
    private NotaryOffice _notaryOffice;

    public NotaryOfficeAdapter(NotaryOffice notaryOffice) {
        this._notaryOffice = notaryOffice;
    }

    public void BookAppointment(String clientName, String appointmentDate) {
        String[] splitName = clientName.Split(" ");
        String notaryName = splitName[0] + " " + splitName[1][0] + ".";
        
        _notaryOffice.BookNotary(notaryName, appointmentDate);
    }
}

class Client {
    private IElectronicBookingSystem bookingSystem;

    public Client(IElectronicBookingSystem bookingSystem) {
        this.bookingSystem = bookingSystem;
    }

    public void bookApointment(String clientName, String appointmentDate) {
        bookingSystem.BookAppointment(clientName, appointmentDate);
    }
}

class Program
{
    static void Main(string[] args)
    {
        NotaryOffice notaryOffice = new NotaryOffice();
     
        // Create Adapter 
        IElectronicBookingSystem bookingSystem = new NotaryOfficeAdapter(notaryOffice);

        // Create Client
        Client client = new Client(bookingSystem);
        client.bookApointment("John Smith", "2022-01-01");
    }
}