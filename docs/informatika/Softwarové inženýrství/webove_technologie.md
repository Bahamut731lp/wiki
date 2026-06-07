# Webové technologie

## Protokoly

Síťový protokol je sada pravidel, která určují, jak spolu zařízení v síti komunikují. Webové protokoly tvoří páteř internetu – bez nich by prohlížeč nevěděl, jak si říct serveru o stránku, jak ji bezpečně přenést, ani jak udržet obousměrnou komunikaci v reálném čase.

### HTTP

HTTP (HyperText Transfer Protocol) je bezstavový protokol na úrovni aplikační vrstvy [TCP/IP modelu](../Počítačové%20sítě/). Slouží k přenosu hypertextových dokumentů (HTML, CSS, JS, obrázky, JSON, XML a další data) mezi klientem (typicky prohlížeč) a serverem. HTTP funguje na principu **požadavek–odpověď**: klient pošle požadavek a server na něj odpoví.

!!! info "Struktura HTTP zprávy"
    Každá HTTP zpráva (požadavek i odpověď) se skládá ze tří částí:

    1. **Startovací řádek** – u požadavku obsahuje metodu, cestu a verzi HTTP; u odpovědi verzi a stavový kód.
    2. **Hlavičky** (*headers*) – dvojice `Klíč: Hodnota` nesoucí metadata (typ obsahu, délka, cookies, autentizace…).
    3. **Tělo** (*body*) – volitelná část obsahující samotná data (HTML stránku, JSON, soubor…), oddělená prázdným řádkem od hlaviček.

!!! example "Příklad HTTP požadavku a odpovědi"
    **Požadavek:**
    ```http
    GET /api/user?id=42 HTTP/1.1
    Host: example.com
    Accept: application/json
    Cookie: session=abc123
    ```

    **Odpověď:**
    ```http
    HTTP/1.1 200 OK
    Content-Type: application/json
    Set-Cookie: session=xyz789; HttpOnly; Secure
    Content-Length: 85

    {"id": 42, "name": "Jan Novák", "email": "jan@example.com"}
    ```

#### HTTP metody

HTTP metody (někdy nazývané *slovesa*) říkají serveru, jakou operaci chce klient s daným zdrojem provést.

| Metoda | Význam | Bezpečná | Idempotentní |
|:--:|:--|:--:|:--:|
| **GET** | Načtení zdroje (pouze čtení). | ✅ | ✅ |
| **HEAD** | Stejně jako GET, ale bez těla – vrací jen hlavičky. | ✅ | ✅ |
| **OPTIONS** | Dotaz na podporované metody daného endpointu. | ✅ | ✅ |
| **POST** | Vytvoření nového zdroje nebo odeslání dat ke zpracování. | ❌ | ❌ |
| **PUT** | Nahrazení nebo vytvoření zdroje (celý objekt). | ❌ | ✅ |
| **PATCH** | Částečná úprava existujícího zdroje. | ❌ | ❌ |
| **DELETE** | Smazání zdroje. | ❌ | ✅ |
| **TRACE** | Zpětné zrcadlení požadavku (diagnostika). | – | – |
| **CONNECT** | Vytvoření tunelu (používá se u proxy). | – | – |

!!! info "Idempotence vs. bezpečnost"
    - **Bezpečná metoda** nesmí měnit stav serveru – slouží jen ke čtení.
    - **Idempotentní metoda** znamená, že opakované provedení stejného požadavku má vždy stejný výsledek jako provedení jednoho. Např. `DELETE /user/42` podruhé jen vrátí `404`, ale nezpůsobí chybu.

#### Stavové kódy

Stavový kód je tříciferné číslo, které server vrací jako součást odpovědi. První cifra určuje kategorii:

| Kódy | Kategorie | Význam |
|:--:|:--|:--|
| **1xx** | Informační | Požadavek přijat, zpracovává se. |
| **2xx** | Úspěch | Požadavek byl úspěšný. |
| **3xx** | Přesměrování | Klient musí provést další akci (např. přejít na jiné URL). |
| **4xx** | Chyba klienta | Klient poslal chybný požadavek. |
| **5xx** | Chyba serveru | Server selhal při zpracování platného požadavku. |

!!! example "Nejpoužívanější stavové kódy"
    - **200 OK** – Požadavek proběhl úspěšně.
    - **201 Created** – Zdroj byl úspěšně vytvořen (typicky po POST).
    - **204 No Content** – Požadavek úspěšný, ale odpověď nemá tělo.
    - **301 Moved Permanently** – Zdroj byl trvale přesunut na jiné URL.
    - **302 Found** – Zdroj byl dočasně přesunut na jiné URL.
    - **304 Not Modified** – Zdroj se od posledního požadavku nezměnil (cache).
    - **400 Bad Request** – Server nerozumí požadavku (špatná syntaxe).
    - **401 Unauthorized** – Chybí nebo je neplatná autentizace.
    - **403 Forbidden** – Autentizace proběhla, ale přístup je odepřen.
    - **404 Not Found** – Požadovaný zdroj neexistuje.
    - **405 Method Not Allowed** – Metoda není pro daný endpoint povolená.
    - **409 Conflict** – Konflikt se současným stavem zdroje.
    - **418 I'm a teapot** – Server odmítá uvařit kávu, protože je konvice na čaj (aprílový vtípek z RFC 2324).
    - **429 Too Many Requests** – Překročen limit počtu požadavků (rate limiting).
    - **500 Internal Server Error** – Obecná chyba serveru.
    - **502 Bad Gateway** – Chybná odpověď od nadřazeného serveru.
    - **503 Service Unavailable** – Služba je dočasně nedostupná.

#### Verze HTTP

HTTP protokol prošel za dobu své existence několika zásadními revizemi. Každá verze přinesla změny ve výkonu, způsobu navazování spojení a efektivitě přenosu dat.

!!! abstract "Porovnání verzí HTTP"
    | Vlastnost | HTTP/0.9 | HTTP/1.0 | HTTP/1.1 | HTTP/2 | HTTP/3 |
    |:--|:--:|:--:|:--:|:--:|:--:|
    | Rok | 1991 | 1996 | 1997 | 2015 | 2022 |
    | RFC | – | 1945 | 2068/2616 | 7540 | 9114 |
    | Hlavičky | ❌ | ✅ | ✅ | ✅ (HPACK) | ✅ (QPACK) |
    | Stavové kódy | ❌ | ✅ | ✅ | ✅ | ✅ |
    | Trvalé spojení | ❌ | ❌ (volitelně) | ✅ (výchozí) | ✅ | ✅ |
    | Multiplexing | ❌ | ❌ | ❌ | ✅ | ✅ |
    | Server push | ❌ | ❌ | ❌ | ✅ | ✅ |
    | Transportní vrstva | TCP | TCP | TCP | TCP | QUIC (UDP) |
    | Šifrování | ❌ | ❌ | Volitelné | Nepovinné (de facto TLS 1.2+) | Povinné (TLS 1.3) |

