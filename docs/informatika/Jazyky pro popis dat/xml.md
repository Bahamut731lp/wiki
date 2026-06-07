# XML

XML (eXtensible Markup Language) je značkovací jazyk navržený pro ukládání a přenos strukturovaných dat. Je čitelný pro člověka i stroj, rozšiřitelný, platformově nezávislý a od roku 1998 standardizovaný konsorciem W3C. Na rozdíl od HTML, které popisuje **jak data zobrazit**, XML popisuje **co data znamenají**.

!!! abstract "Proč XML?"

    - **Samo-popisné** – značky nesou sémantický význam, dokument je srozumitelný bez externí dokumentace.
    - **Striktní syntaxe** – chybný dokument parser odmítne (na rozdíl od prohlížečů, které opravují rozbité HTML).
    - **Rozšiřitelnost** – lze definovat vlastní značky a struktury pro libovolnou doménu.
    - **Oddělení dat a prezentace** – data v XML lze transformovat do HTML, PDF, JSON nebo libovolného jiného formátu.
    - **Ekosystém** – XPath, XSLT, XSD, XQuery, DOM, SAX – bohatá sada navazujících standardů.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<knihovna>
    <kniha isbn="978-80-251-3805-7">
        <nazev>Programování v C++</nazev>
        <autor>Miroslav Virius</autor>
        <rok>2013</rok>
        <cena mena="CZK">490</cena>
    </kniha>
    <kniha isbn="978-80-247-3685-3">
        <nazev>Moderní programování</nazev>
        <autor>Radek Vystavěl</autor>
        <rok>2010</rok>
        <cena mena="CZK">350</cena>
    </kniha>
</knihovna>
```

## Základní principy a pravidla

XML dokument musí splňovat striktní syntaktická pravidla. Pokud je splňuje, nazývá se **správně strukturovaný** (*well-formed*). Pokud navíc odpovídá definovanému schématu (DTD nebo XSD), je **validní**.

!!! abstract "Pravidla well-formed XML dokumentu"

    1. **Právě jeden kořenový element** – celý dokument je uzavřen v jediném kořenovém elementu.
    2. **Všechny elementy jsou uzavřené** – každý otevírací tag musí mít odpovídající zavírací: `<nazev>…</nazev>` nebo self-closing: `<br/>`.
    3. **Správné vnořování** – elementy se nesmí křížit. `<a><b></b></a>` je správně, `<a><b></a></b>` je chyba.
    4. **Hodnoty atributů v uvozovkách** – `<kniha isbn="123">`, nikoliv `<kniha isbn=123>`.
    5. **Case-sensitive** – `<Nazev>` a `<nazev>` jsou různé elementy.
    6. **Speciální znaky escapované** – `<` → `&lt;`, `>` → `&gt;`, `&` → `&amp;`, `"` → `&quot;`, `'` → `&apos;`.
    7. **Deklarace na začátku** – `<?xml version="1.0" encoding="UTF-8"?>` jako první řádek.

!!! bug "Časté chyby"

    - Zapomenutý zavírací tag – `<nazev>Programování` bez `</nazev>`.
    - Neescapované `&` v textu – `"Firma A & B"` → musí být `"Firma A &amp; B"`.
    - Křížící se elementy – `<a><b>text</a></b>`.

### Definice XML jazyka

XML samo o sobě je meta-jazyk – definice konkrétního XML jazyka (slovníku) se provádí pomocí **schématu**:

| Způsob definice | Popis | Příklad |
|:--|:--|:--|
| **DTD** (Document Type Definition) | Starší, jednodušší – definuje povolené elementy, atributy a jejich strukturu. Není v XML syntaxi, nepodporuje datové typy ani namespaces. | `<!ELEMENT kniha (nazev, autor, rok, cena)>` |
| **XSD** (XML Schema Definition) | Modernější – v XML syntaxi, podporuje datové typy (`xs:int`, `xs:string`, `xs:date`), namespaces, restrikce, rozsahy. Doporučený standard W3C. | `<xs:element name="rok" type="xs:int"/>` |

