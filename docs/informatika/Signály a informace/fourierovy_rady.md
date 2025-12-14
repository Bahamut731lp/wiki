# Fourierovy řady
__Fourierovy řady__ umožňují rozložit jakýkoliv periodický a spojitý signál na jeho harmonické složky.

$$
    x(t) = \sum_{k=-\infty}^{\infty} c_k cos(k \omega_0 t + \Phi_k) = \sum_{k=-\infty}^{\infty} X_k e^{jk\cdot2\pi{f_0}t}
$$

## Diskrétní Fourierova transformace
Diskrétní Fourierova transformace je diskrétní verze Fourierovy transformace, která počítá pouze konečný (nespojitý) počet harmonických složek, tj. konečný počet koeficientů. DFT je výpočetně náročná, proto se používá algoritmus FFT (Fast Fourier Transform), který je výpočetně efektivnější.

$$
    X[k] = \frac{1}{N}\sum_{n=0}^{N-1} x[n] \cdot e^{-j 2 \pi \frac{kn}{N}}
$$

- Vstupem je $N$ hodnot diskrétního signálu (podle předpokladu jde o 1 periodu).
- Výstupem je $N$ hodnot komplexních koeficientů spektra na normovaných frekvencích $\frac{k}{N}$, tj. na reálných frekvencích $k \cdot \frac{F_s}{N}$.
- Spektrum je periodické s periodou $F_s$, tj. pro $k > N$ dostaneme stejné hodnoty.
- Hodnoty koeficientů pro $\frac{N}{2} < k < N$ jsou komplexně sdružené s prvními $\frac{N}{2}$ hodnotami, netřeba je počítat. Při určování modulu klasického jednostranného spektra je nutné násobit dvěma.
- Pokud vybraných $N$ vzorků signálu netvoří jednu periodu (v praxi se to stává téměř vždy), jsou výsledné hodnoty pouze aproximací spektra, zatíženou různými systémovými chybami, např. tzv. rozmazání spektra.
