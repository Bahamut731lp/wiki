# Sekvenční logické obvody
Jedná se o obvody, jejichž výstupy jsou závislé na vstupních hodnotách a vnitřním stavem obvodu. 

# Klopné obvody
Klopné obvody jsou elektronickými obvody, které skokové překlápí mezi dvěma napěťovými stavy. Existují tři základní typy dle počtu stabilních stavů.

!!! warning "Tohle není moje"
    Tuto sekci ještě musím přepsat, aby byla jednodušší na pochopení :)

## Klopné obvody
Klopné obvody jsou elektronickými obvody, které skokové překlápí mezi dvěma napěťovými stavy. Existují tři základní typy dle počtu stabilních stavů

- Astabilní - Klopné obvody bez stabilních stavů. Využití je například v generátorech periodických signálů (hodiny)
- Monostabilní  - Klopné obvody s jedním stabilním stavem. Při sepnutí drží po určitou dobu nestabilní stav. Po uplynutí dostatečného času se vrací do stabilního stavu.
- Bistabilní - Klopné obvody se dvěma stabilními stavy. Lze je využít jako paměťové prvky a dále se dělí na synchronní a asynchronní. Synchronní BKO mění svůj stav při změně vstupního signálu a asynchronní mění svůj stav pouze v časech dle hodinového signálu. Posledním důležitým rozdělením je zda jsou jednostupňové nebo dvoustupňové.
	- Jednostupňové - Prakticky nevyužívané kvůli hazardním stavům
	- Dvoustupňové - Tyto obvody zaručují kromě definovaného okamžiku zápisu do klopného obvodu i definovaný okamžik rozšíření vnitřního stavu na výstup obvodu. Tato vlastnost je nezbytná pro konstrukci většiny sekvenčních obvodů, neboť umožňuje konstruovat zařízení tak, že v daný okamžik reagují pouze určené klopné obvody. 


### RS flip-flop
Jedná se o jednostupňový/dvoustupňový bistabilní asynchronní klopný obvod. Při aktivním vstupu S je vnitřní stav nastaven na log. 1. Při aktivním vstupu R je vnitřní stav nastaven na log. 0. Pokud jsou oba vstupy neaktivní, stav zůstává beze změny. Pokud jsou aktivní oba stavy, tak má obvod nedefinované chování, tomuto stavu říkáme zakázaný. Je tedy nutné se tomuto stavu vyvarovat.

pozn: chování je nedefinované protože jsou logická hradla tvořena tranzistory. Každý tranzistor se sepne v jinou chvíli. To, který tranzistor se sepne první není deterministické a tedy by nebylo ani chování celkového obvodu.

| $R$ | $S$ | $Q$ | $\overline{Q}$ |
| --- | --- | --- | -------------- |
| 0   | 0   | $Q$ | $\overline{Q}$ |
| 0   | 1   | 1   | 0              |
| 1   | 0   | 0   | 1              |
| 1   | 1   | X   | X              |


nějací obrázkovači zde?

Z RS Klopného obvodu jde vytvořit obvod RST, který je již synchronním. Je k tomu nutný vstup pro synchronizační signál a jeho připojení na logická hradla NAND/NOR

#### Ošetřené tlačítko
Mechanický přepínač – tlačítko při sepnutí nebo rozepnutí obvodu způsobí několik zákmitů výstupního napětí. Lze ošetřit pomocí RS obvodu.

nějací obrázkovači zde?

Odpory by měli být v řádech k$\ohm$. Při stisknutí tlačítka prochází RS obvod stavy 
- (R=0, S=1) => (R=1, S=1) <=> (R=1, S=0) nebo
- (R=1, S=0) => (R=1, S=1) <=> (R=0, S=1)
Z původního stavu se přechází do stavu, kdy jsou obě hodnoty pravdivé. To znamená, že by se mělo jednat o zakázaný stav. Tento problém je řešen tím, že vstupy do RS obvodu jsou invertované, chovají se tedy jako (R=0, S=0). Při prvním kontaktu je přenastavena hodnota v RS obvodu. Tlačítko bude po prvním kontaktu ještě chvíli odskakovat do stavu (R=1, S=1), ale hodnota v paměti se již měnit nebude.

