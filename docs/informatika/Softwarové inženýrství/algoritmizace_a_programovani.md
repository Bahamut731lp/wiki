# Algoritmizace a programování

## Úvod

Algoritmus je postup k řešení nějakého problému. Vzniká procesem algoritmizace, který problém zformuluje, analyzuje, navrhne řešení a implementuje ho. Program je konkrétní implementace algoritmu pomocí programovacího jazyka.

!!! abstract "Vlastnosti algoritmů"
    Algoritmy musí splňovat následující podmínky:

    1. **Jednoznačnost** – Je zaručeno, že při zadání stejných vstupních hodnot vždy dostanu stejné výsledky.
    2. **Konečnost** – Proběhne v konečném počtu kroků a vždy vede k nějakému výsledku.
    3. **Obecnost** – Řeší určitou sadu problémů, které se liší akorát vstupem.
    4. **Srozumitelnost** – Algoritmus by měl být srozumitelný i pro ostatní.
    5. **Korektnost** – Algoritmus by měl dát pro správná vstupní data správný výsledek.

!!! abstract "Postup algoritmizace"
    Algoritmizace se běžně děje v **pěti krocích**:

    1. **Formulace problému** – Ze zadání se vytvoří konkrétní požadavky, určí se vstupy a výstupy, s čím vším bude program pracovat či komunikovat.
    2. **Analýza problému** – Popřemýšlíme nad tím, jakými způsoby bychom mohli náš problém vyřešit.
    3. **Návrh řešení** – Vybereme si nějaké řešení a rozvrhneme si, jak ho uděláme ve vybraném programovacím jazyce pomocí dostupných nástrojů.
    4. **Realizace řešení** – Začneme zapisovat algoritmus, např. pomocí programovacího jazyka.
    5. **Ladění řešení** – Algoritmus otestujeme, zda funguje pro různé vstupy a jestli nenastanou nějaké případy, ve kterých by selhal či se nechoval podle našich představ.

## Programátorské konstrukce

### Proměnná

Proměnná je pojmenované místo v paměti, ve kterém jsou uložena nějaká data. Je to základní stavební kámen každého programu – umožňuje uchovávat a později číst hodnoty, se kterými program pracuje.

!!! info "Klíčové vlastnosti proměnné"

    - **Jméno (identifikátor)** – jednoznačně identifikuje proměnnou v rámci jejího rozsahu platnosti (*scope*).
    - **Datový typ** – určuje, jaké hodnoty může proměnná uchovávat a jaké operace s ní lze provádět (celé číslo, desetinné číslo, znak, řetězec, boolean…).
    - **Hodnota** – aktuální obsah proměnné, který se může v průběhu programu měnit.
    - **Adresa v paměti** – fyzické umístění, kde je hodnota uložena.

!!! info "Konstanty"

    Proměnné mohou být i neměnné – v tom případě se nazývají **konstanty**. Konstanta je proměnná, jejíž hodnota je nastavena jednou (typicky při deklaraci) a poté ji už nelze změnit. V Javě se pro konstanty používá klíčové slovo `final`:

    ```java
    final double PI = 3.14159;
    final int MAX_POCET = 100;
    ```

### Větvení programu

Větvení umožňuje programu rozhodovat se – vykonat různé bloky kódu podle toho, zda je splněna určitá podmínka.

#### Podmíněné větvení (if-else)

Základní mechanismus – program vyhodnotí podmínku (výraz typu `boolean`) a podle výsledku se vydá jednou ze dvou (nebo více) větví. V Javě jsou k tomu vyhrazena klíčová slova `if`, `else if` a `else`.

```java
// Jednoduché větvení
if (vek >= 18) {
    System.out.println("Jsi plnoletý.");
}

// Úplné větvení s více cestami
if (teplota > 30) {
    System.out.println("Vedro.");
} else if (teplota > 20) {
    System.out.println("Příjemně.");
} else if (teplota > 0) {
    System.out.println("Chladno.");
} else {
    System.out.println("Mráz.");
}
```

!!! info "Vyhodnocování podmínek"

    - Podmínky se vyhodnocují **shora dolů** – první splněná podmínka vyhraje, ostatní se přeskočí.
    - Blok `else` je nepovinný – pokud chybí a žádná podmínka není splněna, nic se neprovede.
    - Složené podmínky se spojují logickými operátory: `&&` (AND), `||` (OR), `!` (NOT).

#### Switch

Konstrukce `switch` slouží k větvení podle hodnoty jedné proměnné (typy `int`, `char`, `String`, `enum`). Je přehlednější než řetězec `if-else if` při porovnávání proti mnoha konkrétním hodnotám.

