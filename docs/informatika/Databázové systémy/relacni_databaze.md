# Relační databáze

## Relační schéma

Relační model databáze je založen na konceptu **relací**, které představují tabulky s daty. Relační schéma je plán, který definuje strukturu tabulek – jaké atributy obsahují, jaké mají datové typy a jak jsou mezi sebou propojené.

!!! abstract "Základní pojmy relačního modelu"
    | Pojem | Význam |
    |:--|:--|
    | **Relace** (tabulka) | Množina dat organizovaná do sloupců a řádků. Matematicky: relace je podmnožina kartézského součinu domén. |
    | **Atribut** (sloupec) | Charakteristika popisující vlastnosti entity. Má název a datový typ. |
    | **$n$-tice** (řádek/záznam) | Jeden konkrétní záznam v tabulce – uspořádaná $n$-tice hodnot odpovídajících atributům. |
    | **Doména** | Množina povolených hodnot pro daný atribut. Např. doména `Vek` = $\{x \in \mathbb{N} \mid 0 \le x \le 120\}$. |
    | **Klíč** | Atribut nebo sada atributů, které jednoznačně identifikují každý řádek. |

!!! info "Schéma relace – zápis"
    Schéma relace zapisujeme jako $R(A_1, A_2, \dots, A_n)$, kde $R$ je název relace a $A_i$ jsou atributy. Příklad:

    $$Student(\underline{RČ}, jméno, příjmení, datum\_narození, email)$$

    Podtržený atribut označuje primární klíč.

### Klíče

| Typ klíče | Význam | Příklad |
|:--|:--|:--|
| **Superklíč** | Libovolná množina atributů, která jednoznačně identifikuje každý řádek. | $\{RČ\}$, $\{RČ, jméno\}$, $\{email\}$ |
| **Kandidátní klíč** | Minimální superklíč – nelze z něj odebrat žádný atribut bez ztráty jednoznačnosti. | $\{RČ\}$, $\{email\}$ |
| **Primární klíč** | Jeden vybraný kandidátní klíč. V tabulce může být pouze jeden. Označuje se podtržením. | $\underline{RČ}$ |
| **Cizí klíč** | Atribut(y) odkazující na primární klíč jiné (nebo stejné) tabulky. Slouží k vyjádření vztahů. | `student_RČ → Student(RČ)` |
| **Složený klíč** | Klíč tvořený více atributy – žádný z nich sám o sobě neidentifikuje řádek jednoznačně. | $\{student\_RČ, kurz\_ID\}$ u přihlášek |

## Vztahy mezi entitami

Při modelování vztahů mezi tabulkami řešíme dvě otázky: **kolik** entit se účastní vztahu (kardinalita) a **zda musí** se entita vztahu účastnit (parcialita).

### Kardinalita

Kardinalita určuje **maximální počet** entit na obou stranách vztahu:

| Typ | Popis | Příklad |
|:--|:--|:--|
| **1 : 1** | Jeden záznam entity A souvisí s maximálně jedním záznamem entity B a naopak. | Osoba ↔ Rodný list |
| **1 : N** | Jeden záznam A souvisí s více záznamy B, ale B souvisí s maximálně jedním A. | Zákazník → Objednávky |
| **M : N** | Jeden záznam A souvisí s více B a naopak. Vyžaduje **vazební tabulku**. | Student ↔ Kurz (přes Přihlášky) |

!!! info "Realizace vazby M : N"
    Vazba M : N se v relačním modelu realizuje **vazební (spojovací) tabulkou**, která obsahuje dva cizí klíče – jeden na každou stranu vazby. Tím se M : N rozloží na dvě vazby 1 : N.

### Parcialita

Parcialita (participační omezení) určuje, zda je účast entity ve vztahu **povinná** nebo **volitelná**:

- **Povinná účast** (`||`): Entita se musí vztahu účastnit. Každý záznam v tabulce A musí mít odpovídající záznam v tabulce B. V SQL: sloupec cizího klíče je `NOT NULL`.
- **Volitelná účast** (`|o`): Entita se vztahu účastnit může, ale nemusí. Sloupec cizího klíče může být `NULL`.

!!! example "Příklad parciality a kardinality v ER diagramu"
    ```mermaid
    erDiagram
        ZAMESTNANEC ||--o| PROJEKT : "má"
    ```
    Zaměstnanec má **0 nebo 1** projekt (volitelná, max. 1), a projekt **musí mít** právě jednoho zaměstnance (povinná, max. 1).

## Integritní omezení

Integritní omezení (IO) jsou pravidla, která zajišťují správnost, přesnost a konzistenci dat. Bez nich by databáze mohla obsahovat nesmyslná data – záporný věk, neexistující cizí klíče, nebo prázdné primární klíče.

### Doménová integrita

Každá hodnota v daném sloupci spadá do definované **domény** – tedy má správný datový typ, spadá do povoleného rozsahu a splňuje případná další omezení.

```sql
CREATE TABLE Zamestnanci (
    id INT PRIMARY KEY,
    jmeno VARCHAR(100) NOT NULL,
    vek INT CHECK (vek >= 18 AND vek <= 65),
    email VARCHAR(100) UNIQUE NOT NULL,
    plat DECIMAL(10,2) DEFAULT 0
);
```

