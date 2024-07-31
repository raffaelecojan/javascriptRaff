package black;

import java.util.Scanner;

public class BlackjackGame {

	 private Deck deck;
	    private Player player;
	    private Player dealer;

	    public BlackjackGame() {
	        deck = new Deck();
	        deck.shuffle();
	        player = new Player("Player");
	        dealer = new Player("Dealer");
	    }

	    public void play() {
	        // Initial deal
	        player.addCard(deck.dealCard());
	        player.addCard(deck.dealCard());
	        dealer.addCard(deck.dealCard());
	        dealer.addCard(deck.dealCard());

	        // Player's turn
	        System.out.println("Your hand:");
	        player.showHand();
	        Scanner scanner = new Scanner(System.in);
	        while (true) {
	            System.out.println("Do you want to (1) Hit or (2) Stand?");
	            int choice = scanner.nextInt();
	            if (choice == 1) {
	                player.addCard(deck.dealCard());
	                player.showHand();
	                if (player.isBust()) {
	                    System.out.println("You are bust! Dealer wins.");
	                    return;
	                }
	            } else {
	                break;
	            }
	        }

	        // Dealer's turn
	        System.out.println("Dealer's hand:");
	        dealer.showHand();
	        while (dealer.getHandValue() < 17) {
	            dealer.addCard(deck.dealCard());
	            dealer.showHand();
	        }
	        if (dealer.isBust()) {
	            System.out.println("Dealer is bust! You win.");
	            return;
	        }

	        // Determine the winner
	        if (player.getHandValue() > dealer.getHandValue()) {
	            System.out.println("You win!");
	        } else if (player.getHandValue() < dealer.getHandValue()) {
	            System.out.println("Dealer wins.");
	        } else {
	            System.out.println("It's a tie!");
	        }
	    }

	    public static void main(String[] args) {
	        BlackjackGame game = new BlackjackGame();
	        game.play();
	    }
}