```java
switch (denVTydnu) {
    case 1:
        System.out.println("Pondělí");
        break;
    case 2:
        System.out.println("Úterý");
        break;
    case 6:
    case 7:
        System.out.println("Víkend!");
        break;
    default:
        System.out.println("Neplatný den");
}
```

!!! warning "Nezapomeň na break"

    Bez `break` provádění **propadne** (*fall-through*) do dalšího case – to může být chyba, nebo záměr (jako `case 6` a `case 7` výše).

#### Ternární operátor

Ternární operátor `? :` je zkrácený zápis pro jednoduché `if-else`, který vrací hodnotu. Hodí se pro přiřazení nebo vložení podmínky dovnitř výrazu.

```java
// Místo:
String status;
if (vek >= 18) {
    status = "plnoletý";
} else {
    status = "neplnoletý";
}

// Lze napsat:
String status = (vek >= 18) ? "plnoletý" : "neplnoletý";
```

### Cykly

Cykly umožňují opakované vykonávání bloku kódu, dokud platí určitá podmínka. Jsou základním nástrojem pro zpracování kolekcí, iterativní výpočty a řízení toku programu.

!!! abstract "Kdy použít který cyklus"

    - **For-loop** – když předem víme, kolikrát se má cyklus provést (pevný počet iterací).
    - **While-loop** – když nevíme počet iterací předem, ale známe podmínku, za které má cyklus běžet.
    - **Do-while-loop** – když chceme, aby se tělo cyklu provedlo alespoň jednou, bez ohledu na podmínku.

#### For-loop

Cyklus s pevným počtem iterací. Skládá se ze tří částí: inicializace, podmínka pokračování a krok po každé iteraci.

```java
// for (inicializace; podmínka; krok)
for (int i = 0; i < 10; i++) {
    System.out.println("Iterace č. " + i);
}
```

#### While-loop

Cyklus, který se opakuje, dokud je podmínka pravdivá. Podmínka se testuje **před** každou iterací – pokud není splněna hned na začátku, tělo se neprovede ani jednou.

```java
int i = 0;
while (i < 10) {
    System.out.println("Iterace č. " + i);
    i++;
}
```

#### Do-while-loop

Obdoba while, ale podmínka se testuje **až po** provedení těla. Tělo se tedy provede vždy alespoň jednou.

```java
int i = 0;
do {
    System.out.println("Iterace č. " + i);
    i++;
} while (i < 10);
```

### Členění programu

S rostoucí složitostí programu je nutné kód organizovat do logických celků – funkcí, tříd, balíků. To zlepšuje čitelnost, znovupoužitelnost a udržovatelnost.

#### Funkce

Funkce je pojmenovaný blok kódu, který přijímá parametry, provádí výpočet a vrací výsledek. Základní jednotka dekompozice v procedurálním programování.

```java
// Funkce, která sečte dvě čísla a vrátí výsledek
static int secti(int a, int b) {
    return a + b;
}
```

#### Procedury

Procedura je speciální případ funkce, která **nevrací žádnou hodnotu** (v Javě `void`). Používá se, když potřebujeme vykonat akci, ale neočekáváme výsledek – např. vypsání do konzole, zápis do souboru.

```java
// Procedura – nic nevrací, jen provede akci
static void pozdrav(String jmeno) {
    System.out.println("Ahoj, " + jmeno + "!");
}
```

#### Metody

Metoda je označení pro funkci nebo proceduru, která patří k nějaké třídě nebo objektu. V objektovém programování jsou všechny funkce a procedury metodami.

```java
public class Kalkulacka {
    // Metoda – funkce uvnitř třídy
    public int secti(int a, int b) {
        return a + b;
    }
}
```

#### Třída

Třída je struktura, která definuje, jaké budou mít její instance **data** (atributy) a **chování** (metody). Je to šablona, podle které se vytvářejí objekty.

V Javě je na třídy vyhrazené klíčové slovo `class`. Každá veřejná třída je definována v odděleném souboru, jehož název se shoduje s názvem třídy. Každý program musí mít alespoň jednu třídu, a alespoň jedna musí mít definovaný **vstupní bod programu** – metodu `main`:

```java
public class MojeTrida {
    // Vstupní bod programu
    public static void main(String[] args) {
        System.out.println("Program spuštěn!");
    }
}
```

!!! info "Význam klíčových slov u main metody"

    - `public` – modifikátor přístupu, metoda je veřejná (musí být, aby ji JVM mohlo zavolat).
    - `static` – metoda patří třídě, ne instanci (JVM ji volá před vytvořením jakéhokoliv objektu).
    - `void` – metoda nevrací žádnou hodnotu.
    - `String[] args` – pole argumentů příkazové řádky předaných při spuštění programu.

#### Objekt

Objekt (instance třídy) je konkrétní exemplář vytvořený podle šablony (třídy). Každý objekt má vlastní kopii atributů definovaných třídou.

