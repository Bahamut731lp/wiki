# XEX
XOR-Encrypt-XOR (XEX) je režim blokového šifrování, který místo inicializačních vektorů používá číselnou hodnotu tweak, čímž vytváří závislost mezi bloky šifrovaného textu bez nutnosti číst celý řetězec šifrovaných bloků od začátku. Použití tweak hodnoty zajišťuje vlastnost, kterou obvykle poskytují inicializační vektory, tedy že pro stejný otevřený text bude výstupní šifrovaný text odlišný. K dosažení této vlastnosti není třeba měnit šifrovací klíč, což
umožňuje použít jeden klíč pro celý disk

Princip fungování XEX spočívá v tom, že nejprve se tweak zašifruje a výsledek se pomocí operace XOR spojí s blokem otevřeného textu. Tento výsledek se následně znovu podrobuje operaci XOR, tentokrát s nezašifrovaným tweakem.

$$
	C = (P \oplus T') \oplus T
$$