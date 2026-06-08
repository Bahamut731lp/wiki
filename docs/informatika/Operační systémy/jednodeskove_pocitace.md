# Jednodeskové počítače

Jednodeskový počítač (SBC – Single Board Computer) je kompletní počítač postavený na jediné desce plošných spojů. Integruje procesor, paměť, vstupně-výstupní rozhraní a často i úložiště – vše na jednom fyzickém celku. Na rozdíl od modulárního PC, kde se CPU, RAM a periferie zapojují do základní desky, je SBC pevně daný, kompaktní a energeticky úsporný.

!!! abstract "Co odlišuje SBC od běžného PC?"

    - **Integrace** – CPU, RAM, GPU, síť, USB, GPIO jsou všechny na jedné desce, často napájené.
    - **Velikost** – od kreditní karty (Raspberry Pi Zero) po formát Mini-ITX.
    - **Spotřeba** – jednotky wattů; lze napájet z baterie, USB, PoE.
    - **Cena** – od stovek korun po stovky dolarů.
    - **Rozšiřitelnost** – GPIO piny, I²C, SPI, UART přímo na desce; HAT/shield moduly.
    - **Chlazení** – často pasivní (bez ventilátoru) – tiché, odolné, vhodné do prašného prostředí.

## Součásti jednodeskového počítače

Každý SBC integruje sadu komponent, které by v klasickém PC byly samostatnými moduly:

| Komponenta | Popis | Příklad |
|:--|:--|:--|
| **SoC / procesor** | Hlavní výpočetní jednotka – integrovaný čip obsahující CPU, GPU, paměťový řadič a často i další řadiče. | BCM2712 (RPi 5), Rockchip RK3588, NXP i.MX8 |
| **RAM** | Operační paměť napájená přímo na desce – typicky LPDDR, nelze vyměnit. | 1–16 GB LPDDR4/LPDDR5 |
| **Úložiště** | MicroSD slot, eMMC modul, nebo NVMe (M.2) – někdy kombinace. | MicroSD + volitelný NVMe SSD |
| **Síť** | Ethernet (1 GbE, někdy 2,5 GbE), WiFi, Bluetooth – často integrováno v SoC. | Gigabit Ethernet, WiFi 6, BLE 5 |
| **USB** | Pro periferie – klávesnice, myš, kamera, externí disk. | USB 2.0/3.0, USB-C s PD |
| **Display** | HDMI, DisplayPort, DSI (pro vestavné displeje), MIPI-CSI (pro kamery). | 2× micro-HDMI, MIPI DSI |
| **GPIO** | Univerzální vstupně-výstupní piny – 3,3 V, I²C, SPI, UART, PWM. | 40-pin header (RPi standard) |
| **Napájení** | USB-C PD, DC jack, PoE (Power over Ethernet). | 5 V / 3 A přes USB-C |

## Třídy výkonnosti SBC

Ne všechny jednodeskové počítače jsou si rovny – rozsah výkonu sahá od mikrořadičové úrovně až po desktopovou:

| Třída | Výkon | RAM | Příklady | Typické použití |
|:--|:--|:--|:--|:--|
| **Nízko-výkonná** | ~ARM Cortex-A53, 0,5–1,5 GHz | 256 MB–1 GB | Raspberry Pi Zero 2W, Orange Pi Zero | IoT senzor, jednoduchý web server, domácí automatizace |
| **Střední** | ~ARM Cortex-A72/A76, 1,5–2,5 GHz | 2–8 GB | Raspberry Pi 4/5, Odroid N2+, Asus Tinker Board | Mediacentrum, NAS, lehký desktop, retro herní konzole |
| **Vysoce-výkonná** | ~ARM Cortex-A78/X1, 2+ GHz | 8–32 GB | Apple Silicon (Mac Mini dev), NVIDIA Jetson Orin, Rockchip RK3588 | AI inference, vývojové desktopové prostředí, soft router |
| **Průmyslová / embedded** | ARM Cortex-A / RISC-V / x86 embedded | 512 MB–8 GB | BeagleBone Black, Variscite SOM, Kontron | Průmyslová řízení, lékařské přístroje, automotive |

### Srovnávání procesorů – klíčové parametry

Procesory (a SoC) se mezi sebou porovnávají podle sady metrik, které odrážejí různé aspekty výkonu, spotřeby a schopností:

