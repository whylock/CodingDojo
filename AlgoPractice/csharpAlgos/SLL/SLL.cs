using System;
namespace SLL
{
    public class Node
    {
        //Our nodes attributes
        public int val { get; set; }
        public Node next { get; set; }
        public Node prev { get; set; }

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
        Node head { get; set; }

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

        public void reverse(SLL linkedList)
        {
            linkedList.ShowList();
            Node prev = null;
            Node current = linkedList.head;
            Node next = null;
            while(current != null)
            {
                next = current.next; // saves next
                current.next = prev; // reverse

                prev = current; //adv 
                current = next; // adv
            }
            return linkedList;
        }
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