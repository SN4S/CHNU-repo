using System.ComponentModel;
using System.Text.Json;
using System.Text.Json.Serialization;
using StackExchange.Redis;

namespace rdrk3;

public class Car
{
    public string Id { get; set; }
    public string Maker { get; set; }
    public string Model { get; set; }
    public string Color { get; set; }
    public string FuelType { get; set; }
    public string Price { get; set; }
    public string DateOfMan { get; set; }
    public int Range { get; set; }
}

public class Client
{
    public string Id { get; set; }
    public string Sname { get; set; }
    public string Fname { get; set; }
    public string Mname { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Phone { get; set; }
}

public class Diller
{
    public string Id { get; set; }
    public string Sname { get; set; }
    public string Fname { get; set; }
    public string Mname { get; set; }
    public string Photo { get; set; }
    public string Address { get; set; }
    public string Phone { get; set; }
}

public class Contract
{
    public string ClientId { get; set; }
    public string DillerId { get; set; }
    public string CarId { get; set; }
    public string DateOfSelling { get; set; }
    public string Price { get; set; }
    public string Note { get; set; }
}

class Program
{
    static void Main(string[] args)
    {
        ConnectionMultiplexer redis = ConnectionMultiplexer.Connect("localhost");
        IDatabase db = redis.GetDatabase();
        
        Car newCar = new Car
        {
            Id = "c6",
            Maker = "Mercedes",
            Model = "C-Class",
            Color = "black",
            FuelType = "Gasoline",
            Price = "€75,000",
            DateOfMan = "Nov 15, 2023",
            Range = 50000
        };
        
        Client newClient = new Client
        {
            Id = "cl6",
            Sname = "Doe",
            Fname = "John",
            Mname = "Po batkovi",
            Address = "1234 Main St.",
            City = "Kyiv",
            Phone = "+38-099-123-4567"
        };
        
        Diller newDiller = new Diller
        {
            Id = "d6",
            Sname = "Smith",
            Fname = "Jane",
            Mname = "Po batkovi",
            Photo = "https://imgur.com/user/111",
            Address = "4567 Another St.",
            Phone = "+38-098-765-4321"
        };
        
        Contract newContract = new Contract
        {
            ClientId = "cl6",
            DillerId = "d6",
            CarId = "c6",
            DateOfSelling = "May 20, 2024",
            Price = "€80,000",
            Note = "New contract note"
        };

        addCar(db,newCar);
        readCar(db,"c6");
        updCar(db, "c6", newCar);
        delCar(db,"c6");
    }

    static void addCar(IDatabase db,Car car)
    {
        string carJson = JsonSerializer.Serialize(car);

        db.StringSet("cars:" + car.Id, carJson);
    }

    static void updCar(IDatabase db, string upId, Car car)
    {
        Car newcar = new Car
        {
            Id = upId,
            Maker = car.Maker,
            Model = car.Model,
            Color = car.Color,
            FuelType = car.FuelType,
            Price = car.Price,
            DateOfMan = car.DateOfMan,
            Range = car.Range
        };
        string updatedCarJson = JsonSerializer.Serialize(newcar);
        db.StringSet("cars:" + upId, updatedCarJson);
    }
    
    static void delCar(IDatabase db, string carId)
    {
        db.KeyDelete("cars:" + carId);
    }

    static void readCar(IDatabase db,string carId)
    {
        string carJson = db.StringGet("cars:" + carId);
        Car car = JsonSerializer.Deserialize<Car>(carJson);
        readObj(car);

    }

    static void readObj(object obj)
    {
        foreach(PropertyDescriptor descriptor in TypeDescriptor.GetProperties(obj))
        {
            string name = descriptor.Name;
            object value = descriptor.GetValue(obj);
            Console.WriteLine("{0}={1}", name, value);
        }
    }
}