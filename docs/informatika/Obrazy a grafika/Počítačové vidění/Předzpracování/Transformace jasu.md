# Transformace jasu
Jas, neboli světelná intenzita obrazového bodu, hraje klíčovou roli ve vnímání obrazu a přímo ovlivňuje schopnost obraz interpretovat. Změny v jasu mohou dramaticky zjednodušit interpretaci či následné zpracování obrazových dat. Prostředky pro změnu jasových úrovní v obraze nazýváme jasové korekce.

!!! info "Rozdělení podle závislosti na poloze obrazového bodu"
    Podle závislosti na poloze obrazového bodu se rozlišují jasové korekce na statické (polohově nezávislé) a dynamické (polohově závislé)

## Statická korekce
!!! question "Co je to statická korekce?"
    Statická korekce je taková jasová korekce, která využívá pouze intenzitu obrazového bodu, nikoliv jeho souřadnice.

Obecnou statickou jasovou korekci $f_c(i)$ pro diskrétní obrazovou funkci $f(x, y)$ a výsledný obraz $g(x, y)$ lze zapsat jako $g(x, y) = (fc ◦ f)(x, y)$. Mezi statické jasové korekce patří zejména prahování (obecně pak redukce počtu úrovní jasu), ekvalizace histogramu či gama korekce.


## Dynamická korekce
!!! question "Co je to dynamická korekce?"
    Dynamická korekce je taková jasová korekce, která využívá pro svůj výpočet souřadnice obrazového bodu.

Dynamické jasové korekce se od těch statických liší tím, že používají informaci o poloze obrazového bodu ke svému výpočtu. Polohu bodu
potřebuje degradační funkce e(x, y), která obsahuje opravné koeficienty. Poruchy se často vyjadřují multiplikativním modelem, tudíž pro diskrétní obrazovou funkci f(x, y), výsledný obraz g(x, y) a degradační funkci e(x, y) platí, že g(x, y) = e(x, y) · f(x, y) 