```java
Kalkulacka k = new Kalkulacka();  // vytvoření objektu (instance)
int vysledek = k.secti(5, 3);      // volání metody na objektu
```

#### Balíky

Balíky (packages) slouží k organizaci většího množství tříd do logických skupin – podobně jako složky v souborovém systému. Zabranují kolizím jmen a pomáhají s modularitou.

```java
package cz.example.aplikace.util;

public class PomocnaTrida {
    // ...
}
```

!!! info "Importování balíků"
    Pro použití třídy z jiného balíku je potřeba ji naimportovat:
    ```java
    import java.util.ArrayList;
    import java.util.List;
    ```

## Programovací paradigmata

### Strukturované programování

Strukturované programování je paradigma, které odmítá nekontrolované skoky (`goto`) a staví na třech základních řídících strukturách:

- **Sekvence** – příkazy se vykonávají jeden po druhém.
- **Větvení** – `if`, `else`, `switch` – rozhodování na základě podmínek.
- **Cykly** – `for`, `while`, `do-while` – opakování bloků kódu.

Program se rozkládá na funkce a procedury, které volají jedna druhou. Hlavní myšlenkou je, že každý blok kódu má **jeden vstupní a jeden výstupní bod** – to usnadňuje analýzu, ladění a testování.

### Objektové programování

Objektově orientované paradigma je způsob nahlížení na softwarový systém jako na kolekci autonomních, vzájemně komunikujících entit (objektů), namísto sekvence příkazů nebo procedur. Tento přístup vychází z přirozeného lidského vnímání reality, kdy složité systémy dekomponujeme na menší, uchopitelné části s jasně definovanou zodpovědností.

!!! abstract "Vlastnosti objektového paradigmatu"

    - **Abstrakce**: Schopnost potlačit nepodstatné detaily implementace a vyzdvihnout pouze ty vlastnosti a chování objektu, které jsou klíčové pro jeho roli v daném kontextu.
    - **Zapouzdření** (*Encapsulation*): Skrytí vnitřního stavu (dat) objektu před vnějším světem. Přístup k datům a jejich modifikace jsou umožněny výhradně přes striktně definované veřejné rozhraní (metody). Tím je garantována konzistence stavu objektu.
    - **Dědičnost** (*Inheritance*): Mechanismus umožňující vytvářet nové třídy na základě tříd stávajících. Nová třída přebírá atributy a metody rodičovské třídy, přičemž je může rozšiřovat nebo modifikovat. Podporuje znovupoužitelnost kódu a vytváření hierarchií.
    - **Polymorfismus** (*Mnohotvárnost*): Schopnost různých objektů reagovat na stejné metodické volání specifickým způsobem. Umožňuje přistupovat k objektům různých tříd jednotným způsobem skrze společné rozhraní nebo nadřazenou třídu.

### Funkcionální programování

Funkcionální programování je deklarativní programovací paradigma, které staví na matematické teorii funkcí (konkrétně na $\lambda$-kalkulu). Na rozdíl od imperativního programování, kde program popisuje *jak* se má výpočet provést pomocí změn stavů a sekvencí příkazů, funkcionální programování popisuje *co* je výsledkem výpočtu pomocí skládání výrazů a funkcí.

!!! info "Čisté funkce"
    Čistá funkce je základní stavební jednotkou funkcionálního programu. Aby byla funkce považována za čistou, musí striktně splňovat dvě matematické podmínky:

    - **Determinismus**: Funkce pro stejné vstupní argumenty vrací vždy stejný výsledek. Výstup závisí výhradně na předaných parametrech, nikoliv na externím stavu (např. globálních proměnných, systémovém času nebo stavu databáze).
    - **Absence vedlejších účinků** (*Side Effects*): Vyhodnocení funkce nijak nemění stav okolního prostředí. Funkce nesmí modifikovat globální proměnné, měnit hodnoty argumentů předaných odkazem, zapisovat do souborů, vypisovat do konzole ani vyvolávat výjimky.

!!! tip "Funkce jako hodnota 1. třídy"
    Tato vlastnost říká, že programovací jazyk sémanticky zachází s funkcemi úplně stejně jako s jakýmikoliv jinými datovými typy (např. s čísly nebo řetězci). S funkcí jako s hodnotou první třídy lze provádět tři klíčové operace:

    - Přiřazení do proměnné nebo uložení do datové struktury (pole, objektu).
    - Předání jako argumentu jiné funkci.
    - Navrácení jako výsledku z jiné funkce.

    S tímto konceptem úzce souvisí pojem **Funkce vyššího řádu** (*Higher-Order Functions*). To jsou funkce, které buď přijímají jinou funkci jako parametr, nebo funkci vrací jako svůj výstup (typicky operace jako `map`, `filter`, `reduce`).

