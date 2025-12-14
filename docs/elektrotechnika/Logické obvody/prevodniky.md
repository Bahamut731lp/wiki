# Převodníky
Převodníky jsou speciálním typem obvodu, který má za úkol převést [signál](../signaly_a_informace/signaly.md) jednoho typu na ten druhý. Nejčastěji se setkáváme s převodníky mezi analogovým signálem a digitálním signálem. Podle toho se pak převodníky označují jako

- AD převodník, když převádí Analogový signál na Digitální signál.
- DA převodník, když převádí Digitální signál na Analogový signál.

## Kompenzační AD Převodníky
Kompenzační AD převodníky jsou postaveny na vnitřním [čítači](./sekvencni_logicke_obvody_advanced.md#čítače), který postupně čítá od nuly do svého rozsahu. Výstup tohodle čítače je napojený na DA převodník, který z čísla v čítači udělá hodnotu napětí. Toto napětí se následně přivede do komparátoru, který napětí z čítače porovná s napětím na vstupu, a pokud se shodují, tak se zapíše číslo z čítače jako výsledek převodu.

### Kompenzační čítací
**Kompenzační čítací AD převodník** používá vnitřního čítače, jehož výstup je přiváděn na DA převodník.

- Převedený signál (tzv. zpětnovazební signál) je pak následně porovnán v komparátoru $\text{KOMP}$
- Pokud je zpětnovazební signál větší, než velikost vstupního napětí, na komparátoru bude logická 1
- Při logické 1 na komparátoru se sepne hradlo $\text{AND}$, které zastaví čítač
- Čítač po zastavení napíše výsledek do paměti.

Nevýhodou tohoto převodníku je, že čítač musí vždycky počítat od 0, tudíž je převod o něco pomalejší.

!!! example "Schéma zapojení $n$-bitového kompenzačního čítacího AD převodníku"
    ![Schéma zapojení kompenzančního čítacího převodníku](../images/kompenzacni_citaci.png)

### Kompenzační sledovací
**Kompenzační sledovací AD převodník** pracuje obdobně jako kompenzační čítací. Rozdíl je v čítači, který v případě sledovacího umí čítat obousměrně. Směr čítání je pak řízen komparátorem, kdy:

- Pokud je zpětnovazební napětí **větší než** vstupní ($U_{DA} \gt U_{IN}$), tak se **čítá dozadu** ($U_{DA}$ bude zmenšováno)
- Pokud je zpětnovazební napětí **menší než** vstupní ($U_{DA} \lt U_{IN}$), tak se **čítá dopředu** ($U_{DA}$ bude zvětšováno)

Díky tomu, že čítač sleduje vstupní napětí, není potřeba čítat od nuly, jelikož si to čítač již sám zkoriguje, ať mu dáme jakoukoliv arbitrární hodnotu napětí.


### Kompenzační s postupnou aproximací
**Kompenzační AD převodníky s postupnou aproximací** používají metody půlení intervalu pro urychlení kompenzace napětí.

!!! quote ""
    Aproximace = Odhad, Přiblížení, ...

Na začátku se do *aproximačního registru* napíše logická 1 na nejvyšší řád, a ostatní se nechají na logické 0.

!!! question "Proč?"
    Protože tím velice rychle vytvoříme číslo, které je v polovině rozsahu převodníku.

Následně se opakují kroky:
- Převeď hodnotu aproximačního registru pomocí DA převodníku
- Porovnej zpětnovazební napětí se vstupním napětím v komparátoru $\text{KOMP}$
- Výsledek z komparátoru zapiš do aproximačního (posuvného) registru, který se posune o 1 bit vpravo.
- **Opakuj tyto kroky, dokud z aproximačního registru napravo nevystoupí 1**

Po první logické 1, která bude vysunuta z aproximačního registru, se překlopí [klopný obvod RS](sekvencni_logicke_obvody.md#rs-flip-flop), který ukončí převod a data z aproximačního registru se přepíší do paměti.

Velkou výhodou tohoto převodníku je, že převod trvá pevný počet kroků.

!!! example "Schéma $n$-bitového kompenzačního AD převodníku s postupnou aproximací"
    ![Schéma kompenzančního aproximačního převodníku](../images/kompenzacni_aproximace.png)


## Komparační AD převodníky
Komparační převodníky využívají k AD převodu komparátory, které porovnávají vstupní napětí s referenčním napětím.

### Komparační paralelní
**Komparační paralelní AD převodník** využívá paralelně zapojených komparátorů, ve kterých se porovnává vstupní napětí s referenční hodnotou z odporové děličce. Díky jednoduchosti obvodu je převod velmi rychlý, navíc se dá navzorkovat celé binární slovo najednou. Obrovskou nevýhodou je, že je konstrukčně náročný. Na převod $N$ bitů je potřeba $2^{N-1}$ komparátorů. 

!!! example "Ukázkové zapojení komparačního paralelního AD převodníku"
    ![Schéma komparačního paralelního AD převodníku](../images/komparacni_paralelni.png)

### Komparační s postupnou komparací
**Komparační AD převodník s postupnou komparací** je převodník, který pro převod využívá principu [Divide And Conquer](../algoritmy_a_programovani/algoritmizace.md#divide-and-conquer). Nevýhoda komparačního paralelního převodníku byla ta, že se stává konstrukčně složitým na vyšším počtu bitů. Převodníky s postupnou komparací, jak už název napovídá, řeší tím, že převod rozdělí na menší "podpřevody", které postupně zpracovávají.Výhodou tohoto přístupu je, že relativně zachováme rychlost převodu, zatímco zmenšíme počet komparátorů.

!!! example "Schéma zapojení 8 bitového komparačního AD převodníku s postupnou komparací"
    První AD převodník vytvoří horní 4 bity, které se

    - Pošlou na výstup
    - Použijí jako menšitel v rozdílovém zesilovači
    
    V rozdílovém zesilovači se vezme původní vstupní signál, a odečte se od něj analogová reprezentace 4 horních bitů. Tím získáme napětí, které reprezentuje pouze spodní 4 bity. Toto napětí zesílíme a následně převedeme. Výsledek převodu je spojení obou výsledků z obou převodníků

    ![Schéma komparačního převodníku s postupnou komparací](../images/komparacni_postupna_komparace.png)

## Integrační AD převodník