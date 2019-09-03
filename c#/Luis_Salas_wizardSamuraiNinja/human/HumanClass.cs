using System;

namespace human
{
    class Human
    {
        public int health;
        public string Name;

        public int Strength;
        public int Intelligence;
        public int Dexterity;

        public Human()
        {
            Name = "Human";
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            health = 100;
        }
           public Human(string name)
        {
            Name = name;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            health = 100;
        }
          public Human(string name, int str, int intel, int dex, int hp)
        {
            Name = name;
            Strength = str;
            Intelligence = intel;
            Dexterity = dex;
            health = hp;
        }
        public virtual void attack(object target)
        {
            int dmg = Strength * 3;
            Human enemy = target as Human;
            enemy.health -= dmg;
            Console.WriteLine($"{Name} attacked {enemy.Name} for {dmg} damage!");
        }
    }
}
