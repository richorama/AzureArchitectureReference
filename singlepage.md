# Azure Architect's Reference

A summary of the facts and figures for Microsoft Azure Services.

All figures have been taken from official Microsoft web sites (see the refrences at the bottom).

This reference does not attempt to cover cost. Please refer to the [Azure Pricing Calculator](http://www.windowsazure.com/en-us/pricing/calculator/?scenario=full) instead.

This guide is incomplete. Please fork, adjust and send a pull request (please include a link to official Microsoft documentation for any information added to the page).

This reference is available as a [single page](singlepage.md) or [split into multiple pages](readme.md).

---

## Physical Infrastructure

## Data Centers

* Asia Pacific
  * Asia Pacific East (Hong Kong)
  * Asia Pacific Southeast (Singapore)
* Europe
  * Europe North (Ireland)
  * Europe West (Netherlands)
  * United Kingdom (TBA)
* United States
  * US North Central (Illinois)
  * US South Central (Texas)
  * US East (Virginia)
  * US East 2 (Virginia)
  * US West (California)
  * US Central (Iowa)
* Japan
  * Japan East (Tokyo)
  * Japan West (Osaka)
* China
  * Beijing
  * Shanghai
* Australia
  * Austalia East (Sydney)
  * Australia Southeast (Melbourne)
* South America
  * Brazil South (São Paulo)
* India
  *Mumbai
  *Chennai
  *Pune



> *Note: Microsoft Azure services in China Data Centres are only available for use from within China itself. These data centers are disconnected from rest of the Microsoft Azure Data Centres. You can visit the chinese version of Microsoft Azure at: http://windowsazure.cn/

To find your nearest Data Center, use the [Azure Speed Test](http://azurespeedtest.azurewebsites.net/).

View the locations on a [map](https://gist.github.com/richorama/e0df02d7be73e974ca29) (uses a geojson gist).

A list of services available in each Data Center is available [here](http://azure.microsoft.com/en-us/regions/#services).

#### References

* [Trust Center - Location of Customer Data](http://azure.microsoft.com/en-us/support/trust-center/privacy/)
* [Microsoft becomes the first global public cloud provider in China with the general availability of Microsoft Azure in the region](http://blogs.technet.com/b/microsoft_blog/archive/2014/03/26/microsoft-becomes-the-first-global-public-cloud-provider-in-china-with-the-general-availability-of-microsoft-azure-in-the-region.aspx)
* [Azure Regions](https://azure.microsoft.com/en-us/regions/)

---

## Compute

### Cloud Services

Virtual Machine sizes:

<table>
<tr>
<th>Size</th>
<th>Cores</th>
<th>RAM</th>
<th>Disk [a]<br/>(Web/Worker)</th>
<th>Bandwidth<br/>(indicative)</th>
</tr>
<tr><td>X-Small</td><td>Shared</td><td>768 MB</td><td>19 GB</td><td>5 Mbps</td></tr>
<tr><td>Small</td><td>1</td><td>1.75 GB</td><td>224 GB</td><td>100 Mbps</td></tr>
<tr><td>Medium</td><td>2</td><td>3.5 GB</td><td>489 GB</td><td>200 Mbps</td></tr>
<tr><td>Large</td><td>4</td><td>7 GB</td><td>999 GB</td><td>400 Mbps</td></tr>
<tr><td>X-Large</td><td>8</td><td>14 GB</td><td>2,039 GB</td><td>800 Mbps</td></tr>
<tr><td>A5</td><td>2</td><td>14 GB</td><td>489 GB</td><td>200 Mbps</td></tr>
<tr><td>A6</td><td>4</td><td>28 GB</td><td>999 GB</td><td>400 Mbps</td></tr>
<tr><td>A7</td><td>8</td><td>56 GB</td><td>2,039 GB</td><td>800 Mbps</td></tr>
</tr>
</table>

_[a] Disk (Web/Worker) is the local storage available on Cloud Services_

* Max disk performance: __500 IOPS__ per disk
* Max roles per deployment: __25__
* Max endpoints per deployment: __25__ input endpoints, __25__ internal endpoints
* SLA: __99.95%__ (with two or more role instances in different fault and upgrade domains)

#### Big Compute
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
 
#### References

* [Number of Roles Allowed In Windows Azure Deployments Increased To 25](http://blogs.msdn.com/b/windowsazure/archive/2011/09/01/number-of-roles-allowed-in-windows-azure-deployments-increased-to-25.aspx)
* [Windows Azure, Increase Cores count	](http://blogs.msdn.com/b/arunrakwal/archive/2012/04/11/windows-azure-how-to-increase-cores-per-subscription.aspx)
* [Virtual Machine and Cloud Service Sizes for Azure](http://msdn.microsoft.com/library/azure/dn197896.aspx)
* [New High Performance Capabilities for Windows Azure](http://blogs.technet.com/b/windowshpc/archive/2014/01/30/new-high-performance-capabilities-for-windows-azure.aspx)
* [A8 and A9 Compute Intensive Instances: Quick Start with HPC Pack](http://msdn.microsoft.com/library/azure/dn594431.aspx)
* [Virtual Machine and Cloud Service Sizes for Azure](http://msdn.microsoft.com/en-us/library/azure/dn197896.aspx)

---

### Virtual Machines

Virtual Machine sizes:

<table>
<tr>
<th>Size</th>
<th>Cores</th>
<th>RAM</th>

<th>Disk [a]<br/>(VM)</th>
<th>Bandwidth<br/>(indicative)</th>
</tr>
<tr><td>X-Small</td><td>Shared</td><td>768 MB</td><td>20 GB</td><td>5 Mbps</td></tr>
<tr><td>Small</td><td>1</td><td>1.75 GB</td><td>70 GB</td><td>100 Mbps</td></tr>
<tr><td>Medium</td><td>2</td><td>3.5 GB</td><td>135 GB</td><td>200 Mbps</td></tr>
<tr><td>Large</td><td>4</td><td>7 GB</td><td>285 GB</td><td>400 Mbps</td></tr>
<tr><td>X-Large</td><td>8</td><td>14 GB</td><td>605 GB</td><td>800 Mbps</td></tr>
<tr><td>A5</td><td>2</td><td>14 GB</td><td>135 GB</td><td>200 Mbps</td></tr>
<tr><td>A6</td><td>4</td><td>28 GB</td><td>285 GB</td><td>400 Mbps</td></tr>
<tr><td>A7</td><td>8</td><td>56 GB</td><td>605 GB</td><td>800 Mbps</td></tr>
</tr>
</table>

_[a] Disk (VM) is the temp drive available on Virtual Machines_

* Max disk performance: __500 IOPS__ per disk
* Max size of Virtual Machine OS Disk: __127 GB__
* Max roles per deployment: __25__
* Max endpoints per deployment: __25__ input endpoints, __25__ internal endpoints
* SLA: __99.95%__ (with two or more role instances in different fault and upgrade domains)

#### References

* [Virtual Machine and Cloud Service Sizes for Azure](http://msdn.microsoft.com/library/azure/dn197896.aspx)
* [New High Performance Capabilities for Windows Azure](http://blogs.technet.com/b/windowshpc/archive/2014/01/30/new-high-performance-capabilities-for-windows-azure.aspx)
* [Virtual Machine and Cloud Service Sizes for Azure](http://msdn.microsoft.com/en-us/library/azure/dn197896.aspx)
* [Windows Azure, Increase Cores count	](http://blogs.msdn.com/b/arunrakwal/archive/2012/04/11/windows-azure-how-to-increase-cores-per-subscription.aspx)

---

### Web Sites

* Max free web sites per Data Center: __10__
* Max shared websites per Data Center: __100__
* Max standard websites per Data Center: __500__
* Free tier limitations: __1% CPU per hour, 2.5 minutes of CPU every 5 minutes, 165 MB data out per day, 1024 MB storage, 1024 MB RAM per hour__
* Max instance count in standard mode: __10__ (large instances)
* SLA: __99.9%__

#### References

* [Azure: ExpressRoute Dedicated Networking, Web Site Backup Restore, Mobile Services .NET support, Hadoop 2.2, and more](http://weblogs.asp.net/scottgu/archive/2014/02/20/azure-expressroute-dedicated-networking-web-site-backup-restore-mobile-services-net-support-hadoop-2-2-and-more.aspx)
* [Azure Websites](http://azure.microsoft.com/en-us/develop/net/aspnet/)
* [How to Scale Web Sites](http://azure.microsoft.com/en-us/documentation/articles/web-sites-scale/)

---

## App Services

## Content Delivery Network

* United States
  * East: Atlanta, Miami, New York, Washington D.C.
  * North Central: Chicago
  * South Central: Dallas
  * West: Los Angeles, San Jose, Seattle
* Europe 
  * North: Copenhagen, Helsinki, Stockholm, Vienna, Warsaw
  * West: Amsterdam, Frankfurt, Milan, London, Madrid, Paris
* Asia-Pacific/Rest of World
  * Asia Pacific East: Batam, Hong Kong, Jakarta, Kaohsiung, Singapore
  * Asia Pacific Southeast: Melbourne, Sydney
  * Japan East: Tokyo
  * Japan West: Osaka

View the locations on a [map](https://gist.github.com/maartenba/10100263) (uses a geojson gist).

### References

[Azure Content Delivery Network (CDN) Node Locations](http://msdn.microsoft.com/en-US/library/azure/gg680302.aspx)

---

## Search Service

__Free Tier__

* Max number of indexes: __3__
* Max document count: __10,000__
* Max storage size: __50 MB__
* Max partitions: N/A
* Max replicas: N/A
* Max search units: N/A

__Standard Tier__

* Max number of indexes: __50__ per Search service
* Max document count: __15 million__ per partition
* Max storage size: __25 GB__ per partition
* Max partitions: __12__ per Search service
* Max replicas: __6__ per Search service
* Max search units: __36__ per Search service

__API Key Limits__

* Max admin keys per service: __2__
* Max query keys per service __50__

__Request Sizes__

* Max size of request : __16 MB__
* Max URL length: __8 KB__
* Max documents per batch: __1000__ documents per batch of index uploads/merges/deletes
* Characters of text for Suggest API: __Min 3, Max 25__  characters
* Max fields in $orderby clause: __32__

__Response Sizes__

* Max documents returned per page of search results: __1000__
* Maximum suggestions returned per Suggest API request: __10__

### References

http://msdn.microsoft.com/en-us/library/azure/dn798934.aspx

---

### Service Bus

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

#### Service Bus Capacity Planning

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

#### Service Bus Relay

* SLA: __99.9%__
 
#### References

* [Windows Azure Queues and Windows Azure Service Bus Queues - Compared and Contrasted](http://msdn.microsoft.com/library/azure/hh767287.aspx)
* [Capacity Planning for Service Bus Queues and Topics](http://msdn.microsoft.com/en-us/library/hh694235.aspx)
* [Windows Azure Service Bus Quotas](http://msdn.microsoft.com/library/azure/ee732538.aspx)

---

## Data Services

### SQL Database

__Basic Tier__

* Max size: __2 GB__
* Self Service Restore window: __24 hours__
* Geo replication: __Active__
* Performance level: __Basic__

__Standard Tier__

* Max size: __250 GB__
* Self Service Restore window: __7 days__
* Geo replication: __Active__
* Performance level: __S0 S1 S2 S3__

__Premium Tier__

* Max size: __500 GB to 1024 GB (P11 only)__
* Self Service Restore window: __35 days__
* Geo replication: __max 4 readable secondaries__
* Performance level: __P1 P2 P4 P6 P11__

__All Tiers__

* SLA: __99.99%__
* Max database servers: __6__ per Azure Account `soft limit`
* Max databases per server: __150__ (including master) `soft limit`
* Max number of database backup schedules: __10__ per subscription
 
__Performance Levels__

<table>
    <tbody>
      <tr>
        <th>
          Service Tier/Performance Level
        </th>
        <th>
          DTU [1]
        </th>
        <th>
          Max
          Worker
          Threads
        </th>
        <th>
          Max
          Sessions
        </th>
        <th>
          Benchmark Transaction Rate [2]
        </th>
        <th>
          Predictability [3]
        </th>
      </tr>
      <tr>
        <td>
          Basic
        </td>
        <td>
          5
        </td>
        <td>
          20
        </td>
        <td>
          100
        </td>
        <td>
          3,467 transactions/hour
        </td>
        <td>
          Good
        </td>
      </tr>
      <tr>
        <td>
          Standard/S0
        </td>
        <td>
          10
        </td>
        <td>
          50
        </td>
        <td>
          200
        </td>
        <td>
          283 transactions/minute
        </td>
        <td>
          Better
        </td>
      </tr>
      <tr>
        <td>
          Standard/S1
        </td>
        <td>
          20
        </td>
        <td>
          50
        </td>
        <td>
          200
        </td>
        <td>
          283 transactions/minute
        </td>
        <td>
          Better
        </td>
      </tr>
      <tr>
        <td>
          Standard/S2
        </td>
        <td>
          50
        </td>
        <td>
          100
        </td>
        <td>
          500
        </td>
        <td>
          1,470 transactions/minute
        </td>
        <td>
          Better
        </td>
      </tr>
      <tr>
        <td>
          Standard/S3
        </td>
        <td>
          100
        </td>
        <td>
          
        </td>
        <td>
          
        </td>
        <td>
          
        </td>
        <td>
          Better
        </td>
      </tr>
      <tr>
        <td>
          Premium/P1
        </td>
        <td>
          125
        </td>
        <td>
          200
        </td>
        <td>
          2,000
        </td>
        <td>
          98 transactions/second 
        </td>
        <td>
          Best
        </td>
      </tr>
      <tr>
        <td>
          Premium/P2
        </td>
        <td>
          250
        </td>
        <td>
          400
        </td>
        <td>
          4,000
        </td>
        <td>
          192 transactions/second
        </td>
        <td>
          Best
        </td>
      </tr>
      <tr>
        <td>
          Premium/P4
        </td>
        <td>
          500
        </td>
        <td>
          1,600
        </td>
        <td>
          16,000
        </td>
        <td>
          730 transactions/second
        </td>
        <td>
          Best
        </td>
      </tr>
      <tr>
        <td>
          Premium/P6
        </td>
        <td>
          1000
        </td>
        <td>
          
        </td>
        <td>
          
        </td>
        <td>
          
        </td>
        <td>
          Best
        </td>
      </tr>
      <tr>
        <td>
          Premium/P11
        </td>
        <td>
          1750
        </td>
        <td>
          
        </td>
        <td>
          
        </td>
        <td>
          
        </td>
        <td>
          Best
        </td>
      </tr>
    </tbody>
</table>

[1] __Database Throughput Unit (DTU):__ The resources powering each performance level are represented in DTUs. It combines CPU, memory, physical reads, and transaction log writes into a single unit. A performance level with 5 DTUs has five times more power than a performance level with 1 DTU.

[2] __Transaction Rate:__ Transaction rate is the metric produced by the Azure SQL Database Benchmark. It is reported in transactions per unit-of-time, counting all transaction types. In the Azure SQL Database Benchmark, throughput is reported in transaction per unit-of-time, with the time scale being shorter for higher classes of service, as shown below.

[3] __Predictability:__ Consistency of response time is an indication of performance predictability. A database which achieves a more stringent response time constraint delivers more predictable performance. In the Azure SQL Database Benchmark, the response time constraint varies with class of service, with higher classes of service having to satisfy a more stringent response time requirement.

#### References

* [Windows Azure Table Storage and Windows Azure SQL Database - Compared and Contrasted](http://msdn.microsoft.com/library/azure/jj553018.aspx)
* [Scott Gu's Blog - Azure: 99.95% SQL Database SLA, 500 GB DB Size, Improved Performance Self-Service Restore, and Business Continuity](http://weblogs.asp.net/scottgu/archive/2014/04/29/azure-99-95-sql-database-sla-500-gb-db-size-improved-performance-self-service-restore-and-business-continuity.aspx)
* [Azure SQL Database introduces new service tiers](http://blogs.msdn.com/b/windowsazure/archive/2014/04/24/azure-sql-database-introduces-new-service-tiers.aspx)
* [Azure SQL Database Service Tiers and Performance Levels](http://msdn.microsoft.com/en-us/library/azure/dn741336.aspx)
* [Azure SQL Database Business Continuity](http://msdn.microsoft.com/library/azure/hh852669.aspx)

---

### Storage

* Total capacity: __500 TB__
* Expected transactions per second: __20,000__ per account
* Total bandwidth for US Regions: __20 GB in 30 GB out per second__ (10 GB and 20 GB respectively for geo redundant)
* Total bandwidth for Europeans and Asian Regions: __10 GB in 15 GB out per second__ (5 GB and 10 GB respectively for geo redundant)
* Maximum number of accounts: __100__
* SLA: __99.9%__

#### Blob Storage

* Expected transactions per second: __500__ per blob 
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
* Number of messages you can pop in one transaction: __32__

#### Azure Files (preview)

* Max share size: __5 TB__ per share
* Expected bandwidth: __60 MB per second per share__
* Max file size: __1 TB__ per file
* Max 8 KB IOps: __1000 IOps__

> Note only accessible over SMB 2.1 protocol from a VM within the same region. REST access from anywhere. Read-only geo redundancy not available.

#### Best Practices 

* Disable Nagle for small messages (<1.4k)
* Disable Expect 100-Continue*
* Increase default connection limit (ex. 100+)
* Take advantage of .Net 4.5 GC

```csharp
ServicePointManager.UseNagleAlgorithm = false;
ServicePointManager.Expect100Continue = false;
ServicePointManager.DefaultConnectionLimit = 100;
```

#### References

* [Windows Azure Queues and Windows Azure Service Bus Queues - Compared and Contrasted](http://msdn.microsoft.com/library/azure/hh767287.aspx)
* [Windows Azure Table Storage and Windows Azure SQL Database - Compared and Contrasted](http://msdn.microsoft.com/library/azure/jj553018.aspx)
* [Storage](http://azure.microsoft.com/en-us/services/storage/)
* [Understanding the Table Service Data Model](http://msdn.microsoft.com/library/azure/dd179338.aspx)
* [MVA - Design & Implementation Jump Start](http://www.microsoftvirtualacademy.com/training-courses/windows-azure-storage-design-and-implementation-jump-start)
* [Azure Storage Scalability and Performance Targets](http://msdn.microsoft.com/en-us/library/azure/dn249410.aspx)
* [Introducing Microsoft Azure File Service](http://blogs.msdn.com/b/windowsazurestorage/archive/2014/05/12/introducing-microsoft-azure-file-service.aspx)
* [Azure Subscription and Service Limits, Quotas, and Constraints](http://azure.microsoft.com/en-gb/documentation/articles/azure-subscription-service-limits/#storagelimits)

---

## Network Services

### Traffic Manager

* Naming constraints: __253 characters in total for the *.trafficmanager.net domain, maximum of 38 sub domains, each of which can be up to 63 characters__
* TTL recommendation: __5 minutes__
* Application polling: __30 second frequency, 10 second timeout, 3 retries before marked unavailable__
* SLA: __99.99%__

#### References

* [Traffic Manager Overview](http://msdn.microsoft.com/library/azure/hh744833.aspx)

---

### Virtual Network

* Max VPN client endpoints: __250__
* SLA: __99.9%__

#### References

* [Virtual Network FAQ](http://msdn.microsoft.com/library/azure/dn133803.aspx)

---

## Misc

### Account Limitations

Co-admins per subscription: __200__

---

### Service Levels

<table>
<tr><th>SLA %</th><th>Downtime per day</th><th>Downtime per week</th><th>Downtime per month</th><th>Downtime per year</th></tr>
<tr><td>99.9</td><td>1 minute 26 seconds</td><td>10 minutes 5 seconds</td><td>43 minutes 50 seconds</td><td>8 hours 46 minutes</td></tr>
<tr><td>99.95</td><td>43 seconds</td><td>5 minutes 2 seconds</td><td>21 minutes 55 seconds</td><td>4 hours 23 minutes</td></tr>
<tr><td>99.99 </td><td>8 seconds</td><td>1 minute</td><td>4 minutes 23 seconds</td><td>52 minutes 23 seconds</td></tr>
<tr><td>99.999</td><td>1 second</td><td>6 seconds</td><td>26 seconds</td><td>5 minutes 15 seconds</td></tr>
</table>

#### References

* [Service Level Agreements](http://azure.microsoft.com/en-us/support/legal/sla/)

---



## Acknowledgements

Thanks to the contributors:

* [Richard Astbury](https://github.com/rskopecek)
* [Randy Skopecek](https://github.com/rskopecek)
* [Howard van Rooijen](https://github.com/HowardvanRooijen)
* [Anton Staykov](https://github.com/astaykov)

...and thanks to [Rob Blackwell](https://github.com/RobBlackwell) for the idea.


