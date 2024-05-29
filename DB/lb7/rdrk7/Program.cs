namespace rdrk7;

class Program
{
    public static async Task Main(string[] args)
    {
        var mongoConfig = new MongoConfig
        {
            ConnectionString = "mongodb://localhost:27017",
            DatabaseName = "car_shop"
        };

        var neo4jConfig = new Neo4jConfig
        {
            Uri = "bolt://localhost:7687",
            User = "neo4j",
            Password = "neo4j"
        };

        var mongoService = new MongoService(mongoConfig);
        var neo4jService = new Neo4jService(neo4jConfig);
        
        List<Car> carsByMaker = await mongoService.GetCarsByMakerAsync("AUDI");
        Console.WriteLine("Cars by AUDI from MongoDB:");
        foreach (var car in carsByMaker)
        {
            Console.WriteLine($"{car.Maker} {car.Model}");
        }

        
        List<Car> neo4jCarsByMaker = await neo4jService.GetCarsByMakerAsync("AUDI");
        Console.WriteLine("Cars by AUDI from Neo4j:");
        foreach (var car in neo4jCarsByMaker)
        {
            Console.WriteLine($"{car.Maker} {car.Model}");
        }
    }
}