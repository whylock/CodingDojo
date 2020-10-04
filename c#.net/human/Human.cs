using System;

namespace human
{
    class Human
{
    // Fields for Human
    public string Name;
    public int Strength;
    public int Intelligence;
    public int Dexterity;
    private int Health;
     
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
    public string Attack(Human target)
    {
        if(target is Human)
        {
            return $"{target.Name}: Hit for {target.Health -= Strength * 1.75} points of damage by {this.Name}";
        }
    }
}

}
