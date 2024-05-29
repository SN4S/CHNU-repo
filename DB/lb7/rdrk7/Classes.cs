namespace rdrk7;

using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

public class Car
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
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
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
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
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
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
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }
    public MongoDBRef ClientId { get; set; }
    public MongoDBRef DillerId { get; set; }
    public MongoDBRef CarId { get; set; }
    public string DateOfSelling { get; set; }
    public string Price { get; set; }
    public string Note { get; set; }
}
