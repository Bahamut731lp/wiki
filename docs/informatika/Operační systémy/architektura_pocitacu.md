# Architektura počítačů

Architektura počítače definuje logickou strukturu a chování počítačového systému – jaké funkční bloky obsahuje, jak jsou propojeny, jak zpracovávají instrukce a jak komunikují s pamětí. Jde o konceptuální model, nikoliv o fyzickou implementaci – dvě různé realizace stejné architektury mohou používat odlišné technologie, ale programátorovi se jeví stejně.

## Základní architektury počítačů

### Von Neumannova architektura

Von Neumannova architektura (1945) je dnes nejrozšířenější model – počítač je řízen **programem uloženým v paměti**. Program i data sídlí ve **stejné paměti** a jsou přenášeny po **společné sběrnici**. To umožňuje flexibilitu – změnou programu v paměti změníme chování stroje bez fyzického zásahu do hardware.

!!! abstract "Funkční bloky Von Neumannovy architektury"

    - **Paměť** – uchovává program, zpracovávaná data a mezivýsledky. Společná pro instrukce i data.
    - **Řadič** (*Control Unit*) – řídí činnost počítače, načítá instrukce z paměti, dekóduje je a vydává řídicí signály ostatním blokům.
    - **ALU** (Aritmeticko-logická jednotka) – provádí aritmetické a logické operace nad daty.
    - **Vstupní jednotka** – zprostředkovává vstup programu a dat z vnějšího světa.
    - **Výstupní jednotka** – předává výsledky zpracování vnějšímu světu.

!!! bug "Von Neumannovo úzké hrdlo"
    Protože instrukce i data sdílejí stejnou sběrnici a paměť, **nemohou být přenášeny současně**. Procesor musí při načítání instrukce čekat, i když by zároveň mohl číst data. Toto omezení se nazývá *Von Neumann bottleneck* a je hlavním důvodem, proč výkon procesorů roste pomaleji, než by umožňovala samotná rychlost výpočetních jednotek.

### Harvardská architektura

Harvardská architektura odděluje **paměť programu** od **paměti dat** – každá má vlastní sběrnici. Instrukce a data lze přenášet **současně**, což zvyšuje propustnost. Oddělení také chrání program před nechtěným přepsáním chybou programátora.

!!! abstract "Porovnání s Von Neumannem"
    | Vlastnost | Von Neumann | Harvard |
    |:--|:--|:--|
    | Paměť programu a dat | Společná | Oddělená |
    | Sběrnice | Jedna společná | Dvě nezávislé |
    | Rychlost | Pomalejší (úzké hrdlo) | Rychlejší (paralelní přenos) |
    | Flexibilita | Vysoká – program lze měnit za běhu | Nižší – oddělené paměti komplikují self-modifying code |
    | Typické použití | Univerzální počítače, PC, servery | Mikrořadiče, DSP, vestavěné systémy |

!!! info "Modifikovaná Harvardská architektura"
    Moderní procesory používají hybridní přístup – **Modifikovanou Harvardskou architekturu**: navenek se tváří jako Von Neumann (společný adresní prostor), ale uvnitř mají oddělené cache pro instrukce (L1-I) a data (L1-D). Tím získávají výhody obou přístupů – rychlost Harvardu s flexibilitou Von Neumanna.

## Mikroprocesory

Mikroprocesor je integrovaný obvod obsahující centrální procesorovou jednotku (CPU) na jednom čipu. Je to „mozek" univerzálního počítače – vykonává instrukce programů uložených v paměti.

### Vykonávání instrukcí

Každá instrukce prochází sekvencí kroků nazývanou **instrukční cyklus**:

1. **Instruction Fetch** – načtení instrukce z paměti na adrese dané programovým čítačem (PC).
2. **Decode** – dekódování instrukce – co se má provést a s jakými operandy.
3. **Read operands** – načtení operandů z registrů nebo paměti.
4. **Execute** – provedení operace v ALU.
5. **Writeback** – uložení výsledku zpět do registru nebo paměti.

Moderní procesory tyto kroky **zřetězují** (*pipelining*) – zatímco jedna instrukce se vykonává, další se dekóduje a ještě další načítá. Tím se zvyšuje propustnost, i když jedna instrukce stále trvá několik cyklů.

