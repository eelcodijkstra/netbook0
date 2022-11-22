Beperkingen van LoRaWan
-----------------------

.. figure:: images/LoRaWan-uplink-downlink-duty-cycle.png
    :width: 700px
    :align: center

    Beperkingen aan uplink- en downlink berichten

De beperkingen van LoRaWan hebben vooral te maken met de beperkingen van de vrije radioband van de LoRa radio's.
In deze vrije radioband mag een radio maximaal 1% van de tijd zenden.
Volgens de "fair use" regel van TheThingsNetwork mag een radio bovendien niet meer dan 30 seconden per dag zenden.
Dit geeft de volgende beperkingen op de berichten:

* payload: zo klein mogelijk, typisch ca. 10 bytes;
* uplink-berichten:  maximaal 20 maal per dag (gateway ver weg) tot maximaal 20 maal maal per uur (gateway dichtbij);
  zie :ref:`LoRa Spreading Factor(SF)<lora-spreading-factor>`.
* uplink-berichten: "best effort", geen ontvangstbevestiging.
* downlink-berichten: enkele berichten per dag; zonder "real time" garantie.

Een kleine payload betekent dat je deze *binair* moet coderen: tekst (JSON) gebruikt teveel bytes.

**Uplink-berichten.**
Het IoT-device bepaalt het moment waarop dit een uplink-bericht verstuurt.
Daarna moet het device weer geruime tijd tijd wachten voordat het weer kan zenden.

**Downlink-berichten.**
De gateway stuurt een downlink-bericht direct na het ontvangen een uplink-bericht van het IoT-device.
Met andere woorden: het IoT-device bepaalt wanneer het downlink-bericht verstuurd wordt,
niet de toepassing of de gateway.
Dit beperkt de mogelijkheden voor real-time besturing.

Voor meer details:
`LoRaWan class-A devices <https://lora-developers.semtech.com/library/tech-papers-and-guides/lorawan-class-a-devices/>`_
