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

#### Parcialita
__Parcialita__, neboli _participační omezení_, určuje, zda se musí entita vztahu účastnit či nikoliv. Jinak řečeno, jestli je účast povinná nebo volitelná.

!!! example "Příklad parciality"
    ```mermaid
    erDiagram
        ZAMESTANEC ||--o| PROJEKT : "má"
    ```
    Zaměstnanec má 0 nebo 1 projekt, a projekt musí mít jednoho zaměstnance.

#### Kardinalita
__Kardinalita__ určuje počet entit, které se mohou vztahu účastnit.

!!! example "Příklad parciality"
    ```mermaid
    erDiagram
        ZAMESTANEC ||--o| PROJEKT : "má"
    ```
    Zaměstnanec má 0 nebo 1 projekt, a projekt musí mít jednoho zaměstnance.

!!! example "Symbolika vztahů mezi entitami"
    ![ER Notace](../../images/er_notace.png)