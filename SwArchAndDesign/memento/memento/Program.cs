namespace memento;

using System.Collections.Generic;

// Originator class
public class Client
{
    public string Name { get; private set; }
    public string PhoneNumber { get; private set; }

    public void SetName(string name)
    {
        Name = name;
    }

    public void SetPhoneNumber(string phoneNumber)
    {
        PhoneNumber = phoneNumber;
    }

    public Memento Save()
    {
        return new Memento(Name, PhoneNumber);
    }

    public void Restore(Memento memento)
    {
        Name = memento.Name;
        PhoneNumber = memento.PhoneNumber;
    }

    public override string ToString()
    {
        return $"Client{{name='{Name}', phoneNumber='{PhoneNumber}'}}";
    }
}

// Memento class
public class Memento
{
    public string Name { get; }
    public string PhoneNumber { get; }

    public Memento(string name, string phoneNumber)
    {
        Name = name;
        PhoneNumber = phoneNumber;
    }
}

// Caretaker class
public class Caretaker
{
    private List<Memento> mementos = new List<Memento>();

    public void AddMemento(Memento memento)
    {
        mementos.Add(memento);
    }

    public Memento GetMemento(int index)
    {
        return mementos[index];
    }
}

// Client code to test the Memento pattern
class Program
{
    static void Main(string[] args)
    {
        // Create a Notary Office System
        Caretaker caretaker = new Caretaker();
        Client client = new Client();

        // Make changes to the client object
        client.SetName("John Doe");
        client.SetPhoneNumber("+1234567890");

        // Save the current state of the client
        caretaker.AddMemento(client.Save());

        // Make more changes to the client object
        client.SetName("Jane Smith");
        client.SetPhoneNumber("+9876543210");

        // Save the new state of the client
        caretaker.AddMemento(client.Save());

        // Restore the previous state of the client
        client.Restore(caretaker.GetMemento(0));

        // Print the current state of the client
        Console.WriteLine($"Current state of the client: {client}");
    }
}