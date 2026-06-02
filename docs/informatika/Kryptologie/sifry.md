# Šifrování
Šifrování je proces utajování zpráv. To probíhá převodem čitelného textu (plaintext) do jeho nečitelné podoby (ciphertext). Tato nečitelná podoba je čitelná jenom se znalostí speciálních okolností (klíče).

!!! danger "Kerckhoffův princip"
    Bezpečnost šifrovacího systému nesmí záviset na utajení algoritmu. Bezpečnost musí být založena pouze na utajení klíče.

## Vlastnosti šifer
Základní funkce šifrování:

- __Důvěrnost__: Zajištění, že informace jsou přístupné pouze oprávněným osobám.
- __Integrita__: Ochrana před neoprávněnou modifikací dat.
- __Autenticita__: Ověření identity komunikujících stran.
- __Nepopiratelnost__: Zajištění, že odesílatel nemůže popřít odeslání zprávy.

!!! info "Výpočetně bezpečný kryptografický systém"
    Výpočetně bezpečný kryptografický systém nelze prolomit systematickou analýzou s použitím dostupných zdrojů nebo v rozumné době. Jeho prolomení s použitím nejefektivnějších útoků je natolik složité, že převyšuje zdroje a výpočetní možnosti útočníka. Za výpočetně bezpečné systémy pro vojenské užití se považují kryptografické systémy s výpočetní složitostí minimálně $2^{256}$. Pro komerční účely se nachází výpočetní složitost v rozmezí $2^{80}$ až $2^{256}$.

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

Jednotlivé modely útoku spoléhají na to, že zašifrovaný text odráží statistické vlastnosti otevřeného textu (např. výskyt nejčastějších písmen, délky slov, ...). Princip [konfúze a difúze](konfuze_difuze.md) slouží k tomu, aby se statistické vlastnosti těchto jednotlivých částí rozprostřely do zašifrovaného textu a vznikla tak sloužitější závislost mezi klíčem, otevřeným textem a zašifrovaným textem.

## Typy šifer

### Perfektní šifra
Aby šifra poskytovala perfektní bezpečnost, musí mít klíč alespoň tak velkou entropii, jakou má zpráva. Jinými slovy, klíč musí být dostatečně dlouhý a složitý, aby skryl veškerou informaci obsaženou ve zprávě. Pokud by klíč nebyl dostatečně náhodný nebo dlouhý, mohl by útočník využít informace obsažené v ciphertextu (zašifrované zprávě) k odvození původního textu. Vernamův kryptosystém, který je také známý jako jednorázová tabulka (one-time pad), je šifrovací technika, která používá náhodný klíč stejné délky jako zpráva. Pokud je klíč skutečně náhodný, použit pouze jednou a utajen, poskytuje absolutní bezpečnost.

Proces šifrování pomocí Vernamovy šifry je prostý. Pro každý znak otevřeného textu se vygeneruje celočíselný náhodný posun modulo délka abecedy. Tento posun se uloží jako součást klíče. Takto se zašifruje celý text. Dešifrování postupuje přesně opačným postupem, kdy se postupně posuny z klíče aplikují 

### Symetrické šifry
Symetrické šifry jsou takové šifry, které k šifrování a dešifrování používají jeden a ten samý klíč. Tyto šifry dále dělíme na blokové šifry, které šifrují otevřený text po blocích dané velikosti. Proudové šifry zase šifrují data po jednotlivých bitech.

#### Blokové šifry
Blokové symetrické šifry kombinují své dílčí výstupy do jednoho velkého zašifrovaného textu. Jakým způsobem takové kombinování probíhá se dá přizpůsobit pomocí __operačních režimů__, které upravují fungování šifrovacího procesu.

#### AES
Advanced Encryption Standard je symetrická bloková šifra, která pracuje s 128 bitovými bloky dat. Funguje na principu transformace vstupních bloků pevné délky (128 bitů) na zašifrované výstupní bloky stejné délky pomocí série kryptografických operací a tajného klíče.

