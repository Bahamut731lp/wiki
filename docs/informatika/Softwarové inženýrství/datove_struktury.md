# Datové struktury

## Úvod

Datový typ je název pro množinu hodnot a množinu operací, které lze nad danými hodnotami provádět. Datový typ určuje, jak se data ukládají do paměti a jak s nimi pracovat.

### Základní kategorie datových typů

| Kategorie | Popis | Příklad |
|:--|:--|:--|
| **Prázdný** | Nemá žádné definované operace ani způsob ukládání dat. | `void` |
| **Jednoduchý** | Ukládá data přímo do adresního prostoru. | `int`, `char`, `boolean` |
| **Ordinální** | Mezi prvky je určené pořadí, lze je porovnávat. | `int`, `enum` |
| **Neordinální** (nominální) | Mezi prvky není určené pořadí; identifikují se názvem. | `boolean`, výčtové typy bez vnitřního řazení |
| **Strukturovaný** | Skládá jednoduché datové typy do struktury. | pole, řetězec, struktura (`struct`) |
| **Abstraktní (ADT)** | Má pouze definici (rozhraní), ale ne konkrétní implementaci. | zásobník, fronta, seznam, strom |

### Abstraktní datový typ (ADT)

Abstraktní datový typ je určen pouze svojí definicí – říká **co** dělá, ne **jak** to dělá. Odděluje rozhraní od implementace. ADT se označují jako **kontejnery** a měly by definovat minimálně tyto operace:

- Vytvoření prázdného kontejneru
- Zjištění počtu prvků
- Přístup k prvkům
- Vložení prvku
- Odstranění prvku
- Vymazání všech prvků

## Jednoduché struktury

### Pole

Pole (anglicky **Array**) je strukturovaný datový typ, který seskupuje **pevný počet** položek **stejného typu**. Prvky jsou rozlišovány pomocí indexů – jeden index odkazuje právě na jednu položku.

!!! info "Vlastnosti pole"

    - **Homogenní** – všechny prvky mají stejný datový typ.
    - **Pevná délka** – velikost je dána při vytvoření a nelze ji měnit.
    - **Indexované** – k prvkům se přistupuje přes celočíselný index, typicky od $0$ do $n-1$.
    - **Přímý přístup** – přístup k libovolnému prvku je $O(1)$.

!!! info "Dynamické pole"

    Dynamické pole je ADT kontejner nad polem, který odstraňuje omezení fixní velikosti. Jednotlivé prvky jsou ukládány ve vnitřním poli:

    - Jakmile je kapacita naplněna, alokuje se nové, větší pole (zpravidla **dvakrát větší** kvůli amortizaci).
    - Pokud dlouho zůstává neobsazené, může se alokovat menší pole.

    Díky amortizaci je složitost vložení prvku $O(1)$ – občasné překopírování do většího pole se rozloží mezi mnoho levných vložení.

### Textový řetězec

Textový řetězec je strukturovaný datový typ, který bývá chápán jako **pole znaků**. Většina moderních jazyků ho však implementuje jako samostatný, neměnný (*immutable*) typ s bohatou sadou operací: spojování, hledání podřetězců, dělení, nahrazování, změna velikosti písmen atd.

!!! info "Reprezentace řetězce"

    - V C: pole znaků ukončené nulovým znakem `\0` (`char[]`).
    - V Javě: objekt `String` – neměnný, internovaný (stejné literály sdílí instanci).
    - Unicode: moderní jazyky podporují znaky mimo ASCII – jeden "znak" může zabírat více bajtů (UTF-8, UTF-16).

### Ukazatel

Ukazatel (anglicky **Pointer**) je abstraktní datový typ, který uchovává **adresu v operační paměti**. Ukazatel má svůj typ, který odpovídá typu dat uložených na odkazované adrese – `int*` ukazuje na data typu `int`.

