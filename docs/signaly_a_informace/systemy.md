# Systémy
__Systém__ je věc, která dokáže vytvářet, zpracovávat či vysílat [signály](signaly.md).

## Kauzalita systému


## Stabilita systému

## Časová závislost systému

## Impulzní odezva
__Impulzní odezva__ $h[n]$ je funkce, která popisuje odpověď systému v závislosti na čase. Jinak řečeno, udává, jak systém reaguje na [jednotkový impulz](signaly.md#jednotkovy-impulz) v čase.

!!! important
    Výstup [LTI systému](#linearni-casove-invariantni-systemy) lze plně právě impulzní odezvou, protože při konvoluci impulzní odezvy se vstupem dostaneme výstup celého systému

    $$\begin{aligned}
    y[n] &= h[n] \ast x[n] \\
    \end{aligned}$$

## Přenosová funkce
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