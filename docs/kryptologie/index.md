# Kryptologie
Kryptologie je disciplína, která se zabývá studováním šifrovacích systémů, které slouží k utajování zpráv a informací.

- __Kryptografie__ je disciplína, která se zabývá utajováním zpráv. To probíhá převodem čitelného textu (plaintext) do jeho nečitelné podoby (ciphertext). Tato nečitelná podoba je čitelná jenom se znalostí speciálních okolností (klíče).
- __Kryptoanalýza__ se naopak zaměřuje na analýzu a lámání šifrovacích systémů s cílem získat původní informace bez znalosti klíče.

## Bezpečnost šifer
Základním principem úspěšné ochrany dat pomocí kryptografie je [Kerckhoffův princip](./kerckhoffuv_princip.md), který říká, bezpečnost šifrovacího systému nesmí záviset na utajení (de)šifrovacího algoritmu, ale pouze na utajení klíče. Dodržení [Kerckhoffova principu](./kerckhoffuv_princip.md) je jednou z důležitých vlastností, která zákládá bezpečnost moderních šifer.

### Modely útoků
Cílem útočníků, kteří se snaží prolomit danou šifru, mohou být tři následující oblasti:

- __Key recovery attack__ – cílem je určit použitý klíč
- __Plaintext recovery attack__ – cílem je dešifrovat zašifrovaný text.
- __Distinguishing attack__ – cílem je zjistit, zda daný text je šifrová zpráva, nebo jde o náhodná data

Toho může útočník docílit několika způsoby. Podle toho, co má útočník k dispozici, se rozlišují [modely útoku](./modely_utoku.md) na:

- __Ciphertext only attack__ (COA) - útočník má k dispozici pouze šifrový text.
- __Known plaintext attack__ (KPA) - útočník má k dispozici otevřený text a jemu odpovídající šifrový text.
- __Chosen plaintext attack__ (CPA) - útočník má možnost volit otevřené texty a získává tomu odpovídající
šifrové texty.
- __Chosen ciphertext attack__ (CCA) - kromě CPA má útočník navíc možnost volit šifrové texty a získává tomu
odpovídající otevřené texty.

Pokud pak mluvíme o hodnocení samotné bezpečnosti šifry, můžeme ji hodnotit jako odolnost vůči zmíněným modelům útoku. Poté můžeme o šifrách prohlásit, že mají:

- __Absolutní bezpečnost__ - Otevřený text nelze nikdy jednoznačně určit bez ohledu na množství zachycené informace.
- __Dokazatelnou bezpečnost__ - Prolomení systému vyžaduje vyřešení těžkého výpočetního problému, například faktorizace nebo diskrétní logaritmus.
- __Výpočetní bezpečnost__ - Prolomení systému není možné systematickou analýzou s použitím dostupných zdrojů nebo v rozumné době.

Jednotlivé modely útoku totiž spoléhají na to, že zašifrovaný text odráží statistické vlastnosti otevřeného textu (např. výskyt nejčastějších písmen, délky slov, ...). Princip [konfúze a difúze](konfuze_difuze.md) slouží k tomu, aby se statistické vlastnosti těchto jednotlivých částí rozprostřely do zašifrovaného textu a vznikla tak sloužitější závislost mezi klíčem, otevřeným textem a zašifrovaným textem.

### Entropie
!!! bug "TODO"

### Náhodná a pseudonáhledná čísla
!!! bug "TODO"

## Perfektní šifra
V šifrovacím systému musíme zohlednit dvě hlavní nejistoty: nejistotu ohledně zprávy a nejistotu ohledně klíče. Nejistotu zprávy určujeme pomocí tzv. [entropie](./informacni_entropie.md) zprávy $H(M)$, což je míra informace obsažené ve zprávě. Pokud jsou všechny možné zprávy stejně pravděpodobné, je entropie největší. Na druhé straně je zde entropie klíče $H(K)$, která měří nepředvídatelnost výběru šifrovacího klíče. Klíč s vyšší entropií je bezpečnější, protože je méně pravděpodobné, že jej útočník odhalí.

!!! info "Entropie"
    Entropie [diskrétní náhodné veličiny](../matematika/statistika/teorie_pravdepodobnosti/nahodna_velicina.md) $X$ je jednotka udávající očekáváné množství informace potřebné k popisu proměnné.

    $$
    H(X) = -\sum_{x \in X} p(x) \cdot \log{p(x)}
    $$

Aby šifra poskytovala perfektní bezpečnost, musí mít klíč alespoň tak velkou entropii, jakou má zpráva. Jinými slovy, klíč musí být dostatečně dlouhý a složitý, aby skryl veškerou informaci obsaženou ve zprávě. Pokud by klíč nebyl dostatečně náhodný nebo dlouhý, mohl by útočník využít informace obsažené v ciphertextu (zašifrované zprávě) k odvození původního textu. Vernamův kryptosystém, který je také známý jako jednorázová tabulka (one-time pad), je šifrovací technika, která používá náhodný klíč stejné délky jako zpráva. Pokud je klíč skutečně náhodný, použit pouze jednou a utajen, poskytuje absolutní bezpečnost.

