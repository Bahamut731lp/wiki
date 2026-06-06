# Gramatiky a automaty

## Formální jazyky
Abychom mohli exaktně popsat, jak fungují počítačové programy, překladače nebo automaty, musíme si nejdříve vybudovat matematický aparát. Začneme od toho úplně nejmenšího elementu a postupným vrstvením dojdeme až k pojmu formálního jazyka. Na úplném začátku všeho stojí **abeceda** Jedná se o konečnou množinu symbolů (písmena, čísla nebo jiné znaky), ze kterých můžeme pomocí zřetězení skládat __slova__ (řetězce).

!!! example "Abeceda a slova"
    Pokud máme abecedu $\Sigma = \{a, b\}$, pak slovy jsou například řetězce $a$, $b$, $aba$, $bbaaa$ nebo $ababab$.

    - __Délkou slova__ rozumíme počet znaků ve slově ($|abc| = 3$)
    - __Prázdným slovem__ rozumíme slovo, které nemá žádný symbol ($\varepsilon$)
    - __Počet výskytů__ 

!!! warning "Prázdné slovo $\varepsilon$"
    Existuje jedno velmi speciální slovo, které je v informatice nesmírně důležité. Je to **prázdné slovo**, které standardně značíme řeckým písmenem **$\varepsilon$** (Epsilon).

    * Představit si ho můžeš jako prázdný textový řetězec v programování (`""`). 
    * Neobsahuje vůbec žádné symboly, a proto je jeho délka nulová: **$|\varepsilon| = 0$**.

Nyní uděláme myšlenkový skok. Co kdybychom vzali naši abecedu $\Sigma$ a zkusili vypsat **úplně všechna možná slova**, která z ní jdou poskládat? Vznikne nám nekonečně velká množina slov, které se říká **uzávěr abecedy** (neboli Kleeneho uzávěr) a značí se **$\Sigma^*$**. Pokud máme $\Sigma = \{a, b\}$, pak uzávěr vypadá takto:

$$\Sigma^* = \{\varepsilon, a, b, aa, ab, ba, bb, aaa, aab, \dots\}$$

!!! info "Pozitivní uzávěr"
    Všimni si, že jako první prvek do uzávěru vždy automaticky patří i prázdné slovo $\varepsilon$ (posloupnost o délce 0). Pokud bychom chtěli vyjádřit množinu všech možných slov, ale **bez** prázdného slova $\varepsilon$ (tedy jen slova o délce 1 a větší), mluvíme o pozitivním uzávěru:

    $$\Sigma^+ = \Sigma^* \setminus \{\varepsilon\} = \{a, b, aa, ab, ba, bb, \dots\}$$

Formální jazyk je libovolná podmnožina uzávěru $\Sigma^*$ nad abecedou $\Sigma$.

- Formální jazyk je soubor slov vytvořených z určité abecedy. Nezabýváme se větami, ale jen jednotlivými slovy.
- Jazyk obsahuje slova z abecedy, která si vybereme z možných kombinací symbolů. Může obsahovat všechny, žádná, nebo jen některá slova.
- Jazyk lze definovat slovně, nebo pomocí gramatiky.