!!! info "Prostředky doménové integrity v SQL"
    | Omezení | Význam |
    |:--|:--|
    | `NOT NULL` | Hodnota nesmí být prázdná. |
    | `UNIQUE` | Všechny hodnoty ve sloupci musí být navzájem různé. |
    | `CHECK (podmínka)` | Hodnota musí splňovat zadanou logickou podmínku. |
    | `DEFAULT hodnota` | Pokud hodnota není zadána, použije se implicitní. |
    | Datový typ | Samotný typ (`INT`, `DATE`, `BOOLEAN`, …) definuje základní doménu. |

### Entitní integrita

Každá tabulka musí mít **primární klíč**, který je jednoznačný a neprázdný (`NOT NULL`). Důsledek: v tabulce nemohou existovat dva řádky se stejným primárním klíčem a žádný řádek nesmí mít primární klíč `NULL`.

```sql
CREATE TABLE Studenti (
    student_id INT PRIMARY KEY,   -- entitní integrita: unikátní, NOT NULL
    jmeno VARCHAR(100) NOT NULL
);
```

### Referenční integrita

Cizí klíče musí odkazovat na **existující** hodnoty primárního klíče v referenční tabulce. Zajišťuje, že vztahy mezi tabulkami zůstávají konzistentní.

```sql
CREATE TABLE Prihlasky (
    prihlaska_id INT PRIMARY KEY,
    student_id INT NOT NULL,
    kurz_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES Studenti(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (kurz_id) REFERENCES Kurzy(kurz_id)
);
```

!!! info "Akce při porušení referenční integrity"
    Co se stane, když se pokusíme smazat studenta, který má přihlášky?

    | Akce | Chování |
    |:--|:--|
    | `ON DELETE CASCADE` | Smažou se i všechny přihlášky daného studenta. |
    | `ON DELETE SET NULL` | Cizí klíč v přihláškách se nastaví na `NULL`. |
    | `ON DELETE RESTRICT` | Smazání se odmítne, pokud existují přihlášky. |
    | `ON DELETE SET DEFAULT` | Cizí klíč se nastaví na výchozí hodnotu. |

### Rekurzivní a ternární vztahy

- **Rekurzivní vztah** – relace, ve které cizí klíč odkazuje na primární klíč té samé tabulky. Např. `Zamestnanec(nadrizeny_id → Zamestnanec(id))`.
- **Ternární vztah** – vztah mezi třemi entitami. Např. `Lékař–Pacient–Lék (předepisuje)`.

## Návrh relační databáze

Návrh relační databáze je proces, ve kterém plánujeme, jakým způsobem budou data uložena, organizována a propojena. Správný návrh je klíčový pro efektivní a spolehlivé ukládání a manipulaci s daty.

### Konceptuální schéma

Konceptuální schéma je model, který zobrazuje strukturu dat, jejich vlastnosti a vztahy – bez ohledu na fyzickou implementaci. Vyjadřuje **co** chceme ukládat, ne **jak**. Nejčastěji se kreslí pomocí **ER diagramů** (Entity-Relationship).

!!! example "Ukázka ER diagramu"
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

!!! info "Prvky konceptuálního schématu"

    - **Entity** – objekty, které mají být uloženy v databázi (Student, Kurz, Učitel).
    - **Atributy** – vlastnosti entit (jméno, datum narození, kapacita).
    - **Vztahy** – vazby mezi entitami (Student *je zapsán* do Kurzu).
    - **Primární klíč** – jednoznačná identifikace entity.
    - **Cizí klíč** – odkaz na primární klíč jiné entity.

### Od konceptuálního k relačnímu schématu

Proces transformace konceptuálního modelu na relační schéma se řídí těmito kroky:

1. **Přizpůsobit** konceptuální schéma požadavkům relačního modelu.
2. **Transformovat** entity na tabulky, atributy na sloupce a vztahy na cizí klíče (případně vazební tabulky).
3. **Normalizovat** relační schéma (odstranit redundanci).
4. **Validovat** schéma vůči požadovaným transakcím.
5. **Konzultovat**, zda návrh odpovídá zadání.

### Bottom-up přístup

Cílem bottom-up přístupu je **seskupování atributů do relací** tak, aby byly informace uloženy na „nejlepším možném místě". Vycházíme od jednotlivých atributů a postupně je sdružujeme podle logické sounáležitosti a funkčních závislostí.

## Aktualizační anomálie

Aktualizační anomálie jsou nežádoucí vedlejší efekty operací nad databází, které vedou k nekonzistenci nebo ztrátě dat. Vznikají v důsledku redundance – opakování stejných dat na více místech.

| Anomálie | Kdy nastává | Příklad |
|:--|:--|:--|
| **Vkládací** | Pro vložení nového záznamu je nutné zadat redundantní data, nebo vložení nelze provést vůbec. | Nelze zapsat nový kurz, pokud na něj ještě není přihlášen žádný student. |
| **Modifikační** | Pro aktualizaci jedné informace je nutné změnit více záznamů. | Změna názvu kurzu vyžaduje přepsat všechny řádky, kde se kurz vyskytuje. |
| **Mazací** | Smazání záznamu způsobí ztrátu souvisejících dat. | Smazání posledního studenta z kurzu smaže i informaci o kurzu samotném. |

