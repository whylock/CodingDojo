using System;

namespace tries
{
    class Program
    {
        static void Main(string[] args)
        {
            Trie Trie = new Trie();
            Trie.Insert("shawn");
        }

        //Base Trie setup
        public class TNode
        {
            public TNode[] children = new TNode[26];
            public bool isWord;

            public TNode()
            {
                isWord = false;
                for(int i = 0; i < 26; i++)
                {
                    children[i] = null;
                }
            }
        }
            public class Trie
            {
                //Trie setup
                public TNode root;

                public Trie()
                {
                    root = new TNode();
                }
                public void Insert(string word)
                {
                    TNode current = root;
                    for (int i = 0; i < word.Length;i++)
                    {
                        char character = word[i];
                        if(current.children[character-'a'] == null)
                        {
                            Console.WriteLine($"{character}, {character - 'a'}");
                            current.children[character-'a'] = new TNode();
                        }
                        current = current.children[character - 'a'];
                    }
                    Console.WriteLine(word);
                    current.isWord = true;
                }
            }
    }
}
