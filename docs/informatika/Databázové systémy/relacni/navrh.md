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
Integritní omezení jsou pravidla, která zajišťují správnost, přesnost a konzistenci dat v databázích. Jsou klíčová pro udržení integrity databáze a pro zajištění toho, že data jsou v souladu s očekávanými pravidly a vztahy.

- __Doménová integrita__: Hodnoty v každém sloupci tabulky spadají do specifikované domény, což je definováno datovým typem sloupce, povolenými hodnotami, rozsahy nebo dalšími omezeními.

```sql
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Age INT CHECK (Age >= 18 AND Age <= 65)
);
```

- __Entitní integrita__: Každá tabulka má primární klíč, a že tento klíč je jedinečný a ne-NULL. Primární klíč identifikuje každý řádek v tabulce jednoznačně.

```sql
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    StudentName VARCHAR(100) NOT NULL
);
```

- __Referenční integrita__: Vztahy mezi tabulkami jsou zachovány správně. To znamená, že cizí klíče musí odkazovat na existující hodnoty v referenčních tabulkách, a že se správně aktualizují nebo mažou při změně či smazání referenčních záznamů.

```sql
CREATE TABLE Courses (
    CourseID INT PRIMARY KEY,
    CourseName VARCHAR(100) NOT NULL
);

CREATE TABLE Enrollments (
    EnrollmentID INT PRIMARY KEY,
    StudentID INT,
    CourseID INT,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);
```