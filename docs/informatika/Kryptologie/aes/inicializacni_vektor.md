# Inicializační vektor
__Inicializační vektor__ (zkráceně _IV_), je počáteční blok pro blokové šifry, který se používá, pokud šifra kombinuje bloky s předchozím výsledkem. 

## Encrypted Salt-Sector Initialization Vector
__Encrypted Salt-Sector Initialization Vector__ (zkráceně _ESSIV_) je metoda, která umožňuje využít šifrovací algoritmus AES v režimu CBC pro šifrování disků. Při použití tohoto režimu není praktické uchovávat inicializační vektory pro každý jednotlivý sektor. ESSIV dokáže tyto inicializační vektory generovat na základě čísla sektoru $s$, šifrovacího klíče $K$, šifrovací funkce $E$ a hashovací funkce $H$. Každý sektor je pak zašifrován v režimu CBC s vygenerovaným inicializačním vektorem \parencite{demystifying-disk-encryption}.

$$
	IV(s) = E_{H(K)}(s)
$$

Problém s tímto přístupem je právě použití blokové šifry v režimu CBC, kdy změna bitu v zašifrovaném textu bude mít dopad na integritu otevřeného textu po dešifrování. Pokud má útočník znalost o uspořádání otevřeného textu, je tento režim zranitelný vůči cíleným zásahům.