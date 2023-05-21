Vragen en opdrachten
====================

.. nummering van de opdrachten: IoT-xxxx
.. niet teveel aan het hoofdstuk gekoppeld?

.. mchoice:: IoT-204
   :correct: a

   Waarom heb je een server in het publieke internet, zoals een MQTT-broker,
   nodig om vanuit een app overal te kunnen communiceren met de IoT-apparaten thuis?
   
   * de lokale LAN-gateway staat geen directe communicatie toe van buiten naar de apparaten in het lokale netwerk.
   
     * OK.
   * de afstand tussen de app en de IoT-apparaten is soms te groot om deze zonder een server-tussenstap te overbruggen.
   
     * Het internet zorgt voor het overbruggen van de afstand - als je een verbinding kunt maken. Helaas blokkeert de lokale LAN-gateway binnenkomende berichten.
   * het formaat van de berichten vanuit de app op je smartphone is niet geschikt voor de IoT-apparaten.
   
     * Dit zou je in de app kunnen aanpassen, of eventueel in een lokale bridge. Daarvoor heb je geen server nodig.

.. shortanswer:: IoT-205

   Een IoT-radio heeft meestal een vast maximaal vermogen.
   Verklaar met behulp van :code:`energie = vermogen * tijd` dat je met een lagere bitrate
   een grotere afstand kunt overbruggen.


.. dragndrop:: IoT-206

   Plaats de termen bij hun omschrijving.
   
   * Verbindt IoT-radio-netwerk en het lokale netwerk (LAN)
   
     * IoT-gateway
   * Verbindt het lokale netwerk en het publieke internet
   
     * LAN-gateway
   * Verbindt de IoT-knoop met de IoT-gateway
   
     * IoT-radio
   * Verbindt de IoT-knopen met de IoT-controllers, apps en diensten in het publieke internet
   
     * MQTT-broker

**Opdracht**

1. Ga na wat het IP-adres (internetadres) is van je computer, via de netwerkinstellingen van je computer.
2. Ga na wat het (publieke) IP-adres is van je computer, via een website als https://www.whatismyip.com.
3. Als deze twee verschillen, wat kun je dan zeggen over het lokale netwerk (LAN) en de bijbehorende LAN/WAN gateway/router?
