///YAGNI
public class Calculatorb
{
    public int Multiply(int x, int y)
    {
        return x * y;
    }

    public int Add(int x, int y)
    {
        return x + y;
    }

    public int Subtract(int x, int y)
    {
        return x - y;
    }
}

public class Calculator
{
    public int Calculate(string operation, int x, int y)
    {
        if (operation == "multiply")
            return x * y;
        else if (operation == "add")
            return x + y;
        else if (operation == "subtract")
            return x - y;
        else
            throw new ArgumentException("Invalid operation");
    }
}

//DRY
public class Geometryb
{
    public double CalculateAreaOfRectangle(double length, double width)
    {
        double area = length * width;
        Console.WriteLine("Area of rectangle: " + area);
        return area;
    }

    public double CalculateAreaOfSquare(double side)
    {
        double area = side * side;
        Console.WriteLine("Area of square: " + area);
        return area;
    }
}

public class Geometry
{
    public double CalculateArea(string shape, params double[] parameters)
    {
        double area = 0;
        if (shape == "rectangle")
            area = parameters[0] * parameters[1];
        else if (shape == "square")
            area = parameters[0] * parameters[0];

        Console.WriteLine("Area of " + shape + ": " + area);
        return area;
    }
}

//KISS
public class SumCalculatorb
{
    public int CalculateSumOfList(List<int> numbers)
    {
        int total = 0;
        foreach (int number in numbers)
        {
            total += number;
        }
        return total;
    }
}

public class SumCalculator
{
    public int CalculateSumOfList(List<int> numbers)
    {
        return numbers.Sum();
    }
}

//BDUF
public class User
{
    public string Name { get; set; }
    public string Email { get; set; }

    public User(string name, string email)
    {
        Name = name;
        Email = email;
    }
}

public class Productb
{
    public string Name { get; set; }
    public decimal Price { get; set; }

    public Productb(string name, decimal price)
    {
        Name = name;
        Price = price;
    }
}
//
public class Product
{
    public string Name { get; set; }
    public decimal Price { get; set; }

    public Product(string name, decimal price)
    {
        Name = name;
        Price = price;
    }
}

//SOLID SRP
public class RegistrationManager
{
    public void RegisterUser(User user)
    {
        
    }

    public void DisplayUserInfo(User user)
    {
        
    }
}

public class UserManager
{
    public void RegisterUser(User user)
    {
        
    }
}

public class UserInfoDisplayer
{
    public void DisplayUserInfo(User user)
    {
        
    }
}

//SOLID OCP
public class PaymentProcessor
{
    public void ProcessPayment(Order order)
    {
        if (order.PaymentMethod == PaymentMethod.CreditCard)
        {
            
        }
        else if (order.PaymentMethod == PaymentMethod.PayPal)
        {
            
        }
    }
}

public interface IPaymentProcessor
{
    void ProcessPayment(Order order);
}

public class CreditCardPaymentProcessor : IPaymentProcessor
{
    public void ProcessPayment(Order order)
    {
        
    }
}

public class PayPalPaymentProcessor : IPaymentProcessor
{
    public void ProcessPayment(Order order)
    {
        
    }
}

//SOLID LSP
public class Rectangle
{
    public virtual int Width { get; set; }
    public virtual int Height { get; set; }
}

public class Square : Rectangle
{
    public override int Width
    {
        get => base.Width;
        set
        {
            base.Width = value;
            base.Height = value;
        }
    }

    public override int Height
    {
        get => base.Height;
        set
        {
            base.Height = value;
            base.Width = value;
        }
    }
}

public class AreaCalculator
{
    public int CalculateArea(Rectangle rectangle)
    {
        return rectangle.Width * rectangle.Height;
    }
}

public class Shape
{
    public virtual int Width { get; set; }
    public virtual int Height { get; set; }
}

public class Rectangle : Shape { }

public class Square : Shape
{
    public override int Width
    {
        get => base.Width;
        set
        {
            base.Width = value;
            base.Height = value;
        }
    }

    public override int Height
    {
        get => base.Height;
        set
        {
            base.Height = value;
            base.Width = value;
        }
    }
}

public class AreaCalculator
{
    public int CalculateArea(Shape shape)
    {
        return shape.Width * shape.Height;
    }
}


//SOLID ISP

public interface IWorker
{
    void Work();
    void Eat();
    void Sleep();
}

public class Robot : IWorker
{
    public void Work() { /* Логіка роботи */ }
    public void Eat() { /* Не реалізовано */ }
    public void Sleep() { /* Не реалізовано */ }
}

public class Human : IWorker
{
    public void Work() { /* Логіка роботи */ }
    public void Eat() { /* Логіка їжі */ }
    public void Sleep() { /* Логіка сну */ }
}

public interface IWorker
{
    void Work();
}

public interface IEater
{
    void Eat();
}

public interface ISleeper
{
    void Sleep();
}

public class Robot : IWorker
{
    public void Work() { /* робота */ }
}

public class Human : IWorker, IEater, ISleeper
{
    public void Work() { /* робота */ }
    public void Eat() { /* їжа */ }
    public void Sleep() { /* сон */ }
}

//SOLID DIP
public class OrderProcessor
{
    private readonly Database database;

    public OrderProcessor()
    {
        this.database = new Database();
    }

    public void ProcessOrder(Order order)
    {
        // Логіка обробки замовлення
    }
}

public class Database
{
    // Код для роботи з базою даних
}


public interface IDatabase
{
    void SaveData(Order order);
}

public class Database : IDatabase
{
    public void SaveData(Order order)
    {
        // Логіка збереження даних
    }
}

public class OrderProcessor
{
    private readonly IDatabase database;

    public OrderProcessor(IDatabase database)
    {
        this.database = database;
    }

    public void ProcessOrder(Order order)
    {
        // Логіка обробки замовлення
        database.SaveData(order);
    }
}

//APO
public class FibonacciCalculatorb
{
    public int CalculateFibonacci(int n)
    {
        if (n <= 0)
            return 0;
        if (n == 1)
            return 1;
        return CalculateFibonacci(n - 1) + CalculateFibonacci(n - 2);
    }
}

public class FibonacciCalculator
{
    private Dictionary<int, int> cache = new Dictionary<int, int>();

    public int CalculateFibonacci(int n)
    {
        if (n <= 0)
            return 0;
        if (n == 1)
            return 1;

        if (!cache.ContainsKey(n))
            cache[n] = CalculateFibonacci(n - 1) + CalculateFibonacci(n - 2);

        return cache[n];
    }
}

//OKAM
public bool IsParny(int n)
{
    if (n == 1) return false;
    if (n == 2) return true;
    if (n == 3) return false;
    if (n == 4) return true;
    if (n == 5) return false;
    if (n == 6) return true;
    //...
}

 bool IsEven(int n)
 {
     if (n % 2 == 0) return true;
     else
     {
         return false;
     }
 }