### JK flip-flop
Jedná se o dvoustupňový bistabilní synchronní klopný obvod. JK obvod se chová identicky jako RS obvod, ale řeší problém zakázaného stavu. JK obvod se dá popsat jako dva RST obvody. 
- Přímý výstup Master obvodu je přiveden na vstup S Slave obvodu.
- Negovaný výstup Master obvodu je přiveden na vstup R Slave obvodu.
- Přímý výstup Slave obvodu je přiveden na vstup R Master obvodu.
- Negovaný výstup Slave obvodu je přiveden na vstup S Master obvodu.
- Master obvod reaguje na náběžnou hranu signálu
- Slave obvod reaguje na sestupnou hranu signálu.

| $J$ | $K$ | $Q$            | $\overline{Q}$ |
| --- | --- | -------------- | -------------- |
| 0   | 0   | $Q$            | $\overline{Q}$ |
| 0   | 1   | 0              | 1              |
| 1   | 0   | 1              | 0              |
| 1   | 1   | $\overline{Q}$ | $Q$            |

nějací obrázkovači zde?

### D flip-flop
Jedná se o jednostupňový/dvoustupňový bistabilní synchronní klopný obvod. Vyhází z JK obvodu, ale místo dvou ovládacích vstupů má pouze jeden. Ten je přímo připojen do vstupu J a negován před připojením do vstupu K. Vnitřní stav je vždy nastaven na vstupní hodnotu. Velice často využíván pro konstrukci registrů a posuvných registrů.

| $D$ | $Q$ | $\overline{Q}$ |
| --- | --- | -------------- |
| 0   | 0   | 1              |
| 1   | 1   | 0              |


### T flip-flop
Jedná se o dvoustupňový bistabilní synchronní klopný obvod. Vyhází z JK obvodu, ale místo dvou ovládacích vstupů má pouze jeden. Ten je přímo připojen do obou vstupů. Pokud je na vstupu log. 1 je vnitřní stav invertován, jinak zůstává vnitřní stav nezměněn. Často je využíván pro konstrukci čítačů.

| $T$ | $Q$            | $\overline{Q}$ |
| --- | -------------- | -------------- |
| 0   | $Q$            | $\overline{Q}$ |
| 1   | $\overline{Q}$ | $Q$            |

## Registry
N-bitový registr je logický obvod s hodinovým vstupem, *n informačním vstupy* a s *n výstupy*. Může též obsahovat nulovací vstup, popřípadě nastavovací vstup. 

nějací obrázkovači zde?

### Posuvné registry
Posuvný n-bitový registr obsahuje hodinový vstup C, jeden informační vstup a jeden nebo dva informační výstupy. Zpravidla bývá navržen tak, aby jej bylo možno jedním signálem nulovat. Posuvný registr obsahuje zpravidla D klopné obvody hranového typu. Po příchodu hodinového impulsu se obsah vstupu $Di$ přenese na výstup $Qi$ pro $i\in[0,n]$. . Tato funkce současně posune informace o jedno místo vpravo nebo vlevo v závislosti na směru šíření signálu.

nějací obrázkovači zde?

info: Pomocí posuvných registrů lze snadno binárně dělit a násobit. Posun obsahu o jedno místo vpravo je podíl po dělení původního obsahu dvěma (se ztrátou zbytku po dělení), posun o jedno místo vlevo je výsledkem násobení původního obsahu dvěma. 

## Čítače
Zjednodušeně řečeno, čítač je logický obvod, který zjišťuje počet došlých hodinových impulsů. Každý hodinový impuls změní jeho obsah, nejčastěji jej zvýší (sníží) o jednotku. Čítač však může čítat i jiným způsobem než v přirozeném pořadí binárního kódu (Grayův kód, binárně dekadický kód, další lineární i nelineární kódy). 
Čítač obsahuje zpravidla T klopné obvody.

- Asynchronní čítač
	- Každý obvod překlopí do opačného stavu při příchodu sestupné hrany hodinového impulsu. Hrana však přichází v jiných časech pro každý člen.
	- Při větší délce čítače může dojít k tomu, že doba šíření signálu do nejvyššího řádu je delší, než je perioda hodinového signálu a čítač tudíž nebude zobrazovat správné hodnoty generovaného kódu.
- Synchronní čítač
	- Jeden společný hodinový impuls. Čítač tedy bude vždy zobrazovat správné hodnoty.
	- Vzniká nutnost kontrolovat všechny předchozí stavy, což znamená více hradel a větší cenu.

nějací obrázkovači zde? asi pro oba?
