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