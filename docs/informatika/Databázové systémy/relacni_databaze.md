# Relační databáze

## Návrh relačních databází
Návrh relační databáze je proces, ve kterém se plánuje, jakým způsobem budou data uložena, organizována a propojena v relační databázové systému. Správný návrh databáze je klíčový pro efektivní a spolehlivé ukládání a manipulaci s daty.

### Konceptuální schéma databáze
Konceptuální schéma databáze je model, který zobrazuje strukturu dat, jejich vlastnosti a vztahy mezi nimi. Je to vyšší úroveň abstrakce v návrhu databáze, která se zaměřuje na porozumění datovým požadavkům a jejich organizaci bez ohledu na fyzickou implementaci. Tento model je často prezentován pomocí ER diagramu (Entity-Relationship diagram).

**Konceptuální model** určuje koncepty a vazby mezi nimi bez nutnosti vázat se na konkrétní [[Databázové systémy|databázový systém]].

K zakreslení konceptuálního modelu se používají [[ER Diagram|ER diagramy]] nebo [[Relační datový model|relační schéma]].

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

### Relační model
Relační model databází je založen na konceptu relací, které představují tabulky s daty. Každá relace má sadu sloupců a řádků. Sloupecy definují atributy dat, zatímco řádky představují jednotlivé záznamy.

**ER Diagram** slouží k zakreslení [[Konceptuální model|konceptuálního modelu]].

>[!example] Příklad ER Modelu
>
>![[673px-ER_Diagram_MMORPG.png]]

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

**Návrh relačního modelu** je proces, který z konceptuálního schématu vytvoří [[Relační datový model|relační schéma]].

>[!tip] Proces návrhu
>1. Přizpůsobit konceptuální schéma
>2. Transformovat konceptuální schéma na relační schéma
>3. Normalizovat relační schéma
>4. Validovat relační schéma vůči požadovaným transakcím
>5. Konzultovat, zda odpovídá zadání

### Přístup Bottom-up
Cílem **bottom-up přístupu** je seskupování atributů do relací (sloupců do tabulek) tak, aby byly informace uloženy na "nejlepším možném místě".

>[!example] Bottom-up přístup
>![[Capyure_1.webp]]


#### Integritní omezení
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

**Rekurzivní vztah** je [[Relační datový model|relace]], ve které je cizí klíč zároveň primárním klíčem té samé entity.
**Ternární vztah** je vztah mezi třemi entitami.

## Aktualizační anomálie
Aktualizační anomálie jsou nežádoucí vedlejší efekty operací nad databází, které vedou k nekonzistenci nebo ztrátě dat. Vyskytují se v databázích, kde není správně navržen datový model, a to obvykle kvůli redundanci dat.

!!! success "Řešení"
    Aktualizační anomálie lze řešit pomocí procesu zvaného __normalizace__, který zahrnuje rozdělení tabulek do menších tabulek a definování vztahů mezi nimi tak, aby bylo dosaženo odstranění redundantních dat a zajištění konzistence. Při normalizaci se aplikují [normální formy](normalizace.md), které udávají pravidla a omezení pro správný návrh databáze.

__Vkládací anomálie__
Tyto anomálie nastávají, když je pro vložení nového záznamu do databáze nutné zadat redundantní data. Například v tabulce "Studenti" s atributy "Jméno", "Příjmení" a "Kurz" by bylo nutné pro studenta zapsaného do více kurzů vložit do tabulky více záznamů s opakujícími se hodnotami "Jméno" a "Příjmení".

__Modifikační anomálie__
Tyto anomálie nastávají, když je pro aktualizaci hodnoty v databázi nutné provést změny na více místech.

!!! example "Příklad"
    Pokud chceme změnit název kurzu v tabulce `StudentCourses`, musíme aktualizovat všechny záznamy, které tento kurz obsahují. Pokud některé z těchto záznamů neaktualizujeme správně, databáze se dostane do nekonzistentního stavu.

__Mazací anomálie__
Tyto anomálie nastávají, když smazání záznamu z databáze vede k nechtěnému smazání souvisejících dat.

## Normální formy
Normalizace databáze je postup dekompozce, kterým databázi přeorganizujeme tak, aby se redukovaly [[Datová anomálie|datové anomálie]].

