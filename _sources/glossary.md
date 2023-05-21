# Woordenlijst

```{glossary}

Actuator
  Onderdeel voor het besturen van een fysisch verschijnsel (vanuit een elektronische schakeling).
  Voorbeelden van sensoren: luidspreker, beeldscherm, lamp, led, relais (voor het schakelen van grotere stromen),
  waterklep, buzzer, enz.

Best effort communicatie
  Communicatie in de verwachting dat deze meestal aankomt, zonder garantie voor de betrouwbare aflevering.
  Veel basisprotocollen zijn best effort, bijvoorbeeld: Ethernet, IP, RFM69, LoRa.
  Betrouwbare communicatie moet dan (als dat nodig is) door een protocol in een hogere laag gerealiseerd worden.
  ("best effort" zegt niets over de daadwerkelijke betrouwbaarheid van de communicatie.)

Controller
  computer of computerprogramma voor het meten en aansturen van fysische verschijnselen via sensoren en actuatoren.
  Een IoT-knoop heeft een *microcontroller*: een volledige besturingscomputer op een chip.

Client
  Een rol in een client-server interactie (zie daar).

Client-server interactie
  Eén van de soorten interacties in netwerken: de client(computer) stuurt een verzoek (request) naar de server, waarna de server een antwoord (response) terugstuurt. Een voorbeeld hiervan is de interactie in het HTTP-protocol tussen de browser (als client) en de webserver (als server). Andere protocollen die het client-server model gebruiken zijn *FTP* (file transfer) en *SMTP* en *IMAP* (voor e-mail). De client en de server zijn *rollen* in deze interacties.  Eenzelfde computer kan in meerdere interacties betrokken zijn, als client en als server.

Downlink
  (Van een bericht:) van de toepassing naar de IoT-knoop; tegenover uplink.

Eindapparaat
  Apparaat dat het netwerk gebruikt voor de verbinding met andere eindapparaten. Een eindapparaat heeft geen rol in het netwerk.

Event
  Gebeurtenis die op een bepaald moment plaatsvindt, waarbij de duur niet van belang is.
  Voorbeelden: het indrukken van een knop; het openen van een deur; een hartslag.
  (In tegenstelling tot: *signaal*).

Frame
  Naam voor een Ethernet- of WiFi-"pakket".

Gateway
  Verbinding tussen twee netwerken. Als de protocollen van deze netwerken verschillen, dan verzorgt de gateway de *protocol-conversie*.

Host
  Een apparaat dat verbonden is in het (internet)netwerk, en die als bron of bestemming van netwerkverkeer kan dienen. (Opmerking: een eindapparaat is altijd een "host"; netwerkapparaten met bijvoorbeeld een webinterface, zoals een thuisrouter, zijn dat ook.) Een host heeft een adres in het netwerk.

MAC-adres
  Het wereldwijd-unieke hardware-adres van een netwerkinterface. Zowel Ethernet als WiFi gebruiken dezelfde soort 48-bits MAC-adressen. Dit adres is door de leverancier aan het interfacce toegewezen, en verandert dus niet. (Ook Bluetooth gebruikt dergelijke MAC-adressen.)

Medium
  Middel voor een fysieke verbinding, bijvoorbeeld Ethernetkabel, glasvezelkabel, of WiFi(-radio).

Metadata
  "data voor het beschrijven van data".
  In het geval van communicatie, meestal data over de communicatie,
  bijvoorbeeld het volgnummer van een bericht, tijdstip van de communicatie,
  of de signaalsterkte bij radiocommunicatie.

Modem
  Modulator/demodulator: past het (data)signaal aan aan het betreffende medium.

Netwerkapparaat
  Apparaat met een rol in het netwerk, bijvoorbeeld voor het omzetten van signalen (modem), of voor het routeren van IP-pakketten (router).

Pakketradio
  Radio voor pakket-georiënteerde communicatie. Pakketten voor IoT-radio's zijn vaak vrij klein,
  met bijvoorbeeld een maximale payload van 60 bytes (RFM69) of 51 bytes (LoRaWan - KPN).

Payload
  De "eigenlijke data" die getransporteerd wordt als onderdeel van een bericht, pakket of frame.
  Zie ook *metadata*.

Replay-attack
  poging om in te breken in een beveiligde communicatie, door het herhalen van een vroeger bericht.
  Stel dat je altijd hetzelfde (radio)bericht gebruik om een deur te openen:
  iemand kan dit bericht opvangen en opnieuw afspelen als het hem uitkomt.
  Je kunt dit voorkomen door elk bericht van een volgnummer te voorzien:
  een bericht dat niet in de volgorde past wordt overgeslagen.

Sensor
  (Elektronisch) onderdeel voor het waarnemen of meten van een fysisch verschijnsel: bijvoorbeeld temperatuur, luchtdruk,
  licht, beeld, geluid, versnelling, gasconcentraties, enz.
  Ook drukknoppen, camera's, microfoons, GPS-ontvangers zijn voorbeelden van sensoren.
  Moderne smartphones hebben tientallen sensoren.

Server
  Een rol in een client-server interactie (zie daar).

Signaal
  een signaal heeft op elk moment een waarde (in tegenstelling tot een *event*)
  In een signaal kunnen *events* gedetecteerd worden, bijvoorbeeld de overgang van "laag" naar "hoog";
  of een "hartslag".

Switch
  Verbindt meerdere Ethernet-kabelsegmenten en stuurt Ethernet-frames door naar het segment van de bestemming.

Uplink
  (Van een bericht:) van de IoT-knoop naar de toepassing; tegenover downlink.

```
