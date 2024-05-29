namespace rdrk7;

using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;

public class MongoService
{
    private readonly IMongoDatabase _database;

    public MongoService(MongoConfig config)
    {
        var client = new MongoClient(config.ConnectionString);
        _database = client.GetDatabase(config.DatabaseName);
    }

    public IMongoCollection<Car> Cars => _database.GetCollection<Car>("cars");
    public IMongoCollection<Client> Clients => _database.GetCollection<Client>("clients");
    public IMongoCollection<Diller> Dillers => _database.GetCollection<Diller>("dillers");
    public IMongoCollection<Contract> Contracts => _database.GetCollection<Contract>("contracts");
    
    public async Task<List<Car>> GetCarsByMakerAsync(string maker)
    {
        return await Cars.Find(car => car.Maker == maker).ToListAsync();
    }
    
}
