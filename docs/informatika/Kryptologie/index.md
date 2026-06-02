# Kryptologie
Kryptologie je disciplína, která se zabývá studováním šifrovacích systémů, které slouží k utajování zpráv a informací.

- __Kryptografie__ je disciplína, která se zabývá utajováním zpráv. To probíhá převodem čitelného textu (plaintext) do jeho nečitelné podoby (ciphertext). Tato nečitelná podoba je čitelná jenom se znalostí speciálních okolností (klíče).
- __Kryptoanalýza__ se naopak zaměřuje na analýzu a lámání šifrovacích systémů s cílem získat původní informace bez znalosti klíče.

## Entropie
Základní myšlenkou teorie informace je, že _informační hodnota_ předávané zprávy závisí na míře, jak je obsah zprávy překvapivý. Není žádným překvapením, když dojde k události, která je velmi pravděpodobná. Naopak, v případě málo pravděpodobných událostí, je jejich výskyt mnohem informativnější. Entropie měří očekávané (tj. průměrné) množství informace obsažené v informaci o výsledku [náhodného pokusu](../matematika/statistika/teorie_pravdepodobnosti/jevy.md).

!!! info "Entropie"
    Entropie [diskrétní náhodné veličiny](../matematika/statistika/teorie_pravdepodobnosti/nahodna_velicina.md) $X$ je jednotka udávající očekáváné množství informace potřebné k popisu proměnné.

    $$
    H(X) = -\sum_{x \in X} p(x) \cdot \log{p(x)}
    $$

!!! question "Intuice za entropií?"
    Entropie, neboli míra nepředvídatelnosti, odpovídá na otázku: "jak moc se musím ptát, abych se dostal k výsledku?" Přímo nám říká, jak moc předvídatelný, resp. nepředvídatelný, je výsledek [náhodného pokusu](../matematika/statistika/teorie_pravdepodobnosti/jevy.md). Pokud je nějaký z výsledků pokusu více pravděpodobný, tak bude entropie nižší, protože bude padat častěji, než ty ostatní. Naopak pokud mají pravdě
    
    Je to jako kdybychom hráli šibenici. Kdybychom hráli jednu hru s anglickou abecedou, a druhou hru s českou abecedou a diakritikou, tak první hra bude mít nižší entropii, protože při pokládání otázek nemusíme přemýšlet nad háčky a čárky, a rychleji tak vyřadíme nesmyslná písmena. Naopak u hry s českou abecedou a diakritikou musíme pokládat více otázek, protože musíme uvažovat háčky a čárky a člověk myslící si slovo má větší výběr možných slov.

!!! example "Entropie čísel v loterii"
    Například znalost, že určité číslo nevyhraje v loterii, nese velmi malou informaci, a má tak nízkou entropii, protože jakékoli určité číslo téměř určitě nevyhraje. Ale znalost, že určité číslo v loterii vyhraje, má vysokou informační hodnotu a tudíž velkou entropii, protože informuje o události s velmi nízkou pravděpodobností.

V šifrovacím systému chceme mít co největší možnou entropii, tj. nejvyšší možnou míru nepředvídatelnosti, ohledně zprávy a klíče. Pokud má zpráva velkou entropii, není její výskyt vůbec překvapivý, stejně tak jako výskyt jiné zprávy (mají stejnou pravděpodobnost výskytu). Podobně uvažujeme i u klíče, kde chceme dosáhnout maximální entropie. Pokud mají všechny klíče stejnou pravděpodobnost výskytu, je entropie maximální, protože nedokážeme předvídat.

!!! tip "Entropie hesla"
    Entropie hesla je klíčovým faktorem pro jeho bezpečnost. V podstatě označuje, jak těžké by bylo uhádnout heslo pomocí útoků jako je hrubá síla nebo útok na slovník. Pokud heslo obsahuje vysokou entropii, znamená to, že je těžké předvídat nebo rozluštit, což výrazně zvyšuje bezpečnost účtu. Entropie hesla se vypočítá podle počtu možných kombinací znaků, které heslo používá, a jeho délky. Vzorec pro výpočet entropie hesla je:

    $$
        H = L \cdot \log⁡_2{(N)}
    $$

    kde $H$ je entropie v bitech, $L$ je délka hesla, a $N$ je počet možných znaků v abecedě (např. pro alfanumerické heslo by $N$ bylo 62, pokud používáte malá a velká písmena a číslice).

## Pseudonáhodná čísla
Entropie úzce souvisí s generováním čísel. Vyšší entropie znamená vyšší úroveň náhodnosti a obtížnější předvídatelnost, což je zásadní pro bezpečnost kryptografických operací.

Generování náhodných a pseudonáhodných čísel lze rozdělit do dvou kategorií:

