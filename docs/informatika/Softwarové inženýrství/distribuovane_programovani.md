# Distribuované programování

Distribuované programování je paradigma, při kterém se výpočetní úloha rozkládá na více nezávislých výpočetních jednotek (procesů, vláken, uzlů, serverů), které mezi sebou komunikují a spolupracují na dosažení společného cíle. Na rozdíl od klasického sekvenčního programu, který běží v jednom vlákně na jednom stroji, distribuovaný systém řeší problémy škálování, odolnosti proti výpadkům, konzistence dat a složitosti komunikace.

!!! abstract "Proč distribuované programování?"

    - **Škálovatelnost**: Jeden stroj má fyzické limity – CPU, RAM, disk, propustnost sítě. Distribucí zátěže můžeme překročit limity jednoho stroje.
    - **Odolnost proti výpadkům**: Pokud spadne jeden uzel, ostatní pokračují. Data se replikují napříč uzly.
    - **Geografické rozložení**: Uživatelé jsou po celém světě – data mohou být blíž k nim (CDN, edge computing).
    - **Cena**: 10 levných serverů je často levnějších než 1 drahý mainframe.
    - **Modularita**: Různé části systému mohou být vyvíjeny, nasazeny a škálovány nezávisle.

## Typy škálování

Škálování je schopnost systému zvládat rostoucí zátěž. Rozlišujeme dva základní přístupy – vertikální a horizontální – a dvě strategie podle toho, zda aktivně reagujeme na zátěž.

### Vertikální škálování (Scale Up)

Vertikální škálování znamená **zvýšení výkonu existujícího stroje** – přidání CPU jader, RAM, rychlejších disků (SSD místo HDD), výkonnější GPU.

!!! info "Vlastnosti vertikálního škálování"

    - **Jednoduchost**: Aplikace se nemusí nijak upravovat – stále běží na jednom stroji.
    - **Silné limity**: Existuje fyzický strop – nejvýkonnější CPU na trhu, maximální RAM do serverové desky (např. 6 TB).
    - **Single point of failure**: Jeden stroj = jedno místo selhání.
    - **Dražší růst**: Každé další zdvojnásobení výkonu stojí exponenciálně více peněz.
    - **Typické použití**: Databáze, která se obtížně distribuuje; starší monolitické aplikace; úlohy s vysokým podílem sekvenčního kódu.

### Horizontální škálování (Scale Out)

Horizontální škálování znamená **přidání dalších strojů** do systému a rozložení zátěže mezi ně.

!!! info "Vlastnosti horizontálního škálování"

    - **Teoreticky neomezené**: Můžu přidávat další a další stroje (statisíce u velkých cloudů).
    - **Vyšší složitost**: Aplikace musí být navržena pro distribuované prostředí – musí řešit komunikaci, konzistenci dat, load balancing.
    - **Odolnost**: Výpadek jednoho stroje nemusí znamenat výpadek celého systému.
    - **Levnější růst**: Lineárně přidávám levné komoditní stroje.
    - **Typické použití**: Webové servery, mikroslužby, streamovací služby (Kafka), distribuované databáze (Cassandra, MongoDB).

!!! example "Příklad: Zátěžový test – vertikální vs. horizontální"
    Představ si webovou aplikaci, která zvládne 1 000 požadavků za sekundu na jednom stroji s 4 jádry a 8 GB RAM.

    | Strategie | Postup | Nová kapacita | Orientační cena |
    |:--|:--|:--:|:--:|
    | Vertikální | Upgrade na 16 jader, 64 GB RAM | ~4 000 req/s | Dražší stroj (~10× cena) |
    | Horizontální | Přidat 3 další stejné stroje | ~4 000 req/s | 4 levnější stroje (~4× cena) |

    Horizontální varianta je levnější, odolnější proti výpadku, ale vyžaduje load balancer a úpravu aplikace.

### Reaktivní škálování

Reaktivní (též elastické) škálování je strategie, kdy systém **automaticky přidává nebo odebírá zdroje** podle aktuální zátěže. Běžně se používá v cloudovém prostředí (AWS Auto Scaling, Kubernetes HPA/VPA).

- **Scale Out**: Přidání nové instance/kontejneru při zvýšené zátěži.
- **Scale In**: Odebrání přebytečné instance při nízké zátěži.
- **Scale Up**: Zvětšení CPU/RAM limitu stávající instance (např. v Kubernetes).
- **Scale Down**: Snížení alokovaných zdrojů.

!!! info "Metriky pro spuštění škálování"
    Reaktivní škálování se opírá o měřitelné metriky:

    - CPU utilizace (např. > 70 % → přidej instanci).
    - Paměťová utilizace.
    - Latence požadavků (např. p95 > 200 ms).
    - Počet aktivních spojení, fronta požadavků.
    - Vlastní business metriky (např. počet aktivních uživatelů).

## CAP teorém

CAP teorém (též Brewerův teorém) je fundamentální princip distribuovaných systémů, který říká, že v distribuovaném datovém úložišti lze garantovat **nejvýše dvě** z následujících tří vlastností současně:

!!! abstract "Tři vlastnosti CAP"
    | Vlastnost | Význam | Otázka, kterou si klademe |
    |:--|:--|:--|
    | **C** – Konzistence (*Consistency*) | Každé čtení vrátí výsledek posledního zápisu (nebo chybu). Všichni klienti vidí stejná data ve stejný okamžik. | „Vidí všichni právě teď to samé?" |
    | **A** – Dostupnost (*Availability*) | Každý požadavek na fungující uzel vrátí odpověď (ne chybu) – i když některé uzly mají výpadek. | „Dostanu vždycky odpověď?" |
    | **P** – Odolnost proti rozdělení sítě (*Partition Tolerance*) | Systém funguje dál, i když dojde k přerušení komunikace mezi uzly (síťový *partition*). | „Funguje systém, i když se uzly navzájem nevidí?" |

!!! quote "Vizualizace CAP"
    ```mermaid
    graph TD
        CAP[CAP teorém]
        CAP --> C[Konzistence<br/>Consistency]
        CAP --> A[Dostupnost<br/>Availability]
        CAP --> P[Odolnost proti rozdělení<br/>Partition Tolerance]
        C -.-> CP[CP systém]
        A -.-> AP[AP systém]
        P -.-> CP
        P -.-> AP
    ```

### Proč nejde mít všechny tři?

Představ si dva uzly databáze $A$ a $B$, mezi kterými se přerušila síť (*partition*). V tento moment máme dvě možnosti:

1. **Zachovat konzistenci (C)**: Odmítnout zápisy na uzel $B$, dokud se síť neobnoví – obětovali jsme dostupnost (**A**). Výsledek: **CP** systém.
2. **Zachovat dostupnost (A)**: Povolit zápisy na oba uzly. Po obnovení sítě budou mít $A$ a $B$ rozdílná data – obětovali jsme konzistenci (**C**). Výsledek: **AP** systém.

!!! warning "Důležité upřesnění CAP"

    - CAP neříká, že si musíme vybrat právě dvě ze tří *navždy*. Říká, že *v okamžiku partition* (P) si musíme vybrat mezi C a A.
    - Když síť funguje (žádný partition), systém může poskytovat C i A zároveň.
    - V distribuovaném prostředí je partition **nevyhnutelný** (síť je nespolehlivá), takže P nelze obětovat – v reálném světě se vždy rozhoduje mezi CP a AP.

### Klasifikace systémů podle CAP

