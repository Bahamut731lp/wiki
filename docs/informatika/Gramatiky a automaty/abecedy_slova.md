# Abecedy a slova
- __Abeceda__ ($\Sigma$) je konečná množina symbolů, což mohou být písmena, čísla nebo jiné znaky. Abeceda musí obsahovat alespoň jeden prvek.
- __Řetězec__ (slovo) je posloupnost symbolů z této abecedy.
- __Délka řetězce__ (kolik má symbolů) se značí $|\alpha|$.
- __Prázdný řetězec__ neobsahuje žádné symboly a značí se $\varepsilon$, jeho délka je 0.
- __Počet výskytů__ určitého znaku (například a) v řetězci α se značí jako #a(α).
- __Reverzní (opačné) slovo__ $a^R$ je slovo, které vznikne, když zapíšeš symboly slova α v opačném pořadí. Říká se tomu také zrcadlový obraz.
    - Například, pokud $\alpha = a_1...a_n$, pak $\alpha^R = a_n...a_1$.
    - Když obrátíš reverzní slovo zpět, dostaneš původní slovo: $(\alpha^R)^R = \alpha$.
    - Pro prázdný řetězec ε platí, že jeho reverzní obraz je stále prázdný: $\varepsilon^R = \varepsilon$.
- __Podslovo__ $\beta$ je část slova $\alpha$. To znamená, že $\beta$ se nachází někde uvnitř slova $\alpha$.
    - __Předpona__ (prefix) je podslovo na začátku slova $\alpha$.
    - __Přípona__ (sufix) je podslovo na konci slova $\alpha$.

## Řetězení
Zřetězení (neboli spojení či konkatenace) dvou řetězců je proces, kdy vezmeš jeden řetězec a připojíš k němu druhý. Například pro řetězce α a β spojíš oba za sebe a získáš nový řetězec.

!!! example "Příklad"
    spojíš-li slova $\alpha = (abc)$ a $\beta = (123)$, výsledkem zřetězení bude slovo $(abc123)$.

### Vlastnosti zřetězení
- Délka spojeného řetězce je součet délek obou původních řetězců.
    - $|\alpha.\beta| = |\alpha| + |\beta|$
- Spojením slova s prázdným slovem vznikne původní slovo
    - $\alpha.\varepsilon = \varepsilon.\alpha = \alpha$
- Jedno slovo můžeme $n$ krát zopakovat za sebou. To nazýváme $n$-násobné zřetězení a označuje se jako $\alpha^n$. 
    - Například $(abc)^3$ = $(abc).(abc).(abc) = (abcabcabc)$.
    - Pro $n = 0$ je výsledek prázdné slovo $\alpha^0 = \varepsilon$
- Řetězení slova je asociativní, to znamená, že nezáleží, co zřetězíme první a co druhý, ve výsledku je to stejný.
    - $\alpha . \beta . \gamma = (\alpha . \beta) . \gamma = \alpha . (\beta . \gamma)$
- Řetězení __není__ komutativní. Jinak řečeno, záleží na pořadí spojovaných slov.
    - $\alpha . \beta \not= \beta . \alpha$

## Uzávěr abecedy
- __Uzávěr abecedy__ ($\Sigma^*$) je množina všech možných slov, které lze vytvořit z abecedy $\Sigma$ (to jsou všechny možné kombinace jejích symbolů, včetně prázdného slova).
- __Pozitivní uzávěr__ ($\Sigma^+$) je stejná věc jako "klasický" uzávěr, ale neobsahuje prázdné slovo.
- Uzávěry jsou všechny možné způsoby, jak můžeš spojit symboly z abecedy libovolněkrát. 
    - Tím vznikne spočetná množina.
    - Spočetná množina je taková, jejíž prvky můžeš spočítat, jako přirozená čísla (1, 2, 3…).
    - Spočetná množina může být i nekonečná.

!!! info "Kleeneho operátor"
    Operátor $*$ se nazývá Kleeneho operátor a používá se pro vytváření uzávěrů
