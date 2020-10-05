using System;
using System.Collections.Generic;
namespace ConsoleApplication
{
    public class Program
    {
        public static void GetAvg(int[] arr)
        {
            double avg = 0;
            for (int i = 0; i < arr.Length;i++)
            {
                avg += arr[i];
            }
            avg = avg / arr.Length;
            Console.WriteLine(avg);
        }

        public static void OddArray()
        {
            // Write a function that creates, and then returns, an array that contains all the odd numbers between 1 to 255. 
            // When the program is done, this array should have the values of [1, 3, 5, 7, ... 255].
            List<int> odds = new List<int>();
            for (int i = 1; i <= 255; i++)
            {
                if(i%2 != 0){
                    odds.Add(i);
                }
            }
            int[] array = odds.ToArray();
            Console.WriteLine(odds);
            foreach (var item in array)
            {
                Console.WriteLine(item);
            }
        }
        
        public static void GreaterThanY(int[] numbers, int y)
        {
            // Write a function that takes an integer array, and a integer "y" and returns the number of array values 
            // That are greater than the "y" value. 
            // For example, if array = [1, 3, 5, 7] and y = 3. Your function should return 2 
            // (since there are two values in the array that are greater than 3).

            int res = 0;
            foreach (int num in numbers)
            {
                if(num > y)
                {
                    res++;
                }
            }
            Console.WriteLine(res);
        }

        public static void SquareArrayValues(int[] numbers)
        {
            // Write a function that takes an integer array "numbers", and then multiplies each value by itself.
            // For example, [1,5,10,-10] should become [1,25,100,100]

            for (int i = 0; i < numbers.Length;i++)
            {
                numbers[i] = numbers[i] * numbers[i];
            }
            foreach (int num in numbers)
            {
                Console.WriteLine(num);
            }
        }

        public static void EliminateNegatives(int[] numbers)
        {
            // Given an integer array "numbers", say [1, 5, 10, -2], create a function that replaces any negative number with the value of 0. 
            // When the program is done, "numbers" should have no negative values, say [1, 5, 10, 0].

            for (int i = 0; i < numbers.Length;i++)
            {
                if(numbers[i] < 0)
                {
                    numbers[i] = 0;
                }
            }
            foreach (int num in numbers)
            {
                Console.WriteLine(num);
            }
        }


        public static void MinMaxAverage(int[] numbers)
        {
            // Given an integer array, say [1, 5, 10, -2], create a function that prints the maximum number in the array, 
            // the minimum value in the array, and the average of the values in the array.

            int max = numbers[0];
            int min = numbers[0];
            double avg = 0;
            double sum = 0
            foreach (int num in numbers)
            {  
                if(num > max)
                {
                    max = num;
                }
                if(num < min)
                {
                    min = num;
                }
                sum = sum + num;
            }
            avg = sum / numbers.Length;
            Console.WriteLine(max);
            Console.WriteLine(min);
            Console.WriteLine(avg);
        }

        public static void ShiftValues(int[] numbers)
        {
            // Given an integer array, say [1, 5, 10, 7, -2], 
            // Write a function that shifts each number by one to the front and adds '0' to the end. 
            // For example, when the program is done, if the array [1, 5, 10, 7, -2] is passed to the function, 
            // it should become [5, 10, 7, -2, 0].

            for (int i = 0; i < numbers.Length;i++)
            {
                if(i != numbers.Length-1)
                {
                    numbers[i] = numbers[i + 1];
                }
                else
                {
                    numbers[i] = 0;
                }
            }
            foreach (int num in numbers)
            {
                Console.WriteLine(num);
            }


        }

        public static void NumToString(int[] numbers)
        {
            // Write a function that takes an integer array and returns an object array 
            // that replaces any negative number with the string 'Dojo'.
            // For example, if array "numbers" is initially [-1, -3, 2] 
            // your function should return an array with values ['Dojo', 'Dojo', 2].


            object[] result = new object[numbers.Length];

            for (int i = 0; i < numbers.Length;i++) 
            {
                if(numbers[i] < 0)
                {
                    result[i] = "Dojo";
                }
                else 
                {
                    result[i] = numbers[i];
                }
            }
            foreach (var item in numbers)
            {
                Console.WriteLine(item);
            }
        }

        public static void Main(string[] args)
        {
            int[] arr = { 1, 2, 3, 4 };
            int[] arrNeg = { 1, 2, 3, -4 };
            // GetAvg(arr);
            // OddArray();
            // GreaterThanY(arr, 2);
            // SquareArrayValues(arr);
            // EliminateNegatives(arrNeg);
            // ShiftValues(arr);
            NumToString(arrNeg);
        }
    }
}
