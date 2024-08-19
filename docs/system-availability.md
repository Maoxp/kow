# 根据 MTBF & MTTR 评估系统可用性

在评估系统稳定性、可用性时，我们会经常听到 **99.999%** ，那这个数值是如何计算出来的？

下面我们来分析，分析前先补充几个基本概念

- MTBF(Mean Time Between Failure)

- MTTR(Mean Time To Repair)

**MTBF** : 是平均无故障的工作时间（单位*小时*），表示**相邻两次故障的时候间隔**的平均值，它是一种对*系统可靠性*的度量指标，指标的值越大，说明可靠性越高。

**MTTR** : 是平均修复时候，表示**从发生故障到修复完成**的时间间隔，它是一种对*系统维护性*的度量指标，指标的值越大，说明系统维护性越好。

了解了基本概念后，我们可以推出 系统可用性公式

    Availability = MTBF / (MTBF + MTTR) 

    (———MTBF———｜——MTTR——) => 从无故障 到 发生故障被修复完成 的这一区间段内，演示了一个系统完整的过程。
  
 即： 系统的可用性 = 无故障的时间 / 总的过程时间

举例：

数据库 12 个月发生一次故障， `MTBF = 12` 个月（12 个月共 525601 分钟），故障修复时间为 5 分钟，`MTTR = 5` 分钟，则系统的可用性为 `525601 / (525601 + 5) = 99.999%`