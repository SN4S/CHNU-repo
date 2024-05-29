namespace visitor;

using System;
using System.Collections.Generic;

public interface IClientVisitor
{
    void Visit(RegularClient client);
    void Visit(PrimeClient client);
}

public class NotaryOfficeVisitor : IClientVisitor
{
    public void Visit(RegularClient client)
    {
        Console.WriteLine($"Regular client: {client.GetName()}, has requested an appointment.");
    }

    public void Visit(PrimeClient client)
    {
        Console.WriteLine($"Prime client: {client.GetName()}, has requested an appointment.");
    }
}

public interface IClient
{
    void Accept(IClientVisitor visitor);
}

public class RegularClient : IClient
{
    private readonly string name;

    public RegularClient(string name)
    {
        this.name = name;
    }

    public string GetName()
    {
        return name;
    }

    public void Accept(IClientVisitor visitor)
    {
        visitor.Visit(this);
    }
}

public class PrimeClient : IClient
{
    private readonly string name;

    public PrimeClient(string name)
    {
        this.name = name;
    }

    public string GetName()
    {
        return name;
    }

    public void Accept(IClientVisitor visitor)
    {
        visitor.Visit(this);
    }
}

public class NotaryOfficeApp
{
    public static void Main(string[] args)
    {
        List<IClient> clients = new List<IClient>
        {
            new RegularClient("John Doe"),
            new PrimeClient("Jane Smith")
        };

        IClientVisitor visitor = new NotaryOfficeVisitor();

        foreach (var client in clients)
        {
            client.Accept(visitor);
        }
    }
}