!!! tip "Náhrada cyklu rekurzí"
    Ve striktně funkcionálním programování neexistují klasické imperativní cykly (`for`, `while`). Tyto cykly jsou totiž z principu závislé na měnitelném stavu – potřebují iterační proměnnou (např. `let i = 0`), která se s každým krokem modifikuje (`i++`), což porušuje pravidlo neměnnosti dat (*immutability*). Jakákoliv iterace se proto ve funkcionálním paradigmatu řeší pomocí rekurze – tedy stavu, kdy funkce volá samu sebe s upravenými parametry, dokud nedosáhne ukončovací podmínky (báze rekurze).

## Složitost algoritmu

Složitost je charakteristika algoritmu, která měří časové nebo paměťové nároky algoritmu v závislosti na velikosti vstupních dat. Jedná se o způsob kvantifikace, jak efektivně algoritmus pracuje s různě velkými vstupy.

### Asymptotická složitost

Asymptotická složitost je charakteristika algoritmu vyjádřená jako rostoucí funkce. Říká nám, jak rychle se zvyšuje počet potřebných operací se zvětšujícím se množstvím vstupních dat.

!!! quote "Asymptotické složitosti algoritmů"
    Čím pomaleji křivka roste, tím je algoritmus rychlejší.

    ![Asymptotická složitost](../images/bigo.png)

!!! info "Třídy asymptotické složitosti (od nejlepší po nejhorší)"
    | Značení | Název | Příklad |
    |:--:|:--|:--|
    | $O(1)$ | Konstantní | Přístup do pole podle indexu |
    | $O(\log n)$ | Logaritmická | Binární vyhledávání |
    | $O(n)$ | Lineární | Lineární vyhledávání, průchod polem |
    | $O(n \log n)$ | Linearitmická | Efektivní třídění (Mergesort, Quicksort) |
    | $O(n^2)$ | Kvadratická | Bubblesort, porovnání každého s každým |
    | $O(2^n)$ | Exponenciální | Hrubá síla, rekurzivní Fibonacci |
    | $O(n!)$ | Faktoriálová | Problém obchodního cestujícího hrubou silou |

### Amortizovaná složitost

Amortizovaná složitost je časová složitost, která je **průměrem nejhorších případů v řadě**. Amortizace je proces, kdy nejhorší případ asymptotické složitosti ztrácí na důležitosti, protože nastává zřídka v sadě dalších případů.

!!! example "Příklad: Dynamické pole (ArrayList)"
    Když do ArrayListu vkládáme prvek a pole je plné, musí se alokovat nové, větší pole (typicky 2×) a všechny prvky překopírovat – to je $O(n)$ operace. Ale to se stane jen občas. Většina vkládání proběhne v $O(1)$. Amortizovaná složitost vložení prvku je proto $O(1)$.

## Vyhledávání

Vyhledávací algoritmy slouží k nalezení prvku s daným klíčem v prohledávaném prostoru (pole, seznam, strom). Efektivita vyhledávání zásadně závisí na tom, zda je prostor seřazený.

### Lineární vyhledávání

Lineární vyhledávání je nejjednodušší vyhledávací algoritmus – prochází prohledávaný prostor prvek po prvku, dokud nenalezne hledaný klíč nebo nedojde na konec.

- **Složitost**: $O(n)$ v nejhorším i průměrném případě.
- **Výhody**: Funguje na neseřazených datech, triviální implementace.
- **Nevýhody**: Pomalé pro velká data.

### Binární vyhledávání

Binární vyhledávání používá metodu půlení intervalu k nalezení hledaného klíče. V každém kroku porovná hledanou hodnotu s prostředním prvkem a podle výsledku zahodí polovinu prohledávaného prostoru.

!!! warning "Podmínka"
    Pro binární vyhledávání musí být prohledávaný prostor **seřazený**.

- **Složitost**: $O(\log n)$.
- **Princip**: Porovnej prostřední prvek, pokud je menší než hledaný → hledej v pravé polovině, pokud větší → hledej v levé polovině, pokud rovný → nalezeno.

### Interpolační vyhledávání

Interpolační vyhledávání je varianta binárního vyhledávání, která se snaží simulovat lidské chování – místo půlení intervalu odhaduje pozici hledaného prvku na základě hodnot. Když hledáme "K" ve slovníku, neotevřeme ho uprostřed, ale někde ke konci.

Odhad pozice se počítá podle vzorce:

$$\text{pozice} = \text{low} + \frac{(\text{high} - \text{low})(k - a[\text{low}])}{a[\text{high}] - a[\text{low}]}$$