>[!tldr]
>- Normalizace je postup, kterým změníme databázi tak, aby se redukovaly anomálie.

>[!tldr]
>- **1NF**: 
>	- Co hodnota to jedna věc
>	- každý řádek musí mít stejný počet sloupců
>- **2NF**: Každý sloupec musí být (alespoň nepřímo) závislý na celém klíči
>- **3NF**: Každý sloupec musí být přímo závislý na celém klíči

>[!error] První normální forma
>Relace je v první normální formě, pokud:
>- Každý atribut obsahuje jenom atomické hodnoty
>- Relace neobsahuje vícehodnotové atributy
>- Všechny $n$-tice mají stejný počet atributů

>[!example] Příklad
>Uvažujme relaci $Studenti(RC, jmeno, prijmeni, adresa, oceneni)$.
>- Adresa může být složena z vícero informací (ulice, PSČ, číslo domu, město, ...)
>- Ocenění může být vícehodnotové
>
>Aby byla relace v **1NF**, lze jí upravit takto:
>- $Studenti(RC, jmeno, prijmeni, ulice, mesto, psc)$
>- $Oceneni(RC, oceneni)$

>[!warning] Druhá normální forma
>Relace je v druhé normální formě, pokud:
>- Je v **první normální formě**
>- Každý neklíčový atribut je [[Funkční závislost|funkčně závislý]] na celém [[Klíče|klíči]]
>- Pro druhou normální formu postačí i [[Tranzitivnost|tranzitivní]] závislost

>[!example] Příklad
>Uvažujme relaci $Prihlasky(RC, jmeno, prijmeni, univerzita, adresa\_univerzity)$.
>- Adresa univerzity není funkčně závislá na klíči $\{RC, univerzita\}$
>- Jméno a příjmení také nejsou funkčně závislé na klíči
>
>Aby byla relace v **2NF**, lze jí upravit takto:
>- $Prihlasky(RC, univerzita)$
>- $Lide(RC, jmeno, prijmeni)$
>- $Univerzity(univerzita, adresa\_univerzity)$

>[!success] Třetí normální forma
>Relace je v třetí normální formě, pokud:
>- Je v **druhé normální formě**
>- Každý neklíčový atribut je závislý pouze na [[Klíče|klíči]]
>- Nesmí existovat [[Tranzitivnost|tranzitivní]] závislosti

>[!example] Příklad
>Uvažujme relaci $Prihlasky(RC, jmeno, prijmeni, univerzita, adresa\_univerzity)$.
>- Adresa univerzity není funkčně závislá na klíči $\{RC, univerzita\}$
>- Jméno a příjmení také nejsou funkčně závislé na klíči
>
>Aby byla relace v **2NF**, lze jí upravit takto:
>- $Prihlasky(RC, univerzita)$
>- $Lide(RC, jmeno, prijmeni)$
>- $Univerzity(univerzita, adresa\_univerzity)$

>[!tip] Boyce-Coddova normální forma
>Relace je v Boyce-Coddově normální formě, pokud
>- Je v **třetí normální formě**
>- Pravidla **třetí normální formy** platí pro všechny kandidátní klíče

Normální formy jsou pravidla, podle kterých určujeme, zda je databáze normalizovaná nebo ne. Pokud relace nesplňují normální formu, rozloží se na menší relace, které už pravidla splňují.

### První normální forma
Cílem první normální formy je eliminovat opakující se skupiny a vícenásobné hodnoty v jednom sloupci.

Pro splnění první normální formy je třeba dodržet následující podmínky:

- Každý atribut (sloupec) obsahuje jenom atomické (dále nedělitelné) hodnoty.
- Všechny záznamy (řádky) mají stejný počet atributů (sloupců).
- Každý záznam (řádek) je jedinečný.

!!! example "Příklad"
    Uvažujme relaci $\text{Studenti}(RC, jmeno, prijmeni, adresa, oceneni)$.

    - Adresa může být složena z vícero informací (ulice, PSČ, číslo domu, město, ...)
    - Ocenění může být vícehodnotové

    Aby byla relace v **1NF**, lze jí upravit takto:

    - $Studenti(RC, jmeno, prijmeni, ulice, mesto, psc)$
    - $Oceneni(RC, oceneni)$

