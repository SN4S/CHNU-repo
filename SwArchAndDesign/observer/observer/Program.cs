namespace observer;
public interface IAppointmentScheduler
{
    void AddObserver(IObserver observer);
    void RemoveObserver(IObserver observer);
    void NotifyObservers();
}

public class NotaryOffice : IAppointmentScheduler
{
    private List<IObserver> observers = new List<IObserver>();
    private string appointmentDate;

    public void SetAppointmentDate(string appointmentDate)
    {
        this.appointmentDate = appointmentDate;
        NotifyObservers();
    }

    public string GetAppointmentDate()
    {
        return appointmentDate;
    }

    public void AddObserver(IObserver observer)
    {
        observers.Add(observer);
    }

    public void RemoveObserver(IObserver observer)
    {
        observers.Remove(observer);
    }

    public void NotifyObservers()
    {
        foreach (var observer in observers)
        {
            observer.Update();
        }
    }
}

public interface IObserver
{
    void Update();
}
public class Client : IObserver
{
    private string name;
    private NotaryOffice office;

    public Client(string name, NotaryOffice office)
    {
        this.name = name;
        this.office = office;
        office.AddObserver(this);
    }

    public void CancelAppointment()
    {
        office.RemoveObserver(this);
    }

    public void Update()
    {
        Console.WriteLine($"{name}: New appointment date is set for {office.GetAppointmentDate()}");
    }
}

public class Manager : IObserver
{
    private string name;
    private NotaryOffice office;

    public Manager(string name, NotaryOffice office)
    {
        this.name = name;
        this.office = office;
        office.AddObserver(this);
    }

    public void Update()
    {
        Console.WriteLine($"{name}: New appointment date is set for {office.GetAppointmentDate()}");
    }
}

// Main class
public class ElectronicAppointmentSystem
{
    public static void Main(string[] args)
    {
        NotaryOffice office = new NotaryOffice();

        Client client1 = new Client("Client 1", office);
        Client client2 = new Client("Client 2", office);

        Manager manager = new Manager("Manager", office);

        office.SetAppointmentDate("2022-10-31");

        client2.CancelAppointment();

        office.SetAppointmentDate("2022-11-15");
    }
}
