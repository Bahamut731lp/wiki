# Teorie kódování

Kódování je proces převodu informace z jedné reprezentace do druhé. V teorii kódování rozlišujeme dva hlavní cíle: **komprese** (zmenšení objemu dat) a **zabezpečení** (ochrana proti chybám při přenosu). Základními pojmy jsou:

- **Zdrojová abeceda** $\Sigma$ – množina symbolů, ze kterých se skládá původní zpráva.
- **Kódová abeceda** $\Gamma$ – množina symbolů používaných v zakódované zprávě (často $\{0, 1\}$ – binární kód).
- **Kód** – zobrazení $K: \Sigma^* \to \Gamma^*$, které každému slovu ze zdrojové abecedy přiřazuje kódové slovo.
- **Kódové slovo** – řetězec symbolů kódové abecedy, který reprezentuje zakódovaný symbol nebo zprávu.

## Kompresní kódování

Cílem je zmenšit objem dat odstraněním redundance při zachování původní informace. Rozlišujeme bezztrátové (lze obnovit přesnou kopii) a ztrátové (část informace je nenávratně ztracena).

### Prefixový kód

Prefixový kód je takový kód, jehož **žádné kódové slovo není prefixem jiného kódového slova**. Tato vlastnost umožňuje jednoznačné dekódování bez nutnosti oddělovačů – čteme symboly, dokud nerozpoznáme platné kódové slovo, a hned pokračujeme dalším.

!!! example "Příklad prefixového a neprefixového kódu"
    | Symbol | Prefixový kód | Neprefixový kód |
    |:--:|:--|:--|
    | A | 0 | 0 |
    | B | 10 | 01 |
    | C | 110 | 011 |
    | D | 111 | 111 |

    V neprefixovém kódu je `01` prefixem `011` – při čtení `0110...` nevíme, jestli jde o B+A nebo začátek C.

#### Kraftova nerovnost

Kraftova nerovnost je **nutnou a postačující podmínkou** existence prefixového kódu pro dané délky kódových slov.

$$K = \sum_{i=1}^{n} D^{-l_i} \le 1$$

kde $D$ je počet symbolů kódové abecedy (pro binární kód $D = 2$) a $l_i$ je délka $i$-tého kódového slova.

!!! info "Interpretace hodnoty $K$"

    - $K > 1$ – prefixový kód **nemůže existovat**. Součet „prostoru", který kódová slova zabírají, přesahuje kapacitu.
    - $K = 1$ – prefixový kód je **úplný** (saturuje prostor). Žádné další kódové slovo nelze přidat.
    - $K < 1$ – prefixový kód je **neúplný**. Lze přidávat další slova.

### Huffmanova konstrukce

Huffmanova konstrukce vytváří **optimální prefixový kód** – minimalizuje váženou délku kódových slov pro zadanou pravděpodobnostní distribuci symbolů.

!!! abstract "Algoritmus Huffmanovy konstrukce"

    1. Seřaď symboly sestupně podle četnosti (nebo vzestupně – obojí funguje, musíme být konzistentní).
    2. Vezmi dva symboly (nebo podstromy) s **nejnižší četností** a spoj je do jednoho uzlu, jehož četnost je součtem.
    3. Vlož nový uzel zpět do seznamu a opakuj, dokud nezbude jediný uzel – kořen stromu s četností $1{,}0$.
    4. Hranám přiřaď symboly $0$ a $1$ (konzistentně – např. levá $0$, pravá $1$).
    5. Kódové slovo pro symbol = posloupnost bitů na cestě od kořene k listu.

!!! example "Huffman – krok za krokem"
    Zdrojová abeceda: $\{A: 0{,}4,\; B: 0{,}3,\; C: 0{,}2,\; D: 0{,}1\}$.

    1. Spoj `D` a `C` → uzel `CD` s četností $0{,}3$.
    2. Spoj `CD` a `B` → uzel `BCD` s četností $0{,}6$.
    3. Spoj `BCD` a `A` → kořen s četností $1{,}0$.

    Výsledné kódy: `A = 0`, `B = 10`, `C = 110`, `D = 111`. Průměrná délka: $0{,}4\cdot 1 + 0{,}3\cdot 2 + 0{,}2\cdot 3 + 0{,}1\cdot 3 = 1{,}9$ bitů.

!!! tip "Adaptivní Huffmanovo kódování"
    Statický Huffman vyžaduje znát četnosti předem a přenášet kódovací strom. **Adaptivní Huffman** aktualizuje strom za běhu podle již zpracované části zprávy. Výhoda: není potřeba strom přenášet, a lépe reaguje na lokální změny v rozložení symbolů.

### Aritmetické kódování