## Validace XML dokumentu

Validace ověřuje, zda dokument odpovídá definovanému schématu – tedy zda obsahuje správné elementy ve správném pořadí, se správnými atributy a hodnotami.

### Validace pomocí DTD

DTD lze zapsat **interně** (přímo v XML dokumentu) nebo **externě** (v samostatném souboru):

```xml
<!-- Interní DTD -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE knihovna [
    <!ELEMENT knihovna (kniha+)>
    <!ELEMENT kniha (nazev, autor, rok, cena)>
    <!ELEMENT nazev (#PCDATA)>
    <!ELEMENT autor (#PCDATA)>
    <!ELEMENT rok (#PCDATA)>
    <!ELEMENT cena (#PCDATA)>
    <!ATTLIST kniha isbn CDATA #REQUIRED>
    <!ATTLIST cena mena CDATA #IMPLIED>
]>
<knihovna>
    <kniha isbn="123">
        <nazev>XML v praxi</nazev>
        <autor>Jan Novák</autor>
        <rok>2024</rok>
        <cena mena="CZK">299</cena>
    </kniha>
</knihovna>
```

!!! info "Význam DTD konstrukcí"
    | Konstrukce | Význam |
    |:--|:--|
    | `(#PCDATA)` | Parsed Character Data – textový obsah. |
    | `kniha+` | Jeden nebo více elementů `kniha`. |
    | `kniha*` | Nula nebo více. |
    | `kniha?` | Nula nebo jeden (volitelný). |
    | `#REQUIRED` | Atribut je povinný. |
    | `#IMPLIED` | Atribut je volitelný. |

### Validace pomocí XSD

XSD je mocnější alternativou DTD – je samo o sobě XML dokument a podporuje datové typy:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="knihovna">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="kniha" maxOccurs="unbounded">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="nazev" type="xs:string"/>
                            <xs:element name="autor" type="xs:string"/>
                            <xs:element name="rok" type="xs:int"/>
                            <xs:element name="cena">
                                <xs:complexType>
                                    <xs:simpleContent>
                                        <xs:extension base="xs:decimal">
                                            <xs:attribute name="mena" type="xs:string" default="CZK"/>
                                        </xs:extension>
                                    </xs:simpleContent>
                                </xs:complexType>
                            </xs:element>
                        </xs:sequence>
                        <xs:attribute name="isbn" type="xs:string" use="required"/>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

!!! info "Klíčové XSD konstrukce"
    | Konstrukce | Význam |
    |:--|:--|
    | `xs:element` | Definuje element. |
    | `xs:attribute` | Definuje atribut elementu. |
    | `xs:complexType` | Element obsahuje další elementy nebo atributy. |
    | `xs:simpleType` | Element obsahuje jen textovou hodnotu. |
    | `xs:sequence` | Potomci musí být v daném pořadí. |
    | `xs:choice` | Právě jeden z alternativních potomků. |
    | `xs:restriction` | Omezuje hodnotu (např. `minInclusive`, `maxLength`, `pattern`). |
    | `use="required"` | Atribut je povinný. |

## Strom dokumentu

Každý XML dokument lze reprezentovat jako **strom** – hierarchickou strukturu uzlů, kde kořenem je dokument a potomky jsou elementy, atributy, textové a komentářové uzly. Tato stromová reprezentace je základem pro všechny navazující technologie (XPath, XSLT, DOM).

!!! abstract "Typy uzlů v XML stromu"
    | Typ uzlu | Popis | Příklad |
    |:--|:--|:--|
    | **Document** | Kořen stromu – reprezentuje celý XML dokument. | `/` |
    | **Element** | Jeden XML element – může mít potomky a atributy. | `<kniha>` |
    | **Attribute** | Atribut elementu – v XPathu je to uzel, ale není potomkem elementu. | `isbn="123"` |
    | **Text** | Textový obsah elementu. | `"Programování v C++"` |
    | **Comment** | Komentář `<!-- ... -->`. | `<!-- TODO -->` |
    | **Processing Instruction** | Instrukce pro zpracování. | `<?xml-stylesheet ...?>` |

