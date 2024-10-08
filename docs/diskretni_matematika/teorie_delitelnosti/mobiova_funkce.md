# Mobiova funkce
Mobiova funkce $\mu(n)$ je funkcí, která je schopna určit, zdali je číslo složené z opakujících se, nebo různých, [prvočísel](./prvocisla.md).

$$\mu(n) = \begin{cases}
1 && n = 1 \\
0 && \text{pokud}\,n\,\text{obsahuje opakující se prvočísla}\\
(-1)^k && \text{pokud}\,n\,\text{je součinem}\,k\,\text{různých prvočísel}
\end{cases}$$