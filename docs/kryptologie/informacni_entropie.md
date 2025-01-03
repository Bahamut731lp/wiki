# Informační entropie
Entropie [diskrétní náhodné veličiny](../matematika/statistika/teorie_pravdepodobnosti/nahodna_velicina.md) $X$ je jednotka udávající očekáváné množství informace potřebné k popisu proměnné.

$$
H(X) = -\sum_{x \in X} p(x) \cdot \log{p(x)}
$$

Kde $\sum_{x \in X}$ značí součet všech možných hodnot diskrétní náhodné veličiny $X$ a $p(x)$ je pravděpodobnost výskytu dané hodnoty. Volba základu logaritmu ovlivňuje výsledné jednotky, kdy logaritmus o základu 2 vrací bity (shannony), logaritmus s eulerovým číslem jako základem (přirozený logaritmus) vrací přirození jednotky (nats) a logaritmus se základem 10 vrací digity (hartleys, bans).

Základní myšlenkou teorie informace je, že „informační hodnota“ předávané zprávy závisí na míře, jak je obsah zprávy překvapivý. Není žádným překvapením, když dojde k události, která je velmi pravděpodobná. Naopak, v případě málo pravděpodobných událostí, je jejich výskyt mnohem informativnější.

!!! example ""
    Například znalost, že určité číslo nevyhraje v loterii, nese velmi malou informaci, protože jakékoli určité číslo téměř určitě nevyhraje. Ale znalost, že určité číslo v loterii vyhraje, má vysokou informační hodnotu, protože informuje o události s velmi nízkou pravděpodobností.

Entropie měří očekávané (tj. průměrné) množství informace obsažené v informaci o výsledku [náhodného pokusu](../matematika/statistika/teorie_pravdepodobnosti/jevy.md). Z toho vyplývá, že vrh kostkou má vyšší entropii než házení mincí, protože každý z výsledků vrhu kostkou má menší pravděpodobnost ( p = 1 6 {\displaystyle p={\frac {1}{6}}}) než každý z výsledků vrhu mincí ( p = 1 2 {\displaystyle p={\frac {1}{2}}}). 

## Informační entropie v šifrách
Aby šifra poskytovala perfektní bezpečnost, musí mít klíč alespoň tak velkou entropii, jakou má zpráva. Jinými slovy, klíč musí být dostatečně dlouhý a složitý, aby skryl veškerou informaci obsaženou ve zprávě. Pokud by klíč nebyl dostatečně náhodný nebo dlouhý, mohl by útočník využít informace obsažené v ciphertextu (zašifrované zprávě) k odvození původního textu.

Vernamova šifra je šifrovací systém, který má za splnění jeho podmínek absolutní bezpečnost. K tomu využívá vlastností [informační entropie](informacni_entropie.md), konkrétně fakt, že nižší entropie zprávy a klíče 

Pokud jde o zprávy nekonečné délky, například proud dat generovaný určitou logikou (třeba Markovovým procesem), je jasné, že žádný konečný klíč nemůže zajistit dokonalé utajení. Pro šifrování takových zpráv je nutné použít nekonečný klíč, například nekonečný proud náhodných symbolů. Zároveň platí, že délka použitého klíče musí odpovídat délce šifrované zprávy, aby bylo možné dosáhnout perfektní bezpečnosti.

V praxi tedy platí, že klíč musí být dostatečně složitý, aby zajistil bezpečnost šifry. U nekonečných zpráv je nezbytné, aby byl klíč také nekonečný, což je v reálném světě často obtížné. Perfektní bezpečnost lze tedy dosáhnout pouze tehdy, pokud entropie klíče odpovídá nebo převyšuje entropii zprávy.

$$
    R_M \cdot L_M  \le R_K \cdot L_K
$$