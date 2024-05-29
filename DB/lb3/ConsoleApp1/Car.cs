using MongoDB.Bson.Serialization.Attributes;

namespace ConsoleApp1;

public class Car
{
    public Car(string id, string maker, string model, string color, string fuelType, string price, string dateOfMan, int range)
    {
        _id = id;
        this.maker = maker;
        this.model = model;
        this.color = color;
        fuel_type = fuelType;
        this.price = price;
        date_of_man = dateOfMan;
        this.range = range;
    }

    [BsonId]
    public string _id { get; set; }
    public string maker { get; set; }
    public string model { get; set; }
    public string color { get; set; }
    public string fuel_type { get; set; }
    public string price { get; set; }
    public string date_of_man { get; set; }
    public int range { get; set; }
}