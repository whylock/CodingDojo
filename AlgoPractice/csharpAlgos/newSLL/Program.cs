using System;

namespace newSLL
{
    class Program
    {
        static void Main(string[] args)
        {
            SLL blah = new SLL();
            blah.AddNode(new Node(6));
            blah.AddNode(new Node(5));
            blah.AddNode(new Node(4));
            blah.AddNode(new Node(48));
            blah.AddNode(new Node(57));
            blah.AddNode(new Node(99));
            blah.AddNode(new Node(23));
            blah.AddNode(new Node(35));
            blah.AddNode(new Node(87));
            blah.AddNode(new Node(12));
            blah.AddNode(new Node(32));
            blah.AddNode(new Node(10));
            blah.createLoop();
            Console.WriteLine(blah.isLooping(blah.head));
        }
            public class Node
        {
            //Our nodes attributes
            public int val { get; set; }
            public Node next { get; set; }


            //Creates an instance of a Node with a set value and a .next pointing to null
            public Node(int val)
            {
                this.val = val;
                this.next = null;
                
            }
        }
    public class SLL
    {

        //Our only attribute in a SLL is the existence of a head Node
        public Node head { get; set; }

        public SLL()
        {
            head = null;
        }

        public void AddNode(Node n)
        {
            if (head == null)
            {
                head = n;
            }
            else
            {
                Node runner = head;
                while (runner.next != null)
                {
                    runner = runner.next;
                }
                runner.next = n;
            }
        }

        public void createLoop()
            {
                Node runner = this.head;
                int count = 0;
                Node loop = this.head;
                while (runner.next != null)
                {
                    count++;
                    if (count == 3)
                    {
                        loop = runner;
                    }
                    runner = runner.next;
                }
                runner.next = loop;
            }

        public Boolean isLooping(Node startNode)
        {
                Node prev = null;
                Node current = startNode;
                Node nxt = null;
                if (current.next == null)
                {
                    return false;
                }
                while(current != null)
                {
                    nxt = current.next;
                    current.next = prev;
                    prev = current;
                    current = nxt;
                }
                return (prev == startNode);
        }


        // public void reverse(SLL linkedList)
        // {
        //     linkedList.ShowList();
        //     Node prev = null;
        //     Node current = linkedList.head;
        //     Node next = null;
        //     while(current != null)
        //     {
        //         next = current.next; // saves next
        //         current.next = prev; // reverse

        //         prev = current; //adv 
        //         current = next; // adv
        //     }
        //     return linkedList;
        // }



        
        public void ShowList()
        {
            if (head == null)
            {
                Console.WriteLine("No list to return, add some values");
            }
            else
            {
                Node runner = head;
                while (runner.next != null)
                {
                    Console.Write($"{runner.val} -> ");
                    runner = runner.next;
                }
                Console.Write($"{runner.val}");
            }
        }
    }
}
}
