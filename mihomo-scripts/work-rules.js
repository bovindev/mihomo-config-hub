function main(config, profileName) {
    // 把旧规则合并到新规则后面
    let oldrules = config["rules"];
    config["rules"] = prependRule.concat(oldrules);
    return config;
}


const prependRule = [
    "DOMAIN-KEYWORD,4gms,DIRECT",
    "DOMAIN-KEYWORD,fgms,DIRECT",
    "IP-CIDR,192.168.50.0/32,DIRECT,no-resolve",
    "IP-CIDR,192.168.6.0/32,DIRECT,no-resolve"
];