### Druhá normální forma
Cílem druhé normální formy je odstranit částečné závislosti na složeném primárním klíči.

Pro splnění druhé normální formy je třeba dodržet následující podmínky:

- Je v **první normální formě**
- Všechny neklíčové atributy (sloupce) musí být plně závislé na primárním klíči.

!!! example "Příklad"
    Uvažujme relaci $Prihlasky(RC, jmeno, prijmeni, univerzita, adresa\_univerzity)$.
    
    - Adresa univerzity není funkčně závislá na klíči $\{RC, univerzita\}$
    - Jméno a příjmení také nejsou funkčně závislé na klíči

    Aby byla relace v **2NF**, lze jí upravit takto:
    
    - $Prihlasky(RC, univerzita)$
    - $Lide(RC, jmeno, prijmeni)$
    - $Univerzity(univerzita, adresa\_univerzity)$

### Třetí normální forma
Třetí normální forma si klade za cíl odstranit tranzitivní (přechodné) závislosti. 

Pro splnění třetí normální formy je třeba dodržet následující podmínky:

- Je v **druhé normální formě**
- Všechny neklíčové atributy musí být nezávislé na jiných neklíčových atributech (žádné tranzitivní závislosti).
- Nesmí existovat přechodné závislosti



Normální formy jsou pravidla, podle kterých určujeme, zda je databáze normalizovaná nebo ne.
Pokud relace nesplňují normální formu, [[Dekompozice|dekomponují]] se na menší relace, které už pravidlo splňují.

## Indexy
**Indexování** je mechanismus pro zvýšení výkonnosti databáze. Obsahuje klíč vytvořený z jednoho či více [[Relační datový model|atributů tabulky]] a ukazatel na místo, kde jsou uložena data pro danej klíče.

Když se má vyhledat nějaký záznam (řádek), neprohledává se sekvečně tabulka, ale prohledává se index, který vrátí konkrétní místo na disku.

>[!example] Vytvoření indexu
>```sql
>CREATE [UNIQUE] [NONCLUSTERED] INDEX nazev_indexu
>ON tabulka(atribut | seznam_atributu)
>```

>[!example] Smazání indexu
>```sql
>DROP INDEX nazev_indexu
>```

>[!example] Vynucení použití indexu
>```sql
>SELECT *
>FROM tabulka WITH INDEX (nazev_indexu)
>```

>[!faq] Jaké datové struktury používají indexy?
> Indexy používají [[AVL Stromy|vyvážené stromové struktury]], nebo [[Hashovací funkce|hashovací funkce]].

>[!fail] Nevýhody indexování
>Indexování vyžaduje
>- Další místo na disku
>- Režii při vytváření indexů
>- Údržbu - když se změní data, musí se změnit i index

- Při indexování je potřeba vybalancovat rychlost dotazů a cenu aktualizací indexů.
- Chybějící indexy a přeindexovanost mohou vést k horšímu výkonnu

### Úroveň tabulky (databáze)
- Jestli má smysl indexovat je otázka, kterou je potřeba zodpovědět pro každou tabulku zvlášť.

|Čtení|Zápis|Vhodný index|
|:--:|:--:|:--|
|Málo|Málo|Otázka, zda má vůbec smysl...|
|Málo|Hodně|Málo indexů a nad méně atributy|
|Hodně|Málo|Indexy nad více atributy|
|Hodně|Hodně|Záleží...|

### Úroveň dotazu
- Vhodné vytvořit indexy pro atributy, které se často vyskytují v podmínkách a při spojování tabulek

### Úroveň atributu
- Většina [[Databázové systémy|databázových systémů]] vytváří automaticky index nad primárním klíčem
- V indexu je dobré mít jako první atributy používané v podmínkách, až poté atributy s co nejvíce hodnotami
- Nemá smysl indexovat atributy, které mají málo různých hodnot

## Typy indexů
|Typ|Vysvětlivka|
|--:|:--|
|Úzký|Definovaný pouze nad jedním atributem|
|Široký|Definovaný nad více atributy|
|Hustý|Odkazuje na konkrétní záznam|
|Řídký|Odkazuje na stránku, na které je záznam|
|Primární|Obsahuje primární klíč|
|Sekundární|Neobsahuje primární klíč|
|Jedinečný|Definovaný nad `UNIQUE` atributem|

