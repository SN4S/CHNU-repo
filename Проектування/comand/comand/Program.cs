namespace comand;

using System;
using System.Collections.Generic;

public interface ICommand
{
    void Execute();
}

public class NotaryOffice
{
    public void BookAppointment(string clientName)
    {
        Console.WriteLine($"Booking an appointment for client: {clientName}");
    }
}

public class BookAppointmentCommand : ICommand
{
    private readonly NotaryOffice _notaryOffice;
    private readonly string _clientName;

    public BookAppointmentCommand(NotaryOffice notaryOffice, string clientName)
    {
        _notaryOffice = notaryOffice;
        _clientName = clientName;
    }

    public void Execute()
    {
        _notaryOffice.BookAppointment(_clientName);
    }
}

public class CustomerBookingSystem
{
    private readonly List<ICommand> _commands = new List<ICommand>();

    public void AddCommand(ICommand command)
    {
        _commands.Add(command);
    }

    public void ExecuteCommands()
    {
        foreach (var command in _commands)
        {
            command.Execute();
        }
        _commands.Clear();
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        NotaryOffice notaryOffice = new NotaryOffice();
        CustomerBookingSystem bookingSystem = new CustomerBookingSystem();

        ICommand bookAppointmentCmd = new BookAppointmentCommand(notaryOffice, "John Doe");
        bookingSystem.AddCommand(bookAppointmentCmd);
        bookingSystem.ExecuteCommands();

        ICommand bookAppointmentCmd2 = new BookAppointmentCommand(notaryOffice, "Jane Smith");
        bookingSystem.AddCommand(bookAppointmentCmd2);
        bookingSystem.ExecuteCommands();
    }
}