- **Složitost**: $O(\log \log n)$ pro rovnoměrně rozložená data, $O(n)$ v nejhorším případě (např. exponenciálně rostoucí data).
- **Výhody**: Rychlejší než binární vyhledávání na rovnoměrně rozložených datech.

### Binární vyhledávací strom

Binární vyhledávací strom (BST) je datová struktura, ve které pro každý uzel platí:

- Všechny uzly v levém podstromu mají hodnotu **menší** než kořen.
- Všechny uzly v pravém podstromu mají hodnotu **větší** než kořen.

!!! info "Operace v BST"
    **Vkládání**: Začni v kořeni a porovnávej – pokud je vkládaná hodnota menší, jdi doleva, pokud větší, doprava. Opakuj, dokud nenajdeš volné místo (list).

    **Hledání**: Stejný princip jako vkládání – porovnávej a postupuj stromem. Pokud narazíš na hledanou hodnotu, vrať ji. Pokud dojdeš na `null`, prvek tam není.

    **Mazání**: Tři situace:

    1. Mazaný uzel nemá potomky – prostě ho smaž.
    2. Mazaný uzel má jednoho potomka – nahraď ho tímto potomkem.
    3. Mazaný uzel má dva potomky – najdi nejmenší prvek v pravém podstromu (in-order následníka), přepiš jeho hodnotu do mazaného uzlu a následníka smaž.

- **Složitost**: $O(h)$, kde $h$ je výška stromu. V nejhorším případě (degenerovaný strom) $O(n)$.

### AVL Stromy

AVL strom je **výškově vyvážený binární vyhledávací strom**, který každému uzlu přiřazuje **faktor vyváženosti**:

$$\text{bal}(u) = h_L - h_R$$

kde $h_L$ je výška levého podstromu a $h_R$ výška pravého podstromu. Pro všechny uzly vyváženého AVL stromu platí, že $\text{bal}(u) \in \{-1, 0, 1\}$.

!!! info "Rotace"
    Pokud po vložení nebo smazání klesne faktor vyváženosti mimo povolený rozsah ($-1, 0, 1$), strom se **rotací** znovu vyváží:

    - **Levá rotace (LL)**: Pravý podstrom je těžší → otoč doleva.
    - **Pravá rotace (RR)**: Levý podstrom je těžší → otoč doprava.
    - **LR rotace**: Levý podstrom, ale pravý vnuk → nejdřív levá na vnuka, pak pravá.
    - **RL rotace**: Pravý podstrom, ale levý vnuk → nejdřív pravá na vnuka, pak levá.

- **Složitost**: Garantovaná výška $O(\log n)$, operace vkládání, mazání i hledání v $O(\log n)$.

### Hledání do hloubky (DFS)

Depth-First Search (DFS) prochází graf nebo strom tak, že jde **co nejhlouběji**, dokud nenarazí na konec větve, a pak se vrací (*backtrackuje*) a zkouší další cesty.

!!! info "Tři varianty průchodu stromem"

    - **Pre-order**: Navštiv kořen → levý podstrom → pravý podstrom.
    - **In-order**: Navštiv levý podstrom → kořen → pravý podstrom. (V BST vrátí prvky seřazené.)
    - **Post-order**: Navštiv levý podstrom → pravý podstrom → kořen.

- **Implementace**: Rekurzivně (přirozené) nebo iterativně pomocí zásobníku.
- **Složitost**: $O(V + E)$ kde $V$ je počet vrcholů a $E$ počet hran.
- **Použití**: Detekce cyklů, topologické řazení, řešení bludišť, generování permutací.

### Hledání do šířky (BFS)

Breadth-First Search (BFS) prochází graf po **vrstvách** – nejdříve navštíví všechny uzly ve vzdálenosti 1 od startu, pak vzdálenost 2, a tak dál. Používá frontu (FIFO).

- **Implementace**: Iterativně pomocí fronty.
- **Složitost**: $O(V + E)$.
- **Použití**: Hledání nejkratší cesty v neohodnoceném grafu, procházení sociálních sítí podle stupně vzdálenosti, web crawling.

!!! info "DFS vs. BFS"
    | Vlastnost | DFS | BFS |
    |:--|:--|:--|
    | Datová struktura | Zásobník (LIFO) – rekurze nebo explicitní | Fronta (FIFO) |
    | Paměť | $O(h)$ – výška stromu | $O(w)$ – šířka na nejširší vrstvě |
    | Cesta | Nejkratší negarantuje | Garantuje nejkratší (v neohodnoceném grafu) |
    | Vhodné pro | Hluboké grafy, backtracking | Mělké grafy, nejkratší cesta |

## Prohledávání řetězců

Prohledávání řetězců je úloha najít všechny výskyty hledaného vzoru v delším textu. Naivní přístup testuje každou pozici – chytřejší algoritmy využívají předzpracování vzoru nebo textu k přeskočení zbytečných porovnání.

