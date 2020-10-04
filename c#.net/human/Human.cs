using System;

namespace human
{
    public class Human
{
    // Fields for Human
    public string Name;
    public int Strength;
    public int Intelligence;
    public int Dexterity;
    public int Health;
     
    // add a public "getter" property to access health
    public string HealthProp
    {
        get
        {
            return $"{Health} is remaining!";
        }
    }
     
    // Add a constructor that takes a value to set Name, and set the remaining fields to default values
        public Human(string selfName){
        Name = selfName;
        Strength = 4;
        Intelligence = 6;
        Dexterity = 3;
        Health = 125;
    }
     
    // Add a constructor to assign custom values to all fields
        public Human(string selfName, int setStr, int setInt, int setDex, int setHealth){
        Name = selfName;
        Strength = setStr;
        Intelligence = setInt;
        Dexterity = setDex;
        Health = setHealth;
    }
     
    // Build Attack method
    public virtual string Attack(Object focus)
    {  
            if(focus is Human)
            {
                Human target = focus as Human;
                return $"{target.Name}: Hit for {target.Health -= Strength * 2} points of damage by {this.Name}";
            }
            return $"You have attacked something that doesn't exist!";
        }
}

}
