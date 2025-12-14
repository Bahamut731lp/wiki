# Signály a informace

## Signál
__Signál__ je v obecném smyslu jev, který nese informaci o stavu systému, ze kterého pochází. Může to být fyzikální veličina (např. elektrický proud, světelné záření, zvuková vlna), chemická látka, biologický proces, ekonomický ukazatel, nebo cokoli jiného, co nese informaci o nějakém ději nebo stavu.

Signály můžeme rozdělit do dvou hlavních kategorií:

- __Analogové signály__: jsou spojité signály, které mění svou hodnotu plynule v čase.
- __Digitální signály__: Jsou nespojité (diskrétní) signály, které nabývají jen konečného počtu hodnot.

### Základní typy signálů
V oblasti zpracování signálů a elektroniky se běžně setkáváme s základními typy signálů, které slouží jako stavební kameny pro komplexnější signály a systémy. Mezi nejdůležitější patří jednotkový impulz a jednotkový skok.

#### Jednotkový impulz
__Jednotkový impulz__ (Diracova delta funkce) je ideální signál s nekonečnou výškou a nulovou šířkou v jednom bodě v čase. To znamená, že pod křivkou impulzu v libovolném intervalu obsahujícím t = 0 je plocha rovna 1. V praxi je nemožné realizovat fyzický impulz s nekonečnou výškou, ale pro teoretické a analytické účely je Diracův impulz velmi užitečný.

$$
\begin{equation}
\delta[n] = \begin{cases}
1 & \text{pro } n = 0 \\
0 & \text{pro } n \neq 0
\end{cases}
\end{equation}
$$

#### Jednotkový skok
__Jednotkový skok__ (Heavisidova funkce) je ideální signál, který má hodnotu 0 pro t < 0 a hodnotu 1 pro t ≥ 0. Matematicky se definuje jako:

$$
\begin{equation}
u[n] = \begin{cases}
0 & \text{pro } n < 0 \\
1 & \text{pro } n \geq 0
\end{cases}
\end{equation}
$$

## Systémy
__Systém__ je věc, která dokáže vytvářet, zpracovávat či vysílat [signály](signaly.md).

### Kauzalita systému


### Stabilita systému

### Časová závislost systému

### Impulzní odezva
__Impulzní odezva__ $h[n]$ je funkce, která popisuje odpověď systému v závislosti na čase. Jinak řečeno, udává, jak systém reaguje na [jednotkový impulz](signaly.md#jednotkovy-impulz) v čase.

!!! important
    Výstup [LTI systému](#linearni-casove-invariantni-systemy) lze plně právě impulzní odezvou, protože při konvoluci impulzní odezvy se vstupem dostaneme výstup celého systému

    $$\begin{aligned}
    y[n] &= h[n] \ast x[n] \\
    \end{aligned}$$

### Přenosová funkce
__Přenosová funkce__ $H[z]$ je funkce, která popisuje odpověď systému v závislosti na frekvenci. Jinak řečeno, udává, jak systém reaguje na jednotlivé frekvence.

!!! note
    Přenosová funkce ukazuje, jak systém jednotlivé frekvence zesiluje či zeslabuje.


$$\begin{aligned}
y[n] &= h[n] \ast x[n] \\
Y[z] &= H[z] \cdot X[z]
\end{aligned}$$

### Lineární časově invariantní systémy
__Lineární časově invariantní systémy__ (zkráceně _LTI_) jsou takové systémy, ve kterých platí dvě vlastnosti:

- __Linearita__, kdy platí aditivita $f(a + b) = f(a) + f(b)$ a homogenita $f(\alpha \cdot a) = \alpha \cdot f(a)$
- __Časová invariance__, kdy platí $f(x[t - t_0]) = y[t - t_0]$

V praxi to znamená, že chování LTI systémů není závislé na čase. Díky tomu můžeme jeho výstup získat konvolucí s impulzní odezvou.