| Parametr | Co říká | Příklad |
|:--|:--|:--|
| **Frekvence** (GHz) | Rychlost hodinového signálu – kolik cyklů za sekundu. | Cortex-A76 @ 2,4 GHz vs. Cortex-A53 @ 1,0 GHz |
| **IPC** (Instructions Per Cycle) | Kolik instrukcí jádro průměrně vykoná za jeden cyklus. Architektonicky dané – A76 má ~2× vyšší IPC než A53 při stejné frekvenci. | A76: ~2,5 IPC, A53: ~1,2 IPC |
| **Počet jader** | Kolik nezávislých výpočetních jednotek. Více jader = lepší paralelní propustnost, ale ne lineární zrychlení (Amdahlův zákon). | 4× A76 + 4× A55 (big.LITTLE) |
| **big.LITTLE / DynamIQ** | Kombinace výkonných (big) a úsporných (LITTLE) jader – systém přepíná podle zátěže. | RK3588: 4× A76 (výkon) + 4× A55 (efektivita) |
| **DMIPS / CoreMark** | Standardizované benchmarky pro CPU výkon (nezávislé na frekvenci). | Cortex-A76: ~4,5 DMIPS/MHz |
| **FLOPS / TOPS** | Výkon v plovoucí řádové čárce (FLOPS) nebo operacích neuronové sítě (TOPS). | Jetson Orin NX: 100 TOPS (INT8) |
| **TDP** (W) | Tepelný výkon – kolik tepla musí chlazení odvést. Určuje použitelnost v pasivně chlazených zařízeních. | RPi 5: ~12 W, Jetson Orin: 10–25 W |
| **Výrobní proces** (nm) | Menší nanometry = menší tranzistory = nižší spotřeba a vyšší výkon na watt. | BCM2712: 16 nm, Apple M2: 5 nm |
| **Cache hierarchie** | Velikost L1/L2/L3 cache – zásadní pro výkon (cache miss = čekání na RAM). | Cortex-A76: 64 KB L1, 256–512 KB L2, sdílená L3 |

!!! example "Příklad srovnání dvou SoC"
    | Parametr | Raspberry Pi 5 (BCM2712) | Orange Pi 5 (RK3588S) |
    |:--|:--|:--|
    | CPU | 4× Cortex-A76 @ 2,4 GHz | 4× A76 @ 2,4 GHz + 4× A55 @ 1,8 GHz |
    | GPU | VideoCore VII (0,8 TFLOPS) | Mali-G610 MP4 (~1 TFLOPS) |
    | NPU | – | 6 TOPS |
    | RAM | 4/8 GB LPDDR4X | 4/8/16/32 GB LPDDR4X |
    | PCIe | 1× PCIe 2.0 ×1 | 1× PCIe 3.0 ×4 |
    | Video výstup | 2× HDMI 4K60 | 1× HDMI 8K, 1× DP |
    | Cena | ~60 USD | ~80 USD |

    RK3588S je celkově výkonnější a lépe vybavený, ale BCM2712 má lepší softwarovou podporu (Raspberry Pi OS s dlouhodobou údržbou).

### Jak porovnávat SBC mezi sebou – kritéria výběru

Při výběru SBC pro projekt nestačí porovnat jen CPU – záleží na celém ekosystému:

| Kritérium | Proč na něm záleží | Příklad rozdílu |
|:--|:--|:--|
| **Výkon CPU** | Určuje, co na tom poběží – lehký web server, nebo real-time AI inference. | RPi Zero 2W vs. Jetson Orin |
| **RAM** | Více RAM = více služeb, kontejnerů, větší databáze. Méně RAM = swap na SD → pomalé, opotřebení karty. | 512 MB (omezené) vs. 8 GB (komfort) |
| **Úložiště** | MicroSD je pomalé a nespolehlivé (omezené cykly zápisu). eMMC a NVMe jsou řádově rychlejší a odolnější. | MicroSD ~20 MB/s vs. NVMe ~500 MB/s |
| **Konektivita** | Potřebuji WiFi 6? Dual Ethernet? PCIe pro AI akcelerátor? GPIO pro senzory? | RPi 5: WiFi 5 vs. Orange Pi 5 Plus: WiFi 6 + 2× 2,5 GbE |
| **Softwarová podpora** | Dostupnost OS, ovladačů, kernelu, dokumentace. Široce podporované SBC (RPi) mají obrovskou komunitu. | RPi: perfektní podpora, niche SBC: jen vendor kernel 4.19 |
| **Životní cyklus** | Bude se SBC vyrábět za 5 let? Průmyslové SBC garantují 10+ let. | RPi: ~7 let, průmyslové SoM: 10–15 let |
| **Cena a dostupnost** | Raspberry Pi bylo během čipové krize 2021–2023 nedostupné; alternativa Orange Pi vyplnila mezeru. | RPi 4: nedostupné → Orange Pi 3 LTS jako náhrada |
| **Spotřeba** | Rozhodující pro bateriově napájená zařízení. Rozdíl mezi idle 1 W a 10 W je pro solární senzor zásadní. | RPi Zero 2W: ~1 W idle vs. RPi 5: ~3 W idle |
| **Formát a GPIO** | Musí se vejít do krabičky. Raspberry Pi 40-pin GPIO je de-facto standard – mnoho HAT modulů. | RPi formát vs. Banana Pi (jiné rozložení pinů!) |

