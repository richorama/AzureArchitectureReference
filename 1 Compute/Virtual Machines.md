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

