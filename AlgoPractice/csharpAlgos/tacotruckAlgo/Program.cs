using System;

namespace tacotruckAlgo
{
    class Program
    {

/*
Taco truck:
 Joe drives a taco truck in the booming town of Squaresburg. He uses an array of [x,y] coordinates corresponding to locations of his customers. They walk to his truck, but he is fair-minded so he wants to minimize total distace from truck to customers. City blocks are perfect squares, and every street is two-way, at perfect right angles. He only parks by street corners (coordinates like [37,-16]). Customers only travel on streets: coordinate [2,-2] is distance 4 from [0,0]. Joes checks the array before deciding where to park. Given a customer coordinate array, return an optimal taco truck location. Example: given [ [10,0], [-1,-10], [2,4] ], return [2,0] for optimal taco truck location, as total distance is 25 (8+13+4). 
 */
        public static int Distance(int[,] customers, int[] coord)
        {
            //DISTANCE CALC
            for (int i = 0; i < customers.GetLength(0); i++)
            {
                int total = Math.Abs(coord[0] - customers[i, 0]) + Math.Abs(coord[1] - customers[i, 1]);
            }
            return total;
        }

        public static int XY (int[,], customers)
        {
            int minX = customers[0, 0];
            int maxX = customers[0, 0];
            int minY = customers[0, 1];
            int maxY = customers[0, 1];

            for (int i = 1; i < customers.GetLength(0); i++)
            {
                if(customers[i,0] < minX)
                {
                    minX = customers[i, 0];
                }
                if(customers[i,0] > maxX)
                {
                    minX = customers[i, 0];
                }
                if(customers[i,0] < minX)
                {
                    minX = customers[i, 1];
                }
                if(customers[i,0] > maxY)
                {
                    minX = customers[i, 1];
                }
            }

            int minDis = Int.MaxValue;
            int minCoord = new int[] { minX, minY };

            for (int i = minX; i < maxX; i++)
            {
                for (int j = minY; j < maxY; j++)
                {
                    int dis = GetDistance(customers, new int[] { i, j });
                    if(dis < minDis)
                    {
                        minDis = dis;
                        minCoord[0] = i;
                        minCoord[1] = j;
                    }
                }
            }
            return minCoord;
        }


        static void Main(string[] args)
        {
            int[,] customers = new int[,] { { 10, 0 }, { -1, -10 }, { 2, 4 } };
            int[] coord = new int[] { 2, 0 };
            Console.WriteLine(XY(customers));
        }
    }
}
