using System;
namespace human
{
    public class Samurai : Human
    {
        public int Honor;

        public Samurai(string selfName) : base(selfName)
        {
            Health = 200;
            Honor = 0;
        }

        public void Meditate()
        {
            this.Health = 200;
        }

        public override string Attack(Object focus)
        {
            if(focus is Human)
            {
                //Declare varible 'target' set equal to parameter 'focus'
                Human target = focus as Human;

                //Generate a random number 0-5
                Random rand = new Random();
                int percent = rand.Next(0,6);
                
                //Sets damage for this attack
                int dmg = this.Strength * 5;

                if(target.Health < 50)
                {
                    target.Health = 0;
                    this.Honor++;
                    return $"{target.Name} has been hit for {dmg}! {this.Name} landed a critical hit. {target.Name} is dead!";
                }
                
                target.Health -= dmg;
                
                if(target.Health == 0){
                    this.Honor++;
                    return $"{target.Name} has been hit for {dmg}! {this.Name} landed the killing blow. {target.Name} is dead!";
                }

                return $"{target.Name} has been hit for {dmg}! {this.Name} gains {dmg} as a result of their attack!";
            }
            return null;
        }
    }
}