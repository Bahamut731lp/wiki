# Automat
Automat je abstraktní matematický stroj, který slouží k rozpoznávání formálních jazyků. Automat prochází slova a rozhoduje, jestli patří do daného jazyka. Automaty se klasifikují podle toho, jaké jazyky dokážou rozpoznat (např. regulární, bezkontextové jazyky).

## Konečný automat
Konečný automat (KA) je abstraktní model, který simuluje určitý typ výpočtu. Místo čísel pracuje s symboly. Konečné automaty se používají v různých oblastech, například:

- při návrhu [sekvenčních logických obvodů](../logicke_obvody/sekvencni_logicke_obvody.md),
- při návrhu a implementaci komunikačních protokolů,
- v překladačích programovacích jazyků,
- v úlohách z umělé inteligence,
- při modelování softwarových komponent,
- a v řídicích systémech.

KA funguje tak, že je vždy v jednom konkrétním stavu z předem definované množiny stavů. Tento stav se může změnit na základě vstupního symbolu (podnětu z okolí), obvykle v diskrétních časových okamžicích. Takto KA postupně zpracovává vstupní symboly a mění své stavy.

### Konečné automaty podle použití
Podle použití rozlišujeme 3 typy KA:

#### Rozpoznávací konečný automat (akceptor)
Tento typ automatu rozhoduje, zda dané vstupní slovo patří do určitého jazyka. Vydává jasnou odpověď typu ano/ne. Rozpoznávacím konečným automatem nazýváme každou pětici $A = (Q, \Sigma, \delta, q_0, F)$, kde:

- $Q$ je konečná neprázdná množina stavů
- $\Sigma$ je vstupní abeceda
- $\delta$ je přechodová funkce, která určuje, do jakého stavu automat přejde podle aktuálního stavu a přečteného symbolu.
- $q_0 \in Q$ je počáteční stav
- $F \in Q$ je konečná neprázdná množina koncových stavů, kde automat může skončit a rozhodnout, že slovo patří do jazyka.

!!! abstract "Jak to funguje?"
    - Automat čte symboly ze slova jeden po druhém.
    - Na základě toho, v jakém stavu je a jaký symbol přečte, se přesune do jiného stavu.
    - Automat si nic nepamatuje a nemůže se vracet zpět.
    - Pokud po přečtení celého slova skončí v koncovém stavu, slovo patří do daného jazyka.

#### Klasifikační konečný automat (klasifikátor)
Tento automat zařazuje vstupní řetězec do jedné z několika tříd. Rozpoznávací KA je speciálním případem klasifikačního KA, protože rozlišuje pouze mezi dvěma možnostmi (patří/nepatří). Klasifikačním konečným automatem nazýváme každou pětici $A = (Q, \Sigma, \delta, q_0, \{Q_i\})$, kde:

- $Q$ je konečná neprázdná množina stavů
- $\Sigma$ je vstupní abeceda.
- $\delta$ je přechodová funkce, která určuje, do jakého stavu automat přejde podle aktuálního stavu a přečteného symbolu.
- $q_0 \in Q$ je počáteční stav.
- $\{Q_i\}$ je rozklad množiny stavů $Q$. Každý stav z Q patří právě do jedné skupiny (třídy) {Qi}. Skupiny jsou navzájem oddělené (disjunktní) a jejich sjednocením dostaneme celou množinu stavů Q.

!!! abstract "Jak to funguje?"
    - Automat čte symboly ze slova a podle toho, v jakém stavu je, přechází do jiného stavu.
    - Každá skupina $Q_i$ množiny stavů $Q$ odpovídá jedné klasifikační třídě. To znamená, že automat určuje, do které třídy vstupní slovo patří na základě jeho průchodu stavy.

#### Konečný automat s výstupní funkcí (translátor)
Tento typ automatu vytváří výstupní řetězec na základě vstupního řetězce.

##### Mealeyho typ
S výstupní funkcí Mealyho typu popisujeme uspořádanou šesticí $A = (Q, \Sigma, O, \delta, \lambda, q_0)$, kde:

- $Q$ je konečná neprázdná množina stavů.
- $\Sigma$ je vstupní abeceda.
- $O$ je konečná neprázdná množina výstupních symbolů.
- $\delta$ je přechodová funkce, která určuje, do jakého stavu automat přejde podle aktuálního stavu a přečteného symbolu.
- $\lambda$ je výstupní funkce, která určuje, jaký výstup se generuje na základě aktuálního stavu a vstupu.
- $q_0 \in Q$ je počáteční stav.

!!! abstract "Jak to funguje?"
    - Automat čte symboly ze slova a podle toho, v jakém stavu je, přechází do jiného stavu.
    - Výstupní symbol je jednoznačně definován aktuálním stavem a aktuálním vstupním symbolem.
    - Délka výstupního řetězce je stejná jako délka zpracovávaného vstupního řetězce.

##### Moorův typ
KA s výstupní funkcí Moorova typu popisujeme uspořádanou
šesticí $A = (Q, \Sigma, O, \delta, \lambda, q_0)$, kde:

