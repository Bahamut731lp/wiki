# Datové typy
Datový typ je název pro množinu hodnot a množinu operací, které jde nad danými hodnotami provádět. Datový typ určuje, jak se data ukládají do paměti a jak s nimi pracovat.

- __prázdný__ datový typ nemá žádné definované operace ani způsob ukládání dat. (např. `void`)
- __jednoduchý__ datový typ ukládá data přímo do adresního prostoru (např. `integer`, `char`, ...)
- __abstraktní__ datový typ má pouze definici, ale nemá implementaci (např. [FIFO](FIFO.md), [LIFO](LIFO.md))
- __strukturovaný__ datový typ skládá jednoduché datové typy do struktury (např. [Pole](./Pole.md))
- __ordinální__ typy mají určené pořadí mezi prvky (např. [Seznam](./Seznam.md))
- __neordinální__ (nominální) typy nemají určené pořadí (např. [výčet](./Výčet.md))

## Abstraktní datový typy
Abstraktní datový typ je určen pouze svojí definicí, ale nemá konkrétní implementaci.

!!! info
    ADT definují datovou strukturu bez konkrétní implementace - Označují se jako kontejnery - Měly by definovat vytvoření kontejneru, zjištění počtu, přístup, vložení a odstranění prvku a vymazání všech prvků

- Vytvoření prázdného kontejneru
- Zjištění počtu prvků
- Přístup k prvků
- Vložení prvku
- Odstranění prvku
- Vymazání všech prvků
