using System;
namespace human
{
    public class Ninja : Human
    {
        public int Stealth;

        public Ninja(string selfName) : base(selfName)
        {
            Dexterity = 175;
            Stealth = Dexterity * 2;
        }

        public void Steal(Object focus)
        {
            if(focus is Human)
            {
                Human target = focus as Human;
                target.Health -= 5;
                this.Health += 5;
            }
        }

        public override string Attack(Object focus)
        {

            if(focus is Human)
            {
                //Generate a random number 0-5
                Random rand = new Random();
                int percent = rand.Next(0,6);

                Human target = focus as Human;
                int dmg = this.Dexterity * 5;
                // if percent equals 1 that represents a 20% chance to add additional damage
                if(percent == 1){
                    dmg += 10;
                }
                target.Health -= dmg;

                return $"{target.Name} has been hit for {dmg}!";
            }
            return null;
        }
    }
}