### Funkční bloky mikroprocesoru

| Blok | Funkce |
|:--|:--|
| **ALU** | Provádí aritmetické (sčítání, násobení) a logické (AND, OR, XOR) operace. |
| **Řadič** | Řídí tok instrukcí – načítá, dekóduje a generuje řídicí signály. |
| **Registry** | Rychlá paměť uvnitř procesoru – pracovní registry, akumulátor, programový čítač (PC), instrukční registr (IR). |
| **Dekodér instrukcí** | Převádí binární kód instrukce na signály pro ostatní bloky. |
| **Sběrnice** | Adresní, datová a řídicí sběrnice pro komunikaci s pamětí a periferiemi. |
| **Cache** | Rychlá vyrovnávací paměť mezi procesorem a hlavní pamětí – L1, L2, L3. |

### Režimy procesoru

Procesor rozlišuje minimálně dva režimy, které chrání kritické části systému:

- **Kernel mode** (*privilegovaný/nechráněný*): Plný přístup k celé paměti, všem instrukcím a hardwarovým prostředkům. Běží v něm jádro OS a obsluha přerušení.
- **User mode** (*chráněný*): Omezená instrukční sada, omezený přístup k paměti (jen vlastní adresní prostor), chráněné důležité registry. Běží v něm běžné aplikace.

Přechod z user do kernel mode nastává výhradně přes **systémová volání**, **výjimky** (dělení nulou, neplatná adresa) nebo **přerušení** od hardwaru.

## Architektury signálových procesorů (DSP)

DSP (Digital Signal Processor) je specializovaný mikroprocesor optimalizovaný pro **zpracování signálů v reálném čase** – audio, video, radar, telekomunikace, analýza vibrací. Na rozdíl od univerzálního CPU je navržen pro opakované výpočty typu **násobení a akumulace** (MAC – Multiply-Accumulate) nad proudem dat.

!!! abstract "Klíčové rysy DSP architektury"

    - **Harvardská architektura** – oddělená paměť programu a dat umožňuje současné načítání instrukce a dvou operandů.
    - **Single-cycle MAC** – jednotka, která za jeden hodinový cyklus provede $a = b \cdot c + d$ – základní operace digitálních filtrů, FFT, korelací.
    - **Hardwarové smyčky** – speciální instrukce pro opakování bloku kódu bez režie větvení (tzv. *zero-overhead loops*).
    - **Adresovací jednotky** – podpora kruhových bufferů (*circular addressing*) a bitově reverzního adresování pro FFT.
    - **Pevná desetinná čárka** (*fixed-point*) – mnoho DSP čipů používá fixní aritmetiku místo plovoucí – je energeticky úspornější a levnější na výrobu.

!!! example "Příklady DSP čipů"

    - **Texas Instruments TMS320** – rodina DSP pro audio, průmysl a automotiv.
    - **Analog Devices SHARC / Blackfin** – pro audio a video zpracování.
    - **Qualcomm Hexagon** – DSP v Snapdragon SoC pro mobilní zpracování audia a obrazu.

## Architektury grafických procesorů (GPU)

GPU (Graphics Processing Unit) je masivně paralelní procesor navržený pro **simultánní zpracování tisíců vláken**. Od CPU se zásadně liší poměrem mezi výpočetními jednotkami a řídicí logikou.

!!! abstract "CPU vs. GPU – architektonické rozdíly"
    | Vlastnost | CPU | GPU |
    |:--|:--|:--|
    | Počet jader | Jednotky až desítky (typicky 4–64) | Tisíce (např. RTX 4090 = 16 384) |
    | Charakter jader | Pár výkonných, komplexních jader (out-of-order, spekulativní) | Mnoho jednoduchých, energeticky efektivních (in-order) |
    | Řídicí logika | Velká – branch prediction, spekulativní vykonávání | Minimální – mnoho jader sdílí jeden řadič |
    | Cache | Velká (MB L3 cache) | Malá – cache chování je jen doplněk |
    | Paměť | DDR (nízká latence) | GDDR/HBM (vysoká propustnost, vyšší latence) |
    | Paradigma | MIMD – každé jádro běží nezávisle | SIMT – skupina 32 vláken (warp) vykonává stejnou instrukci |