### Periferie na SBC

SBC nabízejí bohatou sadu periferií, které z nich dělají univerzální platformu od domácí automatizace po průmyslové řízení. Klasifikujeme je podle rozhraní a účelu:

| Skupina | Periferie | Rozhraní | Typické použití |
|:--|:--|:--|:--|
| **Zobrazení** | HDMI, DisplayPort, DSI, VGA | Digitální video, MIPI | Monitory, vestavné displeje, HMI panely |
| **Kamera** | MIPI-CSI, USB UVC | Sériové vysokorychlostní | Počítačové vidění, dohledové kamery, časosběr |
| **Úložiště** | MicroSD, eMMC, NVMe (M.2), SATA, SPI Flash | Různé – od pomalých po ~4 GB/s | Boot médium, databáze, logování, NAS |
| **Síť** | Ethernet, WiFi, Bluetooth, PoE, 4G/5G HAT | Různé | Konektivita, IoT brána, mesh síť |
| **Sběrnice** | I²C, SPI, UART, CAN, RS-485 | Nízkorychlostní sériové | Senzory, aktuátory, ADC, GPS moduly, průmyslová komunikace |
| **GPIO** | Digitální I/O, PWM, přerušení | 3,3V logika | LED, relé, tlačítka, servo, krokový motor, jednoduchá čidla |
| **Audio** | I²S, analogový jack, HDMI audio | Digitální/analogové | Mikrofon, reproduktor, audio kodeky |
| **JTAG / SWD** | Debugovací rozhraní | Sériové | Ladění bootloaderu, low-level vývoj, recovery |
| **RTC** | Hodiny reálného času (často externí modul) | I²C | Udržení času bez síťové konektivity |
| **PCIe** | 1–4 lane, Gen2/Gen3 | Vysokorychlostní sériová | NVMe SSD, AI akcelerátor (Coral TPU, Hailo-8), další NIC |

## SoC (System on Chip)

SoC je integrovaný obvod, který na jednom křemíkovém čipu spojuje **všechny hlavní výpočetní a komunikační bloky** – CPU jádra, GPU, paměťový řadič, akcelerátory a I/O řadiče. Je to srdce každého moderního SBC a chytrého telefonu.

!!! abstract "Co všechno je v SoC?"

    - **CPU** – jedno nebo více jader (ARM Cortex-A, RISC-V, x86, Apple Silicon).
    - **GPU** – integrovaný grafický procesor (Mali, Adreno, PowerVR, Apple GPU).
    - **ISP** (Image Signal Processor) – zpracování obrazu z kamer.
    - **NPU** (Neural Processing Unit) – akcelerace strojového učení (TensorFlow Lite, ONNX).
    - **DSP** – zpracování audia, potlačení šumu.
    - **Paměťový řadič** – LPDDR4/LPDDR5, eMMC, NAND Flash.
    - **I/O řadiče** – USB, PCIe, Ethernet MAC, HDMI, MIPI DSI/CSI, I²C, SPI, UART, GPIO.
    - **Security enclave** – hardwarový kořen důvěry (TrustZone, secure boot).

!!! example "Příklady SoC"
    | SoC | CPU | GPU | NPU | Typické zařízení |
    |:--|:--|:--|:--|:--|
    | Broadcom BCM2712 | 4× Cortex-A76 @ 2,4 GHz | VideoCore VII | – | Raspberry Pi 5 |
    | Rockchip RK3588 | 4× A76 + 4× A55 | Mali-G610 MP4 | 6 TOPS | Orange Pi 5, Radxa Rock 5 |
    | Apple M2 | 8 jader (4P + 4E) | Apple GPU (10 jader) | 16-core Neural Engine | Mac Mini, MacBook Air |
    | NVIDIA Jetson Orin NX | 8× Cortex-A78AE | Ampere GPU (1024 jader) | 100 TOPS | AI edge computing, autonomní roboti |

## SoM (System on Module)

SoM je **mezikrokem** mezi holým SoC a hotovým SBC. Je to malá deska, která obsahuje SoC, RAM, eMMC úložiště, napájecí obvody a konektor pro připojení k **nosné desce** (*carrier board*). Fyzicky se podobá RAM modulu – zapojuje se do patice.

