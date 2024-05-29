namespace mediator;

using System;
using System.Collections.Generic;

public interface IMediator
{
    void SendMessage(string message, Colleague colleague);
}

public abstract class Colleague
{
    protected IMediator Mediator;

    public Colleague(IMediator mediator)
    {
        Mediator = mediator;
    }

    public abstract void ReceiveMessage(string message);
    public abstract void SendMessage(string message);
}

public class NotaryOffice : IMediator
{
    private List<Colleague> colleagues = new List<Colleague>();

    public void AddColleague(Colleague colleague)
    {
        colleagues.Add(colleague);
    }

    public void SendMessage(string message, Colleague colleague)
    {
        foreach (var c in colleagues)
        {
            if (c != colleague)
            {
                c.ReceiveMessage(message);
            }
        }
    }
}

public class Client : Colleague
{
    private string name;

    public Client(string name, IMediator mediator) : base(mediator)
    {
        this.name = name;
    }

    public override void ReceiveMessage(string message)
    {
        Console.WriteLine($"{name} received message: {message}");
    }

    public override void SendMessage(string message)
    {
        Mediator.SendMessage(message, this);
    }
}

public class ClientRegistrationSystem
{
    public static void Main(string[] args)
    {
        var office = new NotaryOffice();

        var client1 = new Client("John", office);
        var client2 = new Client("Alice", office);
        var client3 = new Client("Bob", office);

        office.AddColleague(client1);
        office.AddColleague(client2);
        office.AddColleague(client3);

        client1.SendMessage("Hello everyone!");
    }
}
