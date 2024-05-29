namespace wraper;

public interface IBooking
{
    void Book();
}

public class NotaryOffice : IBooking
{
    public void Book()
    {
        Console.WriteLine("Booking system for the notary office");
    }
}

public abstract class BookingDecorator : IBooking
{
    protected IBooking DecoratedBooking;

    public BookingDecorator(IBooking decoratedBooking)
    {
        DecoratedBooking = decoratedBooking;
    }

    public virtual void Book()
    {
        DecoratedBooking.Book();
    }
}

public class ClientBookingDecorator : BookingDecorator
{
    public ClientBookingDecorator(IBooking decoratedBooking) : base(decoratedBooking)
    {
    }

    public override void Book()
    {
        base.Book();
        AddClientBookingFunctionality();
    }

    private void AddClientBookingFunctionality()
    {
        Console.WriteLine("Adding client booking functionality");
    }
}

public class ScheduleBookingDecorator : BookingDecorator
{
    public ScheduleBookingDecorator(IBooking decoratedBooking) : base(decoratedBooking)
    {
    }

    public override void Book()
    {
        base.Book();
        AddScheduleBookingFunctionality();
    }

    private void AddScheduleBookingFunctionality()
    {
        Console.WriteLine("Adding schedule booking functionality");
    }
}

public class NotificationBookingDecorator : BookingDecorator
{
    public NotificationBookingDecorator(IBooking decoratedBooking) : base(decoratedBooking)
    {
    }

    public override void Book()
    {
        base.Book();
        AddNotificationBookingFunctionality();
    }

    private void AddNotificationBookingFunctionality()
    {
        Console.WriteLine("Adding notification booking functionality");
    }
}

public class Program
{
    static void Main(string[] args)
    {
        IBooking basicBooking = new NotaryOffice();
        basicBooking.Book();

        Console.WriteLine();
        IBooking decoratedBooking = new NotificationBookingDecorator(
            new ScheduleBookingDecorator(
                new ClientBookingDecorator(new NotaryOffice())
            )
        );
        decoratedBooking.Book();
    }
}
