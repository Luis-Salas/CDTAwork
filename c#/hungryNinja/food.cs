using System;
using System.Collections.Generic;

namespace hungryNinja
{
    class Food
    {
    public string Name;
    public int Calories;
    // Foods can be Spicy and/or Sweet
    public bool IsSpicy; 
    public bool IsSweet; 
     public Food(string name, int calories, bool sweet, bool spicy)
        {
            Name = name;
            Calories = calories;
            IsSpicy = spicy;
            IsSweet = sweet;
        }
    }
}
