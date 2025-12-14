# Číselné charakteristiky
Každé rozdělení pravděpodobnosti je jednoznačně popsání distribuční funkcí a pravděpodobnostní funkcí (popř. hustotou pravděpodobnosti). Číselné charakteristiky rozdělení pravděpodobnosti slouží k jeho popsání pomocí několika čísel, které charakterizují [náhodnou veličinu](nahodna_velicina.md).

## Obecný moment
Obecný moment $r$-tého řádu náhodné veličiny $x$ je definován jako střední hodnota r-té mocniny náhodné veličiny.

!!! example "Obecný moment r-tého řádu pro diskrétní náhodnou veličinu"
    $$
    \mu_r = \sum_i x_i^r \cdot P(x_i)
    $$

!!! example "Obecný moment r-tého řádu pro spojitou náhodnou veličinu"
    $$
    \mu_r = \int_{-\infty}^{\infty}x^r \cdot f(x) dx
    $$

## Centrální moment
Centrální moment $r$-tého řádu náhodné veličiny $X$ je definován jako roztpyl hodnot kolem střední hodnoty. Na rozdíl od obecných momentů, které měří rozptyl hodnot od libovolného bodu, centrální momenty měří rozptyl hodnot od střední hodnoty náhodné veličiny.

!!! example "Centrální moment r-tého řádu pro diskrétní náhodnou veličinu"
    $$
    \mu_r = \sum_i (x_i - E(X))^r \cdot P(x_i)
    $$

!!! example "Centrální moment r-tého řádu pro spojitou náhodnou veličinu"
    $$
    \mu_r = \int_{-\infty}^{\infty}(x-E(X))^r \cdot f(x) dx
    $$

## Střední hodnota
__Střední hodnota__ $E(X)$ je první obecný moment náhodné veličiny $X$.

!!! example "Střední hodnota pro diskrétní náhodnou veličinu"
    $$
    \mu_r = \sum_i x_i \cdot P(x_i)
    $$

!!! example "Střední hodnota pro spojitou náhodnou veličinu"
    $$
    \mu_r = \int_{-\infty}^{\infty}x \cdot f(x) dx
    $$

## Rozptyl
__Rozptyl__ $\sigma^2$ je druhý centrální moment, který vyjadřuje rozptýlenost dat od střední hodnoty.

## Směrodatná odchylka
__Směrodatná odchylka__ je druhá odmocnina rozptylu, která také vyjadřuje rozptýlenost dat od střední hodnoty.

## Šikmost

## Špičatost

## Kvantily
Kvantil je jednoduše hodnota, která rozděluje data nebo pravděpodobnostní distribuci na části podle určitého procentuálního podílu. 50% kvantil, neboli _medián_, rozděluje pravděpodobnostní rozdělení na dvě stejné části tak, že pravděpodobnost, že náhodná veličina nabude hodnoty menší než 50% je... 50%.

!!! example "4% kvantil"
    Pokud zvolíme 4% kvantil, tak poté poté rozdělíme pravděpodobnost na dvě části tak, že první část má pravdědobnost menší než 4% a druhá 96%.