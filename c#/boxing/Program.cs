using System;
using System.Collections.Generic;


namespace boxing
{
    class Program
    {
        static void Main(string[] args)
        {
        List<object> boxingList = new List<object>();
        boxingList.Add(7);
        boxingList.Add(28);
        boxingList.Add(-1);
        boxingList.Add(true);
        boxingList.Add("chair");
        int count = 0;
        foreach(var obj in boxingList){
            Console.WriteLine(obj);
            if(obj is int){
                count += (int)obj;
            }

        }
        Console.WriteLine("count = " + count);
        
      }
    }
}
