# Gramatika
Gramatika je sada pravidel, která říká, jak můžeme vytvořit slova jazyka z určitého počátečního symbolu. Proces generování funguje tak, že začneme s počátečním symbolem a postupně na něj uplatňujeme pravidla, dokud nevytvoříme požadované slovo. Gramatiku $G$ zapisujeme jako uspořádanou čtveřici $G = (N, T, P, S)$, kde

- $N$ je neprázdná množina [pomocných symbolů](#terminální-a-neterminální-symboly) (neterminálů).
- $T$ je neprázdná množina [konečných symbolů](#terminální-a-neterminální-symboly) (terminálů).
- $P$ je konečná množina __přepisovacích pravidel__.
- $S \in N$ je speciální __počáteční symbol__, také znamý jako _kořen gramatiky_.

!!! example "Příklad jednoduché gramatiky"
    Máme abecedu $\Sigma = \{a,\,b\}$. Počáteční symbol je $S$ a jsou určena dvě přepisová pravidla:
    
    1. $S \to aSb$
    2. $S \to ba$

    - Začínáme počátečním symbolem $S$. První slovo, které můžeme vytvořit, je aplikovaním pravidla č. 2 - tím nám vznikne slovo $ba$.
    - Začínáme počátečním symbolem $S$. Druhé slovo, které můžeme vytvořit, je použitím prvního pravidla a následně druhého - $S \to aSb \to abab$. 
    - Začínáme počátečním symbolem $S$. Třetí slovo, které můžeme vytvořit, je dvojitým použitím prvního pravidla a následně druhého - $S \to aSb \to aaSbb \to aababb$. 

    Takhle můžeme pokračovat do nekonečna. Jazykem této gramatiky o dvou pravidlech mohou být slova $L = \{ba,\,abab,\,aababb,\,...\}$

## Terminální a neterminální symboly
- Terminální symboly (neboli terminály, konečné symboly) jsou symboly, které už nelze dále přepisovat. Konečná slova, která gramatika generuje, obsahují jen tyto symboly.
- Neterminální symboly (neboli neterminály, pomocné symboly) jsou pomocné symboly, které slouží k popisu struktury jazyka. Používají se v pravidlech gramatiky k přepisování a někdy se jim říká proměnné.

!!! info ""
    Terminální symboly se v teorii jazyků často označují malými písmeny latinské abecedy (nebo někdy číslicemi), zatímco neterminální symboly velkými písmeny nebo slovy ve špičatých závorkách.

## Přepisovací pravidla

