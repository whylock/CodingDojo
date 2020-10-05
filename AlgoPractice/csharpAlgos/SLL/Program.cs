using System;

namespace SLL
{
    class Program
    {
        static void Main(string[] args)
        {
            SLL blah = new SLL();
            blah.AddNode(new Node(6));
            blah.AddNode(new Node(5));
            blah.AddNode(new Node(4));
            blah.AddNode(new Node(3));
            blah.reverse(blah);
            blah.ShowList();
        }
    }
}