!!! info "K čemu jsou ukazatele"

    - **Dynamická alokace paměti** – `malloc`/`free` v C, `new`/`delete` v C++.
    - **Předávání odkazem** – funkce může modifikovat data volajícího.
    - **Datové struktury** – spojové seznamy, stromy, grafy.
    - **Pole** – v C je pole v podstatě konstantní ukazatel na první prvek.

!!! danger "Rizika ukazatelů"

    - **Dangling pointer** – ukazatel na již uvolněnou paměť.
    - **Memory leak** – zapomenutí uvolnit dynamicky alokovanou paměť.
    - **Null pointer dereference** – přístup přes `NULL`/`nullptr` → pád programu.

### Výčet

Výčet (anglicky **Enum**) je ordinální datový typ, který definuje pevnou množinu pojmenovaných konstant. Slouží k omezení hodnot, kterých může proměnná nabývat – např. dny v týdnu, stavy automatu, typy logovacích úrovní.

```c
enum Den {
    PONDELI,
    UTERY,
    STREDA,
    CTVRTEK,
    PATEK,
    SOBOTA,
    NEDELE
};
```

V Javě jsou výčty plnohodnotné třídy – mohou mít atributy, metody a konstruktor:

```java
enum Den {
    PONDELI("Pondělí"),
    UTERY("Úterý"),
    STREDA("Středa");

    private final String nazev;
    Den(String nazev) { this.nazev = nazev; }
    public String getNazev() { return nazev; }
}
```

## Lineární struktury

Lineární datové struktury organizují prvky v jedné linii – každý prvek má (až na krajní) právě jednoho předchůdce a jednoho následníka. Liší se tím, odkud lze přidávat a odebírat.

### Seznam

Seznam (anglicky **List**) je homogenní, lineární a dynamický ADT, který je zobecněním zásobníku a fronty – narozdíl od nich dovoluje přidávat a odebírat prvky na **libovolné pozici**.

!!! info "Typy seznamů podle propojení"

    - **Jednosměrný** – každý uzel odkazuje jen na následníka.
    - **Obousměrný** – každý uzel odkazuje na předchůdce i následníka.
    - **Kruhový** – konec odkazuje na začátek a začátek na konec.

!!! example "Jednosměrný kruhový seznam"
    ```mermaid
    graph LR
        A[Začátek] --> C[1] --> E[2] --> F[...] --> B[Konec]
        B --> A
    ```

!!! info "Spojový seznam vs. pole"
    | Operace | Pole | Spojový seznam |
    |:--|:--|:--|
    | Přístup podle indexu | $O(1)$ | $O(n)$ |
    | Vložení na začátek | $O(n)$ | $O(1)$ |
    | Vložení na konec | $O(1)$ amort. / $O(n)$ | $O(1)$ s tail / $O(n)$ |
    | Mazání uprostřed | $O(n)$ | $O(1)$ při znalosti uzlu |
    | Paměťová režie | Minimální | Ukazatele navíc |

### LIFO – Zásobník (Stack)

Zásobník (anglicky **Stack**) je homogenní, lineární a dynamický ADT fungující na principu **LIFO** – *Last In, First Out* (poslední vložený, první odebraný). Data se ukládají v pořadí vložení, ale **čtení probíhá od nejnovějšího po nejstaršímu**.

!!! abstract "Operace zásobníku"

    - `push` – vloží prvek na vrchol zásobníku.
    - `pop` – odebere a vrátí prvek z vrcholu zásobníku.
    - `top` (peek) – vrátí prvek na vrcholu bez odebrání.
    - `is_empty` – zjistí, zda je zásobník prázdný.

Zásobník lze implementovat pomocí pole (s proměnnou `top` ukazující na vrchol) nebo spojového seznamu. Při implementaci polem o pevné délce je nutné hlídat přetečení (*overflow*).

