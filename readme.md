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
* China
  * Beijing
  * Shanghai

> Note: Microsoft Azure services in China Data Centres are only available for use from within China itself. These data centers are disconnected from rest of the Microsoft Azure Data Centres. You can visit the chinese version of Microsoft Azure at: http://windowsazure.cn/

To find your nearest Data Center, use the [Azure Speed Test](http://azurespeedtest.azurewebsites.net/).

## Compute

### Cloud Services / Virtual Machines

* Virtual Machine sizes:

<table><tr>
<th>Size</th>
<th>Cores</th>
<th>RAM</th>
<th>Disk [a]<br/>(Web/Worker)</th>
<th>Disk [b]<br/>(VM)</th>
<th>Bandwidth<br/>(indicative)</th>
</tr>
<tr><td>X-Small</td><td>Shared</td><td>768 MB</td><td>19 GB</td><td>20 GB</td><td>5 Mbps</td></tr>
<tr><td>Small</td><td>1</td><td>1.75 BB</td><td>224 GB</td><td>70 GB</td><td>100 Mbps</td></tr>
<tr><td>Medium</td><td>2</td><td>3.5 GB</td><td>489 GB</td><td>135 GB</td><td>200 Mbps</td></tr>
<tr><td>Large</td><td>4</td><td>7 GB</td><td>999 GB</td><td>285 GB</td><td>400 Mbps</td></tr>
<tr><td>X-Large</td><td>8</td><td>14 GB</td><td>2,039 GB</td><td>605 GB</td><td>800 Mbps</td></tr>
<tr><td>A5</td><td>2</td><td>14 GB</td><td>489 GB</td><td>135 GB</td><td>200 Mbps</td></tr>
<tr><td>A6</td><td>4</td><td>28 GB</td><td>999 GB</td><td>285 GB</td><td>400 Mbps</td></tr>
<tr><td>A7</td><td>8</td><td>56 GB</td><td>2,039 GB</td><td>605 GB</td><td>800 Mbps</td></tr>
<tr><td>A8</td><td>8</td><td>56 GB</td><td>1,770 GB</td><td>N/A</td><td>???</td></tr>
<tr><td>A9</td><td>16</td><td>112 GB</td><td>1,770 GB</td><td>N/A</td><td>???</td></tr>
</tr>
</table>

_[a] Disk (Web/Worker) is the local storage available on Cloud Services_

_[b] Disk (VM) is the temp drive available on Virtual Machines_


* Max disk performance: __500 IOPS__ per disk
* Max size of Virtual Machine OS Disk: __127 GB__
* Max roles per deployment: __25__
* Max endpoints per deployment: __25__ input endpoints, __25__ internal endpoints
* SLA: __99.95%__ (with two or more role instances in different fault and upgrade domains)

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
* Maximum number of accounts: __20__ `soft limit`
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
* Max message size: __256 KB__
* Max message TTL: __Unlimited__
* Max queue size: up to __5 GB__
* Max number of queues: __10,000__ per service bus namespace `soft limit`
* Ordering guarantee: __Yes__ (through the use of messaging sessions)
* Lease / Lock duration: __60 seconds (default)__ (can bre renewed using the [RenewLock](http://msdn.microsoft.com/library/azure/microsoft.servicebus.messaging.brokeredmessage.renewlock.aspx) API)
* Naming constraints: __queues names no longer than 260 chars__ (case sensitive)
* SLA: __99.9%__

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

## Acknowledgements

Thanks to [Rob Blackwell](http://robblackwell.org.uk/) for the idea.

![two10degrees](http://two10degrees.blob.core.windows.net/two10degrees.png)
