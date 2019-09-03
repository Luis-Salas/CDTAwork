using System;

namespace human
{
    class Wizard : Human
    {
        public Wizard(string name): base(name, 3, 25, 3, 50){

        }
        public override void attack(object target)
        {
            int dmg = Intelligence *  5; 
            Human enemy = target as Human;
            enemy.health -= dmg;
            health += dmg;
            Console.WriteLine($"{Name} attacked {enemy.Name} for {dmg} damage!");
            Console.WriteLine($"Healed {Name} for {dmg} health is now {health}");

        }
        public void heal(object man){
            Human person = man as Human;
            int val = Intelligence * 10;
            person.health += val;            
            Console.WriteLine($"{Name} healed {person.Name} for {val} damage!");
            Console.WriteLine($"{person.Name} health is now {person.health}");


        }
    }
}
