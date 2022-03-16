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
