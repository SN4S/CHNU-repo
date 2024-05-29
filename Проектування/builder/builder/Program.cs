namespace builder;

public interface IBuilder
{
    ClientBuilder setName(string str);
    ClientBuilder setEmail(string str);
    ClientBuilder setPhone(string str);
    ClientBuilder setAppointmentDate(string str);
}

public class Client {
    private String name;
    private String email;
    private String phone;
    private String appointmentDate;

    public Client(String name, String email, String phone, String appointmentDate) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.appointmentDate = appointmentDate;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public String getAppointmentDate() {
        return appointmentDate;
    }

    public override string ToString()
    {
        return "Client{" +
               "name='" + name + '\'' +
               ", email='" + email + '\'' +
               ", phone='" + phone + '\'' +
               ", appointmentDate='" + appointmentDate + '\'' +
               '}';
    }
}

public class ClientBuilder : IBuilder{
    private String name;
    private String email;
    private String phone;
    private String appointmentDate;

    public ClientBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public ClientBuilder setEmail(String email) {
        this.email = email;
        return this;
    }

    public ClientBuilder setPhone(String phone) {
        this.phone = phone;
        return this;
    }

    public ClientBuilder setAppointmentDate(String appointmentDate) {
        this.appointmentDate = appointmentDate;
        return this;
    }

    public Client build() {
        return new Client(name, email, phone, appointmentDate);
    }
}

public class Program {
    static void Main(String[] args) {
        Client client = new ClientBuilder()
                .setName("John Doe")
                .setEmail("johndoe@example.com")
                .setPhone("1234567890")
                 .setAppointmentDate("2022-07-15")
                .build();
        
        Console.WriteLine(client);
    }
}