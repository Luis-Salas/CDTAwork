using System;

namespace first_csharp
{
    class Program
    {
        static void Main(string[] args)
        {
        // int start = 0;
        // int end = 255;
        // loop from start to end including end
        // for (int i = start; i <= end; i++)
        //     {
        //     Console.WriteLine(i);
        //     }

            for (int i = 1; i <= 100; i++){
                if(i % 5 == 0){
                Console.WriteLine(i + "buzz");
                }
                if(i % 3 == 0 ){
                    Console.WriteLine(i + "fizz");
                }
                if(i % 3 == 0 && i % 5 == 0){
                    Console.WriteLine("fizz buzz" + i);
                }
            }
        }

    }
}