!!! abstract "Proč používat SoM?"

    - **Oddělení vývoje** – hardwarový tým vyvine nosnou desku s periferiemi, softwarový tým paralelně pracuje se SoM.
    - **Škálovatelnost** – stejná nosná deska může osadit různými SoM podle výkonnostní třídy (např. i.MX8M Mini → i.MX8M Plus).
    - **Rychlejší vývoj** – návrh nosné desky je jednodušší než návrh celého SBC (nemusí se řešit DDR routing, napájení jádra, EMI u vysokorychlostních pamětí).
    - **Certifikace** – SoM je před-certifikován (EMC, radiové emise) – šetří čas a peníze.
    - **Životní cyklus** – výrobci SoM garantují dlouhodobou dostupnost (10+ let), na rozdíl od spotřebitelských SBC.

!!! example "Příklady SoM"

    - **Raspberry Pi Compute Module 4** – SoC BCM2711, až 8 GB RAM, 32 GB eMMC, 2× 100-pin konektor, podpora PCIe.
    - **Variscite DART-MX8M-PLUS** – i.MX8M Plus, NPU 2,3 TOPS, průmyslový teplotní rozsah.
    - **NVIDIA Jetson Orin NX module** – 100 TOPS AI, 8–16 GB LPDDR5, pro edge AI.

!!! info "SBC vs. SoM – kdy použít co?"
    | Kritérium | SBC | SoM + nosná deska |
    |:--|:--|:--|
    | Čas na vývoj | Okamžitě (koupím, zapojím, běží) | Týdny až měsíce (návrh nosné desky) |
    | Flexibilita | Omezená – co je na desce, to mám | Plná – nosnou desku navrhnu přesně pro svou aplikaci |
    | Cena (malá série) | Nízká | Vysoká (NRE na vývoj nosné desky) |
    | Cena (velká série) | Vysoká (platím za nevyužité funkce) | Nižší (nosná deska má jen to, co potřebuji) |
    | Typický případ | Prototyp, hobby, malá série | Produktová řada, 1000+ kusů |

## Operační systémy pro vestavná zařízení

Vestavná zařízení potřebují OS, který se zásadně liší od desktopových systémů – musí být **malý**, **rychlý při startu**, **energeticky úsporný** a často **deterministický**. Volba OS závisí na složitosti zařízení a požadavcích na real-time chování.

### Spektrum operačních systémů pro embedded

| Typ OS | Příklady | Velikost | Boot čas | Vhodné pro |
|:--|:--|:--:|:--:|:--|
| **Bare metal** (bez OS) | Vlastní smyčka, Arduino framework | < 1 KB | Okamžitý | Jednoduché řízení, jednoúčelová zařízení |
| **RTOS** | FreeRTOS, Zephyr, ThreadX | KB–MB | Milisekundy | Řízení v reálném čase, senzory, aktuátory, CAN |
| **Embedded Linux** | Yocto, Buildroot, OpenWrt | MB–GB | Sekundy | SBC, routery, IoT brány, HMI panely, multimédia |
| **Plnohodnotný Linux** | Raspberry Pi OS, Ubuntu, Armbian | GB | Desítky sekund | Desktop na SBC, vývojové prostředí, AI inference |

### Porovnání operačních systémů pro SBC – kritéria

Volba OS pro SBC je zásadní rozhodnutí – ovlivňuje výkon, bezpečnost, udržovatelnost i čas uvedení na trh. Kritéria se liší podle toho, zda jde o hobby projekt, nebo profesionální produkt:

| Kritérium | Proč na něm záleží | Bare metal / RTOS | Embedded Linux | Plnohodnotný Linux |
|:--|:--|:--:|:--:|:--:|
| **Boot čas** | Zařízení musí být připraveno do X sekund po zapnutí. | ✅ < 1 s | ⚠️ 2–10 s | ❌ 20–60 s |
| **Spotřeba** | Bateriové napájení – každý mW se počítá. | ✅ μW–mW | ⚠️ stovky mW | ❌ jednotky W |
| **Determinismus** | Garantovaná odezva na událost (hard real-time). | ✅ < 10 μs | ⚠️ s PREEMPT_RT | ❌ desítky ms |
| **Síťový stack** | Potřebuju TCP/IP, TLS, VPN, Docker? | ❌ Vlastní/lwIP | ✅ Plný | ✅ Plný |
| **Multimédia** | GPU akcelerace, kamera, kodeky, displej. | ❌ | ✅ S úsilím | ✅ Nativně |
| **Souborový systém** | Ext4, F2FS, NFS, wear-leveling pro Flash. | ❌ | ✅ | ✅ |
| **Bezpečnost** | Uživatelé, oprávnění, SELinux, bezpečné aktualizace. | ❌ Minimální | ✅ | ✅ |
| **Dostupnost balíků** | Instalace SW přes apt/pip/npm – rychlý vývoj. | ❌ | ⚠️ Omezeně | ✅ 50 000+ balíků |
| **Dlouhodobá podpora** | Bezpečnostní záplaty za 5 let? | ❌ Vlastní | ⚠️ Yocto LTS | ✅ Ubuntu LTS 10 let |
| **Učící křivka** | Jak rychle se s tím vývojář naučí pracovat. | ⚠️ Nízká (jednoduché), ale vše ručně | ⚠️ Vysoká | ✅ Nízká (známé prostředí) |
| **Velikost týmu** | 1 člověk vs. 20 vývojářů. | ✅ Malý tým | ⚠️ Střední | ✅ Velký tým |