### Architektura SIMT

GPU používá model **SIMT** (Single Instruction, Multiple Threads) – warp 32 vláken vykonává stejnou instrukci, každé vlákno nad jinými daty. To je hardwarová realizace modelu SIMD, ale s flexibilitou – pokud se vlákna ve warpu rozvětví (např. `if`/`else`), obě větve se provedou sekvenčně a neaktivní vlákna čekají (*warp divergence*).

!!! info "Klíčové funkční bloky GPU"

    - **Streaming Multiprocessor (SM)** – základní výpočetní jednotka obsahující desítky CUDA jader, warp scheduler, registry a sdílenou paměť.
    - **CUDA Core / Shader Core** – jednoduché jádro provádějící operace FP32/INT32.
    - **Tensor Core** – specializovaná jednotka pro maticové násobení (AI, DLSS, ray tracing denoising).
    - **RT Core** – hardwarová akcelerace průsečíků paprsku s geometrií (ray tracing).
    - **Texture Unit** – hardwarová jednotka pro vzorkování a filtrování textur.
    - **VRAM (GDDR6X/HBM)** – dedikovaná grafická paměť s extrémní propustností (až ~1 TB/s).

## Architektury mikrořadičů

Mikrořadič (MCU – Microcontroller Unit) je jednočipový počítač integrující procesor, paměť i periferie na jednom čipu. Na rozdíl od mikroprocesoru, který potřebuje externí paměť a periferie, je mikrořadič **soběstačný** – stačí mu napájení a pár pasivních součástek.

!!! abstract "Klíčové rysy mikrořadičů"

    - **Harvardská (nebo modifikovaná Harvardská) architektura** – oddělená paměť programu (Flash) a dat (SRAM).
    - **Integrované periferie** – GPIO, ADC, UART, SPI, I²C, PWM, časovače, watchdog, vše na čipu.
    - **Nízká spotřeba** – spánkové režimy (sleep, deep sleep), řádově μA až nA.
    - **Deterministické chování** – žádný operační systém; kód běží přímo na hardware (*bare metal*), ideální pro řízení v reálném čase.
    - **Nízká cena** – jednotky dolarů, často i méně.

!!! example "Příklady mikrořadičových architektur"
    | Architektura | Příklad | Použití |
    |:--|:--|:--|
    | **ARM Cortex-M** (M0–M7) | STM32, NXP Kinetis, nRF52 | Průmysl, IoT, zdravotnictví, drony, spotřební elektronika |
    | **AVR** | ATmega328 (Arduino Uno), ATtiny | Hobby, prototypování, jednoduché automatizace |
    | **PIC** | Microchip PIC16, PIC32 | Automotiv, levná průmyslová řízení |
    | **RISC-V** (MCU implementace) | ESP32-C3, GD32V | Nová otevřená alternativa k ARM – nízkonákladové IoT |
    | **ESP32** (Xtensa LX6 / RISC-V) | ESP32, ESP32-S3 | IoT s WiFi a Bluetooth na čipu |

### Porovnání mikrořadič vs. mikroprocesor vs. DSP

| Vlastnost | Mikrořadič (MCU) | Mikroprocesor (CPU) | DSP |
|:--|:--|:--|:--|
| Integrace | Vše na čipu (CPU + RAM + Flash + periferie) | Jen CPU jádro – externí RAM, chipset | CPU jádro + specializované jednotky |
| Operační systém | Bare metal / RTOS | Plnohodnotný OS (Linux, Windows) | Bare metal / RTOS / DSP/BIOS |
| Výkon | Desítky až stovky DMIPS | Desetitisíce DMIPS | Optimalizováno pro MAC/s |
| Spotřeba | mW až μW | Desítky wattů | Stovky mW až jednotky wattů |
| Cena | $0.50–$10 | $50–$5000 | $5–$100 |
| Typická úloha | Řízení motoru, senzor, IoT uzel | Desktop, server, notebook | Zpracování audia, filtrace, FFT |

## Hodnocení výkonnosti počítačů

