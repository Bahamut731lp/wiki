# Sběrnice a komunikační protokoly

Sběrnice je komunikační systém, který přenáší data mezi komponentami počítače nebo mezi zařízeními v průmyslovém systému. Definuje **fyzické propojení** (vodiče, konektory, napěťové úrovně), **logický protokol** (formát dat, adresování, časování) a **arbitraci** (kdo a kdy smí vysílat).

## Základní pojmy a charakteristiky

### Topologie sběrnic

Topologie určuje, jak jsou zařízení fyzicky propojena. Volba topologie ovlivňuje odolnost proti výpadkům, latenci, škálovatelnost a složitost kabeláže.

| Topologie | Popis | Výhody | Nevýhody | Příklad |
|:--|:--|:--|:--|:--|
| **Sběrnicová** (*Bus*) | Všechna zařízení sdílejí jednu společnou linku. | Jednoduchá, levná kabeláž, snadné přidání uzlu. | Výpadek kabelu = konec komunikace, kolize při souběhu, omezená délka. | CAN, RS-485, I²C |
| **Hvězdicová** (*Star*) | Všechna zařízení připojena k centrálnímu prvku (switch, hub). | Výpadek jednoho uzlu neovlivní ostatní, snadná diagnostika. | Centrální prvek = single point of failure, více kabeláže. | Ethernet, USB, SPI (master v centru) |
| **Kruhová** (*Ring*) | Zařízení propojena v kruhu – každé přijímá od předchozího a vysílá dalšímu. | Deterministická délka trasy, žádné kolize (token passing). | Výpadek jednoho uzlu rozbije celý kruh (bez redundance). | Token Ring, PROFIBUS (volitelně) |
| **Stromová** (*Tree*) | Hierarchická – kombinace sběrnicové a hvězdicové. | Škálovatelná, mapuje se na fyzickou strukturu. | Složitější správa, vyšší latence u hlubokých větví. | USB (huby), PCIe (switch fabric) |
| **Mesh** (mřížka) | Každý uzel propojen s více sousedy – více cest pro data. | Vysoká odolnost, samoopravná, škálovatelná. | Drahá kabeláž, složitý směrovací protokol. | ZigBee mesh, IoT sítě |

### Charakteristické vlastnosti sběrnic

| Vlastnost | Význam |
|:--|:--|
| **Propustnost** (*Bandwidth*) | Maximální množství dat přenesené za sekundu (Mbps, Gbps). |
| **Latence** | Doba od požadavku po odpověď – důležitá pro real-time systémy. |
| **Duplex** | **Half-duplex**: data tečou střídavě oběma směry (CAN, I²C). **Full-duplex**: data tečou současně oběma směry (SPI, Ethernet). |
| **Master/Slave vs. Multi-master** | **Master/Slave**: jeden uzel řídí, ostatní odpovídají (I²C, SPI). **Multi-master**: kterýkoliv uzel může iniciovat komunikaci (CAN). |
| **Arbitrace** | Mechanismus řešící, kdo smí vysílat při kolizi – CSMA/CD (Ethernet), prioritní arbitrace (CAN), time slot (FlexRay), token passing. |
| **Galvanické oddělení** | Elektrické oddělení obvodů – ochrana proti přepětí, zemním smyčkám. Používá se v průmyslu (optické oddělení, izolační zesilovače). |
| **Diferenciální signalizace** | Data přenášena jako rozdíl napětí na dvou vodičích – odolnější proti rušení, delší dosah. RS-485, CAN, USB, Ethernet. |
| **Single-ended signalizace** | Jeden vodič vůči společné zemi – jednodušší, náchylnější k rušení, krátký dosah. I²C, SPI, UART na desce. |

## Sběrnice v počítačových systémech

Interní sběrnice propojují komponenty uvnitř počítače – CPU s pamětí, GPU, úložištěm a periferiemi. Liší se propustností, latencí a účelem.

### PCI Express (PCIe)

Sériová, full-duplex, point-to-point sběrnice – páteř moderních počítačů pro připojení GPU, SSD, síťových karet a dalších výkonných periferií.

