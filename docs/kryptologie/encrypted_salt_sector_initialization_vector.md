# ESSIV
__Encrypted Salt-Sector Initialization Vector__ (zkráceně _ESSIV_), která umožňuje využít šifrovací algoritmus AES v režimu CBC pro šifrování disků. Při použití
tohoto režimu není praktické uchovávat inicializační vektory pro každý jednotlivý sektor. ESSIV dokáže tyto inicializační vektory generovat na základě
čísla sektoru $s$, šifrovacího klíče $K$, šifrovací funkce $E$ a hashovací funkce $H$. Každý sektor je pak zašifrován v režimu CBC s vygenerovaným inicializačním vektorem.

$$
    IV(s) = E_{H(K)}(s)
$$

Problém s tímto přístupem je právě použití blokové šifry v režimu CBC, kdy změna bitu v zašifrovaném textu bude mít dopad na integritu otevřeného textu po dešifrování. Pokud má útočník znalost o uspořádání otevřeného textu, je tento režim zranitelný vůči cíleným zásahům.