## XPath

XPath (XML Path Language) je dotazovací jazyk pro výběr uzlů z XML dokumentu. Je základem pro XSLT, XQuery a mnoho XML knihoven. XPath výraz se vyhodnotí a vrátí **množinu uzlů** splňujících cestu.

### Základní konstrukce XPath

#### Cesta (Path)

Cesta určuje, jak procházet stromem od kořene k cílovým uzlům. Stejně jako cesta v souborovém systému používá lomítka:

| Výraz | Význam | Příklad |
|:--|:--|:--|
| `/` | Absolutní cesta – od kořene dokumentu. | `/knihovna/kniha` – všechny `kniha` přímo pod kořenem. |
| `//` | Relativní cesta – kdekoliv v dokumentu. | `//nazev` – všechny elementy `nazev` kdekoliv. |
| `.` | Aktuální uzel (kontext). | `.` |
| `..` | Rodičovský uzel. | `../autor` – sourozenecký element `autor`. |
| `*` | Libovolný element (wildcard). | `/knihovna/*` – všechny přímé potomky `knihovna`. |

#### Krok (Step)

Každý krok XPath výrazu má strukturu:

$$\text{osa}::\text{test\_uzlu}[\text{podmínka}]$$

!!! example "Příklady kroků"

    - `child::kniha` – potomci pojmenovaní `kniha`.
    - `attribute::isbn` – atribut `isbn`.
    - `child::kniha[1]` – první potomek `kniha` (indexováno od 1!).

#### Osy (Axes)

Osa určuje **směr procházení** stromu a **vztah** k aktuálnímu uzlu:

| Osa | Význam | Zkrácený zápis |
|:--|:--|:--|
| `child` | Přímí potomci aktuálního uzlu. | *(výchozí – lze vynechat)* |
| `parent` | Rodič aktuálního uzlu. | `..` |
| `self` | Aktuální uzel sám. | `.` |
| `ancestor` | Všichni předci (rodič, prarodič, …) až ke kořeni. | — |
| `ancestor-or-self` | Předci + aktuální uzel. | — |
| `descendant` | Všichni potomci (děti, vnoučata, …). | `//` (při použití na začátku výrazu) |
| `descendant-or-self` | Potomci + aktuální uzel. | `//` (uvnitř výrazu) |
| `following-sibling` | Následující sourozenci (ti za aktuálním uzlem). | — |
| `preceding-sibling` | Předcházející sourozenci (ti před aktuálním uzlem). | — |
| `following` | Všechny uzly za aktuálním v dokumentovém pořadí. | — |
| `preceding` | Všechny uzly před aktuálním v dokumentovém pořadí. | — |
| `attribute` | Atributy aktuálního uzlu. | `@` |

!!! example "Příklady os"
    ```xpath
    /knihovna/kniha[1]/following-sibling::*    -- všechny sourozence za první knihou
    //cena/ancestor::kniha                      -- element kniha, který je předkem ceny
    //kniha/attribute::isbn                     -- všechny isbn atributy knih
    ```

#### Podmínka (Predicate)

Podmínka v hranatých závorkách filtruje uzly podle zadaného kritéria:

| Typ podmínky | Příklad | Význam |
|:--|:--|:--|
| **Index** | `//kniha[1]` | První kniha v dokumentu. |
| **Index** | `//kniha[last()]` | Poslední kniha. |
| **Hodnota atributu** | `//kniha[@isbn='123']` | Kniha s ISBN 123. |
| **Existence atributu** | `//cena[@mena]` | Cena, která má atribut `mena`. |
| **Hodnota elementu** | `//kniha[rok > 2010]` | Knihy s rokem po 2010. |
| **Textový obsah** | `//kniha[nazev = 'XML v praxi']` | Kniha s přesným názvem. |
| **Funkce** | `//kniha[contains(nazev, 'XML')]` | Kniha, jejíž název obsahuje „XML". |
| **Funkce** | `//kniha[starts-with(nazev, 'Program')]` | Název začíná na „Program". |
| **Počet potomků** | `//kniha[count(*) > 3]` | Kniha s více než 3 potomky. |
| **Logické operátory** | `//kniha[rok >= 2010 and cena < 500]` | Kombinace podmínek. |

