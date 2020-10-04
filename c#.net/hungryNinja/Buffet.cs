using System.Collections.Generic;
using System;

namespace hungryNinja
{
    class Buffet
    {
        public List<IConsumable> Menu;

        public Buffet()
        {
            Menu = new List<IConsumable>()
            {
                new Food("Peanut Butter & Jelly", 400, false, true),
                new Drink("Water", 0, false, false)
            };
        }
        public IConsumable Serve()
        {
            Random rand = new Random();
            int randInt = rand.Next(Menu.Count);
            return Menu[randInt];
        }
    }
}