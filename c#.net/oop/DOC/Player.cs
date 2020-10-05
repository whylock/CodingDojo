using System.Collections.Generic;
namespace DOC
{
    public class Player
    {
        public string Name;
        public List<Card> Hand = new List<Card>();

        public Card Draw(Deck Deck)
        {
            if(Deck)
            {
                Card newCard = Deck.Deal();
                Hand.Add(newCard);
                return newCard;
            }
        }

        public Card Discard(int card)
        {
            if(Hand.Count > card)
            {
            card discarded = Hand[card];
            Hand.RemoveAt(card);
            return discarded;
            }
            return null;
        }
    }
}