!!! example "Typické scénáře volby OS"

    - **Chytrý senzor na baterii** (1 rok provozu, LoRa komunikace) → FreeRTOS. Linux by baterii vybil za týden.
    - **Průmyslový HMI panel** (dotykový displej, Ethernet, Modbus TCP) → Embedded Linux (Yocto). Grafický stack, síť, dlouhodobá podpora.
    - **AI kamera na stromě** (detekce zvěře, WiFi upload) → Plnohodnotný Linux (Armbian). Python, OpenCV, TensorFlow – vše přes apt.
    - **Studentský prototyp** (rychle ověřit nápad) → Raspberry Pi OS. Boot za 30 s nevadí, hlavně ať to funguje dnes.

### RTOS (Real-Time Operating System)

RTOS je navržen pro systémy, kde na **přesném časování** záleží – airbag se musí aktivovat do milisekund, motor se musí řídit s mikrosekundovou přesností.

!!! abstract "Vlastnosti RTOS"

    - **Preemptivní multitasking** – úloha s vyšší prioritou okamžitě přeruší úlohu s nižší.
    - **Garantovaná maximální latence** – čas od přerušení po spuštění obslužné úlohy je pevně daný (např. < 10 μs).
    - **Minimální paměťová stopa** – jednotky až desítky KB RAM, ROM.
    - **Žádná ochrana paměti** – procesy sdílejí adresní prostor (úspora režie, ale riziko pádu celého systému). Moderní RTOS (Zephyr) přidávají volitelný MMU/MPU.
    - **Deterministické plánování** – prioritní, round-robin, EDF (Earliest Deadline First).

### Embedded Linux vs. RTOS – kdy použít co

| Kritérium | RTOS (FreeRTOS, Zephyr) | Embedded Linux |
|:--|:--|:--|
| Paměť | KB–jednotky MB | 64+ MB RAM, 256+ MB Flash |
| CPU | Cortex-M, RISC-V MCU | Cortex-A, x86 embedded |
| Síťový stack | Omezený (lwIP, vlastní) | Plný (TCP/IP, firewall, VPN, Docker) |
| Souborový systém | Žádný nebo primitivní (FAT, LittleFS) | Ext4, Btrfs, F2FS, NFS |
| Multimedia | Obtížné (vlastní ovladače) | Nativní (GPU, DRM, GStreamer, PulseAudio) |
| Vývojová složitost | Vysoká – vše si píšu sám | Střední – využívám existující balíky |
| Certifikace (bezpečnost) | Snazší – malý kód, menší útočná plocha | Obtížná – obrovský kód, mnoho balíků |

## Linux pro vestavná zařízení

Embedded Linux je nejčastější volbou pro SBC a výkonnější vestavná zařízení – poskytuje plnohodnotný OS s podporou sítí, souborových systémů a multimédií, ale vyžaduje **přizpůsobení** cílovému hardwaru.

### Proč je Linux na SBC výhodný?

!!! success "Hlavní výhody Linuxu na SBC"

    - **Obrovský ekosystém** – statisíce balíků (apt, pip, npm), ovladače pro většinu hardware, komunita řešící problémy.
    - **Přenositelnost znalostí** – vývojář zná Linux z desktopu/serveru; stejné příkazy, stejné nástroje.
    - **Síťový stack** – TCP/IP, firewally, VPN, Docker, webové servery, databáze – vše připraveno, vyzrálé, bezpečné.
    - **Multimédia a GPU** – DRM/KMS, GStreamer, OpenGL ES, Vulkan – hardwarově akcelerované vykreslování a zpracování videa.
    - **Souborové systémy** – Ext4, F2FS, Btrfs, NFS, SquashFS – vyzrálá podpora včetně šifrování a komprese.
    - **Bezpečnost** – uživatelská oprávnění, SELinux/AppArmor, firewall, secure boot, šifrování disku.
    - **Aktualizace** – A/B dual-bank, ostree, RAUC, Mender – spolehlivé OTA aktualizace i na embedded zařízení.
    - **Vývojářská produktivita** – editovat kód na PC, kompilovat, testovat v QEMU, nasadit na HW – rychlý cyklus.

### Rizika a nevýhody Linuxu na SBC

