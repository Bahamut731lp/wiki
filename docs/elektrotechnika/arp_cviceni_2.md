# Cvičení 2 - Reprezentace čísel v počítaci

$$\begin{aligned}
258.125_D &= ? \\
\\
258 : 2 &= 129 (zbytek 0) \\
129 : 2 &= 64 (zbytek 1) \\
64 : 2 &= 32 (zbytek 0) \\
32 : 2 &= 16 (zbytek 0) \\
16 : 2 &= 8 (zbytek 0) \\
8 : 2 &= 4 (zbytek 0) \\
4 : 2 &= 2 (zbytek 0) \\
2 : 2 &= 1 (zbytek 0) \\
1 : 2 &= 0 (zbytek 1) \\
\\ 
0.125 \cdot 2 &= 0.250 (v celé části 0)\\
0.25 \cdot 2 &= 0.50 (v celé části 0) \\
0.5 \cdot 2 &= 1.0 (v celé části 1)
\end{aligned}$$
Výsledek je 100000010.001

$$\begin{aligned}
1.1_D &= ? \\
\\
1 : 2 &= 0 (zbytek 1) \\
\\ 
0.1 \cdot 2 &= 0.2 (v celé části 0)\\
0.2 \cdot 2 &= 0.4 (v celé části 0) \\
0.4 \cdot 2 &= 0.8 (v celé části 0) \\
1.6 \to  0.6\cdot 2 &= 1.2 (v celé části 1) \\
1.2 \to  0.2\cdot 2 &= 0.4 (v celé části 1) \\
\end{aligned}$$

Výsledek je 1.0011 (zaokrouhleně)

Sečtěte 213 a 213 v binárce.

Logický posun doprava čísla 1001 -> 0100
Aritmetický posun doprava čísla 1001 -> 1100

Dvojkový doplňěk - opsat zprava do první jedničky (včetně) a všechno za ní invertovat

00101111
11101100
==
00011011

Boothův algoritmus

||Přímý|Inverzní|Doplňkový|Aditivní sudý|Aditivní lichý|
|:----:|:------:|:-------:|:-----------:|:------------:|
|9|1001|0111    |1001     |11001        |11000|
|-9|11001|10110|10111|00111|00110|


429140_16
0100    0010    1001    0001    0100    0000

