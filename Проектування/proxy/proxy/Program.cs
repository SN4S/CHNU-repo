namespace proxy;
interface INotaryService
{
    void RegisterClient(string clientName);
}

class NotaryServiceImpl : INotaryService
{
    public void RegisterClient(string clientName)
    {
        Console.WriteLine($"Client '{clientName}' has been registered.");
    }
}

class NotaryServiceProxy : INotaryService
{
    private INotaryService _notaryService;
    private bool _isAdmin;

    public NotaryServiceProxy(string username, string password)
    {
        if (username.Equals("admin") && password.Equals("password"))
        {
            _isAdmin = true;
            _notaryService = new NotaryServiceImpl();
        }
        else
        {
            _isAdmin = false;
        }
    }

    public void RegisterClient(string clientName)
    {
        if (_isAdmin)
        {
            _notaryService.RegisterClient(clientName);
        }
        else
        {
            Console.WriteLine("Only admin users can register clients.");
        }
    }
}

public class Program
{
    static void Main(string[] args)
    {
        // Admin
        INotaryService adminService = new NotaryServiceProxy("admin", "password");
        adminService.RegisterClient("John Doe");

        // User
        INotaryService regularService = new NotaryServiceProxy("user", "pass123");
        regularService.RegisterClient("Jane Smith");
    }
}