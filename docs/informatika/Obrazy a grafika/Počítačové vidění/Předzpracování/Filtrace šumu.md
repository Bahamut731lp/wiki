# Filtrace šumu
__Šum__ je v obraze chápán jako nežádoucí náhodná změna v hodnotách [diskrétní obrazové funkce](Diskrétní%20obrazová%20funkce.md).  

!!! question "Kdy šum vzniká?"
    Šum v obraze vzniká již při:

    - sejmutí obrazu světlocitlivým senzorem
    - kvantizaci v AD převodníku
    - kompresi obrazu
    - dalším zpracovávání, kdy se do obrazu promítne zaokrouhlovací chyba při výpočtech

## Lineární filtrace
Při snaze odstranit šum v obraze spoléháme na fakt, že sousední obrazové body mají podobnou hodnotu. Nová hodnota obrazového bodu se odhaduje z hodnot v jeho malém okolí. Tento odhad provádíme pomocí [konvoluce](../Signály%20a%20informace/Konvoluce/index.md). Konvoluční jádro poté určuje, jak moc jednotlivé body v okolá přispívají k výsledné hodnotě.

!!! info "Použití"
    V rámci filtrování se konvoluce používá pro rozostření či zaostření obrazu, ovšem své uplatnění najde i v zvýrazňování charakteristických rysů.

!!! warning "Skutečná linearita tady není"
    Tím, že vytváří lineární kombinace, měla by pro konvoluci platit pravidla aditivity a homogenity. V praxi tomu tak není, protože obor hodnot je omezen a nelze ho přesáhnout.

!!! danger "Rozmazávání hran"
    Nevýhodou metod založených na konvoluci je to, že dochází k rozmazávání hran při náhlých změnách jasu.

## Nelineární filtrace
Nelineární filtrovací metody mají za cíl omezit rozmazávání hran. Nevyužívají tak konvoluci, ale robustnější statistiku. Mezi dvě významné
metody patří filtrace pomocí rotující masky a pomocí mediánu.

### Rotující maska
Princip rotující masky spočívá v tom, že se maska posouvá kolem zkoumaného bodu tak, aby byl pokaždé v jiné poloze v rámci masky. Následně se vybírá ta maska, ve které mají hodnoty jasu nejmenší rozptyl.

### Medián
Filtrování pomocí mediánu používá pro určení hodnoty namísto průměru druhý výběrový kvantil (který běžně známe jako medián). Výhodou mediánu je, že narozdíl od průměru není náchylný na vychýlení extrémními hodnotami.