##### HTTP/0.9 (1991)
Původní protokol navržený Timem Berners-Leem. Extrémně jednoduchý – podporoval pouze metodu `GET`, neobsahoval hlavičky ani stavové kódy. Server po přijetí požadavku odpověděl čistě HTML obsahem a spojení ihned uzavřel.

```http
GET /index.html
```

Odpovědí bylo přímo HTML – bez jakýchkoliv metadat. Pro tehdejší potřeby sdílení statických dokumentů to stačilo, ale jakékoliv rozšíření by znamenalo zásadní změnu protokolu.

##### HTTP/1.0 (1996)
První standardizovaná verze, která přinesla hlavičky, stavové kódy, a podporu metod `HEAD` a `POST`. Každý požadavek však znamenal nové TCP spojení – po odeslání odpovědi se spojení zavřelo.

!!! warning "Problém HTTP/1.0"
    Navázání TCP spojení vyžaduje třícestný handshake (SYN, SYN-ACK, ACK). Pokud stránka obsahuje 20 obrázků, CSS a JS souborů, musí klient 20× navázat nové TCP spojení. Při latenci 100 ms to znamená minimálně 2 sekundy režie jen na handshaky – bez přenosu jediného bajtu dat.

##### HTTP/1.1 (1997)
Zavedl **trvalé spojení** (*keep-alive*) jako výchozí chování – jedno TCP spojení je znovupoužito pro více požadavků. Přidal **pipelining** (teoreticky umožňující poslat více požadavků bez čekání na odpovědi), hlavičku `Host` (umožňující virtuální hosting), a podporu pro částečné stahování (*range requests*).

!!! bug "Head-of-line blocking v HTTP/1.1"
    Přestože pipelining umožňoval teoreticky poslat více požadavků najednou, odpovědi musely přicházet **přesně ve stejném pořadí**, v jakém byly požadavky odeslány. Pokud první požadavek trval dlouho, blokoval tím všechny následující. V praxi se proto pipelining téměř nepoužíval a prohlížeče otevíraly paralelně více TCP spojení (typicky 6 na doménu).

##### HTTP/2 (2015)
Přinesl zásadní architektonickou změnu – **multiplexing** více požadavků a odpovědí v rámci jednoho TCP spojení pomocí tzv. **streamů**. Každý stream je označen identifikátorem a data se prokládají v rámcích (*frames*), takže pomalý požadavek už neblokuje ostatní. Dále přidal:

- **Kompresi hlaviček** (HPACK) – hlavičky se posílají binárně a pomocí slovníkové komprese se vyhne opakování stejných hodnot.
- **Server Push** – server může klientovi poslat zdroje ještě předtím, než si o ně řekne (např. CSS soubory odkazované z HTML).
- **Prioritizaci streamů** – klient může serveru naznačit, které zdroje potřebuje dříve.

!!! info "HTTP/2 a šifrování"
    HTTP/2 standard nevyžaduje TLS, ale všechny hlavní prohlížeče (Chrome, Firefox, Edge, Safari) HTTP/2 podporují **pouze přes TLS**. V praxi je tedy HTTP/2 vždy šifrovaný.

##### HTTP/3 (2022)
Největší změna od vzniku protokolu. HTTP/3 opouští TCP a staví na protokolu **QUIC**, který běží nad UDP. Důvodem je odstranění head-of-line blocking i na transportní vrstvě – TCP totiž z principu vyžaduje doručení paketů v pořadí, takže ztráta jednoho TCP paketu zablokuje celý stream, i když se týká úplně jiného zdroje. QUIC tento problém řeší tím, že každý stream je v rámci UDP spojení nezávislý.

!!! success "Hlavní výhody HTTP/3"
    - **Žádný head-of-line blocking** – ztráta paketu jednoho streamu neovlivní ostatní streamy.
    - **Rychlejší navazování spojení** – QUIC kombinuje handshake a TLS 1.3 vyjednávání do jednoho kroku (0-RTT u opakovaných spojení).
    - **Odolnost při změně sítě** – QUIC používá *connection ID* místo IP adresy, takže přechod z Wi-Fi na mobilní data spojení nepřeruší.
    - **Povinné šifrování** – HTTP/3 vždy vyžaduje TLS 1.3.

#### Cookies

Cookies jsou malé textové soubory, které server ukládá na straně klienta (v prohlížeči) a které klient automaticky posílá zpět při každém dalším požadavku na stejný server. Protože HTTP je ze své podstaty **bezstavový protokol** (každý požadavek je nezávislý), cookies slouží jako mechanismus pro **udržení stavu** – např. přihlášení uživatele, obsah nákupního košíku, jazykové preference nebo analytické identifikátory.

!!! abstract "Jak cookies fungují – krok za krokem"
    1. **Server nastaví cookie**: V odpovědi pošle hlavičku `Set-Cookie`:
        ```http
        HTTP/1.1 200 OK
        Set-Cookie: session_id=a1b2c3d4; HttpOnly; Secure; Max-Age=3600
        ```
    2. **Prohlížeč cookie uloží**: Podle zadaných atributů rozhodne, zda a na jak dlouho cookie uchovat.
    3. **Prohlížeč cookie posílá zpět**: Při každém dalším požadavku na stejný server automaticky přidá hlavičku `Cookie`:
        ```http
        GET /dashboard HTTP/1.1
        Host: example.com
        Cookie: session_id=a1b2c3d4
        ```
    4. **Server cookie přečte**: Podle hodnoty identifikuje uživatele, jeho relaci, nebo jiný stav.

!!! info "Atributy cookies"
    Každá cookie může nést atributy, které řídí její chování a bezpečnost:

    | Atribut | Význam |
    |:--|:--|
    | `Domain` | Určuje, pro které domény se cookie posílá. Např. `Domain=example.com` znamená, že cookie se pošle i na `sub.example.com`. Bez uvedení se použije přesně doména serveru. |
    | `Path` | Omezuje cookie na konkrétní cestu URL. Např. `Path=/admin` znamená, že cookie se pošle jen při požadavcích začínajících `/admin`. |
    | `Max-Age` | Doba platnosti cookie v sekundách od nastavení. Po uplynutí prohlížeč cookie smaže. |
    | `Expires` | Konkrétní datum a čas, kdy cookie vyprší (alternativa k `Max-Age`). |
    | `HttpOnly` | Zakazuje přístup ke cookie z JavaScriptu (`document.cookie`). Chrání proti XSS útokům. |
    | `Secure` | Cookie se odešle pouze přes HTTPS spojení, nikdy přes nezabezpečené HTTP. |
    | `SameSite` | Omezuje posílání cookie při cross-origin požadavcích. Může být `Strict`, `Lax`, nebo `None`. |
    | `Partitioned` | Označuje cookie jako CHIPS (*Cookies Having Independent Partitioned State*), oddělenou podle kontextu embedované stránky (viz níže). |

