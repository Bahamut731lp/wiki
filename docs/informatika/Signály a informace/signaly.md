# Signál
__Signál__ je v obecném smyslu jev, který nese informaci o stavu systému, ze kterého pochází. Může to být fyzikální veličina (např. elektrický proud, světelné záření, zvuková vlna), chemická látka, biologický proces, ekonomický ukazatel, nebo cokoli jiného, co nese informaci o nějakém ději nebo stavu.

Signály můžeme rozdělit do dvou hlavních kategorií:

- __Analogové signály__: jsou spojité signály, které mění svou hodnotu plynule v čase.
- __Digitální signály__: Jsou nespojité (diskrétní) signály, které nabývají jen konečného počtu hodnot.

## Základní typy signálů
V oblasti zpracování signálů a elektroniky se běžně setkáváme s základními typy signálů, které slouží jako stavební kameny pro komplexnější signály a systémy. Mezi nejdůležitější patří jednotkový impulz a jednotkový skok.

### Jednotkový impulz
__Jednotkový impulz__ (Diracova delta funkce) je ideální signál s nekonečnou výškou a nulovou šířkou v jednom bodě v čase. To znamená, že pod křivkou impulzu v libovolném intervalu obsahujícím t = 0 je plocha rovna 1. V praxi je nemožné realizovat fyzický impulz s nekonečnou výškou, ale pro teoretické a analytické účely je Diracův impulz velmi užitečný.

$$
\begin{equation}
\delta[n] = \begin{cases}
1 & \text{pro } n = 0 \\
0 & \text{pro } n \neq 0
\end{cases}
\end{equation}
$$

### Jednotkový skok
__Jednotkový skok__ (Heavisidova funkce) je ideální signál, který má hodnotu 0 pro t < 0 a hodnotu 1 pro t ≥ 0. Matematicky se definuje jako:

$$
\begin{equation}
u[n] = \begin{cases}
0 & \text{pro } n < 0 \\
1 & \text{pro } n \geq 0
\end{cases}
\end{equation}
$$