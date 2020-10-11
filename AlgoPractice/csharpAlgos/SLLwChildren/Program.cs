using System.Runtime.InteropServices;
using System.Text.RegularExpressions;
using System.ComponentModel;
using System;

namespace SLLwChildren
{
    class Program
    {
        static void Main(string[] args)
        {
            //In program.cs
            //Create new ssl child version
            SLLCh childList = new SLLCh();
            //Make a new node that has child attribute
            NodeCh n1 = new NodeCh(1);
            //Add children to the node
            n1.AddChild(2);
            n1.AddChild(3);
            n1.AddChild(4);
            //Add the node to the list
            childList.AddNode(n1);
            //Rinse and repeat a few times
            NodeCh n2 = new NodeCh(2);
            childList.AddNode(n2);
            n2.AddChild(1);
            n2.AddChild(2);
            NodeCh n5 = new NodeCh(5);
            childList.AddNode(new NodeCh(3));
            childList.AddNode(new NodeCh(4));
            childList.AddNode(n5);
            n5.AddChild(1);
            n5.AddChild(2);
            n5.AddChild(3);
            //Show unflattened list
            childList.ShowList();
            //Run flatten children
            childList.FlattenChildren();
            //Display the flattened list
            childList.ShowList();
        }

        public class NodeCh
        {
            public int val;
            public NodeCh next;
            public NodeCh child;
            public NodeCh(int v)
            {
                val = v;
                next = null;
                child = null;
            }

            public void AddChild(int val)
            {
                if(child == null)
                {
                    child = new NodeCh(val);
                } else {
                    NodeCh runner = child;
                    while(runner.next != null)
                    {
                        runner = runner.next;
                    }
                    runner.next = new NodeCh(val);
                }
            }

        }

    public class SLLCh
    {
        public NodeCh head { get; set; }

        public SLLCh()
        {
            head = null;
        }

        public void AddNode(NodeCh n)
        {
            if (head == null)
            {
                head = n;
            }
            else
            {
                NodeCh runner = head;
                while (runner.next != null)
                {
                    runner = runner.next;
                }
                runner.next = n;
            }
        }

        public void ShowList()
        {
            if(head == null)
            {
                Console.WriteLine("No list to return, add some values");
            } else {
                NodeCh runner = head;
                while (runner.next != null)
                {
                    Console.Write(runner.val);
                    if(runner.child != null)
                    {
                        Console.Write(" ((");
                        NodeCh runnerCh = runner.child;
                        while(runnerCh.next != null)
                        {
                            Console.Write($"{runnerCh.val} -> ");
                            runnerCh = runnerCh.next;
                        }
                        Console.Write($"{runnerCh.val}))");
                    }
                    Console.Write(" -> ");
                    runner = runner.next;
                }
                Console.Write($"{runner.val}");
                if(runner.child != null)
                {
                    Console.Write(" ((");
                    NodeCh runnerCh = runner.child;
                    while(runnerCh.next != null)
                    {
                        Console.Write($"{runnerCh.val} -> ");
                        runnerCh = runnerCh.next;
                    }
                    Console.Write($"{runnerCh.val}))");
                }
            }
        }

        public SLLCh FlattenChildren()
        {
                Console.WriteLine("Flatten");
                if(head == null) return null;

                NodeCh temp = head.next;
                NodeCh rnr = head;

                if(rnr.child != null)
                {
                    rnr.next = rnr.child;
                    while (rnr.next != null)
                    {
                        rnr = rnr.next;
                    }
                    if(rnr.next == null)
                    {
                        rnr.next = temp;
                        return this;
                    }
                }
                rnr = rnr.next;
                return this;
            }
    }
    }
}
