# Návrh relačních databází
Návrh relační databáze je proces, ve kterém se plánuje, jakým způsobem budou data uložena, organizována a propojena v relační databázové systému. Správný návrh databáze je klíčový pro efektivní a spolehlivé ukládání a manipulaci s daty.

## Konceptuální schéma databáze
Konceptuální schéma databáze je model, který zobrazuje strukturu dat, jejich vlastnosti a vztahy mezi nimi. Je to vyšší úroveň abstrakce v návrhu databáze, která se zaměřuje na porozumění datovým požadavkům a jejich organizaci bez ohledu na fyzickou implementaci. Tento model je často prezentován pomocí ER diagramu (Entity-Relationship diagram).

Mezi prvky konceptuálního schématu patří:

- __Entity__, což jsou objekty, které mají být uloženy v databázi.
- __Atributy__, což jsou vlastnosti jednotlivých objektů.
- __Vztahy__, které určují vazby a spojení mezi jednotlivými objekty.
- __Primární klíč__, který jednoznačně identifikuje objekt.
- __Cizí klíč__, který odkazuje na primární klíč jiného objektu.

???- example "Ukázka ER Diagramu"
    ```mermaid
    erDiagram
        CUSTOMER }|..|{ DELIVERY-ADDRESS : has
        CUSTOMER ||--o{ ORDER : places
        CUSTOMER ||--o{ INVOICE : "liable for"
        DELIVERY-ADDRESS ||--o{ ORDER : receives
        INVOICE ||--|{ ORDER : covers
        ORDER ||--|{ ORDER-ITEM : includes
        PRODUCT-CATEGORY ||--|{ PRODUCT : contains
        PRODUCT ||--o{ ORDER-ITEM : "ordered in"
    ```

### Vztahy mezi entitami

__Parcialita__, neboli _participační omezení_, určuje, zda se musí entita vztahu účastnit či nikoliv. Jinak řečeno, jestli je účast povinná nebo volitelná.

!!! example "Příklad parciality"
    ```mermaid
    erDiagram
        ZAMESTANEC ||--o| PROJEKT : "má"
    ```
    Zaměstnanec má 0 nebo 1 projekt, a projekt musí mít jednoho zaměstnance.

__Kardinalita__ určuje počet entit, které se mohou vztahu účastnit.

- Jeden k jednomu (`1:1`): Každý záznam jedné entity je spojen s maximálně jedním záznamem druhé entity.
- Jeden k mnoha (`1:N`): Každý záznam jedné entity může být spojen s více záznamy druhé entity.
- Mnoho k mnoha (`M:N`): Každý záznam jedné entity může být spojen s více záznamy druhé entity a naopak.

## Relační model
Relační model databází je založen na konceptu relací, které představují tabulky s daty. Každá relace má sadu sloupců a řádků. Sloupecy definují atributy dat, zatímco řádky představují jednotlivé záznamy.

|Konstrukt|Vysvětlitka|
|:--|:--|
|Tabulka|Tabulka je soubor dat organizovaný do sloupců a řádků. Sloupec definuje atribut (vlastnost) dat a řádek představuje jednotlivý záznam.|
|Záznam|Záznam je řádek tabulky, který obsahuje atributy.|
|Atribut|Atribut je charakteristika, která popisuje vlastnosti entity v relační databázi. Je reprezentován sloupcem v tabulce.|
|Doména|Doména je množina povolených hodnot pro daný atribut.|
|Klíč|Klíč je sloupec nebo sada sloupců, které jednoznačně identifikují každý řádek v tabulce.|
|Primární klíč| Sloupec nebo sada sloupců, které jednoznačně identifikují každý řádek v tabulce. V tabulce může být pouze jeden primární klíč.|
|Cizí klíč|Sloupec nebo sada sloupců v jedné tabulce, které odkazují na primární klíč v jiné tabulce. Cizí klíče se používají k vytvoření vztahů mezi tabulkami.|
|Hodnota|Hodnota je konkrétní instance atributu. Jedná se o datový prvek v buňce tabulky.|

### Integritní omezení

- Omezení primárního klíče: Každý řádek v tabulce musí mít jedinečnou hodnotu primárního klíče.
- Omezení cizího klíče: Hodnota cizího klíče v jedné tabulce musí odpovídat hodnotě primárního klíče v jiné tabulce, na kterou odkazuje.
- Omezení entity: Žádný atribut s definovanou doménou nesmí obsahovat prázdnou hodnotu.
- Omezení referenční integrity: Smazání nebo aktualizace záznamu v tabulce nesmí vést k narušení referenční integrity s jinými tabulkami.