# Filtry
Filtry jsou druhem [systému](systemy.md), který přijímá signál a vysílá jeho upravenou verzi. Filtry jsou takové systémy, které zasahují jak do časové, tak i frekvenční charakteristiky. Jejich návrh spočívá v navržení vhodné [impulzní odezvy](systemy.md#impulzni-odezva) a [přenosové funkce](systemy.md#prenosova-funkce).

## Filtry s konečnou impulzní odezvou
__Filtry s konečnou impulzní odezvou__ (FIR) jsou typem digitálního filtru, který má konečnou reakci na vstupní signál. To znamená, že jeho výstup se stabilizuje po konečném čase a nemá žádné zpoždění nebo kmitání. FIR filtry jsou charakterizovány tím, že mají konečný počet koeficientů, které určují jejich chování.

## Filtry s nekonečnou impulzní odezvou
Filtry s nekonečnou impulzní odezvou (IIR) jsou dalším typem digitálních filtrů, které mají nekonečně dlouhou odezvu na vstupní signál. To znamená, že výstupní signál může reagovat na vstupní signál i po jeho ukončení. IIR filtry jsou obvykle charakterizovány tím, že mají zpětnou vazbu, což znamená, že jejich výstup je závislý nejen na současném vstupu, ale také na minulých výstupech.