| Strategie | Zaměření | Příklad databází | Chování při partition |
|:--|:--|:--|:--|
| **CP** (Konzistence + Partition) | Konzistence nad dostupností | HBase, MongoDB (výchozí), Redis Cluster, Zookeeper | Odmítne zápisy na minoritní části clusteru |
| **AP** (Dostupnost + Partition) | Dostupnost nad konzistencí | Cassandra, DynamoDB, CouchDB, Riak | Přijme zápisy na všech uzlech, konflikty řeší později |
| **CA** (Konzistence + Dostupnost) | Obětuje partition toleranci | Tradiční relační DB (PostgreSQL, MySQL) na jednom uzlu | Při partition přestane fungovat celý systém |

!!! info "PACELC – rozšíření CAP"
    PACELC teorém (Daniel Abadi, 2010) rozšiřuje CAP o chování systému **když partition není** (Else). CAP řeší jen chování při síťovém rozdělení – PACELC říká, že i za normálního provozu existuje fundamentální trade-off:
    
    - **P**artition: vyber si **A**vailability nebo **C**onsistency
    - **E**lse (když partition není): vyber si **L**atency nebo **C**onsistency

    **Proč i za normálního stavu?** Striktní konzistence vyžaduje, aby zápis byl potvrzen většinou replik (quorum), což něco stojí:

    - Replika v jiném datovém centru má latenci desítky až stovky milisekund.
    - Čekání na potvrzení od všech replik = vysoká latence pro klienta.

    Výsledkem jsou čtyři třídy systémů podle PACELC:

    | Třída | Při Partition | Else (normální stav) | Příklad |
    |:--|:--|:--|:--|
    | **PC/EC** | Konzistence | Konzistence | BigTable, HBase, VoltDB – obětují latenci vždy |
    | **PC/EL** | Konzistence | Latence | MongoDB, PNUTS – při partition striktní, jinak rychlé |
    | **PA/EL** | Dostupnost | Latence | Cassandra, DynamoDB, Riak – vždy rychlé, konzistence nakonec |
    | **PA/EC** | Dostupnost | Konzistence | Vzácné – při partition dostupné, jinak konzistentní |

    V praxi dominují **PC/EC** (bankovní systémy) a **PA/EL** (sociální sítě, streaming).

## Koncepce paralelního a distribuovaného programování

Při přechodu od sekvenčního programu k distribuovanému se musíme vypořádat s novými výzvami: jak rozdělit práci, jak si předávat data, jak synchronizovat výpočet a jak se zotavit z chyb.

### Paměťový model

Základní dělení podle toho, jak procesy sdílejí data:

#### Sdílená paměť (Shared Memory)

Všechna vlákna nebo procesy sdílejí společný adresní prostor. Komunikují čtením a zápisem do stejné paměti. Synchronizace se řeší pomocí [mutexů](../Operační%20systémy/Souběh%20a%20uváznutí/Mutex.md), [semaforů](../Operační%20systémy/Souběh%20a%20uváznutí/Semafor.md) a [atomických operací](../Operační%20systémy/Souběh%20a%20uváznutí/Atomické%20operace.md).

- **Výhody**: Rychlá komunikace (paměť je blízko), jednodušší myšlenkový model.
- **Nevýhody**: Souběh (*race conditions*), obtížné ladění, nelze škálovat mimo jeden stroj.
- **Příklad**: Vlákna v Javě, OpenMP, `std::thread` v C++.

#### Distribuovaná paměť (Distributed Memory / Message Passing)

Každý proces má vlastní izolovanou paměť. Komunikace probíhá výhradně **posíláním zpráv** přes síť. Žádná data nejsou sdílena implicitně – co si procesy nepošlou, to nevidí.

- **Výhody**: Lze škálovat na tisíce strojů, izolace pádů, jasné rozhraní.
- **Nevýhody**: Režie serializace/deserializace zpráv, latence sítě, složitější návrh.
- **Příklad**: MPI (Message Passing Interface), ZeroMQ, gRPC, RabbitMQ, Apache Kafka.

!!! example "Srovnání: Sdílená vs. distribuovaná paměť"
    | Vlastnost | Sdílená paměť | Distribuovaná paměť |
    |:--|:--|:--|
    | Komunikace | Čtení/zápis do paměti | Zprávy přes síť |
    | Škálovatelnost | Jeden stroj (max. stovky jader) | Tisíce strojů |
    | Latence | Nanosekundy | Mikrosekundy až milisekundy |
    | Synchronizace | Mutex, semafor, bariéra | Zprávy, potvrzení, timeouty |
    | Ladění | Složité (race conditions) | Střední (distribuované logy) |
    | Selhání | Padne celý proces | Izolované pády uzlů |

### Programovací modely

#### Master–Worker (Task Farm)

Jeden hlavní proces (master) rozděluje práci mezi více podřízených procesů (workerů) a sbírá výsledky. Master se stará o rozdělení úlohy, distribuci, sledování postupu a agregaci výsledků.

- **Výhody**: Jednoduchý model, snadné škálování, přirozený pro mnoho úloh.
- **Nevýhody**: Master se může stát úzkým hrdlem, single point of failure.
- **Příklad**: MapReduce, distribuované renderování, vědecké výpočty s MPI.

#### Peer-to-Peer

Všechny uzly jsou si rovnocenné. Každý uzel může být klientem i serverem zároveň. Neexistuje centrální autorita.

- **Výhody**: Odolné proti výpadkům, žádné úzké hrdlo, decentralizované.
- **Nevýhody**: Složitější koordinace, obtížné zajištění globální konzistence.
- **Příklad**: BitTorrent, blockchain, distribuované hashovací tabulky (Kademlia, Chord).

#### Pipeline

Data protékají sekvencí fází, kde každá fáze provádí specifickou operaci a předává výsledek dál. Každá fáze běží paralelně na jiných datech.

- **Výhody**: Vysoká propustnost, přirozené pro streamingové zpracování.
- **Nevýhody**: Latence je součtem latencí všech fází; pomalá fáze brzdí celý pipeline.
- **Příklad**: Unixové roury (`cat | grep | sort | uniq`), ETL pipeline, kompilátor (lexer → parser → optimizer → codegen).

#### Producer–Consumer

Producenti generují data a vkládají je do fronty. Konzumenti data z fronty odebírají a zpracovávají. Komunikace je nepřímá – přes frontu, nikoliv napřímo.

- **Výhody**: Decoupling – producent a konzument se navzájem neznají; vyrovnávání zátěže.
- **Nevýhody**: Režie fronty, nutnost řešit backpressure (spotřebitel nestíhá).
- **Příklad**: Zpracování logů, objednávkový systém, streamování událostí.

#### SPMD (Single Program, Multiple Data)

Všechny procesy spouští **stejný program**, ale každý pracuje na **jiné části dat**. Každý proces má své ID (rank), podle kterého se rozhoduje, kterou část dat zpracuje.

- **Výhody**: Jednoduchý a jednotný kód pro všechny uzly.
- **Nevýhody**: Vyžaduje explicitní větvení v kódu podle ranku; méně flexibilní.
- **Příklad**: MPI programy (`mpirun -np 4 ./program`), CUDA kernely.

#### MPI (Message Passing Interface)

MPI je standardizovaný, přenositelný systém pro předávání zpráv, který je páteří většiny distribuovaných výpočtů v HPC (High-Performance Computing). Standard definuje API pro C, C++ a Fortran; mezi hlavní implementace patří **OpenMPI**, **MPICH** a **Intel MPI**.

!!! info "Oblast použití MPI"
    MPI se používá všude tam, kde výpočetní nároky překračují možnosti jednoho stroje a kde lze problém rozložit na nezávislé nebo slabě závislé části:

    - **Vědecké simulace**: Předpověď počasí, klimatické modely, seizmické modelování.
    - **Fyzikální simulace**: Molekulární dynamika, výpočetní dynamika tekutin (CFD), astrofyzikální simulace.
    - **Strojové učení**: Distribuovaný trénink neuronových sítí (např. Horovod).
    - **Bioinformatika**: Skládání proteinů, analýza genomu.
    - **Renderování**: Distribuovaný ray-tracing (farmy renderovacích uzlů).

