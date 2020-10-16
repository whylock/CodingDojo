using System.Collections.Generic;
using System;

namespace trees
{
    class Program
    {
        static void Main(string[] args)
        {
            BST tree = new BST();
            tree.Insert(6);
            tree.Insert(4);
            tree.Insert(8);
            tree.Insert(7);
            tree.Insert(9);
            // tree.Find(10);
            // tree.Insert(5);
            // tree.Insert(3);
            // tree.Insert(10);
            // Console.WriteLine(tree.Depth(tree.root));
            // Console.WriteLine(tree.IsBalanced());
            Console.WriteLine(tree.IsFull(tree.root));
        }

        public class BNode
        {
            public int value { get; set; }
            public BNode left { get; set; }
            public BNode right { get; set; }
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
            public BNode root { get; set; }
            public BST()
            {
                root = null;
            }

            public string Insert(int val)
            {
                BNode node = new BNode(val);
                if (root == null)
                {
                    root = node;
                    return $"{node.value} is now the root.";
                }
                else
                {
                    BNode current = root;
                    while (true)
                    {
                        if (val == current.value)
                        {
                            return "Root and the value are the same";
                        }
                        //Less Than
                        if (val < current.value)
                        {
                            if (current.left == null)
                            {
                                current.left = node;
                                return $"Current: {current.left.value}";
                            }
                            current = current.left;
                        }
                        else
                        // Greater Than
                        {
                            if (current.right == null)
                            {
                                current.right = node;
                                return $"Current: {current.right.value}";
                            }
                            current = current.right;
                        }
                    }
                }

            }

            public BNode Min()
            {
                if (root == null)
                {
                    return null;
                }
                else
                {
                    BNode current = root;
                    while (current.left != null)
                    {
                        current = current.left;
                    }
                    return current;
                }
            }
            public BNode Max()
            {
                if (root == null)
                {
                    return null;
                }
                else
                {
                    BNode current = root;
                    while (current.right != null)
                    {
                        current = current.right;
                    }
                    return current;
                }
            }

            // BST Height (give me the height of a given BST)
            public int Depth(BNode root)
            {
                if (root == null) return 0; 
                int LeftDepth = Depth(root.left);
                int RightDepth = Depth(root.right);
                //            condition       ?   truthy        :    falsey
                return RightDepth > LeftDepth ? RightDepth + 1  : LeftDepth + 1;
            }


            // BST IsBalanced (Tell me if a tree is balanced by height of left and right being no greater than 1 in difference)

            public bool IsBalanced()
            {

                Console.WriteLine(Math.Abs(Depth(root.left) - Depth(root.right)));


                return (Math.Abs(Depth(root.left) - Depth(root.right)) > 1) ? false : true;
            }

            public bool IsFull(BNode root)
            {
                if(root == null) return true;
                if(root.left == null && root.right == null) return true;
                if(root.left != null && root.right != null) return (IsFull(root.left) && IsFull(root.right));
                return false; // base case
            }

            // Tomorrow’s algo: Remove a given node from a BST
            // Think about your potential cases:
            // Case 1) the node to remove is at root
            // Case 2) the node to remove has no children
            // Case 3) the node to remove has 1 child
            // Case 4) the node to remove has 2 children
            // Case 5) the node doesn't exist in the tree

            // Maintain the integrity of the tree, meaning when you go through it later the values should still be in their proper left/right placement from the node above it

            public BNode Remove(BNode root, int NodeValue)
            {
                if(root == null) return null;
                if(NodeValue < root.value)
                {
                    root.left = Remove(root.left, NodeValue);
                }
                else if (NodeValue > root.value)
                {
                    root.right = Remove(root.right, NodeValue);
                }
                else 
                {
                    if(root.left == null)
                    {
                        return root.right;
                    }
                }
            }

        }
    }
}