!!! example "Použití zásobníku"

    - **Vyhodnocování výrazů** – převod infixové notace na postfixovou, výpočet RPN.
    - **Rekurze** – každé rekurzivní volání se ukládá na zásobník volání (*call stack*).
    - **Undo/Redo** – historie akcí v editorech.
    - **Backtracking** – ukládání cesty při prohledávání do hloubky.

### FIFO – Fronta (Queue)

Fronta (anglicky **Queue**) je homogenní, lineární a dynamický ADT fungující na principu **FIFO** – *First In, First Out* (první vložený, první odebraný). Data se ukládají v pořadí vložení a **čtení probíhá ve stejném pořadí**.

!!! abstract "Operace fronty"

    - `enqueue` (push) – vloží prvek na konec fronty.
    - `dequeue` (pop) – odebere a vrátí prvek ze začátku fronty.
    - `front` (peek) – vrátí první prvek bez odebrání.
    - `is_empty` – zjistí, zda je fronta prázdná.

Frontu lze implementovat pomocí pole či spojového seznamu. Při implementaci polem je vhodné použít kruhový buffer, aby se zabránilo posouvání prvků.

!!! example "Použití fronty"

    - **Fronty zpráv** – RabbitMQ, Kafka (viz [distribuované programování](distribuovane_programovani.md)).
    - **BFS** – prohledávání do šířky v grafu.
    - **Plánování procesů** – round-robin v operačních systémech.
    - **Vyrovnávací paměť** – buffering mezi producentem a konzumentem.

### Kruhový Buffer

Kruhový buffer (anglicky **Circular Buffer**) je speciální případ fronty implementované pomocí pole, používaný jako **vyrovnávací paměť** mezi producentem a konzumentem. Díky své implementaci nabízí operace v $O(1)$ bez nutnosti realokace.

!!! info "Princip kruhového bufferu"
    Kruhový buffer tvoří jedno pole a dva ukazatele:

    - `head` – ukazuje na první obsazený prvek.
    - `tail` – ukazuje na první volný prvek.
    - Při přidání prvku se `tail` inkrementuje (v kruhu – po dosažení konce pole se vrací na začátek).
    - Při odebrání se inkrementuje `head` a původní prvek se uvolní.

!!! warning "Plný vs. prázdný buffer"
    Když `head == tail`, buffer je buď prázdný, nebo plný. Rozlišení se řeší buď ponecháním jednoho volného místa, nebo pomocnou proměnnou `count`.

## Nelineární struktury

### Strom

Strom je abstraktní datová struktura, která reprezentuje souvislý, neorientovaný, acyklický graf. Každý vrchol má $n$ potomků a každý potomek má právě $1$ rodiče (kromě kořene, který rodiče nemá).

!!! info "Vlastnosti stromu"

    - **$n$-arita** – kolik potomků může mít každý vrchol (binární strom = max. 2).
    - **Hloubka** – počet hladin od kořene k nejvzdálenějšímu listu.
    - **Šířka** – počet vrcholů na dané hierarchické úrovni.
    - **Pravidelnost** – zda mají všechny vrcholy na stejné úrovni stejný počet potomků.
    - **Vyváženost** – zda je strom udržován automaticky vyvážený (např. AVL, Red-Black).

!!! info "Běžné operace se stromy"

    - Hledání, přidání a odebrání vrcholu
    - Přidání podstromu (roubování – *grafting*)
    - Odebrání podstromu (prořezávání – *pruning*)
    - Hledání kořene
    - Dotazování vlastností (hloubka, šířka, výška…)
    - Procházení stromu

#### Procházení stromu

Stromy lze procházet dvěma základními způsoby:

- **Do šířky** (BFS): po patrech – od kořene přes všechny jeho potomky, pak jejich potomky…
- **Do hloubky** (DFS): po větvích – tři varianty podle pořadí návštěvy kořene:
    - **Pre-order**: Kořen → levý podstrom → pravý podstrom.
    - **In-order**: Levý podstrom → kořen → pravý podstrom (v BST dává seřazené pořadí).
    - **Post-order**: Levý podstrom → pravý podstrom → kořen.

