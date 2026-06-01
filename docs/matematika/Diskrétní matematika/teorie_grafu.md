# Teorie grafů
Graf je matematická struktura, která je definována dvěma konečnými [[Množiny|množinami]]:
- konečnou množinou **vrcholů** *(uzlů)*
- a množinou dvojic vrcholů - tzv. **hran**

Graf slouží k znázornění propojení mezi prvky množiny. Jednotlivé prvky se pak tedy nazývají *vrcholy*, zatímco vztahy mezi nimi se nazývají *hrany*.

Hrany jsou dvojice vrcholů, která mezi nimi vytváří čáru.

>![[Pasted image 20211108214546.png]]
>*Příklad (neorientovaného) grafu*

# [[Vlastnosti grafu]]
# [[Matice sousednosti]]
# [[Ohodnocené grafy]]
# [[Speciální grafy]]

# Matice sousednosti
Matice sousednosti je to taková matice, která popisuje, kolik hran vede z jednoho vrcholu do druhého.

Matice sousednosti je jedním ze způsobů reprezentace grafu. Tím, že se jedná o číselnou reprezentaci, je výhodná pro výpočty. 
- Matice je vždy čtvercová o velikosti $n\times n$, kde $n$ je počet vrcholů.

>$$\begin{bmatrix}
[V_1, V_1] & [V_1, V_2] & [V_1, V_3] & [V_1, V_4] \\
[V_2, V_1] & [V_2, V_2] & [V_2, V_3] & [V_2, V_4] \\
[V_3, V_1] & [V_3, V_2] & [V_3, V_3] & [V_3, V_4] \\
[V_4, V_1] & [V_4, V_2] & [V_4, V_3] & [V_4, V_4] \\
\end{bmatrix}$$
>Obecné schéma pro graf o 4 vrcholech, kde místo jednotlivých dvojic bude počet hran mezi body ve dvojici.

>|Obrázek grafu|Matice sousednosti grafu|
>|:--:|:--:|
>|![[Pasted image 20211108223746.png]]|$$\large\begin{bmatrix}0 & 1 & 0 & 0 & 0\\1 & 0 & 1 & 1 & 1\\0 & 1 & 0 & 1 & 0\\0 & 1 & 1 & 0 & 1\\0 & 1 & 0 & 1 & 0\end{bmatrix}$$|
>Příklad grafu a jeho matice sousednosti.

# Ohodnocené grafy
Pro účely dalších výpočtů se mohou některé grafy **ohodnocovat**. Ohodnocení grafu znamená, že se nějaké jeho části přiřadí číslo. Hodnotit můžeme buďto
- Hrany, kde každé hraně je přiřazeno nějaké číslo
- nebo vrcholy, kde každému vrcholu je přiřazeno nějaké číslo.

Pokud jsou hodnocené hrany, bývají poté v [[Matice sousednosti|matici sousednosti]] místo počtu hran mezi vrcholy jejich hodnoty.

Při hodnocení vrcholů se [[Matice sousednosti|matice sousednosti]] nepoužívá, jelikož ta popisuje hrany, nikoliv vrcholy. Graf s ohodnocenými vrcholy by se dal převést na graf o ohodnocenými hranami, ale to nám za to ve většině případů nestojí.

# Sled
Sled grafuje je taková [[Úvod do posloupností|posloupnost]] [[Graf|vrcholů]], že mezi dvěma [[Graf|vrcholy]] je [[Graf|hrana]].

> Sled mezi krajními uzly $u_0$ a $u_n$
> $$\Large(u_0,\varepsilon_1,u_1,\varepsilon_2,u_2, ..., \varepsilon_{n-1}, u_{n-1}, \varepsilon_n, u_n)$$

# Speciální grafy
---
## Nulový graf
Nulový graf je takový graf, který obsahuje pouze vrcholy, ale žádné hrany.

>$$\begin{aligned}
G&=(V,E)\\ 
V&=\set{a,b,c,...}\\ 
E&=\emptyset\end{aligned}$$


---
## Triviální graf
Triviální graf je takový graf, který obsahuje pouze jediný vrchol, a tím pádem žádné hrany[^2]

>$$\begin{aligned}
G&=(V,E)\\ 
V&=\set{a}\\ 
E&=\emptyset\end{aligned}$$

---
## Prázdný graf
Prázdný graf je takový graf, který neobsahuje ani vrcholy, a tím pádem ani hrany.
>$$\begin{aligned}
G&=(V,E)\\ 
V&=\emptyset\\ 
E&=\emptyset\end{aligned}$$

[^1]:Je-li graf orientovaný, vyznačuje se "směr" šipkou.
[^2]: Proč? Protože hrana potřebuje ke své existenci dva body.

# Vlastnosti grafu
[[Graf]] se dá dále upravovat v rámci podle toho, jakým způsobem potřebujeme vyjadřovat vztahy mezi vrcholy. Potřebujeme například vytvářet smyčky? Určovat směr z vrcholu do vrcholu? 

Níže jsou tyto vlastnosti vypsané a jakým způsobem mění název grafu. Podotýkám, že tyto názvy, lze kombinovat... takže můžeme klidně skončit s orientovaným multipseudografem <sup>fun times eh?</sup>. 

|Vlastnost|Název grafu|
|-:|:--|
|Jsou hrany v **uspořádané** dvojici?|Orientovaný|
|**Má** graf **více** stejně orientovaných hran?|Multigraf|
|**Nemá** graf **více** stejně orientovaných hran?|Prostý|
|Mohou se v grafu vytvářet smyčky?|Pseudograf|
|Existuje pro každé jeho dva vrcholy [[Sled]]?|Souvislý|

## Orientovanost grafu
- Pokud jsou hrany **neuspořádané** dvojice vrcholů
	- Mezi dvojicí je vztah "obousměrný"
	- takový graf nazýváme **neorientovaný**.
- Pokud jsou hrany **uspořádané** dvojice vrcholů
	- Mezi dvojicí je určen vztah "pouze jedním směrem"
	- takový graf nazýváme **orientovaný**[^1].

## Prostost grafu
- Pokud graf **neobsahuje** duplicitní hrany
	- mezi dvěma vrcholy neexistuje více stejně orientovaných hran, ale právě nanejvýš jedna
	- takový graf nazýváme **prostým**
- Pokud graf **obsahuje** duplicitní hrany
	- mezi dvěma vrcholy existuje více stejně orientovaných hran
	- takový graf nazýváme **multigrafem**

## Pseudograf
- Pokud umožníme vytvářet hrany mezi 1 vrcholem ($\large[V_i, V_i]$)
	- vytváříme smyčku ve vrcholu
	- takový graf nazýváme **pseudograf**

## Souvislost grafu
- Pokud pro každé dva vrcholy grafu existuje [[Sled|sled]]
	- takový graf nazýváme **souvislý**

## Incidence
Incidence určuje vztah [[Graf|vrcholů a hran]] mezi sebou. Nejčastěji se vyjadřuje jako [[Úvod do funkcí|funkce]] nebo [[Zobrazení|zobrazení]].

Mějte například graf $G=(V,E)$, kde
- $V$ je množina vrcholů *(**V**ertices)*
- a $E$ je množina hran *(**E**dges)*

Pak hrana $\large e_{ij}=(V_i, V_j)$ (hrana mezi body $V_i$ a $V_j$) je incidentní s vrcholem $V_i$ a s vrcholem $V_j$. 