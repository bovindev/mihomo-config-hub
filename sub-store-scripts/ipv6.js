// IPv6节点入口解析命名脚本，如需对域名的AAAA记录解析可以启用上面的操作
if ( (ProxyUtils.isIPv6($server.server) || $server.name.match(/ipv6|v6/i)) && !$server.name.includes('[IPv6]') ) {
  $server.name = `${$server.name} [IPv6]`;
}

if ($server._domain) $server.server = $server._domain