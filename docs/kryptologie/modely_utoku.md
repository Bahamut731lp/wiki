# Modely útoků na šifru
Útočník se snaží získat původní zprávu (plaintext) nebo klíč použitý k šifrování. Různé modely útoků definují, jaké informace má útočník k dispozici:

- __Útok hrubou silou (brute force)__
    - Útočník zkouší všechny možné klíče, dokud nenajde ten správný. 
    - Cílem je odvodit klíč nebo způsob, jakým šifra funguje.
    - Odolnost závisí na délce klíče – čím delší klíč, tím je útok neproveditelnější.
- __Útok se známým ciphertextem (known-ciphertext attack)__
    - Útočník má přístup pouze k zašifrované zprávě (ciphertextu).
    - Využívá statistických vlastností zašifrované zprávy a hledání vzorů
- __Útok se známým plaintextem (known-plaintext attack)__
    - Útočník má přístup k páru otevřeného textu a odpovídajícího šifrovaného textu.
    - Analýzou těchto párů se snaží odhalit klíč nebo vzor, který by umožnil dešifrování dalších zpráv.
- __Útok se zvoleným plaintextem (chosen-plaintext attack)__ 
    - Útočník může zvolit specifický otevřený text a získat jeho šifrovanou verzi.
    - Tato schopnost mu umožňuje analyzovat, jak šifra reaguje na různé vstupy, a potenciálně odhalit slabiny v šifrovacím algoritmu.
- __Útok se zvoleným ciphertextem (chosen-ciphertext attack)__
    - Útočník má možnost dešifrovat vybrané šifrované texty a zkoumá, jaký otevřený text jim odpovídá.
    - Tento model útoku je zvláště relevantní u asymetrických šifer, kde může útočník využít veřejný klíč k šifrování zpráv a analyzovat jejich dešifrování.
- __Útok bočními kanály (side-channel attack)__
    - Útočník využívá fyzické vlastnosti šifrovacího zařízení, jako jsou časové zpoždění, spotřeba energie nebo elektromagnetické záření.
    - Nejčastěji čtení uložených klíčů v operační paměti systému