##### Komunikátory

Komunikátor je základním konceptem MPI – představuje **skupinu procesů a kontext**, ve kterém probíhá komunikace. Každá zpráva je odeslána v rámci určitého komunikátoru a nemůže ho opustit.

- **Výchozí komunikátor** `MPI_COMM_WORLD` zahrnuje všechny procesy spuštěné při startu.
- **Intra-komunikátor**: Procesy uvnitř jedné skupiny – běžný případ (např. všechny procesy výpočtu).
- **Inter-komunikátor**: Propojení dvou různých skupin procesů – používá se např. při dynamickém připojování workerů.

!!! example "Vytvoření vlastního komunikátoru pomocí MPI_Comm_split"
    ```c
    int rank, color;
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    color = rank % 2;  // sudé procesy do skupiny 0, liché do 1

    MPI_Comm new_comm;
    MPI_Comm_split(MPI_COMM_WORLD, color, rank, &new_comm);
    ```
    Po rozdělení dostanou sudé a liché procesy vlastní komunikátory – zpráva poslaná uvnitř `new_comm` se nedostane k procesům ve druhé skupině.

##### Rank a velikost

- **Rank** (*hodnost*): Jednoznačný identifikátor procesu v rámci komunikátoru – celé číslo od `0` do `size-1`. Proces s rankem `0` se konvenčně označuje jako *root* a typicky řídí rozdělování práce a sběr výsledků.
- **Velikost** (*size*): Celkový počet procesů v komunikátoru, zjištěný voláním `MPI_Comm_size`.

!!! example "Minimální MPI program v C"
    ```c
    #include <mpi.h>
    #include <stdio.h>

    int main(int argc, char** argv) {
        MPI_Init(&argc, &argv);

        int rank, size;
        MPI_Comm_rank(MPI_COMM_WORLD, &rank);
        MPI_Comm_size(MPI_COMM_WORLD, &size);

        printf("Jsem proces %d z %d\n", rank, size);

        MPI_Finalize();
        return 0;
    }
    ```
    Spuštění: `mpirun -np 4 ./program` → vypíše 4 řádky, každý s jiným rankem (pořadí výpisů není garantováno).

##### Základní sada operací

MPI poskytuje bohatou sadu operací, které lze rozdělit na **point-to-point** (komunikace mezi dvěma procesy) a **kolektivní** (komunikace zahrnující všechny procesy v komunikátoru).

###### Point-to-point operace

| Funkce | Popis |
|:--|:--|
| `MPI_Send(buf, count, type, dest, tag, comm)` | Blokující odeslání – proces čeká, dokud není zpráva bezpečně odeslána (může být zkopírována do bufferu). |
| `MPI_Recv(buf, count, type, src, tag, comm, status)` | Blokující příjem – proces čeká, dokud nepřijde odpovídající zpráva. |
| `MPI_Isend(...)` / `MPI_Irecv(...)` | Neblokující varianty – proces ihned pokračuje, dokončení se testuje pomocí `MPI_Wait` nebo `MPI_Test`. |
| `MPI_Sendrecv(...)` | Simultánní odeslání a příjem – řeší problém vzájemného čekání (viz níže). |

###### Kolektivní operace

| Operace | Funkce | Popis |
|:--|:--|:--|
| **Broadcast** | `MPI_Bcast` | Jeden proces (root) rozešle stejná data všem ostatním. |
| **Scatter** | `MPI_Scatter` | Root rozdělí pole na stejně velké části a každou pošle jinému procesu. |
| **Gather** | `MPI_Gather` | Opačný scatter – root sesbírá data od všech procesů do jednoho pole. |
| **Allgather** | `MPI_Allgather` | Jako Gather, ale výsledné pole dostanou všichni (ne jen root). |
| **Alltoall** | `MPI_Alltoall` | Každý proces pošle jiná data každému jinému procesu – maticová transpozice dat napříč procesy. |
| **Reduce** | `MPI_Reduce` | Agregace dat ze všech procesů (součet, min, max, logický AND…) – výsledek dostane root. |
| **Allreduce** | `MPI_Allreduce` | Jako Reduce, ale výsledek dostanou všichni procesy. Typicky nejpoužívanější kolektivní operace. |
| **Scan** | `MPI_Scan` | Prefixový součet – každý proces dostane agregaci dat od procesů s rankem ≤ jeho rank. |
| **Reduce_scatter** | `MPI_Reduce_scatter` | Kombinace Reduce a Scatter v jednom volání – výsledek je rozdistribuován po částech. |

!!! example "Příklad: Paralelní součet pole pomocí MPI"
    Mám pole 1 000 000 čísel. Spustím 4 procesy:

    1. Proces 0 pole rozdělí na 4 části po 250 000 číslech a pomocí `MPI_Scatter` je rozešle.
    2. Každý proces spočítá lokální součet své části.
    3. Pomocí `MPI_Reduce` s operací `MPI_SUM` se všechny lokální součty sečtou do globálního výsledku na procesu 0.

    Celková doba: teoreticky 1/4 původního času + režie na komunikaci.

##### Synchronizace

V MPI existuje několik úrovní synchronizace mezi procesy:

- **Bariéra** (`MPI_Barrier`): Nejjednodušší synchronizační primitivum – všechny procesy v komunikátoru se zastaví a čekají, dokud na bariéru nedorazí i poslední z nich. Používá se typicky mezi fázemi výpočtu, kde další fáze závisí na výsledcích všech procesů z fáze předchozí.
- **Kolektivní operace jako synchronizační body**: Většina kolektivních operací (`MPI_Bcast`, `MPI_Reduce`, …) implicitně synchronizuje – volání se dokončí až poté, co ho provedou všechny procesy.
- **Point-to-point synchronizace**: Dva procesy se synchronizují vzájemně pomocí send/recv dvojice – příjemce čeká na zprávu, odesílatel čeká na potvrzení.

!!! bug "Pozor na deadlock při synchronizaci"
    Pokud proces A volá `MPI_Send` k procesu B a proces B současně volá `MPI_Send` k procesu A, oba čekají – klasický deadlock. Viz sekce o blokujících operacích níže.

##### Multicore vs. cluster mode

MPI podporuje dva základní režimy spouštění, které se liší způsobem komunikace mezi procesy:

- **Multicore / Shared memory mode**: Všechny MPI procesy běží na jednom fyzickém stroji (jednom uzlu) a komunikují přes sdílenou paměť. MPI implementace tento fakt detekuje a používá optimalizované přenosy – data se kopírují přímo v RAM bez síťové režie. Latence je řádově mikrosekundy.
- **Cluster / Distributed memory mode**: Procesy běží na různých fyzických uzlech propojených sítí (Ethernet, InfiniBand, OmniPath). Data putují přes síťové rozhraní. Latence je řádově desítky mikrosekund až milisekundy.

!!! info "Hybridní MPI + OpenMP"
    Pro optimální využití moderních NUMA uzlů (kde jeden uzel má 64+ jader) se často kombinuje MPI a OpenMP:
    
    - **MPI** zajišťuje komunikaci **mezi uzly** (hrubá granularita).
    - **OpenMP** zajišťuje paralelismus **uvnitř jednoho uzlu** (jemná granularita) pomocí vláken.

    Každý MPI proces spustí několik OpenMP vláken. Typicky: `mpirun -np 4 --map-by node ./program`, kde každý MPI rank spustí `omp_set_num_threads(16)` pro 16 vláken.

##### Validní příjem zprávy

Aby byl příjem zprávy úspěšný, musí se **shodovat obálka** (*envelope*) zprávy s parametry volání `MPI_Recv`. Obálku tvoří tři hodnoty:

