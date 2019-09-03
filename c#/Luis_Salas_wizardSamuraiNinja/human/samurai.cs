using System;

namespace human
{
    class Samurai: Human
    {

        public Samurai(string name) : base()
        {
            Name = name;
            Strength = 3;
            Intelligence = 25;
            Dexterity = 3;
            health = 200;
        }
        public override void attack(object target)
        {
            Human enemy = target as Human;
            int dmg = enemy.health; 
            if(health < 50){
            enemy.health -= dmg;
            Console.WriteLine($"samurai {Name} destroyed {enemy.Name}! what a fatal blow");
            }
        }

    }
}
