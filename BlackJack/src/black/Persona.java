package black;

public class Persona {
	 // Variabili di istanza private
    private String nome;
    private int età;

    // Costruttore
    public Persona(String nome, int età) {
        this.nome = nome;
        this.età = età;
    }

    // Metodo getter per il nome
    public String getNome() {
        return nome;
    }

    // Metodo setter per il nome
    public void setNome(String nome) {
        this.nome = nome;
    }

    // Metodo getter per l'età
    public int getEtà() {
        return età;
    }

    // Metodo setter per l'età
    public void setEtà(int età) {
        // Esempio di controllo sui dati
        if (età > 0) {
            this.età = età;
        } else {
            System.out.println("Età non valida");
        }
    }
}