##### Typy cookies podle životnosti

- **Session cookies** (relační): Nemají nastaveno `Max-Age` ani `Expires`. Existují jen po dobu otevřeného prohlížeče – po jeho zavření se smažou. Používají se pro přihlašovací relace.
- **Persistent cookies** (trvalé): Mají nastavenou dobu platnosti. Zůstávají uložené i po zavření prohlížeče. Používají se např. pro zapamatování jazykových preferencí, souhlasu s cookies, nebo pro analytiku.
- **Supercookies**: Nejsou to klasické HTTP cookies – jedná se o metody sledování využívající hlavičky, mezipaměti nebo jiné mechanismy, které nepodléhají standardním omezením. Zahrnují například Evercookie, HSTS Supercookie nebo zombie cookies. Obecně jsou tyto techniky považovány za narušení soukromí a prohlížeče je aktivně blokují.

##### Typy cookies podle účelu

- **Nezbytně nutné**: Vyžadované pro základní funkčnost webu (např. session cookie pro přihlášení).
- **Funkční**: Umožňují zapamatovat si volby uživatele (jazyk, region, přihlašovací jméno).
- **Analytické**: Slouží pro sběr anonymizovaných dat o návštěvnosti a chování pro statistiku.
- **Marketingové**: Sledují uživatele napříč weby za účelem cílení reklamy (tzv. *3rd-party cookies*, postupně omezovány).
- **Preferenční**: Uchovávají preference, jako je tmavý/světlý režim, velikost písma, rozložení stránky.

!!! example "Příklad: Nastavení cookie z PHP backendu"
    ```php
    // Nastavení bezpečné session cookie na 24 hodin
    setcookie("session_id", "a1b2c3d4", [
        "expires" => time() + 86400,
        "path" => "/",
        "domain" => "example.com",
        "secure" => true,
        "httponly" => true,
        "samesite" => "Lax"
    ]);
    ```

##### Cross-site request forgery (CSRF)

CSRF je útok, při kterém útočník přiměje přihlášeného uživatele k provedení nechtěné akce na webu, kde je uživatel autentizován. Zneužívá toho, že prohlížeč automaticky posílá cookies s každým požadavkem na danou doménu.

!!! bug "Jak CSRF útok probíhá"
    1. Uživatel je přihlášený na `banka.com` a má uloženou session cookie.
    2. Uživatel mezitím navštíví škodlivý web `utocnik.com`.
    3. Škodlivá stránka obsahuje skrytý formulář:
        ```html
        <form action="https://banka.com/prevod" method="POST">
            <input type="hidden" name="ucet" value="utocnik_ucet">
            <input type="hidden" name="castka" value="100000">
        </form>
        <script>document.forms[0].submit();</script>
        ```
    4. Prohlížeč odešle POST na `banka.com` – **včetně uložené session cookie**.
    5. Server přijme požadavek jako legitimní od přihlášeného uživatele a provede převod.

!!! success "Obrana proti CSRF"
    - **CSRF Token**: Server vygeneruje náhodný token, vloží ho do formuláře jako skryté pole a očekává ho zpět při odeslání. Útočník na škodlivém webu tento token nezná a nemůže ho uhodnout.
    - **SameSite cookies**: Atribut `SameSite=Strict` nebo `SameSite=Lax` zabrání prohlížeči posílat cookies při cross-origin požadavcích.
    - **Kontrola hlavičky Origin / Referer**: Server ověří, že požadavek přišel ze své vlastní domény.
    - **Double Submit Cookie**: Server nastaví náhodnou hodnotu jako cookie a zároveň ji očekává v těle požadavku. Útočník umí cookie poslat, ale neumí ji přečíst a zopakovat v těle.

##### Cross-site scripting (XSS)

XSS je útok, při kterém útočník vloží škodlivý kód (typicky JavaScript) do stránky, která je následně zobrazena ostatním uživatelům. Na rozdíl od CSRF, který zneužívá automatické posílání cookies, XSS útočí na samotné zobrazení obsahu.

!!! bug "Typy XSS útoků"
    - **Stored XSS** (uložené): Škodlivý skript je trvale uložen na serveru (např. v databázi v komentářích). Každý návštěvník stránky ho obdrží a spustí.
    - **Reflected XSS** (odražené): Škodlivý skript je součástí URL nebo formulářového vstupu a server ho okamžitě vykreslí v odpovědi. Útočník musí oběť přimět kliknout na připravený odkaz.
    - **DOM-based XSS**: Útok probíhá čistě na straně klienta – zranitelný JavaScript čte data z URL a vkládá je do DOM bez sanitizace.

!!! success "Obrana proti XSS"
    - **Escapování výstupu**: Všechna data vkládaná do HTML se musí escapovat – např. `<` → `&lt;`.
    - **Content Security Policy (CSP)**: Hlavička `Content-Security-Policy` omezuje, odkud lze načítat skripty, styly a další zdroje.
    - **HttpOnly cookies**: Označení `HttpOnly` znamená, že JavaScript nemá k cookie přístup – i když útočník provede XSS, nedostane se k session cookie.
    - **Validace vstupu**: Striktní kontrola vstupních dat ještě před uložením nebo zpracováním.

##### Third-party cookies a jejich konec

Third-party cookies jsou cookies nastavené jinou doménou, než kterou uživatel aktuálně navštívil – typicky přes vložené prvky jako reklamní bannery, trackovací pixely nebo iframe.

!!! warning "Vývoj kolem third-party cookies"
    - **Safari** (ITP – Intelligent Tracking Prevention) blokuje third-party cookies od roku 2017.
    - **Firefox** (ETP – Enhanced Tracking Protection) blokuje third-party cookies od roku 2019.
    - **Chrome** spustil v lednu 2024 omezení pro 1 % uživatelů, s plánem úplného vypnutí do konce roku 2025 (v rámci *Privacy Sandbox* iniciativy).
    
    Budoucnost bez third-party cookies se opírá o alternativy jako Topics API (Chrome), konverzní měření, a důraz na first-party data.

##### Cross-site leakage

Cross-site leakage je kategorie útoků, při kterých útočník získává informace o jiné webové stránce pomocí tzv. **bočních kanálů** (*side channels*) – tedy pozorováním chování prohlížeče, nikoliv přímým čtením dat. Na rozdíl od XSS nebo CSRF zde útočník nemusí vložit škodlivý kód na cílový web – stačí, když oběť navštíví útočníkův web, zatímco je přihlášená na cílovém webu.