**Klastrovaný index** (Clustered Index) je setřízen fyzicky na disku podle nějakého [[Relační datový model|atributu]].
- Při zápisu dat je potřeba znovu setřídit
- Pro tabulku může být definován jenom jeden

**Neklastrovaný index** (Unclustered Index) netřídí data tabulky, ale akorát vytváří ukazatele na umístění dat
- Pro jednu tabulku jich může být vytvořeno víc

**Pohled** je virtuální [[Relační datový model|relace]] (tabulka), která je přizpůsobená specifickým potřebám uživatele. Používá se přimárně pro skrývání části dat, pro lepší řízení práv a modulárnímu přístupu k databázi.

>[!example] Vytvoření pohledu
>```sql
>CREATE VIEW pohled 
>AS ( vnoreny_dotaz )
>```

>[!example] Smazání pohledu
>Při mazání pohledu **nedojde** ke smazání dat.
>```sql
>DROP VIEW pohled 
>```

- K pohledům se z hlediska [[SQL|dotazování]] přistupuje jako ke klasickým tabulkám.

 ## Modifikace dat v pohledu
- Protože jsou pohledy akorát virtuální relací, není vždy modifikace dat možná.
- Lze definovat [[Trigger]], který určí, jak mají [[Data Manipulation Language|modifikace]] probíhat
- Lze také modifikace omezit

>[!example] Vytvoření pohledu
>Možnost `WITH CHECK OPTION` zajistí, že bude vyhozena výjimka pokaždé, když [[Data Manipulation Language|modifikace]] pohledu nebude v pohledu viditelná.
>```sql
CREATE VIEW ITPrijati2 AS  
SELECT sId, uJmeno  
FROM Prihlasky  
WHERE obor = 'IT' AND rozhodnuti = 'A'‚  
WITH CHECK OPTION;
>```

## Transakce
**Transakce** označuje souvislou [[Matematika 1/Posloupnosti/Posloupnosti|posloupnost]] [[SQL|příkazů]], která převádí databázi z jednoho konzistentního stavu do druhého.

>[!tldr]
>- Transakce řídí přechod z jednoho konzistentního stavu do druhého
>- Zapouzdřují posloupnost příkazů do jednoho bloku
>- Umožňují nezávislý přístup více uživatelům naráz
>- Vytvářejí odolnost vůči poruchám

- Při zapnutém režimu `auto_commit` je každý [[SQL|příkaz]] brán jako samostatná transakce
- Při vypnutém režimu `auto_commit` se musí 
	- manuálně začít transakce (např. `BEGIN TRANSACTION`)
	- manuálně ukončit transakce (např. `COMMIT` nebo `ROLLBACK`)

>[!tip] Atomicita
>- Transakce se tváří jako jeden celek a takto tak pracuje.
>- Buďto se provede celá, a nebo vůbec.

>[!tip] Konzistence
>- Transakce převádí [[Databázové systémy|databázový systém]] z jednoho konzistentního stavu do druhého

>[!tip] Izolovanost
>- Každá transakce je izolovaná a nemůže pracovat s dílčimi efekty jiných transakcí.

>[!tip] Trvanlivost
>Úspěšná transakce je uložena do databáze

- Současné vykonávání transakcí nesmí zapříčinit selhání programu
- Lze zajistit [[Mutex|zámky]], ale transakce musí být rychlé, aby nezdržovaly.
- Lze nastavit různé úrovně izolovanosti transakce, čímž lze ovlivnit, jak moc zajistí konzistenci.

## Triggers a Procedury
**Trigger** je [[Procedury|procedura]] uložená na [[Databázové systémy|databázovém serveru]], která je automaticky spouštěna po nějaké události na základě spouštěcí podmínky.

>[!tldr]
> - Trigger je procedura, která se automaticky pouští po události v [[Databázové systémy|databázi]]
> - Používá se na komplexnější [[Integritní omezení|integritní omezení]] či přesunutí části logiky do prostoru databáze.
> - Syntaxe je hodně závislá na použitém [[Databázové systémy|DBMS]]

```SQL
CREATE TRIGGER jmeno
BEFORE | AFTER | INSTEAD OF udalost ON tabulka
[REFERENCING <referencni_promenne> AS <jmena>]
[FOR EACH ROW | FOR EACH STATEMENT]
WHEN (...)
[AS]
akce
```

