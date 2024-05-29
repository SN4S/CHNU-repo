namespace chain;
public abstract class Handler
{
    protected Handler successor;

    public void SetSuccessor(Handler successor)
    {
        this.successor = successor;
    }

    public abstract void HandleRequest(int request);
}

public class ClientValidationHandler : Handler
{
    public override void HandleRequest(int request)
    {
        if (request == 1)
        {
            Console.WriteLine("Client information is valid. Proceeding to the next step...");
            if (successor != null)
            {
                successor.HandleRequest(request);
            }
        }
        else
        {
            Console.WriteLine("Invalid client information. Registration process aborted.");
        }
    }
}

public class ClientIDGenerationHandler : Handler
{
    public override void HandleRequest(int request)
    {
        if (request == 2)
        {
            Console.WriteLine("Client ID generated successfully. Proceeding to the next step...");
            if (successor != null)
            {
                successor.HandleRequest(request);
            }
        }
        else
        {
            Console.WriteLine("Client ID generation failed. Registration process aborted.");
        }
    }
}

public class ClientStorageHandler : Handler
{
    public override void HandleRequest(int request)
    {
        if (request == 3)
        {
            Console.WriteLine("Client information stored successfully. Registration process completed.");
        }
        else
        {
            Console.WriteLine("Client information storage failed. Registration process aborted.");
        }
    }
}

public class ClientRegistrationSystem
{
    private Handler chain;

    public ClientRegistrationSystem()
    {
        Handler validationHandler = new ClientValidationHandler();
        Handler idGenerationHandler = new ClientIDGenerationHandler();
        Handler storageHandler = new ClientStorageHandler();
        
        validationHandler.SetSuccessor(idGenerationHandler);
        idGenerationHandler.SetSuccessor(storageHandler);

        chain = validationHandler;
    }

    public void ProcessRequest(int request)
    {
        chain.HandleRequest(request);
    }

}

public class Program
{
    
    public static void Main(string[] args)
    {
        ClientRegistrationSystem system = new ClientRegistrationSystem();
        Console.WriteLine("*/ Notary Office /*");
        Console.WriteLine("Please follow the registration process step by step.");

        Console.WriteLine("Step 1: Validate client information.");
        Console.Write("Enter 1 to proceed or any other key to abort: ");
        int step1 = Convert.ToInt32(Console.ReadLine());
        system.ProcessRequest(step1);

        Console.WriteLine("Step 2: Generate client ID.");
        Console.Write("Enter 2 to proceed or any other key to abort: ");
        int step2 = Convert.ToInt32(Console.ReadLine());
        system.ProcessRequest(step2);

        Console.WriteLine("Step 3: Store client information.");
        Console.Write("Enter 3 to proceed or any other key to abort: ");
        int step3 = Convert.ToInt32(Console.ReadLine());
        system.ProcessRequest(step3);
    }
}
