using MongoDB.Bson.Serialization.Attributes;

namespace ConsoleApp1;

public class Diller
{
    public Diller(string id, string sname, string fname, string mname, string address, string city, string phone)
    {
        _id = id;
        this.sname = sname;
        this.fname = fname;
        this.mname = mname;
        this.address = address;
        this.city = city;
        this.phone = phone;
    }

    [BsonId]
    public string _id { get; set; }
    public string sname { get; set; }
    public string fname { get; set; }
    public string mname { get; set; }
    public string address { get; set; }
    public string city { get; set; }
    public string phone { get; set; }
}