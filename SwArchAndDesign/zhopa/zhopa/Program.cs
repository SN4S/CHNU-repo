namespace zhopa;

interface ICustomer
{
    void RecordDetails(string details);
}

class CustomerRecord : ICustomer
{
    private string name;
    private string address;

    public CustomerRecord(string name)
    {
        this.name = name;
    }

    public void RecordDetails(string address)
    {
        this.address = address;
        Console.WriteLine($"Customer Name: {name}, Address: {address}");
    }
}

class CustomerRecordFactory
{
    private Dictionary<string, ICustomer> recordMap;

    public CustomerRecordFactory()
    {
        recordMap = new Dictionary<string, ICustomer>();
    }

    public ICustomer GetCustomerRecord(string name)
    {
        ICustomer record;
        if (!recordMap.TryGetValue(name, out record))
        {
            record = new CustomerRecord(name);
            recordMap[name] = record;
        }

        return record;
    }
}

class NotaryOffice
{
    private CustomerRecordFactory recordFactory;

    public NotaryOffice(CustomerRecordFactory recordFactory)
    {
        this.recordFactory = recordFactory;
    }

    public void CreateCustomer(string name, string address)
    {
        ICustomer customer = recordFactory.GetCustomerRecord(name);
        customer.RecordDetails(address);
    }
}

class Program
{
    static void Main(string[] args)
    {
        CustomerRecordFactory recordFactory = new CustomerRecordFactory();
        NotaryOffice notaryOffice = new NotaryOffice(recordFactory);

        // Creating and recording customer details
        notaryOffice.CreateCustomer("John Doe", "123 Main St");
        notaryOffice.CreateCustomer("Jane Smith", "456 Oak St");
        notaryOffice.CreateCustomer("John Doe", "789 Elm St");
    }
}
