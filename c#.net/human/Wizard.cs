using System.Runtime;
using System;

namespace human
{
    public class Wizard : Human
    {
        public int Mana;

        public Wizard(string selfName) : base(selfName)
        {
            Intelligence = 25;
            Mana = Intelligence * 5;
        }

        public void Heal(Object focus)
        {
            if(focus is Human)
            {
                Human target = focus as Human;
                int heal = this.Intelligence * 10;
                target.Health += heal;
                Console.WriteLine($"{this.Name} heals {target.Name} for {heal} points of health!");
            }
        }

        public override string Attack(Object focus)
        {
            if(focus is Human)
            {
                Human target = focus as Human;
                int dmg = this.Intelligence * 5;
                target.Health -= dmg;
                this.Health += dmg;
                return $"{target.Name} has been hit for {dmg}! {this.Name} gains {dmg} as a result of their attack!";
            }
            return null;
        }
    }
}