# XTS
__XEX-based tweaked-codebook mode with ciphertext stealing__ (zkráceně XTS) je nadstavbou nad režimem XEX, která používá dva klíče – jeden slouží k šifrování bloků a druhý k šifrování tweaku. Tento tweak je upraven Galoisovou polynomickou funkcí a pomocí operace XOR zkombinován s otevřeným i šifrovaným textem. Použití takto definovaného tweaku umožňuje vytvoření unikátního šifrovaného textu pro každý blok bez použití inicializačních vektorů a řetězení, což je v případě šifrování disků výhodné, protože potřebujeme být schopní číst a dešifrovat jednotlivé bloky a sektory nahodile.

!!! quote ""
    ![xts_mode](../images/xts.png)