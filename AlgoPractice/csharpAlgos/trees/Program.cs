using System;

namespace trees
{
    class Program
    {
        static void Main(string[] args)
        {
            BST tree = new BST();
            tree.Insert(6);
            tree.Insert(7);
            tree.Insert(8);
            tree.Insert(5);
            tree.Insert(2);
            tree.Insert(9);
            tree.Insert(10);
            // Console.WriteLine("**************");
            // tree.Min();
            // tree.Max();
            // Console.WriteLine("**************");
        }

        public class BNode
        {
            public int value {get;set;}
            public BNode left {get;set;}
            public BNode right {get;set;}
            public BNode(int v)
            {
                value = v;
                left = null;
                right = null;
            }
        }

        public class BST
        {
            //Setup
            public BNode root {get;set;}
            public BST()
            {
                root = null;
            }

            public string Insert(int val)
            {
                BNode node = new BNode(val);
                if(root == null)
                {
                    root = node;
                    Console.WriteLine($"{node.value} is now the root.");
                    return $"{node.value} is now the root.";
                }
                else
                {
                    BNode current = root;
                    while(true)
                    {
                        if (val == current.value)
                        {
                            Console.WriteLine("Root and the value are the same");
                            return "Root and the value are the same";
                        }
                        //Less Than
                        if(val < current.value)
                        {
                            if(current.left == null)
                            {
                                current.left = node;
                                Console.WriteLine(current.value);
                                return $"Current: {current.left.value}";
                            }
                            current = current.left;
                        }
                        else 
                        // Greater Than
                        {
                            if(current.right == null)
                            {
                                current.right = node;
                                Console.WriteLine(current.value);
                                return $"Current: {current.right.value}";
                            }
                            current = current.right;
                        }
                    }
                }

            }

            public BNode Min()
            {
                if(root == null)
                {
                    return null;
                }
                else
                {
                    BNode current = root;
                    while(current.left != null)
                    {
                        current = current.left;
                    }
                    return current;
                }
            }
            public BNode Max()
            {
                if(root == null)
                {
                    return null;
                }
                else
                {
                    BNode current = root;
                    while(current.right != null)
                    {
                        current = current.right;
                    }
                    return current;
                }
            }

        }
    }
}
