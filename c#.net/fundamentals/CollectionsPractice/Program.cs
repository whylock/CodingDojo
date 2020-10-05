using System;
using System.Collections.Generic;

namespace CollectionsPractice
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] intArray = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
            Console.WriteLine(intArray);

            string[] stringArray;
            stringArray = new string[] {"shawn", "tom", "jimmy"};
            Console.WriteLine(stringArray);

            bool[] boolArray = new bool[10];
            boolArray[0] = true;
            boolArray[1] = false;
            boolArray[2] = true;
            boolArray[3] = false;
            boolArray[4] = true;
            boolArray[5] = false;
            boolArray[6] = true;
            boolArray[7] = false;
            boolArray[8] = true;
            boolArray[9] = false;
            Console.WriteLine(boolArray);

            List<string> iceCream = new List<string>();
            iceCream.Add("Chocolate");
            iceCream.Add("Vanilla");
            iceCream.Add("Birthday Cake");
            iceCream.Add("Pumpkin");
            iceCream.Add("Mint");
            Console.WriteLine($"There are {iceCream.Count} ice creams.");
            Console.WriteLine($"{iceCream[2]}");
            iceCream.Remove(iceCream[2]);
            Console.WriteLine($"Now there are {iceCream.Count} ice creams.");
            Dictionary<string, string> iceCreamBuyers = new Dictionary<string, string>();
            Random rand = new Random();
            iceCreamBuyers.Add(stringArray[0], iceCream[rand.Next(0,4)]);
            iceCreamBuyers.Add(stringArray[1], iceCream[rand.Next(0,4)]);
            iceCreamBuyers.Add(stringArray[2], iceCream[rand.Next(0,4)]);
            iceCreamBuyers.Add(stringArray[3], iceCream[rand.Next(0,4)]);

            foreach (var item in iceCreamBuyers)
            {
                Console.WriteLine(item.Key + "-" + item.Value);
            }
        }
    }
}
