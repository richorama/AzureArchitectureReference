* Max number of service bus namespaces: __50__ per Azure Acccount
* Expected transactions per second: __2,000__ per queue
* Expected latency: __100 ms__
* Max message size: __256 KB__ (Max header size 64kb)
* Max message TTL: __Unlimited__
* Max queue size: up to __5 GB__
* Queue size options: __1-5 GB__ (queue cannot be resized once created)
* Max number of queues: __10,000__ per service bus namespace `soft limit`
* Ordering guarantee: __Yes__ (through the use of messaging sessions)
* Lease / Lock duration: __60 seconds (default)__ (can bre renewed using the [RenewLock](http://msdn.microsoft.com/library/azure/microsoft.servicebus.messaging.brokeredmessage.renewlock.aspx) API)
* Naming constraints: __queues names no longer than 260 chars__ (case sensitive)
* SLA: __99.9%__

### Service Bus Capacity Planning
* Queue Space Consumption: __Number Of Messages * (Message Body Size + Message Header Size)__
* Topic Space Consumption: __Number Of Messages * (Message Body Size + (Message Header Size * Number Of Subscriptions))__

Capacity Approximations:
<table>
<tr>
<th>Message Size</th>
<th>1 GB Queue</th>
<th>2 GB Queue</th>
<th>3 GB Queue</th>
<th>4 GB Queue</th>
<th>5 GB Queue</th>
</tr>
<tr>
<td>1 KB</td>
<td>1,041,790</td>
<td>2,059,920</td>
<td>3,128,550</td>
<td>4,186,400</td>
<td>5,238,750</td>
</tr>
<tr>
<td>10 KB</td>
<td>102,996</td>
<td>208,358</td>
<td>312,537</td>
<td>416,716</td>
<td>520,895</td>
</tr>
<tr>
<td>50 KB</td>
<td>20,857</td>
<td>41,792</td>
<td>62,507</td>
<td>83,343</td>
<td>104,179</td>
</tr>
<tr>
<td>100 KB</td>
<td>10,466</td>
<td>20,836</td>
<td>31,254</td>
<td>41,672</td>
<td>52,090</td>
</tr>
<tr>
<td>250 KB</td>
<td>4,191</td>
<td>8,334</td>
<td>12,501</td>
<td>16,669</td>
<td>20,836</td>
</tr>
</table>

### Service Bus Relay

* SLA: __99.9%__