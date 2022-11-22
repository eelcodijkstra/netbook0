Toetsvragen LoRaWan
-------------------

.. mchoicem:: mc-7-1-1
   :answer_a: parkeerplaatsbewaking
   :answer_b: slimme deurbel met camera
   :answer_c: besturing van verlichting thuis (domotica)
   :answer_d: besturing van straatverlichting
   :answer_e: GPS-tracker van vee
   :correct: b,c

   Voor welke van de onderstaande toepassingen is LoRaWan *geen* geschikte technologie?
   Verklaar je antwoord(en) hieronder.

.. shortanswer:: short-7-1-1

  Motiveer de antwoord(en) die je hierboven gegeven hebt.

..

.. mchoicem:: mc-7-1-2
   :answer_a: luchtkwaliteitsmeting
   :answer_b: afluisterapparatuur
   :answer_c: besturing van een robot
   :answer_d: GPS-tracker van snelle voertuigen
   :correct: b,c,d

   Voor welke van de onderstaande toepassingen is LoRaWan *geen* geschikte technologie?
   Verklaar je antwoord(en) hieronder.

.. shortanswer:: short-7-1-2

  Motiveer de antwoord(en) die je hierboven gegeven hebt.


.. shortanswer:: short-7-1-3

  Met de LoRaWan gateway op school kun je op een bepaald moment berichten ontvangen van een LoRa IoT-knoop op 30 km afstand.
  Betekent dit dat je alle LoRa IoT-knopen binnen die straal kunt ontvangen? Motiveer je antwoord.

.. mchoice:: mc-7-1-4
    :correct: d

    Met LoRa is dataverkeer met IoT-knopen op grote afstanden (tot kilometers ver) mogelijk.
    Wat maakt het mogelijk om die afstanden te overbruggen?
    
    * grote antenne’s op de IoT-knopen
    * groot vermogen van de radiozenders op de IoT-knopen
    * grote batterijen in de IoT-devices
    * een lage bitrate (bits/s)

.. mchoicem:: mc-7-1-5
    :answer_a: zenden met beperkt vermogen (typisch max. 25 mW)
    :answer_b: beperkte zendtijd (duty-cycle) - typisch max. 1%
    :answer_c: maximale grootte van de antenne’s
    :answer_d: zenden alleen met een zendvergunning
    :answer_e: beperkte bitrate (bits/s)
    :correct: a,b

    LoRa maakt gebruik van vrije (gratis te gebruiken) radiobanden.
    Welke beperkingen zijn opgelegd aan het gebruik van deze radiobanden?

.. shortanswer:: short-7-1-6

  Er zijn veel meer LoRaWan IoT-device met sensoren dan met actuatoren.
  Noem een aantal redenen waarom dit zo is.

.. dragndrop:: dd-7-1-7

  Koppel de begrippen aan hun omschrijving
  
  * meet en bestuurt de fysieke omgeving met sensoren en actuatoren
  
    * IoT-device
  * verbindt IoT-devices met het LoRaWan netwerk
  
    * LoRaWan gateway
    
  * verbindt het LoRaWan netwerk met toepassings-servers
  
    * LoRaWan server
  * long range radio
  
    * LoRa
  * netwerk en netwerkprotocol op basis van LoRa
  
    * LoRaWan
  * onderdeel van een IoT-device voor het meten van de omgeving
  
    * Sensor
  * Wide Area Network
  
    * Wan

.. mchoicem:: mc-7-1-8
   :answer_a: IoT-devices
   :answer_b: LoRaWan-gateway
   :answer_c: LoRaWan Network server
   :answer_d: LoRaWan Application server
   :correct: a,d

   LoRaWan wordt veilig ("secure") genoemd vanwege de end-to-end encryptie.
   Wat betekent dit?
   Welke apparaten kunnen de berichten ontsleutelen?

.. mchoicem:: mc-7-1-9
   :answer_a: een groter bereik
   :answer_b: een kleiner bereik
   :answer_c: meer berichten per uur mogelijk
   :answer_d: minder berichten per uur mogelijk
   :answer_e: kortere batterij-levensduur voor het IoT-device
   :correct: a,d,e

   LoRa-radioberichten verstuurd met SF12 hebben ten opzichte van SF7-berichten de volgende eigenschappen:

.. dragndrop:: dd-7-1-10

   Je gebruikt een radio met een bepaalde frequentie en een bepaald maximaal zendvermogen.
   Welke combinaties van eigenschappen gelden hiervoor?
   
   * groter bereik
   
     * lagere bitrate
   * groter energieverbruik per bericht
   
     * grotere airtime
   * kleiner bereik
   
     * hogere bitrate
   * meer berichten per uur
   
     * kleinere airtime