### Přirozené prohledávání

Nejjednodušší algoritmus – pro každou pozici v textu testuje, zda na ní nezačíná hledaný vzor. Porovnává znak po znaku, dokud nenarazí na neshodu nebo nedojde na konec vzoru.

- **Složitost**: $O(n \cdot m)$ v nejhorším případě, kde $n$ je délka textu a $m$ délka vzoru.
- **Výhody**: Triviální implementace, žádné předzpracování.
- **Nevýhody**: Pomalé pro velké texty a vzory s opakujícími se prefixy.

### Knuth-Morris-Pratt (KMP)

KMP algoritmus staví na přirozeném prohledávání, ale přidává **chytré řízení posunu**. Když dojde k neshodě, KMP neposune vzor jen o 1, ale o tolik pozic, kolik umožňuje struktura samotného vzoru – využívá toho, že část vzoru již byla porovnána úspěšně.

Klíčem je **chybová funkce** (*failure function*) $F(k)$, která pro každou pozici $k$ ve vzoru udává délku nejdelšího prefixu vzoru $P[0:k]$, který je zároveň jeho suffixem. Tato funkce se spočítá předem (preprocessing).

- **Složitost**: $O(n + m)$ – lineární v délce textu i vzoru.
- **Výhody**: Žádné couvání v textu, lineární složitost.

### Boyer-Moore

Boyer-Moore je algoritmus, který stojí na myšlence **zrcadlového hledání** – porovnává vzor **od konce**, nikoliv od začátku. Díky tomu může při neshodě poskočit o více pozic najednou.

!!! info "Tři situace při neshodě"

    1. **Vzor obsahuje hledané písmeno**: Posuneme vzor tak, aby se poslední výskyt hledaného písmena ve vzoru dostal naproti výskytu v textu.
    2. **Vzor obsahuje hledané písmeno, ale posun není možný**: Posuneme vzor o jeden znak.
    3. **Vzor neobsahuje hledané písmeno**: Posuneme vzor tak, aby začínal až na dalším znaku za neshodou. Toto je nejlepší případ – posun o celý vzor.

Posuny se určují předem pomocí **mapy abecedy** – pro každý znak si zapamatujeme index jeho posledního výskytu ve vzoru (nebo $-1$, pokud se nevyskytuje).

- **Složitost**: $O(n \cdot m)$ v nejhorším, $O(n/m)$ v nejlepším případě. V praxi typicky sublineární – rychlejší než KMP.
- **Výhody**: Na dlouhých vzorech a velkých abecedách extrémně rychlý.

### Rabin-Karp

Rabin-Karp algoritmus porovnává **hash** vzoru a jednotlivých podřetězců textu. Místo porovnávání znak po znaku porovná čísla (hashe). Pokud se hashe shodují, teprve pak se ověří znak po znaku (kvůli možným kolizím hashovací funkce).

Klíčem je **rolling hash** – hashovací funkce, která umožňuje z hashe jednoho podřetězce rychle spočítat hash následujícího posunutého podřetězce (odečtením prvního znaku a přičtením nového), typicky v $O(1)$.

- **Složitost**: $O(n + m)$ v průměru, $O(n \cdot m)$ v nejhorším (samé kolize).
- **Výhody**: Snadné rozšíření na hledání více vzorů najednou, detekce plagiátů.

## Třídění

Třídící algoritmy uspořádávají prvky posloupnosti podle zvoleného klíče. Liší se rychlostí, paměťovou náročností, stabilitou a chováním na různých typech vstupních dat.

### Vlastnosti třídících algoritmů

#### Stabilita

Stabilita třídícího algoritmu popisuje, jak se zachová při řazení prvků se stejnou hodnotou či klíčem.

!!! quote "Pokud je vzájemné pořadí prvků se stejným klíčem"

    - **Zachováno**, je algoritmus **stabilní**.
    - **Nelze zaručit**, je algoritmus **nestabilní**.

!!! tip "Zajištění stability"
    Většinu nestabilních algoritmů lze pomocí pomocných datových struktur předělat na stabilní (např. přidáním původního indexu jako sekundárního klíče).

#### Přirozenost

Přirozenost třídícího algoritmu nám říká, jak se algoritmus chová na již (alespoň částečně) uspořádaných datech.

!!! quote "Pokud je algoritmus na (alespoň částečně) seřazených datech"

    - **Rychlejší**, je algoritmus **přirozený**.
    - **Stejně rychlý** jako na náhodně seřazených, je **nepřirozený**.

### Bubblesort

Bubblesort je vnitřní, stabilní a přirozený algoritmus, který **probublává** větší prvky na konec posloupnosti.

