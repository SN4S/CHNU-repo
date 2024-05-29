using System.ComponentModel;
using MongoDB.Driver;
using MongoDB.Bson;

namespace ConsoleApp1;

class Program
{
    static void Main(string[] args)
    {
        bool menu = true;
        
        MongoClient mongacl = new MongoClient("mongodb://localhost:27017");
        IMongoDatabase db = mongacl.GetDatabase("car_shop");

        IMongoCollection<BsonDocument> cars = db.GetCollection<BsonDocument>("cars");
        IMongoCollection<BsonDocument> contracts = db.GetCollection<BsonDocument>("contracts");

        aggregateSomethings(contracts);
        
        
        while (menu)
        {
            switch (Console.ReadLine())
            {
                case "0":
                    drop(mongacl);
                    break;
                case "1":
                    findQuery(cars);
                    break;
                case "2":
                    Console.WriteLine();
                    break;
                default:
                    menu = !menu;
                    Console.WriteLine("END");
                    break;
            }
        }
    }

    static void drop(MongoClient db)
    {
        db.DropDatabase("car_shop");
        Console.WriteLine("db dropped");
    }

    static void insertEverything(MongoClient db)
    {
        db.GetDatabase("car_shop");
        var dbm = db.GetDatabase("car_shop");
        dbm.CreateCollection("cars");
        dbm.CreateCollection("dillers");
        dbm.CreateCollection("clients");
        dbm.CreateCollection("contracts");
        
        var cars = new List<Car>
        {
            new Car("c1","Ford","RS7","yellow","Diesel","€125801","Jun 10, 2016",112194),
            new Car("c2","Ford","180SX","blue","Diesel","€116105","Sep 10, 1994",372317),
            new Car("c3","BMW","RS7","yellow","Gas","€189926","Feb 27, 1997",787856),
            new Car("c4","AUDI","RS7","blue","Gas","€132363","Mar 22, 2008",543755),
            new Car("c5","Nissan","Prius","white","Diesel","€161980","Dec 19, 1987",656117)

        };

        var clients = new List<Client>
        {
            new Client("cl1","Sweeney","Avye","Po batkovi","Ap #845-1473 Semper Av.","Cherkasy","+38-094-327-5790"),
            new Client("cl2","Frye","Libby","Po batkovi","889-4863 Tincidunt Av.","Dnipro","+38-086-744-8790"),
            new Client("cl3","Pruitt","Shay","Po batkovi","Ap #739-1293 Urna. Street","Oleksandriia","+38-054-491-8312"),
            new Client("cl4","Carey","Freya","Po batkovi","P.O. Box 920, 1634 Aenean St.","Oleksandriia","+38-025-569-2533"),
            new Client("cl5","Rodgers","Rina","Po batkovi","Ap #290-334 Elit Rd.","Vinnytsia","+38-092-467-6358")
            
        };

        var dillers = new List<Diller>
        {
            new Diller("d1","Everett","Cameran","Po batkovi","https://imgur.com/group/9","Ap #441-1892 Aenean Ave","+38-056-151-5698"),
            new Diller("d2","Stanley","Henry","Po batkovi","https://imgur.com/user/110","3312 Nec Av.","+38-056-151-569"),
            new Diller("d3","Richard","Kalia","Po batkovi","https://imgur.com/settings","Ap #216-7401 Ipsum. St.","+38-086-372-5290"),
            new Diller("d4","English","Neve","Po batkovi","https://imgur.com/sub/cars","3135 Eu Ave","+38-006-313-0258"),
            new Diller("d5","Daniel","Neville","Po batkovi","https://imgur.com/sub/cars","707-8904 Mattis St.","+38-032-873-8174")
        };

        /*var contracts = new List<Contract>
        {
            new Contract(),
            new Contract(),
            new Contract(),
            new Contract(),
            new Contract()
        };*/
        dbm.GetCollection<Car>("cars").InsertMany(cars);
        dbm.GetCollection<Client>("clients").InsertMany(clients);
        dbm.GetCollection<Diller>("dillers").InsertMany(dillers);
        //dbm.GetCollection<Contract>("contracts").InsertMany(contracts);

    }
    static void findQuery(IMongoCollection<BsonDocument> cars)
    {
        var documents = cars.Find(new BsonDocument()).ToList();

        foreach (var document in documents)
        {
            Console.WriteLine(document);
        }
    }
    