Aritmetické kódování reprezentuje celou zprávu jediným **reálným číslem** z intervalu $[0, 1)$. Na rozdíl od Huffmana nemá problém s necelými počty bitů na symbol – teoreticky dosahuje entropického optima.

!!! abstract "Princip aritmetického kódování"

    1. Rozděl interval $[0, 1)$ na podintervaly podle kumulativních pravděpodobností symbolů.
    2. První symbol zprávy vybere odpovídající podinterval.
    3. Tento podinterval se stane novým pracovním intervalem a opět se rozdělí podle pravděpodobností.
    4. Pokračuj pro každý další symbol – interval se postupně zužuje.
    5. Pro poslední symbol vyber libovolné číslo z výsledného intervalu. V binární podobě ho zkrať na nejkratší reprezentaci, která stále jednoznačně identifikuje výsledný interval.

!!! info "Vzorec pro výpočet nového intervalu"
    Pro symbol $Z$ s intervalem kumulativních pravděpodobností $[Z_L, Z_H)$:

    $$[L_i, H_i) = \bigl[L_{i-1} + Z_L \cdot (H_{i-1} - L_{i-1}),\; L_{i-1} + Z_H \cdot (H_{i-1} - L_{i-1})\bigr)$$

Dekódování funguje obráceně – známe výsledné číslo a ptáme se: do kterého podintervalu patří? Podle toho odhalíme první symbol a spočítáme číslo pro další krok:

$$K_i = \frac{K_{i-1} - Z_L}{Z_H - Z_L}$$

Algoritmus dekódování **není konečný** – musíme se zastavit podle vnějšího signálu (např. předem známé délky zprávy nebo speciálního ukončovacího symbolu).

#### DFWLD (Dyadic Fraction with Least Denominator)

DFWLD je konkrétní metoda aritmetického kódování, která jako výsledek vybírá **dyadický zlomek** (zlomek ve tvaru $\frac{s}{2^t}$) s **nejmenším jmenovatelem** – tj. s nejmenším $t$, pro který zlomek stále náleží do výsledného intervalu.

!!! abstract "Postup kódování DFWLD"

    1. Seřaď zdrojovou abecedu sestupně podle pravděpodobností a spočítej kumulativní pravděpodobnosti (ostře menší, tj. $C(p_i) = \sum_{j=1}^{i-1} p_j$).
    2. Pro každý znak slova počítej nové meze: $a_i = a_{i-1} + l_{i-1} \cdot C(p)$, $l_i = l_{i-1} \cdot p$, kde počáteční $a_0 = 0$, $l_0 = 1$.
    3. Urči parametr $t \in \mathbb{N}^+$ z nerovnice $t \ge \lceil -\frac{\ln l_n}{\ln 2} \rceil > t-1$.
    4. Urči parametr $s \in \mathbb{N}$ z nerovnice $a_n \cdot 2^t \le s < (a_n + l_n) \cdot 2^t$. Pokud vyjdou dvě celá čísla, vol sudé.
    5. Výsledný zlomek: $R = \frac{s}{2^t}$, zapíšeme jako $t$-bitové binární číslo (případně doplníme nulami zleva).

## Bezpečnostní (samoopravné) kódy

Bezpečnostní kódy přidávají k datům **redundanci**, která umožňuje detekovat a případně opravit chyby vzniklé při přenosu nebo ukládání. Na rozdíl od kompresních kódů, které redundanci **odstraňují**, bezpečnostní kódy ji **záměrně přidávají**.

### Hammingova vzdálenost

Hammingova vzdálenost $d_H(x, y)$ je **počet pozic, na kterých se dva řetězce stejné délky liší**. Je to metrika – splňuje trojúhelníkovou nerovnost.

$$d_H(x, y) = |\{\,i \in \{1, \dots, n\} \mid x_i \neq y_i\,\}|$$

Pro binární řetězce lze spočítat jako Hammingovu váhu jejich XOR: $d_H(x, y) = w(x \oplus y)$, kde $w(z)$ je počet jedniček v $z$.

!!! example "Příklad Hammingovy vzdálenosti"
    $d_H(01101, 01011) = 2$ (liší se na 3. a 5. pozici)

**Minimální Hammingova vzdálenost kódu** $d(C)$ je nejmenší vzdálenost mezi libovolnými dvěma **různými** kódovými slovy:

$$d(C) = \min_{x, y \in C,\, x \neq y} d_H(x, y)$$

Toto číslo určuje veškeré schopnosti kódu:

