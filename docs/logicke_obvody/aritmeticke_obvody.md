# Aritmetické obvody
Aritmetické obvody jsou takové obvody, které realizuje aritmetické operace (sčítání, odčítání, násobení a dělení).

## Sčítačky a odečítačky
Sčítačka je aritmetický obvod, který realizuje aritmetickou operaci _sčítání_ mezi dvěma čísly.

### Sčítání
Sčítání binárních čísel se provádí po dvojicích bitů. 

Nejmenší možnou verzí sčítačky je __půlsčítačka__. Jedná se o obvod, který umí vzít jednobitová čísla $A$ a $B$ a binárně je sečíst. Jejím výstupem je jednobitový výsledek $S$ a jednobitový příznak $C$, který indikuje, že při součtu došlo k přenosu do vyššího řádu.

!!! example "Schéma půlsčítačky"
    ![Schéma půlsčítačky](../images/pulscitacka.png)

__Úplná sčítačka__ bere v potaz přenos z předchozího řádu a započítává ho do operandů. Skládá ze dvou polosčítaček a obvodu logického součtu. Polosčítačka má na vstupu vždy dvě logické hodnoty, mezi kterými provede XOR pro zjištění sumy a AND pro zjištění zjištění hodnoty přetečení. Jedna polosčítačka zjistí součet bez využití přetečení a druhá přidá k tomuto výsledku přenos.

!!! example "Schéma úpné sčítačky"
    ![Schéma půlsčítačky](../images/uplna_scitacka.svg)

!!! question "Co se stane s přenosem na konci výpočtu?"
    Pokud nastane situace, že na konci výpočtu stále máme přenos, jedná se o stav, který se nazývá __přetečení__ (_overflow_). 
    
    Tento stav je považován za chybový, protože poté nemůžeme garantovat správnost výsledku sčítačky (tím, že se přenáší do vyššího řádu, není výpočet hotov, ale sčítačka už kvůli omezenému počtu bitů nemůže počítat dál)


!!! warning "Tohle není moje"
    Tuto sekci ještě musím přepsat, aby byla jednodušší na pochopení :)

Paralelní sčítačky jsou tvořené jednobitovými sčítačkami zapojených do série tak, že overflow jedné sčítačky je přiveden na carry další sčítačky. To značně zpomaluje výstup vyšších bitů oproti jejich vstupům. Proto se využívají sériové a sérioparalelní sčítačky.

Sériové sčítačky mají jednoduché zapojení a malé zpoždění. Výsledek sumy může být odváděn do posuvného registru, do kterého se postupně přidávají. Sériová sčítačka využívá paměti D pro uchování hodnoty overflow, která je při dalším výpočtu využita jako hodnota carry. Délka zpracování m-bitového součtu je m hodinových taktů, proto lze spojit kompromis ve formě sérioparalelní sčítačky.

### Odečítání
K odečítání se využívá sčítačky kde druhý z operandů je negován. Jako carry vstup sčítačky je v případě odečítání nastavena log. 1  (negováné binární číslo + 1 => dvojkový doplněk). U odečítaní se místo overflow využívá borrow. Overflow má při odečítání jiný význam. Pokud dojde k overflow, znamená to, že dvě kladná čísla
jsou sečtena a výstupní přenos signalizuje kladný výsledek, ale nejvyšší bit součtu je roven 1 tzn. výsledek je záporný. Může také nastat underflow, kde jsou naopak sečtena záporná čísla ale nejvyšší bit značí, že je číslo kladné.

### Přetečení


## Násobičky
## Sériové násobičky
Mají vstupy A a B. Délka opakování výpočtu jé dána délkou vstupu B (3 bity = 3 opakování). Nejdříve je proveden AND(A,B\[počet provedených opakování\]). Tento součin je spolu se vstupem posledního výsledku (z počátku nuly) přiveden do sčítačky. Výsledek sčítání i s přetečením je uložen do posuvného registru C1. Jeho sériový výstup je přiváděn na vstup posuvného registru C0. Dojde k posunu hodnot o jedna doprava. Následně opakuj dokud jsou hodnoty B.

příklad $7_D*5_D$

| operace        | C1   | C0  | AND(A,B) |
| -------------- | ---- | --- | -------- |
| počítej součin | 0000 | 000 | 111      |
| přičti součin  | 0111 | 000 |          |
| posuň C1 a C0  | 0011 | 100 |          |
| počítej součin | 0011 | 100 | 000      |
| přičti součin  | 0011 | 100 |          |
| posuň C1 a C0  | 0001 | 110 |          |
| počítej součin | 0001 | 110 | 111      |
| přičti součin  | 1000 | 110 |          |
| posuň C1 a C0  | 0100 | 011 |          |

$111_B * 101_B =0100011_B$
$7_D*5_D=35_D$

## Paralelní násobičky
Násobení se provádí během jediného taktu hodin. Při realizaci
násobičky pomocí logických obvodů vzniká pravidelná struktura se součinovými hradly a úplnými jednobitovými sčítačkami (FA) a polosčítačkami (HA).

obrázek?
# Děličky
Zatímco násobení v sériové násobičce bylo prováděno pomocí operací sčítání a posunu, dělení se provádí pomocí operace odčítání a posunů. Dělení vyžaduje složitější řízení výpočtu, a proto jej není vhodné provádět pomocí kombinačního obvodu. Výjimku tvoří dělení číslem 2m, neboť to odpovídá pouze posunu řádové čárky a tyto posuny se kombinačním obvodem snadno provedou. Rozlišujeme algoritmy dělení s návratem přes nulu a bez návratu přes nulu.

Při dělení s návratem přes nulu se postupuje jako při celočíselném dělení v desítkové soustavě. Ale jsou zde pouze možnosti 0 a 1. Příklad $0,101_B / 0,110_B$

| 1   | 0   | 1   | :   | 1   | 1   | 0   | =   |     |     |     |     |                                                  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ------------------------------------------------ |
| -1  | 1   | 0   |     |     |     |     |     |     |     |     |     |                                                  |
|     |     | =-1 |     |     |     |     |     | 0   |     |     |     | záporný zbytek, 1. bit podílu                    |
| +1  | 1   | 0   |     |     |     |     |     |     |     |     |     | Návrat                                           |
| =1  | 0   | 1   |     |     |     |     |     |     |     |     |     | Zrekonstruovaná hodnota dělence                  |
|     | -1  | 1   | 0   |     |     |     |     |     |     |     |     | odečtení dělitele posunutého o jeden řád doprava |
|     | =1  | 0   | 0   |     |     |     |     |     | 1   |     |     | kladný zbytek, 2. bit podílu                     |
|     |     | -1  | 1   | 0   |     |     |     |     |     |     |     | odečtení dělitele posunutého o jeden řád doprava |
|     |     | =1  | 0   | 0   |     |     |     |     |     | 1   |     | kladný zbytek, 3. bit podílu                     |
|     |     | -1  | 1   | 0   |     |     |     |     |     |     |     | odečtení dělitele posunutého o jeden řád doprava |
|     |     |     | =-1 | 0   |     |     |     |     |     |     | 0   | záporný zbytek, 4. bit podílu                    |
|     |     | +1  | 1   | 0   |     |     |     |     |     |     |     | Návrat                                           |
|     |     | =1  | 0   | 0   |     |     |     |     |     |     |     | Zbytek                                           |

Při dělení bez návratu přes nulu není prováděna rekonstrukce dělence při záporném
zbytku, ale rovnou je k tomuto zbytku přičtena hodnota dělitele posunutého o příslušný počet řádů
odpovídající vyčíslovanému bitu podílu.