!!! info "Princip Bubblesortu"

    1. Porovnej dva sousední prvky.
    2. Prohoď je tak, aby byly správně seřazeny (menší vlevo, větší vpravo).
    3. Opakuj pro všechny dvojice, dokud není celá posloupnost seřazená.

- **Složitost**: $O(n^2)$ v nejhorším i průměrném, $O(n)$ na seřazených datech (díky přirozenosti).
- **Výhody**: Jednoduchý, detekuje už seřazená data.
- **Nevýhody**: Pomalý – nepoužitelný pro větší data.

### Shakersort

Shakersort (též *Cocktail sort*) je vylepšená varianta Bubblesortu, která řadí posloupnost v **obou směrech**. Nejdříve probublá největší prvky na konec (dopředný průchod), a následně probublá nejmenší prvky na začátek (zpětný průchod).

Tímto se dá předejít problému *želv a zajíců* – malé prvky na konci pole (želvy) se v klasickém Bubblesortu posouvají jen o jednu pozici za průchod, zatímco Shakersort je posune rychleji při zpětném průchodu.

### Combsort

Combsort je vylepšená varianta Bubblesortu, která používá **snižující se rozestup** (*gap*) mezi porovnávanými prvky. Začíná s velkým rozestupem (typicky délka pole), který se postupně zmenšuje, až dosáhne $1$ (poslední průchod je klasický Bubblesort).

!!! tip "Ideální faktor zmenšování"
    Ideální faktor pro zmenšování rozestupu je $1.3$ (délka pole dělena $1.3$). Tomu se říká *shrink factor*.

- **Složitost**: $O(n^2)$ v nejhorším, $O(n \log n)$ v průměru.

### Selectsort

Selectsort je vnitřní, nestabilní a nepřirozený algoritmus, který pracuje na bázi hledání nejmenšího prvku.

!!! info "Princip Selectsortu"

    1. Najdi **nejmenší** prvek v nesetříděné části.
    2. Přesuň ho na konec setřízené části (prohoď s prvkem na aktuální pozici).
    3. Opakuj, dokud není celý vstup setřízený.

- **Složitost**: $O(n^2)$ vždy (i na seřazených datech – nepřirozený).
- **Výhody**: Jednoduchý, minimální počet prohození ($n-1$).
- **Nevýhody**: Pomalý, nestabilní.

### Insertsort

Insertsort je vnitřní, stabilní a přirozený algoritmus, který imituje přirozené řazení karet člověkem.

!!! info "Princip Insertsortu"

    1. Začni s prvním prvkem (ten je triviálně seřazený).
    2. Vezmi další prvek a zařaď ho na správné místo do již seřazené části.
    3. Opakuj, dokud není celé pole seřazeno.

- **Složitost**: $O(n^2)$ v nejhorším, $O(n)$ na seřazených datech.
- **Výhody**: Rychlý na malých a téměř seřazených datech, stabilní, online (může třídit data, jak přicházejí).
- **Použití**: Součást hybridních algoritmů (např. Timsort – v Javě a Pythonu), kde se používá pro malé podposloupnosti.

### Mergesort

Mergesort je třídící algoritmus typu **Divide and Conquer** (rozděl a panuj). Je vnitřní, stabilní a přirozený.

!!! info "Princip Mergesortu"

    1. Rozděl posloupnost na dvě přibližně stejně velké podposloupnosti.
    2. Rekurzivně je seřaď.
    3. Seřazené podposloupnosti sluč (*merge*) dohromady – porovnávej první prvky obou a ten menší přesuň do výsledku.

- **Složitost**: $O(n \log n)$ vždy (nejhorší, průměrný i nejlepší případ).
- **Výhody**: Garantovaná složitost $O(n \log n)$, stabilní, vhodný pro spojové seznamy.
- **Nevýhody**: Vyžaduje pomocnou paměť $O(n)$ (není in-place).

### Quicksort

Quicksort je třídící algoritmus typu **Divide and Conquer**. Je vnitřní, nestabilní a nepřirozený, ovšem v praxi je **nejrychlejší ze všech obecných třídících algoritmů**.

!!! info "Princip Quicksortu"

    1. Zvol **dělící prvek** (*pivot*).
    2. Přeuspořádej pole tak, že nalevo od pivotu jsou prvky menší a napravo větší (*partitioning*).
    3. Rekurzivně seřaď levou a pravou podposloupnost.

- **Složitost**: $O(n \log n)$ v průměru, $O(n^2)$ v nejhorším (při špatné volbě pivotu – např. vždy nejmenší/největší prvek).
- **Výhody**: Extrémně rychlý v praxi, in-place (nepotřebuje pomocnou paměť).
- **Nevýhody**: Nestabilní, $O(n^2)$ při nevhodné volbě pivotu (řeší se randomizací nebo *median-of-three*).

