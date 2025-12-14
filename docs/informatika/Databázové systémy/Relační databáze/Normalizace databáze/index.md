# Normalizace databáze
Normalizace databáze je postup dekompozce, kterým databázi přeorganizujeme tak, aby se redukovaly [[Datová anomálie|datové anomálie]].

>[!tldr]
>- Normalizace je postup, kterým změníme databázi tak, aby se redukovaly [[Datová anomálie|datové anomálie]]
>- Anomálie v datech mohou vznikat použitím [[Data Query Language|příkazů pro manipulaci s daty]]


Normální formy jsou pravidla, podle kterých určujeme, zda je databáze normalizovaná nebo ne. Pokud relace nesplňují normální formu, rozloží se na menší relace, které už pravidla splňují.

## První normální forma
Cílem první normální formy je eliminovat opakující se skupiny a vícenásobné hodnoty v jednom sloupci.

Pro splnění první normální formy je třeba dodržet následující podmínky:

- Každý atribut (sloupec) obsahuje jenom atomické (dále nedělitelné) hodnoty.
- Všechny záznamy (řádky) mají stejný počet atributů (sloupců).
- Každý záznam (řádek) je jedinečný.

!!! example "Příklad"
    Uvažujme relaci $\text{Studenti}(RC, jmeno, prijmeni, adresa, oceneni)$.

    - Adresa může být složena z vícero informací (ulice, PSČ, číslo domu, město, ...)
    - Ocenění může být vícehodnotové

    Aby byla relace v **1NF**, lze jí upravit takto:

    - $Studenti(RC, jmeno, prijmeni, ulice, mesto, psc)$
    - $Oceneni(RC, oceneni)$

## Druhá normální forma
Cílem druhé normální formy je odstranit částečné závislosti na složeném primárním klíči.

Pro splnění druhé normální formy je třeba dodržet následující podmínky:

- Je v **první normální formě**
- Všechny neklíčové atributy (sloupce) musí být plně závislé na primárním klíči.

!!! example "Příklad"
    Uvažujme relaci $Prihlasky(RC, jmeno, prijmeni, univerzita, adresa\_univerzity)$.
    
    - Adresa univerzity není funkčně závislá na klíči $\{RC, univerzita\}$
    - Jméno a příjmení také nejsou funkčně závislé na klíči

    Aby byla relace v **2NF**, lze jí upravit takto:
    
    - $Prihlasky(RC, univerzita)$
    - $Lide(RC, jmeno, prijmeni)$
    - $Univerzity(univerzita, adresa\_univerzity)$

## Třetí normální forma
Třetí normální forma si klade za cíl odstranit tranzitivní (přechodné) závislosti. 

Pro splnění třetí normální formy je třeba dodržet následující podmínky:

- Je v **druhé normální formě**
- Všechny neklíčové atributy musí být nezávislé na jiných neklíčových atributech (žádné tranzitivní závislosti).
- Nesmí existovat přechodné závislosti