!!! success "Řešení – normalizace"
    Aktualizační anomálie se řeší pomocí **normalizace** – procesu dekompozice tabulek na menší, které splňují normální formy a eliminují redundanci.

## Normální formy

Normalizace je systematický proces dekompozice relačního schématu tak, aby se eliminovala redundance a s ní spojené anomálie. Postupuje se po **normálních formách** – každá vyšší forma splňuje všechny požadavky forem nižších.

!!! abstract "Přehled normálních forem"
    | Forma | Hlavní požadavek | Co odstraňuje |
    |:--|:--|:--|
    | **1NF** | Všechny atributy jsou atomické. | Vícehodnotové atributy, opakující se skupiny. |
    | **2NF** | Žádné částečné závislosti neklíčových atributů na složeném klíči. | Částečné závislosti (netýká se tabulek s jednoduchým PK). |
    | **3NF** | Žádné tranzitivní závislosti neklíčových atributů. | Tranzitivní závislosti. |
    | **BCNF** | Každá netriviální funkční závislost $X \to Y$ má $X$ jako superklíč. | Anomálie přežívající 3NF u tabulek s více kandidátními klíči. |

### První normální forma (1NF)

!!! success "Podmínky 1NF"
    Relace je v první normální formě, pokud:

    - Každý atribut obsahuje pouze **atomické** (dále nedělitelné) hodnoty.
    - Relace neobsahuje vícehodnotové atributy (žádné pole, seznamy, vnořené tabulky v jednom sloupci).
    - Všechny $n$-tice mají stejný počet atributů.

!!! example "Příklad – převod do 1NF"
    Relace $Studenti(RČ, jméno, příjmení, adresa, ocenění)$:

    - `adresa` není atomická – obsahuje ulici, město a PSČ.
    - `ocenění` je vícehodnotové – student může mít více ocenění.

    **Řešení**: Rozložíme na atomické atributy a vícehodnotový atribut přesuneme do samostatné relace:

    - $Studenti(RČ, jméno, příjmení, ulice, město, PSČ)$
    - $Ocenění(RČ, ocenění)$

### Druhá normální forma (2NF)

!!! warning "Podmínky 2NF"
    Relace je v druhé normální formě, pokud:

    - Je v **1NF**.
    - Každý neklíčový atribut je **plně funkčně závislý** na celém primárním klíči – nikoliv jen na jeho části.

    Týká se pouze tabulek se **složeným** primárním klíčem. Pro tabulky s jednoduchým primárním klíčem je splnění 1NF automaticky i 2NF.

!!! example "Příklad – porušení 2NF a převod"
    $Přihlášky(RČ, jméno, příjmení, univerzita, adresa\_univerzity)$ s primárním klíčem $\{RČ, univerzita\}$:

    - `jméno` a `příjmení` závisí pouze na $RČ$ (části klíče) – **částečná závislost**.
    - `adresa_univerzity` závisí pouze na `univerzita` – taky částečná závislost.

    **Řešení**: Rozložíme na relace, kde jsou neklíčové atributy plně závislé na svém PK:

    - $Přihlášky(RČ, univerzita)$
    - $Lidé(RČ, jméno, příjmení)$
    - $Univerzity(univerzita, adresa\_univerzity)$

### Třetí normální forma (3NF)

!!! success "Podmínky 3NF"
    Relace je v třetí normální formě, pokud:

    - Je v **2NF**.
    - Každý neklíčový atribut je přímo závislý na klíči – nesmí existovat **tranzitivní závislost** (neklíčový atribut závisí na jiném neklíčovém atributu).

!!! example "Příklad – tranzitivní závislost"
    $Zaměstnanci(id, jméno, oddělení\_id, název\_oddělení)$:

    - $id \to oddělení\_id$ (klíč → neklíčový)
    - $oddělení\_id \to název\_oddělení$ (neklíčový → neklíčový) ← **tranzitivní závislost**

    **Řešení**: Přesuneme tranzitivně závislý atribut do samostatné relace:

    - $Zaměstnanci(id, jméno, oddělení\_id)$
    - $Oddělení(oddělení\_id, název\_oddělení)$

### Boyce-Coddova normální forma (BCNF)

!!! tip "Podmínky BCNF"
    Relace je v BCNF, pokud:

    - Je v **3NF**.
    - Pro každou netriviální funkční závislost $X \to Y$ platí, že $X$ je **superklíč**.

BCNF je striktnější než 3NF – řeší anomálie, které 3NF ponechává v případech, kdy tabulka obsahuje více překrývajících se kandidátních klíčů. V praxi je většina 3NF schémat i BCNF.

## Bezztrátová dekompozice

Dekompozice je proces **rozdělení jedné relace na dvě nebo více menších relací** tak, aby výsledné schéma eliminovalo redundanci a anomálie. Klíčová otázka zní: **ztratíme při rozdělení nějaká data?** Pokud ano, je to ztrátová dekompozice – a to je nepřípustné.