| Parametr | Význam |
|:--|:--|
| **source** | Rank odesílatele – odkud zpráva přišla. |
| **tag** | Uživatelsky definovaný štítek – slouží k rozlišení různých typů zpráv od stejného zdroje. |
| **communicator** | Komunikátor – zpráva musí být v rámci stejného komunikátoru. |

Všechny tři musí souhlasit. Pokud ne, zpráva zůstane ve frontě a čeká na odpovídající `MPI_Recv`.

!!! info "Wildcard – MPI_ANY_SOURCE a MPI_ANY_TAG"
    Příjemce nemusí znát přesný zdroj ani tag předem – může použít zástupné hodnoty:

    - `MPI_ANY_SOURCE`: Přijmu zprávu od libovolného odesílatele.
    - `MPI_ANY_TAG`: Přijmu zprávu s libovolným tagem.

    Skutečný zdroj a tag se po úspěšném příjmu dozvíme z `MPI_Status` struktury:
    ```c
    MPI_Status status;
    MPI_Recv(buf, count, MPI_INT, MPI_ANY_SOURCE, MPI_ANY_TAG, comm, &status);
    printf("Zpráva od procesu %d s tagem %d\n", status.MPI_SOURCE, status.MPI_TAG);
    ```

!!! info "MPI_Probe – zjištění velikosti zprávy před příjmem"
    Pokud neznáme velikost příchozí zprávy, můžeme ji nejdříve „prozkoumat" pomocí `MPI_Probe`:
    ```c
    MPI_Status status;
    MPI_Probe(MPI_ANY_SOURCE, MPI_ANY_TAG, MPI_COMM_WORLD, &status);
    int count;
    MPI_Get_count(&status, MPI_INT, &count);
    int* buf = malloc(count * sizeof(int));
    MPI_Recv(buf, count, MPI_INT, status.MPI_SOURCE, status.MPI_TAG, MPI_COMM_WORLD, MPI_STATUS_IGNORE);
    ```

##### Problém blokujících operací a jak je řešit

Blokující operace (`MPI_Send`, `MPI_Recv`) pozastaví volající proces, dokud není operace dokončena. To přináší dva zásadní problémy:

!!! bug "Problem 1: Deadlock (vzájemné čekání)"
    Klasický scénář – proces A posílá procesu B a zároveň B posílá A, oba pomocí blokujícího `MPI_Send`:
    ```c
    // Proces 0
    MPI_Send(data_to_1, count, MPI_INT, 1, 0, comm);
    MPI_Recv(data_from_1, count, MPI_INT, 1, 0, comm, &status);

    // Proces 1
    MPI_Send(data_to_0, count, MPI_INT, 0, 0, comm);
    MPI_Recv(data_from_0, count, MPI_INT, 0, 0, comm, &status);
    ```
    Oba procesy čekají na `MPI_Send` – deadlock. Řešení:

    - **Změnit pořadí na jedné straně**: Jeden proces nejdřív přijímá, druhý nejdřív posílá.
    - **MPI_Sendrecv**: Simultánní send a recv v jednom volání – MPI interně vyřeší pořadí.
    - **Neblokující operace** (viz níže).

!!! bug "Problem 2: Zbytečné čekání (idle time)"
    Blokující operace nutí proces čekat, i když by mohl paralelně počítat – mrhání výpočetním časem.

    **Příklad**: Proces A odesílá velkou matici procesu B a pak by mohl hned počítat další fázi.
    S `MPI_Send` čeká, s `MPI_Isend` pokračuje ihned.

###### Řešení blokujících operací

| Řešení | Popis | Kdy použít |
|:--|:--|:--|
| **MPI_Sendrecv** | Odpošle a přijme v jednom volání. MPI garantuje, že nedojde k deadlocku. | Když si dva procesy vyměňují data. |
| **Neblokující operace** (`MPI_Isend`, `MPI_Irecv`) | Iniciují komunikaci a hned vrátí řízení. Proces může paralelně počítat. | Překrytí komunikace výpočtem (*overlap*). |
| **Buffered send** (`MPI_Bsend`) | Odesílatel pošle data do explicitního bufferu a hned pokračuje. MPI buffer musí být předalokován. | Když nemůžeme změnit architekturu na neblokující, ale potřebujeme se vyhnout deadlocku. |

!!! example "Překrytí komunikace výpočtem pomocí neblokujících operací"
    ```c
    MPI_Request request;
    MPI_Isend(data, count, MPI_INT, dest, tag, comm, &request);
    // Okamžitě pokračujeme – můžeme počítat další fázi
    compute_next_phase();
    // Po dokončení výpočtu počkáme, až se data skutečně odešlou
    MPI_Wait(&request, MPI_STATUS_IGNORE);
    ```

##### Srovnání MPI s PVM

PVM (Parallel Virtual Machine) byl předchůdce MPI, který vznikl v 90. letech na Oak Ridge National Laboratory. Dnes je prakticky nahrazen MPI, ale historicky to byla první široce používaná knihovna pro distribuované výpočty.

| Vlastnost | MPI | PVM |
|:--|:--|:--|
| **Standardizace** | Formální standard (MPI Forum) – verze 1.0 (1994) až 4.0 (2021) | De facto standard podle referenční implementace. Vývoj prakticky zastaven. |
| **Paradigma** | Statické – počet procesů je dán při spuštění (`mpirun -np N`). MPI-2 přidalo dynamické procesy, ale málo používané. | Dynamické – procesy lze za běhu přidávat a odebírat. PVM samo spravuje virtuální stroj. |
| **Odolnost proti výpadkům** | Procesy jsou pevně svázané – výpadek jednoho typicky shodí celou úlohu. | Přirozeně odolnější – uzly se mohou odpojit a znovu připojit. |
| **Heterogenita** | Předává binární data – vyžaduje stejnou endianitu a reprezentaci typů. | Automaticky konvertuje mezi různými architekturami (XDR encoding). |
| **Ekosystém** | Dominantní v HPC – všechny superpočítače, vědecké knihovny (BLACS, ScaLAPACK, PETSc). | Okrajové – dnes spíše historický význam, existují gatewaye pro MPI↔PVM. |
| **Paralelní I/O** | MPI-IO – standardizované paralelní čtení/zápis (součást MPI-2). | Chybí dedikované paralelní I/O. |

!!! summary "Kdy použít MPI vs. PVM"
    Dnes je odpověď jednoduchá – MPI. PVM je historická záležitost. Důvody, proč MPI zvítězilo:

    - **Výkon**: MPI je rychlejší – méně abstrakce, přímější mapování na hardware.
    - **Ekosystém**: Všechny HPC knihovny, debuggery (TotalView, DDT) a profilery (TAU, Scalasca) cílí na MPI.
    - **Standard**: MPI standard se kontinuálně vyvíjí (MPI-4 přinesl vylepšené kolektivní operace a persistent communication).

    PVM zůstává relevantní jen v extrémně specializovaných scénářích – např. heterogenní sítě s dobrovolně připojenými uzly (podobně jako BOINC).

## Konzistenční modely

Zatímco CAP teorém říká, že si při partition musíme vybrat mezi C a A, **konzistenční modely** určují, jak silnou konzistenci systém garantuje za běžného provozu. Jsou to smlouvy mezi systémem a programátorem – „toto ti garantuju, zbytek si ošetři sám".

### Silná konzistence (Strong Consistency)

Po potvrzení zápisu každé následující čtení (odkudkoliv) vrátí hodnotu tohoto zápisu. Systém se chová, jako by existovala jediná kopie dat – ve skutečnosti ji jen dokonale simuluje pomocí konsenzus protokolů.

- **Výhody**: Intuitivní – programátor nemusí řešit nekonzistence.
- **Nevýhody**: Vysoká latence (čekání na quorum), nízká dostupnost (při partition systém odmítá zápisy).
- **Příklad**: Linearizovatelné úložiště (ZooKeeper, etcd, Consul), databáze v CP režimu.

