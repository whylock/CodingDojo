using System;
using System.Collections.Generic;

namespace hungryNinja
{
    class Ninja
    {
        public string Name;
        private int calorieIntake;
        public List<Food> FoodHistory;

        // add a constructor

        public Ninja(string selfName)
        {
            Name = selfName;
            calorieIntake = 0;
            this.FoodHistory = new List<Food>();
        }
        public void ClearIntake()
        {   
            foreach (Food item in FoodHistory)
            {
                FoodHistory.Remove(item);
            }
        }

        // add a public "getter" property called "IsFull"

        public bool IsFull
        {
            get
            {
                if(this.calorieIntake > 1200)
                {
                    return true;
                }
                return false;
            }
        }

        // build out the Eat method
        public string Eat(Food item)
        {
            calorieIntake += item.Calories;
            FoodHistory.Add(item);
            return $"{this.Name} ate {item.Name}! It has added to the intake list.";
        }
    }

}