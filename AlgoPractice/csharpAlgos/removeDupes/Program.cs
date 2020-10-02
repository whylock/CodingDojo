using System;
using System.Collections.Generic;

namespace removeDupes
{
    class Program
    {

        public static List<int> RemoveDaDupes(List<int> nList)
        {
            for (int i = 1; i < nList.Count; i++)
            {
                if (nList[i] == nList[i - 1])
                {
                        nList.Remove(nList[i]);
                        i--;
                }
            }
            foreach (var item in nList)
            {
                Console.WriteLine(item);
            }
            return nList;
        }
        static void Main(string[] args)
        {
            List<int> nList = new List<int>();
            nList.Add(1);
            nList.Add(1);
            nList.Add(2);
            nList.Add(3);
            nList.Add(3);
            nList.Add(5);
            nList.Add(5);
            nList.Add(7);
            nList.Add(8);
            nList.Add(9);
            nList.Add(9);
            nList.Add(11);
            Console.WriteLine(RemoveDaDupes(nList));
        }
    }
}
