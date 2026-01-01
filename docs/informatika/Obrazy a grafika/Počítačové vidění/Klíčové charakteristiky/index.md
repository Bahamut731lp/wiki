# Klíčové charakteristiky
Klíčové charakteristiky (angl. __features__) jsou výstupem zpracování obrazu, které popisují oblasti zájmu v daném snímku. Klíčové charakteristiky se následně používají k vytvoření výsledku zpracování, protože obraz již není popsán maticí bodů, ale vektorem příznaků, které již samy o sobě nesou informaci.

```mermaid
flowchart LR
    A[Obraz] --> B[Předzpracování]
    B --> C[Zpracování]
    C --> D[Klíčové charakteristiky]
```