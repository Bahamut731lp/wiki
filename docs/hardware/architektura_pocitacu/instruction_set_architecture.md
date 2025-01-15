# Architektura instrukčí sady
ISA (Instruction Set Architecture) definuje základní pravidla a principy, podle kterých procesor vykonává programy. Obsahuje specifikace, které určují, jak procesor kóduje a interpretuje instrukce. Mezi klíčové prvky, které ISA musí definovat, patří:

- __Způsob kódování instrukcí__: Určuje pořadí operací, operandů a adres v binární podobě instrukcí, což procesoru umožňuje dekódovat a vykonávat příkazy.
- __Zacházení s operandem__: Popisuje způsoby adresování, tedy metody, jakými procesor získává přístup k operandům, například prostřednictvím registrů, paměti nebo přímé adresace.
- __Výčet možných operací__: Specifikuje sadu instrukcí, které procesor podporuje. Tyto instrukce mohou zahrnovat aritmetické operace, logické operace, skoky, volání podprogramů a další funkce.
- __Způsob ukládání výsledku__: Určuje, kde a jak jsou ukládány výsledky operací, například do akumulátoru (střadače), registrů, paměti nebo na zásobník.
- __Datové typy a velikosti operandů__: Definuje, jaké datové typy (např. celá čísla, reálná čísla, znaky) a jaké jejich velikosti (např. 8bitové, 16bitové, 32bitové) procesor podporuje.
- __Výběr následujících instrukcí__: Popisuje principy větvení programu, včetně podmíněných skoků, volání a návratů z podprogramů. Dále definuje způsoby, jakými procesor zpracovává přerušení a mění tok řízení programu.

## Střadačově orientovaná ISA
Střadačově orientovaná ISA je architektura procesoru, kde střadač (akumulátor) slouží jako hlavní registr pro aritmeticko-logické operace. Tento speciální registr implicitně uchovává výsledky předchozích operací, zatímco druhý operand bývá explicitně specifikován jako univerzální registr nebo paměťová buňka. To vede k jednoduchým a krátkým instrukcím, které šetří paměť a zjednodušují jejich kódování.

!!! important "Vlastnosti střadačově orientovaná ISA"
    - __Snadno kódovatelné a krátké instrukce__: Díky implicitnímu použití střadače mají instrukce jednodušší formát a menší délku, což zjednodušuje jejich kódování a snižuje nároky na paměť.
    - __Rychlé přepínání kontextu__: Omezený vnitřní stav CPU, daný menším počtem registrů, umožňuje rychlejší změnu kontextu mezi procesy, což je výhodné v multitaskingových systémech.
    - __Častý přístup do paměti__: Kvůli omezenému počtu registrů a závislosti na střadači musí procesor často přistupovat k paměti pro načítání operandů a ukládání výsledků, což může zpomalovat výkon, zejména pokud je paměť pomalá.
    - __Problematická realizace paralelismu mezi instrukcemi__: Závislost na jediném střadači komplikuje paralelní zpracování instrukcí, protože mnoho operací musí být prováděno sekvenčně, což omezuje možnosti optimalizace výkonu prostřednictvím paralelismu.

## Zásobníkově orientovaná ISA
Bezadresní ISA je architektura, která se vyznačuje jednoduchými základními instrukcemi, jako jsou PUSH (načtení dat z paměti do zásobníku), POP (přesun dat ze zásobníku do paměti) a operace ALU.

Tento typ architektury se často označuje jako MISC (Minimal Instruction Set Computer) a je používán v SW implementacích, jako je Java Virtual Machine. V této architektuře jsou zdrojem a cílem všech operací sekvenční HW zásobník, což je registrové pole s ukazovátkem na vrchol zásobníku (top).

## Univerzální registrová ISA
Architektura s univerzálními registry (GPR - General Purpose Registers) je nejpoužívanější procesorovou architekturou od 80. let 20. století. Základem jsou velmi rychlé univerzální registry, které mohou sloužit jako zdroj i cíl operací. Tyto registry ukládají mezivýsledky a proměnné, přičemž jejich počet se obvykle pohybuje od 8 do 128. Instrukce v této architektuře mohou mít 2 až 3 operandy, což ji řadí mezi 2 až 3 adresní architektury.

!!! success "Výhody"
    - Registry jsou mnohem rychlejší než paměť, a to včetně cache, což zrychluje operace.
    - Přístup k registrům je náhodný, což umožňuje větší flexibilitu při zpracování dat.
    - Méně časté přístupy do paměti zvyšují celkový výkon.
    - Snadná implementace paralelismu

!!! failure "Nevýhody"
    - Počet registrů je omezený.
    - Překladače musí efektivně optimalizovat využití registrů.
    - Registry nemohou přímo uchovávat složené datové struktury.
    - Přepínání kontextu mezi procesy je pomalejší, protože je nutné ukládat více registrů.

!!! question "Jaké jsou varianty GPR?"
    - __Register-Register__
    - __Register-Memory__
    - __Memory-Memory__

## CISC
__Complex Instruction Set Computer__ (zkráceně CISC) procesory se vyznačují komplexní instrukční sadou, která obsahuje velké množství instrukcí. Tyto instrukce umožňují provádět složité operace přímo na hardwarové úrovni.

!!! question "Vlastnosti"
    - __Komplexní instrukční sada__: Obsahují velké množství instrukcí, které mohou provádět složité operace.
    - __Proměnlivá délka instrukcí__: Instrukce mohou mít různou délku, což umožňuje efektivnější využití paměti, ale komplikuje dekódování.
    - __Více cyklů na instrukci__: Složitější instrukce často vyžadují více hodinových cyklů k provedení.
    - __Přímý přístup k paměti__: Mnoho instrukcí může přímo pracovat s pamětí, což snižuje potřebu načítání dat do registrů.

## RISC
Reduced Instruction Set Computer (RISC), poprvé zmíněný v roce 1974 a rozvíjený od počátku 80. let, představuje procesorovou architekturu zaměřenou na jednoduchost instrukcí a efektivitu. Hlavní myšlenkou RISC bylo přesunout složité a zřídka používané CISC instrukce z mikroprogramů do softwaru, čímž se snížila složitost hardwaru a zlepšil výkon.

!!! question "Vlastnosti"
    - Malý počet jednoduchých instrukcí (40–150).
    - Instrukce mají pevnou délku a malý počet formátů.
    - Nízké CPI (průměrně pod 1,5).
    - Vysoká frekvence hodinového signálu (Tclk).
    - Podpora pipeline zpracování instrukcí.
    - Řadič s pevnou logikou (bez mikroprogramování).
    - Velký počet programově dostupných registrů (32–192).
    - Operace s daty probíhají pouze mezi registry (Load/Store architektura).
    - Malý počet adresových módů (3–5).
    - Ortogonální instrukční soubor  (ve všech instrukcích, které používají registr procesoru jako zdrojový nebo cílový operand, lze použít libovolný registr).
    - Často založeny na harvardské architektuře.

## VLIW

## EPIC