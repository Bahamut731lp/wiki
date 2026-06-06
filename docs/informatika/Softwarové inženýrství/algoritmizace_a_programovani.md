# Algoritmizace a programování

## Úvod
Algoritmus je je postup k řešení nějakého problému. Vzniká procesem algoritmizace, který problém zformuluje, analyzuje, navrhne řešení a implementuje ho. Program je konkrétní implementace algoritmu pomocí programovacího jazyka.

!!! abstract "Vlastnosti algoritmů"
    Algoritmy musí splňovat následující podmínky:

    1. **Jednoznačnost** - Je zaručeno, že při zadání stejných vstupních hodnot vždy dostanu stejné výsledky.
    2. **Konečnost** - Proběhne v konečném počtu kroků a vždy vede k nějakému výsledku.
    3. **Obecnost** - Řeší určitou sadu problémů, které se liší akorát vstupem.
    4. **Srozumitelnost** - Algoritmus by měl být **srozumitelný i pro ostatní**
    5. **Korektnost** - Algoritmus by měl dát pro správná vstupní data správný výsledek.

!!! abstract "Postup algoritmizace"
    Algoritmizace se běžně dějě v **pěti krocích**

    1. **Formulace problému** - Ze zadání se vytvoří konkrétní požadavky, určí se vstupy a výstupy, s čím vším bude program pracovat či komunikovat, ...
    2. **Analýza problému** - Popřemýšlíme nad tím, jakými způsoby bychom mohli náš problém vyřešit
    3. **Návrh řešení** - Vybere si nějaké řešení a rozvrhneme si, jak ho uděláme ve vybraném programovacím jazyce pomocí dostupných nástrojů
    4. **Realizace řešení** - Začneme zapisovat algoritmus, např. pomocí programovacího jazyka.
    5. **Ladění řešení** - Algoritmus otestujeme, zda funguje pro různé vstupy a jestli nenastanou nějaké případy, ve kterých by selhal či se nechoval podle našich představ.

## ...

## Programovací paradigmata

### Strukturované programování

### Objektové programování
Objektově orientované paradigma je způsob nahlížení na softwarový systém jako na kolekci autonomních, vzájemně komunikujících entit (objektů), namísto sekvence příkazů nebo procedur. Tento přístup vychází z přirozeného lidského vnímání reality, kdy složité systémy dekomponujeme na menší, uchopitelné části s jasně definovanou zodpovědností.

!!! abstract "Vlastnosti objektového paradigmatu"
    - __Abstrakce__: Schopnost potlačit nepodstatné detaily implementace a vyzdvihnout pouze ty vlastnosti a chování objektu, které jsou klíčové pro jeho roli v daném kontextu.
    - __Zapouzdření__ (Encapsulation): Skrytí vnitřního stavu (dat) objektu před vnějším světem. Přístup k datům a jejich modifikace jsou umožněny výhradně přes striktně definované veřejné rozhraní (metody). Tím je garantována konzistence stavu objektu.
    - __Dědičnost__ (Inheritance): Mechanismus umožňující vytvářet nové třídy na základě tříd stávajících. Nová (odvozená) třída přebírá atributy a metody rodičovské třídy, přičemž je může rozšiřovat nebo modifikovat. Podporuje znovupoužitelnost kódu a vytváření hierarchií.
    - __Polymorfismus__ (Mnohotvárnost): Schopnost různých objektů reagovat na stejné metodické volání (zprávu) specifickým způsobem. Umožňuje přistupovat k objektům různých tříd jednotným způsobem skrze společné rozhraní nebo nadřazenou třídu.

### Funkcionální programování
Funkcionální programování je deklarativní programovací paradigma, které staví na matematické teorii funkcí (konkrétně na $\lambda$-kalkulu). Na rozdíl od imperativního programování, kde program popisuje jak se má výpočet provést pomocí změn stavů a sekvencí příkazů, funkcionální programování popisuje co je výsledkem výpočtu pomocí skládání výrazů a funkcí.

!!! info "Čisté funkce"
    Čistá funkce je základní stavební jednotkou funkcionálního programu. Aby byla funkce považována za čistou, musí striktně splňovat dvě matematické podmínky:

    - __Determinismus__: Funkce pro stejné vstupní argumenty vrací vždy stejný výsledek. Výstup závisí výhradně na předaných parametrech, nikoliv na externím stavu (např. globálních proměnných, systémovém času nebo stavu databáze).
    - __Absence vedlejších účinků__ (Side Effects): Vyhodnocení funkce nijak nemění stav okolního prostředí. Funkce nesmí modifikovat globální proměnné, měnit hodnoty argumentů předaných odkazem, zapisovat do souborů, vypisovat do konzole ani vyvolávat výjimky.

!!! tip "Funkce jako hodnota 1. třídy"
    Tato vlastnost říká, že programovací jazyk sémanticky zachází s funkcemi úplně stejně jako s jakýmikoliv jinými datovými typy (např. s čísly nebo řetězci). S funkcí jako s hodnotou první třídy lze provádět tři klíčové operace:

    - Přiřazení do proměnné nebo uložení do datové struktury (pole, objektu).
    - Předání jako argumentu jiné funkci.
    - Navrácení jako výsledku z jiné funkce.

    S tímto konceptem úzce souvisí pojem Funkce vyššího řádu (Higher-Order Functions). To jsou funkce, které buď přijímají jinou funkci jako parametr, nebo funkci vrací jako svůj výstup (typicky operace jako map, filter, reduce).

!!! tip "Náhrada cyklu rekurzí"
    Ve striktně funkcionálním programování neexistují klasické imperativní cykly (`for`, `while`). Tyto cykly jsou totiž z principu závislé na měnitelném stavu – potřebují iterační proměnnou (např. `let i = 0`), která se s každým krokem modifikuje (`i++`), což porušuje pravidlo neměnnosti dat (immutability). Jakákoliv iterace se proto ve funkcionálním paradigma řeší pomocí rekurze – tedy stavu, kdy funkce volá samu sebe s upravenými parametry, dokud nedosáhne ukončovací podmínky (báze rekurze).