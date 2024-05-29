using System;
using System.Collections.Generic;
public class Client
{
    private string _name;
    private string _phone;
    private string _email;

    public string Name
    {
        get => _name;
        set => _name = value;
    }

    public string Phone
    {
        get => _phone;
        set => _phone = value;
    }

    public string Email
    {
        get => _email;
        set => _email = value;
    }
    public Client(string name, string phone, string email)
    {
        this._name = name;
        this._phone = phone;
        this._email = email;
    }
   
}

public class ClientPool
{
    private const int MAX_POOL_SIZE = 5;
    private List<Client> availableClients;

    public ClientPool()
    {
        availableClients = new List<Client>();

        for (int i = 0; i < MAX_POOL_SIZE; i++)
        {
            availableClients.Add(CreateClient());
        }
    }

    public Client GetClient()
    {
        Console.WriteLine(availableClients.Count);
        if (availableClients.Count == 0)
        {
            Console.WriteLine("All clients are currently in use. Please try again later.");
            return null;
        }

        Client client = availableClients[0];
        availableClients.RemoveAt(0);
        Console.WriteLine("Client " + client.Name + " is assigned.");

        return client;
    }

    public void ReleaseClient(Client client)
    {
        if (!availableClients.Contains(client) && availableClients.Count < MAX_POOL_SIZE)
        {
            availableClients.Add(client);
            Console.WriteLine("Client " + client.Name + " is released.");
        }
    }

    private Client CreateClient()
    {
        return new Client("John Doe", "1234567890", "john.doe@example.com");
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        ClientPool pool = new ClientPool();
        
        Client client1 = pool.GetClient();
        Client client2 = pool.GetClient();


        client2.Name = "OLGE";
        pool.ReleaseClient(client1);
        pool.ReleaseClient(client2);
        
        Client client3 = pool.GetClient();
        Client client44 = pool.GetClient();
        Client client4 = pool.GetClient();
        Client client5 = pool.GetClient();
        Client client6 = pool.GetClient();
        
        Client client67 = pool.GetClient();
        
        Client client68 = pool.GetClient();
        
        pool.ReleaseClient(client3);
        Client client7 = pool.GetClient();
        
        pool.ReleaseClient(client4);
        pool.ReleaseClient(client5);
        pool.ReleaseClient(client6);
        pool.ReleaseClient(client7);
        pool.ReleaseClient(client1);
        pool.ReleaseClient(client2);
        pool.ReleaseClient(client3);
    }
}
