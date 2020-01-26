## Interview Question

**Probelem Statement**: Imagine a train moving towards tunnel and moving out of it and 
re-enters the tunnel once it's crossed it. Upon cliking on the `Next` button, train's compartments will
move in the direction of the tunnel one by one and last compartment will escape the tunnel if there 
are more compartments to enter.

Solve this problem using HTML, CSS, and vanilla JavaScript. 

---
*Note:*
Train compartments order matters i.e. it will move from left to right and the extreme right will enter the
tunnel first.
---

```
TrainSize: 2 < trainSize < 50
TunnelSize: 1 < tunnelSize < trainSize
```


Eg- 

### Suppose train size is 6 and tunnel size is 4.

#### Train Size is 6

> | a | b | c | d | e | f |

#### Tunnel Size is 4

> |  |  |  |  |


This is how it will look when train moves into the tunnel.


```
> | f  |   |   |   |

> | e | f |   |   |

> | e | f |   |   |

> | d | e | f |   |

> | c | d | e | f |

> | b | c | d | e |

> |a  | b | c | d |

> |   | a | b | c |

> |   |   |a  | b |

> |   |   |   | a |

> |   |   |   |  |

```


And, it will re-enter it once train has escaped the tunnel completely.