### Spouštění triggeru
- `BEFORE` trigger pracuje s databází **před** provedení dotazu
	- Výhodné pro validace vstupních dat
	- Doplňování dat
- `AFTER` trigger pracuje s databází **po** provedení dotazu,
	- Výhodné pro aplikační logiku

### Granularita
- **Trigger na úrovni příkazu** (`FOR EACH STATEMENT`) je aktivován jednou pro celý příkaz
- **Trigger na úrovni řádku** (`FOR EACH ROW`) je aktivován pro každý modifikovaný řádek

>[!faq] Co když bude množina modifikovaných řádků prázdná?
>V tom případě se **trigger na úrovni příkazu** provede jednou, zatímco **trigger na úrovni řádku** se neprovede ani jednou. 
>
>*Makes sense.*

## Referenční proměnné
**Referenční proměnné** jsou takové proměnné, které odkazují na modifikované [[Databázový objekt|databázové objekty]] (řádky, tabulky, ...)

|Akce|Trigger na úrovni příkazu|Trigger na úrovni řádku|
|:--:|:--|:--|
|`INSERT`|`new_table`|`new_row, new_table`|
|`DELETE`|`old_table`|`old_row, old_table`|
|`UPDATE`|`new_table, old_table`|`new_row, new_table, old_row, old_table`|

