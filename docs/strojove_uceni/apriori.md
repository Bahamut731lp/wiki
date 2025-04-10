# Apriori algoritmus
Apriori algoritmus je algoritmus pro dolování asociačních pravidel.

!!! info "Support"
    __Support__ je vlastnost, která říká, kolikrát se podmnožina vyskytuje v transakčních datech.

    $$
    S(x) = \frac{f(x)}{N}
    $$

## Postup výpočtu
Mějme transakční data

|ID|Položky|
|:--:|:--:|
|T100|1, 2, 3|
|T101|2, 4|
|T102|2, 3|
|T103|1, 2, 4|
|T104|1, 3|
|T105|2, 3|
|T106|1, 3|
|T107|1, 2, 3, 5|
|T108|1, 2, 3|

### Spočítání supportu
|Položka|Support|
|:--:|:--:|
|1|6|
|2|7|
|3|6|
|4|2|
|5|2|

### Rozšíření množiny
|Položka|Nové množiny|
|:--:|:--:|
|1|{1, 2}, {1, 3}, {1, 4}, {1, 5}|
|2|{2, 3}, {2, 4}, {2, 5}|
|3|{3, 4}, {3, 5}|
|4|{4, 5}|

!!! question "Nechybí nějaké množiny?"
    Je důležité si uvědomit, že v množinách __nezáleží na pořadí prvků__, tudíž {2, 1} je ta samá množina jako {1, 2}.

|Množina|Support|
|:--:|:--:|
|{1, 2}|4|
|{1, 3}|4|
|{1, 4}|1|
|{1, 5}|2|
|{2, 3}|4|
|{2, 4}|2|
|{2, 5}|2|
|{3, 4}|0|
|{3, 5}|1|
|{4, 5}|0|