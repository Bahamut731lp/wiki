# Kombinační logické obvody

!!! warning "Tohle není moje"
    Tuto sekci ještě musím přepsat, aby byla jednodušší na pochopení :)
    
Kombinační obvod nemá vnitřní paměť. Odezva ideálního kombinačního obvodu v čase $t$ je podmíněna
pouze vstupními hodnotami v čase $t$. (V realitě je třeba počítat se zanedbatelným zpožděním při změně vstupů)

## Základní logické funkce

### Negace
Negace je unární operace, to znamená, že má pouze jeden operand. Funkce negace mění
hodnotu proměnné z '0' na '1' a opačně. V literatuře lze najít jako INVERT/NON/NOT.
Ve schématu obvodu je nejčastěji reprezentována jako symbol kroužku. 

| A   | NOT(A) |
| --- | ------ |
| 0   | 1      |
| 1   | 0      |

### Logický součin
Operace se dvěma nebo více operandy. Na výstupu je '1' pokud jsou všechny operandy '1'. V literatuře lze najít jako AND.

| B   | A   | AND(A,B) |
| --- | --- | -------- |
| 0   | 0   | 0        |
| 0   | 1   | 0        |
| 1   | 0   | 0        |
| 1   | 1   | 1        |

### Logický součet
Operace se dvěma nebo více operandy. Na výstupu je '1' pokud je alespoň jeden operand '1'. V literatuře lze najít jako OR.

| B   | A   | OR(A,B) |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 1       |

### Negovaný součin
Operace se dvěma nebo více operandy. Na výstupu je '1' pokud je alespoň jeden operand '0'. V literatuře lze najít jako NAND.

| B   | A   | NAND(A,B) |
| --- | --- | --------- |
| 0   | 0   | 1         |
| 0   | 1   | 1         |
| 1   | 0   | 1         |
| 1   | 1   | 0         |

### Negovaný součet
Operace se dvěma nebo více operandy. Na výstupu je '1' pokud jsou všechny operandy '0'. V literatuře lze najít jako NOR.

| B   | A   | NOR(A,B) |
| --- | --- | -------- |
| 0   | 0   | 1        |
| 0   | 1   | 0        |
| 1   | 0   | 0        |
| 1   | 1   | 0        |

### Nonekvivalence (výhradní logický součet)
Operace se dvěma operandy. Na výstupu je '1' pokud jsou oba operandy různé. V literatuře lze najít jako XOR.

| B   | A   | XOR(A,B) |
| --- | --- | -------- |
| 0   | 0   | 0        |
| 0   | 1   | 1        |
| 1   | 0   | 1        |
| 1   | 1   | 0        |

### Ekvivalence
Operace se dvěma operandy. Na výstupu je '1' pokud jsou oba operandy shodné. V literatuře lze najít jako XNOR.

| B   | A   | XNOR(A,B) |
| --- | --- | --------- |
| 0   | 0   | 1         |
| 0   | 1   | 0         |
| 1   | 0   | 0         |
| 1   | 1   | 1         |

DEJ SEM (OR DONT) OBRÁZEK HRADEL LOL 

## Úplný soubor logických funkcí
Množina základních funkcí, které společně dokáží popsat libovolnou funkci.
- AND + NOT
- OR + NOT
- NAND
- NOR

# Booleova algebra
Dvě hodnoty, využívá logických funkcí, tady jsou axiomy :)

| Axiom                  | Součet             | Součin             |
| ---------------------- | ------------------ | ------------------ |
| Komutativita           | a +b=b+a           | a∙b=b∙a            |
| Asociativita           | a+(b+c)=(a+b)+c    | a(b∙c)=(a∙b)c      |
| Distributivita         | a+(b∙c)=(a+b)(a+c) | a(b+c)=(a∙b)+(a∙c) |
| Neutralita 0 a 1       | a+0=a              | a∙1=a              |
| Agresivita 0 a 1       | 𝑎 + 𝑎̅ = 1       | 𝑎 ∙ 𝑎̅ = 0       |
| Vlastnosti komplementu | a+1=1              | a∙0=0              |
| Idemnpotence           | a+a=a              | a∙a=a              |
| Absorbce               | a+a∙b=a            | a(a+b)=a           |