!!! quote ""
    Když máme abecedu $\Sigma$, formální jazyk $L$ je jakákoli podmnožina všech možných slov, která můžeme vytvořit z abecedy $\Sigma$. Zapisuje se jako $L \subseteq \Sigma^*$ (to znamená, že L je podmnožina [uzávěru](abecedy_slova.md#uzaver-abecedy) Σ*).

!!! info "Speciální případy jazyka"
    - Prázdný jazyk ($L = ∅$) neobsahuje žádná slova, ani prázdný řetězec ($\varepsilon$).
    - Pokud jazyk obsahuje konečný počet slov, nazýváme ho __konečný jazyk__.
    - Pokud obsahuje nekonečně mnoho slov, nazýváme ho __nekonečný jazyk__.
    - Počet slov v jazyce se nazývá mohutnost jazyka.


Vzhledem k tomu, že jazyk je množina slov, můžeme s ním provádět tyto operace:

|Operace|Značení|Vysvětlení|
|--:|:--:|:--|
|Sjednocení|$L_1 \cup L_2$|Vytvoří nový jazyk, který obsahuje všechna slova z obou jazyků.|
|Průnik|$L_1 \cap L_2$|Vytvoří nový jazyk, který obsahuje jen slova, která jsou v obou jazycích.|
|Rozdíl|$L_1 \backslash L_2$ | Vytvoří nový jazyk, který obsahuje slova z prvního jazyka, která nejsou v druhém.|
|Doplněk|$\overline{L_1} = \Sigma^*\backslash L_2$ | Jazyk $L_1$ je doplněk jazyka $L_2$, pokud $L_1$ obsahuje všechny možné řetězce kromě těch, které jsou v $L_2$. Jinak řečeno, jazyky se navzájem _doplňují_.|

Protože jsou prvky jazyka slova (řetězce), můžeme s nimi provádět i následující operace:

|Operace|Značení|Vysvětlení|
|--:|:--:|:--|
|Zřetězení|$L_1 . L_2$|Spojí slova z dvou jazyků dohromady, takže každé slovo z prvního jazyka se spojí s každým slovem z druhého jazyka. Výsledek je kartézský součin dvou jazyků.|
|$n$-tá mocnina|$L^n$|Opakované zřetězení slov ze stejného jazyka. Například druhá mocnina jazyka obsahuje všechna slova vzniklá zřetězením právě dvou slov původního jazyka.|
|Iterace jazyka|$L^*$|Vytváří všechny možné kombinace slov, včetně opakování a prázdného řetězce.|
|Pozitivní iterace jazyka|$L^+$|Vytváří všechny možné kombinace slov, včetně opakování.|
|Zrcadlový obraz jazyka|$L^R$|Pro každé slovo obrátíme pořadí symbolů.|

!!! warning "Nultá mocnina jazyka"
    Stejně jako u slov, i zde má umocnění nulou za výsledek prázdnou množinu, resp. prázdný jazyk. $L^0 = \varepsilon$

!!! example "Příklady"
    Abeceda $A$ obsahuje všechna malá písmena češtiny a angličtiny. Uvažujme jazyky $L_1$ a $L_2$ nad abecedou $A$. $L_1$ je množina všech názvů měsíců v roce v češtině, $L_2$ je množina názvů všech měsíců v roce v angličtině. Rozhodněte o pravdivosti následujících tvrzení:

    |Tvrzení|Pravdivost|Vysvětlení|
    |-----:|:--:|:--|
    |$L_1 = L_2$|Ne|Jazyky neobsahují stejná slova, resp. nejsou stejné podmnožiny|
    |Mohutnost $L_1$ a $L_2$ je stejná.|Ano|Mohutnost je vlastnost označující počet slov v jazyce. Tím, že oba jazyky obsahují názvy měsíců, tj. 12 slov, tak mají stejnou mohutnost.|
    |Průnik $L_1$ a $L_2$ je prázdný|Ano|Oba dva jazyky nemají žádné společné slovo|
    |Sjednocení $L_1$ a $L_2$ obsahuje slovo "červenjune"|Ne|Sjednocení pouze spojí dvě množiny dohromady, ale nijak nemění jednotlivá slova. Sjednocení bude tedy obsahovat samostatná slova "červen" a "june", ale nikoliv jejich spojení.|
    |Zřetězení $L_1$ a $L_2$ obsahuje slovo "červenjune"|Ano|Stejné vysvětlení jako předchozí tvrzení, až na to, že zde ke spojení slov došlo.|
    |Mohutnost zřetězení $L_1$ a $L_2$ je menší než 100|Ne|Tím, že se spojí každé slovo s každým, tak nám vznikne $12 \cdot 12$ slov, což je 144 slov.|
    |Doplněk $L_1$ obsahuje slovo "červenjune"|Ano|Doplněk k $L_1$ je uzávěr abecedy bez $L_1$ - tím, že slovo "červenjune" není v $L_1$, ale lze ho pomocí abecedy $A$ vytvořit, musí se nacházet v jeho doplňku.|
    |Doplněk $L_2$ obsahuje slovo "Monday"|Ne|Abeceda $A$, ze které vychází $L_2$, neobsahuje velká písmena. Tudíž nelze v žádném případě vytvořit slovo "Monday"|
    |Druhá mocnina $L_1$ obsahuje slovo "ledenúnorleden"|Ne|Slovo "ledenúnorleden" obsahuje tři slova z původního jazyka - tudíž vzniká jako výsledek třetí mocniny. Dvě slova na vytvoření takového slova nestačí|
    |Iterace $L_1$ obsahuje slovo "ledenúnorleden"|Ano|Tím, že je iterace jakoby "nekonečné umocnění" tak ano - slovo "ledenúnorleden" se v něm nachází.|

!!! example "Příklady - specifikace pomocí matematických operací"
    1. $L_1 = \{abc, aac, cb\}$ a $L_2 = \{baa, cb\}$
        - $L_1 . L_2 = \{abcbaa, aacbaa, cbcb, abccb, aaccb\}$
    2. $L_1 = \{\varepsilon, ab\}$ a $L_2 = \{bba, cb\}$
        - $L_1 . L_2 = \{\varepsilon{bba}, \varepsilon{cb}, abbba, abcb\}$
    3. $L_1 = \{abc, aab, cb\}$ a $L_2 = \{bba, cb\}$
        - $L_1 \cap L_2 = \{cb\}$
    4. $L_1 = ab*$ a $L_2 = cb*$
        - $L_1 \cup L_2 = ab^* + cb^* = (a+c)b^* = \{a, c, ab, cb, aab, cbb, abbb, ...\}$
    5. $L_1 = \{abc, aac, cb\}$ a $L_2 = \{baa, cb\}$
        - $L_1 \ L_2 = \{abc, aac\}$
    6. $L = \{abc, aac, cb\}$, pak doplněk
        - $\overline{L} = \Sigma^* / \{abc, aac, cb\}$ 
    7. $L = \{abc, mnp, \varepsilon\}$, pak
        - $L^R = \{cba, pnm, \varepsilon\}$

### Abecedy a slova
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

### Řetězení
Zřetězení (neboli spojení či konkatenace) dvou řetězců je proces, kdy vezmeš jeden řetězec a připojíš k němu druhý. Například pro řetězce α a β spojíš oba za sebe a získáš nový řetězec.

!!! example "Příklad"
    spojíš-li slova $\alpha = (abc)$ a $\beta = (123)$, výsledkem zřetězení bude slovo $(abc123)$.

#### Vlastnosti zřetězení
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

### Uzávěr abecedy
- __Uzávěr abecedy__ ($\Sigma^*$) je množina všech možných slov, které lze vytvořit z abecedy $\Sigma$ (to jsou všechny možné kombinace jejích symbolů, včetně prázdného slova).
- __Pozitivní uzávěr__ ($\Sigma^+$) je stejná věc jako "klasický" uzávěr, ale neobsahuje prázdné slovo.
- Uzávěry jsou všechny možné způsoby, jak můžeš spojit symboly z abecedy libovolněkrát. 
    - Tím vznikne spočetná množina.
    - Spočetná množina je taková, jejíž prvky můžeš spočítat, jako přirozená čísla (1, 2, 3…).
    - Spočetná množina může být i nekonečná.

!!! info "Kleeneho operátor"
    Operátor $*$ se nazývá Kleeneho operátor a používá se pro vytváření uzávěrů

## Gramatika
Gramatika je sada pravidel, která říká, jak můžeme vytvořit slova jazyka z určitého počátečního symbolu. Vytváření slov funguje tak, že začneme s počátečním symbolem a postupně na něj uplatňujeme pravidla, dokud nevytvoříme požadované slovo. Gramatiku $G$ zapisujeme jako uspořádanou čtveřici $G = (N, T, P, S)$, kde

- $N$ je množina pomocných symbolů (neterminálů).
- $T$ je množina konečných symbolů (terminálů).
- $P$ je množina __přepisovacích pravidel__.
- $S \in N$ je __počáteční symbol__, také znamý jako _kořen gramatiky_.

!!! abstract "Předpoklady"
    - Gramatika musí mít nějaké pomocné symboly a konečné symboly.
    - Množina přepisovacích pravidel musí být konečná.

!!! example "Příklad jednoduché gramatiky"
    Máme abecedu $\Sigma = \{a,\,b\}$. Počáteční symbol je $S$ a jsou určena dvě přepisová pravidla:
    
    1. $S \to aSb$
    2. $S \to ba$

    Proces vytváření slov vypadá následovně:

    - Začínáme počátečním symbolem $S$. První slovo, které můžeme vytvořit, je aplikovaním pravidla č. 2 - tím nám vznikne slovo $ba$.
    - Začínáme počátečním symbolem $S$. Druhé slovo, které můžeme vytvořit, je použitím prvního pravidla a následně druhého - $S \to aSb \to abab$. 
    - Začínáme počátečním symbolem $S$. Třetí slovo, které můžeme vytvořit, je dvojitým použitím prvního pravidla a následně druhého - $S \to aSb \to aaSbb \to aababb$. 

    Takhle můžeme pokračovat do nekonečna. Jazykem této gramatiky o dvou pravidlech mohou být slova $L = \{ba,\,abab,\,aababb,\,...\}$

### Konečné a pomocné symboly
- Konečné symboly (neboli terminály, terminální symboly) jsou symboly, které už nelze dále přepisovat. Konečná slova, která gramatika generuje, obsahují jen tyto symboly.
- Pomocné symboly (neboli neterminály, neterminální symboly) jsou symboly, které slouží k popisu struktury jazyka a dalšímu přepisu. Někdy se jim říká proměnné.

!!! info "Značení konečných a pomocných symbolů"
    - Konečné (terminální) symboly se v teorii jazyků označují malými písmeny latinské abecedy (nebo číslicemi)
    - Pomocné (neterminální) symboly se značí velkými písmeny nebo slovy ve špičatých závorkách.

!!! question "Co je věta a větná forma?"
    - Větná forma je každý řetězec symbolů, který můžeme vytvořit z počátečního neterminálního symbolu pomocí pravidel gramatiky.
    - Věta je případ větné formy, která obsahuje pouze konečné symboly (nejde ji už nijak dále přepisovat).

### Přepisovací pravidla
Přepisovací pravidla jsou množinou zobrazení, která určují, jak měnit symboly ve slovech. Pravidlo, které vypadá jako $\alpha \to \beta$, znamená: _"symboly $\alpha$ přepiš na symboly $\beta$"_.

- Levá strana pravidla ($\alpha$) může obsahovat libovolnou kombinaci symbolů, ale musí tam být alespoň jeden pomocný (neterminální) symbol.
- Pravá strana pravidla ($\beta$) může obsahovat terminální i neterminální symboly. nebo může být i prázdný.

Při odvozování nového slova postupně přepisujeme části slov předchozích. Vybereme část, která odpovídá levé straně nějakého pravidla, a nahradíme ji pravou stranou. Zbytek slova před i za výskytem levé strany (tzv. kontext) zůstává stejný.

- Tomuto nahrazení levé strany pravou stranu říkáme __přímé přepsání__ a označujeme ho symbolem $\Rightarrow$.
- Pokud můžeme udělat více těchto přímých přepsání zasebou, mluvíme prostě o __přepsání__ a zapisujeme to jako $w \overset{*}{\Rightarrow} z$.

Jazyk $L(G)$ generovaný gramatikou $G$ je množina všech slov (vět), které můžeme vytvořit z počátečního symbolu pomocí konečného počtu přepisů. Tím, že se jedná o věty, tak jsou složeny jen z konečných (terminálních) symbolů.

$$L(G) = \{w | w \in T^* \wedge S \overset{*}{\Rightarrow} w\}$$

!!! example "Příklad zápisu gramatiky"
    $$G: S \to 0S1 | 01$$

    - Symbol $S$ je počáteční symbol a zároveň je neterminálním symbolem.
    - Symboly $0$ a $1$ jsou terminální.
    - Tato gramatika má dvě přepisovací pravidla, která jsou oddělena svislou čárou.

    $$\begin{aligned}
    S &\overset{2}{\Rightarrow} 01 \\
    S &\overset{1}{\Rightarrow} 0S1 \overset{2}{\Rightarrow} 0011 \\
    S &\overset{1}{\Rightarrow} 0S1 \overset{1}{\Rightarrow} 00S11 \overset{1}{\Rightarrow} 000111 \\
    \end{aligned}$$

### Chomského hiearchie gramatik
Chomského hierarchie je rozdělení formálních gramatik podle toho, jak složité jazyky dokážou generovat.

!!! quote "Vrstvy chomského Hiearchie"
    ![chomskeeho_hiearchie](../images/chomskeho_hierarchie.png)

!!! quote "Tabulka chomského hiearchie"
    |Typ gramatiky|Generovaný jazyk|Automat|Přepisující pravidla|
    |:--:|:--:|:--|:--:|
    |G3|Regulární|Konečný automat|$\begin{aligned}A &\to a\\ A &\to aB\end{aligned}$ nebo $\begin{aligned}A &\to a\\ A &\to Ba\end{aligned}$|
    |G2|Bezkontextový|Nedeterministický zásobníkový automat|$A \to \alpha$|
    |G1|Kontextový|Turingův stroj s omezenými zdroji|$\alpha{A}\beta \to \alpha\gamma\beta$|
    |G0|Neomezený/Frázový|Turingův stroj|$\gamma \to \alpha$|

    - $a$ je konečný symbol
    - $A, B$ jsou pomocné symboly
    - $\alpha, \beta$ jsou řetězce pomocných a/nebo konečných symbolů.
    - $\gamma$ je řetězec pomocných a/nebo konečných symbolů, ale nesmí být prázdný.

#### Gramatiky typu 0 (neomezené/frázové gramatiky)
Tyto gramatiky zahrnují všechny možné formální gramatiky. Generují jazyky, které mohou být rozpoznané Turingovým strojem, což jsou velmi obecné stroje schopné zpracovat širokou škálu problémů. Tyto jazyky se nazývají rekurzivně spočetné jazyky.

- Nejsou zde žádná omezení na tvar pravidel.
- Každé pravidlo má formu: $\alpha \to \beta$.
- $\alpha$ musí obsahovat alespoň jeden neterminál a může být jakýmkoli řetězcem terminálů a neterminálů.
- $\beta$ může být libovolný řetězec terminálů a neterminálů.

#### Gramatiky typu 1 (kontextové gramatiky)
Tato gramatika generuje kontextové jazyky a je omezená tím, že žádné pravidlo nemůže zkracovat řetězce. Kontextové jazyky může rozpoznat Turingův stroj s omezenými zdroji (tzv. lineárně ohraničený).

- Pravidla musí dodržovat formu $\alpha{X}\beta \to \alpha{\gamma}\beta$.
    - $X$ je pomocný symbol (neterminál)
    - $\alpha,\,\beta,\,\gamma$ jsou řetězce konečných a/nebo pomocných symbolů ($\alpha,\,\beta,\,\gamma \in (T \cup N)^*$)
    - $\gamma$ nesmí být prázdné slovo $\varepsilon$.
- Alternativní, ale ekvivalentní, definice: $\alpha \to \beta$
    - $\alpha \in (N \cup T)^* . N . (N \cup T)^*$
    - $|\alpha| \le |\beta|$

- Pravidlo S → ε je povoleno jen, pokud se $S$ nevyskytuje na pravé straně žádného jiného pravidla.

#### Gramatiky typu 2 (bezkontextové gramatiky)
Tyto gramatiky generují bezkontextové jazyky, které lze rozpoznat nedeterministickým zásobníkovým automatem.

- Pravidla musí dodržet formu $X \to \gamma$ kde 
    - $X$ je pomocný symbol
    - $\gamma$ je řetězec konečných a/nebo pomocných symbolů ($\alpha,\,\beta,\,\gamma \in (T \cup N)^*$)

- Na levé straně může být pouze jeden pomocný symbol (není v kontextu).

#### Gramatiky typu 3 (regulární gramatiky)
Tyto gramatiky generují regulární jazyky, které jsou nejjednodušší a mohou být rozpoznané konečným automatem (automat bez paměti). U všech přepisovacích pravidel je na levé straně přesně jeden [neterminál](#konecne-a-pomocne-symboly) a na pravé straně nejvýše jeden [neterminál](#konecne-a-pomocne-symboly).

- Gramatika může obsahovat pravidlo $S \to \varepsilon$, pokud se $S$ nevyskytuje v žádném jiném pravidle na pravé straně.

!!! important "Rozdíl mezi regulární a lineární gramatikou"
    - Regulární gramatika má pouze **jeden** terminál, protože používá prvky z množiny terminálů.
    - Lineární gramatika může mít i řetězec terminálů, protože používá prvky z uzávěru množiny terminálů.

#### Regulární gramatika
Regulární gramatika má pravidla ve tvaru

- $A \to aB$
- $A \to Ba$
- $A \to a$
- $A \to \varepsilon$

Podle umístění terminálního symbolu se rozlišuje

- **levá regulární gramatika**: terminální symbol je na začátku pravé strany ($A \to Ba$)
- **pravá regulární gramatika** terminální symbol je na konci pravé strany ($A \to aB$)

!!! info "Regulární výraz"
    Mějme konečnou neprázdnou abecedu $\Sigma = \{a_1, a_2, \dots, a_n\}$ a množinu operátorů a pomocných symbolů $V_R = \{\emptyset, \varepsilon, +, \cdot, *, (, )\}$.
    Třídu regulárních výrazů nad abecedou $\Sigma$, značitelnou jako $RV(\Sigma)$, definujeme induktivně jako nejmenší množinu slov nad abecedou $\Sigma \cup V_R$ splňující následující strukturální podmínky:

    - $\Sigma \cap V_R = \emptyset$.
    - $\emptyset \in RV(\Sigma)$
    - $\varepsilon \in RV(\Sigma)$
    - $a \in RV(\Sigma)$ pro každé $a \in \Sigma$
    
    a jestliže $\alpha, \beta \in RV(\Sigma)$, pak také:

    - $(\alpha + \beta) \in RV(\Sigma)$
    - $(\alpha \cdot \beta) \in RV(\Sigma)$
    - $\alpha^* \in RV(\Sigma)$

!!! info "Regulární rovnice"
    Z pravidel regulární gramatiky lze sestavit regulární rovnice, které lze řešit pro vytvoření regulárního výrazu reprezentující původní gramatiku.
    
    - Místo $\to$ píšeme $=$
    - Místo $\mid$ píšeme $+$
    - Součin představuje zřetězení, které není komutativní
    - Vzniklou soustavu řešíme pro počáteční neterminál.

#### Lineární gramatika
Do regulárních gramatik spadají také pravidla, která splňují podmínky lineární gramatiky. Lineární gramatika je obecnější definice regulární gramatiky, kdy terminály $x$ a $y$ nemusíme tahat přímo z množiny terminálů $T$, ale z jejího uzávěru $T^*$. Ten obsahuje kromě terminálů i jejich různé kombinace a opakování. Lineární gramatika splňující pravidla G3 má pravidla ve tvaru:

- $A \to xB$ (pravá lineární gramatika)
- $A \to By$ (levá lineární gramatika)
- $A \to x$
- $A \to \varepsilon$

Pokud narazíme na pravidlo typu $A \to xBy$, nebo respektive $A \to xB$ a $B \to Cy$, pak se sice jedná o lineární gramatiku, ale splňující podmínky pro G2, ne pro G3. Lineární gramatika spadá do gramatiky typu 2, pokud se v přepisových pravidlech nachází jak levá, tak i pravá lineární gramatika. Jinak řečeno, existuje takové pravidle, které je zapsané nebo ho lze zapsat ve tvaru $A \to xBy$.


!!! question "Proč nelze kombinovat levou a pravou lineární gramatiku?"
    Je to kvůli tomu, jak je definována gramatika typu 3. Ta totiž umí pracovat jenom s případem, kdy je neterminál pouze na jedné straně od terminálu. 
    
    Pokud máme levé i pravé pravidlo, například $A \to xB$ a $B \to Cy$, lze ho pomocí tranzitivní vlastnosti spojit v $A \to xBy$, což je přepisovací pravidlo nesplňující podmínky pro G3.

#### Příklady
!!! example "Příklad: Jakého typu jsou následující gramatiky?"
    !!! example ""
        |Gramatika 1|Vysvětlení pravidel|
        |:--|:--|
        |$S \to abA$ | Pravidlo odpovídá pravé lineární gramatice, protože začíná řetězcem terminálů.|
        |$S \to ab$ | Pravidlo odpovídá pravé lineární gramatice, protože začíná řetězcem terminálů.|
        |$A \to aaB$ | Pravidlo odpovídá pravé lineární gramatice, protože začíná řetězcem terminálů.|
        |$A \to ba$ | Pravidlo odpovídá pravé lineární gramatice, protože začíná řetězcem terminálů.|
        |$B \to AB$ | Tady nastává průser. V tomto případě pravidle nemá žádné terminály, ale jenom neterminály. Aby pravidlo splňovalo úroveň gramatiky G3, musí tam být alespoň jeden terminál. Podmínky pro G2 již ale splňuje, protože tam je jedno, co je na pravé straně. (tvar $A \to \gamma,\,\gamma \in (N \cup T)^*$)|
        |$B \to \varepsilon$ | Toto pravidlo obecně platí i v G3 |

        Nejhorším pravidlem v gramatice 1 je tak pravidlo $B \to AB$, které splňuje podmínky G2, a **celá gramatika tak splňuje podmínky pro gramatiku typu 2.**

    !!! example ""
        |Gramatika 2|Vysvětlení pravidel|
        |:--|:--|
        |$S \to abA$ | Pravidlo odpovídá pravé lineární gramatice, protože začíná řetězcem terminálů.|
        |$S \to ab$ | Pravidlo odpovídá pravé lineární gramatice, protože začíná řetězcem terminálů.|
        |$A \to Bab$ | Pravidlo odpovídá levé lineární gramatice, protože začíná neterminálem, za kterým je řetězec terminálů.|
        |$A \to \varepsilon$ | Toto pravidlo obecně platí v G3 |
        |$B \to bbB$ | TPravidlo odpovídá pravé lineární gramatice, protože začíná řetězcem terminálů.|
        |$B \to b$ | Toto pravidlo je obecně jakékoliv z G3 |

        Nalezli jsme levá i pravá lineární pravidla, takže musíme zpozornět. Když použijeme tranzitivitu, tak zjistíme, že se v množině přepisových pravidel nachází $S \to abBab$ 
        
        $$(S \to abA) + (A \to Bab) = S \to abBab$$
        
        Pravidlo $S \to abBab$ nevyhovuje požadavkům typu 3 (kde terminály musí být pouze na jedné straně), ale vyhovuje předpisu G2 ($A \to \gamma,\,\gamma \in (N \cup T)^*$).
        
        **Celá gramatika tak splňuje podmínky pro gramatiku typu 2.**

    !!! example ""
        |Gramatika 3|Vysvětlení pravidel|
        |:--|:--|
        |$S \to A$|Pravidlo obecně vyhovující G3, páč $S$ je počáteční symbol|
        |$A \to AbB$|Pravidlo obsahuje více než jeden neterminál. Toto je skupina G2|
        |$A \to a$|Pravidlo obecně vyhovující skupině G3|
        |$AbB \to baB$|Tak tohle je další průser. Obviously to nevyhovuje G3 ani G2, protože na levé straně máme terminály i neterminály. G1 to ale také nevyhovuje - tam je podmínka, že prostředek levé strany musí být neterminál. Tady je $b$, což je terminál. Takže poslední možností je G0.|
        |$AbB \to BAbB$|Stejné odůvodnění jako výše - G3 ani G2 to být nemůže. G1 nám ale tady fungovat bude. Když se podíváme, tak obě strany mají společné $bB$ - když si z toho uděláme proměnnou, například $\beta \to bB$, vznikne $A\beta \to BA\beta$. To už podmínky G1 splňuje, konkrétně tu druhou definici, páč levá strana je kratší než pravá.|
        |$B \to b$|Pravidlo vyhovující G3|
        |$B \to \varepsilon$|Pravidlo vyhovující G3|

        Protože nejhůř ohodnocené pravidlo bylo G1, tak **celá gramatika splňuje podmínky pro gramatiku typu 1.**

!!! example "Rozhodněte o typu gramatiky"
    $$\begin{aligned}
        N &= \{A, S\}\\
        T &= \{0, 1, c\} \\
        G &= (N, T, P, S) \\
        \\
        S &\to 0A1 \\
        0A &\to 00A1 \\
        A &\to c
    \end{aligned}$$

    - Pravidlo $S \to 0A1$ odpovídá G3, protože má terminály z obou konců řetězce.
    - Pravidlo $0A \to 00A1$ odpovídá skupině G1
        - G3 nelze, protože na levé straně jsou terminální znaky ($0c \to 00c1$) 
        - G2 nemůže, protože ...
        - protože když si vezmeme tvar $\alpha{X}\beta \to \alpha{\gamma}\beta$ a dosadíme 
        - $\alpha = 0$, přičemž $\alpha$ musí být z uzávěru sjednocení terminálů a neterminálů. To platí, protože 0 je v množině terminálů $T$.
        - $\beta = \varepsilon$, přičemž $\beta$ musí také být z uzávěru sjednocení terminálů a neterminálů - do čehož prázdný řetězec $\varepsilon$ patří.
        - $\gamma = 0A1$, přičemž $\gamma$ musí být z pozitivního uzávěru sjednocení terminálů a neterminálů - což je v pořádku, protože $\gamma$ není prázdný řetězec a $0A1$ je kombinace symbolů z množin terminálů a neterminálů.
        - Podmínka $A \in N$ platí. 
    - Pravidlo $A \to c$ vyhovuje G3.

    **Celá gramatika je tak typu G1.**

    !!! example "Tvrzení"
        - L je konečný jazyk (ne, záleží na nás, kde skončíme)
        - L obsahuje prázdné slovo (ne)
        - L obsahuje právě dvě slova délky nejvýše tři
            $S \to 0A1,\, A\ to 1A0 \mid 1,\,S \to 1B0,\, B \to 1B \mid 1$
            Obsahuje, protože nejmenší slova, co můžu vygenerovat, je 011 a 110
        - L obsahuje slova pouze liché délky (ne)
        - Každé slovo L obsahuje znak 0 (ano, ze strartovacích)
        - Žádné slovo L neobsahuje souvsilsý řetězec 010101 (ano, tohle nejde vytvořit)

    S může být na epsilon pokud to je to startovací symbol a nevyskytuje se poté na pravé straně pravidla. U bezkontextových to není potřeba.

## Konečný automat
Automat je abstraktní matematický stroj, který slouží k rozpoznávání formálních jazyků. Automat prochází slova a rozhoduje, jestli patří do daného jazyka. Automaty se klasifikují podle toho, jaké jazyky dokážou rozpoznat (např. regulární, bezkontextové jazyky). Konečný automat (KA) je abstraktní model, který simuluje určitý typ výpočtu. Místo čísel pracuje s symboly.

!!! info "Vlastnosti konečných automatů"
    - KA si "pamatuje" informace prostřednictvím svého stavu. Nemá žádnou jinou formu paměti.
    - Automat přechází do jiného stavu pouze na základě vstupního symbolu. U __deterministického konečného automatu__ (DKA) je pro každý stav a vstupní symbol následující stav jednoznačně určen.
    - Z aktuálního stavu může KA určit, zda daný vstupní řetězec splňuje určitou vlastnost, ale není možné tento řetězec zrekonstruovat zpětně.

### Podle účelu automatu
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

### Podle architektury automatu
#### Mealeyho typ
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

#### Moorův typ
KA s výstupní funkcí Moorova typu popisujeme uspořádanou
šesticí $A = (Q, \Sigma, O, \delta, \lambda, q_0)$, kde:

- $Q$ je konečná neprázdná množina stavů.
- $\Sigma$ je vstupní abeceda.
- $O$ je konečná neprázdná množina výstupních symbolů.
- $\delta$ je přechodová funkce, která určuje, do jakého stavu automat přejde pouze podle aktuálního stavu.
- $\lambda$ je výstupní funkce, která určuje, jaký výstup se generuje na základě aktuálního stavu.
- $q_0 \in Q$ je počáteční stav.

!!! abstract "Jak to funguje?"
    - Automat čte symboly ze slova a podle toho, v jakém stavu je, přechází do jiného stavu.
    - Výstupní symbol je jednoznačně definován pouze aktuálním stavem.
    - Délka výstupního řetězce je o jedničku větší než délka vstupního řetězce (první znak výstupního řetězce odpovídá počátečnímu stavu).

#### Převod mezi Moore a Mealey

!!! info "Převod automatu typu Moore na typ Mealey"
    Tento směr je triviální. Převádíme informaci o výstupu ze stavu přímo na přechodové hrany, které do daného stavu vedou. Množiny $Q, \Sigma, O, q_0$ a funkce $\delta$ zůstávají beze změny. Novou výstupní funkci Mealyho automatu $\lambda_{Mealy}$ sestrojíme tak, že pro každý přechod dosadíme výstup cílového stavu z Mooreova automatu:

    $$\lambda_{Mealy}(q, a) = \lambda_{Moore}(\delta(q, a))$$

!!! info "Mealey na Moore"
    Tento směr vyžaduje roznásobení stavů (tzv. štěpení), protože jeden stav v Mealyho automatu může být dosažen hranami s různými výstupními symboly.

    1. Každý stav $q \in Q$ Mealyho automatu, do kterého vedou přechody s různými výstupními symboly $o_1, o_2 \dots$, rozštěpíme na dvojice $[q, o_i]$. Tato dvojice reprezentuje nový stav v Mooreově automatu.
    2. Nová množina stavů bude $Q' = \{ [q, o] \mid q \in Q \land o \in O \}$.
    3. Počátečním stavem bude dvojice $[q_0, o_{init}]$, kde $o_{init}$ je libovolný (dummy) výstupní znak, protože v počátečním stavu automat ještě žádný vstup nepřečetl.
    4. Nová přechodová funkce $\delta'$ směřuje vždy do rozštěpeného stavu, který v sobě nese informaci o původním Mealyho výstupu $\delta'([q, o_i], a) = [\delta(q, a), \lambda(q, a)]$
    5. Nová Mooreova výstupní funkce jednoduše vrací druhou složku stavu:$$\lambda'([q, o_i]) = o_i$$

### Podle determinismu automatu
Tato osa rozdělení neříká, k čemu automat slouží, ale **jakým způsobem se rozhoduje**, když čte vstupní symbol. Určuje, zda je cesta výpočtu jednoznačná, nebo zda se může větvit.

#### Deterministický konečný automat (DKA)
Deterministický automat je přímočarý. V každém okamžiku výpočtu je jednoznačně dáno, co se stane v následujícím kroku. Neexistuje žádný prostor pro náhodu nebo pochybnosti.

Formálně je DKA (akceptor) uspořádaná pětice $A = (Q, \Sigma, \delta, q_0, F)$, kde klíčovou roli hraje **přechodová funkce $\delta$**:
$$\delta: Q \times \Sigma \to Q$$

!!! info "Co to znamená v praxi?"
    * Pro každou dvojici `(aktuální stav, vstupní symbol)` existuje **právě jeden** následující stav.
    * Z žádného stavu nemohou pro stejný symbol vycházet dvě různé šipky.
    * V přechodové tabulce je v každém políčku zapsán přesně jeden stav.
    * Automat má **právě jeden** počáteční stav $q_0$.

#### Nedeterministický konečný automat (NKA)
Nedeterministický automat přináší do výpočtu prvek „paralelismu“ nebo „hádání“. Ze stejného stavu může pro jeden symbol existovat více možných přechodů, nebo naopak žádný.

Formálně je NKA uspořádaná pětice $A = (Q, \Sigma, \delta, I, F)$, kde si všimni dvou zásadních rozdílů oproti DKA:
1.  **Množina počátečních stavů $I \subseteq Q$:** Automat může začínat ve více stavech současně.
2.  **Přechodová funkce $\delta$ vrací množinu stavů:**
    $$\delta: Q \times \Sigma \to \mathcal{P}(Q)$$
    *(Zápis $\mathcal{P}(Q)$ neboli $2^Q$ značí potenční množinu – množinu všech podmnožin stavů $Q$. Výsledkem přechodu je tedy celá skupina stavů, klidně i prázdná množina $\emptyset$.)*

!!! abstract "Jak funguje výpočet u NKA?"
    * **Paralelní větvení:** Když má automat na výběr z více přechodů, výpočet se pomyslně rozdvojí (naklonuje) a automat prozkoumává všechny cesty současně.
    * **Slepá ulička:** Pokud pro daný symbol neexistuje žádná šipka dál (výsledkem je $\emptyset$), tato konkrétní větev výpočtu umírá.
    * **Podmínka přijetí slova:** Aby NKA slovo přijal, stačí, když **alespoň jedna** větev výpočtu dojede na konec slova a skončí v koncovém stavu ($q \in F$). Že ostatní větve umřely nebo skončily jinde, vůbec nevadí.

#### Převod mezi NKA a DKA
Základním teoretickým poznatkem je, že **NKA a DKA jsou ekvivalentní**. Nedeterminismus nepřidává automatu žádnou výpočetní sílu navíc (oba modely rozpoznávají stejnou třídu regulárních jazyků $L_3$). 

Každý nedeterministický automat lze systematicky převést na deterministický pomocí algoritmu zvaného **podmnožinová konstrukce**. Nedeterminismus v NKA znamená, že z jednoho stavu vede pro stejný symbol **více šipek do různých stavů** (automat má na výběr a musí paralelně „hádat“ cestu).

!!! info "Podmnožinová konstrukce"
    Podmnožinová konstrukce tento nedeterminismus odstraňuje přímo na šipkách:
    1. Vezme všechny cílové stavy, kam ty paralelní šipky vedly (např. stavy $q_0$ a $q_1$).
    2. Tyto stavy slije do jedné množiny $\{q_0, q_1\}$ a tu prohlásí za **jeden nový, plnohodnotný stav** nového automatu (pojmenuje ho např. $q_{01}$).
    3. Původní vícesměrné šipky smaže a nahradí je **jednou jedinou šipkou**, která vede přímo do tohoto nového stavu $q_{01}$.

    Z hlediska DKA křižovatka zmizela. Automat dostane symbol, vidí přesně jednu šipku a jednoznačně po ní přejde. To, že cílový stav reprezentuje situaci z více původních stavů, je pro determinismus nepodstatné.

### Konstrukce gramatiky z konečného automatu
Při návrhu gramatiky pro konečný automat vycházíme z faktu, že konečné automaty jsou ekvivalentní regulárním gramatikám (v Chomského hierarchii jde o jazyky typu 3). Chceme-li sestavit gramatiku, která bude generovat stejný jazyk, jaký přijímá konečný automat, musíme vytvořit tzv. pravou regulární gramatiku. V ní mají přepisovací pravidla striktně omezený tvar:

- $A \to aB$
- $A \to a$
- $A \to \varepsilon$

!!! info "Metoda pro sestrojení gramatiky z konečného automatu"
    Mějme deterministický nebo nedeterministický konečný automat $M = (Q, \Sigma, \delta, q_0, F)$. Pravou regulární gramatiku $G = (N, \Sigma, P, S)$ sestavíme následujícím postupem:
    
    1. __Množina neterminálů__ ($N$): Každému stavu automatu přiřadíme právě jeden neterminální symbol. Tedy $N = \{[q] \mid q \in Q\}$. Pro přehlednost se stavy $q_0, q_1, \dots$ mapují přímo na neterminály $S, A, B, \dots$.
    2. __Počáteční neterminál__ ($S$): Počátečním neterminálem gramatiky se stává neterminál reprezentující počáteční stav automatu $q_0$.
    3. __Množina přepisovacích pravidel__ ($P$): Pravidla generujeme exaktně podle přechodové funkce $\delta$:
        - Pokud v automatu existuje přechod $\delta(q_i, a) = q_j$, vytvoříme gramatické pravidlo: $[q_i] \to a[q_j]$
        - Pokud je cíl přechodu $q_j$ koncovým stavem ($q_j \in F$), vytvoříme navíc zkrácené pravidlo, které umožňuje ukončit generování slova: $[q_i] \to a$
        - Pokud je samotný počáteční stav $q_0$ koncovým stavem ($q_0 \in F$), přidáme pravidlo: $S \to \varepsilon$

## Zásobníkový automat
Zásobníkový automat je rozšíření konečného automatu, který má k dispozici nekonečný zásobník. Problémem regulárních jazyků, které rozpoznává konečný automat, je fakt, že nemá žádnou formu paměti a uchovává si pouze aktuální stav. To dělá problém v situaci, kdy na pravé straně přepisovacího pravidla existují pouze neterminály. Vzniká tím totiž rekurze, se kterou si konečný automat nedokáže poradit. Z definice takový stavu u regulární gramatiky není možný, protože na pravé straně musí být vždycky alespoň jeden terminál. U bezkontextové je ale pravá strana libovolný řetězec symbolů z úzávěru sjednocení terminálů a neterminálů.

Přidaný zásobník vytváří novou formu vstupu a výstupu. Automat čte kromě vstupního slova také stav zásobníku, a může si do zásobníku zapsat symbol. Může se tak do jisté míry nekonečně vracet a zpracovávat nekonečně dlouhé slovo neustálým zapisováním a čtením zásobníku. U zásobníkového automatu může konečný stav nastat tím, že dojde do koncového stavu, nebo že bude na konci čtení zásobník prázdný.

## Turingův stroj
Turingův stroj je teoretický model počítače, který se používá pro modelování algoritmů. Turingova teze říká, že ke každému algoritmu existuje ekvivalentní TS (mohou ale existovat algoritmicky nerozhodnutelné problémy). Turingův stroj je forma konečného automatu, který čte a zapisuje na nekonečnou pásku v obou směrech. Počáteční stav nesmí být shodný s koncovým stavem.

Varianty Turingova stroje:

- Nekonečná jenom směrem doprava (pravostranně nekonečný)
- Lineárně ohraničený
- Vícepáskový (má vstupní, výstupní a pracovní pásky)
- Vícehlavový
- TS s lineární páskou či páskami
- TS s nelineární páskou či páskami

### Rozhodnutelnost
Rozhodnutelnost je vlastnost hromadného problému, která říká, jestli pro tento problém existuje algoritmus (počítačový program), který dokáže v konečném čase pro libovolný vstup rozhodnout, zda pro něj platí určité tvrzení či nikoliv.

!!! success "Totální rozhodnutelnost"
    Problém je totálně rozhodnutelný, pokud existuje Turingův stroj, který pro **jakýkoliv** zadaný vstup garantovaně udělá dvě věci:

    1. Vypočítá správnou odpověď (vydá výsledek ANO nebo NE).
    2. **Vždycky se zastaví v konečném čase.** (Nikdy nezamrzne, nikdy nespadne do nekonečného cyklu).

!!! warning "Parciální rozhodnutelnost"
    Problém je parciálně (částečně) rozhodnutelný, pokud existuje Turingův stroj, který umí najít správnou odpověď, ale **garantovaně to zvládne pouze v případě, že správná odpověď zní ANO**.

    * Pokud je odpověď **ANO**: Stroj provede výpočet, odpoví ANO a **zastaví se**.
    * Pokud je odpověď **NE**: Stroj buď odpoví NE a zastaví se, nebo **spadne do nekonečného cyklu a bude běžet navždy**. 

    Uživatel u běžícího stroje v čase $t$ nedokáže rozlišit, zda stroj stále ještě korektně počítá, nebo zda už uvízl v nekonečné smyčce.

!!! danger "Nerozhodnutelný problém"
    Problém je nerozhodnutelný, pokud **neexistuje a principiálně nikdy nemůže existovat** žádný algoritmus, který by jej dokázal pro všechny možné vstupy vyřešit (ani parciálně). Tyto problémy jsou mimo hranice toho, co jsou počítače schopny z principu spočítat.

#### Problém zastavení
Problém zastavení Turingova stroje je algoritmicky nerozhodnutelný problém, který říká, že neexistuje obecný algoritmus, který by pro všechny vstupy všech programů dokázal určit, jestli se program zastaví, nebo poběží navždy.

!!! bug "Problém zastavení"
    - Řekněme, že problém zastavení lze rozhodnout.
        - Vytvořme program `halt(p, x)`, který
            - vrací `true` když program zastaví
            - a `false` když se program zacyklí a poběží do nekonečna
    - Vytvořme program `paradox(p)`, který volá `halt(p, p)` a provede přesný opak výsledku.
        - pokud to volání vrátí `true`, naschvál se zacyklí.
        - pokud to volání vrátí `false`, ihned skončí.
    - Co je výsledkem programu `paradox(paradox)` ?
        - Volání `paradox(paradox)` uvnitř volá `halt(paradox, paradox)`
        - Pokud `halt(paradox, paradox)` vrátí `true`, pak se `Paradox(Paradox)` zacyklí
        - Pokud `halt(paradox, paradox)` vrátí `false`, pak `Paradox(Paradox)` ihned skončí
        - V obou případech se provede přesně to, co není výsledkem programu `halt`
            - `halt` říká, že program skončí, ale on se zacyklí.
            - __Vznikl logický spor__, a tudíž náš předpoklad, že problém zastavená lze rozhodnout, byl špatný. 

#### Postův korespondenční problém
Postův korespondenční problém je nerozhodnutelný problém, který má jednoduché zadání: máme dvojice slov, přičemž ke každé dvojici máme nekonečně mnoho kopií. Je možné najít sekvenci dvojic, u kterých jsou první slova stejná a druhá slova stejná? Takový algoritmus, který by určil existenci řešení, neexistuje.

#### Problém zániku matic 3x3
Problém zániku matic je nerozhodnutelný problém, který se soustředí kolem čtvercových matic 3x3. Cílem je rozhodnout, jestli lze libovolně dlouhým součinem získat nulovou matici.

- Pro matici $1\times1$ (skalár) je problém triviální, stačí vynásobit nulou.
- Pro matici $2\times2$ je problém otevřený a čeká se na jeho vyřešení.
- Pro matici $3\times3$ je problém nerozhodnutelný.

## Překladače
Překladač je program, který převádí kód zapsaný v jednom jazyce do kódu zapsaného v jiném jazyce se zachováním sémantického významu. Překladače se dělí na dvě části:

- na __frontend__, který překládá výchozí jazyk do intermediálního jazyka
- a na __backend__, který překládá intermediální jazyk do cílového jazyka

![](../images/compiler_structure.JPG)

!!! info "Proces překladu na front-endu"
    * __Čtení zdrojového kódu__: Celý proces začíná souborem se zdrojovým kódem, který překladač začne sekvenčně načítat jako surový proud znaků.
    * __Lexikální analýza__ (Lexer): Tento proud znaků prochází procesem, kdy se z řetězců znaků stávají samostatná slova, neboli tokeny (např. klíčová slova, identifikátory, operátory). Zároveň dochází k odfiltrování komentářů a mezer.
    * __Syntaktická analýza__ (Parser): Výsledný proud tokenů se průběžně kontroluje podle gramatických pravidel daného jazyka. Parser určuje pravidla pro syntaxi tokenů – tedy jak mohou být tokeny vedle sebe a co musí po jakých následovat (např. správné otevírání závorek nebo struktura příkazů).
    * __Tvorba abstraktního syntaktického stromu__ (AST): Výstupem ze syntaktické analýzy je hierarchická stromová struktura (derivační strom), která reprezentuje logickou kostru celého programu.
    * __Sémantická analýza__: Tomuto stromu je následně přiřazen konkrétní význam a kontext. Kontrolují se vlastnosti, které gramatika samotná nezachytí, jako je typová kontrola (zda nesčítáš nekompatibilní datové typy) nebo ověření, zda jsou všechny volané proměnné správně deklarované. Výstupem je dekorovaný strom připravený pro generování mezikódu.
    * 

!!! info "Proces překladu a na middle-endu"
    * __Převod do intermediální reprezentace__ (IR): Middleend přebírá sémanticky ověřený dekorovaný strom (AST) z představby (frontendu) a transformuje jej do jednoho nebo více univerzálních mezikódů. Tento krok kompletně odděluje specifika zdrojového programovacího jazyka od vlastností cílového procesoru.
    * __Platformově nezávislá optimalizace__: Nad mezikódem se spouští série optimalizačních průchodů (passes), které matematicky a logicky upravují kód za účelem zvýšení rychlosti a snížení paměťové náročnosti. Mezi klíčové operace patří:
    * __Příprava pro backend__: Výstupem z middleendu je vyčištěný, vysoce optimalizovaný intermediální kód (často ve formě statického jednotného přiřazení – SSA), který je předán backendu ke konečnému vygenerování strojových instrukcí pro konkrétní hardware.

!!! info "Proces překladu na backendu"
    * __Převod z intermediální reprezentace__: Backend přebírá optimalizovaný mezikód (IR) z middleendu a spouští proces jeho transformace na cílový strojový kód. V této fázi se překladač poprvé začíná plně orientovat na konkrétní hardware (např. architekturu x86_64, ARM nebo RISC-V) a specifika daného operačního systému.
    * __Instrukční selekce__ (Instruction Selection): Univerzální operace z mezikódu se mapují na konkrétní nízkoúrovňové instrukce vybraného procesoru. Překladač se snaží najít nejefektivnější kombinaci strojových instrukcí, které přesně odpovídají logice v IR (např. nahrazení obecného násobení specifickou instrukcí pro bitový posun).
    * __Přidělování registrů__ (Register Allocation): V mezikódu middleendu se používá v podstatě nekonečné množství virtuálních proměnných. Fyzický procesor má ale k dispozici jen velmi omezený počet skutečných hardwarových registrů (např. 16 nebo 32). Backend musí tyto stovky proměnných efektivně napasovat do reálných registrů. Tento úkol se matematicky řeší jako NP-úplný problém barvení grafu. Pokud registry dojdou, překladač musí vygenerovat kód, který přebytečné hodnoty dočasně odkládá do operační paměti RAM (tzv. register spilling), což program zpomaluje.
    * __Plánování instrukcí__ (Instruction Scheduling): Moderní procesory nezpracovávají instrukce striktně po jedné, ale využívají vnitřní zřetězené linky (pipelines) a paralelní provádění. Backend reorganizuje a přehazuje pořadí vygenerovaných strojových instrukcí tak, aby procesor nečekal na dokončení předchozích operací (tzv. záseky / stalls) a maximálně využil svůj výpočetní potenciál.
    * __Platformově závislá optimalizace__: Na samém konci se provádějí drobné úpravy specifické pro danou architekturu. Jedná se například o využití speciálních instrukcí pro vektorové výpočty (SIMD) nebo tzv. peep-hole optimalizace, kdy překladač projíždí výsledný kód malým „okénkem“ a nahrazuje krátké sekvence instrukcí za ještě rychlejší varianty.
    * __Vygenerování objektového souboru__: Finálním výstupem backendu je binární objektový soubor (např. formát .obj nebo .o), který obsahuje surový strojový kód připravený pro linker (sestavovatel).

!!! bug "Optimalizace"
    * __Eliminace mrtvého kódu__ (Dead Code Elimination): Odstranění instrukcí, proměnných nebo celých funkcí, jejichž výsledky se v programu nikdy nepoužijí.
    * __Šíření a skládání konstant (Constant Propagation/Folding)__: Výpočty s fixními hodnotami (např. x = 2 + 3) se vyčíslí už během překladu, takže procesor je nemusí počítat za běhu.
    * __Globální analýza datových toků__: Sestavení grafu řízení toku (Control Flow Graph – CFG), který mapuje všechny možné cesty, kudy může výpočet programem procházet.
    * __Optimalizace cyklů__ (Loop Optimizations): Vzhledem k tomu, že v cyklech programy tráví nejvíce času, middleend se zaměřuje na jejich zefektivnění:
    * __Vytýkání invariantů__ (Loop-Invariant Code Motion): Přesun výpočtů, které se uvnitř cyklu nemění, před samotný začátek cyklu, aby se neopakovaly zbytečně.
    * __Rozbalování cyklů__ (Loop Unrolling): Duplikování těla cyklu za účelem snížení režie spojené s neustálým testováním podmínky a skákáním v kódu.