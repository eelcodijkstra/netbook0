Toetsvragen
-----------

.. bij http protocol

Toetsvragen bij het HTTP protocol

.. mchoicem:: mc-http-01
  :answer_a: de client moet de server kunnen vinden
  :answer_b: de server moet de client kunnen vinden
  :answer_c: de client kan op elk moment de server een verzoek (request) sturen
  :answer_d: de server kan op elk moment de client een response sturen
  :answer_e: de client moet altijd beschikbaar zijn
  :correct: a,c

  Welke van de bovenstaande uitspraken gelden voor een client-server interactie?

.. mchoicem:: mc-http-02
  :answer_a: de server moet de client kunnen vinden
  :answer_b: de server kan op elk moment de client een response sturen
  :answer_c: de client kan op elk moment de server een verzoek (request) sturen
  :answer_d: de server moet altijd beschikbaar zijn
  :answer_e: de client moet altijd beschikbaar zijn
  :correct: c,d

  Welke van de bovenstaande uitspraken gelden voor een client-server interactie?

.. mchoice:: mc-http-03
  :correct: b

  Hoe weet je wat het type van de payload is in een server-response?
  
  * Niets: je moet het uit de payload zelf opmaken.
  * De "Content-Type" header in de response van de server.
  * De client (browser) krijgt altijd het type payload waarom deze vraagt.

.. dragndrop:: dnd-http-101

   Plaats het onderdeel van de URL "http://infvopedia.nl:1880/test/hello" bij de passende benaming.
   
   * domeinnaam
   
     * infvopedia.nl
   * poortnummer
   
     * 1880
   * pad-gedeelte
   
     * /test/hello
   * schema (protocol)
   
     * https:

..

.. mchoice:: mc-http-10
  :correct: b

  Wat is het protocol waarop HTTP gebaseerd is, d.w.z. het direct onderliggende protocol?
  
  * WiFi
  * TCP
  * IP
  * UDP
  * TLS

.. parsons:: prs-http-11

   Plaats de protocollen in de juiste stack-volgorde, met het laagste protocol onderaan::

       HTTP
       TCP
       IP
       WiFi


.. dragndrop:: dnd-http-102

  Plaats het onderdeel van het HTTP-protocol bij de passende benaming.
  
  * adres
  
    * URL
  * metadata
  
    * headers
  * request-type
  
    * method
  * payload
  
    * HTML
  * interactie
  
    * client-server