Typické postranní kanály zahrnují:

- **Časování**: Měření doby trvání požadavku může prozradit, zda odpověď pochází z cache nebo zda je uživatel administrátor.
- **Detekce chyb**: Různé stavové kódy nebo hlavičky prozrazující, zda zdroj existuje nebo je přístupný.
- **Cache probing**: Zjišťování, zda je zdroj v mezipaměti prohlížeče (a tedy ho uživatel navštívil), pomocí měření doby načítání.
- **CSS-based leakage**: Škodlivý CSS styl aplikuje pozadí z externí URL na prvek `:visited` a detekuje, jestli prohlížeč provedl síťový požadavek.
- **XS-Leaks (Cross-Site Leaks)**: Konkrétní techniky zneužívající window.length, postMessage timing, detekci scrollbaru, nebo iframe počet framů pro odhad obsahu response.

!!! success "Obrana proti cross-site leakage"
    - **SameSite cookies** omezují rozsah automatického odesílání.
    - **COOP** (Cross-Origin-Opener-Policy) izoluje okna prohlížeče před cross-origin přístupem.
    - **COEP** (Cross-Origin-Embedder-Policy) omezuje načítání cross-origin zdrojů.
    - **CORP** (Cross-Origin-Resource-Policy) řídí, kdo může zdroj embedovat.
    - **Fetch Metadata Headers** (`Sec-Fetch-Site`, `Sec-Fetch-Mode`) poskytují serveru kontext o každém požadavku.

### HTTPS

HTTPS (HyperText Transfer Protocol Secure) je HTTP provozovaný přes šifrované spojení pomocí protokolu TLS (Transport Layer Security, dříve SSL). HTTPS zajišťuje tři klíčové vlastnosti:

1. **Důvěrnost** (*confidentiality*): Data jsou šifrovaná – nikdo mezi klientem a serverem nemůže komunikaci číst.
2. **Integritu** (*integrity*): Data nelze během přenosu nepozorovaně změnit.
3. **Autenticitu** (*authenticity*): Klient si ověří, že komunikuje se skutečným serverem, ne s podvrhem.

!!! abstract "Jak HTTPS funguje"
    1. Klient požádá server o zabezpečené spojení (pošle `ClientHello` s podporovanými šiframi).
    2. Server odpoví `ServerHello` a pošle svůj **digitální certifikát** obsahující veřejný klíč.
    3. Klient ověří certifikát u certifikační autority (CA) – prověří, že certifikát je platný, nevypršel a patří dané doméně.
    4. Klient vygeneruje náhodný symetrický klíč, zašifruje ho veřejným klíčem serveru a pošle ho.
    5. Server dešifruje symetrický klíč svým soukromým klíčem. Ode této chvíle je navázáno symetrické šifrování – komunikace probíhá rychle a bezpečně.

!!! info "TLS verze"
    - **SSL 1.0–3.0**: Původní protokoly od Netscape, dnes zcela prolomené a zakázané.
    - **TLS 1.0–1.1**: Zastaralé, prohlížeče je přestaly podporovat.
    - **TLS 1.2**: Stále široce podporovaná verze s moderními šiframi (AES-GCM, ECDHE).
    - **TLS 1.3**: Nejnovější verze – rychlejší handshake (1-RTT, 0-RTT), odstranění slabých šifer, povinné forward secrecy.

!!! warning "HTTPS a SEO"
    Google používá HTTPS jako **rankingový signál** – stránky běžící pouze na HTTP jsou v posledních verzích prohlížeče Chrome výrazně znevýhodňovány a označovány varováním jako nedůvěryhodné.

### WebSocket

