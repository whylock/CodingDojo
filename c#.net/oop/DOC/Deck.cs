namespace DOC
{
    public class Deck
    {
        public List<Card> cards = new List<Card>();
        public string[] suit = { "Hearts", "Diamonds", "Clubs", "Spades" };
        public string[] rank = {"Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"};
        public Deck()
        {
            Deck();
        }

        public void Deck()
        {
            cards = new List<Card>();
            foreach (string suit in suit)
            {
                int val = 0;
                foreach (string rank in rank)
                {
                    cards.Add(new Card(rank, suit, val++));
                }
            }
        }
        public Card Deal()
        {
            Card dealt = cards[cards.Count];
            cards.RemoveAt(cards.Count);
            return dealt;
        }
    }
}