# Procesor

!!! warning "Tohle není moje"
    Tuto sekci ještě musím přepsat, aby byla jednodušší na pochopení :)

## Architektura
- Von Neumannovská architektura
	- Procesor (CU a ALU) a jedna sdílená paměť
- Harvardská architektura
	- Procesor (CU a ALU) a paměť s daty a paměť s programem

Procesor také obsahuje různé registry a čítače. Mezi ně patří:

- Program Counter - obsahuje adresu instrukce zpracovávané v příštím instrukčním cyklu
- Instruction Register - obsahuje kód aktuální instrukce
- Příznakový Registr - obsahuje příznaky jako overflow, přerušení, znaménko, nula, parita
- Univerzální Registr - pro programátora na data

## Komunikace
Pro komunikaci se využívají sběrnice "skupina sdílených vodičů, která slouží pro výměnu datových slov". Zařízení využívají tří stavů: LOW, HIGH a OPEN. OPEN neboli vysoká impedance značí, že zařízení aktuálně nekomunikuje po sběrnici a je odpojeno. Využitím sběrnic snižujeme počet nutných vodičů, ale dochází ke zhoršení dynamických vlastností při velkém počtu připojených zařízení nebo velké délce vodičů.

O přidělení sběrnice se musí zařízení žádat procesor. Způsoby přidělování jsou různé:

- Zřetězení
	- žádosti vysílají všechny jednotky po společném vodiči
	- žádosti jsou anonymní, není možno je procesorem vyhodnotit
	- společný přidělovací impuls, procházející všemi jednotkami pořadí odpovídá pořadí priorit
	- pokud jednotka žádala přidělení sběrnice, nepustí signál dál ostatní jednotky musejí čekat
- Cyklické výzvy
	- žádosti po jednom vodiči, procesor přijímá žádosti jako anonymní
	- jestliže může žádosti vyhovět, začne procesor postupně vysílat adresy jednotlivých PZ. žádající jednotka odešle zprávu Potvrzení výběru.
	- procesor začne testovat další žádosti po dokončení činnosti PZ
	- procesor může začít odpovídat buď od adresy následující nebo adresy s nejvyšší prioritou

## Vstupně výstupní operace
Přímé dotazování by bylo neefektivní a proto se využívá různých optimalizací:

- Přerušení - volání z VVZ
- Přímý přístup k paměti
- periferní koprocesor

## Soubor instrukcí
Zahrnuje Typy a formáty instrukcí, instrukční soubor, datové typy, kódovaní a reprezentace, způsob uložení dat v paměti, módy adresování paměti a přístup do paměti dat a instrukcí.

## Instrukční cyklus
Věci co procesor dělá pro běh programu.

1. Instruction Fetch - načtení instrukce z paměti do CU
2. Instruction Decode - dekódování instrukce v CU
3. Operand Fetch - načtení operandů pro ALU
4. Instruction Execution - provedení výpočtu v ALU
5. Write Back - uložení výsledku do paměti
Po instrukčním cyklu může následovat zpracování přerušení.

## Funkce mikroprocesoru
- Matematické a logické operace v ALU
- Přesun dat mezi různými pozicemi
- Rozhodování o skocích v programu a nastavení nových instrukcí na základě těchto rozhodnutí