!!! abstract "Charakteristika PCIe"

    - **Lane**: Základní jednotka – pár diferenciálních vodičů pro každý směr (TX a RX).
    - **Šířka linky**: ×1, ×4, ×8, ×16 – násobek počtu paralelních lanes.
    - **Generace a propustnost** (na lane v jednom směru):
        - PCIe 3.0: ~1 GB/s
        - PCIe 4.0: ~2 GB/s
        - PCIe 5.0: ~4 GB/s
        - PCIe 6.0: ~8 GB/s
    - **Topologie**: Stromová – Root Complex → Switch → Endpoint.
    - **Použití**: GPU (×16), NVMe SSD (×4), síťové karty, Thunderbolt.

### USB (Universal Serial Bus)

Sériová, host-centric sběrnice pro připojení periferií – klávesnice, myši, úložiště, audio, video. USB-C sjednotilo konektor a přidalo Power Delivery (až 240 W) a alternativní režimy (DisplayPort, Thunderbolt).

!!! abstract "Generace USB"
    | Verze | Max. propustnost | Konektor | Duplex |
    |:--|:--:|:--|:--:|
    | USB 2.0 | 480 Mbps | Type-A/B/Mini/Micro | Half-duplex |
    | USB 3.2 Gen 1 | 5 Gbps | Type-A/C | Full-duplex |
    | USB 3.2 Gen 2 | 10 Gbps | Type-C | Full-duplex |
    | USB4 | 40 Gbps | Type-C | Full-duplex (tunelování PCIe) |

### SATA a NVMe

| Vlastnost | SATA | NVMe (přes PCIe) |
|:--|:--|:--|
| Typ sběrnice | Sériová ATA, half-duplex | PCIe ×4, full-duplex |
| Max. propustnost | ~600 MB/s (SATA III) | ~7 500 MB/s (PCIe 4.0 ×4) |
| Fronta příkazů | 1 fronta, 32 příkazů (AHCI) | 64 000 front, 64 000 příkazů na frontu |
| Latence | Vysoká (AHCI režie) | Nízká (přímá cesta do PCIe) |
| Použití | Starší pevné disky a SSD | Moderní SSD |

### Interní sběrnice na desce

| Sběrnice | Typ | Rychlost | Použití |
|:--|:--|:--|:--|
| **SMI / DMI** | Point-to-point, full-duplex | DMI 4.0: ~16 GB/s | Propojení CPU ↔ chipset (PCH) |
| **LPC / eSPI** | Sériová, low-pin-count | Až ~100 Mbps | Legacy periferie, TPM, Super I/O |
| **SMBus / I²C** | 2-vodičová, master/slave | 100 kHz – 1 MHz | Teplotní čidla, SPD na RAM, správce baterie |

## Průmyslové komunikační sběrnice a protokoly

Průmyslové sběrnice kladou důraz na **odolnost proti rušení**, **determinismus**, **dlouhé vzdálenosti** a **nízkou latenci**. Na rozdíl od interních PC sběrnic musí fungovat v elektromagneticky zarušeném prostředí továren, často přes stovky metrů kabelů.

### Sběrnice na úrovni desky (Board-level)

Tyto sběrnice propojují integrované obvody na jedné desce plošných spojů (PCB) – senzory, paměti, ADC, displeje.

#### I²C (Inter-Integrated Circuit)

Dvouvodičová, multi-master, multi-slave sběrnice s adresací. Vodiče: **SDA** (data) a **SCL** (hodiny). Každé zařízení má 7-bitovou (nebo 10-bitovou) adresu.

- **Rychlost**: Standard (100 kHz), Fast (400 kHz), Fast+ (1 MHz), High-Speed (3,4 MHz).
- **Topologie**: Sběrnicová – všechna zařízení sdílejí SDA a SCL, pull-up rezistory na $V_{DD}$.
- **Arbitrace**: Kdo první vyšle log 1, zatímco ostatní 0, prohrává a uvolňuje sběrnici.
- **Výhody**: Jen 2 vodiče, jednoduchá, levná, multi-master.
- **Nevýhody**: Pomalá, limitovaná kapacitou sběrnice (max. ~400 pF), krátký dosah (deska PCB).
- **Použití**: Teplotní čidla, EEPROM, RTC, GPIO expandéry, konfigurace kodeků.

#### SPI (Serial Peripheral Interface)

Čtyřvodičová, full-duplex, master/slave sběrnice. Vodiče: **SCLK** (hodiny), **MOSI** (Master Out Slave In), **MISO** (Master In Slave Out), **SS** (Slave Select – jeden na každé slave zařízení).

