# Databázové systémy
Databázové systémy jsou systémy, které poskytují efektivní, spolehlivé, praktické a bezpečné úložiště a přístup k obrovskému množství perzistentních dat pro více uživatelů. Databázový systém tak vytváří mezivrstvu pro přístup a manipulaci s daty.

- Databáze (DB) definuje data a jejich ukládání
- Systém řízení báze dat (DBMS) poskytuje kontrolu nad databází

## Ukládání dat přímo na disk
Předstame si aplikaci, která nějakým způsobem pracuje s perzistentními[^1] [[Data a informace|daty]].

Nejjednoduším způsobem pro ukládání dat je ukládání do [[Soubor|souborů]]. Každá aplikace si následně řídí a spravuje vlastní data a jejich transformaci na [[Data a informace|informace]].

!!! warning "Problémy s používáním souborového systému"
    Tím, že si aplikace spravuje data sama, musí zajistit, že při jejich zpracování nedojde k problémům, jako je
    
    !!! important "Izolace dat"
        Při rozdělení dat do více souborů musí aplikace synchronizovat jejich zpracování, nebo trpět na dlouhou dobu čtení jednoho masivního souboru.

    !!! important "Duplicita a redundance"
        Při použití více souborů musíme zajistit, že se data nebudou v souborech opakovat, jinak by zbytečně zabíraly více místa, než je potřeba.

    !!! bug "Nekonzistence"
        Pokud máme stejná data ve více souborech, musíme zajistit, že budou napříč soubory stejná, aby nedošlo ke sporu

    !!! bug "Neflexibilita struktury"
        V případě, kdy bychom chtěli měnit strukturu souborů, museli bychom zajistit tento přechod ve všech aplikacích a přístupech

    !!! important "Zajištění omezení přístupu"
        Při práci se soubory musí aplikace zajistit integritu při několikanásobném přístupu k jednomu souboru a přístupu vícero uživatelů, zároveň by musela ošetřovat přístupová práva.

Jako řešení těchto problémů vznikly [[Databázové systémy]]