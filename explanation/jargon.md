---
title: Jargon
parent: Explanation
---
{% comment %} This comment will not appear on the final page and is just shown in the markdown. 
This page is for definitions of words that are uncommonly used outside of meshtastic 
{% endcomment %}

### Shore Power
Shore power is a term used to describe the power that is supplied to a device or system from an external source, such as a wall outlet or generator. In the context of MSPMesh, shore power typically refers to the power supplied to a node that is permanently installed in a location where it can be plugged into an electrical outlet. This is in contrast to battery-powered nodes, which rely on batteries for power.

### Splash
Splash is a term used to describe the area that a node can "see" from its location. This area is typically represented as a red splash on a map, indicating the coverage area of the node. The splash is generated using HeyWhatsThat, which estimates the coverage area based on the height and location of the node.

### Hop
A hop in Meshtastic is a single relay step where one node forwards a received LoRa packet to the next node in the mesh. Each hop extends the message’s reach by passing it along to another node that can hear it. As an example, a message that travels through 3 nodes before being read is said to have taken "3 hops" from the sender to the receiver.

### Ack
Short for "acknowledged", "ack" is a shorthand way of indicating that a message was received. Meshtastic automatically sends acknowledgement packets when it receives messages. However, users may also choose to send messages that acknowledge others as an indication of how far a message traveled through the mesh.
