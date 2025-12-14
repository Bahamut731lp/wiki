# Řetězové zlomky
Řetězové zlomky jsou způsob, jak zapsat libovolné reálné číslo jako součet celých čísel a zlomků, které na sebe navazují. Tomuto procesu se říká **diofantická aproximace**. Každé číslo, které není celé, můžeme rozložit na celočíselnou část a zbytek, který se dá zapsat jako zlomek: 

$$\alpha = q_0 + \frac{1}{\alpha_1}$$

Pokud není $\alpha_1$ přirozené číslo, lze postup opakovat a nahradit $\alpha_1$ aproximací s novým zbytkem

$$\alpha = q_0 + \frac{1}{q_1 + \frac{1}{\alpha_2}}$$

Opakováním tohoto postupu získáváme stále přesnější hodnoty diofantické aproximace. 

$$\alpha = q_0 + \frac{1}{q_1 + \frac{1}{q_2 + \frac{1}{q_3 + \frac{1}{\ldots}}}}$$

Pokud je číslo racionální (zlomek), postup se dříve či později zastaví, protože dostaneme celé číslo. U iracionálních čísel se tento proces nezastaví a vytváří nekonečný řetězový zlomek. Jednotlivé mezivýsledky při vytváření řetězového zlomku se nazývají __přibližné zlomky__.

!!! abstract "Jednodušší zápis řetězových a přibližných zlomků"
    Protože nás v řetězových a přibližných zlomcích zajímají pouze celé části $q_i$, tak je budeme psát do seznamu pomocí písmena $\delta$. Pro $n$-tý přibližný zlomek vypadá $\delta_n$ takto: 

    $$\delta_n = [q_0, q_1, ..., q_n]$$

## Vytváření řetězových zlomků
Řetězové zlomky vytváříme pomocí [Euklidova algoritmu](./spolecny_delitel.md#eukleiduv-algoritmus).