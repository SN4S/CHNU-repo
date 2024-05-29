namespace iterator;

using System;
using System.Collections.Generic;

public class Client
{
    private string name;
    private string appointmentDate;

    public Client(string name, string appointmentDate)
    {
        this.name = name;
        this.appointmentDate = appointmentDate;
    }

    public string GetName()
    {
        return name;
    }

    public string GetAppointmentDate()
    {
        return appointmentDate;
    }
}

public class AppointmentList : IEnumerable<Client>
{
    private List<Client> clients;

    public AppointmentList()
    {
        clients = new List<Client>();
    }

    public void AddClient(Client client)
    {
        clients.Add(client);
    }

    public IEnumerator<Client> GetEnumerator()
    {
        return new AppointmentIterator(clients);
    }

    System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }

    private class AppointmentIterator : IEnumerator<Client>
    {
        private int position;
        private List<Client> clients;

        public AppointmentIterator(List<Client> clients)
        {
            this.clients = clients;
            position = -1;
        }

        public bool MoveNext()
        {
            position++;
            return position < clients.Count;
        }

        public void Reset()
        {
            position = -1;
        }

        public Client Current
        {
            get
            {
                try
                {
                    return clients[position];
                }
                catch (IndexOutOfRangeException)
                {
                    throw new InvalidOperationException();
                }
            }
        }

        object System.Collections.IEnumerator.Current => Current;

        public void Dispose() { }
    }
}

public class ElectronicAppointmentSystem
{
    public static void Main(string[] args)
    {
        AppointmentList appointmentList = new AppointmentList();
        
        appointmentList.AddClient(new Client("John", "2022-01-10"));
        appointmentList.AddClient(new Client("Alice", "2022-01-15"));
        appointmentList.AddClient(new Client("Bob", "2022-01-20"));

        foreach (Client client in appointmentList)
        {
            Console.WriteLine($"Client: {client.GetName()}, Appointment Date: {client.GetAppointmentDate()}");
        }
    }
}
