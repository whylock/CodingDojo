using System;
using System.Collections.Generic;
namespace hungryNinja
{
    public class SpiceHound : Ninja
    {
        public override bool IsFull 
        {
            get
            {
                if(calorieIntake > 1200)
                {
                    return true;
                }
                return false;
            }
        }

        public override void Consume(IConsumable item)
        {
            if(item.IsSpicy)
            {
                calorieIntake += item.Calories - 5;
            }
            calorieIntake += item.Calories;
            ConsumptionHistory.Add(item);
        }
    }
}