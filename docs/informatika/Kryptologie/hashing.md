# Hashing
Hashovací funkce je zobrazení, které mění řetězec libovolné délky na řetězec pevné délky. Výsledek hashovací funkce, tzv. __hash__, je výpočetně jednoduchý, Široce se používají pro adresování paměti.

!!! danger "Kolize"
    Při hashování může nastat situace, kdy pro dva různé vstupy výjde stejný výsledek. Této situaci se říká __kolize__.

Kryptografická hashovací funkce je speciální typ hashovací funkce, která splňuje dodatečné požadavky zajišťující její bezpečnost a odolnost vůči různým typům útoků. Používají se primárně pro kontrolu integrity dat (zdali data nebyla změněna během přenosu), ukládání hesel v nečitelné podobě či digitální podpisy. Co odlišuje _klasickou_ hashovací funkci od té kryptografické? 

!!! info "Kryptografická hashovací funkce"
    Kryptografická hashovací funkce $h(x)$ má:
    
    - __Rovnoměrné rozložení hashů__: Pravděpodobnost, že hashovací funkce vytvoří konkrétní $n$-bitový hash, je $2^{−n}$. Každá možná hodnota hash by měla být stejně pravděpodobná, což umožňuje hash považovat za reprezentaci původní zprávy.
    - __Odolnost vůči nalezení vzoru__: Pro kryptografickou hašovací funkci $h$ a její libovolný výstup $y$ neexistuje prakticky realizovatelný algoritmus, který by uměl najít nějaké neznámé $x$ splňující $h(x) = y$
    - __Odolnost vůči nalezení druhého vzoru__: Pro daný vzor $x$ je obtížné spočítat hash $y$ takový, že $h(x)=h(y)$.
    - __Odolnost vůči nalezení kolize__: Je prakticky nemožné najít dvě různé vstupní zprávy, které mají stejný hash.

### Útoky hledající vzory
Odolnost vůči nalezení otevřeného textu je označována jako síla zabezpečení a závisí na délce hashe. Například hash o délce $n$ bitů má očekávanou odolnost $n$ bitů, pokud není prostor možných vstupních hodnot menší než $2^n$.

#### Rainbow Tables
Rainbow tables jsou speciálně vytvořené datové struktury, které usnadňují útočníkům nalézt původní heslo, které bylo převedeno na hash. Jsou to vlastně jakési slovníky, které mapují hashované hodnoty zpět na jejich původní hesla.

### Útoky hledající kolize
Odolnost vůči kolizím je nižší než odolnost vůči vůči nalezení otevřeného textu, a proto má hashovací funkce délky $n$ odolnost vůči kolizím přibližně $\frac{n}{2}$ bitů.

