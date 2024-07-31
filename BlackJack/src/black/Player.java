package black;

import java.util.ArrayList;

public class Player {

	 private ArrayList<Card> hand;
	    private String name;

	    public Player(String name) {
	        this.name = name;
	        this.hand = new ArrayList<>();
	    }

	    public void addCard(Card card) {
	        hand.add(card);
	    }

	    public int getHandValue() {
	        int value = 0;
	        int numAces = 0;
	        for (Card card : hand) {
	            value += card.getValue();
	            if (card.getRank().equals("Ace")) {
	                numAces++;
	            }
	        }
	        while (value > 21 && numAces > 0) {
	            value -= 10;
	            numAces--;
	        }
	        return value;
	    }

	    public boolean isBust() {
	        return getHandValue() > 21;
	    }

	    public void showHand() {
	        for (Card card : hand) {
	            System.out.println(card);
	        }
	        System.out.println("Hand value: " + getHandValue());
	    }

	    public String getName() {
	        return name;
	    }
}
