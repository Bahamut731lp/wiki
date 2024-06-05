# Rekurze
Rekurze je princip, který umožňuje funkci volat samu sebe. Tento přístup k řešení problémů je často elegantní a intuitivní, zejména pokud je problém definován rekurzivně. Princip rekurze spočívá v tom, že funkce volá sama sebe, buď přímo (přímá rekurze) nebo nepřímo přes jinou funkci (nepřímá rekurze)

!!! warning "Podmínky rekurze"
    - Algoritmus má **ukončovací podmínku**
    - V každém kroku rekurze proběhne ke **zjednodušení problému**
    - Test ukončovací podmínky proběhne **před dalším voláním funkce**

Rekurze může být jednoduchá na pochopení a implementaci pro problémy, které jsou definovány rekurzivně. Některé problémy mohou být elegantněji řešeny pomocí rekurze než pomocí iterativních přístupů. Může být ale náročná na paměť, protože každé volání funkce se ukládá na zásobník. Navíc, pokud není správně implementována podmínka ukončení, může rekurze pokračovat nekonečně, což může vést k vyčerpání zásobníku a pádu programu.

!!! danger "Kdy není vhodné použít rekurzi"
    - Máme k dispozici iterativní algoritmus se stejnou složitostí
    - Rekurzivní varianta se chová nestabilně
    - Počet volání roste rychleji než lineárně

!!! tip "Tabelace rekurze"
    Neefektivitu rekurze lze vyřešit tabelací, který si bude mezivýsledky ukládat a na začátku volání číst, jestli už se někdy náhodou pro stejnou kombinaci vstupů nespočítal výsledek