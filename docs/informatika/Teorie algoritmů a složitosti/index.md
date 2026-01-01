# Teorie algoritmů a složitosti

!!! warning "Tento článek je dočasný"
    Poté, co si splním zkoušku, tak to rozsekám do gramatik, teorie složitosti a dalších sekcí.


## 1. Konečný automat - definice, jazyky rozpoznatelné konečným automatem. Deterministický a nedeterministický KA
Automat slouží k rozpoznávání formálního jazyka. Jazyk je automatem rozpoznatelný, pokud ho vstupní slova dostanou do konečného stavu. Množina všech slov, které automat umí rozpoznat, tvoří jazyk. Naopak, jazyk je rozpoznatelný konečným automatem, pokud lze sestrojit takový konečný automat, který rozezná všechna jeho slova. Konečný automat rozpoznává regulární jazyky.

!!! abstract "Formální definice konečného automatu"
    Konečný automat je uspořádaná pětice $A(Q, \Sigma, \delta, q_0, F)$, kde

    - $Q$ je konečná množina stavů
    - $\Sigma$ je konečná množina symbolů
    - $\delta$ je přechodová funkce
    - $q_0$ je počáteční stav
    - $F$ je konečná množina koncových stavů

Deterministický konečný automat má jeden počáteční stav a vždy přechází do jednoho stavu. Nedeterministický automat může mít počátečních stavů víc a přechodová funkce zobrazuje stav do potenční množiny - takže do množiny všech podmnožin. Jinak řečeno, přechod z jednoho stavu může vést do více stavů.

## 2. Zásobníkový automat - definice, jazyky rozpoznatelné zásobníkovým automatem.
Zásobníkový automat je rozšíření konečného automatu, který má k dispozici nekonečný zásobník.

Problémem regulárních jazyků, které rozpoznává konečný automat, je fakt, že nemá žádnou formu paměti a uchovává si pouze aktuální stav. To vytváří problém v situaci, kdy na pravé straně přepisovacího pravidla není terminál, ale jeden či více neterminálů. To není u regulární gramatiky možné, protože na pravé straně musí být vždycky alespoň jeden terminál. U bezkontextové je ale pravá strana libovolný řetězec z úzávěru sjednocení terminálů a neterminálů - neboli jakýkoliv symbol z abecedy, vyjma počátečního symbolu.

Přidaný zásobník dovoluje vytvořit novou formu vstupu, kterou automat čte. Automat čte kromě vstupního slova také stav zásobníku, a může se tak do jisté míry nekonečně vracet a zpracovat nekonečně dlouhé slovo. Konečný automat měl naopak podmínku, že musí dojít do koncového stavu v konečném počtu kroků. U zásobníkového automatu může konečný stav nastat tím, že dojde do koncového stavu, nebo že bude na konci čtení zásobník prázdný.

## 3. Gramatiky - definice, chomského hiearchie jazyků.
Gramatika je soubor symbolů a přepisovacích pravidel. která říká, jak můžeme vytvořit slova jazyka z určitého počátečního symbolu. Přepisovací pravidla definují, jak ze symbolu či symbolů udělat nové.

!!! abstract "Formální definice gramatiky"
    Gramatika je čtveřice $G(N, T, P, S)$, kde
    
    - $N$ je množina pomocných symbolů (neterminálů)
    - $T$ je množina konečných symbolů (terminálů)
    - $P$ je množina přepisovacích pravidel
    - $S$ je počáteční symbol

!!! note "Počáteční symboly"
    - Počáteční symbol $S$ musí být z množiny neterminálů ($S \in N$)
    - Počáteční symbol $S$ se nesmí vyskytovat na žádné pravé straně přepisovacího pravidla

Chomského hierarchie je hierarchie tříd formálních gramatik generujících formální jazyky. 

!!! info "Rozdělení gramatik"
    - G3 (Regulární gramatiky) mají v přepisovacích pravidlech¨
        - __na levé straně přesně jeden neterminál a na pravé jeden neterminál s terminálem__ 
        - G3 je regulární, pokud je na pravé straně terminál z množiny terminálů
        - G3 je lineární, pokud je na pravé straně terminál z uzávěru množiny terminálů.
    - G2 (Bezkontextové gramatiky) mají v přepisovacích pravidlech
        - __na levé straně přesně jeden neterminál a na pravé straně alespoň jeden symbol__
    - G1 (Kontextové gramatiky) mají v přepisovacích pravidlech
        - __na levé straně alespoň jeden neterminál a na pravé straně alespoň jeden symbol__
    - G0 (Neomezené gramatiky) nemají omezení na přepisovací pravidla.

## 4. Algoritmus - definice a vlastnosti
Algoritmus

## 5. Turingův stroj - definice, vlastnosti, varianty, problém zastavení turingova stroje a základní princip.

## 6. Požadavky na obecný výpočetní systém, turingovsky úplný jazyk. Příklady turingovsky úplných a neúplných jazyků.

## 7. Časová a paměťová složitosti algoritmu, princip stanovení asymptotické složitosti, definice. Přechod od složitosti algoritmu ke složitosti problému

## 8. Běžné třídy složitosti, příklady složitosti a typických probémů v těchto třídách

## 9. P a NP problémy - příklady, rozhodovací a optimalizační formulace.

## 10. Problém dvou lupičů, problém batohu, problém obchodnáho cestujícího.

## 11. Dynamické programování - obecný princip a příklady.

## 12. Hladové (greedy) algoritmy, obecný princip, příklady.

## 13. Uložení reálných čísel, zaokrouhlovací chyba a diskretizační chyba. Numerická nestabilita.

## 14. Kvantové počítače - základní principy.