!!! abstract "Bezztrátová dekompozice – definice"
    Mějme relaci $R$ s množinou funkčních závislostí $F$. Dekompozice $R$ na $R_1$ a $R_2$ je **bezztrátová** právě tehdy, když pro každou instanci $r$ relace $R$ platí:

    $$r = \Pi_{R_1}(r) \bowtie \Pi_{R_2}(r)$$

    Jinými slovy: **přirozené spojení projekcí na $R_1$ a $R_2$ dá přesně původní relaci** – žádné řádky nepřibyly, žádné nezmizely.

!!! info "Jak ověřit, že je dekompozice bezztrátová?"
    Dekompozice $R$ na $R_1$ a $R_2$ je bezztrátová, pokud platí alespoň jedna z následujících podmínek:

    1. **$R_1 \cap R_2 \to R_1$** – průnik atributů obou relací je superklíčem v $R_1$.
    2. **$R_1 \cap R_2 \to R_2$** – průnik atributů obou relací je superklíčem v $R_2$.

    Prakticky: **společné atributy obou rozložených relací musí tvořit nadklíč alespoň v jedné z nich**. To znamená, že podle společných atributů lze jednoznačně dohledat zbytek.

!!! example "Příklad – bezztrátová dekompozice"
    Mějme relaci $Student(RČ, jméno, příjmení, email)$ s primárním klíčem $\underline{RČ}$.

    **Dekompozice**:

    - $R_1(RČ, jméno, příjmení)$
    - $R_2(RČ, email)$

    **Ověření**: $R_1 \cap R_2 = \{RČ\}$ – a $RČ$ je superklíčem v $R_1$ i $R_2$. → **Bezztrátová**.

    **Proč?** Když $R_1 \bowtie R_2$ spojíme zpět přes $RČ$, dostaneme přesně původní řádky – pro každého studenta se správně spáruje jméno s emailem.

!!! bug "Příklad – ztrátová dekompozice"
    Mějme relaci $Výuka(učitel, předmět, učebna)$. Předpokládejme, že jeden učitel může učit více předmětů a jeden předmět může být v různých učebnách.

    **Chybná dekompozice**:

    - $R_1(učitel, předmět)$
    - $R_2(předmět, učebna)$

    **Ověření**: $R_1 \cap R_2 = \{předmět\}$, ale $předmět$ není superklíč v $R_1$ ani $R_2$ (učitel může učit více předmětů, předmět může být ve více učebnách). → **Ztrátová!**

    **Důsledek**: Po spojení $R_1 \bowtie R_2$ vzniknou falešné řádky – všichni učitelé daného předmětu budou spárováni se všemi učebnami, kde se předmět učí, i když tam ve skutečnosti nikdy neučili.

!!! success "Rekonstrukce – správná dekompozice"
    Aby byla dekompozice bezztrátová, musí jedna z rozložených relací obsahovat klíč původní relace. Správná dekompozice:

    - $R_1(učitel, předmět)$
    - $R_2(učitel, učebna)$

    $R_1 \cap R_2 = \{učitel\}$ – a pokud $učitel \to předmět$ platí v $R_1$, pak je dekompozice bezztrátová.

## Indexy

Index je datová struktura, která zrychluje vyhledávání záznamů v tabulce. Místo sekvenčního procházení všech řádků se dotaz podívá do indexu, který funguje jako rejstřík – rychle najde ukazatel na data a záznam vrátí.

!!! info "Jak indexy fungují"
    Index obsahuje **klíč** (hodnoty indexovaného atributu nebo kombinace atributů) a **ukazatel** na fyzické umístění záznamu v tabulce. Interně používá vyvážené stromové struktury (typicky $B^+$-strom) nebo hashovací tabulky.

    Cena za rychlost: zápis (INSERT, UPDATE, DELETE) musí kromě tabulky aktualizovat i všechny indexy.

```sql
-- Vytvoření indexu
CREATE INDEX idx_prijmeni ON Studenti(prijmeni);

-- Unikátní index
CREATE UNIQUE INDEX idx_email ON Studenti(email);

-- Složený index
CREATE INDEX idx_jmeno_prijmeni ON Studenti(jmeno, prijmeni);

-- Smazání indexu
DROP INDEX idx_prijmeni;
```

### Typy indexů – přehled

| Typ | Popis | Výhody | Nevýhody |
|:--|:--|:--|:--|
| **Úzký** | Definovaný nad jedním atributem. | Rychlejší pro jednoduché podmínky, menší režie údržby. | Nepomůže u dotazů filtrujících podle více sloupců. |
| **Široký (složený)** | Definovaný nad více atributy. | Efektivní pro dotazy s více podmínkami, podporuje *covering queries*. | Větší velikost, vyšší režie při zápisu. |
| **Hustý** | Odkazuje přímo na konkrétní záznam (každý řádek má položku v indexu). | Přesné, rychlé pro point queries. | Větší velikost indexu. |
| **Řídký** | Odkazuje na stránku/blok, kde se záznam nachází. | Menší velikost, rychlejší údržba. | Méně přesný – vyžaduje dohledání na stránce. |
| **Primární** | Index nad primárním klíčem – vytváří se automaticky. | Garantuje jedinečnost PK, rychlé vyhledávání podle PK. | Nelze odstranit bez odstranění PK. |
| **Sekundární** | Index nad neklíčovým atributem. | Zrychluje dotazy podle jiných kritérií než PK. | Režie při zápisu – nutno udržovat. |
| **Unikátní** | Vynucuje `UNIQUE` – žádné dvě hodnoty nejsou stejné. | Garance unikátnosti na úrovni DB, ne v aplikaci. | Zpomaluje vkládání (nutnost kontroly). |