| Zákon           | Součet                                      | Součin                                                |
| --------------- | ------------------------------------------- | ----------------------------------------------------- |
| Dvojí negace    | 𝑎̿ = 𝑎                                    | 𝑎̿ = 𝑎                                              |
| Absorpce negace | 𝑎 + 𝑎̅ ∙ 𝑏 = 𝑎 + 𝑏                     | 𝑎(𝑎̅ + 𝑏) = 𝑎 ∙ 𝑏                                |
| De Morgan       | $\overline{(a+b)}=\overline{a}\overline{b}$ | $\overline{(a \cdot b)}=\overline{a}+\overline{b}$    |
| Consensus       | 𝑎𝑏 + 𝑎̅𝑐 + 𝑏𝑐 = 𝑎𝑏 + 𝑎̅𝑐          | (𝑎 + 𝑏)(𝑎̅ + 𝑐)(𝑏 + 𝑐) = (𝑎 + 𝑏) + (𝑎̅ + 𝑐) |

# Pravdivostní tabulka, Venův diagram, Karnaughova mapa 
Způsoby popisu funkce pomocí vstupů a výstupů
## Pravdivostní tabulka

| c   | b   | a   | F   | minterm                                |
| --- | --- | --- | --- | -------------------------------------- |
| 0   | 0   | 0   | 0   | $\overline{c}\overline{b}\overline{a}$ |
| 0   | 0   | 1   | 1   | $\overline{c}\overline{b}a$            |
| 0   | 1   | 0   | 0   | $\overline{c}b\overline{a}$            |
| 0   | 1   | 1   | 0   | $\overline{c}ba$                       |
| 1   | 0   | 0   | 1   | $c\overline{b}\overline{a}$            |
| 1   | 0   | 1   | 0   | $c\overline{b}a$                       |
| 1   | 1   | 0   | 1   | $cb\overline{a}$                       |
| 1   | 1   | 1   | 0   | $cba$                                  |

## Venův diagram
"Přehledněji, než pomocí pravdivostní tabulky zobrazíme logickou funkci pomocí Vénových
diagramů nebo pomocí mapy. Vyšší přehlednost spočívá v tom, že v diagramu i
v mapě jsou zobrazeny vedle sebe ty termy, které se liší v jedné proměnné. Jestliže pak je funkční
hodnota zkoumané funkce rovna log. 1 v sousedních políčkách mapy nebo diagramu, můžeme
vytvořit jednu společnou oblast, která zahrnuje oba termy, výsledný logický výraz je pak
jednodušší." - Ondřej Novák a kolektiv autorů (Skripta TUL - Číslicová elektronika)

DEJ SEM (OR DONT) OBRÁZEK HRADEL LOL 

## Karnaugova mapa
Slouží k minimalizaci logických funkcí.

| 0   | 1   | 3   | 2   |
| --- | --- | --- | --- |
| 4   | 5   | 7   | 6   |
| 12  | 13  | 15  | 14  |
| 8   | 9   | 11  | 10  |
Dekadická reprezentace hodnot v tabulce z hodnot DCBA

# Návrh klopného logického obvodu

1. Rozbor úlohy
	1. blokové schéma
	2. definice IO proměnných
2. Sestavení tabulky chování
	1. nalezení závislostí proměnných
	2. pravdivostní tabulka
3. Sestavení logické funkce
4. Minimalizace logické funkce
5. Úprava zminimalizované funkce
	1. podle dostupných logických obvodů
	2. pomocí axiomů a odvozených zákonů Booleovy algebry
6. Nakreslení logické sítě
7. Kontrola správnosti navrženého obvodu

# Možnosti realizace
Viz: CIE_3-1.pdf slide 18-22 (7-13.3 Používané logické funkcea jejich popis ve VHDL)