!!! question "Jak útočníci využívají kolize k útokům?"
    Nízká odolnost vůči kolizím může být zneužita k vytvoření podvržených zpráv, které ale mají správnou hash. Podívejme se na příklad jednoduché hashovací funkce $h(x)$, která sčítá číslice. Jak by se dalo využít kolize s takovou hashovací funkcí?

    !!! example ""
        Představme si, že ověřujeme pravost dokumentu pomocí takové hashe, přičemž hashujeme název souboru.
        - Originální dokument: Má název "1234". Jeho hash je 1+2+3+4 = 10.
        - Podvržený dokument: Má název "4321". Jeho hash je také 10.

        1. Vypočteme hash originálního dokumentu: Pro dokument "1234" vypočítáme hash 10.
        2. Najdeme dokument s jiným názvem, ale stejným hashem: V našem případě je to "4321".
        3. Nahradíme originální dokument podvrhem: Nahradíme dokument "1234" dokumentem "4321".
        4. Ověření: Pokud někdo zkontroluje hash nového dokumentu, vyjde mu opět 10, což odpovídá původnímu dokumentu. Tím pádem nebude schopen rozpoznat podvrh.

    V praxi se používají složitější hashovací funkce a používá se více dat k ověření integrity. Ovšem na tomto principu stojí [narozeninový útok](#narozeninovy-utok) a [Pollardův rhó útok](#pollarduv-ro-utok)

#### Narozeninový útok
Narozeninový útok je metoda hrubé síly využívající pravděpodobnostní jev známý jako paradox narozenin, který zvyšuje šanci na nalezení dvou různých vstupů se stejnou hash hodnotou (tzv. kolize). Tento jev je významný zejména u hashovacích funkcí, kde má přímý vliv na jejich odolnost vůči kolizím.

!!! tip "Paradox narozenin"
    V klasickém paradoxu narozenin se ukazuje, že pravděpodobnost, že dvě osoby v místnosti mají stejné datum narození, rychle roste s počtem osob. Už při 23 lidech je pravděpodobnost kolize vyšší než 50%. Tento jev je způsoben tím, že se porovnává velké množství dvojic, nikoliv pouze jedna.

!!! question "Proč chceme zabránit kolizím?"
    Je to primárně kvůli tomu, jakým způsobem aplikujeme hash funkce v zabezpečení. Představme si hashovací funkci, která hashuje hesla k přihlášení do banky. Při přihlášení se neporovnávají hesla v jejich otevřené podobě, ale v jejich zahashované podobě. Útočníkovi tak jde o to najít libovolnou zprávu, která vyprodukuje stejný hash. Pak útočník nemusí znát heslo, protože našel takový vzor, který generuje stejný hash jako naše původní heslo.

Pokud hashovací funkce produkuje hodnoty o délce $n$ bitů, existuje $2^n$ možných hash hodnot. Pravděpodobnost nalezení kolize roste přibližně úměrně počtu pokusů a při $\sqrt{2^n}$ pokusech dosahuje 50%.

#### Pollardův Ró útok
Pollardův Ró útok je algoritmus používaný k nalezení kolizí v hashovacích funkcích a také k faktorizaci velkých čísel (například v kryptografii RSA). Tento útok se často využívá jako efektivní metoda na řešení problémů s hledáním kolize hashovací funkce. Tento algoritmus využívá techniku náhodné procházky k detekci cyklů ve výstupních hodnotách hashovací funkce, což umožňuje identifikovat kolize s nižší paměťovou náročností než jiné metody.

!!! info "Princip Pollardova Ró algoritmu pro hledání kolizí"
    - __Definice iterativní funkce__: Zvolíme funkci, která na základě aktuální hodnoty generuje novou hodnotu. V kontextu hashovacích funkcí může být touto funkcí samotná hashovací funkce nebo její modifikace.
    - __Generování posloupnosti hodnot__: Začneme s počáteční hodnotou a iterativně aplikujeme zvolenou funkci, čímž vytváříme posloupnost hodnot. Vzhledem k omezenému počtu možných výstupů hashovací funkce a velkému počtu vstupů dojde dříve či později k opakování hodnoty, což signalizuje přítomnost cyklu.
    - __Detekce cyklu__: Použijeme techniku detekce cyklu, například Floydův algoritmus se dvěma ukazateli (tzv. "tortoise and hare" algoritmus), kde jeden ukazatel postupuje posloupností rychleji než druhý. Když se oba ukazatele setkají, identifikovali jsme cyklus.
    - __Identifikace kolize__: Po nalezení cyklu analyzujeme odpovídající vstupní hodnoty, abychom zjistili, zda vedou ke stejné hash hodnotě. Pokud ano, máme kolizi mezi dvěma různými vstupy.

!!! tip "Výhody Pollardova Ró algoritmu"
    - __Nízká paměťová náročnost__: Na rozdíl od jiných metod, jako je narozeninový útok, nevyžaduje algoritmus ukládání velkého množství hodnot, což z něj činí paměťově efektivní řešení.
    - __Efektivita__: Algoritmus má časovou složitost $O(\sqrt{n})$, kde n je počet možných výstupů hashovací funkce, což je srovnatelné s jinými metodami hledání kolizí.

!!! failure "Nevýhody Pollardova Ró algoritmu"
    - Standardní verze algoritmu __není snadno paralelizovatelná__, což může omezit jeho využití na víceprocesorových systémech.
    - Úspěšnost algoritmu může záviset na konkrétní implementaci a vlastnostech použité hashovací funkce. 

### Konstrukce hashovacích funkcí
Ke konstrukci hashovacích funkcí odolných vůči kolizím se dříve používaly jednosměrné kompresní funkce, u kterých již bylo známé, že jsou vůči kolizím odolné.

__Merkle Damgardova konstrukce__ provádí kompresi na jednotlivé bloky dat a každý tento blok je součástí vstupu pro další blok. Protože se šifruje blokově, musí se zprávy doplnit výplní, což je jedna z možných zranitelností této konstrukce (Lze vytvořit platný hash dobře prodlouženou zprávou a najít kolizi - _length extension attack_).

__Davies-Meyerova konstrukce__ nepoužívá libovolné kompresní funkce, ale libovolnou kvalitní blokovou šifru. Vstupy do šifry zahrnují zprávu a předchozí stav (výstup z předchozí iterace), přičemž výstup je kombinován se vstupem pomocí operace XOR.

__Houbovité konstrukce__ jsou takové hashovací funkce, které dokážou vzít libovolně dlouhý binární řetězec dat a vytvořit z toho výstup požadované délky. Každá houbovitá konstrukce má tři části:

- Vnitřní stav obsahující $b$ bitů, přičemž je rozdělen na __datovou část__ o velikosti $r$ a kapacitu $c$. 
- Pseudonáhodnou permutační funkci $f: \{0, 1\}^b \to \{0, 1\}^b$
- Výplňovou funkci $P$

!!! info "Fáze houbovité funkce"
    - __Absorbce__ (pohlcení), kde jsou vstupní data rozdělena na bloky pevné délky
        - Ze vstupních dat se přečte blok o velikosti $r$, který je případně doplněn výplňovou funkcí, pokud je délka dat menší než velikost bloku. 
        - Každý blok je xorován s aktuálním vnitřním stavem.
        - Vnitřní stav je následně změněn pseudonáhodnou permutační funkcí
    - __Exsorpce__ (vymačkání), kde jsou data čtena z vnitřního stavu
        - Z vnitřního stavu se odebere blok dat o velikosti $r$
        - Zbylý vnitřní stav je následně změněn pseudonáhodnou permutační funkcí

### Hashování s klíčem
Hashování s klíčem je technika, která kombinuje kryptografickou hashovací funkci s tajným klíčem za účelem zajištění integrity a autenticity zprávy. Tato metoda zaručuje, že pouze strany, které znají tajný klíč, mohou vytvořit nebo ověřit platný hash, čímž se předchází neoprávněným úpravám dat.

__Message Authentication Code__ (MAC) je specifický typ hashování s klíčem, který slouží k ověření integrity a autenticity zprávy. MAC bere jako vstup tajný klíč a zprávu a generuje krátký kód, který se připojuje ke zprávě. Příjemce s odpovídajícím tajným klíčem může tento kód ověřit a potvrdit, že zpráva nebyla pozměněna a pochází od důvěryhodného odesílatele. Příkladem je HMAC, který využívá hashovací funkce jako SHA-256. 

__Pseudorandom Function__ (PRF) je funkce, která na základě tajného klíče a vstupní hodnoty generuje výstup, jenž je nerozlišitelný od náhodného. PRF se používají v různých kryptografických protokolech, například pro odvozování klíčů nebo generování náhodných hodnot. Důležitou vlastností PRF je, že bez znalosti tajného klíče je pro útočníka obtížné předpovědět výstup pro libovolný vstup. Je třeba poznamenat, že ne všechny MAC jsou vhodné jako PRF; například poly1305 je MAC, ale není vhodný jako PRF.

V kryptografii existuje hierarchie mezi KDF (__Key Derivation Function__), PRF a MAC. KDF má silnější bezpečnostní požadavky než PRF, protože dokáže pracovat i s méně kvalitním klíčovým materiálem a generovat z něj bezpečné klíče. PRF má silnější požadavky než MAC, protože musí produkovat výstupy nerozlišitelné od náhodných hodnot. Tato hierarchie je důležitá pro správné použití těchto funkcí v různých kryptografických aplikacích.

!!! info "Možnosti konstrukce klíčovaného hashe z neklíčovaného"
    - Prefixed MAC $MAC = H(K || M)$
    - Suffixed MAC $MAC = H(M || K)$
    - Enveloping MAC $MAC = H(K || M || K)$
    - Nested MAC $NMAC = H(K2 || H(K1 || M))$