Přenášení klíče o stejné délce jako zpráva je nepraktické, proto se pro každý šifrovací systém doporučují takové délky klíče, které tvoří lámání šifry tak časově náročné, že se to útočníkům nevyplatí.

## Symetrické šifry
[Symetrické šifry](./symetricka_sifra.md) jsou takové šifry, které k šifrování a dešifrování používají jeden a ten samý klíč. Tyto šifry dále dělíme na blokové šifry, které šifrují otevřený text po blocích dané velikosti. Proudové šifry zase šifrují data po jednotlivých bitech.

### Blokové šifry
Blokové symetrické šifry kombinují své dílčí výstupy do jednoho velkého zašifrovaného textu. Jakým způsobem takové kombinování probíhá se dá přizpůsobit pomocí __operačních režimů__, které upravují fungování šifrovacího procesu.

### AES
[Advanced Encryption Standard](./aes/index.md) je [symetrická bloková šifra](../symetricka_sifra.md), která pracuje s 128 bitovými bloky dat. Funguje na principu transformace vstupních bloků pevné délky (128 bitů) na zašifrované výstupní bloky stejné délky pomocí série kryptografických operací a tajného klíče.

AES i jako další blokové šifry mají provozní režimy, které mění způsob šifrování textu. Nejzákladnějším je _ECB_, který šifruje každý blok zvlášť, poté _CBC_, který šifruje každý blok až poté, co je přidán k předchozímu zašifrovanému textu, a posledním důležitým módem je _CTR_, který šifruje hodnotu čítače a poté ho XORuje s otevřeným textem.

### Proudové šifry
Proudové šifry šifrují otevřený text tím, že ho kombinují s proudem pseudonáhodných bitů, který se chová jako klíč, tzv. __keystream__. Proudové šifry jsou obzvláště vhodné pro aplikace, kde je potřeba šifrovat data průběžně, jako například v komunikačních protokolech nebo streamovaném videu.

Vytvoření klíčového proudu probíhá pomocí [inicializačního vektoru](./aes/inicializacni_vektor.md) a šifrovacího klíče. Podobně se pak text dešifruje, kdy se dešifrovací proud vytváří ze stejného vektoru a klíče. Klíčové je u proudových šifer mít správný inicializační vektor a mít bity klíče a dat synchronizované. Pokud by se synchronizace narušila, způsobí to chyby při následném šifrování či dešifrování. Bezpečnost celé šifry stojí na jedinečnosti klíčového proudu, kdy nesmí být opakovaně použit pro různé zprávy, a generátor pseudonáhodných čísel musí být považován za bezpečný.

Mezi proudové šifry patří například [AES v režimu CFB](./aes/rezimy.md#cfb), RC4 nebo Bluetooth Stream Cipher.

## Asymetrické šifry


# Otázky ke zkoušce KAS

- [X] Pojmy kryptografie a kryptoanalýza.
- [ ] Základní funkce šifrování.
- [X] Kerckhoffův princip.
- [ ] Vermanův kryptosystém.
- [ ] Bezpečnost šifry, její kvantitativní vyjádření. V současnosti doporučené hodnoty.
- [X] Modely útoku na šifru, bezpečnostní cíle a koncepty.
- [ ] Náhodná čísla v kryptografii
- [X] Pojem entropie v informatice.
- [ ] Generování náhodných a pseudonáhodných čísel. Entropie hesel.
- [X] Rozdělení symetrických šifer. 
- [X] Principy konfúze a difúze.
- [X] Blokové šifry, princip konstrukce.
- [X] AES, základní principy.
- [X] Módy použití blokových šifer ECB, CBC, CTR.
- [X] Proudové šifry. Základní principy, příklady současných a minulých proudových šifer.
- [ ] Hashovací funkce. Definice, požadavky na kryptografickou hashovací funkci. 
- [ ] Narozeninový útok, "ró" útok.
- [ ] Konstrukce hashovacích funkcí.
- [ ] Davies Meyerova konstrukce, "houba".
- [ ] Používané hashovací funkce.
- [ ] Hashování s klíčem, MAC, PRF.
- [ ] Možnosti konstrukce klíčovaného hashe z neklíčovaného.
- [ ] Symetrické šifry s autentizací. Možné konstrukce.
- [ ] Autorizovaná šifra s přidruženými daty. AES GCM
- [ ] Diffie Hellmanova funkce, její použití.
- [ ] Protokoly pro tvorbu sdíleného tajemství.
- [ ] Asymetrické kryptosystémy, základní principy, výhody a nevýhody oproti symetrickým šifrám.
- [ ] RSA.
- [ ] TLS - funkce, základní principy, protokoly, použitá kryptografie.
- [ ] Přístupové kryptosystémy. Základní principy, autorizace, autentizace. Příklady protokolů.
- [ ] Stavební prvky kryptografie - základní kryptografické funkce a proměnné.
- [ ] Kvantová distribuce klíče - základní princip.