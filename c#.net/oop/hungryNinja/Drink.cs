namespace hungryNinja
{
    public class Drink : IConsumable
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

        public Drink(string name, int cals, bool spice, bool sweet)
        {
            Name = name;
            Calories = cals;
            IsSpicy = spice;
            IsSweet = sweet;
        }
    }
}