## XSLT transformace

XSLT (eXtensible Stylesheet Language Transformations) je jazyk pro **transformaci XML dokumentů** do jiných formátů – typicky HTML, jiného XML, prostého textu nebo PDF. XSLT samo je XML – šablona je validní XML dokument.

!!! abstract "Jak XSLT funguje"

    1. XSLT procesor načte zdrojový XML dokument a XSLT šablonu (*stylesheet*).
    2. Procesor prochází zdrojový strom a hledá uzly, které odpovídají šablonám.
    3. Když najde shodu, vykoná instrukce v šabloně a vygeneruje výstupní fragment.
    4. Výstupní fragmenty se skládají do výsledného dokumentu.

### Šablony (Templates)

Základní stavební jednotkou XSLT je **šablona** – element `<xsl:template>`, který specifikuje, jaké uzly zpracovat a co na jejich místě vygenerovat. Atribut `match` obsahuje **XPath výraz**, který určuje, na které uzly se šablona aplikuje.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <!-- Šablona pro kořen dokumentu -->
    <xsl:template match="/">
        <html>
            <head><title>Seznam knih</title></head>
            <body>
                <h1>Knihovna</h1>
                <xsl:apply-templates select="knihovna/kniha"/>
            </body>
        </html>
    </xsl:template>

    <!-- Šablona pro element kniha -->
    <xsl:template match="kniha">
        <div class="kniha">
            <h2><xsl:value-of select="nazev"/></h2>
            <p>Autor: <strong><xsl:value-of select="autor"/></strong></p>
            <p>Rok: <xsl:value-of select="rok"/></p>
            <p>Cena: <xsl:value-of select="cena"/> <xsl:value-of select="cena/@mena"/></p>
        </div>
    </xsl:template>

</xsl:stylesheet>
```

!!! info "Klíčové XSLT instrukce"
    | Instrukce | Význam |
    |:--|:--|
    | `<xsl:template match="XPath">` | Definuje šablonu pro uzly odpovídající XPath výrazu. |
    | `<xsl:apply-templates select="XPath"/>` | Aplikuje šablony na vybrané potomky – rekurzivně zpracuje další uzly. |
    | `<xsl:value-of select="XPath"/>` | Vloží textovou hodnotu vybraného uzlu. |
    | `<xsl:for-each select="XPath">` | Iteruje přes množinu uzlů – ekvivalent cyklu. |
    | `<xsl:if test="podmínka">` | Podmíněné zpracování – bez větve else. |
    | `<xsl:choose> / <xsl:when> / <xsl:otherwise>` | Vícecestné větvení – ekvivalent switch/if-elseif-else. |
    | `<xsl:sort select="XPath"/>` | Řadí uzly před zpracováním. |
    | `<xsl:element name="jmeno">` | Dynamicky vytvoří element se zadaným názvem. |
    | `<xsl:attribute name="jmeno">` | Vytvoří atribut pro rodičovský element. |
    | `<xsl:text>` | Vloží prostý text (zachovává bílé znaky). |

### Vytváření prvků a atributů

XSLT nabízí dva způsoby, jak generovat výstupní elementy a atributy:

1. **Literály** (přímé zapsání): Výstupní XML/HTML se zapíše přímo do šablony – XSLT procesor ho zkopíruje do výstupu.
2. **Instrukce** (`<xsl:element>`, `<xsl:attribute>`): Umožňují dynamicky generovat názvy a hodnoty na základě dat ze zdrojového dokumentu.

```xml
<!-- Literální vytvoření – jednodušší, když známe názvy předem -->
<xsl:template match="kniha">
    <div class="kniha">
        <h2><xsl:value-of select="nazev"/></h2>
    </div>
