Toetsvragen
===========

.. bij "HTTP in het IoT"

..

.. mchoicem:: http-iot-01
  :answer_a: De IoT-knoop gebruikt een ander WiFi-protocol.
  :answer_b: De IoT-knoop is naast het eigen WiFi-netwerk niet met een ander netwerk verbonden.
  :answer_c: De IoT-knoop heeft een vast IP-adres in het eigen WiFi-netwerk.
  :answer_d: De IoT-knoop kan niet dezelfde IP-adressen gebruiken als het normale WiFi-netwerk.
  :correct: b
  :multiple_answers:
  :feedback_a: Ze kunnen hetzelfde protocol gebruiken.
  :feedback_b: Inderdaad: het netwerk is daardoor los van het internet.
  :feedback_c: Ook de gateway in het WiFi-netwerk heeft een vast IP-adres.
  :feedback_d: Ze gebruiken beide "lokale IP-adressen".

  Wat zijn de *verschillen* tussen een normale WiFi-access point (base station)/gateway en
  de IoT-knoop als access point?

..

.. mchoice:: http-iot-05
  :correct: b

  Door middel van een ingebouwde webserver kun je een apparaat (printer, controller, IoT-knoop)
  in het lokale netwerk bewaken (monitoren) en besturen.
  Welke informatie wordt in de client-server communicatie met deze webserver direct doorgestuurd?
  
  * Een veranderde sensorwaarde van het apparaat.
  * De besturing van een actuator van het apparaat.
  * Beide.
  * Geen van beide.

..

.. mchoice:: http-iot-07
  :correct: b

  Welke *method* gebruikt de browser voor het opsturen van een ingevuld formulier
  naar de server, om daarmee de toestand van de server te veranderen?
  
  * GET.
  * POST.
  * Kan allebeide.
  * Een andere method.

..

.. mchoice:: http-iot-09
  :correct: b

  Een apparaat in het lokale netwerk met een ingebouwde webserver kun je besturen:
  
  * via een browser op een computer in het publieke internet.
  * via een browser op een computer in het lokale netwerk.
  * via allebeide.
  * via geen van beide.
