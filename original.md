# The Microsoft Azure Architect's Reference

A one-page summary of the facts and figures for Microsoft Azure Services.

All figures have been taken from official Microsoft web sites (see the refrences at the bottom).

This reference does not attempt to cover cost. Please refer to the [Azure Pricing Calculator](http://www.windowsazure.com/en-us/pricing/calculator/?scenario=full) instead.

This guide is incomplete. Please fork, adjust and send a pull request (please include a link to official Microsoft documentation for any information added to the page).


### Data Center Locations

* Asia Pacific
  * Asia Pacific East (Hong Kong)
  * Asia Pacific Southeast (Singapore)
* Europe
  * Europe North (Ireland)
  * Europe West (Netherlands)
* United States
  * US North Central (Illinois)
  * US South Central (Texas)
  * US East (Virginia)
  * US West (California)
* Japan
  * Japan East (Tokyo)
  * Japan West (Osaka)
* China*
  * Beijing
  * Shanghai
* South America
  * Brazil South (São Paulo) `PREVIEW`

> *Note: Microsoft Azure services in China Data Centres are only available for use from within China itself. These data centers are disconnected from rest of the Microsoft Azure Data Centres. You can visit the chinese version of Microsoft Azure at: http://windowsazure.cn/

To find your nearest Data Center, use the [Azure Speed Test](http://azurespeedtest.azurewebsites.net/).

## Compute

### Cloud Services / Virtual Machines

Virtual Machine sizes:

<table>
<tr>
<th>Size</th>
<th>Cores</th>
<th>RAM</th>
<th>Disk [a]<br/>(Web/Worker)</th>
<th>Disk [b]<br/>(VM)</th>
<th>Bandwidth<br/>(indicative)</th>
</tr>
<tr><td>X-Small</td><td>Shared</td><td>768 MB</td><td>19 GB</td><td>20 GB</td><td>5 Mbps</td></tr>
<tr><td>Small</td><td>1</td><td>1.75 GB</td><td>224 GB</td><td>70 GB</td><td>100 Mbps</td></tr>
<tr><td>Medium</td><td>2</td><td>3.5 GB</td><td>489 GB</td><td>135 GB</td><td>200 Mbps</td></tr>
<tr><td>Large</td><td>4</td><td>7 GB</td><td>999 GB</td><td>285 GB</td><td>400 Mbps</td></tr>
<tr><td>X-Large</td><td>8</td><td>14 GB</td><td>2,039 GB</td><td>605 GB</td><td>800 Mbps</td></tr>
<tr><td>A5</td><td>2</td><td>14 GB</td><td>489 GB</td><td>135 GB</td><td>200 Mbps</td></tr>
<tr><td>A6</td><td>4</td><td>28 GB</td><td>999 GB</td><td>285 GB</td><td>400 Mbps</td></tr>
<tr><td>A7</td><td>8</td><td>56 GB</td><td>2,039 GB</td><td>605 GB</td><td>800 Mbps</td></tr>
</tr>
</table>

_[a] Disk (Web/Worker) is the local storage available on Cloud Services_

_[b] Disk (VM) is the temp drive available on Virtual Machines_

* Max disk performance: __500 IOPS__ per disk
* Max size of Virtual Machine OS Disk: __127 GB__
* Max roles per deployment: __25__
* Max endpoints per deployment: __25__ input endpoints, __25__ internal endpoints
* SLA: __99.95%__ (with two or more role instances in different fault and upgrade domains)

###Big Compute
<table>
<tr>
<th>Size</th>
<th>CPU</th>
<th>RAM</th>
<th>Disk</th>
</tr>
<tr><td>A8</td><td>8 @ 2.6 GHz(Intel® Xeon® E5-2670)</td><td>56 GB (DDR3-1600 MHz)</td><td>1,770 GB</td></tr>
<tr><td>A9</td><td>16@ 2.6 GHz(Intel® Xeon® E5-2670)</td><td>112 GB (DDR3-1600 MHz)</td><td>1,770 GB</td></tr>
</tr>
</table>

Notes

* PaaS only
* 10 Gbps Ethernet
* 40 Gbps back end, Remote Direct Memory Access (RDMA) capable. 
* RDMA is only enabled through applications that use the Network Direct interface. (i.e. HPC Pack 2012 R2 on Windows Server 2012 or Windows Server 2008 R2. __NOT__ supported on Windows Server 2012 R2)
* Only available in West Europe. (Feb 2014)
* Cannot be deployed by using a cloud service that is part of an existing affinity group. Likewise, an affinity group with a cloud service containing A8 or A9 instances cannot be used for deployments of other instance sizes.

### Web Sites

* Max free web sites per Data Center: __10__
* Max shared websites per Data Center: __100__
* Max standard websites per Data Center: __500__
* Free tier limitations: __1% CPU per hour, 2.5 minutes of CPU every 5 minutes, 165 MB data out per day, 1024 MB storage, 1024 MB RAM per hour__
* Max instance count in standard mode: __10__ (large instances)
* SLA: __99.9%__

## Data Services

### Storage

* Total capacity: __200 TB__
* Expected transactions per second: __20,000__ per account
* Total bandwidth: __10 GB in 15 GB out per second__ (5 GB and 10 GB respectively for geo redundant)
* Maximum number of accounts: __20__ `soft limit`, __50__ [`hard limit`](https://twitter.com/jaiharidas/status/459528997030748160)
* SLA: __99.9%__

#### Blob Storage

* Expected transactions per second: __2,000__ per blob 
* Expected bandwidth: __60 MB per second__
* Max blob size: __200 GB (block blob) 1 TB (page blob)__

#### Table Storage

* Expected transactions per second: __2,000__ per table partition
* Max table size: __200 TB__
* Max row size: __1 MB__
* Maximum key size __1 KB__ for PartitionKey and RowKey
* Max value size: __64 KB__
* Max number of values per row: __255__ (including partition key, row key and timestamp) 
* Max results per query: __1,000__
* Max batch insert size: __4 MB__ (must have the same partition key)

#### Cloud Queues

* Expected transactions per second: __2,000__ per queue
* Expected latency: __10 ms__
* Max message size: __64 KB__
* Max message TTL: __7 days__
* Max queue size: __200 TB__
* Ordering guarantee: __NO__
* Lease / Lock duration: __30 seconds (default) 7 days(max)__
* Max number of queues: __unlimited__
* Naming constraints: __queues names no longer than 63 chars__ (lower case)

#### Storage Best Practices 
ref: [MVA - Design & Implementation Jump Start](http://www.microsoftvirtualacademy.com/training-courses/windows-azure-storage-design-and-implementation-jump-start)

* Disable Nagle for small messages (<1.4k)
* Disable Expect 100-Continue*
* Increase default connection limit (ex. 100+)
* Take advantage of .Net 4.5 GC

```csharp
ServicePointManager.UseNagleAlgorithm = false;
ServicePointManager.Expect100Continue = false;
ServicePointManager.DefaultConnectionLimit = 100;
```


### SQL Database

* Max size: __150 GB__
* Max database servers: __6__ per Azure Account `soft limit`
* Max databases per server: __150__ (including master) `soft limit`
* SLA: __99.9%__
* Max number of database backup schedules: __10__ per subscription

# Application Services

### Service Bus Queues / Topics & Subscriptions

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

## Network Services

### Traffic Manager

* Naming constraints: __253 characters in total for the *.trafficmanager.net domain, maximum of 38 sub domains, each of which can be up to 63 characters__
* TTL recommendation: __5 minutes__
* Application polling: __30 second frequency, 10 second timeout, 3 retries before marked unavailable__
* SLA: __99.99%__

### Virtual Network

* Max VPN client endpoints: __250__
* SLA: __99.9%__

## Misc

Co-admins per subscription: __200__

## Service Levels

<table>
<tr><th>SLA %</th><th>Downtime per annum</th></tr>
<tr><td>99.9</td><td>8 hours 46 minutes</td></tr>
<tr><td>99.95</td><td>4 hours 23 minutes</td></tr>
<tr><td>99.99 </td><td>53 minutes</td></tr>
<tr><td>99.999</td><td>5 minutes</td></tr>
</table>

## References
* http://msdn.microsoft.com/en-us/library/windowsazure/hh767287.aspx
* http://msdn.microsoft.com/en-us/library/hh694235.aspx
* http://msdn.microsoft.com/en-us/library/windowsazure/dn249410.aspx
* http://blogs.msdn.com/b/windowsazure/archive/2012/11/02/windows-azure-s-flat-network-storage-and-2012-scalability-targets.aspx
* http://msdn.microsoft.com/en-us/library/windowsazure/jj553018.aspx
* http://msdn.microsoft.com/en-us/library/windowsazure/ee732538.aspx
* http://msdn.microsoft.com/en-us/library/windowsazure/ee336227.aspx
* http://blogs.msdn.com/b/windowsazure/archive/2011/09/01/number-of-roles-allowed-in-windows-azure-deployments-increased-to-25.aspx
* http://blogs.msdn.com/b/arunrakwal/archive/2012/04/11/windows-azure-how-to-increase-cores-per-subscription.aspx
* http://msdn.microsoft.com/en-us/library/windowsazure/dn197896.aspx
* http://www.windowsazure.com/en-us/support/trust-center/privacy/
* http://www.windowsazure.com/en-us/develop/net/aspnet/
* http://www.windowsazure.com/en-us/support/legal/sla/
* http://msdn.microsoft.com/en-us/library/windowsazure/hh744833.aspx
* http://www.windowsazure.com/en-us/manage/services/web-sites/how-to-scale-websites/
* http://msdn.microsoft.com/en-us/library/windowsazure/dn133803.aspx
* http://www.windowsazure.com/en-us/services/storage/
* http://msdn.microsoft.com/en-us/library/windowsazure/dd179338.aspx
* http://weblogs.asp.net/scottgu/archive/2014/02/20/azure-expressroute-dedicated-networking-web-site-backup-restore-mobile-services-net-support-hadoop-2-2-and-more.aspx
* http://blogs.technet.com/b/microsoft_blog/archive/2014/03/26/microsoft-becomes-the-first-global-public-cloud-provider-in-china-with-the-general-availability-of-microsoft-azure-in-the-region.aspx

#### Big Compute
* http://blogs.technet.com/b/windowshpc/archive/2014/01/30/new-high-performance-capabilities-for-windows-azure.aspx
* http://msdn.microsoft.com/library/azure/dn594431.aspx
* http://msdn.microsoft.com/en-us/library/azure/dn197896.aspx

## Acknowledgements

Thanks to [Rob Blackwell](http://robblackwell.org.uk/) for the idea.

![two10degrees](http://two10degrees.blob.core.windows.net/two10degrees.png)
