using System;
using System.Collections.Generic;

namespace hungryNinja
{
    public abstract class Ninja
    {
        protected int calorieIntake;
        public List<IConsumable> ConsumptionHistory;

        // add a constructor

        public Ninja(string selfName)
        {
            calorieIntake = 0;
            this.ConsumptionHistory = new List<IConsumable>();
        }
        public void ClearIntake()
        {   
            foreach (IConsumable item in ConsumptionHistory)
            {
                ConsumptionHistory.Remove(item);
            }
        }

        public int CalorieIntake 
        {
            get 
            {
                return CalorieIntake;
            }
        }

        public abstract bool IsFull { get; }

        // build out the Eat method
        public abstract void Consume(IConsumable item);
    }

}