1. __Pravá náhodná čísla__ (TRNG - True Random Number Generators): Tato čísla jsou generována na základě fyzikálních jevů, jako je šum v elektronických obvodech nebo radioaktivní rozpad. Jsou skutečně náhodná a nepředvídatelná, ale jejich generování může být pomalejší a náročnější na hardware.
2. __Pseudonáhodná čísla__ (PRNG - Pseudorandom Number Generators): Tato čísla jsou generována algoritmicky a při stejném počátečním stavu (seed) produkují stejnou posloupnost čísel. I když nejsou skutečně náhodná, mohou být dostatečně nepředvídatelná pro mnoho aplikací, zejména pokud jsou inicializována kvalitním seedem s vysokou entropií.

!!! tip "Je potřeba vysoké entropie"
    V kryptografii je důležité používat generátory s vysokou entropií, aby byla zajištěna bezpečnost klíčů a dalších tajných hodnot. Nedostatečná entropie může vést k předvídatelným výsledkům a tím k oslabení kryptografických systémů.

## Sdílené tajemství

### Diffie-Hellman
Diffie-Hellmanova výměna klíčů je kryptografický protokol, který umožňuje dvěma stranám bezpečně sdílet tajný klíč přes nezabezpečený kanál. Tento sdílený klíč může být následně použit pro šifrování komunikace pomocí symetrických šifer.

!!! info "Jak funguje Diffie-Hellman?"
    - __Veřejná dohoda__: Obě strany se veřejně dohodnou na dvou hodnotách: velkém prvočísle $p$ a základně $g$, které jsou veřejně známé a nemusí být chráněny.
    - __Výběr tajných klíčů__: Každá strana si zvolí tajný klíč: Alice zvolí $a$ a Bob $b$.
    - __Výpočet veřejných hodnot__: Alice vypočítá $A = g^a \mod{p}$ a Bob $A = B^b \mod{p}$.
    - __Výměna veřejných hodnot__: Alice a Bob si vymění hodnoty $A$ a $B$.
    - __Výpočet sdíleného klíče__: Alice vypočítá $s = B^a \mod{p}$ a Bob $s = A^b \mod{p}$. Díky vlastnostem umocňování v modulární aritmetice platí, že $s$ je stejný pro obě strany.

!!! quote ""
    ![diffie_helman](../images/DiffieHellman.png)


## TLS
TLS (Transport Layer Security) je skupina protokolů používaný k zajištění bezpečné komunikace přes počítačové sítě, například na internetu. Nahrazuje starší protokol SSL (Secure Sockets Layer) a poskytuje následující klíčové funkce:

- __Šifrování__: Ochrana přenášených dat před odposlechem.
- __Autentizace__: Ověření identity komunikujících stran (např. serveru pomocí certifikátů).
- __Integrita__: Zajištění, že data nebyla během přenosu modifikována

### Record Protokol

### Handshake Protokol
Handshake protokol slouží k inicializaci zabezpečeného spojení mezi klientem (např. webový prohlížeč) a serverem (např. webový server). Během handshake fáze se dohodnou na šifrovacích algoritmech, vymění si klíče a autentizují se, čímž zajistí, že následující komunikace bude šifrovaná, autentická a integritní.

![tls_handshake](../images/tls_handshake.png)

## Přístupové systémy
Přístupové kryptosystémy zahrnují mechanismy, které se používají pro řízení přístupu uživatelů nebo zařízení k systémům, datům nebo síťovým prostředkům (tzv. __aktiva__). Tyto systémy zajišťují, že pouze oprávněné subjekty mohou provádět akce na chráněných zdrojích.

!!! example "Obecné schéma přístupového systému"
    ![Schéma přístupového systému](../images/pristupovy_system_schema.png)

V obecném případě máme __entitu__, která chce získat přístup ke __chráněným zdrojům__ (aktivům). Úkol přístupového systému je zjistit, zda je entita tím, za koho se prokazuje, a zda má právo k danému zdroj přistoupit. Svojí identitu prokazuje entita procesem autentizace, zatímco svojí pravomoc přístupu ke zdroji řídí __autorizace__. 

!!! question "Co je autentizace?"
    __Autentizace__ je proces slouží k ověření identity uživatele nebo systému. Autentizace může být založena na něčem, co víte (např. heslo), něčem, co máte (např. karty nebo tokeny), nebo něčem, čím jste (biometrické údaje).

    - __Identita__: Za koho se entita snaží prokázat
    - __Dokazovací faktor__: Čím se snaží entita ověřuje (např. heslo)
    - __Ověřovácí faktor__: Čím autorita ověřuje identitu (např. hash hesla v databázi)

!!! question "Co je autorizace?"
    __Autorizace__ je proces, kdy se a dochází k ověření

    Po autentizaci systém určuje, jaká práva a přístupy jsou uživateli nebo systému povoleny. Autorizace je založena na předchozím ověření a je řízena pomocí pravidel, jako jsou přístupové seznamy nebo role.

!!! info "Protokoly"
    - __Autentizační protokoly__:  EAP, Kerberos
    - __Autorizační protokoly__: OAuth
    - __Přístupové protokoly__: RADIUS

