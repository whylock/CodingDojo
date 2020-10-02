using System;
using System.Collections.Generic;

namespace puzzles
{
    class Program
    {
        static void Main(string[] args)
        {
            
        }

        // Random Array
        // Create a function called RandomArray() that returns an integer array
        // Place 10 random integer values between 5-25 into the array
        // Print the min and max values of the array
        // Print the sum of all the values

        public static void RandomArray()
        {
            Random rand = new Random();

            int[] randomArray = {
                rand.Next(5,26),rand.Next(5,26),rand.Next(5,26),rand.Next(5,26),rand.Next(5,26),
                rand.Next(5,26),rand.Next(5,26),rand.Next(5,26),rand.Next(5,26),rand.Next(5,26),
                };
            int min = randomArray[0];
            int max = randomArray[0];
            int sum = 0;

            for (int i = 0; i < randomArray.Length; i++){
                if(randomArray[i] > max){
                    max = randomArray[i];
                }
                if(randomArray[i] < min){
                    min = randomArray[i];
                }
                sum += randomArray[i];
            }

            foreach (var item in randomArray)
            {
                Console.WriteLine(item);
            }
        }
            public static void coinToss()
            {
                Random ran = new Random();

                string side = "";

                if(rand.Next(0,2) == 0){
                    side = "Heads";
                    Console.WriteLine(side);
                }
                else {
                    side = "Tails";
                    Console.WriteLine(side);
                }
            }

        public static void TossMultipleCoins(int num)
        {
            double side = 0;
            int heads = 0;
            for (int i = 1; i <= num; i++)
            {
                if (TossCoin() == "Heads")
                {
                    heads++;
                }
            }
            side = (double)heads / (double)num;
            Console.WriteLine(side);
        }

        public static List<string> Names(List<string> test)
        {
            List<string> result = new List<string>();

            Random rand = new Random();
            for (int i = 0; i < test.Count; i++)
            {
                int j = rand.Next(0, i);
                string value = test[j];
                test[j] = test[i];
                test[i] = value;
            }

            Console.WriteLine(result);
        }

    }
}