WebSocket je protokol (definovaný v [RFC 6455](https://datatracker.ietf.org/doc/html/rfc6455)), který umožňuje **plně duplexní, obousměrnou komunikaci** mezi klientem a serverem přes jediné TCP spojení. Na rozdíl od HTTP, kde klient vždy iniciuje komunikaci a server pouze odpovídá, WebSocket umožňuje serveru **aktivně posílat data klientovi** kdykoliv – bez čekání na požadavek.

!!! abstract "Jak WebSocket vznikne"
    1. Klient pošle speciální HTTP požadavek s hlavičkou `Upgrade: websocket`:
        ```http
        GET /chat HTTP/1.1
        Host: server.example.com
        Upgrade: websocket
        Connection: Upgrade
        Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
        Sec-WebSocket-Version: 13
        ```
    2. Server odpoví stavem `101 Switching Protocols`:
        ```http
        HTTP/1.1 101 Switching Protocols
        Upgrade: websocket
        Connection: Upgrade
        Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
        ```
    3. Po tomto úvodním handshaku se TCP spojení „povýší" na WebSocket – z textového HTTP se stane binární obousměrný kanál, který zůstává otevřený, dokud ho jedna strana neukončí.

!!! info "Kdy použít WebSocket a kdy ne"
    **Vhodné použití:**
    - Chatovací aplikace a messengery.
    - Živé notifikace a alerty.
    - Online hry pro více hráčů.
    - Kolaborativní nástroje (sdílené dokumenty, tabule).
    - Živé tickery (burzovní data, sportovní výsledky).
    - IoT zařízení vyžadující obousměrnou komunikaci.

    **Nevhodné použití:**
    - Jednorázové načtení dat (zbytečná režie – použij HTTP).
    - Periodické dotazování v dlouhých intervalech (SSE může být jednodušší).
    - Upload velkých souborů (HTTP má lepší podporu pro partial uploads a resume).
    - REST API, kde je přirozený model požadavek–odpověď.

!!! info "Alternativy k WebSocketu"
    - **Server-Sent Events (SSE)**: Jednosměrná komunikace server → klient po HTTP. Jednodušší než WebSocket, automatická rekonekce.
    - **Long Polling**: Klient pošle HTTP požadavek a server drží spojení otevřené, dokud nemá data. Po odpovědi klient okamžitě pošle nový požadavek.
    - **WebTransport**: Nový protokol postavený na QUIC (HTTP/3), umožňující multiplexovanou obousměrnou komunikaci s menší režií než WebSocket.

## Architektura webové služby

Webová služba je softwarový systém navržený pro interoperabilní komunikaci mezi různými aplikacemi přes síť. Tři hlavní architektury – SOAP, REST a JSON-RPC – se liší filozofií, formátem dat i způsobem přenosu.

### SOAP

SOAP (Simple Object Access Protocol) je protokol pro výměnu strukturovaných informací v decentralizovaném, distribuovaném prostředí. Využívá XML pro formát zpráv a může být přenášen přes různé transportní protokoly (nejčastěji HTTP, ale i SMTP, TCP nebo JMS). SOAP je standardizován konsorciem W3C.

!!! abstract "Charakteristika SOAP"
    - **Striktní standardizace**: Každá zpráva musí odpovídat přesné XML struktuře definované v [SOAP 1.2 (W3C Recommendation)](https://www.w3.org/TR/soap12/).
    - **Povinné schéma**: Služba je popsána pomocí WSDL (Web Services Description Language), což je XML dokument definující endpointy, operace a datové typy.
    - **Bezstavovost i stavovost**: SOAP podporuje oba režimy – standardní bezstavové operace i stavové relace pomocí WS-* specifikací.
    - **Rozšiřitelnost**: WS-* standardy přidávají bezpečnost (WS-Security), transakce (WS-AtomicTransaction), spolehlivé doručování (WS-ReliableMessaging) a další.

#### Struktura SOAP zprávy

Každá SOAP zpráva je XML dokument s kořenovým elementem `Envelope`, který obsahuje:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
    <soap:Header>
        <!-- Metadata: autentizace, transakce, směrování -->
        <auth:Token xmlns:auth="https://api.example.com/auth">
            Bearer eyJhbGciOiJIUzI1NiIs...
        </auth:Token>
    </soap:Header>
    <soap:Body>
        <!-- Tělo zprávy: samotná data -->
        <GetUserRequest xmlns="https://api.example.com/users">
            <UserId>42</UserId>
        </GetUserRequest>
    </soap:Body>
    <soap:Fault>
        <!-- Chybový stav (volitelné) -->
    </soap:Fault>
</soap:Envelope>
```

| Část | Význam |
|:--|:--|
| **Envelope** | Kořenový element – obálka celé zprávy. Deklaruje XML namespaces a verzi SOAP. |
| **Header** | Volitelná část pro metadata. Typicky obsahuje autentizační tokeny, informace o směrování, transakční kontexty, nebo digitální podpisy. |
| **Body** | Povinná část s hlavním obsahem zprávy – volání operace, její parametry, nebo návratové hodnoty. |
| **Fault** | Volitelná část pro přenos chybových stavů. Obsahuje `faultcode`, `faultstring`, a volitelně `detail` pro aplikačně specifické chyby. |

#### WSDL dokument

WSDL (Web Services Description Language) je XML formát, který popisuje veřejné rozhraní webové služby – jaké operace jsou dostupné, jaké mají parametry, jak formátovat požadavky a kde služba běží.

!!! example "Zjednodušená ukázka WSDL"
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <definitions name="UserService"
                 targetNamespace="https://api.example.com/users"
                 xmlns:tns="https://api.example.com/users"
                 xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                 xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
                 xmlns="http://schemas.xmlsoap.org/wsdl/">

        <!-- Datové typy (XSD schéma) -->
        <types>
            <xsd:schema targetNamespace="https://api.example.com/users">
                <xsd:element name="User">
                    <xsd:complexType>
                        <xsd:sequence>
                            <xsd:element name="Id"    type="xsd:int"/>
                            <xsd:element name="Name"  type="xsd:string"/>
                            <xsd:element name="Email" type="xsd:string"/>
                        </xsd:sequence>
                    </xsd:complexType>
                </xsd:element>
            </xsd:schema>
        </types>

        <!-- Abstraktní definice operací -->
        <message name="GetUserRequest">
            <part name="UserId" type="xsd:int"/>
        </message>
        <message name="GetUserResponse">
            <part name="User" element="tns:User"/>
        </message>

        <portType name="UserPortType">
            <operation name="GetUser">
                <input  message="tns:GetUserRequest"/>
                <output message="tns:GetUserResponse"/>
            </operation>
        </portType>

        <!-- Konkrétní binding na SOAP přes HTTP -->
        <binding name="UserBinding" type="tns:UserPortType">
            <soap:binding style="document"
                          transport="http://schemas.xmlsoap.org/soap/http"/>
            <operation name="GetUser">
                <soap:operation soapAction="https://api.example.com/users/GetUser"/>
                <input>  <soap:body use="literal"/></input>
                <output> <soap:body use="literal"/></output>
            </operation>
        </binding>

        <!-- Koncový bod služby -->
        <service name="UserService">
            <port name="UserPort" binding="tns:UserBinding">
                <soap:address location="https://api.example.com/soap/users"/>
            </port>
        </service>
    </definitions>
    ```

!!! info "Klíčové části WSDL"
    - **types**: Definice datových typů pomocí XML Schema (XSD).
    - **message**: Definice formátu zpráv (vstupní a výstupní parametry).
    - **portType**: Abstraktní rozhraní – seznam operací a jejich vstupů/výstupů.
    - **binding**: Konkrétní navázání abstraktních operací na transportní protokol (SOAP/HTTP, SOAP/SMTP…).
    - **service**: Koncový bod – URL adresa, kde služba běží.

#### UDDI

UDDI (Universal Description, Discovery and Integration) je adresářový mechanismus pro SOAP webové služby – funguje jako „zlaté stránky" pro webové služby. Jeho účelem je umožnit organizacím **publikovat**, **vyhledávat** a **dynamicky navazovat** SOAP služby bez nutnosti předem znát jejich umístění.

!!! abstract "Tři role UDDI"
    1. **Poskytovatel služby** (*Service Provider*): Zaregistruje svou SOAP službu do UDDI registru – nahraje WSDL popis, kontaktní informace a kategorizaci.
    2. **UDDI registr** (*Service Registry*): Centrální úložiště, kde jsou metadata o službách uložena – název služby, popis, vazba na WSDL, technický kontakt, kategorie podle oborových klasifikací (např. NAICS, UNSPSC).
    3. **Konzument služby** (*Service Consumer*): Dotazuje se do UDDI registru, najde vhodnou službu podle kategorie nebo názvu, stáhne si její WSDL a může ji začít volat – ideálně automaticky, bez zásahu vývojáře.

!!! info "Struktura UDDI záznamu"
    Každý záznam v UDDI se skládá ze tří hlavních entit:

    - **businessEntity** („Bílé stránky"): Obecné informace o firmě – název, adresa, kontakty, identifikátory.
    - **businessService** („Žluté stránky"): Seznam služeb, které firma nabízí – zařazené do kategorií podle oboru.
    - **bindingTemplate** („Zelené stránky"): Technické detaily – odkaz na WSDL, endpoint URL, technické parametry volání.

!!! warning "Proč UDDI selhalo"
    Vize dynamického objevování služeb (SOA – Service-Oriented Architecture), kdy by aplikace za běhu hledala v UDDI registru vhodné služby a automaticky je integrovala, se v praxi nikdy masivně nerozšířila:

    - Přílišná složitost – UDDI samo bylo SOAP službou s vlastním WSDL.
    - Firmy nechtějí dynamicky objevovat neznámé služby – integrace vyžaduje smlouvy, SLA a právní rámce.
    - Nástup REST API a jednodušších registrů (např. API Gateway, developer portály) udělal z UDDI v praxi přežitek.

#### SOAP vs. REST

| Vlastnost | SOAP | REST |
|:--|:--|:--|
| Formát dat | Pouze XML | JSON, XML, YAML, HTML, plain text… |
| Transport | HTTP, SMTP, TCP, JMS… | Výhradně HTTP(S) |
| Standardizace | WSDL, XSD – striktní kontrakt | Neexistuje formální standard – konvence |
| Bezstavovost | Volitelná (WS-* pro stav) | Povinná (výchozí princip) |
| Cache | Obtížná (POST) | Přirozená (GET, cache hlavičky) |
| Bezpečnost | WS-Security (nad rámec TLS) | TLS + OAuth2, JWT, API klíče |
| Složitost | Vysoká – enterprise standardy | Nízká – jednoduchost jako princip |
| Přenos binárních dat | Base64, MTOM | Multipart, Base64, přímý binární upload |
| Typické použití | Bankovnictví, ERP, enterprise integrace | Webová API, mikroslužby, mobilní backendy |
| Validace | XSD schéma – validace požadavku i odpovědi | JSON Schema, OpenAPI (volitelné, ne povinné) |

### REST

REST (Representational State Transfer) je architektonický styl pro návrh distribuovaných systémů, který v roce 2000 definoval Roy Fielding ve své disertační práci. REST není protokol ani standard, ale soubor principů a omezení, které při dodržení vedou k systému, který je škálovatelný, bezstavový, cacheovatelný a má jednotné rozhraní.

#### Principy

!!! abstract "Šest základních omezení RESTu"
    1. **Klient–Server**: Oddělení zodpovědností – klient se stará o UI/UX, server o ukládání dat. Umožňuje nezávislý vývoj obou částí.
    2. **Bezstavovost** (*Stateless*): Každý požadavek musí obsahovat veškeré informace nutné k jeho zpracování. Server si neuchovává žádný kontext klienta mezi požadavky. Stav relace je uložen výhradně na klientovi.
    3. **Cacheovatelnost** (*Cacheable*): Odpovědi musí explicitně nebo implicitně označovat, zda mohou být uloženy do mezipaměti. Cache výrazně zlepšuje výkon a škálovatelnost.
    4. **Vrstvený systém** (*Layered System*): Klient neví, jestli komunikuje přímo se serverem nebo s proxy či load balancerem. Vrstvy mohou být nasazeny nezávisle.
    5. **Jednotné rozhraní** (*Uniform Interface*): Zásadní princip – čtyři omezení:
        - Identifikace zdrojů (URI)
        - Manipulace zdrojů prostřednictvím reprezentací
        - Samopopisné zprávy (*self-descriptive messages*)
        - HATEOAS (*Hypermedia As The Engine Of Application State*)
    6. **Kód na vyžádání** (*Code on Demand*, volitelné): Server může klientovi poslat spustitelný kód (např. JavaScript), čímž rozšiřuje jeho funkcionalitu.

RESTful je termín, který označuje API nebo webovou službu, která **skutečně dodržuje REST principy**. Ne každé HTTP API je RESTful – mnoho API se označuje za REST, i když splňuje jen část omezení (typicky jen používá HTTP metody a JSON).

!!! abstract "Richardson Maturity Model"
    Leonard Richardson definoval model zralosti, který pomáhá určit, jak moc je API RESTful. Model má čtyři úrovně (0–3):

    | Úroveň | Název | Popis | Příklad |
    |:--:|:--|:--|:--|
    | **0** | Swamp of POX | Jedno URI, jeden HTTP endpoint (typicky POST). Tělo obsahuje XML/JSON s názvem operace. V podstatě RPC tunelované přes HTTP. | `POST /api` s `{"action": "getUser", "id": 42}` |
    | **1** | Resources | API je rozděleno na více URI podle zdrojů. | `POST /users/42` |
    | **2** | HTTP Verbs | Správné použití HTTP metod (`GET` pro čtení, `POST` pro vytvoření, `DELETE` pro smazání…) a stavových kódů. | `GET /users/42` → `200 OK`, `DELETE /users/42` → `204 No Content` |
    | **3** | HATEOAS | Hypermedia – odpovědi obsahují odkazy na další dostupné akce. Klient se řídí tím, co server nabídne, ne natvrdo zakódovanými cestami. | Odpověď obsahuje `_links: { self: …, update: …, delete: … }` |

    Většina dnešních REST API dosahuje úrovně 2. Úroveň 3 (HATEOAS) je vzácná – vyžaduje disciplinovaný návrh a klienti musí být připraveni dynamicky následovat odkazy, podobně jako webový prohlížeč.

!!! bug "Častý omyl"
    API, které používá JSON a vrací stavové kódy, ještě není automaticky RESTful. RESTful znamená: bezstavovost, cacheovatelnost, jednotné rozhraní, vrstvení a (volitelně) HATEOAS. Mnoho tzv. REST API tyto požadavky nesplňuje – zjednodušeně se jim říká „REST-ish" API.

#### Pojmy

!!! info "Základní pojmy RESTu"
    - **Zdroj** (*Resource*): Jakákoliv informace, kterou lze pojmenovat – dokument, obrázek, kolekce, uživatel, služba. Každý zdroj má jednoznačný identifikátor – URI.
    - **Reprezentace** (*Representation*): Konkrétní forma, ve které je zdroj přenesen ke klientovi. Jeden zdroj může mít více reprezentací (JSON, XML, HTML, PDF…). Klient si reprezentaci volí skrze hlavičku `Accept`.
    - **Entita** (*Entity*): Doménový objekt, který zdroj reprezentuje (např. entita `User` s atributy `id`, `name`, `email`). Zdroj `/users/42` reprezentuje entitu uživatele s ID 42.
    - **Kolekce** (*Collection*): Zdroj obsahující seznam entit (např. `/users` je kolekce všech uživatelů).

!!! example "Příklad: Stejná entita, různé reprezentace"
    ```http
    GET /users/42 HTTP/1.1
    Host: api.example.com
    Accept: application/json
    ```
    **Odpověď (JSON):**
    ```json
    {
        "id": 42,
        "name": "Jan Novák",
        "email": "jan@example.com",
        "created_at": "2025-03-15T10:30:00Z"
    }
    ```

    ```http
    GET /users/42 HTTP/1.1
    Host: api.example.com
    Accept: application/xml
    ```
    **Odpověď (XML):**
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <user>
        <id>42</id>
        <name>Jan Novák</name>
        <email>jan@example.com</email>
        <created_at>2025-03-15T10:30:00Z</created_at>
    </user>
    ```

#### Návrh

Dobře navržené REST API používá podstatná jména (ne slovesa) a hierarchickou strukturu URI, kde HTTP metody určují operaci.

!!! success "Konvence návrhu URI"
    ```
    GET     /users              # Seznam všech uživatelů (kolekce)
    POST    /users              # Vytvoření nového uživatele
    GET     /users/42           # Detail uživatele s ID 42
    PUT     /users/42           # Nahrazení celého uživatele 42
    PATCH   /users/42           # Částečná úprava uživatele 42
    DELETE  /users/42           # Smazání uživatele 42
    GET     /users/42/orders    # Objednávky uživatele 42
    GET     /users/42/orders/7  # Objednávka č. 7 uživatele 42
    ```

!!! bug "Špatné vzory při návrhu REST API"
    - `GET /getUsers` – sloveso v URL, zbytečné vzhledem k HTTP metodě.
    - `POST /users/create` – redundantní, POST na `/users` již vytvoření znamená.
    - `GET /users?id=42` – nepoužívá hierarchický identifikátor zdroje.
    - `POST /deleteUser?id=42` – DELETE metoda existuje právě pro mazání.
    - `GET /users/42?action=activate` – akce jako query parametr místo vlastního zdroje (lepší: `POST /users/42/activation`).

##### HATEOAS

HATEOAS (Hypermedia As The Engine Of Application State) je princip, podle kterého server v odpovědi poskytuje odkazy na další možné akce, které může klient se zdrojem provést. Klient tak nemusí mít natvrdo zakódované URL cesty – řídí se tím, co mu server nabídne.

!!! example "Příklad HATEOAS odpovědi"
    ```json
    {
        "id": 42,
        "name": "Jan Novák",
        "email": "jan@example.com",
        "_links": {
            "self": { "href": "/users/42" },
            "orders": { "href": "/users/42/orders" },
            "deactivate": { "href": "/users/42/deactivation", "method": "POST" },
            "update": { "href": "/users/42", "method": "PATCH" }
        }
    }
    ```

    Klient přečte `_links`, zobrazí dostupné akce, a nemusí vědět, že deaktivace uživatele je na `/users/42/deactivation` – to mu řekne server. Server může URL kdykoliv změnit a klient se přizpůsobí.

!!! info "Síla a úskalí HATEOAS"
    - **Výhoda**: Extrémní flexibilita – server může měnit URL strukturu bez rozbití klienta. Podobné jako když prohlížeč neví o URL dopředu, ale řídí se odkazy na stránce.
    - **Nevýhoda**: V praxi málo používané. Většina REST API HATEOAS neimplementuje, protože klienti jsou často jednodušší, když mají URL cesty známé předem. Formáty jako HAL, JSON:API nebo Siren se snaží HATEOAS standardizovat – viz níže.

##### HAL (Hypertext Application Language)
HAL je minimalistický formát pro reprezentaci zdrojů s hypermédii. Rozděluje JSON odpověď na dvě jasné sekce: `_links` (odkazy) a `_embedded` (vnořené zdroje). Je to jeden z nejjednodušších a nejpoužívanějších HATEOAS formátů.

!!! example "Příklad HAL odpovědi"
    ```json
    {
        "id": 42,
        "name": "Jan Novák",
        "_links": {
            "self": { "href": "/users/42" },
            "orders": { "href": "/users/42/orders" },
            "deactivate": { "href": "/users/42/deactivation" }
        },
        "_embedded": {
            "recentOrders": [
                {
                    "_links": { "self": { "href": "/orders/105" } },
                    "total": 1250.50,
                    "status": "delivered"
                }
            ]
        }
    }
    ```

    - `_links`: Navigace – kam může klient jít dál (self, next, prev, related actions).
    - `_embedded`: Související zdroje vložené přímo do odpovědi – šetří další HTTP požadavky.

##### Siren

Siren je robustnější hypermediální formát, který kromě odkazů definuje i **akce** (*actions*) – tedy operace, které klient může provést, včetně jejich metody, parametrů a očekávaných datových typů. To HAL neumí – ten odkazuje jen na URI.

!!! example "Příklad Siren - akce"
    ```json
    {
        "class": ["user"],
        "properties": {
            "id": 42,
            "name": "Jan Novák"
        },
        "links": [
            { "rel": ["self"], "href": "/users/42" }
        ],
        "actions": [
            {
                "name": "update-name",
                "title": "Změnit jméno",
                "method": "PATCH",
                "href": "/users/42",
                "type": "application/json",
                "fields": [
                    { "name": "name", "type": "text" }
                ]
            }
        ]
    }
    ```

    Klient, který rozumí Sirenu, automaticky vykreslí formulář pro změnu jména – bez znalosti struktury API. Siren jde v HATEOAS myšlence nejdál z běžných formátů.

##### Verzování

Protože REST API se v čase vyvíjí, je potřeba řešit zpětnou kompatibilitu:

| Strategie | Příklad | Výhody | Nevýhody |
|:--|:--|:--|:--|
| **URL verzování** | `/v1/users/42` | Jednoduché, zřejmé | Duplikace kódu, "znečišťuje" URL |
| **Hlavička** | `Accept: application/vnd.api+json;version=2` | Čisté URL | Méně viditelné, složitější testování |
| **Query parametr** | `/users/42?version=2` | Snadné pro debugging | Necachovatelné, nedoporučované |
| **Subdoména** | `v1.api.example.com` | Čisté oddělení | Vyšší režie infrastruktury |

#### Formáty odpovědí

##### JSON:API

JSON:API je standardizovaný formát pro REST API odpovědi, který definuje jednotnou strukturu pro reprezentaci zdrojů, vztahů mezi nimi, chyb a metadat. Je to pokus o standardizaci toho, co REST standard sám od sebe nedefinuje.

!!! abstract "Základní struktura JSON:API dokumentu"
    ```json
    {
        "data": {
            "type": "articles",
            "id": "1",
            "attributes": {
                "title": "REST API design",
                "body": "Lorem ipsum..."
            },
            "relationships": {
                "author": {
                    "data": { "type": "people", "id": "9" },
                    "links": {
                        "related": "/articles/1/author"
                    }
                },
                "comments": {
                    "links": {
                        "related": "/articles/1/comments"
                    }
                }
            },
            "links": {
                "self": "/articles/1"
            }
        },
        "included": [
            {
                "type": "people",
                "id": "9",
                "attributes": {
                    "name": "Jan Novák"
                }
            }
        ],
        "errors": [],
        "meta": {
            "copyright": "© 2025 Example Corp."
        },
        "jsonapi": {
            "version": "1.1"
        }
    }
    ```

| Klíč | Význam |
|:--|:--|
| `data` | Hlavní data – objekt nebo pole zdrojů. Každý zdroj má povinné `type` a `id`. |
| `attributes` | Vlastnosti zdroje – data, která nejsou vztahy. |
| `relationships` | Definice vztahů k jiným zdrojům. Může obsahovat `data` (ID odkaz) nebo `links` (URL). |
| `included` | Související zdroje, které si klient vyžádal pomocí `include` parametru – šetří počet HTTP požadavků. |
| `errors` | Standardizované chybové objekty (HTTP 4xx/5xx). |
| `meta` | Meta-informace o odpovědi (např. copyright, pagination). |
| `jsonapi` | Verze použité specifikace JSON:API. |

##### OpenAPI specifikace

OpenAPI (dříve Swagger) je standard pro popis REST API – ekvivalent WSDL pro REST svět. Na rozdíl od WSDL, který je povinný pro SOAP, je OpenAPI dobrovolné. Definuje endpointy, parametry, formáty požadavků a odpovědí, autentizační schémata a další.

!!! example "Ukázka OpenAPI 3.1 (YAML)"
    ```yaml
    openapi: "3.1.0"
    info:
      title: User API
      version: "1.0.0"
      description: API pro správu uživatelů
    servers:
      - url: https://api.example.com/v1
    paths:
      /users:
        get:
          summary: Seznam uživatelů
          parameters:
            - name: page
              in: query
              schema:
                type: integer
                default: 1
          responses:
            "200":
              description: Úspěšný seznam
              content:
                application/json:
                  schema:
                    type: array
                    items:
                      $ref: "#/components/schemas/User"
        post:
          summary: Vytvoření uživatele
          requestBody:
            required: true
            content:
              application/json:
                schema:
                  $ref: "#/components/schemas/CreateUserRequest"
          responses:
            "201":
              description: Uživatel vytvořen
      /users/{userId}:
        get:
          summary: Detail uživatele
          parameters:
            - name: userId
              in: path
              required: true
              schema:
                type: integer
          responses:
            "200":
              description: Detail uživatele
              content:
                application/json:
                  schema:
                    $ref: "#/components/schemas/User"
            "404":
              description: Uživatel nenalezen
    components:
      schemas:
        User:
          type: object
          properties:
            id:
              type: integer
            name:
              type: string
            email:
              type: string
              format: email
        CreateUserRequest:
          type: object
          required: [name, email]
          properties:
            name:
              type: string
            email:
              type: string
              format: email
    ```

!!! info "Výhody OpenAPI"
    - Automatické generování klientských SDK pro různé jazyky.
    - Automatické generování interaktivní dokumentace (Swagger UI, ReDoc, Scalar).
    - Validace požadavků a odpovědí podle schématu.
    - Generování mock serverů pro testování.
    - Podpora pro code-first i design-first přístup.

### JSON-RPC

JSON-RPC je odlehčený protokol pro vzdálené volání procedur (RPC) využívající JSON. Vznikl jako jednoduchá alternativa k XML-RPC a SOAPu. Na rozdíl od RESTu, který je orientovaný na zdroje, JSON-RPC je orientovaný na volání funkcí/procedur.

!!! abstract "Jak JSON-RPC funguje"
    JSON-RPC definuje, jak formátovat požadavek na zavolání procedury a jakou strukturu bude mít odpověď. Komunikace je bezstavová a může probíhat přes libovolný transport (HTTP, WebSocket, TCP…).

    Klient pošle objekt popisující volání:
    ```json
    {
        "jsonrpc": "2.0",
        "method": "subtract",
        "params": [42, 23],
        "id": 1
    }
    ```

    Server odpoví výsledkem:
    ```json
    {
        "jsonrpc": "2.0",
        "result": 19,
        "id": 1
    }
    ```

    Nebo chybou:
    ```json
    {
        "jsonrpc": "2.0",
        "error": {
            "code": -32601,
            "message": "Method not found"
        },
        "id": 1
    }
    ```

!!! info "Klíčové prvky JSON-RPC 2.0"
    - **jsonrpc**: Verze protokolu (musí být `"2.0"`).
    - **method**: Název volané metody (řetězec).
    - **params**: Parametry – buď poziční pole, nebo pojmenovaný objekt.
    - **id**: Identifikátor požadavku pro spárování s odpovědí. Při notifikaci (one-way) se vynechává.
    - **result**: Výsledek volání – jakákoliv JSON hodnota.
    - **error**: Chybový objekt s kódem, zprávou a volitelnými daty.

!!! success "Silné stránky JSON-RPC"
    - **Extrémně jednoduchý** – celá specifikace má jen několik stránek.
    - **Batch požadavky**: Lze poslat pole více požadavků v jedné HTTP zprávě, server vrátí pole odpovědí.
    - **Notifikace**: Jednosměrné volání bez očekávání odpovědi (vynechání `id`).
    - **Transportně agnostický**: Funguje přes HTTP, WebSocket, UDP, stdio – cokoliv.
    - **Přirozený pro akce**: Dobře sedí na API orientovaná na příkazy/procedury.

!!! warning "Kdy použít JSON-RPC"
    - **Vhodné**: API orientovaná na akce (např. `createInvoice`, `sendEmail`, `processPayment`), WebSocket služby, komunikace mezi mikroslužbami, integrace s jazyky, které přirozeně používají RPC (Go, Rust, C++).
    - **Méně vhodné**: Veřejná API, kde je důležitá cacheovatelnost (GET), API s bohatou strukturou zdrojů, případy kde se očekává standardní REST.

!!! example "Příklad batch volání"
    ```json
    [
        { "jsonrpc": "2.0", "method": "getUser", "params": {"id": 42}, "id": 1 },
        { "jsonrpc": "2.0", "method": "getUser", "params": {"id": 43}, "id": 2 },
        { "jsonrpc": "2.0", "method": "deleteUser", "params": {"id": 99}, "id": 3 }
    ]
    ```
    Server zpracuje všechny tři požadavky a vrátí pole tří odpovědí – buď najednou, nebo postupně (streaming).

### Shrnutí: Kdy použít kterou architekturu

| Kritérium | REST | SOAP | JSON-RPC |
|:--|:--|:--:|:--:|
| Orientace | Zdroje, kolekce | Operace, zprávy | Procedury, funkce |
| Formát | JSON, XML… | Pouze XML | Pouze JSON |
| Složitost implementace | Nízká | Vysoká | Velmi nízká |
| Formální kontrakt | OpenAPI (volitelné) | WSDL (povinné) | Žádný standardní |
| Vestavěná bezpečnost | TLS + OAuth2/JWT | WS-Security | TLS + tokeny |
| Transakce | Neřeší | WS-AtomicTransaction | Neřeší |
| Cache | Ano (HTTP) | Obtížné | Obtížné (POST) |
| Typické použití | Webová/mobilní API, mikroslužby | Enterprise, banky, ERP | Backend-to-backend, WebSocket API |
| Ekosystém nástrojů | Obrovský | Velký, ale klesající | Malý, rostoucí |