!!! abstract "Schopnost detekce a opravy chyb"

    - **Detekuje až $d-1$ chyb** – pokud je přijaté slovo vzdáleno od všech kódových slov alespoň o 1, chyba je detekována.
    - **Opravuje až $\lfloor \frac{d-1}{2} \rfloor$ chyb** – pokud je přijaté slovo blíž k původnímu kódovému slovu než k jakémukoliv jinému.

    $$\begin{aligned}
    k_{\text{detekce}} &= d(C) - 1 \\[4pt]
    k_{\text{oprava}} &= \left\lfloor \frac{d(C) - 1}{2} \right\rfloor
    \end{aligned}$$

### Lineární kódy

Lineární kód je takový kód, kde **lineární kombinace libovolných kódových slov je opět kódové slovo**. Pracujeme nad konečným tělesem – pro binární kódy je to $\mathbb{Z}_2 = \{0, 1\}$ s operacemi modulo 2 (XOR).

Formálně: Binární lineární kód délky $n$ a dimenze $k$ (značíme $[n, k]$-kód) je $k$-dimenzionální podprostor vektorového prostoru $\mathbb{Z}_2^n$. Obsahuje $2^k$ kódových slov.

!!! abstract "Výhody lineárních kódů"

    - **Minimální vzdálenost** = minimální váha nenulového kódového slova: $d(C) = \min_{c \in C,\, c \neq 0} w(c)$ – nemusíme porovnávat všechny dvojice!
    - **Generující matice** – kompaktní reprezentace celého kódu.
    - **Kontrolní matice** – umožňuje efektivní detekci a opravu chyb pomocí syndromů.

#### Generující matice $G$

Generující matice $G$ o rozměrech $k \times n$ obsahuje $k$ **lineárně nezávislých** kódových slov (bázi kódu). Zakódování $k$-bitové informační zprávy $u$:

$$c = u \cdot G \quad \text{(vše nad } \mathbb{Z}_2 \text{)}$$

Pro systematický kód má $G$ tvar $G = [I_k \mid P]$, kde $I_k$ je jednotková matice $k \times k$ a $P$ je $k \times (n-k)$ matice paritních bitů. V systematickém kódu prvních $k$ bitů kódového slova tvoří přímo původní zprávu – zbylých $n-k$ bitů je parita.

#### Kontrolní matice $H$

Kontrolní matice $H$ o rozměrech $(n-k) \times n$ slouží k ověření, zda přijaté slovo $r$ patří do kódu:

$$H \cdot r^T = 0 \iff r \in C$$

Pro systematický kód s $G = [I_k \mid P]$ má kontrolní matice tvar $H = [P^T \mid I_{n-k}]$.

**Syndrom** $s = H \cdot r^T$ je $(n-k)$-bitový vektor, který identifikuje chybu. Pokud $s = 0$, přijaté slovo je kódové (bez detekovatelné chyby). Pokud $s \neq 0$, syndrom ukazuje na pozici chyby.

### Hammingovy kódy

Hammingovy kódy jsou rodina perfektních lineárních kódů s minimální vzdáleností $d = 3$ – **detekují 2 chyby a opravují 1**. Jsou definovány pro libovolné $r \ge 2$:

$$n = 2^r - 1,\quad k = 2^r - r - 1,\quad d = 3$$

Parametry: délka $n$, dimenze $k$, $r = n-k$ paritních bitů.

!!! abstract "Nejznámější: Hammingův kód $(7, 4)$"

    - $n = 7$ bitů celkem
    - $k = 4$ informační bity
    - $r = 3$ paritní (kontrolní) bity
    - Dokáže opravit libovolnou jednobitovou chybu

#### Jak se Hammingův kód konstruuje

Kontrolní bity se umisťují na **pozice, které jsou mocninami 2** (pozice 1, 2, 4, 8, …). Informační bity obsadí zbylá místa:

| Pozice | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| Role | $p_1$ | $p_2$ | $d_1$ | $p_4$ | $d_2$ | $d_3$ | $d_4$ |
| Index (binárně) | 001 | 010 | 011 | 100 | 101 | 110 | 111 |

Každý paritní bit $p_i$ hlídá ty pozice, jejichž binární index má na $i$-tém místě (od LSB) jedničku:

- $p_1$ (pozice 1, bit 0): hlídá pozice, jejichž index končí na `1` – tj. 1, 3, 5, 7.
- $p_2$ (pozice 2, bit 1): hlídá pozice, jejichž index má jedničku na druhém bitu – 2, 3, 6, 7.
- $p_4$ (pozice 4, bit 2): hlídá pozice, jejichž index má jedničku na třetím bitu – 4, 5, 6, 7.

