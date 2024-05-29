namespace rdrk7;

using Neo4j.Driver;

public class Neo4jService : IDisposable
{
    private readonly IDriver _driver;

    public Neo4jService(Neo4jConfig config)
    {
        _driver = GraphDatabase.Driver(config.Uri, AuthTokens.Basic(config.User, config.Password));
    }

    public async Task<List<Car>> GetCarsByMakerAsync(string maker)
    {
        var session = _driver.AsyncSession();
        try
        {
            var result = await session.RunAsync("MATCH (c:Car) WHERE c.maker = $maker RETURN c", new { maker });
            var cars = new List<Car>();
            await result.ForEachAsync(record =>
            {
                var carNode = record["c"].As<INode>();
                var car = new Car
                {
                    Id = carNode["id"].As<string>(),
                    Maker = carNode["maker"].As<string>(),
                    Model = carNode["model"].As<string>(),
                    Color = carNode["color"].As<string>(),
                    FuelType = carNode["fuel_type"].As<string>(),
                    Price = carNode["price"].As<string>(),
                    DateOfMan = carNode["date_of_man"].As<string>(),
                    Range = carNode["range"].As<int>()
                };
                cars.Add(car);
            });
            return cars;
        }
        finally
        {
            await session.CloseAsync();
        }
    }

    public void Dispose()
    {
        _driver?.Dispose();
    }
}