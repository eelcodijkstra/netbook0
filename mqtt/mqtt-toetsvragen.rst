Toetsvragen
===========

.. dragndrop:: h4-dd-1

  Plaats het protocol in de juiste laag.
  Let op de namen van de lagen, de volgorde is niet noodzakelijk die in de stack!
  
  * Application layer
  
    * MQTT
  * Transport layer
  
    * TCP
  * Internet layer
  
    * IP
  * Link layer
  
    * WiFi


.. dragndrop:: h4-dd-2

  Plaats de term bij de bijbehorende omschrijving.
  
  * ontvangt MQTT berichten en stuurt deze door naar geabonneerde clients
  
    * broker 
  * identificeert een stroom berichten
  
    * topic 
  * client publiceert een bericht naar een topic

    * publish(M,T)
  * client abonneert zich op een topic
  
    * subscribe(T)

.. mchoice:: h4-mc-3
  :correct: a,c

  Welke topics passen bij het wildcard-patroon ``node/+/+`` ?
  
  * ``node/1234/sensors``
  * ``node/+/sensors``
  * ``node/379/actuators``
  * ``node/sensors``
  * ``node/1234``
  
    * (feedback)

.. mchoice:: h4-mc-4
  :correct: a,b,c

  Voor welk soort gebruik is JSON handig?
  
  * opslaan van JavaScript (cq. Python enz.) objecten in een database
  * communiceren van JavaScript objecten
  * afdrukken van JavaScript objecten
  * opslaan van JavaScript objecten in een JavaScript array
  * bewerken van JavaScrip objecten 

.. mchoice:: h4_mc-5
  :correct: b

  Het publiceren van een MQTT-bericht naar een topic kun je beschouwen als:
  
  * 1-op-1 communicatie naar een andere client
  * 1-op-N communicatie (broadcast) naar andere clients

.. parsons:: h4_pn_6

  Zet de onderdelen van de MQTT-interactie in de juiste volgorde::

    client B: subscribe("chat")
    client A: publish("hallo?", "chat")
    broker: push("hallo?", "chat") naar B
    client B: ontvang("hallo?", "chat")

.. parsons:: h4_pn_7

  Stapel de protocollen op de juiste manier, met het toepassingsprotocol bovenaan::
   
    MQTT
    TCP
    IP
    WiFi

..
