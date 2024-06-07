# Integrace
__Integrace__ je operace inverzní k [derivaci](derivace.md), která vyjadřuje součet nekonečně mnoha hodnot.

- __Neurčitý integrál__ vyjadřuje primitivní funkci $F(x)$, která je antiderivací funkce $f(x)$ a tudíž pro ní platí $(F(x))' = f(x)$.
    - Funkční hodnota primitivní funkce $F(x)$ je limitní kumulativní součet hodnot funkce $f(x)$
- __Určitý integrál__ používá primitivní funkci k nalezení plochy pod křivkou, která je ohraničena integračními mezemi.
    - $\int_{a}^{b} f(x) dx = F(b) - F(a)$

## Věci co se hodí znát

### Per partes
Per partes se využívá pro integraci součinu funkcí.
$$\int f(x)g'(x)dx=f(x)g(x)-\int f'(x)g(x)dx$$
lze substituovat jako 
$$
\int u \cdot v'dx=u\cdot v-\int u'\cdot vdx
$$
Co to znamená? Pokud máš součin nebo podíl, tak jde řešit metodou per partes. U integrálu zvolíš co bude *u* a *v*. Jeden výběr bude pravděpodobně lepší. Jak to poznat? Integrál ve výrazu $u\cdot v-\int u'\cdot vdx$ bude jednodušší na výpočet. Názorná ukázka
https://youtu.be/gZvICMtNbeQ?t=456

### Substituce
Pokud lze vyjádřit $h(x)$ jako $f(g(x)) \cdot g'(x)$, pak platí:
$$\int h(x)dx =\int f(g(x)) \cdot g'(x)dx=\int f(z)dz=F(z)+C=F(g(x))+C$$

Co to znamená? Pokud máš složenou funkci, tak jde vyřešit substitucí. Názorná ukázka
https://youtu.be/Qx_NnL2iSGM?t=472