    static void findParamQuery(IMongoCollection<BsonDocument> cars)
            {
                var filter = Builders<BsonDocument>.Filter.Eq("maker", "AUDI");

                var documents = cars.Find(filter).ToList();

                foreach (var document in documents)
                {
                    Console.WriteLine(document);
                }
            }

    static void findLimit(IMongoCollection<BsonDocument> cars)
            {
                var documents = cars.Find(new BsonDocument()).Limit(4).ToList();

                foreach (var document in documents)
                {
                    Console.WriteLine(document);
                }
            }

    static void findSlice(IMongoCollection<BsonDocument> clients)
            {
                var projection = Builders<BsonDocument>.Projection.Include("email").Slice("records", 1);

                var documents = clients.Find(new BsonDocument()).Project(projection).ToList();

                foreach (var document in documents)
                {
                    Console.WriteLine(document);
                }
            }

    static void findGt(IMongoCollection<BsonDocument> cars)
            {
                var filter = Builders<BsonDocument>.Filter.Gt("range", 600000);

                var documents = cars.Find(filter).ToList();

                foreach (var document in documents)
                {
                    Console.WriteLine(document);
                }
            }

    static void findAnd(IMongoCollection<BsonDocument> cars)
            {
                var filter = Builders<BsonDocument>.Filter.And(
                    Builders<BsonDocument>.Filter.Eq("maker", "AUDI"),
                    Builders<BsonDocument>.Filter.Gt("range", 500000)
                );

                var documents = cars.Find(filter).ToList();

                foreach (var document in documents)
                {
                    Console.WriteLine(document);
                }
            }
    
    static void findRegex(IMongoCollection<BsonDocument> cars)
    {
        var filter = Builders<BsonDocument>.Filter.Regex("maker", new BsonRegularExpression("^A"));

        var documents = cars.Find(filter).ToList();

        foreach (var document in documents)
        {
            Console.WriteLine(document);
        }
    }
    
    static void aggregateCarsByFuel(IMongoCollection<BsonDocument> cars)
    {
        var pipeline = new BsonDocument[]
        {
            BsonDocument.Parse("{ $group: { _id: \"$fuel_type\", count: { $sum: 1 } } }"),
            BsonDocument.Parse("{ $sort: { count: -1 } }"),
            BsonDocument.Parse("{ $limit: 3 }")
        };

        var result = cars.Aggregate<BsonDocument>(pipeline).ToList();
        
        foreach (var document in result)
        {
            Console.WriteLine(document);
        }
    }
    
    static void aggregateSomethings(IMongoCollection<BsonDocument> cars)
    {
        var pipeline = new BsonDocument[]
        {
            BsonDocument.Parse(@"{$lookup: {
            from: 'clients',
            localField: 'client_id.$id',
            foreignField: '_id',
            as: 'client'
        }
    }"),
            BsonDocument.Parse("{ $unwind: '$client' }"),
            BsonDocument.Parse(@"{
        $lookup: {
            from: 'dillers',
            localField: 'diller_id.$id',
            foreignField: '_id',
            as: 'diller'
        }
    }"),
            BsonDocument.Parse("{ $unwind: '$diller' }"),
            BsonDocument.Parse(@"{
        $lookup: {
            from: 'cars',
            localField: 'car_id.$id',
            foreignField: '_id',
            as: 'car'
        }
    }"),
            BsonDocument.Parse("{ $unwind: '$car' }"),
            BsonDocument.Parse(@"{
        $group: {
            _id: {
                client_id: '$client._id',
                client_name: { $concat: ['$client.sname', ' ', '$client.fname'] },
                diller_id: '$diller._id',
                diller_name: { $concat: ['$diller.sname', ' ', '$diller.fname'] },
                car_id: '$car._id',
                car_model: '$car.model'
            },
            count: { $sum: 1 }
        }
    }")
        };

        var result = cars.Aggregate<BsonDocument>(pipeline).ToList();
        
        Console.WriteLine("help");
        
        foreach (var document in result)
        {
            Console.WriteLine(document);
        }
    }
}