>[!example] Příklad ON DELETE CASCADE referenční integrity pomocí triggeru na úrovni řádku
>```sql
>CREATE TRIGGER tr_cascade1
>AFTER DELETE ON Studenti
>REFERENCING old_row AS 0
>FOR EACH ROW
>	DELETE FROM Prihlasky WHERE Prihlasky.sID = 0.sID

>[!example] Příklad ON DELETE CASCADE referenční integrity pomocí triggeru na úrovni příkazu
>```sql
>CREATE TRIGGER tr_cascade2
>AFTER DELETE ON Studenti
>REFERENCING old_row AS 0
>FOR EACH STATEMENT
>	DELETE FROM Prihlasky WHERE Prihlasky.sID IN (SELECT sId FROM OT)
>```

**Uložená procedura** je [[Procedury|podprogram]], který je uložený a spouštěný v rámci [[Databázové systémy|databázového serveru]].

>[!tldr]
>- Uložená procedura je blok kódu, který je uložen a vykonáván na [[Databázové systémy|databázového serveru]]
>- Používají se pro 
>	- validaci dat
>	- zapouzření často používaných příkazů
>	- Přesun programové logiky do DB

>[!example] Vytvoření procedury
>```sql
>CREATE [OR REPLACE] PROCEDURE jmeno
>[
>	(parametr1 [typ] datovy_typ),
>	(parametr2 [typ] datovy_typ),
>	...
>]
>[IS|AS deklarace_promennych]
>BEGIN
>	...
>	[EXCEPTION vyjimky]
>END;
>```

>[!example] Volání procedury
>```sql
>EXECUTE jmeno_procedury(parametr1, parametr2, ...);
>```

>[!example] Vymazání procedury
>```sql
>DROP PROCEDURE jmeno_procedury;
>```

>[!faq] Musí to být nutně [[Procedury|procedura]]?
>Samozřejmě, že ne. Může se také jednat o [[Funkce|funkci.]]

## SQL
**Structured Query Language** (zkrat. SQL) je deklarativní, [[Case sensitivity|case insensitive]] jazyk pro přístup a řízení [[Relační datový model|relačních databází]].

- Selekce: Získání vybraných sloupců a řádků z tabulky.
- Projekce: Vybrání pouze určitých sloupců z tabulky.
- Agregační funkce: Výpočet souhrnných statistik z dat v tabulce (např. SUM, COUNT, AVG, MIN, MAX).
- Množinové operace: Kombinace výsledků z více dotazů (např. UNION, INTERSECT, EXCEPT).
- Typy spojení: Spojování dat z více tabulek na základě společných sloupců (např. INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN).
- Vnořené dotazy: Použití jednoho dotazu uvnitř jiného dotazu pro složitější dotazování.

**Data Control Language** definuje, jak k danému [[Databázový objekt|databázovému objektu]] mohou přistupovat další uživatelé.

>[!example] Přidávání práv
>- `WITH GRANT OPTION` umožní uživatelům, aby přidávali stejná či nižší práva dalším uživatelům
>- `PUBLIC` zajistí, že práva dostanou všichni nynější i budoucí uživatelé
>```sql
GRANT (seznam_privilegii | ALL PRIVILEGES)
ON nazev_db_objektu
TO (seznam_autorizacnich_identifikatoru | PUBLIC)
[WITH GRANT OPTION]
>```

>[!example] Odebrání práv
>- `GRANT OPTION` - Právo nebude odebráno, pokud mu bylo přiděleno ještě někým jiným
>- `CASCADE` - Odebrat práva všem, i těm, co je získali pomocí `WITH GRANT OPTION`
>- `RESTRICT` - Neumožní odebrat práva, pokud by `CASCADE` odebíral další práva
>```sql
>REVOKE [GRANT OPTION FOR] (seznam_privilegii | ALL PRIVILEGES)
>ON nazev_db_objektu
>FROM (seznam_autorizacnich_identifikatoru | PUBLIC)
>[RESTRICT | CASCADE]
>```

**Data Defininition Language** je [[Množiny|množina]] [[SQL|SQL příkazů]], které slouží k definování, změně a mazání [[Databázový objekt|databázových objektů]].

Při vytvoření [[Databázový objekt|databázového objektu]] se stává aktuální uživatel jeho vlastníkem.
```sql
CREATE TABLE nazev -- Vytvoří tabulku "nazev"
ALTER TABLE nazev  -- Pozmění tabulku "nazev"
DROP TABLE nazev   -- Kompletně vymaže tabulku "nazev"
TRUNK TABLE nazev  -- Vymaže data tabulky "nazev"
RENAME TABLE nazev -- Přejmenuje tabulku nazev
```

>[!example] Vytvoření tabulky `TEACHERS`
>```sql
>CREATE TABLE Teachers  
>(  
>	id_teacher Integer NOT NULL,  
>	id_office Integer NOT NULL,  
>	email Nvarchar(30) NOT NULL UNIQUE,  
>	name Nvarchar(30) NOT NULL,  
>	surname Nvarchar(30) NOT NULL,  
>	title_before Nvarchar(10) NULL,  
>	title_after Nvarchar(10) NULL,  
>	dob Datetime NOT NULL,  
>	type Integer NOT NULL CHECK (type > 0 AND type < 6)  
>	PRIMARY KEY (id_teacher),  
>	CONSTRAINT fk_TeachOffice FOREIGN KEY (id_office) -- pojmenování IO  
>	REFERENCES Offices(id_office),  
>	CONSTRAINT uc_NameSurnameDob UNIQUE (name,surname,dob) --přes více sloupců  
>);
>```

## Integritní omezení sloupců

|Omezení|Vysvětlivka|
|--:|:--|
|`NOT NULL`|Žádná hodnota v daném sloupci nesmí být `NULL`|
|`UNIQUE`|Všechny hodnoty v sloupci musí být unikátní|
|`PRIMARY KEY`|Sloupec je primárním klíčem|
|`REFERENCES`|Sloupec je cizím klíčem, definuje referenční integritu vzhledem k jiné tabulce|
|`CHECK`|IO zadané logickým výrazem|
|`DEFAULT`|Slouží k určení implicitní hodnoty sloupce (`NULL` nebo hodnota)|

**Data Manipulation Language** je [[Množiny|množina]] [[SQL|SQL příkazů]], které slouží k aktualizování dat z [[Databázový objekt|databázových objektů]].

```sql
-- Vloží do tabulky název n-tici v závorce za klíčovým slovem VALUES
INSERT INTO nazev 
VALUES (...) 

-- Změní všechny hodnoty v sloupci "sloupec" na "hodnota" podle výběrové podmínky
UPDATE nazev 
SET (sloupec = 'hodnota')
WHERE (...)

-- Smaže řádky tabulky podle výběrové podmínky
DELETE FROM nazev
WHERE (...)
```

**Data Query Language** je je [[Množiny|množina]] [[SQL|SQL příkazů]], které slouží k vybírání dat z [[Databázový objekt|databázových objektů]].