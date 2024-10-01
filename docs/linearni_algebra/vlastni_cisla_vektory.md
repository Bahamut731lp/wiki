# Vlastní čísla a vlastní vektory
Vlastní čísla a vlastní vektory čtvercové [matice](matice.md) jsou speciální čísla a nenulové vektory, které úzce souvisí s touto maticí a s lineárním zobrazením, které matice reprezentuje. Uvažujme čtvercovou matici $A$ o velikosti $n\times{n}$, poté existuje $n$ vlastních čísel $\lambda_{i}$ a $n$ vlastních vektorů $v_{i}$ pro které platí:

$$
A \cdot v_{i} = \lambda_{i} \cdot v_{i}
$$

Vlastnosti vlastních čísel a vektorů:

- Každá [čtvercová matice](matice.md) má alespoň jedno vlastní číslo.
- Nenulová [čtvercová matice](matice.md) má tolik vlastních čísel, kolik je její řád.
- Ke každému vlastnímu číslu λ existuje alespoň jeden nenulový vlastní vektor x.
- Vlastní vektory příslušné k různým vlastním číslům jsou [lineárně nezávislé](vektorove_prostory.md#linearni-zavislost).

## Interpretace 
Vlastní vektory určují směry, které se po transformaci neměnní. 

- __Vlastní vektory__ nám ukazují preferované směry v daném systému, ať už se jedná o fyzikální systém, matematický model, nebo abstraktní datový soubor. Tyto směry odrážejí skrytou strukturu v datech a dávají nám náhled do toho, jak se systém chová v závislosti na vnějších vlivech nebo na změnách parametrů.
- __Vlastní čísla__ nám říkají, jak silný je vliv daného směru na celkové chování systému. Vlastní čísla s velkými absolutními hodnotami ukazují na směry s velkým vlivem, zatímco malá vlastní čísla indikují směry s menším vlivem.

!!! example ""
    Představte si soubor dat o chování spotřebitelů. Vlastní vektory by v tomto případě odpovídaly směrům největší variability v chování spotřebitelů. Vlastní čísla by pak odpovídala síle variability v daných směrech. To by nám mohlo napovědět, jaké faktory nejvíce ovlivňují chování spotřebitelů a jakým způsobem.

## Výpočet vlastních čísel a vektorů
### Analytický výpočet
!!! danger ""
    Tuto sekci je nutné podrobněji rozepsat. Co je to charakteristický polynom a proč jsou jeho kořeny vlastní čísla? Proč je lambda násobena jednotkovu maticí E?

Vlastní čísla a vektory se analyticky počítají pomocí charakteristického polynomu matice. Jeho kořeny jsou právě vlastní čísla matice.

$$
A - \lambda \cdot E = A - \lambda \cdot \begin{bmatrix}1 & 0 & 0\\0 & 1 & 0\\0 & 0 & 1\end{bmatrix} = A - \begin{bmatrix}\lambda & 0 & 0\\0 & \lambda & 0\\0 & 0 & \lambda\end{bmatrix}
$$

$$\begin{aligned}
Av &= \lambda v \\
Av - \lambda v &= 0 \\
(A - \lambda{E}) v &= 0
\end{aligned}$$

!!! danger ""

    Proč determinant?

Aby měla rovnice nenulové řešení, musí být determinant matice nulový. Řešíme tedy rovnici

$$\begin{aligned}
\det(A - \lambda{E}) &= 0
\end{aligned}$$

Řešením této rovnice jsou vlastní čísla matice A. Vlastní vektory se poté spočítají dosazením konkrétního vlastního čísla $\lambda$ do rovnice $A - \lambda E$, konkrétně

$$\begin{aligned}
A -  \begin{bmatrix}\lambda & 0 & 0\\0 & \lambda & 0\\0 & 0 & \lambda\end{bmatrix} \begin{bmatrix}v_1 \\ v_2 \\ v_3\end{bmatrix}&= \begin{bmatrix}0 \\ 0 \\ 0\end{bmatrix}
\end{aligned}$$

### Numerický výpočet
!!! note ""

    Dopsat mocninnou metodu


## Použití
Vlastní čísla a vektory se používá v algoritmu PCA ([Principal Component Analysis]()).