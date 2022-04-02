# Netwerken: het lokale netwerk en het internet

```{admonition} Concepten
LAN, WAN, thuisrouter, modem, firewall, router, gateway, lokaal internetadres, publiek internetadres, medium, Ethernet(-kabel), WiFi, WiFi basisstation, ISP, DHCP (en statische toewijzing), (DNS? - lokale alternatieven?), VPN, "poort openzetten".

```

* apparaten en verbindingen in het lokale netwerk
    * verbindingen: media
    * netwerkapparaten: router ("residential gateway"); WiFi basisstation; 
    * eindapparaten: computers, netwerkprinters, iot-apparaten, enz.
* apparaten en verbindingen in het publieke internet
* protocollen
    * gelaagde opbouw
    * pakketcommunicatie
    * (tcp: verbindingsgerichte communicatie)
    
In dit gedeelte behandelen we het lokale netwerk, zoals je dat bijvoorbeeld thuis of op school tegenkomt. 
Een typisch thuisnetwerk kan er zo uitzien:

```{figure} images/ip-lan.png
:width: 800px

Thuisnetwerk op IP-niveau
```

```{margin}
**LAN**: Local Area Network, **WAN**: Wide Are network.
```

Je ziet hier een desktop PC, een laptop, een smartphone, een netwerkprinter en een IoT-hub (bijvoorbeeld voor slimme verlichting) in het lokale netwerk. De thuisrouter of *residential gateway* verbindt het lokale netwerk (LAN) via de verbinding met het netwerk (WAN) van de *internet service provider* (ISP), met het publieke internet.

De apparaten die het netwerk gebruiken voor communicatie met elkaar en met apparaten in het internet heten *eindapparaten*. Deze hebben geen rol in het netwerk.

De thuisrouter is een voorbeel van een *netwerkapparaat*. Deze netwerkapparaten zorgen ervoor dat het netwerk goed functioneert.


```{margin} 
Voor de lokale communicatie zou je ook een ander protocol kunnen gebruiken, maar omdat je voor de communicatie met de buitenwereld toch al het IP-protocol gebruikt, kun je dat ook net zo goed lokaal gebruiken.
```

Deze router of gateway zorgt ervoor dat lokale IP-pakketten bedoeld voor het publieke internet, via de ISP-verbinding naar de volgende router verstuurd worden, om via een aantal router-stappen zo op de bestemming aan te komen.
IP-pakketten vanuit het publieke internet worden naar het juiste lokale apparaat gestuurd.

Bovenstaande figuur geeft het netwerk weer op het IP-niveau: de lokale apparaten communiceren via het internet protocol met elkaar en met de buitenwereld.

Op het niveau van de *fysieke verbindingen* ziet het netwerk er iets anders uit:

```{figure} images/mac-lan.png
:width: 800px

Thuisnetwerk op fysiek (MAC) niveau
```

Sommige apparaten zijn via een Ethernet-kabel verbonden in het netwerk.
Omdat de thuisrouter niet voldoende Ethernet-aansluitingen heeft, is er een *switch* gebruikt om het aantal Ethernet-verbindingen uit te breiden.

Via het WiFi basisstation (modem) zijn de tablet, smartphone en laptop draadloos aangesloten op het lokale netwerk.

De eigenlijke communicatie in het lokale netwerk gebeurt op dit fysieke niveau, op basis van Ethernet- en WiFi frames waarin IP-pakketten ingepakt zijn.
Voor de adressering gebruikt dit lokale netwerk de Ethernet- en WiFi-MAC adressen. (Deze hebben hetzelfde formaat.)

```{margin}
Enkelvoud: medium, meervoud: media
```

Voor *fysieke verbindingen* kunnen we verschillende *media* gebruiken, bijvoorbeeld lokaal Ethernet en WiFi, en glasvezel of coaxkabel met de ISP.
Elk medium heeft zijn eigen voor- en nadelen. Bijvoorbeeld WiFi is geschikt voor mobiele apparaten, maar is minder veilig en betrouwbaar dan een bedrade Ethernet- of glasvezelverbinding. 

