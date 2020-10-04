using System;

namespace hungryNinja
{
    class Food
    {
        public string Name;
        public int Calories;
        // Foods can be Spicy and/or Sweet
        public bool IsSpicy;
        public bool IsSweet;
        // add a constructor that takes in all four parameters: Name, Calories, IsSpicy, IsSweet

        public Food(string selfName, int setCals, bool setSpicy, bool setSweet)
        {
            Name = selfName;
            Calories = setCals;
            IsSpicy = setSpicy;
            IsSweet = setSweet;
        }
    }

}