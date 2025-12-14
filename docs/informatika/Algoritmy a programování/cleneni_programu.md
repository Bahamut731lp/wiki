# Členění programu
Členění programu na menší, lépe zvládnutelné části je klíčové pro psaní strukturovaného a udržovatelného kódu. V jazycích vyšší úrovně se k tomuto účelu používají různé nástroje, jako jsou metody, funkce, procedury a makra.

## Procedura
Procedura je pojmenovaná část kódu, který vykonává určitou úlohu nebo posloupnost kroků. Tuto část kódu je možné volat pomocí jejího názvu. Procedury nemají návratovou hodnotu. Mohou však přijímat vstupní parametry a manipulovat s nimi, stejně jako s globálními proměnnými.

```js
function logUser(user) {
    console.log(user);
}
```

## Funkce
Funkce je blok kódu, který provádí určitou operaci a vrací výsledek této operace. Mohou přijímat vstupní parametry a manipulovat s nimi, stejně jako s globálními proměnnými. Konceptem se podobají matematickým funkcím, kdy vstup transformují podle předpisu na výstup.

```js
function sum(a, b) {
    return a + b;
}
```

## Metoda
Metoda je [funkce](#funkce) či [procedura](#procedura), která je vázana na objekt.
```js
MyObject.myMethod();
```

## Makra
Makra jsou předdefinované textové záměny v kódu. Překladač nahradí každý výskyt makra příslušným textem před samotným překladem.

```cpp
#define PI 3.14159
```


Členění programu v jazyce vyšší úrovně. Metody, funkce, procedury, makra. Parametry metod,
procedur a funkcí a způsoby jejich předávání. Globální a lokální proměnné.


