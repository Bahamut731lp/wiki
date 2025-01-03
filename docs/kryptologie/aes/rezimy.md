# Provozní režimy
Šifra [AES](./index.md) má k dispozici různé provozní režimy, které mění způsob, jakým jsou bloky zpracovávány. Každý režim má své výhody a nevýhody a může mít vliv na bezpečnost, rychlost šifrování nebo odolnost proti chybám v přenosu.

## ECB
__Electronic Codebook__ (_ECB_) šifruje každý blok otevřeného textu samostatně, což znamená, že stejné bloky otevřeného textu vedou k identickým blokům zašifrovaného textu. To dělá ECB zranitelné vůči útokům cílící na vzory v zašifrovaném textu.

!!! quote ""
    ![ecb_mode](../../images/ecb_mode.png)

## CBC
__Cipher Block Chaining__ (_CBC_) je režim, který bloky šifruje tak, že se před zašifrováním kombinují s předchozím zašifrovaným blokem. Pro první blok se používá [inicializační vektor](inicializacni_vektor.md), protože nemá žádný předchozí blok, na který by mohl "navázat". Tento režim je bezpečnější než [ECB](#ecb), protože bloky zašifrovaného textu již nejsou nezávislé. To ovšem přináší i nevýhody, jako je propagace chyby nebo nemožnost paralelního šifrování.

## CFB
__Cipher Feedback__ (_CFB_) je režim, který je velmi podobný [režimu CBC](#cbc), ale XOR probíhá až po šifrování bloku.

## OFB
__Output Feedback__ (_OFB_) je režim, který z blokové šifry dělá šifru proudovou. Šifrování probíhá pouhým xorováním otevřeného bloku s heslem, které je v každém kroku zašifrováno použitou blokovou šifrou. První blok hesla je získán zašifrováním inicializačního vektoru. 

## CTR
__Counter Mode__ (_CTR_) je režim, který také převádí blokovou šifru na šifru proudovou. Heslo, se kterým se blok otevřeného textu xoruje, je však získáno zašifrováním čítače, který se každou iteraci zvětšuje o pevně danou hodnotu, zpravidla o 1. Obsah čítače je opět před šifrováním nastaven inicializačním vektorem.