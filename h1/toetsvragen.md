# Toetsvragen

## Voorkennis


:::{mchoice} vraag-VK-1
:correct: a

Als je je computer in een ander lokaal netwerk verbindt, bijvoorbeeld als je van huis naar school gaat, wat verandert er dan?

* Het IP-adres verandert (en het MAC-adres blijft gelijk)
    * OK! Het IP-adres bevat een netwerk-adres: dat deel verandert in elk geval
* Het MAC-adres verandert (en het IP-adres blijft gelijk)
    * Nee - het MAC-adres is onafhankelijk van het netwerk
* Het IP-adres en het MAC-adres veranderen beide
    * Nee - het MAC-adres is onafhankelijk van het netwerk
* IP-adres en MAC-adres blijven gelijk.
    * Nee - Het IP-adres bevat een netwerk-adres: dat deel verandert in elk geval
    
:::


:::{mchoice} vraag1_VK-2
:correct: b

Kan je laptop-computer verschillende IP-adressen tegelijk hebben? (Verklaar je antwoord.)

* Nee
    * Nee - elk netwerk-interface (WiFi, Ethernet) heeft een eigen IP-adres
* Ja
    * OK! - elk netwerk-interface (WiFi, Ethernet) heeft een eigen IP-adres

:::

:::{mchoice} vraag-VK-3
:correct: b

Wat is de relatie tussen het internet en het web?

* Het internet is een toepassing van het web
    * Het web-protocol (HTTP) gebruikt TCP (en daaronder IP).
* Het web is een toepassing van het internet
    * Het web-protocol (HTTP) gebruikt TCP (en daaronder IP)
:::


## Inleiding


## Voorbeelden


:::{mchoice} vraag-VB-1
:correct: c

Hoe heet een opnemer om een fysische grootheid, zoals de temperatuur, van een "ding" te meten?

* Controller
    * Met een controller bestuur je een IoT-toepassing
* IoT-knoop
    * Een IoT-knoop kan sensoren bevatten (en actuatoren)
* Sensor
    * Goed!
* Actuator
    * Met een *actuator* verander je een fysische grootheid
:::

:::{mchoice} vraag-VB-2
:correct: b

Hoe verhouden het web, het internet en het internet of things zich?
(Hoe verhouden de verschillende protocollen zich?)

* Het internet is een toepassing van het web
    * Nee - het web is een toepassing van het internet: HTTP maakt gebruik van TCP/IP
* Het web is een toepassing van het internet
    * Ja! Het web is een toepassing van het internet: HTTP maakt gebruik van TCP/IP
* Het internet of things is een toepassing van het web
    * Nee - het internet of things gebruikt andere protocollen (MQTT etc.) dan het web (HTTP)
:::

:::{mchoice} vraag1-VB-3
:correct: a,c

   Welke van de onderstaande uitspraken is waar?
      
   * een controller bestuurt de sensoren en actuatoren bij het "ding"
   * een IoT-knoop bevat altijd sensoren en actuatoren
   * een IoT-knoop bevat altijd een controller
   * een IoT-knoop is altijd draadloos verbonden aan het internet  

:::

:::{mchoice} vraag1-VB-4
:correct: d

Hoe heet de verbindende component tussen een IoT-knoop en het internet?

* Controller
* Actuator
* Radio
    * Een IoT-knoop kan ook bedraad zijn.
* Gateway
    * Ja

:::

:::{dragndrop} dnd-ex-1

Plaats de termen bij hun beschrijving.

* Besturingscomputer
    * Controller
* Meet een fysische grootheid
    * Sensor
* Verbindt twee netwerken
    * Gateway

:::


:::{dragndrop} dnd-ex-3

Welke bitrate hoort (ongeveer) bij welk soort signaal?
(Neem in het "temperatuur"-geval aan dat dit een kamerthermostaat betreft die elke 2 minuten de temperatuur meet.)

* Muziek (mp3, AAC)
    * 200 kbyte/s
* Temperatuur 
    * 0,01 byte/s
* Video 
    * 5 MByte/s
* Spraak (telefoon)
    * 5 kbyte/s

:::

:::{parsons} par_1_1

Plaats de protocollen voor een IoT-toepassing in de juiste volgorde in de "stack".

```
IoT-toepassingsprotocol
MQTT
Transport Control Protocol (TCP)
Internet Protocol (IP)
WiFi
```

:::

:::{mchoice} vraag1_ya
:correct: d
:multiple:

Je kunt berichten versleutelen op verschillende protocol-niveaus.
In welk geval is er sprake van end-to-end encryptie?
   
* WiFi-protocol
    * Iedereen in hetzelfde WiFi-netwerk gebruikt dezelfde sleutel
* IP-protocol
    * (??)
* TCP/TLS-protocol (HTTPS)
    * De versleuteling is tussen de browser en de webserver.
* Toepassingsprotocol
    * De webserver kan het bericht niet ontsleutelen.
:::

* end-to-end principe

    * protocol in eindpunten, niet in netwerk
    * bijv. http

..

:::{mchoice} vraag1_xyb
:correct: c,d


   Welke van deze protocollen zijn *end-to-end*, en vind je alleen in de eindpunten,
   en niet in het netwerk?
   
   * WiFi
   
     *  WiFi is een Link-layer protocol in het lokale netwerk
   * Internet Protocol (IP)
   
     * IP is het basis netwerk-procotol van het internet - in het netwerk
   * Transport Control Protocol (TCP)
   
     * TCP is het end-to-end transport-protocol van het internet
   * HyperText Transfer Protocol (HTTP)
   
     * HTTP is het end-to-end toepassingsprotocol van het web, op basis van het internet.
:::

:::{shortanswer} WiFi-monitor

een IoT-knoop verstuurt elke minuut het aantal WiFi-gebruikers in de directe omgeving (max. 255).

* wat is de  bitrate?
* maakt het een groot verschil of de latency 0,1s, 10s of 60s is?
* is dit een privacy-risico?
* op welke manieren zou je dit gegeven kunnen gebruiken?
:::