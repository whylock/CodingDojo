using System;
using System.Net.Mime;
using System.Security.Cryptography;

namespace DLL {
    class Program {
        static void Main(string[] args) {
            DLL test = new DLL();
            test.addBack(new DNode(10));
            test.addBack(new DNode(16));
            test.addBack(new DNode(12));
            test.addBack(new DNode(23));
            test.addBack(new DNode(13));
            test.addFront(new DNode(9));
            test.Reverse(test.head);
            test.ShowList();
        }
        //Doubly Linked Lists
        //DLL's have nodes with a next and previous pointer
        public class DNode {
            public int val { get; set; }
            public DNode next { get; set; }
            public DNode prev { get; set; }
            public DNode(int value) {
                val = value;
                next = null;
                prev = null;
            }
        }

        //And a DLL keeps track of both a head and a tail pointer
        public class DLL {
            public DNode head { get; set; }
            public DNode tail { get; set; }
            public DLL() {
                head = null;
                tail = null;
            }

public void addBack(DNode node)
    {
        if(head == null)
        {
            head = node;
            tail = node;
        }
        else
        {
            tail.next = node;
            node.prev = tail;
            tail=node;
        }
    }
    public void addFront(DNode node)
    {
        if(head == null)
        {
            head = node;
            tail = node;
        }
        else
        {
            node.next = head;
            head.prev = node;
            head = node;
            Console.WriteLine($"Next {head.next.val}");
            Console.WriteLine($"Prev {head.prev}");
        }
    }

    //Remove a given value from the list, or return false if not found
    public bool removeVal(int n)
    {
        DNode runner = head;
        while(runner.next.val != n && runner.next != tail)
        {
            runner = runner.next;
        }
        if(runner.next.val == n)
        {
            runner.next = runner.next.next;
            runner.next.prev = runner;
            Console.WriteLine("Node Removed");
            return true;
        }
        else
        {
            Console.WriteLine("Node does not exist in this DLL");
            return false;
        }

    }

    //Insert a new node after a given value, or return false if the value was not found
    public bool addAfter(int n, DNode addNode)
    {
        DNode runner = head;
        while(runner.val != n && runner != tail)
        {
            runner = runner.next;
        }
        if(runner.val == n)
        {
            addNode.next = runner.next;
            runner.next = addNode;
            addNode.prev = runner;
            addNode.next.prev = addNode;
            Console.WriteLine("Node added");
            return true;
        }
        else
        {
            Console.WriteLine("Node to add after does not exist in this DLL");
            return false;
        }

    }

    public void Reverse(DNode head)
    {
        DNode temp = head;
        head = tail;
        tail = temp;
        DNode start = head;
        while(start != null)
        {
            temp = start.next;
            start.next = start.prev;
            start.prev = temp;
            start = start.next;
        }
    }
    public void ShowList()
    {
        if(head == null)
        {
            Console.WriteLine("No list to return, add some values");
        } else {
            DNode runner = head;
            while (runner.next != null)
            {
                Console.Write($"{runner.val} -> ");
                runner = runner.next;
            }
            Console.Write($"{tail.val}");
        }
    }
        }
    }
}