!!! bug "Na co si dát pozor"

    - **Boot čas** – desktopový Linux startuje desítky sekund. I ořezaný embedded Linux potřebuje několik sekund – pro zařízení, které musí reagovat okamžitě po zapnutí, je to problém.
    - **Spotřeba** – Linuxové jádro periodicky probouzí CPU (timer tick, RCU, workqueues). I v idle spotřebovává stovky mW – pro bateriové zařízení kritické.
    - **Složitost** – Linux je obrovský projekt (30+ milionů řádků kódu). Když něco nefunguje, ladění může být velmi obtížné.
    - **Bezpečnostní plocha** – čím víc kódu, tím víc potenciálních zranitelností. Embedded zařízení často nemají pravidelný update cyklus – stávají se snadným cílem botnetů.
    - **Závislost na vendor kernelu** – výrobci SoC často dodávají starou, neupstreamovanou verzi kernelu (např. 4.19 v roce 2025). Bezpečnostní záplaty? Doufejme.
    - **Licencování** – GPL vyžaduje poskytnutí zdrojového kódu kernelu a některých knihoven. Pro proprietární produkty to znamená právní režii.
    - **Determinismus** – standardní Linux není real-time OS. PREEMPT_RT patch zlepšuje latenci, ale stále negarantuje mikrosekundové odezvy jako RTOS.

### Úpravy OS pro cílové zařízení

Desktopový Linux nelze jen tak zkopírovat na embedded zařízení – je potřeba ho **ořezat**, **přizpůsobit** a **optimalizovat**.

!!! abstract "Klíčové úpravy Linuxu pro embedded"

    1. **Kernel** – zkompilovat jen potřebné ovladače a subsystémy; odstranit nepotřebné (Bluetooth, sound, HID, filesystemy, které nepoužívám). Typická velikost embedded kernelu: 2–8 MB.
    2. **Device Tree** – popisuje hardware (který pin je I²C, který GPIO, adresy periferií). Každá deska má vlastní `.dts` soubor – bez něj kernel neví, jak komunikovat s hardwarem.
    3. **Root filesystem** – minimalizovat: busybox místo GNU coreutils, musl místo glibc, žádné manuálové stránky, dokumentace, dev balíky.
    4. **Init systém** – místo systemd použít lehký init (BusyBox init, OpenRC, s6). Rychlejší boot, menší paměťová stopa.
    5. **Bootloader** – U-Boot (univerzální embedded bootloader) načte kernel, device tree a initramfs z Flash/eMMC/sítě. Musí být nakonfigurován pro konkrétní desku.
    6. **Read-only rootfs** – v produkci často read-only rootfs (SquashFS + overlay tmpfs pro `/var` a `/tmp`) – odolné proti výpadku napájení, ochrana proti poškození FS.
    7. **Aktualizace** – dual-bank (A/B) schéma: systém má dvě kopie rootfs, aktualizace se instaluje do neaktivní, při selhání se zařízení vrátí k předchozí verzi.

!!! example "Build systémy pro embedded Linux"
    | Nástroj | Princip | Vhodné pro |
    |:--|:--|:--|
    | **Yocto Project** | Zdroje → balíky → image. Plná kontrola, ale strmá křivka učení. | Profesionální produkty, custom distribuce |
    | **Buildroot** | Konfigurace přes menuconfig, statické sestavení. Jednodušší než Yocto. | Rychlé prototypování, jednodušší zařízení |
    | **OpenWrt** | Specializovaný pro síťová zařízení. | Routery, access pointy, síťové brány |
    | **Armbian** | Hotový obraz pro SBC. Desktopové pohodlí. | Raspberry Pi, Orange Pi, Odroid – komunita |

### Cesta k funkčnímu Linuxu – TBKR

TBKR je mnemotechnická zkratka pro čtyři vrstvy, které musí vývojář připravit, aby Linux na embedded zařízení nabootoval. Každá vrstva staví na předchozí:

$$\text{Toolchain} \to \text{Bootloader} \to \text{Kernel} \to \text{Root filesystem}$$

#### Toolchain

Toolchain je sada nástrojů pro **křížovou kompilaci** (*cross-compilation*) – kompilaci kódu na jednom typu procesoru (host, typicky x86_64 PC) pro jiný typ procesoru (target, typicky ARM / RISC-V). Bez toolchainu nelze embedded Linux vůbec sestavit.

!!! abstract "Součásti toolchainu"

    - **Cross-compiler** – překladač (GCC) zkompilovaný pro hostitelskou architekturu, ale generující kód pro cílovou (např. `aarch64-linux-gnu-gcc`).
    - **Binutils** – assembler, linker, objdump, strip – nástroje pro práci s binárními soubory cílové architektury.
    - **C knihovna** (libc) – glibc (plná, velká) nebo musl (minimalistická, vhodná pro embedded).
    - **Sysroot** – adresářová struktura napodobující root filesystem cílového zařízení; obsahuje hlavičkové soubory a knihovny, proti kterým se linkuje.
    - **Debugger** (GDB) – pro ladění na cílovém zařízení přes JTAG nebo `gdbserver`.

