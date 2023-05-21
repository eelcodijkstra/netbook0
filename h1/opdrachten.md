# Vragen en opdrachten

## Bestudeeer een bestaande toepassing


:::{exercise} Bestudeer een bestaande toepassing

  Bestudeer in een kleine groep een IoT-toepassing uit de voorgaande lijst of een zelf gevonden toepassing.
  Beantwoord daarvoor de onderstaande vragen.

  *Suggestie*: verdeel de toepassingen over een aantal groepen in de klas,
  maak een presentatie met een overzicht van de toepassing en de resultaten van de onderstaande vragen,
  en presenteer deze in de klas - bijv. 10 minuten per groep.

  *Opmerking:* als de toepassing mogelijk verschillende soorten IoT-knopen met sensoren bevat,
  kies dan één soort, en geef je keuze bij de eerste vraag aan.

* Welke gegevens kan/moet een IoT-knoop (IoT-device) in deze oplossing versturen naar de toepassing?
* Druk deze gegevens zo mogelijk in getallen uit: bereik (minimum, maximum), precisie (bijvoorbeeld aantal significante cijfers)?
* Hoe vaak moeten deze gegevens verstuurd worden? (Hint: hoe vaak veranderen de gegevens; hoe vaak heb je ze nodig voor een beslissing?)
* Geef een toelichting bij het bovenstaande antwoord.
* Hoe betrouwbaar moet de communicatie zijn? Hoe erg is het als er een bericht gemist wordt?

  * Niet zo erg - als het niet te vaak gebeurt; het volgende bericht maakt dit goed.
  * Elk bericht is belangrijk, desnoods moet het opnieuw verzonden worden.
  * Anders

* Geef een toelichting bij het bovenstaande antwoord.
* Hoe real-time moet de verwerking zijn? Met andere woorden: als een input (sensorwaarde) verandert, hoe snel moet deze verandering dan door het slimme systeem verwerkt zijn tot een reactie in een output (actuator)?(Voorbeeld: als je een schakelaar van een slimme verlichting thuis bedient, verwacht je binnen een halve seconde een reactie van de lamp(en).

  * De communicatie hoeft niet veilig te zijn.
  * De communicatie mag publiek zijn, maar mag niet door derden aangepast kunnen worden.
  * De communicatie mag niet zichtbaar of manipuleerbaar zijn voor derden zichtbaar.
  * Anders
  
* Hoe veilig moet de communicatie zijn? (Geef een toelichting bij je antwoord.)

  * Er is geen privacy-issue
  * Er zijn eenvoudige privacy-issues
  * Privacy is een essentieel onderdeel
  * Anders

* Is de privacy van de oplossing van belang? (Kunnen de gegevens die de IoT-knoop verstuurt aan een persoon of aan een kleine groep personen gelinkt worden?)
* Is de IoT-knoop voorzien van een netvoeding of van een batterij? Beschrijf kort waarom.
* Welke diensten "in the cloud" zou je kunnen gebruiken voor een slimme oplossing?
* Wat zijn de belangrijkste voordelen van de slimme oplossing, en voor wie?
* Wat zijn de belangrijkste nadelen van de slimme oplossing, en voor wie?

:::

## Bedenk een eigen IoT toepassing

:::{exercise} Bedenk en beschrijf een eigen IoT-toepassing

  Bedenk en beschrijf een eigen IoT-toepassing.

  * wat is de functie van de toepassing?
  * welke onderdelen denk je voor deze toepassing nodig te hebben?
  * hoe zien de IoT-knopen eruit? Welke sensoren, actuatoren; batterij/netvoeding;
    draadloze/bedrade communicatie?

  Maak hiervan een presentatie of een kort document.
  Beantwoord daarin ook de vragen zoals geformuleerd in de vorige opdracht voor bestaande oplossingen.


:::