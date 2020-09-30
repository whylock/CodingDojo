using System;
using System.Collections.Generic;

namespace binarySearch
{
    class Program
    {
        public static bool BinarySearch(int[] arr, int n){
            int start = 0;
            int end = arr.Length - 1;
            int middle = (start + end) / 2;
            while(arr[middle] != n && start <= end)
            {
                if(n < arr[middle]) {
                    end = middle - 1;
                }
                else 
                {
                    start = middle + 1;
                }
                middle = (start + end) / 2;
            }
            if(arr[middle] == n)
            {
                return true;
            }
            else
            {
                return false;
            }
        }


        static void Main(string[] args)
        {
            int[] array = new int[7] {1,5,7,8,9,10,15};
            Console.WriteLine(BinarySearch(array, 12));
        }
    }
}