</xsl:template>

<!-- Dynamické vytvoření – název elementu závisí na datech -->
<xsl:template match="kniha">
    <xsl:element name="{concat('kniha-', @isbn)}">
        <xsl:attribute name="rok">
            <xsl:value-of select="rok"/>
        </xsl:attribute>
        <xsl:value-of select="nazev"/>
    </xsl:element>
</xsl:template>
<!-- Výstup: <kniha-978-80-251-3805-7 rok="2013">Programování v C++</kniha-978-80-251-3805-7> -->
```

!!! tip "Attribute Value Templates (AVT)"
    Složené závorky `{}` uvnitř atributových hodnot umožňují vkládat XPath výrazy přímo do literálních atributů – bez nutnosti `<xsl:attribute>`:

    ```xml
    <a href="kniha.php?id={@isbn}"><xsl:value-of select="nazev"/></a>
    ```

### Využívání hodnot z dokumentu

Hodnoty ze zdrojového XML se do výstupu dostávají primárně pomocí `<xsl:value-of>`, ale XSLT nabízí i pokročilejší mechanismy:

```xml
<xsl:template match="knihovna">
    <html>
        <body>
            <h1>Souhrn knihovny</h1>
            <p>Celkem knih: <xsl:value-of select="count(kniha)"/></p>
            <p>Průměrný rok: <xsl:value-of select="sum(kniha/rok) div count(kniha)"/></p>

            <!-- Podmíněné zpracování -->
            <xsl:for-each select="kniha">
                <xsl:sort select="rok" order="ascending"/>

                <!-- Vícecestné větvení -->
                <xsl:choose>
                    <xsl:when test="cena &lt; 300">
                        <div class="levna"><xsl:value-of select="nazev"/></div>
                    </xsl:when>
                    <xsl:when test="cena &lt; 500">
                        <div class="stredni"><xsl:value-of select="nazev"/></div>
                    </xsl:when>
                    <xsl:otherwise>
                        <div class="draha"><xsl:value-of select="nazev"/></div>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:for-each>
        </body>
    </html>
</xsl:template>
```

!!! info "XPath funkce dostupné v XSLT"
    | Funkce | Příklad | Význam |
    |:--|:--|:--|
    | `count()` | `count(//kniha)` | Počet uzlů v množině. |
    | `sum()` | `sum(//cena)` | Součet číselných hodnot. |
    | `concat()` | `concat(a, ' ', b)` | Spojení řetězců. |
    | `contains()` | `contains(nazev, 'XML')` | Obsahuje řetězec podřetězec? |
    | `starts-with()` | `starts-with(@isbn, '978')` | Začíná řetězcem? |
    | `substring()` | `substring(nazev, 1, 10)` | Podřetězec od pozice. |
    | `string-length()` | `string-length(nazev)` | Délka řetězce. |
    | `normalize-space()` | `normalize-space(text())` | Odstraní přebytečné mezery. |
    | `not()` | `not(@isbn)` | Logická negace. |
    | `position()` | `position() = 1` | Pozice aktuálního uzlu v kontextu. |
    | `last()` | `last()` | Index posledního uzlu. |

### Předávání parametrů do šablony

Šablony mohou přijímat parametry – to umožňuje parametrizovat transformaci bez změny šablony:

```xml
<xsl:template match="kniha">
    <xsl:param name="zvýrazni" select="false()"/>
    <xsl:if test="$zvyrazni">
        <strong><xsl:value-of select="nazev"/></strong>
    </xsl:if>
    <xsl:if test="not($zvyrazni)">
        <xsl:value-of select="nazev"/>
    </xsl:if>
</xsl:template>

<!-- Volání s parametrem -->
<xsl:apply-templates select="kniha[rok > 2010]">
    <xsl:with-param name="zvyrazni" select="true()"/>
</xsl:apply-templates>
```
