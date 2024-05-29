using MongoDB.Bson;

namespace ConsoleApp1;

public class Contract
{
    public Contract(ObjectId clientId, ObjectId dillerId, ObjectId carId, string dateOfSelling, string price, string note)
    {
        ClientId = clientId;
        diller_id = dillerId;
        car_id = carId;
        date_of_selling = dateOfSelling;
        this.price = price;
        this.note = note;
    }

    public ObjectId ClientId { get; set; }
    public ObjectId diller_id { get; set; }
    public ObjectId car_id { get; set; }
    public string date_of_selling { get; set; }
    public string price { get; set; }
    public string note { get; set; }
}