### Sekvenční konzistence (Sequential Consistency)

Výsledek všech operací je stejný, jako by byly provedeny v nějakém sekvenčním pořadí – a operace z jednoho procesu se provedou v pořadí, v jakém byly zadány. Slabší než striktní (linearizovatelná), protože negarantuje, že ostatní procesy vidí zápis ihned.

- **Příklad**: Moderní CPU s out-of-order execution (x86 TSO model).

### Příčinná konzistence (Causal Consistency)

Pokud operace A kauzálně předchází operaci B, pak všechny procesy uvidí A před B. Pokud spolu operace kauzálně nesouvisí (jsou nezávislé), jejich pořadí může být na různých replikách různé.

- **Výhody**: Nižší latence než sekvenční – nevyžaduje globální synchronizaci.
- **Nevýhody**: Složitější na pochopení – programátor musí chápat kauzální závislosti.
- **Příklad**: COPS databáze, Apache Cassandra s `LOCAL_QUORUM` a `CL` řádkem.

### Eventualní konzistence (Eventual Consistency)

Pokud do systému nepřicházejí nové zápisy, nakonec se všechny repliky sjednotí na stejném stavu. Během replikace ale mohou různé repliky vracet různé hodnoty. Je to nejslabší model – ale nejškálovatelnější.

- **Výhody**: Nízká latence, vysoká dostupnost, horizontální škálování.
- **Nevýhody**: Klient může číst zastaralá data, konflikty (např. dva různé zápisy do stejného klíče).
- **Příklad**: DNS, DynamoDB (výchozí), Cassandra (výchozí), CouchDB.

!!! warning "Konflikty v eventualní konzistenci"
    Co se stane, když dva klienti napíší na stejný klíč na různých replikách?

    - **Last Writer Wins (LWW)**: Vyhraje poslední zápis podle timestampu. Jednoduché, ale dochází ke ztrátě dat.
    - **CRDT** (Conflict-free Replicated Data Types): Datové struktury navržené tak, aby konflikty vůbec nevznikaly (např. sčítací čítač).
    - **Application-level merge**: Aplikace dostane obě verze a musí je ručně smířit (např. DynamoDB – klient dostane obě hodnoty).

### Read-Your-Writes

Klient vždy uvidí své vlastní zápisy – i když jiné repliky ještě nemusí být aktuální. Typicky implementováno tak, že čtení po zápisu vždy jde na primární repliku.

### Monotonic Reads

Klient nikdy neuvidí starší data, než viděl předtím. Zabraňuje „cestování v čase" – klient nemůže přejít na repliku, která ještě nemá jeho poslední čtení.

### Srovnání konzistenčních modelů

| Model | Latence zápisu | Latence čtení | Dostupnost | Složitost pro programátora |
|:--|:--:|:--:|:--:|:--:|
| Silná (linearizovatelná) | Vysoká | Nízká | Nízká | Nízká (intuitivní) |
| Sekvenční | Střední | Střední | Střední | Střední |
| Příčinná | Nízká | Nízká | Střední | Vysoká |
| Eventualní | Nízká | Nízká | Vysoká | Vysoká (řešení konfliktů) |

## Asynchronní komunikace

V distribuovaných systémech je synchronní komunikace (klient čeká na odpověď) často úzkým hrdlem a zdrojem kaskádových selhání. Asynchronní komunikace odděluje odesílatele od příjemce v čase i prostoru.

### Synchronní vs. asynchronní komunikace

| Vlastnost | Synchronní | Asynchronní |
|:--|:--|:--|
| Čekání na odpověď | Blokující – volající čeká | Neblokující – volající pokračuje |
| Coupling | Těsný – oba musí být online | Volný – mohou běžet nezávisle |
| Škálovatelnost | Omezená | Vysoká |
| Odolnost | Kaskádové selhání | Izolované selhání |
| Složitost implementace | Nižší | Vyšší (korelace odpovědí, retry) |
| Příklad | HTTP REST, gRPC unary, RPC | Fronty zpráv, event-driven, WebSocket push |

### Fronty zpráv (Message Queues)

Fronta zpráv je mezivrstva mezi producentem a konzumentem, která umožňuje asynchronní komunikaci. Producent pošle zprávu do fronty a konzument si ji vyzvedne, až bude připraven.

!!! abstract "Model fronty zpráv"
    ```
    Producent → [Fronta] → Konzument
                  ↕
                Broker
    ```

    - **Producent**: Vytváří zprávy a odesílá je do fronty.
    - **Broker**: Prostředník, který řídí distribuci, perzistenci a směrování zpráv.
    - **Konzument**: Odebírá zprávy z fronty a zpracovává je.

#### Typy výměny zpráv

| Typ | Popis | Příklad použití |
|:--|:--|:--|
| **Point-to-point** | Zpráva je doručena právě jednomu konzumentovi. Fronta zprávu po zpracování smaže. | Zpracování objednávek, úlohy na pozadí |
| **Publish–Subscribe** | Zpráva je doručena všem odběratelům (*subscribers*). Každý subscriber dostane vlastní kopii. | Notifikace, auditní logy, cache invalidation |
| **Request–Reply** | Asynchronní obdoba RPC – konzument pošle odpověď do samostatné fronty. | Mikroslužby vyžadující odpověď |
| **Competing Consumers** | Více konzumentů soutěží o zprávy v jedné frontě – přirozený load balancing. | Škálování workerů |

#### Garance doručení

| Úroveň | Význam |
|:--|:--|
| **At most once** | Zpráva je doručena nejvýše jednou – může se ztratit. Nejrychlejší. |
| **At least once** | Zpráva je doručena alespoň jednou – může se duplikovat. Konzument musí být idempotentní. |
| **Exactly once** | Zpráva je doručena právě jednou – vyžaduje koordinaci (transakce, deduplikace). Nejsložitější. |

!!! example "Srovnání systémů front"
    | Nástroj | Typ | Garance | Propustnost | Typické použití |
    |:--|:--|:--|:--|:--|
    | **RabbitMQ** | Broker, AMQP | At least once / Exactly once | Střední | Task queue, mikroslužby, RPC |
    | **Apache Kafka** | Distribuovaný log | At least once / Exactly once | Extrémně vysoká | Stream processing, event sourcing, telemetrie |
    | **Redis Pub/Sub** | In-memory pub/sub | At most once | Vysoká | Real-time notifikace, chat |
    | **AWS SQS** | Managed queue | At least once | Vysoká (elastická) | Decoupling cloud aplikací |
    | **NATS** | Lightweight pub/sub | At most once / At least once | Velmi vysoká | IoT, edge computing, cloud-native |

#### Backpressure

Když konzument nestíhá zpracovávat zprávy, hrozí přetečení fronty a pád systému. Backpressure je mechanismus, kterým konzument dává najevo „zpomal, nestíhám":

- **Pull model**: Konzument si aktivně vyžádá dávku zpráv, až je připraven (např. `consumer.poll()` v Kafce).
- **Flow control**: Broker omezí producenta na základě stavu fronty.
- **Reactive Streams**: Standardizovaný protokol pro backpressure (RxJava, Project Reactor, Akka Streams).

### Událostmi řízená architektura (Event-Driven Architecture)

Namísto přímého volání služeb produkují komponenty **události** (*events*), které popisují, co se stalo. Ostatní komponenty na tyto události reagují. Klíčová je **inverze závislosti** – producent události neví, kdo ji zpracuje.

