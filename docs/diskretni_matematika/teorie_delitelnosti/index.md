# Úvod do teorie dělitelnosti
Teorie dělitelnosti představuje jeden z klíčových pilířů aritmetiky a hraje zásadní roli v celé matematice. Už od starověku lidé řešili otázky spojené s rozdělováním množství. Teorie dělitelnosti poskytuje elegantní a efektivní nástroje pro řešení problémů, které sahají daleko za hranice jednoduchých početních úkonů. 

Přemýšlení o dělitelnosti vede k otázkám, jak lze efektivně rozkládat čísla na jejich základní prvky, jak určit jejich společné vlastnosti nebo jak nalézt rychlé způsoby řešení problémů s čísly. Například při zkoumání největšího společného dělitele, nejmenšího společného násobku či prvočísel se otevírají dveře do kryptografie, kódování a teorie čísel, na čemž dnes závisí široká škála technik, od optimalizace algoritmů v počítačových vědách až po šifrování dat, které chrání moderní komunikaci.

Obsah: 

- [Dělitelnost](./delitelnost.md)
- [Společný dělitel](./spolecny_delitel.md)
- [Prvočísla](./prvocisla.md)
- [Společný násobek](./spolecny_nasobek.md)
- [Bézoutova rovnost](./bezoutova_rovnost.md)
- [Mobiova funkce](./mobiova_funkce.md)
- [Eulerova funkce](./eulerova_funkce.md)
- [Dolní a horní celá část](./dolni_horni_cela_cast.md)
- [Řetězové zlomky](./retezove_zlomky.md)

Základním kamenem teorie dělitelnosti je množina celých čísel a množina přirozených čísel s nulou. Když se podíváme na operace, které můžeme s celými čísly provádět, tak zjistíme, že je množina celých čísel:

- uzavřená vůči sčítání $a, b \in \mathbb{Z} \to a + b \in \mathbb{Z}$
- uzavřená vůči odčítání $a, b \in \mathbb{Z} \to a - b \in \mathbb{Z}$
- uzavřená vůči násobení $a, b \in \mathbb{Z} \to a - b \in \mathbb{Z}$
- a **není** uzavřená vůči dělení $a, b \in \mathbb{Z} \to a : b \not\in \mathbb{Z}$

???- abstract "Důkaz pro uzavřenost operací sčítání, odčítání a násobení"
    Důkaz provedem pro sčítání, ale principielně funguje i pro odčítání a násobení. Předpokládejme, že existují taková dvě čísla $a, b$, která jsou celá, a jejichž součet není celé číslo.
    
    $$\exists a, b \in \mathbb{Z}, a + b \not\in\mathbb{Z}$$

    To znamená, že součet těchto dvou čísel by mělo být číslo, které není celé, takže například raciolnální (zlomek), iracionální, či třeba komplexní. Celá čísla zahrnují čísla přirozená (1, 2, 3, ...), nulu a čísla opačná k přirozeným číslům (-1, -2, -3, ...).

    Máme tedy tři kategorie čísel, která se nám můžou v operaci zjevit, a to kladná, záporná a nulu.
    
    - Přičteme-li kladné a kladné celé číslo, dostaneme větší kladné celé číslo.
    - Přičteme-li záporné a záporné celé číslo, dostaneme větší záporné celé číslo.
    - Přičteme-li kladné a záporné celé číslo, dostaneme rozdíl, který je opět celé číslo.

    Neexistuje žádný způsob, jak by součet dvou celých čísel mohl vést k číslu, které není celé, protože operace sčítání mezi celými čísly nemůže vytvořit zlomky ani iracionální čísla. Předpoklad, že součet dvou celých čísel $a+b\in\mathbb{Z}:\, a+b\in\mathbb{Z}$, vede ke sporu, protože neexistuje žádný případ, kdy by součet dvou celých čísel nebyl celé číslo.
