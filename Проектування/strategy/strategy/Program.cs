namespace strategy;

using System;

public abstract class NotaryService
{
    protected string ServiceName;

    public abstract void BookAppointment(string clientName);
}

public class NotarialActsService : NotaryService
{
    public NotarialActsService()
    {
        ServiceName = "Notarial Acts";
    }

    public override void BookAppointment(string clientName)
    {
        Console.WriteLine($"Booking an appointment for {ServiceName} with {clientName}");
        
    }
}

public class CertificationService : NotaryService
{
    public CertificationService()
    {
        ServiceName = "Certification";
    }

    public override void BookAppointment(string clientName)
    {
        Console.WriteLine($"Booking an appointment for {ServiceName} with {clientName}");
        
    }
}

public class ClientBookingSystem
{
    private NotaryService _service;

    public ClientBookingSystem(NotaryService service)
    {
        _service = service;
    }

    public void SetService(NotaryService service)
    {
        _service = service;
    }

    public void BookAppointment(string clientName)
    {
        _service.BookAppointment(clientName);
    }
}

public class MainClass
{
    public static void Main(string[] args)
    {
        var notarialActsService = new NotarialActsService();
        var certificationService = new CertificationService();

        var bookingSystem = new ClientBookingSystem(notarialActsService);
        bookingSystem.BookAppointment("John Smith");

        bookingSystem.SetService(certificationService);
        bookingSystem.BookAppointment("Alice Johnson");
    }
}
