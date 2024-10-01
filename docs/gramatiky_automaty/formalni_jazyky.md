# Formální jazyky
- Formální jazyk je soubor slov vytvořených z určité abecedy. Nezabýváme se větami, ale jen jednotlivými slovy.
- Jazyk obsahuje slova z abecedy, která si vybereme z možných kombinací symbolů. Může obsahovat všechny, žádná, nebo jen některá slova.
- Jazyk lze definovat slovně, nebo pomocí gramatiky.

!!! quote ""
    Když máme abecedu $\Sigma$, formální jazyk $L$ je jakákoli podmnožina všech možných slov, která můžeme vytvořit z abecedy $\Sigma$. Zapisuje se jako $L \subseteq \Sigma^*$ (to znamená, že L je podmnožina [uzávěru](abecedy_slova.md#uzaver-abecedy) Σ*).

!!! info "Speciální případy jazyka"
    - Prázdný jazyk ($L = ∅$) neobsahuje žádná slova, ani prázdný řetězec ($\varepsilon$).
    - Pokud jazyk obsahuje konečný počet slov, nazýváme ho __konečný jazyk__.
    - Pokud obsahuje nekonečně mnoho slov, nazýváme ho __nekonečný jazyk__.
    - Počet slov v jazyce se nazývá mohutnost jazyka.


Vzhledem k tomu, že jazyk je množina slov, můžeme s ním provádět tyto operace:

|Operace|Značení|Vysvětlení|
|--:|:--:|:--|
|Sjednocení|$L_1 \cup L_2$|Vytvoří nový jazyk, který obsahuje všechna slova z obou jazyků.|
|Průnik|$L_1 \cap L_2$|Vytvoří nový jazyk, který obsahuje jen slova, která jsou v obou jazycích.|
|Rozdíl|$L_1 \backslash L_2$ | Vytvoří nový jazyk, který obsahuje slova z prvního jazyka, která nejsou v druhém.|
|Doplněk|$\overline{L_1} = \Sigma^*\backslash L_2$ | Jazyk $L_1$ je doplněk jazyka $L_2$, pokud $L_1$ obsahuje všechny možné řetězce kromě těch, které jsou v $L_2$. Jinak řečeno, jazyky se navzájem _doplňují_.|

Protože jsou prvky jazyka slova (řetězce), můžeme s nimi provádět i následující operace:

|Operace|Značení|Vysvětlení|
|--:|:--:|:--|
|Zřetězení|$L_1 . L_2$|Spojí slova z dvou jazyků dohromady, takže každé slovo z prvního jazyka se spojí s každým slovem z druhého jazyka. Výsledek je kartézský součin dvou jazyků.|
|$n$-tá mocnina|$L^n$|Opakované zřetězení slov ze stejného jazyka. Například druhá mocnina jazyka obsahuje všechna slova vzniklá zřetězením právě dvou slov původního jazyka.|
|Iterace jazyka|$L^*$|Vytváří všechny možné kombinace slov, včetně opakování a prázdného řetězce.|
|Pozitivní iterace jazyka|$L^*$|Vytváří všechny možné kombinace slov, včetně opakování.|
|Zrcadlový obraz jazyka|$L^R$|Pro každé slovo obrátíme pořadí symbolů.|

!!! warning "Nultá mocnina jazyka"
    Stejně jako u slov, i zde má umocnění nulou za výsledek prázdnou množinu, resp. prázdný jazyk. $L^0 = \varepsilon$

!!! example "Příklady"
    Abeceda $A$ obsahuje všechna malá písmena češtiny a angličtiny. Uvažujme jazyky $L_1$ a $L_2$ nad abecedou $A$. $L_1$ je množina všech názvů měsíců v roce v češtině, $L_2$ je množina názvů všech měsíců v roce v angličtině. Rozhodněte o pravdivosti následujících tvrzení:

    |Tvrzení|Pravdivost|Vysvětlení|
    |-----:|:--:|:--|
    |$L_1 = L_2$|Ne|Jazyky neobsahují stejná slova, resp. nejsou stejné podmnožiny|
    |Mohutnost $L_1$ a $L_2$ je stejná.|Ano|Mohutnost je vlastnost označující počet slov v jazyce. Tím, že oba jazyky obsahují názvy měsíců, tj. 12 slov, tak mají stejnou mohutnost.|
    |Průnik $L_1$ a $L_2$ je prázdný|Ano|Oba dva jazyky nemají žádné společné slovo|
    |Sjednocení $L_1$ a $L_2$ obsahuje slovo "červenjune"|Ne|Sjednocení pouze spojí dvě množiny dohromady, ale nijak nemění jednotlivá slova. Sjednocení bude tedy obsahovat samostatná slova "červen" a "june", ale nikoliv jejich spojení.|
    |Zřetězení $L_1$ a $L_2$ obsahuje slovo "červenjune"|Ano|Stejné vysvětlení jako předchozí tvrzení, až na to, že zde ke spojení slov došlo.|
    |Mohutnost zřetězení $L_1$ a $L_2$ je menší než 100|Ne|Tím, že se spojí každé slovo s každým, tak nám vznikne $12 \cdot 12$ slov, což je 144 slov.|
    |Doplněk $L_1$ obsahuje slovo "červenjune"|Ano|Doplněk k $L_1$ je uzávěr abecedy bez $L_1$ - tím, že slovo "červenjune" není v $L_1$, ale lze ho pomocí abecedy $A$ vytvořit, musí se nacházet v jeho doplňku.|
    |Doplněk $L_2$ obsahuje slovo "Monday"|Ne|Abeceda $A$, ze které vychází $L_2$, neobsahuje velká písmena. Tudíž nelze v žádném případě vytvořit slovo "Monday"|
    |Druhá mocnina $L_1$ obsahuje slovo "ledenúnorleden"|Ne|Slovo "ledenúnorleden" obsahuje tři slova z původního jazyka - tudíž vzniká jako výsledek třetí mocniny. Dvě slova na vytvoření takového slova nestačí|
    |Iterace $L_1$ obsahuje slovo "ledenúnorleden"|Ano|Tím, že je iterace jakoby "nekonečné umocnění" tak ano - slovo "ledenúnorleden" se v něm nachází.|

!!! example "Příklady - specifikace pomocí matematických operací"
    1. $L_1 = \{abc, aac, cb\}$ a $L_2 = \{baa, cb\}$
        - $L_1 . L_2 = \{abcbaa, aacbaa, cbcb, abccb, aaccb\}$
    2. $L_1 = \{\varepsilon, ab\}$ a $L_2 = \{bba, cb\}$
        - $L_1 . L_2 = \{\varepsilon{bba}, \varepsilon{cb}, abbba, abcb\}$
    3. $L_1 = \{abc, aab, cb\}$ a $L_2 = \{bba, cb\}$
        - $L_1 \cap L_2 = \{cb\}$
    4. $L_1 = ab*$ a $L_2 = cb*$
        - $L_1 \cup L_2 = ab^* + cb^* = (a+c)b^* = \{a, c, ab, cb, aab, cbb, abbb, ...\}$
    5. $L_1 = \{abc, aac, cb\}$ a $L_2 = \{baa, cb\}$
        - $L_1 \ L_2 = \{abc, aac\}$
    6. $L = \{abc, aac, cb\}$, pak doplněk
        - $\overline{L} = \Sigma^* / \{abc, aac, cb\}$ 
    7. $L = \{abc, mnp, \varepsilon\}$, pak
        - $L^R = \{cba, pnm, \varepsilon\}$