Toolchain lze získat třemi způsoby:

- **Pre-built** – stáhnout hotový od výrobce SoC (Linaro, ARM, Bootlin).
- **crosstool-NG** – nástroj pro sestavení vlastního toolchainu z konfigurace.
- **Yocto/Buildroot** – automaticky sestaví toolchain jako součást buildu distribuce.

#### Bootloader

Bootloader je **první kód**, který procesor spustí po zapnutí napájení. Jeho úlohou je inicializovat základní hardware (hodiny, DDR paměť, sériovou konzoli), načíst kernel a device tree z úložiště (eMMC, SD, SPI Flash) nebo sítě (TFTP), a předat mu řízení.

V embedded světě dominuje **U-Boot** (Das U-Boot) – univerzální, široce portovaný na stovky platforem. U-Boot má vlastní shell s příkazy pro načítání kernelu, čtení pamětí a diagnostiku.

!!! info "Bootovací sekvence na embedded Linuxu"

    1. **ROM bootloader** – na čipu, načte první stage z pinu/efuse konfigurace.
    2. **U-Boot SPL** (Secondary Program Loader) – malý kód inicializující DDR RAM.
    3. **U-Boot** – plný bootloader s podporou sítě, souborových systémů a shellu.
    4. **Kernel** – U-Boot předá device tree a kernelu řízení.
    5. **Rootfs** – kernel připojí root filesystem a spustí `/sbin/init`.

```
┌────────────┐    ┌──────────┐    ┌────────┐    ┌────────┐
│ ROM Boot   │───→│ U-Boot   │───→│ Kernel │───→│ Rootfs │
│ (v čipu)   │    │ SPL+Full │    │ + DTB  │    │ + init │
└────────────┘    └──────────┘    └────────┘    └────────┘
```

#### Kernel

Linuxové jádro pro embedded zařízení je v principu stejné jako desktopové – rozdíl je v **konfiguraci** (jen potřebné ovladače a subsystémy) a **device tree**, které jádru říká, jaký hardware má k dispozici. Kernel se konfiguruje přes `make menuconfig` a kompiluje pomocí cross-compileru z toolchainu.

#### Root filesystem

Root filesystem (rootfs) je adresářová struktura, kterou kernel připojí jako `/`. Obsahuje všechny programy, knihovny, konfigurační soubory a data, se kterými systém pracuje. Minimální rootfs obsahuje:

- **Init** – první proces (`/sbin/init`), PID 1.
- **Shell** – pro interakci (BusyBox ash, bash).
- **Základní nástroje** – `ls`, `cp`, `mount`, `ifconfig` (typicky z BusyBoxu – jeden binární soubor obsahující desítky UNIX nástrojů).
- **libc** – C knihovna (musl nebo glibc).
- **Konfigurační soubory** – `/etc/fstab`, `/etc/inittab`, `/etc/network/interfaces`.

Rootfs může být uložen na různých médiích – initramfs (v RAM, součást kernel image), SD karta, eMMC, NAND Flash, síťový souborový systém (NFS pro vývoj).

### Yocto Project

Yocto není linuxová distribuce – je to **build framework** pro vytváření vlastních linuxových distribucí. Umožňuje sestavit kompletní Linux image od toolchainu přes kernel a rootfs až po balíky.

!!! abstract "Klíčové pojmy Yocta"

    - **Poky** – referenční distribuce Yocta, výchozí bod pro vlastní build.
    - **BitBake** – buildovací nástroj (podobný Make), který zpracovává recepty.
    - **Recept** (*recipe*, `.bb` soubor) – instrukce, jak stáhnout, zkompilovat a zabalit jeden balíček.
    - **Vrstva** (*layer*, `meta-*`) – sada receptů a konfigurací pro určitou doménu (`meta-raspberrypi`, `meta-ti`, `meta-openembedded`).
    - **Image** – výsledek buildu – konkrétní rootfs obraz (`core-image-minimal`, `core-image-sato`, vlastní).
    - **SDK** – Yocto vygeneruje toolchain + sysroot pro vývojáře aplikací.

!!! info "Kdy použít Yocto vs. Buildroot"
    | Kritérium | Yocto | Buildroot |
    |:--|:--|:--|
    | Filozofie | Distribuce = sada balíků, balíčkovací systém (opkg/rpm) | Monolitický build – jeden obraz, bez správce balíků |
    | Konfigurace | Vrstvy, recepty, Python/Shell | Menuconfig, Makefile, Kconfig |
    | Reprodukovatelnost | Vysoká – přesné verze, hashování | Střední |
    | Křivka učení | Strmá – mnoho konceptů, pomalé první sestavení | Mírná – blíže tradičnímu embedded vývoji |
    | Vhodné pro | Profesionální produktovou řadu, týmový vývoj, dlouhodobá údržba | Rychlý prototyp, jednodušší zařízení, jeden vývojář |