!!! abstract "Základní pojmy EDA"

    - **Událost** (*Event*): Fakt, který nastal – neměnný a minulý. Např. `OrderPlaced`, `PaymentReceived`, `UserRegistered`.
    - **Příkaz** (*Command*): Požadavek na provedení akce – může být odmítnut. Např. `PlaceOrder`, `ProcessPayment`.
    - **Producent události** (*Event Producer/Publisher*): Komponenta, která událost publikuje.
    - **Konzument události** (*Event Consumer/Subscriber*): Komponenta, která na událost reaguje.
    - **Event Broker**: Zprostředkovatel, který události přijímá, ukládá a distribuuje (Kafka, RabbitMQ, EventBridge).

!!! info "Vzory EDA"

    - **Event Notification**: Minimální událost – „stalo se to, ID = X". Konzument si dohledá detaily.
    - **Event-Carried State Transfer**: Událost nese všechna data – konzument nepotřebuje další dotazy. Větší zprávy, menší coupling.
    - **Event Sourcing**: Stav entity není uložen jako aktuální hodnota, ale jako sekvence událostí, které k němu vedly. Aktuální stav se odvodí agregací všech událostí.
    - **CQRS** (Command Query Responsibility Segregation): Oddělení zápisu (Commands) od čtení (Queries). Každá strana má vlastní model a případně i vlastní databázi.

!!! example "Příklad: Objednávka v e-shopu (Event-Driven)"

    1. Služba `OrderService` přijme HTTP požadavek `POST /orders`.
    2. Vytvoří objednávku a publikuje událost `OrderPlaced { orderId: 123, userId: 42, items: [...], total: 1500 }`.
    3. `InventoryService` rezervuje položky na skladě.
    4. `PaymentService` vytvoří platební bránu.
    5. `NotificationService` pošle potvrzovací e-mail.
    6. `AnalyticsService` aktualizuje statistiky prodeje.

    Aniž by `OrderService` věděla o existenci ostatních služeb. Každá služba se může vyvíjet, škálovat a padat nezávisle.

## Architektury paralelních systémů

### Multiprocesorové systémy

Všechna jádra sdílejí společnou fyzickou paměť. Komunikace je rychlá, ale při větším počtu jader vzniká soupeření o paměťovou sběrnici (*bus contention*).

- **UMA (Uniform Memory Access)**: Všechna jádra mají stejnou latenci přístupu do paměti. Typické pro malé SMP servery.
- **NUMA (Non-Uniform Memory Access)**: Každý procesor má vlastní „blízkou" paměť. Přístup k cizí paměti je pomalejší. Typické pro velké servery (AMD EPYC, Intel Xeon).

### Clusterové systémy

Skupina nezávislých počítačů propojených sítí, které se navenek tváří jako jeden systém.

| Typ clusteru | Účel | Příklad |
|:--|:--|:--|
| **High-Availability (HA)** | Zajištění nepřetržitého provozu – při výpadku jednoho uzlu přebírá druhý. | Pacemaker, Keepalived |
| **Load-Balancing** | Rozložení zátěže mezi více uzlů. | Nginx, HAProxy, AWS ELB |
| **High-Performance (HPC)** | Paralelní výpočty náročné na CPU. | Superpočítače, MPI clustery |
| **Storage** | Distribuované úložiště – data jsou replikována napříč uzly. | Ceph, GlusterFS, HDFS |

### Gridové systémy

Volně propojené, geograficky rozptýlené zdroje (počítače, úložiště), které spolupracují na řešení rozsáhlých problémů. Na rozdíl od clusteru nejsou uzly dedikované a jsou heterogenní.

- **Příklad**: SETI@home, Folding@home – dobrovolníci poskytují výpočetní výkon svých počítačů.

### Cloudové systémy

Abstrakce nad fyzickou infrastrukturou – výpočetní zdroje jsou poskytovány jako služba přes internet.

| Model | Co poskytuje | Příklad |
|:--|:--|:--|
| **IaaS** (Infrastructure as a Service) | Virtuální stroje, sítě, úložiště. | AWS EC2, Google Compute Engine |
| **PaaS** (Platform as a Service) | Platforma pro běh aplikací (bez správy OS). | Heroku, Google App Engine |
| **FaaS** (Function as a Service) | Spouštění jednotlivých funkcí bez správy serverů. | AWS Lambda, Cloud Functions |
| **CaaS** (Container as a Service) | Orchestrované kontejnery. | AWS ECS, Google Cloud Run |

## Granularita

Granularita popisuje **velikost jednotky práce**, která je distribuována mezi výpočetní jednotky. Ovlivňuje režii, vyvážení zátěže a celkovou efektivitu paralelního systému. Granularitu lze posuzovat podle několika os.

### Podle velikosti jednotky práce

#### Jemná granularita (Fine-Grained)

Úloha je rozdělena na **velké množství malých jednotek**. Každá jednotka práce je rychle hotová.

- **Výhody**: Lepší vyvážení zátěže, kratší čekání na dokončení poslední jednotky.
- **Nevýhody**: Vysoká režie na rozdělování, komunikaci a synchronizaci.
- **Příklad**: Zpracování jednotlivých pixelů obrázku, CUDA kernely nad maticí, actor model v Erlang/Elixir.

#### Hrubá granularita (Coarse-Grained)

Úloha je rozdělena na **malé množství velkých jednotek**. Každá jednotka pracuje dlouho samostatně.

- **Výhody**: Nízká režie, méně komunikace a synchronizace.
- **Nevýhody**: Horší vyvážení zátěže – jeden pomalý uzel zdrží celý výpočet, zatímco ostatní čekají.
- **Příklad**: Každý uzel počítá celou kapitolu simulace, MapReduce joby nad velkými bloky dat.

#### Smíšená granularita (Mixed / Hybrid)

Kombinuje oba přístupy – na vyšší úrovni hrubá, na nižší jemná. Například cluster uzlů počítá hrubé MapReduce joby, ale uvnitř každého jobu se použije SIMD vektorizace nebo GPU akcelerace.

### Podle dynamiky rozdělení

| Typ | Popis | Příklad |
|:--|:--|:--|
| **Statická** | Rozdělení práce je dané před spuštěním a nemění se. Jednoduché, ale neumí reagovat na nerovnoměrnou zátěž. | Rozdělení pole podle ranku v MPI |
| **Dynamická** | Práce se přiděluje za běhu – volné procesory si berou další jednotku z fronty. Lepší vyvážení, vyšší režie. | Work stealing v Cilk/Go, `MPI_ANY_SOURCE` |
| **Adaptivní** | Systém sám mění granularitu podle aktuální zátěže – za běhu slučuje malé jednotky nebo štěpí velké. | Adaptivní mesh refinement |

### Podle typu rozdělení

| Typ | Popis | Příklad |
|:--|:--|:--|
| **Datová** (*Data Parallelism*) | Stejná operace na různých částech dat. | SIMD, MapReduce, paralelní `for` |
| **Úlohová** (*Task Parallelism*) | Různé operace na různých datech (nebo i stejných). Každý task je jiná funkce. | Pipeline, DAG workflow |
| **Hybridní** | Kombinace obou – pipeline, kde každá fáze je datově paralelní. | MPI + OpenMP, Spark |

!!! info "Jak zvolit správnou granularitu?"
    Optimální granularita je kompromisem:

    $$\text{Efektivita} = \frac{\text{užitečná práce}}{\text{užitečná práce} + \text{režie}}$$

    Čím jemnější granularita, tím vyšší režie. Čím hrubší granularita, tím horší vyvážení zátěže. Ideální je najít bod, kde se obě křivky protínají.

## Konsenzus algoritmy

V distribuovaném systému je konsenzus dohoda mezi skupinou uzlů na jedné společné hodnotě – například: kdo je aktuální leader clusteru, zda byla transakce potvrzena, nebo která hodnota je ta správná při konfliktu replik. Konsenzus je teoreticky obtížný problém – FLP teorém (Fischer–Lynch–Paterson, 1985) dokázal, že v asynchronním systému nelze dosáhnout deterministického konsenzu, pokud může selhat byť jen jeden uzel.

