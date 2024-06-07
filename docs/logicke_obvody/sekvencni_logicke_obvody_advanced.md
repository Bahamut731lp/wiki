# Vyšší konstrukční celky s klopnými obvody
Jedná se o obvody které se skládají ze základních klopných obvodů, tyto obvody jsou vždy dvoustupňové.
## (Paralelní) registry
N-bitový registr je logický obvod s hodinovým vstupem, *n informačním vstupy* a s *n výstupy*. Může též obsahovat nulovací vstup, popřípadě nastavovací vstup. 

nějací obrázkovači zde?
## Posuvné registry
Posuvný n-bitový registr obsahuje hodinový vstup C, jeden informační vstup a jeden nebo dva informační výstupy. Zpravidla bývá navržen tak, aby jej bylo možno jedním signálem nulovat. Posuvný registr obsahuje zpravidla D klopné obvody hranového typu. Po příchodu hodinového impulsu se obsah vstupu $Di$ přenese na výstup $Qi$ pro $i\in[0,n]$. . Tato funkce současně posune informace o jedno místo vpravo nebo vlevo v závislosti na směru šíření signálu.

nějací obrázkovači zde?

info: Pomocí posuvných registrů lze snadno binárně dělit a násobit. Posun obsahu o jedno místo vpravo je podíl po dělení původního obsahu dvěma (se ztrátou zbytku po dělení), posun o jedno místo vlevo je výsledkem násobení původního obsahu dvěma. 

## Čítače
Zjednodušeně řečeno, čítač je logický obvod, který zjišťuje počet došlých hodinových
impulsů. Každý hodinový impuls změní jeho obsah, nejčastěji jej zvýší (sníží) o jednotku. Čítač však může čítat i jiným způsobem než v přirozeném pořadí binárního kódu (Grayův kód, binárně dekadický kód, další lineární i nelineární kódy). 
Čítač obsahuje zpravidla T klopné obvody.

- Asynchronní čítač
	- Každý obvod překlopí do opačného stavu při příchodu sestupné hrany hodinového impulsu. Hrana však přichází v jiných časech pro každý člen.
	- Při větší délce čítače může dojít k tomu, že doba šíření signálu do nejvyššího řádu je delší, než je perioda hodinového signálu a čítač tudíž nebude zobrazovat správné hodnoty generovaného kódu.
- Synchronní čítač
	- Jeden společný hodinový impuls. Čítač tedy bude vždy zobrazovat správné hodnoty.
	- Vzniká nutnost kontrolovat všechny předchozí stavy, což znamená více hradel a větší cenu.

nějací obrázkovači zde? asi pro oba?
## Sekvenční automaty
Obecně všechny systémy, kde počítáme s časem, jakožto s faktorem podmiňujícím chování jsou sekvenční.

Chování a typ automatu je určena pěti parametry:
- množinou vstupních symbolů (X) tzv. vstupní abecedou
- množinou výstupních symbolů (Y) tzv. výstupní abecedou
- množinou vnitřních stavů (Q)
- přechodovou funkcí (δ) - podmínky přechodu mezi stavy automatu
- výstupní funkcí (λ) - zobrazení $Y=λ(X,Q)$


| Typ automatu                                                   | Určení automatu                                                                        | Poznámka                                                                                               |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Automat kombinačního typu –kombinační logický systém           | $A = \{X, Y, δ=F\}$                                                                    | Automat má jeden konstantní stav (vnitřní).                                                            |
| Medvěděvův “konečný” automat – automat bez výstupního zařazení | $A = \{X, Q, δ\}$<br>$Qt = δ(X_t, Q_{t-1} )$                                           | Výstupní chování automatu nelze pozorovat.                                                             |
| Mooreův automat                                                | $A = \{X, Y, Q, δ, λ_0\}$<br>$Q_t = δ(X_t, Q_{t-1})$<br>$Y_t = λ_0(Q_t)$               | Výstupní stav je závislý na vnitřním stavu automatu. Převoditelný na Mealyho.                          |
| Autonomní automat                                              | $A = \{Y, Q, δ, λ\}$<br>$Q_t = δ_0(Q_{t-1})$<br>$Y_t = λ_0(Q_t )$                      | Konstantní chování z hlediska “vstupů”.                                                                |
| Mealyho automat                                                | $A = \{X, Y, Q, δ, λ\}$<br>$Q_t=δ(X_t, Q_{t-1})$<br>$Y_t=λ(X_t, Q_{t-1})$              | Nejobecnější automat, výstupní stav je závislý na vnitřním stavu a na vstupu, převoditelný na Moora.   |
| Stochastický, pravděpodobnostní automat                        | $A = \{X, Y, Q, δ, λ\}$<br>$δ:P_δ \{Q_j / Q_i , X_1 \}$<br>$λ:P_λ \{Y_m / Q_i, X_1 \}$ | Přechodové a výstupní funkce jsou<br>pravděpodobnostmi $P_δ$ a $P_λ$.<br>Realizace je deterministická. |
- Automat typu Mealy je zpravidla jednodušší než automat Mooreův, protože pro vytvoření požadované výstupní sekvence není třeba navrhovat pro každou hodnotu požadovaného výstupu, který má být odezvou na vstupní sekvenci, odpovídající vnitřní stav.
- Automat typu Mealy reaguje na vstupní sekvenci dříve než automat typu Moore. Tato vlastnost může být nevýhodou, protože okamžik, kdy automat zareaguje na změnu vstupu, není přesně definován, záleží na vnějším vstupním signálu, který nemusí být přesně synchronizován s hodinami automatu.

nějací obrázkovači zde? Asi by to chtělo i ty popisky, ale idk