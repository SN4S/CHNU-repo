namespace facade;

using System;

class Client
{
    private string name;

    public Client(string name)
    {
        this.name = name;
    }

    public string GetName()
    {
        return name;
    }
}

class BookingSystem
{
    public void BookAppointment(Client client)
    {
        Console.WriteLine("Appointment booked for customer: " + client.GetName());
    }
}

class PaymentSystem
{
    public void ProcessPayment(Client client, double amount)
    {
        Console.WriteLine("Payment processed for customer: " + client.GetName() + ", Amount: " + amount);
    }
}

class BookingFacade
{
    private BookingSystem bookingSystem;
    private PaymentSystem paymentSystem;

    public BookingFacade()
    {
        bookingSystem = new BookingSystem();
        paymentSystem = new PaymentSystem();
    }

    public void BookAndPay(Client client, double amount)
    {
        bookingSystem.BookAppointment(client);
        paymentSystem.ProcessPayment(client, amount);
    }
}

class Program
{
    public static void Main(string[] args)
    {
        Client client = new Client("John");
        
        BookingFacade bookingFacade = new BookingFacade();
        
        bookingFacade.BookAndPay(client, 100.0);
    }
}
