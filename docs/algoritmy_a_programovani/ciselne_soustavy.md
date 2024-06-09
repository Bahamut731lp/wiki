# Číselné soustavy
Číselná soustava je systém pro reprezentaci čísel. Definuje způsob, jakým čísla zapisujeme a interpretujeme pomocí symbolů, které nazýváme číslice. Hlavní charakteristikou číselné soustavy je její základ $Z$. Základ udává, kolik symbolů se v soustavě používá a jakou hodnotu má každá pozice v čísle. Libovolné kladné číslo lze tedy zapsat jako

$$
F(Z) = \sum_{i=0}^{m-1} a_i \cdot Z^{i}
$$

## Dvojková soustava
!!! abstract
    Dopsat MSB a LSB, a vlastně celý.

## Kódování čísel s desetinnou řádovou čárkou

## Záporná čísla ve dvojkové soustavě

- Vyhrazení znaménkového bitu
- Přičtení konstanty (posunutý kód)
- Jedničkový doplněk
- Dvojkový doplněk

### Vyhrazení znaménkového bitu
Tato technika spoléhá na to, že jeden bit (většinou MSB) představuje znaménko čísla:

- $1$ pokud je číslo záporné
- $0$ pokud je číslo kladné

Výhodou je jednoduchost tohoto řešení - pomocí kontroly jednoho bitu víme, jestli je číslo kladné, nebo záporné. Obří nevýhodou tohoto řešení je, že se snižuje rozsah čísel, které můžeme reprezentovat. Při použití počáčetního bitu (MSB) se nám rozsah kladných čísel, které můžeme reprezentovat, srazí na polovinu. Tudíž při osmi bitech můžeme najednou reprezentovat jenom čísla v rozsahu $\left<-127, 127\right>$ z původního $\left<0, 255\right>$

!!! bug "Kladná a záporná nula"
    Při použití vyhrazeného bitu vznikají dvě nuly - ta, která má znaménkový bit 1 a která má znaménkový bit 0.

!!! warning "Nebuď Pepega"
    > Když se při použití MSB sníží rozsah kladných čísel o polovinu, proč nepoužít LSB, když je nejmíň významný???

    Kdybych použil LSB a zbytek nechal být, tak pořád ztratím polovinu kladných čísel, ale tentokrát to nebude kvůli omezení rozsahu, ale kvůli tomu, že ztratím možnost vyjadřovat lichá čísla. Je tedy jedno, kde ten bit je, pořád to redukuje reprezentovatelný rozsah.


### Posunutý kód
__Posunutý kód__ neboli technika _přičtení konstanty_ spoléhá na přičtení dobře zvolené konstanty tak, že se posune číslo nula o konstantu tak, že se z původní nuly stane nejnižší možné číslo.

!!! example
    Například v 8 bitovém systému s posunem $N=128$ je číslo nula reprezentováno jako 128 ($1000000$).

### Jedničkový doplněk
__Jedničkový doplněk__ (též znám jako _inverzní kód_) reprezentuje záporná čísla tím, že zneguje všechny bity čísla. Je to jednoduché řešení, ovšem hůře se dělají aritmetické operace a opět existují dvě nuly.

!!! abstract
    Dopsat jedničkový doplněk

### Dvojkový doplněk
__Dvojkový doplněk__ je binární číslo, které je znegované a zvětšené o jedničku. 

!!! abstract
    Dopsat dvojkový doplněk