!!! example "Zakódování zprávy $d_1d_2d_3d_4 = 1010$ kódem $(7,4)$"
    Obsadíme pozice:
    
    | Pozice | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
    |:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
    | Hodnota | $p_1$ | $p_2$ | 1 | $p_4$ | 0 | 1 | 0 |

    Spočítáme paritní bity (lichá parita – XOR):

    - $p_1 = 1 \oplus 0 \oplus 0 = 1$
    - $p_2 = 1 \oplus 1 \oplus 0 = 0$
    - $p_4 = 0 \oplus 1 \oplus 0 = 1$

    Výsledné kódové slovo: **1 0 1 1 0 1 0**

#### Oprava chyby pomocí syndromu

Předpokládejme, že při přenosu došlo k chybě na **pozici 5** – bit se změnil z `0` na `1`. Přijaté slovo: `1 0 1 1 1 1 0`.

Spočítáme syndrom – tři kontrolní součty:

- $s_1 = p_1 \oplus d_1 \oplus d_2 \oplus d_4 = 1 \oplus 1 \oplus 1 \oplus 0 = 1$
- $s_2 = p_2 \oplus d_1 \oplus d_3 \oplus d_4 = 0 \oplus 1 \oplus 1 \oplus 0 = 0$
- $s_4 = p_4 \oplus d_2 \oplus d_3 \oplus d_4 = 1 \oplus 1 \oplus 1 \oplus 0 = 1$

Syndrom = $(s_4 s_2 s_1)_2 = (101)_2 = 5$ – chyba je na **pozici 5**! Otočíme bit na pozici 5 zpět a dostaneme původní kódové slovo `1 0 1 1 0 1 0`.

!!! success "Proč to funguje?"
    Syndrom je binární reprezentace **pozice chyby**. Každý paritní bit $p_i$ testuje podmnožinu pozic; pokud součet vyjde 1, znamená to, že v dané skupině je lichý počet chyb. Při jedné chybě se syndrom přesně shoduje s binárním indexem chybné pozice.

#### Rozšířený Hammingův kód $(8, 4)$

Přidáním **celkové parity** (parita přes všech 7 bitů) vznikne rozšířený Hammingův kód s $d = 4$. Detekuje až 3 chyby a opravuje 1 – a navíc rozliší jednobitovou chybu (syndrom ≠ 0, celková parita sedí) od dvoubitové (syndrom ≠ 0, celková parita nesedí).

#### Hammingovy kódy v maticové reprezentaci

Pro Hammingův kód $(7, 4)$ má generující matice tvar:

$$G = \begin{bmatrix}
1 & 0 & 0 & 0 & | & 1 & 1 & 1 \\
0 & 1 & 0 & 0 & | & 1 & 0 & 1 \\
0 & 0 & 1 & 0 & | & 0 & 1 & 1 \\
0 & 0 & 0 & 1 & | & 1 & 1 & 0
\end{bmatrix}$$

Kontrolní matice:

$$H = \begin{bmatrix}
1 & 1 & 0 & 1 & | & 1 & 0 & 0 \\
1 & 0 & 1 & 1 & | & 0 & 1 & 0 \\
1 & 1 & 1 & 0 & | & 0 & 0 & 1
\end{bmatrix}$$

Pro zakódovanou zprávu $u = [1010]$: $c = u \cdot G = [1\;0\;1\;1\;0\;1\;0]$. Syndrom $H \cdot c^T = [0\;0\;0]^T$ – žádná chyba. Pokud se chyba objeví na pozici $i$, syndrom odpovídá $i$-tému sloupci matice $H$.

### Další bezpečnostní kódy

| Kód | $d$ | Opravuje | Vlastnosti |
|:--|:--:|:--|:--|
| **Hammingův** | 3 | 1 chybu | Perfektní – pokrývá celý prostor. Jednoduchý, efektivní pro nízkou chybovost. |
| **Rozšířený Hammingův** | 4 | 1 chybu + detekce 3 | Parita navíc – rozliší 1-bit od 2-bit chyby. |
| **Reedův–Solomonův (RS)** | $n-k+1$ | Až $\frac{n-k}{2}$ symbolových chyb | Pracuje nad symboly (typicky 8 bitů). Použití: CD, DVD, QR kódy, DVB. |
| **Golayův kód** $\mathcal{G}_{23}$ | 7 | 3 chyby | Perfektní binární kód – $n=23$, $k=12$. Použití: kosmické sondy Voyager. |
| **LDPC** (Low-Density Parity Check) | Proměnlivá | Mnoho chyb | Blíží se Shannonově kapacitě kanálu. Použití: 5G, WiFi 6, DVB-S2. |
| **Konvoluční kódy** | Proměnlivá (volná vzdálenost) | Průběžně | Viterbiho algoritmus pro dekódování. Použití: satelitní komunikace, GSM. |
