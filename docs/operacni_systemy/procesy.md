# Procesy
__Proces__ je konkrétní spuštěný program, jenž má přidělen prostor v operační paměti. Má zde svůj kód a všechna svá data. Z jednoho programu lze spustit více různých procesů.

!!! info "Životní cyklus procesu"
    ```mermaid
    stateDiagram-v2
        direction LR
        New --> Ready : Admitted
        Ready --> Running : Interrupt
        Running --> Waiting : I/O or Event Wait
        Waiting --> Ready : I/O or Event Complete
        Ready --> Running : Scheduler Dispatch
        Running --> Terminated : Exit
        Terminated --> [*]
    ```

Každý proces má přiřazený _Process Identifier_ (PID). Jedná se o číslo, které jednoznačně identifikuje proces v rámci operačního systému. Toto číslo je uloženo v části paměti, kde si operační systém vede informace o jednotlivých procesech. Tento záznam, ve kterém je PID a další informace o procesu, se nazývá _process control block_, neboli PCB.

|Stav|Popis|
|:--|:--|
|__Starting__|Právě bylo požádáno o spuštění procesu a probíhá kopírování dat z úložiště do paměti. Jádro procesu přidělí PID, vytvoří si jeho PCB a připraví nastavení procesoru. Spouštění procesu může chvíli trvat, je-li proces velký.|
|__Ready__|Proces stojí ve frontě a čeká na přidělení prostředků.|
|__Running__|Procesu byl přidělen procesorový čas a je vykonáván jeho kód.|
|__Blocked__|Proces požádal o nějakou operaci, jejíž vykonání vyžaduje čas. Typicky se jednalo o požadavek o přístup k nějakému zařízení (tzv. požadavek na I/O).|
|__Swapped__|Data procesu jsou přesunuta z operační paměti do úložiště. Stalo se to proto, že systému dochází operační paměť a je nutné ji uvolnit pro jiné procesy.|
|__Zombie__|Proces je vyřazen z fronty čekající na procesor, ale nebude zahájeno mazání jeho dat. Čeká se na další pokyn.|
|__Terminated__|Bylo požádáno o ukončení procesu. Odkaz na proces je odstraněn z fronty procesů čekajících na procesor, ale v paměti jsou stále data procesu, která musí být smazána. Proces tedy ještě existuje, ale už nebude spouštěn.|
