using System;

namespace matrixDisplay
{
    class Program
    {
static void Main(string[] args)
        {
            int[,] matrix = new int[4,4] {{12,34,45,56}, {98,87,76,65}, {56,67,78,89}, {54,43,32,21}};
            int[,] search = new int[2,2] {{67,78},{43,32}};
            MatrixDisplay(matrix);
            Console.WriteLine(Search(matrix, search));
        }

        //Matrix Display

//         [ [12,34,45,56],
//           [98,87,76,65],
//           [56,67,78,89],
//           [54,43,32,21] ]

//             col (j) 
//   row (i) [  0   1
//         0 [67, 78],
//        1  [43, 32]
//                         ]
        public static void MatrixDisplay(int[, ] matrix)
        {
            //Goes through the height of the matrix array
            for (int i = 0; i < matrix.GetLength(0); i++)
            {
                string output = "[";
                //Goes through the length of a single array
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    if (j == matrix.GetLength(1) - 1)
                    {
                        output += $"{matrix[i,j]}";
                    }
                    else
                    {
                        output += $"{matrix[i,j]}, ";
                    }
                }
                output += "]";
                Console.WriteLine(output);
            }
        }

        public static bool Search(int[,] matrix, int[,] search)
        {
            for (int i = 0; i < matrix.GetLength(0)-1; i++)
            {
                for (int j = 0; j < matrix.GetLength(1); j++)
                {
                    if(matrix[i, j] == search[0,0] && matrix[i, j + 1] == search[0,1])
                    {
                        if(matrix[i+1, j] == search[1,0] && matrix[i + 1, j + 1] == search[1,1])
                        {
                            return true;
                        }
                    }
                }
            }
            return false;
        }
    }
}
