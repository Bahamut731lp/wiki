# Kvantová distribuce klíče
Symetrické šifry jsou kvantově odolné při dostatečné velikosti klíče. Je ovšem potřeba zajistit bezpečný kanál pro přenos klíče. Hlavní myšlenkou QKD je, že informace o klíči je přenášena pomocí kvantových stavů částic, například fotonů. Tyto kvantové stavy mohou být polarizace fotonů, fáze, nebo jiné vlastnosti částic, které jsou kvantově mechanicky reprezentovatelné. 

Důležité je, že měření kvantových stavů ovlivňuje jejich původní hodnotu. Tento jev, známý jako __Heisenbergův princip neurčitosti__, zaručuje, že jakýkoli pokus o odposlech přenosu je detekovatelný.

![wa](../../images/walter.jpg)

Protokol BB84 používá čtyři různé kvantové stavy, které jsou rozděleny do dvou bází (např. horizontální/vertikální polarizace a diagonální polarizace). 

|Báze|0|1|
|:--:|:--:|:--:|
|$+$|$\uparrow$|$\rightarrow$|
|$\times$|$\nearrow$|$\searrow$|

Protokol funguje následujícím způsobem:

- __Přenos kvantových bitů__ (qubitů): Alice připraví fotony v náhodných stavech a odesílá je Bobovi. Každý foton reprezentuje jeden bit.
- __Náhodné měření__: Bob měří každý přijatý foton v náhodně vybrané bázi.
- __Sdílení bází po veřejném kanále__: Po přenosu Alice a Bob veřejně komunikují (např. přes internet) a porovnávají báze, ve kterých fotony připravovali a měřili. Data získaná pomocí nesprávných bází jsou ignorována.
- __Generování klíče__: Zbývající data, kde se báze shodují, tvoří tajný klíč.
- __Test na přítomnost odposlechu__: Alice a Bob porovnají malou část svého klíče. Pokud zjistí vyšší než očekávanou chybovost, mohou detekovat přítomnost útočníka.

!!! tip "Odolnost vůči odposlechům"
    BB84 má odolnost vůči odposlechům založenou na statistice. Útočníkovi nezbývá nic jiného než také měřit náhodně vybranými bázemi, ovšem při volbě špatné báze (50% šance se netrefit) se daný foton přepóluje a i kdyby poté příjemce použil ten správný, tak má šanci naměřit špatnou hodnotu kvůli přepólování do jiné báze.

!!! question "Kolik bitů je třeba připravit na začátku?"
    Je doporučeno připravit minimálně 4x tolik bitů, kolik je požadovaná délka klíče. Je to kvůli tomu, že při náhodném měření statistiky polovina bitů bude změřena špatně a v následném kroku zahozena. Také se poté část bitů použije na ověření přítomnosti odposlechu.
