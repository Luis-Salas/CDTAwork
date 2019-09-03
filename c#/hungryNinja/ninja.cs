using System;
using System.Collections.Generic;

namespace hungryNinja
{
    class Ninja
    {
        private int caloriesEaten;
        public List<Food> History;
        public Ninja()
        {
            caloriesEaten = 0;
            History = new List<Food>();
        }
        public bool IsFull
        {
            get
            {
                return caloriesEaten > 1200;
            }
        }
        public bool Eat(Food meal)
        {
            if(!IsFull)
            {
                caloriesEaten += meal.Calories;
                System.Console.WriteLine(caloriesEaten);
                Console.WriteLine($"Ninja digs in to some delicious {meal.Name}");
            }
            else
                Console.WriteLine("Ninja is too full to eat!");

            return IsFull;
        }
    }
    
}