### Heapsort

Heapsort je třídící algoritmus, který používá datovou strukturu **halda** (*heap*).

!!! info "Princip Heapsortu"

    1. Ze vstupních dat sestav **max-haldu** (každý rodič je větší než jeho potomci).
    2. Vezmi kořen haldy (největší prvek) a prohoď ho s posledním prvkem.
    3. Zmenši haldu o 1 (poslední prvek už je seřazený) a obnov vlastnost haldy.
    4. Opakuj, dokud není halda prázdná.

- **Složitost**: $O(n \log n)$ vždy – garantovaná.
- **Výhody**: In-place, garantovaná složitost, nepotřebuje rekurzi.
- **Nevýhody**: Nestabilní, v praxi pomalejší než Quicksort (horší lokalita cache).

### Bogosort

Bogosort je třídící algoritmus, který ke setřízení dat spoléhá na opakování **náhodného rozmístění** prvků, dokud se netrefí do seřazené permutace.

```javascript
function bogosort(array) {
    while (!isOrdered(array)) {
        shuffle(array);
    }
}
```

!!! bug "Že se o tom vůbec učíme"
    Tenhle algoritmus byl vymyšlený jako **vtip** a reálně nikde není použitý, ani by to nikoho normálního nenapadlo použít.

- **Složitost**: $O(\infty)$ v nejhorším, $O(n \cdot n!)$ v průměru (počet permutací krát kontrola seřazenosti).

## Rekurze

Rekurze je princip, který umožňuje funkci volat samu sebe. Tento přístup je často elegantní a intuitivní, zejména pokud je problém definován rekurzivně. Funkce může volat sebe buď přímo (přímá rekurze), nebo nepřímo přes jinou funkci (nepřímá rekurze).

!!! warning "Podmínky rekurze"

    - Algoritmus má **ukončovací podmínku** (bázi rekurze).
    - V každém kroku rekurze proběhne **zjednodušení problému** (přiblížení k bázi).
    - Test ukončovací podmínky proběhne **před dalším voláním funkce**.

!!! example "Klasický příklad: Faktoriál"
    ```java
    static int faktorial(int n) {
        if (n <= 1) return 1;              // báze rekurze
        return n * faktorial(n - 1);       // rekurzivní krok
    }
    ```

Rekurze může být náročná na paměť, protože každé volání funkce se ukládá na zásobník. Pokud není správně implementována podmínka ukončení, může rekurze pokračovat nekonečně, což vede k vyčerpání zásobníku (*stack overflow*).

!!! danger "Kdy není vhodné použít rekurzi"

    - Máme k dispozici iterativní algoritmus se stejnou složitostí.
    - Rekurzivní varianta se chová nestabilně.
    - Počet volání roste rychleji než lineárně.

!!! tip "Tabulace (memoizace) rekurze"
    Neefektivitu rekurze lze vyřešit tabulací – ukládáním mezivýsledků do paměti. Při dalším volání se stejnými parametry se výsledek jen přečte, místo aby se znovu počítal. Klasický příklad je Fibonacciho posloupnost, kde čistá rekurze počítá stejné hodnoty opakovaně, ale s memoizací běží v lineárním čase.

### Backtracking

Backtracking je metoda pro vytváření algoritmů, která **hrubou silou** prohledává prostor všech možných řešení, ale inteligentně se vrací (*backtrackuje*) ve chvíli, kdy narazí na slepou větev – tedy na částečné řešení, které už nemůže vést k platnému výsledku.

Pomocí rekurze vytváří strom, kde každá větev reprezentuje rozhodnutí o jedné proměnné a každá úroveň reprezentuje částečné řešení. Backtracking lze použít pro nalezení:

- **Libovolného řešení** – stačí nám cokoliv, co splňuje podmínky.
- **Nejlepšího řešení** – hledáme optimum podle nějakého kritéria.
- **Všech možných řešení** – potřebujeme kompletní výčet.

!!! example "Problém osmi dam"
    Na šachovnici $8 \times 8$ umísti 8 dam tak, aby se žádné dvě navzájem neohrožovaly (nesmí sdílet řádek, sloupec ani diagonálu). Backtracking zkouší umisťovat dámy řádek po řádku – pokud na dalším řádku není žádné volné pole, vrátí se o krok zpět a zkusí jinou pozici.

!!! example "Problém sousedících barev"
    Na ploše $n \times m$ je rozmístěno $x$ bodů, každý s unikátními souřadnicemi a přiřazenou barvou. Úkolem je najít takové přiřazení barev, aby žádné dva sousedící body neměly stejnou barvu. Backtracking systematicky zkouší barvy a při konfliktu se vrací.
