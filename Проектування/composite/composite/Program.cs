namespace composite;

public interface IClientRecord
{
    void Print();
}

public class LeafClientRecord : IClientRecord
{
    private string name;

    public LeafClientRecord(string name)
    {
        this.name = name;
    }

    public void Print()
    {
        Console.WriteLine("Client Record: " + name);
    }
}


public class CompositeClientRecord : IClientRecord
{
    private string name;
    private List<IClientRecord> children;

    public CompositeClientRecord(string name)
    {
        this.name = name;
        this.children = new List<IClientRecord>();
    }

    public void Add(IClientRecord clientRecord)
    {
        children.Add(clientRecord);
    }

    public void Remove(IClientRecord clientRecord)
    {
        children.Remove(clientRecord);
    }

    public void Print()
    {
        Console.WriteLine("Client Record: " + name);
        foreach (var clientRecord in children)
        {
            clientRecord.Print();
        }
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        IClientRecord client1 = new LeafClientRecord("John Doe");
        IClientRecord client2 = new LeafClientRecord("Jane Smith");
        IClientRecord client3 = new LeafClientRecord("Robert Johnson");
        
        CompositeClientRecord composite1 = new CompositeClientRecord("Company 1");
        composite1.Add(client1);
        composite1.Add(client2);

        CompositeClientRecord composite2 = new CompositeClientRecord("Company 2");
        composite2.Add(client3);

        CompositeClientRecord composite3 = new CompositeClientRecord("Main Company");
        composite3.Add(composite1);
        composite3.Add(composite2);
        
        composite3.Print();
    }
}