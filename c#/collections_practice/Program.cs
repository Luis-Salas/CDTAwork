using System;
using System.Collections.Generic;


namespace collections_practice
{
    class Program
    {
        static void Main(string[] args)
        {
            // int[] numArray = {1, 2, 3, 4, 5};
            // Console.WriteLine(numArray[0]);
            // string[] strArray = {"tim", "martin", "sara", "nikki"};
            // Console.WriteLine(strArray[2]);
            // bool[] boolArray = new bool[10];
            // for(int i = 0; i < 10; i += 2)
            // {
            //     boolArray[i] = true;
            // }
            // Console.WriteLine(boolArray[1]);

            List<string> flavors = new List<string>();
            flavors.Add("chocolate");
            flavors.Add("vanilla");
            flavors.Add("strawberry");
            flavors.Add("rocky road");
            flavors.Add("blueberry");
            flavors.RemoveAt(3);
            Console.WriteLine(flavors.Count);


            Dictionary<string,string> profile = new Dictionary<string,string>();
            // profile.Add("Name", "Speros");
            // foreach(string name in flavors){
            //     Console.WriteLine("name -" + profile["Name"]);

            // }       

             Random rand = new Random();
            foreach(string name in flavors){
                profile[name] = flavors[rand.Next(flavors.Count)];
                Console.WriteLine(profile[name]);
            }       

            foreach(KeyValuePair<string, string> info in profile)
            {
                Console.WriteLine(info.Key + "  " + info.Value);
            }
        }
    }
}
