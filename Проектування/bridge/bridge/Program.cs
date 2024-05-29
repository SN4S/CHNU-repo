namespace bridge;

public interface IClient
{
    void RegisterAppointment();
}

public class IndividualClient : IClient
{
    private readonly IAppointmentScheduler _appointmentScheduler;

    public IndividualClient(IAppointmentScheduler appointmentScheduler)
    {
        _appointmentScheduler = appointmentScheduler;
    }

    public void RegisterAppointment()
    {
        Console.WriteLine("Реєструю призначення для iндивiдуального клiєнта.");
        _appointmentScheduler.ScheduleAppointment();
    }
}

public class CorporateClient : IClient
{
    private readonly IAppointmentScheduler _appointmentScheduler;

    public CorporateClient(IAppointmentScheduler appointmentScheduler)
    {
        _appointmentScheduler = appointmentScheduler;
    }

    public void RegisterAppointment()
    {
        Console.WriteLine("Реєструю призначення для корпоративного клiєнта.");
        _appointmentScheduler.ScheduleAppointment();
    }
}

public interface IAppointmentScheduler
{
    void ScheduleAppointment();
}

public class OnlineAppointmentScheduler : IAppointmentScheduler
{
    public void ScheduleAppointment()
    {
        Console.WriteLine("Призначення заплановано онлайн.");
    }
}

public class OfflineAppointmentScheduler : IAppointmentScheduler
{
    public void ScheduleAppointment()
    {
        Console.WriteLine("Призначення заплановано офлайн.");
    }
}

public class Program
{
    static void Main(string[] args)
    {
        IAppointmentScheduler onlineScheduler = new OnlineAppointmentScheduler();
        IAppointmentScheduler offlineScheduler = new OfflineAppointmentScheduler();

        IClient individualClient = new IndividualClient(onlineScheduler);
        individualClient.RegisterAppointment();

        IClient corporateClient = new CorporateClient(offlineScheduler);
        corporateClient.RegisterAppointment();
    }
}