- **Rychlost**: Desítky MHz (typicky 10–50 MHz, teoreticky až ~100 MHz).
- **Topologie**: Hvězdicová/hybridní – shared SCLK, MOSI, MISO; samostatný SS pro každý slave.
- **Výhody**: Full-duplex, vysoká rychlost, jednoduchý protokol, libovolná délka slov.
- **Nevýhody**: Více vodičů (3 + N pro N zařízení), jen jeden master, bez specifikace – každé zařízení jinak.
- **Použití**: Displeje, SD karty, ADC/DAC, flash paměti, RF moduly.

#### UART / USART

Asynchronní sériová komunikace – žádné hodinové vodiče, obě strany musí znát **baud rate** předem. Vodiče: **TX** (vysílání), **RX** (příjem), GND.

- **Rychlost**: 9600 bps – několik Mbps (typicky 115200, 921600).
- **Formát rámce**: Start bit → 5–9 datových bitů → volitelný paritní bit → 1–2 stop bity.
- **Výhody**: Jednoduchá, široce podporovaná, jen 2 vodiče (+ GND), obousměrná.
- **Nevýhody**: Vyžaduje shodu baud rate (drift hodin = chyby), jen point-to-point, bez arbitrace.
- **Použití**: Debug konzole, GPS moduly, Bluetooth moduly, komunikace s PC přes USB-UART převodník.

#### Srovnání board-level sběrnic

| Vlastnost | I²C | SPI | UART |
|:--|:--|:--|:--|
| Počet vodičů | 2 (+ GND) | 4 + N×SS (+ GND) | 2 (+ GND) |
| Duplex | Half-duplex | Full-duplex | Full-duplex |
| Max. rychlost | 3,4 MHz | ~50 MHz | ~5 Mbps |
| Multi-slave | Ano (adresace) | Ano (SS piny) | Ne (point-to-point) |
| Multi-master | Ano (arbitrace) | Ne | Ne |
| Synchronizace | Synchronní (SCL) | Synchronní (SCLK) | Asynchronní (baud rate) |
| Délka slov | 8 bitů | Libovolná | 5–9 bitů |
| Dosah | < 1 m (PCB) | < 1 m (PCB) | Až desítky metrů (RS-232) |

### Průmyslové fieldbus sběrnice

Fieldbus sběrnice propojují řídicí systémy (PLC) se senzory a akčními členy v průmyslovém prostředí. Klíčové požadavky: **odolnost**, **determinismus**, **dlouhý dosah**, **napájení po sběrnici**.

#### RS-232 a RS-485

Základní fyzické vrstvy, nad kterými běží vyšší protokoly (Modbus, Profibus):

| Vlastnost | RS-232 | RS-485 |
|:--|:--|:--|
| Signalizace | Single-ended | Diferenciální |
| Max. rychlost | 115,2 kbps (standard), až 1 Mbps | 10 Mbps (krátká vzdálenost), 100 kbps (1200 m) |
| Max. vzdálenost | ~15 m | ~1200 m |
| Topologie | Point-to-point | Multi-drop (až 32 zařízení na lince) |
| Duplex | Full-duplex (oddělené TX/RX) | Half-duplex (sdílená linka) nebo full-duplex (4 vodiče) |

#### CAN (Controller Area Network)

Multi-master, message-oriented sběrnice navržená pro automobilový průmysl, dnes používaná i v průmyslové automatizaci, robotice a zdravotnictví. Používá diferenciální signalizaci (CAN_H, CAN_L) pro odolnost proti rušení.

!!! abstract "Vlastnosti CAN"

    - **Rychlost**: CAN 2.0 do 1 Mbps, CAN FD do 8 Mbps.
    - **Zprávy**: Identifikátor (11 nebo 29 bitů) určuje prioritu – nižší ID = vyšší priorita.
    - **Arbitrace**: Nedestruktivní, bitová – kdo první vyšle recesivní (log 1) na dominantní (log 0), prohrává a přestává vysílat.
    - **Determinismus**: Garantovaná maximální latence pro zprávu s nejvyšší prioritou.
    - **Detekce chyb**: CRC, ACK, monitoring bitu, stuff error, form error – extrémně robustní.
    - **Výhody**: Multi-master, prioritní arbitrace, robustní detekce chyb, levné transceivery, široká podpora.
    - **Použití**: Automobily (OBD-II, řízení motoru, ABS), průmyslová automatizace, výtahy, zdravotnické přístroje.

