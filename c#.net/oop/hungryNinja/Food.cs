using System;

namespace hungryNinja
{
    class Food : IConsumable
    {
        public string Name { get; set; }
        public int Calories { get; set; }
        // Foods can be Spicy and/or Sweet
        public bool IsSpicy { get; set; }
        public bool IsSweet { get; set; }
        // add a constructor that takes in all four parameters: Name, Calories, IsSpicy, IsSweet
        
        public string NutritionLabel()
        {
            return $"Food Name: {Name}, Calories: {Calories}, Spicy: {IsSpicy}, Sweet: {IsSweet}";
        }

        public Food(string selfName, int setCals, bool setSpicy, bool setSweet)
        {
            Name = selfName;
            Calories = setCals;
            IsSpicy = setSpicy;
            IsSweet = setSweet;
        }
    }

}