AES i jako další blokové šifry mají provozní režimy, které mění způsob šifrování textu. Nejzákladnějším je _ECB_, který šifruje každý blok zvlášť, poté _CBC_, který šifruje každý blok až poté, co je přidán k předchozímu zašifrovanému textu, a posledním důležitým módem je _CTR_, který šifruje hodnotu čítače a poté ho XORuje s otevřeným textem.

#### Proudové šifry
Proudové šifry šifrují otevřený text tím, že ho kombinují s proudem pseudonáhodných bitů, který se chová jako klíč, tzv. __keystream__. Proudové šifry jsou obzvláště vhodné pro aplikace, kde je potřeba šifrovat data průběžně, jako například v komunikačních protokolech nebo streamovaném videu.

Vytvoření klíčového proudu probíhá pomocí inicializačního vektoru a šifrovacího klíče. Podobně se pak text dešifruje, kdy se dešifrovací proud vytváří ze stejného vektoru a klíče. Klíčové je u proudových šifer mít správný inicializační vektor a mít bity klíče a dat synchronizované. Pokud by se synchronizace narušila, způsobí to chyby při následném šifrování či dešifrování. Bezpečnost celé šifry stojí na jedinečnosti klíčového proudu, kdy nesmí být opakovaně použit pro různé zprávy, a generátor pseudonáhodných čísel musí být považován za bezpečný.