!!! warning "FLP teorém – proč je konsenzus těžký"
    V asynchronním systému (kde nelze odlišit pomalý uzel od spadlého) neexistuje deterministický algoritmus, který by v konečném čase dosáhl konsenzu, pokud může selhat alespoň jeden uzel. V praxi se tento limit obchází:

    - **Timeouty** (předpokládáme synchronnost v určitých mezích).
    - **Náhodností** (randomizované algoritmy).
    - **Failure detektory** (slabší forma synchronnosti).

### Paxos

Paxos (Leslie Lamport, 1989) je rodina protokolů pro dosažení konsenzu v nespolehlivé síti. Patří k nejvlivnějším algoritmům distribuovaných systémů – prakticky všechny moderní konsenzus systémy z něj vycházejí.

!!! abstract "Role v Paxosu"

    - **Proposer**: Navrhuje hodnotu, na které se má shodnout.
    - **Acceptor**: Hlasuje o návrzích – konsenzu je dosaženo, když většina acceptorů přijme stejný návrh.
    - **Learner**: Učí se výsledek – pasivně přijímá rozhodnutí konsenzu.

!!! info "Fáze Paxosu (Basic Paxos)"

    1. **Prepare (fáze 1a–1b)**: Proposer vybere číslo návrhu $n$ a pošle `Prepare(n)` všem acceptorům. Acceptor slíbí, že už nebude akceptovat návrhy s číslem menším než $n$. Pokud už nějaký návrh akceptoval, pošle ho proposerovi jako odpověď.
    2. **Accept (fáze 2a–2b)**: Pokud proposer dostal sliby od většiny, pošle `Accept(n, v)`, kde $v$ je buď jeho hodnota, nebo hodnota z nejvyššího akceptovaného návrhu z fáze 1. Akceptor přijme, pokud neporuší svůj slib.
    3. **Learn**: Jakmile většina acceptorů akceptuje, hodnota je zvolena – konsenzus je dosažen.

!!! bug "Proč je Paxos složitý?"

    - Basic Paxos je dvoufázový a v reálném světě pomalý – vyžaduje dvě kola komunikace.
    - Při souběhu více proposerů může docházet k nekonečnému souboji (*dueling proposers*) – proposer A pošle Prepare, pak B pošle vyšší Prepare, který zruší A, atd.
    - Multi-Paxos tento problém řeší volbou **leadera** – jen leader je proposer, čímž odpadá soupeření a druhá fáze stačí jen jedna.

### Raft

Raft (Diego Ongaro, 2014) je konsenzus algoritmus navržený jako **srozumitelnější alternativa k Paxosu**. Jeho hlavním cílem je, aby ho šlo snadno pochopit, implementovat a ladit – proto je strukturovaný kolem tří jasně oddělených mechanismů.

!!! abstract "Tři klíčové mechanismy Raftu"

    1. **Volba leadera** (*Leader Election*): Uzly jsou ve třech stavech – *Leader*, *Follower*, *Candidate*. Leader pravidelně posílá heartbeat – pokud follower nedostane heartbeat do timeoutu, stane se candidatem a spustí volby. Vyhrává uzel, který získá většinu hlasů.
    2. **Replikace logu** (*Log Replication*): Leader přijímá zápisy od klientů, přidává je do svého logu a replikuje je na followery. Jakmile většina followerů potvrdí přijetí, zápis je považován za *committed* a leader ho aplikuje na stavový stroj.
    3. **Bezpečnost** (*Safety*): Pouze uzel s nejaktuálnějším logem se může stát leaderem. Leader nikdy nepřepisuje vlastní log – jen připojuje. Pokud leader spadne, nový leader má vždy všechny committed záznamy.

!!! example "Raft v praxi – ukázkový scénář"

    1. Cluster 5 uzlů. Uzel A je leader, B–E jsou followeři.
    2. Klient pošle zápis `SET x = 42` na leadera A.
    3. A přidá záznam do svého logu a pošle ho B, C, D, E.
    4. B, C odpoví OK (D, E mají pomalejší síť).
    5. A má většinu (3 z 5 včetně sebe) → zápis je *committed*. A odpoví klientovi.
    6. A oznámí followerům, že zápis je committed – aplikují ho na svůj stav.
    7. Pokud A spadne, B se stane leaderem (má aktuální log).

!!! info "Kde se Raft používá?"

    - **etcd**: Distribuované úložiště pro Kubernetes – všechny změny prochází Raftem.
    - **Consul**: Service discovery a configuration od HashiCorp.
    - **TiKV**: Distribuovaná transakční databáze (TiDB).
    - **NATS JetStream**: Streamování zpráv.
    - **CockroachDB**: Distribuovaná SQL databáze.

### Paxos vs. Raft

| Vlastnost | Paxos | Raft |
|:--|:--|:--|
| Srozumitelnost | Obtížný – mnoho variant, rozptýlené mechanismy | Snadný – jasně oddělené fáze |
| Leader | Volitelný (Multi-Paxos) | Povinný, dynamicky volený |
| Implementace | Málokdo implementuje čistý Paxos | Mnoho open-source implementací |
| Praktické nasazení | Google Chubby, Apache ZooKeeper (ZAB) | etcd, Consul, TiKV, CockroachDB |
| Replikace logu | Součást Multi-Paxos, ale ne standardní | Integrovaná, jednoduchá |

## Distribuované transakce

Distribuovaná transakce je posloupnost operací nad více nezávislými uzly nebo databázemi, která musí splňovat ACID vlastnosti – i když každý uzel drží jinou část dat. Problém: pokud jeden uzel selže uprostřed transakce, musíme se umět vrátit zpět (rollback) napříč všemi zúčastněnými uzly.

### Two-Phase Commit (2PC)

2PC je protokol, který zajišťuje, že se všechny uzly **jednomyslně shodnou** na potvrzení nebo zrušení transakce. Jeden uzel je určen jako **koordinátor**.

!!! abstract "Fáze 2PC"
    **Fáze 1 – Prepare (hlasování):**

    1. Koordinátor pošle všem participantům zprávu `PREPARE`.
    2. Každý participant provede operaci, ale ještě ji **necommituje** – jen si připraví data pro commit nebo rollback. Hlasuje `VOTE_COMMIT` nebo `VOTE_ABORT`.
    3. Pokud participant odpoví `VOTE_COMMIT`, **nesmí** už sám od sebe operaci zrušit – čeká na finální rozhodnutí od koordinátora.

    **Fáze 2 – Commit/Abort (rozhodnutí):**

    1. Koordinátor vyhodnotí hlasy:
        - Všichni `VOTE_COMMIT` → všem pošle `COMMIT`.
        - Kdokoliv `VOTE_ABORT` (nebo timeout) → všem pošle `ABORT`.
    2. Participanti provedou commit nebo rollback a potvrdí koordinátorovi dokončení (`ACK`).

!!! bug "Problémy 2PC"

    - **Blokování**: Pokud koordinátor spadne po odeslání `PREPARE`, ale před odesláním `COMMIT`/`ABORT`, participanti, kteří hlasovali `VOTE_COMMIT`, **čekají navždy** – nemohou sami rozhodnout. Tomu se říká *blocking protocol*.
    - **Single point of failure**: Koordinátor je úzké hrdlo a jediné místo selhání.
    - **Latence**: Dvě synchronní kola komunikace se všemi participanty + čekání na nejpomalejšího.
    - **V praxi**: XA standard pro distribuované transakce v relačních databázích, JTA (Java Transaction API).

### Saga