- $Q$ je konečná neprázdná množina stavů.
- $\Sigma$ je vstupní abeceda.
- $O$ je konečná neprázdná množina výstupních symbolů.
- $\delta$ je přechodová funkce, která určuje, do jakého stavu automat přejde podle aktuálního stavu a přečteného symbolu.
- $\lambda$ je výstupní funkce, která určuje, jaký výstup se generuje na základě aktuálního stavu.
- $q_0 \in Q$ je počáteční stav.

!!! abstract "Jak to funguje?"
    - Automat čte symboly ze slova a podle toho, v jakém stavu je, přechází do jiného stavu.
    - Výstupní symbol je jednoznačně definován pouze aktuálním stavem.
    - Délka výstupního řetězce je o jedničku větší než délka vstupního řetězce (první znak výstupního řetězce odpovídá počátečnímu stavu).

### Vlastnosti konečných automatů
- KA si "pamatuje" informace prostřednictvím svého stavu. Nemá žádnou jinou formu paměti.
- Automat přechází do jiného stavu pouze na základě vstupního symbolu. U __deterministického konečného automatu__ (DKA) je pro každý stav a vstupní symbol následující stav jednoznačně určen.
- Z aktuálního stavu může KA určit, zda daný vstupní řetězec splňuje určitou vlastnost, ale není možné tento řetězec zrekonstruovat zpětně.

### Nedeterministický konečný automat (NKA)
Nedeterministický konečný automat (NKA) popisujeme uspořádanou pěticí $A = (Q, \Sigma, \delta, I, F)$, kde:

- $Q$ je konečná neprázdná množina stavů.
- $\Sigma$ je vstupní abeceda.
- $\delta$ je přechodová funkce, která může mít za výsledek více stavů, nebo klidně i žádný.
- $I$ je množina počátečních stavů.
- $F \in Q$ je množina koncových stavů.

!!! abstract "Jak to funguje?"
    - NKA přijímá slovo, pokud existuje cesta z počátečního stavu do koncového, která odpovídá tomuto slovu.
    - Nedeterminismus znamená, že může existovat více cest pro zpracování jednoho slova.
    - Výsledek může být různý: NKA může na jedné cestě slovo přijmout, ale na jiné ne.
    - Více možností: NKA může mít více cest, kterými se dostane z počátečního stavu do koncového.

!!! info "Každý nedeterministický KA lze převést na deterministický KA"

## Rozpoznatelnost jazyka automatem
[Formální jazyk](formalni_jazyky.md) $L$ je konkrétním automatem $A$ rozpoznávaný právě tehdy, pokud ho vstupní slova dostanou do koncového stavu. Množina všech slov, které dostanou automat $A$ z počátečního stavu do koncového stavu, se značí $L(A)$.

Jazyk $L$ nad abecedou $\Sigma$ je rozpoznatelný konečným automatem právě tehdy, když existuje konečný automat $A$, pro který platí, že je schopný rozeznat každé slovo daného jazyka ($L(A) = L$).

## Konfigurace automatu a krok výpočtu
Automat pracuje tím, že postupně zpracovává vstupní slovo a při tom mění své stavy.

- __Konfigurace automatu__ je dvojice aktuálního stavu $q$, a nepřečtenou částí vstupního slova $w$. Značíme jako $<q, w>$
!!! info "Všechny možné konfigurace automatu"
    Dvojice $<q, w>$ vzniká jako kartézský součin množiny stavů $Q$ a uzávěru vstupní abecedy $\Sigma^*$. 
- __Počáteční konfigurací__ nazýváme stav, kdy je automat v počátečním stavu a ještě nepřečetl žádný symbol ze vstupního slova. $<q_0, w>$
!!! example "Příklad počáteční konfigurace"
    Budeme-li chtít přijmout slovo $w = abbc$, tak počáteční konfiguraci zapíšeme: $<q_0, abbc>$
- __Krok výpočtu__ je situace, kdy automat přečte symbol ze vstupního slova a na základě něho přejde do jiného stavu.
!!! abstract "Význam značení"
    Krok výpočtu značíme jako zobrazení mezi dvěma konfiguracemi automatu, takže například $\left<{q_0, w_0w_1...w_n}\right> \to \left<{q_1, w_1w_2...w_n}\right>$ je přechod automatu ze stavu $q_0$ do stavu $q_1$ při zpracování prvního symbolu $w_0$ slova $w$. Aby takové zobrazení dávalo smysl, musí být v přechodové funkci automatu takový přechod definován - takže $\delta{(q_0, w_0)} = q_1$ 
!!! info "Tranzitivita kroku výpočtu"
    Pokud se z konfigurace $K_1$ musíme do konfigurace $K_2$ dostat přes několik dalších kroků výpočtů, tak značíme relaci jako $K_1 \to^* K_2$.
    !!! example ""
        $$K_1 \to K_{11} \to K_{12} \to K_{13} \to ... \to K_2 = K_1 \to^* K_2$$

- __Automat přijímá slovo__ $w$ právě tehdy, když existuje konečný stav $q_f \in F$ takový, že se z počátečního stavu $q_0$ a vstupního slova $w$ lze dostat do konfigurace s konečným stavem a prázdným slovem. $\left<q_0, w\right> \to^* \left<q_f, \varepsilon\right>$