## Paměti FLASH

Flash paměť je nevolatilní úložiště používané ve vestavných zařízeních pro uložení firmwaru, OS a dat. Na rozdíl od magnetických disků nemá pohyblivé části, je odolná proti otřesům a má nízkou spotřebu – ale má specifické limity, které je nutné respektovat.

### Typy Flash pamětí

| Typ | Rozhraní | Rychlost čtení | Životnost (cyklů mazání) | Typické použití |
|:--|:--|:--:|:--:|:--|
| **NOR Flash** | Paralelní / SPI | Desítky MB/s | 100 000 | Firmware, bootloader (execute-in-place) |
| **NAND Flash** (SLC) | Paralelní / ONFI | Stovky MB/s | 50 000–100 000 | Průmyslová zařízení, vysoká spolehlivost |
| **NAND Flash** (MLC) | Paralelní / ONFI | Stovky MB/s | 3 000–10 000 | Spotřebitelská zařízení |
| **NAND Flash** (TLC) | Paralelní / ONFI | Stovky MB/s | 1 000–3 000 | Levné SSD, USB flash, microSD |
| **eMMC** | eMMC 5.1 | Až 400 MB/s | Stejné jako NAND uvnitř | Vestavné úložiště na desce – chytré telefony, SBC |
| **UFS** | UFS 3.1/4.0 | Až 4 200 MB/s | Stejné jako NAND uvnitř | Vysoce výkonná vestavná úložiště, flagship telefony |

!!! warning "Limity Flash pamětí"

    - **Omezený počet zápisů** – každou buňku lze přepsat jen omezeně-krát (viz tabulka výše). Bez správy opotřebení (*wear leveling*) by často zapisované bloky (adresáře, logy) rychle selhaly.
    - **Mazání po blocích** – Flash nelze přepsat bajt po bajtu. Nejdříve se musí smazat celý blok (typicky 128 KB–2 MB), pak zapsat. To komplikuje správu volného místa a způsobuje *write amplification*.
    - **Write amplification** – poměr mezi daty zapsanými aplikací a daty fyzicky zapsanými na Flash. Kvůli mazání po blocích může být 2–20× vyšší.

### Souborové systémy pro Flash paměti

Klasické souborové systémy (ext4, NTFS) nepočítají s omezenou životností buněk a mazáním po blocích. Pro Flash se používají specializované FS:

| Souborový systém | Pro co | Klíčové vlastnosti |
|:--|:--|:--|
| **SquashFS** | Read-only rootfs | Komprimovaný, pouze pro čtení, extrémně malá velikost. |
| **UBIFS** | Raw NAND/MTD Flash | Wear leveling, komprese, recovery po výpadku napájení. |
| **JFFS2** | Starší NAND/NOR Flash | Log-structured, wear leveling. Postupně nahrazováno UBIFS. |
| **F2FS** (Flash-Friendly FS) | eMMC, UFS, NVMe, SD karty | Navržen pro FTL zařízení – minimalizuje write amplification, optimalizuje garbage collection. |
| **Ext4** (s `noatime`, `discard`) | eMMC, SSD | Lze použít, pokud zařízení má interní wear leveling (FTL – Flash Translation Layer v řadiči eMMC/SSD). |
| **LittleFS** | NOR Flash, MCU | Extrémně malý, odolný proti výpadku napájení, copy-on-write, pro vestavné systémy s omezenou RAM. |

### Podpora Flash pamětí v Linuxovém jádře

Linux poskytuje několik subsystémů pro práci s Flash pamětí:

| Subsystém | Popis | Kdy použít |
|:--|:--|:--|
| **MTD** (Memory Technology Device) | Abstrakční vrstva pro raw Flash – NOR i NAND bez FTL. Poskytuje informace o velikosti bloků, počtu mazání, vadných blocích. | Raw NAND/NOR flash čipy připojené přes paralelní nebo SPI rozhraní. |
| **UBI** (Unsorted Block Images) | Vrstva nad MTD – implementuje wear leveling, správu vadných bloků a logické svazky. | Když používám raw Flash a chci spolehlivé opotřebení. |
| **Block layer** (MMC/SD/SSD) | Standardní blokové zařízení – eMMC, SD karty, NVMe se tváří jako klasický disk. Jejich řadič (FTL) interně řeší wear leveling a garbage collection. | eMMC, SD karty, NVMe SSD. Stačí použít F2FS nebo ext4. |
| **SPI NOR framework** | Podpora pro NOR Flash připojené přes SPI – automatická detekce (JEDEC ID). | Malé SPI NOR pro firmware a bootloader. |