Výkon počítače nelze redukovat na jediné číslo – závisí na kombinaci mnoha faktorů. Používají se různé metriky pro různé účely:

| Metrika | Co měří | Použití |
|:--|:--|:--|
| **MIPS** (Million Instructions Per Second) | Počet vykonaných instrukcí za sekundu. | Zavádějící – instrukce různých architektur nejsou srovnatelné (CISC vs. RISC). |
| **FLOPS** (Floating-point Operations Per Second) | Počet operací v plovoucí řádové čárce za sekundu. | Vědecké výpočty, simulace, AI. |
| **Clock rate** (frekvence) | Rychlost hodinového signálu v GHz. | Omezená vypovídací hodnota – IPC (Instructions Per Cycle) se liší. |
| **Benchmarky** (SPEC, Geekbench) | Standardizované testovací sady simulující reálné zátěže. | Objektivnější – měří celkovou propustnost na konkrétních úlohách. |
| **Latence** | Doba od zadání požadavku do jeho dokončení. | Realtime systémy, interaktivní aplikace. |
| **Propustnost** (*Throughput*) | Množství práce dokončené za jednotku času. | Servery, dávkové zpracování. |
| **Efektivita** (Performance/Watt) | Výkon na watt spotřeby. | Mobilní zařízení, datová centra, superpočítače. |

### Amdahlův zákon

Amdahlův zákon (Gene Amdahl, 1967) určuje **teoretické maximum zrychlení**, kterého lze dosáhnout paralelizací části výpočtu. Jeho klíčovým sdělením je, že zrychlení je **omezeno sériovou částí**, kterou nelze paralelizovat.

$$S = \frac{1}{(1 - P) + \frac{P}{N}}$$

kde:

- $S$ = zrychlení (*speedup*) oproti sekvenčnímu provedení
- $P$ = podíl programu, který lze paralelizovat ($0 \le P \le 1$)
- $N$ = počet procesorů (vláken)
- $(1 - P)$ = sériová část, kterou nelze paralelizovat

!!! example "Příklad – Amdahlův zákon v praxi"
    Program běží 100 sekund, z toho 80 sekund lze paralelizovat ($P = 0{,}8$). Spustíme ho na 4 jádrech ($N = 4$):

    $$S = \frac{1}{(1 - 0{,}8) + \frac{0{,}8}{4}} = \frac{1}{0{,}2 + 0{,}2} = \frac{1}{0{,}4} = 2{,}5\times$$

    Se 4 jádry získáme jen 2,5× zrychlení – nikoliv 4×! Sériových 20 % dominuje.

    **S nekonečným počtem jader** ($N \to \infty$):
    $$S_{\max} = \frac{1}{1 - P} = \frac{1}{0{,}2} = 5\times$$
    I s nekonečnem jader program nikdy nepoběží rychleji než 5× – to je **Amdahlův strop**.

!!! warning "Důsledky Amdahlova zákona"

    - Malá sériová část drasticky omezuje škálovatelnost. Pokud $P = 0{,}99$ (99 % lze paralelizovat), $S_{\max} = 100\times$ – stále omezeno.
    - V distribuovaných systémech se přidává režie komunikace, která dále snižuje reálné zrychlení.
    - Amdahlův zákon **předpokládá pevnou velikost problému** – při větším problému se může sériová část zmenšit (Gustafsonův zákon).

### Výkonnostní rovnice procesoru

Výkon procesoru lze vyjádřit jako součin tří faktorů – to je základní rámec pro analýzu, kde hledat úzká hrdla:

$$\text{CPU Time} = \text{IC} \times \text{CPI} \times \text{Clock Cycle Time}$$

| Symbol | Význam | Jednotka | Jak ji ovlivnit |
|:--|:--|:--|:--|
| **IC** (*Instruction Count*) | Počet instrukcí vykonaných programem. | Počet instrukcí | Lepší kompilátor, efektivnější algoritmus, redukce redundantního kódu. |
| **CPI** (*Cycles Per Instruction*) | Průměrný počet hodinových cyklů na jednu instrukci. | Cykly / instrukce | Pipelining, superskalarita, lepší branch prediction, cache. |
| **Clock Cycle Time** | Délka jednoho hodinového cyklu ($1/f$). | Sekundy (typicky ns) | Vyšší frekvence, lepší výrobní proces (nm), nižší napětí. |