### Klastrovaný vs. neklastrovaný index

Toto je zásadní architektonické rozhodnutí – týká se **fyzického uspořádání dat** na disku:

#### Klastrovaný index (Clustered)

Data v tabulce jsou **fyzicky seřazena** podle hodnot indexovaného atributu. Listové uzly $B^+$-stromu obsahují přímo celé řádky tabulky.

- **Výhody**: Extrémně rychlé pro range queries (`BETWEEN`, `ORDER BY`), data čtena sekvenčně z disku, covering queries.
- **Nevýhody**: Pouze **jeden** na tabulku (data lze fyzicky seřadit jen jedním způsobem). Při zápisu se musí přesouvat data, nejen index – dražší INSERT/UPDATE. Vhodný pro sloupce, podle kterých se často řadí nebo se dotazuje na rozsahy.
- **Případ použití**: Primární klíč (většina DB ho automaticky dělá klastrovaným), datum vytvoření u logovacích tabulek.

#### Neklastrovaný index (Unclustered)

Index vytváří samostatnou strukturu, která obsahuje jen klíč a ukazatel na řádek v tabulce. Fyzické pořadí dat se nemění.

- **Výhody**: Lze jich mít **více** na jedné tabulce (typicky desítky). Menší režie při zápisu – přesouvá se jen struktura indexu, ne data. Vhodný pro časté vyhledávací podmínky.
- **Nevýhody**: Pomalejší pro range queries – ukazatele odkazují na data rozptýlená po disku. Dva kroky: index → ukazatel → data.
- **Případ použití**: Cizí klíče, často filtrované sloupce (email, stav objednávky), fulltextové vyhledávání.

### Strategie indexování

!!! info "Kdy indexovat a kdy ne"
    | Faktor | Indexovat | Neindexovat |
    |:--|:--|:--|
    | **Selektivita** | Vysoká – mnoho různých hodnot (email, RČ). | Nízká – málo hodnot (pohlaví, boolean). |
    | **Četnost dotazů** | Často filtrované nebo JOINované sloupce. | Zřídka používané. |
    | **Poměr čtení/zápis** | Hodně čtení, málo zápisů. | Hodně zápisů, málo čtení. |
    | **Velikost tabulky** | Velké tabulky – sekvenční scan je drahý. | Malé tabulky – sekvenční scan je rychlý. |
    | **Pořadí ve složeném indexu** | Nejdřív atributy v podmínkách `WHERE`, pak `JOIN`, nakonec `ORDER BY`. | Nahodilé pořadí. |

!!! warning "Přeindexovanost"
    Příliš mnoho indexů škodí:

    - Každý zápis musí aktualizovat všechny indexy.
    - Indexy zabírají místo na disku.
    - Query optimizer může zvolit suboptimální index.

## Transakce

Transakce je posloupnost SQL příkazů, která převádí databázi z jednoho **konzistentního stavu** do druhého. Funguje jako atomická jednotka – buď se provede celá, nebo vůbec. Bez transakčního zpracování by souběžný přístup více uživatelů vedl k chaosu – jeden by četl data uprostřed změn druhého, převody peněz by mizely, rezervace by se duplikovaly.

### ACID

ACID je akronym čtyř vlastností, které každá transakce garantuje. Databázový systém je vynucuje kombinací zámků, logování a správy verzí.

