# Úvod do funkcí

Funkci si můžeme představit jako stroj, do kterého když vložíme nějaký vstup, tak on nám vyplivne nějaký výstup. 

$$x \to f(x) \to y$$

Trochu formálněji můžeme říct, že funkce určuje vztah mezi sadou vstupů a sadou výstupů, kde každý vstup nějak souvisí s nějakým výstupem. 

- Sadu vstupů nazýváme __definičním oborem__
- Sadu výstupů nazýváme __oborem hodnot__
- Vztahem, který určuje, jak ze vstupu udělat výstup, nazýváme __předpis funkce__

Samozřejmě jak to vevnitř ten vstup zpracovává už je ta složitější část, a naším úkolem je ve většině případů právě zkoumat tento postup a jeho chování v různých hodnotách.

## Funkce jedné proměnné
Funkce jedné proměnné jsou takové funkce, které mají jeden vstup a jeden výstup. Trochu formálněji tvrdíme, že se jedná o [zobrazení](../linearni_algebra/zobrazeni.md) $R \to R$.

### Jednoznačnost
Jednoznačnost funkce říká, že pro jeden parametr musí existovat pouze jedna funkční hodnota - tedy pro každý vstup existoval pouze jeden výstup.

!!! important ""
    Pro každé $x$ musí existovat právě jedno $y$.

### Monotonie
Monotónnost funkce je vlastnost, která nám zobecňuje, jakým způsobem se její výstupní hodnota mění v závislosti na změně vstupní hodnoty.

!!! info "Definice monotónnosti funkce"
    Mějme funkci definovanou na intervalu $J$ a čísla $a$ a $b$ z intervalu $J$, kde $a$ je menší než $b$ ($a < b$).

    Pokud platí, že:
    
    - $\large f(a) \lt f(b)$, tak je funkce **rostoucí** v intervalu $J$.
    - $\large f(a) \gt f(b)$, tak je funkce **klesající** v intervalu $J$.
    - $\large f(a) \le f(b)$, tak je funkce **neklesající** v intervalu $J$.
    - $\large f(a) \ge f(b)$, tak je funkce **nerostoucí** v intervalu $J$.

    !!! note ""
        Monotónnost nazýváme **ryzí**, pokud je buďto pouze rostoucí, nebo pouze klesající.

### Omezenost
Funkce je

- **Zhora omezená**, pokud je obor hodnot zhora omezený.
- **Zdola omezená**, pokud je obor hodnot zdola omezený.
- **Omezená**, pokud je obor hodnot shora i zdola omezený.
- **Neomezená**, pokud není obor hodnot nijak omezený.

Co znamená, že je obor hodnot nějakým způsobem omezený? Znamená to, že existuje nějaké číslo $K$, které je větší/menší nebo rovno všem funkčním hodnotám v oboru hodnot, tedy existuje nějaké supremum nebo infimum pro obor hodnot.

### Parita
Parita funkce říká, jakým způsobem je funkce "symetrická".

- Pokud je funkce osově souměrná podle osy y, je tzv. **sudá** ^2b6cc5
- Pokud je funkce středově souměrná podle počátku (0), je tzv. **lichá**
- Pokud se funkce "opakuje", říkáme, že je **periodická**.

### Prostost
Funkce je prostá, když pro každý prvek definičního oboru má přiřazené různé prvky v oboru hodnot. To znamená, že "se $y$ nikdy neopakuje."

!!! info "Definice prosté funkce"
    Funkce je prostá, pokud platí, že dva různé prvky z definičního oboru nemají stejnou funkční hodnotu. Jinak řečeno, každé $x$ má různý $y$.

    $$\begin{aligned}
    f(x_1) \not= f(x_2) &\implies \large\text{Funkce je prostá}
    \end{aligned}$$

### Spojitost