Alternativní vyjádření přes frekvenci: $\text{Execution Time} = \frac{\text{IC} \times \text{CPI}}{f}$

!!! example "Příklad výpočtu"
    Program obsahuje 1 000 000 instrukcí. Procesor má CPI = 1{,}5 a frekvenci 3 GHz.

    $$T = \frac{1\,000\,000 \times 1{,}5}{3 \times 10^9} = \frac{1{,}5 \times 10^6}{3 \times 10^9} = 0{,}5 \times 10^{-3} = 0{,}5\text{ ms}$$

## Srovnání RISC a CISC

Dvě základní filozofie návrhu instrukčních sad – RISC a CISC – představují odlišné přístupy k tomu, co má umět procesor přímo v hardwaru a co se má řešit softwarem.

!!! abstract "RISC – Reduced Instruction Set Computer"
    Filozofie: **jednoduchý hardware, složitější kompilátor**. Malá sada jednoduchých instrukcí, z nichž každá se vykoná za jeden cyklus. Složitější operace se skládají z těchto primitiv.

    **Klíčové vlastnosti RISC:**

    - **Fixní délka instrukce** (typicky 32 bitů) – jednoduché, rychlé dekódování.
    - **Load/Store architektura** – pouze instrukce `LOAD` a `STORE` přistupují do paměti; všechny ostatní pracují jen s registry.
    - **Velký počet univerzálních registrů** (typicky 32) – méně přístupů do paměti.
    - **Single-cycle execution** – většina instrukcí za 1 cyklus, ideální pro pipelining.
    - **Pevné formáty** – málo adresovacích režimů, ortogonální instrukční sada.

!!! abstract "CISC – Complex Instruction Set Computer"
    Filozofie: **jedna instrukce = mnoho práce**. Sada komplexních instrukcí, které přímo v hardwaru provádějí složité operace. Snižuje počet instrukcí programu (IC), ale za cenu vyššího CPI.

    **Klíčové vlastnosti CISC:**

    - **Proměnlivá délka instrukce** (1–15 bajtů) – hustší kód, složitější dekódování.
    - **Paměťové operandy** – instrukce mohou přímo pracovat s pamětí (např. `ADD [adresa], R1`).
    - **Málo registrů** (typicky 8) – více přístupů do paměti.
    - **Mikrokód** – komplexní instrukce jsou interně rozloženy na sekvenci jednodušších mikro-operací.
    - **Mnoho adresovacích režimů** a specializovaných instrukcí.

### Souhrnné porovnání

| Vlastnost | RISC | CISC |
|:--|:--|:--|
| Délka instrukce | Fixní (32 bit) | Proměnlivá (1–15 bajtů) |
| Počet instrukcí v programu (IC) | Vyšší | Nižší |
| CPI (cykly na instrukci) | Blízko 1 | Vyšší (mikrokód) |
| Počet registrů | 32+ | 8–16 |
| Přístup do paměti | Jen LOAD/STORE | Libovolná instrukce může |
| Dekódování | Jednoduché, rychlé | Složité, pomalé |
| Pipelining | Snadný | Obtížný (složité instrukce) |
| Hustota kódu | Nižší (fixní délka) | Vyšší (proměnlivá délka) |
| Spotřeba | Nižší (jednodušší HW) | Vyšší (složitější dekodér) |
| Příklady | ARM, RISC-V, MIPS, PowerPC | x86 (Intel, AMD) |

!!! info "Konvergence RISC a CISC"
    V praxi se rozdíly stírají:

    - Moderní x86 procesory (CISC) interně překládají CISC instrukce do RISC-like **mikro-operací** (μops) a vykonávají je na RISCovém jádře.
    - Moderní ARM procesory (RISC) přidávají komplexnější instrukce (NEON SIMD, kryptografické akcelerace).
    - Rozhodujícím faktorem dnes není samotná filozofie ISA, ale **mikroarchitektura** – pipelining, superskalarita, cache hierarchie, branch prediction.
