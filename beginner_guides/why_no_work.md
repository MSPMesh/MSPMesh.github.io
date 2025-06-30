---
title: Why isn't My Node Working?
parent: Beginner Guides
---

## Why isn't My Node Working?
Here are some common symptoms of a node that is not working properly:  
    
1) No nodes on your node list or map    
2) Can't receive messages from other nodes    
3) Can't send messages to other nodes (Max Retransmission Reached)    

### Can't see other nodes and not receiving messages
If you can't see other nodes on your node list or map, and you can't receive messages from other nodes, it can be caused by a few different issues:
- **Not on the correct channel**: In Minneapolis we use the MediumFast channel. If you are not on the correct channel, you will not be able to see other nodes or receive messages. To solve this, change your channel to MediumFast. 
- **Node set to HAM mode**: If your node is set to HAM mode, much of the functionality of the node is changed or disabled. If you set this mode, the best thing you can do is factory reset your node and start over.
- **Not near other nodes or poor line of sight**: If you are not near any other nodes, you will not be able to see them or receive messages. Also, if there are obstructions between you and other nodes, such as buildings or trees, this can cause poor line of sight and prevent you from seeing other nodes or receiving messages. The best thing you can do is move to a high outdoor location. 

### I am seeing other nodes and receiving messages, but I can't send messages
If you can see other nodes on your node list or map and you can receive messages them, but you can't send messages, it is almost always caused by one of the following issues:
- **Poor line of sight**: If there are obstructions between you and the other nodes, such as buildings, hills, or trees. The frequency we use is easily blocked by solid objects. The best thing you can do is move to a high outdoor location.
- **Low transmit power**: Most small pocket nodes have pretty good receive sensitivity, but they often have low transmit power. This means that they can receive messages from other nodes, but they can't send messages very far. Again, the best thing you can do is move to a high outdoor location.    

Pocket nodes like the t1000e or heltec v3 are very sensitive to receive messages, but often transmit at around 0.25W or less. It is unlikely that you will be able to send a message from inside a house or building unless there is a node nearby that can relay your message. The best way to send messages from a pocket node at your house is to install a node outside your house, such as on a roof or in a tree. This will give you a much better chance of sending messages.