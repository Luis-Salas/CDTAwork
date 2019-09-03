using System;
using System.Collections.Generic;

namespace hungryNinja
{
    class Buffet
    {
    public List<Food> Menu;
     
    //constructor
    public Buffet()
    {
        Menu = new List<Food>()
        {
            new Food("pizza", 1000, false, false),
            new Food("burger", 1000, false, false),
            new Food("hotdog", 1000, false, false)
        };

    }
     public Food Serve(){
        Random r = new Random();
        return Menu[r.Next(Menu.Count)];
     }
    
    }
}
                                     
                                      