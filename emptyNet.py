from mininet.net import Mininet
from mininet.node import RemoteController
from mininet.cli import CLI
from mininet.log import setLogLevel, info
from mininet.node import CPULimitedHost, Host, Node

def emptyNet():

    "Create an empty network and add nodes to it."

    net = Mininet( controller=RemoteController )

    info( '*** Adding controller\n' )
    net.addController( 'c0', controller=RemoteController,ip="192.168.56.101",port=6653)

    info( '*** Adding hosts\n' )
    h3 = net.addHost( 'host3', cls=Host, ip='10.0.0.1', mac="00:00:00:00:00:00:00:01" )
    h4 = net.addHost( 'host4', cls=Host, ip='10.0.0.2', mac="00:00:00:00:00:00:00:02" )
    h1 = net.addHost( 'host1', cls=Host, ip='10.0.0.3', mac="00:00:00:00:00:00:00:03" )
    h2 = net.addHost( 'host2', cls=Host, ip='10.0.0.4', mac="00:00:00:00:00:00:00:04" )

    info( '*** Adding switch\n' )
    s1 = net.addSwitch( 's1' )
    s2 = net.addSwitch( 's2' )


    info( '*** Creating links\n' )
    net.addLink( h1, s1 )
    net.addLink( h3, s1 )
    net.addLink( h2, s2 )
    net.addLink( h4, s2 )


    info( '*** Starting network\n')
    net.start()

    info( '*** Running CLI\n' )
    CLI( net )

    info( '*** Stopping network' )
    net.stop()

if __name__ == '__main__':
    setLogLevel( 'info' )
    emptyNet()
