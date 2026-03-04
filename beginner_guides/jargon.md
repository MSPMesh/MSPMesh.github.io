---
title: Jargon
parent: Beginner Guides
---

## Acronyms

| Acronym | Meaning |
|---------|---------|
| LOS     | Line Of Sight |
| ATCF    | As The Crow Flies |
| AGL     | Above Ground Level |
| HWT     | HeyWhatsThat - A website that creates Line Of Sight signal coverage maps |
| 4631    | RAK's 4631 "WisBlock" node |
| RAK150  | A completed node built around RAK's 150x75mm solar enclosure |
| SNR     | Signal-to-Noise Ratio |
| RSSI    | Received Signal Strength Indicator |
| SWR     | Standing Wave Ratio |
| BBS     | Bulletin Board System - A local message board hosted on a Meshtastic node that users on the mesh can post to and read from |
| MQTT    | Message Queueing Telemetry Transport - Meshtastic can use MQTT as a bridge so that messages from the LoRa mesh can sync to Wi‑Fi or the internet |
| Rx      | Receiving - How well a node hears incoming packets from the mesh |
| Tx      | Transmitting - How well a node can transmit packets to the mesh |
| ChUtil  | Channel Utilization - The percentage of time the radio channel is busy |
| LoRa    | Long Range - A low-power, wide-area network radio technique that powers Meshtastic |
| GPIO    | General-Purpose Input/Output - Configurable pins on microcontrollers |


## Definitions

### Shore Power
Shore power is a term used to describe the power that is supplied to a device or system from an external source, such as a wall outlet or generator. In the context of MSPMesh, shore power typically refers to the power supplied to a node that is permanently installed in a location where it can be plugged into an electrical outlet. This is in contrast to battery-powered nodes, which rely on batteries for power.

### Splash
Splash is a term used to describe the area that a node can "see" from its location. This area is typically represented as a red splash on a map, indicating the coverage area of the node. The splash is generated using HeyWhatsThat, which estimates the coverage area based on the height and location of the node.

### Hop
A hop in Meshtastic is a single relay step where one node forwards a received LoRa packet to the next node in the mesh. Each hop extends the message’s reach by passing it along to another node that can hear it. As an example, a message that travels through 3 nodes before being read is said to have taken "3 hops" from the sender to the receiver.

### Ack
Short for "acknowledged", "ack" is a shorthand way of indicating that a message was received. Meshtastic automatically sends acknowledgement packets when it receives messages. However, users may also choose to send messages that acknowledge others as an indication of how far a message traveled through the mesh.