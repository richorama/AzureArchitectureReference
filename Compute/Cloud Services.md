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
 

---

#### References

* [Number of Roles Allowed In Windows Azure Deployments Increased To 25](http://blogs.msdn.com/b/windowsazure/archive/2011/09/01/number-of-roles-allowed-in-windows-azure-deployments-increased-to-25.aspx)
* [Windows Azure, Increase Cores count	](http://blogs.msdn.com/b/arunrakwal/archive/2012/04/11/windows-azure-how-to-increase-cores-per-subscription.aspx)
* [Virtual Machine and Cloud Service Sizes for Azure](http://msdn.microsoft.com/library/azure/dn197896.aspx)
* [New High Performance Capabilities for Windows Azure](http://blogs.technet.com/b/windowshpc/archive/2014/01/30/new-high-performance-capabilities-for-windows-azure.aspx)
* [A8 and A9 Compute Intensive Instances: Quick Start with HPC Pack](http://msdn.microsoft.com/library/azure/dn594431.aspx)
* [Virtual Machine and Cloud Service Sizes for Azure](http://msdn.microsoft.com/en-us/library/azure/dn197896.aspx)
