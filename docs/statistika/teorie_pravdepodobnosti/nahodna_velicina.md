# Náhodná veličina
__Náhodná veličina__ formálně popisuje výsledky [náhodných jevů](jevy.md). Je to funkce, která přiřazuje číselnou hodnotu každému možnému výsledku náhodného pokusu. Náhodná veličina může být diskrétní, pokud nabývá konečně nebo spočetně mnoha hodnot, nebo spojitá, pokud může nabývat hodnot z nepřetržitého intervalu.

## Distribuční funkce
Distribuční funkce $F(x)$ (cumulative distribution funcion - `cdf`) je graf popisující pravděpodobnost, že náhodná veličina $X$ nabude menší nebo rovna hodnotě $x.

$$
F(x) = P(X \leq x)
$$

## Pravděpodobnostní funkce
Pravděpodobnostní funkce $p(x)$ (probability mass function - `pdf`) je graf popisující pravděpodobnost, že náhodná veličina $X$ nabude hodnoty, která je rovna $x$. Je definována pro diskrétní náhodnou veličinu.

$$
p(x) = P(X = x)
$$

## Hustota pravděpodobnosti
Hustota pravděpodobnosti $f(x)$ je graf popisující pravděpodobnost, že náhodná veličina $X$ nabude hodnoty, která je rovna $x$. Je definována pouze pro spojitou náhodnou veličinu.