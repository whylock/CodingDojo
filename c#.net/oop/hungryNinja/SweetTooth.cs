using System;
using System.Collections.Generic;

namespace hungryNinja
{
    public class SweetTooth : Ninja
    {
        
        public override bool IsFull 
        {
            get
            {
                if(calorieIntake > 1500)
                {
                    return true;
                }
                return false;
            }
        }

        public override void Consume(IConsumable item)
        {
            if(item.IsSweet)
            {
                calorieIntake += item.Calories + 10;
            }
            calorieIntake += item.Calories;
            ConsumptionHistory.Add(item);
        }
    }
    }
}