Mezi proudové šifry patří například [AES v režimu CFB](./aes/rezimy.md#cfb), RC4 nebo Bluetooth Stream Cipher.

#### Symetrické šifry s autentizací
Symetrické šifry s autentizací kombinují šifrování a autentizaci do jednoho procesu, čímž zajišťují jak důvěrnost, tak integritu a autenticitu dat. Tato kombinace je klíčová pro efektivní a bezpečnou komunikaci v moderních kryptografických systémech. Existuje několik způsobů, jak tyto šifry implementovat.

Authenticated Encryption (AE) je jedním z přístupů, který integruje šifrování a autentizaci do jednoho kroku. Tento přístup zajišťuje, že šifrovaná data jsou nejen chráněna před neoprávněným přístupem, ale také že příjemce může ověřit jejich integritu a autenticitu. Příklady implementací AE zahrnují Galois/Counter Mode (GCM) a Counter with CBC-MAC (CCM). GCM je mód blokové šifry, který poskytuje jak šifrování, tak autentizaci pomocí Galoisovy funkce. Tento mód je široce používán v moderních kryptografických protokolech díky své efektivitě a bezpečnosti. CCM kombinuje mód Counter pro šifrování s CBC-MAC pro autentizaci a je rovněž silně doporučován pro aplikace vyžadující silnou ochranu.

Dalším přístupem je metoda MAC-then-Encrypt (MtE), která nejprve generuje Message Authentication Code (MAC) pro zprávu a poté šifruje jak původní zprávu, tak MAC. Příjemce nejprve dešifruje zprávu a následně ověřuje MAC, aby zajistil integritu a autenticitu dat. I když tato metoda poskytuje určitou úroveň bezpečnosti, může být zranitelná vůči určitým útokům, pokud není správně implementována.

Encrypt-then-MAC (EtM) je konstrukce, která šifruje zprávu jako první a poté generuje MAC pro šifrovaný text. Tato metoda je považována za bezpečnější než MtE, protože útočník nemůže manipulovat s šifrovaným textem bez detekce. EtM je široce doporučována v kryptografických standardech a používá se pro zajištění silné ochrany před útoky na integritu a autenticitu.

Konečně existuje metoda Encrypt-then-Authenticate-then-Transmit (EAT), která zahrnuje tři kroky: nejprve se šifruje zpráva, poté se generuje MAC pro šifrovaný text a nakonec se odesílá šifrovaný text spolu s MAC. Tato konstrukce poskytuje silnou ochranu proti různým útokům, včetně útoků na integritu a autenticitu, a je považována za jednu z nejbezpečnějších.

Při výběru vhodné konstrukce je důležité zvážit specifické požadavky aplikace, včetně požadavků na výkon, bezpečnost a kompatibilitu s existujícími systémy. Moderní kryptografické protokoly často využívají kombinaci šifrování a autentizace, aby zajistily komplexní ochranu dat.

AES-GCM (Galois/Counter Mode) je autorizovaná šifra s přidruženými daty (AEAD), která kombinuje šifrování a autentizaci do jednoho efektivního procesu. AES-GCM využívá blokovou šifru AES v režimu Counter (CTR) pro šifrování a Galoisovu funkci pro autentizaci. Při šifrování se inicializační vektor (IV) kombinuje s počítadlem, které se inkrementuje pro každý blok dat. Tato kombinace se šifruje pomocí AES, a výsledek se XORuje s plaintextem, čímž vzniká ciphertext. Současně se pomocí Galoisovy funkce generuje autentizační tag, který zajišťuje integritu a autenticitu jak šifrovaných dat, tak přidružených dat (AAD).

### Asymetrické šifry
Asymetrické kryptosystémy, známé také jako šifrování s veřejným klíčem, využívají dvojici klíčů: veřejného a soukromého. Veřejný klíč je určen pro šifrování dat a může být volně sdílen, zatímco soukromý klíč slouží k dešifrování a musí být přísně chráněn. Tento princip umožňuje bezpečnou komunikaci mezi stranami, které nemají předchozí sdílený tajný klíč. Asymetrické šifry mají tu výhodu, že __eliminují potřebu bezpečného kanálu pro výměnu klíčů__, protože šifrování probíhá pomocí veřejného klíče. Též zajišťuje autentizaci, identifikaci autora zprávy pomocí veřejného klíče, a ověřuje autentičnost zprávy, protože zprávu nemohl nikdo vytvořit ani pozměnit bez vlastnictví privátního klíče. Nevýhodou je složitější implementace a nižší rychlost.

#### RSA
RSA je asymetrický protokol, který využívá veřejný a soukromý klíč pro šifrování a dešifrování dat. Může být použit pro bezpečnou výměnu tajného klíče mezi stranami. Tento klíč se poté používá k šifrování komunikace pomocí symetrických šifer.

#### ECDH
Tento protokol je vylepšením klasického Diffie-Hellmana a používá elliptické křivky, což zajišťuje silnou bezpečnost i při použití menších klíčů. ECDH se často používá v moderních systémech, jako je například v protokolech TLS a VPN.

### Hybridní šifry

# ESSIV
__Encrypted Salt-Sector Initialization Vector__ (zkráceně _ESSIV_), která umožňuje využít šifrovací algoritmus AES v režimu CBC pro šifrování disků. Při použití
tohoto režimu není praktické uchovávat inicializační vektory pro každý jednotlivý sektor. ESSIV dokáže tyto inicializační vektory generovat na základě
čísla sektoru $s$, šifrovacího klíče $K$, šifrovací funkce $E$ a hashovací funkce $H$. Každý sektor je pak zašifrován v režimu CBC s vygenerovaným inicializačním vektorem.

$$
    IV(s) = E_{H(K)}(s)
$$

Problém s tímto přístupem je právě použití blokové šifry v režimu CBC, kdy změna bitu v zašifrovaném textu bude mít dopad na integritu otevřeného textu po dešifrování. Pokud má útočník znalost o uspořádání otevřeného textu, je tento režim zranitelný vůči cíleným zásahům.

# Informační entropie
Entropie [diskrétní náhodné veličiny](../matematika/statistika/teorie_pravdepodobnosti/nahodna_velicina.md) $X$ je jednotka udávající očekáváné množství informace potřebné k popisu proměnné.

$$
H(X) = -\sum_{x \in X} p(x) \cdot \log{p(x)} = \sum_{x \in X} p(x) \cdot \log{\frac{1}{p(x)}}
$$

!!! bug ""
    https://www.youtube.com/watch?v=YtebGVx-Fxw

## Míra překvapení

## Entropie


# Kerckhoffův princip
Kerckhoffův princip říká, že bezpečnost šifrovacího systému by neměla souviset s utajením šifrovací metody, ale s utajením šifrovacího klíče.

!!! info ""
    Bezpečnost šifrovacího systému nesmí záviset na utajení algoritmu. Bezpečnost je založena pouze na utajení klíče.


# Konfúze a difúze
Vlastnosti konfúze a difúze (_Confusion and diffusion_) jsou v šifrách takové vlastnosti, které zvyšují bezpečnost šifry komplikováním závislostí mezi jednotlivými prvky šifry. Zatímco konfúze komplikuje vztah mezi otevřeným textem a klíčem, difúze komplikuje vztah mezi otevřeným a zašifrovaným textem.

## Konfúze
Konfúze snižuje lokální korelaci mezi otevřeným textem a zašifrovaným textem tím, že každý bit šifrovaného textu závisí na několika částech klíče. Jinak řečéno, konfúze utajuje vztah klíče a zašifrovaného textu.

## Difúze
Difůze snižuje závislost mezi otevřeným textem a zašifrovaným textem tím, že statistické vlastnosti otevřeného textu rozprostře do celého zašifrovaného textu. To znamená, že malé změny v otevřeném textu vedou k rozsáhlým změnám v šifrovaném textu a naopak.

# Modely útoků na šifru
Útočník se snaží získat původní zprávu (plaintext) nebo klíč použitý k šifrování. Různé modely útoků definují, jaké informace má útočník k dispozici:

- __Útok hrubou silou (brute force)__
    - Útočník zkouší všechny možné klíče, dokud nenajde ten správný. 
    - Cílem je odvodit klíč nebo způsob, jakým šifra funguje.
    - Odolnost závisí na délce klíče – čím delší klíč, tím je útok neproveditelnější.
- __Útok se známým ciphertextem (known-ciphertext attack)__
    - Útočník má přístup pouze k zašifrované zprávě (ciphertextu).
    - Využívá statistických vlastností zašifrované zprávy a hledání vzorů
- __Útok se známým plaintextem (known-plaintext attack)__
    - Útočník má přístup k páru otevřeného textu a odpovídajícího šifrovaného textu.
    - Analýzou těchto párů se snaží odhalit klíč nebo vzor, který by umožnil dešifrování dalších zpráv.
- __Útok se zvoleným plaintextem (chosen-plaintext attack)__ 
    - Útočník může zvolit specifický otevřený text a získat jeho šifrovanou verzi.
    - Tato schopnost mu umožňuje analyzovat, jak šifra reaguje na různé vstupy, a potenciálně odhalit slabiny v šifrovacím algoritmu.
- __Útok se zvoleným ciphertextem (chosen-ciphertext attack)__
    - Útočník má možnost dešifrovat vybrané šifrované texty a zkoumá, jaký otevřený text jim odpovídá.
    - Tento model útoku je zvláště relevantní u asymetrických šifer, kde může útočník využít veřejný klíč k šifrování zpráv a analyzovat jejich dešifrování.
- __Útok bočními kanály (side-channel attack)__
    - Útočník využívá fyzické vlastnosti šifrovacího zařízení, jako jsou časové zpoždění, spotřeba energie nebo elektromagnetické záření.
    - Nejčastěji čtení uložených klíčů v operační paměti systému

# Vernamův kryptosystém
Vernamův kryptosystém (též známý jako systém jednorázové tabulky, _one-time pad_ nebo OTP metoda) je symetrický šifrovací systém, který nelze prolomit. Používá náhodný klíč stejné délky jako zpráva. Pokud je klíč skutečně náhodný, použit pouze jednou a utajen, poskytuje absolutní bezpečnost.

