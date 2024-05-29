public class Product{}

//INFO EXP
public class User
{
    private string username;
    private string email;
    
    public User(string username, string email)
    {
        this.username = username;
        this.email = email;
    }
    
    public string GetUsername()
    {
        return username;
    }
    
    public string GetEmail()
    {
        return email;
    }
}

//HIGH AND LOW
public class Order
{
    private List<Product> products;
    private User user;

    public Order(User user)
    {
        this.user = user;
        products = new List<Product>();
    }

    public void AddProduct(Product product)
    {
        products.Add(product);
    }
}

//PROTECTED
public interface IShippingProvider
{
    void Ship(Order order);
}

public class Nova : IShippingProvider
{
    public void Ship(Order order)
    {
        //Nice
    }
}

public class Ukr : IShippingProvider
{
    public void Ship(Order order)
    {
        //Not nice
    }
}

//Controller
public class OrderController
{
    public void ProcessOrder(User user, List<Product> products)
    {
        Order order = new Order(user);
        foreach (var product in products)
        {
            order.AddProduct(product);
        }
    }
}

//OOOP
public abstract class Animal
{
    public abstract void Sound();
}

public class Cat : Animal
{
    private string sount = "mew";

    public Cat(string sount)
    {
        this.sount = sount;
    }

    public override void Sound()
    {
        Console.WriteLine("mew");
    }
}

public class Dog : Animal
{
    private string sount = "woof";

    public Dog(string sount)
    {
        this.sount = sount;
    }

    public override void Sound()
    {
        Console.WriteLine("Woof");
    }
}

///FABRICATION
public class ClientAuth
{
    public void Log(string message)
    {
        Console.WriteLine("honey, CLIENT IS HERE");
    }
}

//INDIRECTION
public class PaymentService
{
    private IPaymentGateway paymentGateway;

    public PaymentService(IPaymentGateway paymentGateway)
    {
        this.paymentGateway = paymentGateway;
    }

    public void ProcessPayment(Order order)
    {
        paymentGateway.ProcessPayment(order);
    }
}

public interface IPaymentGateway
{
    void ProcessPayment(Order order);
}

public class MonoGateway : IPaymentGateway
{
    public void ProcessPayment(Order order)
    {
        //ДЕ ГРОШІ
    }
}

public class PrivatGateway : IPaymentGateway
{
    public void ProcessPayment(Order order)
    {
        //ДЕ ГРОШІ
    }
}

//PROTECTED OBJECT
public interface IRenderer
{
    void Render(string content);
}

public class HtmlRenderer : IRenderer
{
    public void Render(string content)
    {
        // Render HTML 
    }
}

public class JsonRenderer : IRenderer
{
    public void Render(string content)
    {
        // Render JSON 
    }
}