#### Modbus

Jeden z nejstarších a nejrozšířenějších průmyslových protokolů – jednoduchý, otevřený, master/slave (nebo nově client/server). Definuje protokol na úrovni aplikace, fyzická vrstva může být RS-232, RS-485 (Modbus RTU/ASCII) nebo Ethernet (Modbus TCP).

- **Datový model**: 4 tabulky – Coils (binární výstupy), Discrete Inputs (binární vstupy), Holding Registers (16-bit registry pro čtení/zápis), Input Registers (16-bit registry jen pro čtení).
- **Adresace**: 1–247 adres zařízení na lince.
- **Výhody**: Extrémně jednoduchý, otevřený, široce podporovaný.
- **Nevýhody**: Pomalý, žádné zabezpečení (Modbus TCP může přidat TLS), omezený datový model.
- **Použití**: PLC komunikace, SCADA, měření spotřeby, řízení pohonů.

#### PROFIBUS a PROFINET

| Vlastnost | PROFIBUS DP | PROFINET |
|:--|:--|:--|
| Fyzická vrstva | RS-485 | Industrial Ethernet (100 Mbps) |
| Topologie | Sběrnicová (lineární) | Hvězdicová (switch) |
| Max. zařízení | 126 na segment | Prakticky neomezeno |
| Cyklická data | Ano (DPV0) | Ano (RT – Real-Time) |
| Izochronní režim | Omezeně (DPV2) | Ano (IRT – Isochronous Real-Time) |
| Integrace IT | Obtížná (gateway) | Nativní (Ethernet/IP, web server) |
| Použití | Starší výrobní linky, pohony, senzory | Moderní průmyslová automatizace, motion control |

#### EtherCAT

Ethernetová sběrnice optimalizovaná pro extrémně nízkou latenci a determinismus. Funguje na principu **„data on the fly"** – rámec prochází všemi zařízeními v řetězci, každé si z něj za běhu čte a zapisuje data, bez zastavení a přeposlání.

- **Topologie**: Kruhová, řetězcová (*daisy chain*), hvězdicová – flexibilní.
- **Rychlost**: 100 Mbps (standardní Ethernet PHY), cykly < 100 μs.
- **Výhody**: Extrémně nízká latence, přesná synchronizace (distribuované hodiny, jitter < 1 μs), flexibilní topologie.
- **Nevýhody**: Vyžaduje specializovaný hardware (EtherCAT slave controller), náročnější implementace.
- **Použití**: Robotika, CNC stroje, motion control, vysokorychlostní měření.

### Srovnání průmyslových sběrnic

| Sběrnice | Rychlost | Dosah (max) | Topologie | Multi-master | Determinis- mus | Složitost | Typická oblast |
|:--|:--:|:--:|:--|:--:|:--:|:--:|:--|
| **I²C** | 3,4 MHz | < 1 m | Bus | ✅ | ❌ | Nízká | Board-level |
| **SPI** | 50 MHz | < 1 m | Star | ❌ | ❌ | Nízká | Board-level |
| **UART** | 5 Mbps | ~15 m | P2P | ❌ | ❌ | Nízká | Konzole, moduly |
| **CAN** | 1–8 Mbps | 40 m–1 km | Bus | ✅ | ✅ | Střední | Auto, průmysl |
| **RS-485** | 10 Mbps | 1200 m | Multi-drop | ❌ | ❌ | Nízká | Modbus, Profibus DP |
| **Modbus RTU** | 115 kbps | 1200 m | Bus | ❌ | ❌ | Nízká | PLC, SCADA |
| **PROFIBUS DP** | 12 Mbps | 1200 m | Bus | ❌ (token) | ✅ | Střední | Výrobní linky |
| **EtherCAT** | 100 Mbps | 100 m/segment | Ring/Daisy | ❌ (master) | ✅ | Vysoká | Robotika, CNC |
| **PROFINET** | 100 Mbps–1 Gbps | 100 m/segment | Star | ❌ | ✅ (IRT) | Vysoká | Moderní automatizace |
