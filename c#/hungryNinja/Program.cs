using System;
using System.Collections.Generic;

namespace hungryNinja
{
    class Program
    {
        static void Main(string[] args)
        {
            Ninja ninja = new Ninja();
            Buffet buffe = new Buffet();

   
            ninja.Eat(buffe.Serve());
            ninja.Eat(buffe.Serve());
            ninja.Eat(buffe.Serve());
        }
    }
}
