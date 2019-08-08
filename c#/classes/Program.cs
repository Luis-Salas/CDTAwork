using System;

namespace consoleApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            Human person = new Human("luis", 4, 7, 100, 9);
            Human person2 = new Human("not luis", 4, 7, 100, 9);
            person2.Attack(person);
            Console.WriteLine(person.health);
        }
    }
}
