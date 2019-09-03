using System;

namespace human
{
    class Ninja: Human
    {
       public Ninja(string name): base(name, 3, 25, 35, 50){

        }
        public override void attack(object target)
        {
            int dmg = Dexterity *  5; 
            Human enemy = target as Human;
            enemy.health -= dmg;
            Console.WriteLine($"Ninja {Name} attacked {enemy.Name} for {dmg} damage!");
        }
    }
}
