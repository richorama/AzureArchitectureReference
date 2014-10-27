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