We zien op dit MAC-niveau ook meer netwerkapparaten, zoals de *switch* en het *WiFi basisstation*.

Het eigenlijke netwerk bestaat uit fysieke verbindingen (*media*) en *netwerkapparaten*.



Het lokale netwerk verbindt de lokale *eindapparaten*, zoals computers, printers, en IoT-apparaten, met elkaar, en, via de router ("residential gateway") met het publieke internet.
Het netwerk zelf bestaat uit *verbindingen* ("media"), zoals Ethernet kabels en draadloze WiFi verbindingen; en *netwerkapparaten* zoals een WiFi basisstation, Ethernet-switches, en de genoemde router.

Waarvoor gebruik je een Ethernet-switch? Met deze switch kun je meerdere Ethernet-kabels (en daarmee meerdere apparaten) aan het netwerk verbinden. De switch bepaalt automatisch welke apparaten aan welke kabels gekoppeld zijn, en stuurt de lokale pakketten  door naar de juiste aansluitingen.

> Een switch verzorgt de routering op MAC-niveau.

De eindapparaten communiceren met elkaar via de *internet-protocollen*.
Omdat deze toch nodig zijn voor de communicatie met apparaten in het publieke internet,
is het handig om deze protocollen ook te gebruiken voor de communicatie in het lokale netwerk.

Een thuisrouter ("residential gateway") combineert vaak meerdere functies:

* router/gateway naar het publieke internet
* firewall tussen het lokale netwerk en het publieke internet
* wifi-basisstation
* router in het lokale netwerk?
* modem voor de aansluiting op het WAN-medium (bijv. kabeltv-kabel, of glasvezel)

## Fysieke verbindingen

Voor communicatie heb je altijd een fysieke basis nodig: data worden overgestuurd als elektrische signalen (Ethernet kabel), als lichtsignalen (glasvezel), of als radiosignalen (WiFi, mobiel internet). 

Verder moet je afspreken in welke vorm deze data overgestuurd worden. De data, in de vorm van een reeks bits, wordt daarbij vaak gemoduleerd: het digitale signaal wordt in een analoog signaal omgezet dat efficiënt en betrouwbaar overgestuurd kan worden. Een modem staat voor *mo*dulatie/*dem*odulatie: hiermee kun je zowel "zenden" als "ontvangen".

* er zijn allerlei vormen van modulatie van binaire signalen, bijvoorbeeld:
    * baseband modulatie (eigenlijk "geen modulatie"): 0 en 1 worden door verschillende spanningen voorgesteld. Je hebt daarnaast een kloksignaal nodig om te weten op welk tijdstip de opeenvolgende bits in het signaal te vinden zijn. Dit wordt gebruikt voor lokale verbindingen, binnen een computer, of in een lokaal netwerk (Ethernet).
    * frequency shift keying: 0 en 1 worden door verschillende frequenties voorgesteld. Een voorbeeld hiervan is het "ouderwetse" telefoonmodem: je gebruikt verschillende frequenties voor 0 en voor 1.
    * complexere vormen van modulatie, zoals gebruikt bij WiFi, maken een grotere datasnelheid mogelijk.
    
* https://www.youtube.com/watch?v=QDS4B0mM-ew (geluid van een telefoonmodem)

In een netwerk heb je veel meer afspraken nodig rond de data:

* de data worden (in de huidige netwerken) als pakketten verstuurd;
* per pakket heb je, naast de eigenlijke data, metadata nodig, zoals adres van de bestemming, van de afzender, lengte van de data, checksum van de data, en het protocol voor de interpretatie van de data.

Voorbeeld van een eenvoudige netwerkscanner: https://iot4beginners.com/creating-a-raspberry-pi-network-scanner/ (uit te breiden met het scannen van poorten?)



```{tableofcontents}
```