Saga je alternativa ke 2PC pro dlouho běžící transakce a mikroslužby. Namísto jednoho atomického commitu rozbíjí globální transakci na posloupnost **lokálních transakcí** – každá má vlastní commit. Pokud některá z nich selže, spustí se **kompenzační transakce** pro vrácení změn.

!!! abstract "Dva typy realizace Sagy"

    - **Choreografie** (*Choreography*): Každá lokální transakce publikuje událost, na kterou reaguje další služba v řetězci. Decentralizované – služby se domlouvají napřímo.
    - **Orchestrace** (*Orchestration*): Centrální orchestrátor řídí celou sagu – volá služby v pořadí, a pokud něco selže, volá příslušné kompenzační akce.

!!! example "Příklad Sagy – objednávka v e-shopu"

    1. `OrderService`: Vytvoř objednávku (`POST /orders`) → COMMIT ✅
    2. `PaymentService`: Strhni platbu → COMMIT ✅
    3. `InventoryService`: Rezervuj položky → **SELHÁNÍ ❌** (nedostatek skladu)
    4. **Kompenzace**:
        - `PaymentService`: Vrať platbu (kompenzační transakce)
        - `OrderService`: Zruš objednávku

    Systém se nakonec dostane do konzistentního stavu – žádná poloviční transakce.

!!! info "Saga vs. 2PC"
    | Vlastnost | 2PC | Saga |
    |:--|:--|:--|
    | Atomický commit | Ano – všichni najednou | Ne – každý commitne zvlášť |
    | Rollback | Automatický (databáze) | Manuální – kompenzační transakce |
    | Blokování | Blokující | Neblokující |
    | Izolace | Garantovaná (ACID) | Není – ostatní mohou číst mezistavy |
    | Vhodné pro | Krátké transakce, méně služeb | Dlouhé transakce, mikroslužby |
    | Příklad nástroje | XA, JTA | Axon Framework, Eventuate, Camunda |

## Flynnova klasifikace

Flynnova taxonomie (1966) je klasické rozdělení počítačových architektur podle toho, zda pracují nad jednou nebo více instrukcemi a nad jedním nebo více datovými proudy. Je to základní rámec pro pochopení paralelismu na úrovni hardware.

!!! abstract "Čtyři třídy Flynnova klasifikace"
    | Třída | Instrukční proud | Datový proud | Popis |
    |:--:|:--:|:--:|:--|
    | **SISD** | Jeden (*Single*) | Jeden (*Single*) | Klasický sekvenční procesor |
    | **SIMD** | Jeden (*Single*) | Více (*Multiple*) | Jedna instrukce operuje nad více daty najednou |
    | **MISD** | Více (*Multiple*) | Jeden (*Single*) | Různé instrukce zpracovávají stejná data |
    | **MIMD** | Více (*Multiple*) | Více (*Multiple*) | Různé instrukce nad různými daty – plně paralelní |

### SISD (Single Instruction, Single Data)

Klasický von Neumannovský počítač. V každém hodinovém cyklu se načte a vykoná právě jedna instrukce nad právě jednou datovou položkou. Žádný paralelismus na úrovni instrukcí ani dat.

- **Příklad**: Původní procesory Intel 8086, jednoduché mikrokontroléry.

!!! warning "Moderní procesory a SISD"
    Dnešní procesory (i jednojádrové) nejsou čisté SISD – používají pipelining, out-of-order execution a superskalaritu. Flynn vycházel z modelu, kde se instrukce vykonávala sekvenčně a atomicky.

### SIMD (Single Instruction, Multiple Data)

Jedna instrukce je aplikována na více datových prvků současně. Typicky se používá pro vektorové operace – sčítání dvou polí po prvcích, násobení matic, zpracování obrazu.

- **Příklad**: MMX, SSE, AVX instrukce v x86 procesorech; NEON v ARM; GPU (NVIDIA CUDA, OpenCL).

!!! example "SIMD v praxi"
    Mám dvě pole o délce 256 čísel. SISD by sčítalo prvek po prvku – 256 instrukcí sčítání. SIMD s 256-bitovým registrem (AVX-2) načte 8 čísel z každého pole najednou do vektorového registru a provede jednu instrukci vektorového sčítání – celkem jen 32 instrukcí.

### MISD (Multiple Instruction, Single Data)

Různé instrukce operují nad stejnými daty. Tato třída je spíše teoretická – v praxi nemá běžné využití.

- **Příklad**: Redundantní systémy s více výpočetními jednotkami, kde každá počítá jiným algoritmem a výsledky se porovnávají (např. avionika, řídící systémy raket). Pipeline procesor, kde každá fáze provádí jinou operaci nad daty procházejícími pipeline.

### MIMD (Multiple Instruction, Multiple Data)

Každý procesor vykonává vlastní instrukce nad vlastními daty. To je model, který odpovídá většině dnešních paralelních a distribuovaných systémů. MIMD se dále dělí podle paměťového modelu:

!!! info "Podtřídy MIMD"

    - **Multi-procesory se sdílenou pamětí**: Všechny procesory sdílejí jednu paměť. Komunikace probíhá přes čtení/zápis. Typicky SMP servery, více-jádrové procesory.
    - **Multi-počítače s distribuovanou pamětí**: Každý procesor má vlastní paměť, komunikace probíhá přes zprávy. Typicky clustery, gridy, cloudové systémy.

!!! example "Klasifikace konkrétních systémů"
    | Systém | Třída | Poznámka |
    |:--|:--:|:--|
    | Klasický jednojádrový CPU | SISD | Jedna instrukce, jedna datová položka za cyklus |
    | GPU (např. NVIDIA RTX 4090) | SIMD / SIMT | 16 384 jader, všechna provádí stejný kernel nad různými daty |
    | Více-jádrový CPU (např. AMD Ryzen) | MIMD | Každé jádro běží nezávisle se sdílenou pamětí |
    | MPI cluster | MIMD | Každý uzel běží vlastní proces, komunikuje přes zprávy |
    | Redundantní řídící systém letadla | MISD | Tři různé procesory počítají totéž, výsledky se porovnávají |

## Shrnutí pojmů

| Pojem | Klíčová myšlenka |
|:--|:--|
| Vertikální škálování | Silnější stroj – jednodušší, dražší, omezené stropem. |
| Horizontální škálování | Více strojů – levnější, odolnější, složitější na vývoj. |
| CAP teorém | V distribuovaném systému se musí vybrat mezi C a A, když dojde k partition. |
| PACELC | Rozšiřuje CAP – i bez partition existuje trade-off mezi latencí a konzistencí. |
| Konzistenční modely | Smlouva mezi systémem a programátorem – jak silnou konzistenci garantuju. |
| Sdílená paměť | Vlákna komunikují přes paměť – rychlé, ale jen na jednom stroji. |
| Distribuovaná paměť | Procesy komunikují zprávami – pomalejší, ale škáluje na tisíce strojů. |
| MPI | Standard pro message passing v HPC – komunikátory, ranky, kolektivní operace. |
| Fronty zpráv | Decoupling producenta a konzumenta – asynchronní, odolné, buffering. |
| Event-Driven | Komponenty reagují na události, nevolají se napřímo – volná vazba. |
| Granularita | Velikost jednotky práce – trade-off mezi režií a vyvážením zátěže; statická/dynamická, datová/úlohová. |
| Flynnova klasifikace | SISD, SIMD, MISD, MIMD – podle instrukčních a datových proudů. |
| Paxos | Klasický konsenzus algoritmus – Proposer, Acceptor, Learner; dvoufázový. |
| Raft | Srozumitelný konsenzus – Leader election, log replication, safety; etcd, Consul. |
| 2PC | Distribuovaná transakce – Prepare a Commit fáze; blokující, single point of failure. |
| Saga | Sekvence lokálních transakcí s kompenzacemi – neblokující, vhodná pro mikroslužby. |
