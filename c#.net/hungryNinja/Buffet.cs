using System.Collections.Generic;
using System;

namespace hungryNinja
{
    class Buffet
    {
        public List<Food> Menu;

        public Buffet()
        {
            Menu = new List<Food>()
            {
                new Food("Peanut Butter & Jelly", 400, false, true)
            };
        }
        public Food Serve()
        {
            Random rand = new Random();
            int randInt = rand.Next(Menu.Count);
            return Menu[randInt];
        }
    }
}