!!! abstract "Čtyři vlastnosti ACID"
    **Atomicita** (*Atomicity*)
    :   Transakce je nedělitelná – buď se provedou **všechny** její operace, nebo **žádná**. Selhání uprostřed (výpadek proudu, chyba aplikace, porušení IO) → automatický rollback všeho, co se do té doby provedlo. Atomicita se implementuje pomocí *undo logu* – databáze si před každou změnou uloží původní hodnotu, aby ji mohla v případě rollbacku obnovit.

    **Konzistence** (*Consistency*)
    :   Transakce převádí databázi z jednoho konzistentního stavu do druhého. Konzistentní stav = žádné integritní omezení (PK, FK, CHECK, UNIQUE) není porušeno. Pokud transakce uprostřed poruší IO (např. `INSERT` s duplicitním PK), je odmítnuta. Konzistence je odpovědností programátora i DBMS – DB zajistí IO, aplikační logiku musí hlídat vývojář.

    **Izolovanost** (*Isolation*)
    :   Souběžné transakce se navzájem neovlivňují – každá vidí databázi, jako by běžela sama. Dokonalá izolace (`SERIALIZABLE`) je drahá (zámkování), proto standard SQL definuje slabší úrovně, které povolují určité konflikty výměnou za vyšší výkon. Viz [stupně izolace](#stupně-izolace) níže.

    **Trvanlivost** (*Durability*)
    :   Úspěšně potvrzená transakce (`COMMIT`) je **trvale** uložena – přežije výpadek proudu, restart serveru i pád disku. Implementuje se pomocí *redo logu* (*WAL* – Write-Ahead Log): před zapsáním změn do datových souborů se změna zapíše do logu na disk. Při restartu po výpadku se z logu obnoví všechny committed transakce.

```sql
-- Atomický převod peněz: oba UPDATE, nebo nic
BEGIN TRANSACTION;
    UPDATE Ucty SET zustatek = zustatek - 1000 WHERE id = 1;
    UPDATE Ucty SET zustatek = zustatek + 1000 WHERE id = 2;
COMMIT;
-- Pokud cokoliv selže:
-- ROLLBACK;
```

### Konflikty

Když běží více transakcí současně a nejsou dostatečně izolované, vznikají následující problémy. Každý z nich reprezentuje jiný typ nekonzistence:

!!! bug "Dirty Read (špinavé čtení)"
    Transakce $T_1$ čte data, která transakce $T_2$ zapsala, ale ještě **nepotvrdila** (`COMMIT`). Pokud se $T_2$ následně vrátí (`ROLLBACK`), $T_1$ pracovala s daty, která ve skutečnosti nikdy neexistovala.

    | Čas | Transakce A | Transakce B |
    |:--|:--|:--|
    | 1 | `BEGIN` | |
    | 2 | `UPDATE zustatek = 500 WHERE id = 1` | |
    | 3 | | `SELECT zustatek FROM Ucty WHERE id = 1` – **vidí 500** |
    | 4 | `ROLLBACK` – vrací původních 1000 | |
    | 5 | | Transakce B pracovala s hodnotou 500, která nikdy neexistovala |

!!! bug "Non-repeatable Read (neopakovatelné čtení)"
    Transakce $T_1$ čte stejný řádek dvakrát, ale mezi tím jiná transakce $T_2$ hodnotu **změnila a potvrdila**. $T_1$ podruhé vidí jinou hodnotu.

    | Čas | Transakce A | Transakce B |
    |:--|:--|:--|
    | 1 | `BEGIN` | |
    | 2 | `SELECT zustatek FROM Ucty WHERE id = 1` – **vidí 1000** | |
    | 3 | | `UPDATE Ucty SET zustatek = 500 WHERE id = 1; COMMIT` |
    | 4 | `SELECT zustatek FROM Ucty WHERE id = 1` – **vidí 500!** |
    | 5 | Transakce A viděla dvě různé hodnoty pro tentýž řádek |

!!! bug "Phantom Read (fantómové čtení)"
    Transakce $T_1$ provede dotaz se stejnou podmínkou dvakrát, ale mezi tím jiná transakce $T_2$ **vložila nový řádek** (nebo smazala existující), který podmínce vyhovuje. $T_1$ podruhé vidí řádky, které předtím neexistovaly.

    | Čas | Transakce A | Transakce B |
    |:--|:--|:--|
    | 1 | `BEGIN` | |
    | 2 | `SELECT COUNT(*) FROM Objednavky WHERE stav = 'nova'` – **10** | |
    | 3 | | `INSERT INTO Objednavky (...) VALUES (...); COMMIT` |
    | 4 | `SELECT COUNT(*) FROM Objednavky WHERE stav = 'nova'` – **11!** |
    | 5 | Transakce A vidí nový řádek, který předtím neexistoval |

!!! bug "Lost Update (ztracená aktualizace)"
    Dvě transakce čtou stejná data, každá je upraví a zapíše zpět – druhá přepíše změny první, aniž by o nich věděla.

    | Čas | Transakce A | Transakce B |
    |:--|:--|:--|
    | 1 | `SELECT zustatek FROM Ucty WHERE id = 1` – **1000** | |
    | 2 | | `SELECT zustatek FROM Ucty WHERE id = 1` – **1000** |
    | 3 | `UPDATE Ucty SET zustatek = 500 WHERE id = 1` | |
    | 4 | | `UPDATE Ucty SET zustatek = 1200 WHERE id = 1; COMMIT` |
    | 5 | `COMMIT` – ale B už přepsal změnu A! |

    Zůstatek je 500 (co napsala A), přestože B provedl COMMIT později. Záleží na implementaci, ale obě transakce přepsaly práci té druhé.

### Stupně izolace

Standard SQL definuje čtyři úrovně izolace, které představují **kompromis mezi konzistencí a výkonem**. Vyšší izolace = méně konfliktů, ale více zámků a nižší propustnost.

| Úroveň | Dirty Read | Non-repeatable Read | Phantom Read | Lost Update |
|:--|:--:|:--:|:--:|:--:|
| **READ UNCOMMITTED** | ✅ Možný | ✅ Možný | ✅ Možný | ✅ Možný |
| **READ COMMITTED** | ❌ | ✅ Možný | ✅ Možný | ✅ Možný |
| **REPEATABLE READ** | ❌ | ❌ | ✅ Možný | ❌ |
| **SERIALIZABLE** | ❌ | ❌ | ❌ | ❌ |

#### READ UNCOMMITTED

Nejslabší úroveň – transakce může číst data, která jiná transakce ještě nepotvrdila (*dirty read*). Prakticky **žádná izolace**.

- **Jak to funguje**: SELECT nebere žádné zámky, ignoruje zámky ostatních.
- **Výhody**: Maximální výkon, žádné blokování.
- **Nevýhody**: Prakticky nepoužitelné pro cokoliv, kde záleží na správnosti dat.
- **Použití**: Pouze pro přibližné agregace, kde na přesnosti nezáleží (např. odhad počtu návštěvníků za poslední minutu).

#### READ COMMITTED

Transakce vidí pouze data potvrzená (`COMMIT`) jinými transakcemi. **Dirty read není možný**. Většina databází (PostgreSQL, Oracle, SQL Server) používá tuto úroveň jako **výchozí**.

- **Jak to funguje**: Každý SELECT vidí snapshot dat platný v okamžiku spuštění dotazu (ne transakce!).
- **Výhody**: Slušný kompromis – žádné dirty ready, ale stále vysoká propustnost. V PostgreSQL se používá MVCC – writers neblokují readers.
- **Nevýhody**: Non-repeatable read a phantom read jsou možné – stejný SELECT uvnitř jedné transakce může vrátit různé výsledky.
- **Použití**: OLTP systémy s vysokou propustností (e-shopy, bankovní dotazy na zůstatek).

#### REPEATABLE READ

Transakce vidí stejná data po celou dobu svého trvání – pokud přečte řádek na začátku transakce, každé další čtení stejného řádku vrátí stejnou hodnotu. **Dirty read ani non-repeatable read nejsou možné**.

- **Jak to funguje**: Při prvním čtení řádku se na něj vezme zámek (nebo se v MVCC zaznamená verze snapshotu platná pro celou transakci).
- **Výhody**: Konzistentní pohled na data uvnitř transakce – vhodné pro operace, které vyžadují více čtení v konzistentním stavu.
- **Nevýhody**: Phantom read je stále možný – nové řádky splňující podmínku WHERE se mohou objevit. Více zámků → menší propustnost.
- **V MySQL InnoDB**: REPEATABLE READ je **výchozí** úroveň a díky *gap lockům* blokuje i phantom ready – chová se téměř jako SERIALIZABLE.

#### SERIALIZABLE

Nejpřísnější úroveň – transakce se chovají, jako by běžely **sériově** (jedna po druhé), i když ve skutečnosti běží souběžně. **Žádné konflikty nejsou možné**.

- **Jak to funguje**: DB používá kombinaci zámků, predikátních zámků (zamyká i rozsahy hodnot, ne jen existující řádky), nebo detekci sériových konfliktů a abort transakcí (SSI – Serializable Snapshot Isolation v PostgreSQL).
- **Výhody**: Úplná izolace – programátor nemusí řešit žádné souběhové jevy.
- **Nevýhody**: Nízká propustnost, časté aborty transakcí při konfliktu. Nejhůř škáluje.
- **Použití**: Finanční systémy, kde je správnost kritická (převody mezi bankami, účetní uzávěrky).

### Jak se izolace implementuje – zámky vs. MVCC

| Mechanismus | Princip | Výhody | Nevýhody | Používá |
|:--|:--|:--|:--|:--|
| **Pesimistické zámky** (*Pessimistic Locking*) | Před čtením/zápisem se vezme zámek (shared/exclusive). Ostatní čekají. | Jednoduchý model, garantovaná konzistence. | Nízká propustnost – readeři blokují writery a naopak. | SQL Server (výchozí), starší Oracle. |
| **Optimistické zámky** (*Optimistic Locking*) | Transakce čte bez zámků, při COMMITu ověří, že data nebyla změněna (např. porovnáním verze). Pokud byla → abort. | Vysoká propustnost při malém konfliktu, ideální pro read-heavy systémy. | Při vysokém konfliktu mnoho abortů a retry. | Aplikační vrstva (JPA `@Version`, Hibernate optimistic). |
| **MVCC** (*Multi-Version Concurrency Control*) | Každá transakce vidí snapshot databáze v okamžiku svého startu. Writers vytvářejí nové verze řádků, readers čtou staré verze. **Readers nikdy neblokují writers a naopak**. | Vysoká propustnost, ideální pro mixed workloads. | Složitější implementace, režie úklidu starých verzí (VACUUM). | PostgreSQL, MySQL InnoDB, Oracle, SAP HANA. |

!!! info "MVCC v PostgreSQL – jak to funguje"
    Každý řádek v PostgreSQL nese metadata o tom, která transakce ho vytvořila a která ho smazala. Při SELECTu transakce vidí jen řádky, které:

    - Byly vytvořeny transakcí, která už commitnula **před** startem mé transakce.
    - Nebyly smazány transakcí, která commitnula **před** startem mé transakce.

    Takže každá transakce pracuje se stabilním snapshotem – bez zámků, bez čekání. Writers mezi sebou soupeří jen o tentýž řádek.

!!! example "Praktická volba stupně izolace"
    | Scénář | Doporučená úroveň | Proč |
    |:--|:--|:--|
    | Zobrazení zůstatku účtu | READ COMMITTED | Stačí vidět poslední potvrzený stav. |
    | Převod peněz mezi účty | REPEATABLE READ | Musí vidět konzistentní zůstatky obou účtů po celou dobu transakce. |
    | Generování měsíční účetní uzávěrky | SERIALIZABLE | Nesmí se objevit žádné nové transakce během výpočtu sum. |
    | Aktuální počet online uživatelů | READ UNCOMMITTED | Orientační údaj, přesnost není kritická. |

## Triggers a uložené procedury

### Triggers

Trigger je procedura uložená na databázovém serveru, která se **automaticky spouští** při definované události na tabulce.

```sql
CREATE TRIGGER jmeno
BEFORE | AFTER | INSTEAD OF udalost ON tabulka
[REFERENCING referencni_promenne]
[FOR EACH ROW | FOR EACH STATEMENT]
WHEN (podminka)
akce
```

!!! info "Načasování a granularita triggeru"

    - **BEFORE** – spouští se před provedením příkazu. Vhodné pro validaci dat, doplnění chybějících hodnot.
    - **AFTER** – spouští se po provedení. Vhodné pro aplikační logiku, auditní logy, kaskádové akce.
    - **FOR EACH STATEMENT** – jednou pro celý SQL příkaz.
    - **FOR EACH ROW** – pro každý modifikovaný řádek zvlášť (pokud je modifikováno 0 řádků, trigger se nespustí).

!!! example "ON DELETE CASCADE pomocí triggeru"
    ```sql
    CREATE TRIGGER tr_cascade
    AFTER DELETE ON Studenti
    REFERENCING old_row AS o
    FOR EACH ROW
        DELETE FROM Prihlasky WHERE Prihlasky.student_id = o.student_id;
    ```

### Uložené procedury

Uložená procedura je blok kódu uložený a spouštěný přímo na databázovém serveru. Používá se pro zapouzdření často používaných příkazů, validaci dat a přesun části logiky do DB.

```sql
CREATE PROCEDURE povys_plat(IN zam_id INT, IN zvyseni DECIMAL)
BEGIN
    UPDATE Zamestnanci
    SET plat = plat + zvyseni
    WHERE id = zam_id;
END;

-- Volání
EXECUTE povys_plat(42, 5000);
```

## Pohledy

Pohled (View) je **virtuální relace** – uložený SQL dotaz, ke kterému se přistupuje jako k tabulce. Data fyzicky neexistují na disku, vznikají dynamicky při dotazu.

```sql
CREATE VIEW aktivni_studenti AS
SELECT s.id, s.jmeno, s.prijmeni, p.nazev AS obor
FROM Studenti s
JOIN Prihlasky pr ON s.id = pr.student_id
JOIN Programy p ON pr.program_id = p.id
WHERE pr.stav = 'aktivni';

-- Dotaz do pohledu (stejně jako do tabulky)
SELECT * FROM aktivni_studenti WHERE obor = 'IT';
```

!!! info "Vlastnosti pohledů"

    - Skrývají složitost dotazu – uživatel se ptá jednoduchého SELECT.
    - Skrývají citlivá data – pohled neobsahuje sloupce, které uživatel nemá vidět.
    - Zjednodušují řízení práv – `GRANT SELECT ON pohled` místo na celou tabulku.
    - `WITH CHECK OPTION` – zajistí, že modifikace přes pohled neporuší podmínku WHERE pohledu. Při pokusu o vložení řádku, který by v pohledu nebyl vidět, DB vyhodí výjimku.

## SQL – přehled

Structured Query Language je deklarativní jazyk pro přístup a řízení relačních databází. Dělí se na několik podsad:

| Podmnožina | Význam | Klíčové příkazy |
|:--|:--|:--|
| **DQL** – Data Query Language | Dotazování a výběr dat. | `SELECT`, `FROM`, `WHERE`, `JOIN`, `GROUP BY`, `HAVING`, `ORDER BY` |
| **DML** – Data Manipulation Language | Manipulace s daty. | `INSERT`, `UPDATE`, `DELETE` |
| **DDL** – Data Definition Language | Definice struktury databáze. | `CREATE TABLE/INDEX/VIEW`, `ALTER TABLE`, `DROP`, `TRUNCATE` |
| **DCL** – Data Control Language | Řízení přístupových práv. | `GRANT`, `REVOKE` |
| **TCL** – Transaction Control Language | Řízení transakcí. | `COMMIT`, `ROLLBACK`, `SAVEPOINT` |

!!! example "DDL – vytvoření tabulky včetně integritních omezení"
    ```sql
    CREATE TABLE Teachers
    (
        id_teacher  INTEGER NOT NULL,
        id_office   INTEGER NOT NULL,
        email       NVARCHAR(30) NOT NULL UNIQUE,
        name        NVARCHAR(30) NOT NULL,
        surname     NVARCHAR(30) NOT NULL,
        title_before NVARCHAR(10) NULL,
        title_after  NVARCHAR(10) NULL,
        dob         DATETIME NOT NULL,
        type        INTEGER NOT NULL CHECK (type > 0 AND type < 6),
        PRIMARY KEY (id_teacher),
        CONSTRAINT fk_TeachOffice FOREIGN KEY (id_office)
            REFERENCES Offices(id_office),
        CONSTRAINT uc_NameSurnameDob UNIQUE (name, surname, dob)
    );
    ```