#### Binární strom

Binární strom je strom, jehož každý vrchol má **maximálně 2 potomky** (levý a pravý). Je základem pro binární vyhledávací stromy, haldy a další struktury.

### Halda

Halda (anglicky **Heap**) je případ binárního stromu, který navíc splňuje jednu z **podmínek haldy**:

- **Max-heap**: Hodnota potomka je vždy **menší** než hodnota jeho rodiče. Kořen obsahuje maximum.
- **Min-heap**: Hodnota potomka je vždy **větší** než hodnota jeho rodiče. Kořen obsahuje minimum.

Halda se chová jako **prioritní fronta** – umožňuje rychle získat a odebrat prvek s nejvyšší prioritou.

!!! info "Binární halda"
    Binární halda je binární strom, pro který platí:

    - Je **vyvážený** – listy se liší maximálně o jednu úroveň.
    - Poslední úroveň se zaplňuje zleva doprava.

    Díky těmto vlastnostem lze haldu reprezentovat v poli: pro prvek na indexu $i$ jsou jeho potomci na $2i+1$ a $2i+2$, rodič na $\lfloor (i-1)/2 \rfloor$.

!!! info "Operace na haldě"

    - **Vložení** (*insert*): Přidej prvek na konec (první volné místo v poslední úrovni) a nech ho **probublat nahoru** (*bubble-up*, *sift-up*) – porovnávej s rodičem, a pokud je ve špatném vztahu, prohoď je. Opakuj, dokud není vlastnost haldy obnovena.
    - **Odebrání kořene** (*extract-min/max*): Nahraď kořen posledním prvkem, odstraň poslední prvek, a nech nový kořen **probublat dolů** (*bubble-down*, *sift-down*) – porovnávej s potomky, prohoď s tím ve správném vztahu. Opakuj.
    - **Složitost**: Obě operace $O(\log n)$ – výška haldy je $\log n$.

### Množina

Množina (anglicky **Set**) je ADT, který **negarantuje pořadí prvků**, ale garantuje jejich **jedinečnost** – každý prvek se v množině vyskytuje nejvýše jednou.

!!! info "Implementace množiny"

    - **Naivní**: Seznam nebo pole, kde se při vkládání kontroluje duplicita průchodem všech prvků. Složitost vložení $O(n)$.
    - **Hašovací tabulka** (*HashSet*): Prvky se ukládají podle hashe – vkládání, mazání i vyhledávání v průměru $O(1)$.
    - **Binární vyhledávací strom** (*TreeSet*): Prvky jsou seřazené – operace v $O(\log n)$.

### Tabulka

Tabulka (anglicky **Map**, **Dictionary**, **Associative Array**) je ADT, který ukládá **dvojice klíč–hodnota**. Každý klíč je unikátní a mapuje se právě na jednu hodnotu. Na rozdíl od pole, kde jsou indexy celá čísla, v tabulce může být klíčem libovolný typ (řetězec, objekt…).

!!! abstract "Základní operace"

    - `put(key, value)` – vložení nebo přepsání hodnoty pro daný klíč.
    - `get(key)` – získání hodnoty podle klíče.
    - `remove(key)` – odstranění dvojice podle klíče.
    - `containsKey(key)` – ověření existence klíče.

!!! info "Implementace tabulky"

    - **Hašovací tabulka** (*HashMap*): Klíč se zahašuje na index do pole. Při kolizi (dva klíče se zahashují na stejný index) se použije spojový seznam (*separate chaining*) nebo otevřená adresace. Složitost v průměru $O(1)$.
    - **Binární vyhledávací strom** (*TreeMap*): Dvojice jsou uložené v BST seřazeném podle klíčů – operace v $O(\log n)$.
    - **Trie**: Stromová struktura, kde klíč je rozložen po znacích – efektivní pro řetězcové klíče (prefixové vyhledávání, autocomplete).
