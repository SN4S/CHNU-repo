namespace abs_factory;

interface INotaryBookingFactory {
    IBooking CreateBooking();
    IClient CreateClient();
}

// Concrete Factory 1
class MeetingBookingFactory: INotaryBookingFactory {
    public IBooking CreateBooking() {
        return new MeetingBooking();
    }
    public IClient CreateClient() {
        return new IndividualClient();
    }
}

// Concrete Factory 2
class OnlineBookingFactory : INotaryBookingFactory {
    public IBooking CreateBooking() {
        return new OnlineBooking();
    }
    public IClient CreateClient() {
        return new CorporateClient();
    }
}

// Abstract Product 1
interface IBooking {
    void ScheduleBooking();
}

// Concrete Product 1
class MeetingBooking : IBooking {
    public void ScheduleBooking() {
        Console.WriteLine("Meeting booking scheduled.");
    }
}

// Concrete Product 2
class OnlineBooking : IBooking {
    public void ScheduleBooking() {
        Console.WriteLine("Online booking scheduled.");
    }
}

// Abstract Product 2
interface IClient {
    void getClientDetails();
}

// Concrete Product 2
class IndividualClient : IClient {
    public void getClientDetails() {
        Console.WriteLine("Individual client details retrieved.");
    }
}

// Concrete Product 2
class CorporateClient : IClient {
    public void getClientDetails() {
        Console.WriteLine("Corporate client details retrieved.");
    }
}

// Client using Abstract Factory
public class Program{
    static void Main(string[] args) {
        INotaryBookingFactory meetingFactory = new MeetingBookingFactory();
        IBooking meetingBooking = meetingFactory.CreateBooking();
        meetingBooking.ScheduleBooking();
        IClient individualClient = meetingFactory.CreateClient();
        individualClient.getClientDetails();

        INotaryBookingFactory onlineFactory = new OnlineBookingFactory();
        IBooking onlineBooking = onlineFactory.CreateBooking();
        onlineBooking.ScheduleBooking();
        IClient corporateClient = onlineFactory.CreateClient();
        corporateClient.getClientDetails();
    }
}
