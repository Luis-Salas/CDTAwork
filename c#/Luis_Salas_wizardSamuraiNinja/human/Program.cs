using System;

namespace human
{
    class Program
    {
        static void Main(string[] args)
        {

            var person = new Human("luis");
            var wiz = new Wizard("gandalf");
            var nin = new Ninja("Leonardo");
            var samu = new Samurai("jack");


            wiz.attack(person);
            nin.attack(samu);
            System.Console.WriteLine(samu.health);
            samu.attack(nin);
            wiz.heal(person);
        }
    }
}
