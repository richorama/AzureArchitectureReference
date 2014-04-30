### SQL Database

__Basic Tier__

* Max size: __2 GB__
* Restore window: __24 hours__
* Geo replication: __none__
* Performance level: __Basic__

__Standard Tier__

* Max size: __250 GB__
* Restore window: __7 days__
* Geo replication: __none__
* Performance level: __S1 S2__

__Premium Tier__

* Max size: __500 GB__
* Restore window: __35 days__
* Geo replication: __max 4 readable secondaries__
* Performance level: __P1 P2 P3__

__All Tiers__

* SLA: __99.95%__ `Not available while in preview`
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
          <p>Basic</p>
        </td>
        <td>
          <p>1</p>
        </td>
        <td>
          <p>20</p>
        </td>
        <td>
          <p>100</p>
        </td>
        <td>
          <p>3,467 transactions per hour</p>
        </td>
        <td>
          <p>Good</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Standard/S1</p>
        </td>
        <td>
          <p>5</p>
        </td>
        <td>
          <p>50</p>
        </td>
        <td>
          <p>200</p>
        </td>
        <td>
          <p>283 transactions per minute</p>
        </td>
        <td>
          <p>Better</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Standard/S2</p>
        </td>
        <td>
          <p>25</p>
        </td>
        <td>
          <p>100</p>
        </td>
        <td>
          <p>500</p>
        </td>
        <td>
          <p>1,470 transactions per minute</p>
        </td>
        <td>
          <p>Better</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Premium/P1</p>
        </td>
        <td>
          <p>100</p>
        </td>
        <td>
          <p>200</p>
        </td>
        <td>
          <p>2,000</p>
        </td>
        <td>
          <p>98 transactions per second </p>
        </td>
        <td>
          <p>Best</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Premium/P2</p>
        </td>
        <td>
          <p>200</p>
        </td>
        <td>
          <p>400</p>
        </td>
        <td>
          <p>4,000</p>
        </td>
        <td>
          <p>192 transactions per second</p>
        </td>
        <td>
          <p>Best</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Premium/P3</p>
        </td>
        <td>
          <p>800</p>
        </td>
        <td>
          <p>1,600</p>
        </td>
        <td>
          <p>16,000</p>
        </td>
        <td>
          <p>730 transactions per second</p>
        </td>
        <td>
          <p>Best</p>
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