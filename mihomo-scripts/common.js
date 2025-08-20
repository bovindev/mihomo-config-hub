
const dnsConfig = {
    'enable': true,
    'listen': ':53',
    'prefer-h3': true,
    'use-hosts': true,
    'use-system-hosts': true,
    'default-nameserver': [
      'system',
      '223.5.5.5',
      '119.29.29.29',
      '8.8.8.8',
      '1.1.1.1'
    ],
    'direct-nameserver': ['system'],
    'nameserver': [
      'https://doh.pub/dns-query',
      'https://dns.alidns.com/dns-query'
    ],
    'fallback': [
      'https://dns.google/dns-query',
      'https://cloudflare-dns.com/dns-query'
    ],
    'fallback-filter': {
      'domain': [
        '+.google.com',
        '+.facebook.com',
        '+.youtube.com'
      ],
      'geoip': true,
      'geoip-code': 'CN',
      'ipcidr': [
        '240.0.0.0/4',
        '0.0.0.0/32'
      ]
    },
    'direct-nameserver-follow-policy': false,
    'proxy-server-nameserver': [
      'https://doh.pub/dns-query',
      'https://dns.alidns.com/dns-query'
    ],
    'enhanced-mode': 'fake-ip',
    'fake-ip-filter-mode': 'blacklist',
    'fake-ip-range': '198.18.0.1/16',
    'fake-ip-filter': [
      '*.lan',
      '*.local',
      '*.arpa',
      'time.*.com',
      'ntp.*.com',
      '+.market.xiaomi.com',
      'localhost.ptlogin2.qq.com',
      '*.msftncsi.com',
      'www.msftconnecttest.com'
    ]
  };
// 规则集通用配置
const rpdomain = {'type': 'http', 'behavior': 'domain', 'interval': 86400};
const rpip = {'type': 'http', 'behavior': 'ipcidr', 'interval': 86400};
const rpclassical = {'type': 'http', 'behavior': 'classical', 'interval': 86400};
// 规则集配置
const ruleProviders = {
    'Ads': {...rpdomain, 'url': "https://anti-ad.net/clash.yaml"},
    'ios_rule_script_Proxy_Classical': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Proxy/Proxy_Classical.yaml"
    },
    'ios_rule_script_Lan': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Lan/Lan.yaml"
    },
    'ios_rule_script_Developer': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Developer/Developer.yaml"
    },
    'ios_rule_script_GitHub': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/GitHub/GitHub.yaml"
    },
    'ios_rule_script_Jetbrains': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Jetbrains/Jetbrains.yaml"
    },
    'ios_rule_script_Android': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Android/Android.yaml"
    },
    'ios_rule_script_Google': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Google/Google.yaml"
    },
    'ios_rule_script_Bing': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Bing/Bing.yaml"
    },
    'ios_rule_script_OneDrive': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/OneDrive/OneDrive.yaml"
    },
    'ios_rule_script_Teams': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Teams/Teams.yaml"
    },
    'ios_rule_script_Microsoft': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Microsoft/Microsoft.yaml"
    },
    'ios_rule_script_Apple': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Apple/Apple.yaml"
    },
    'ios_rule_script_Apple_Domain': {
        ...rpdomain,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Apple/Apple_Domain.yaml"
    },
    'ios_rule_script_Telegram': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Telegram/Telegram.yaml"
    },
    'ios_rule_script_Twitter': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Twitter/Twitter.yaml"
    },
    'ios_rule_script_TikTok': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/TikTok/TikTok.yaml"
    },
    'ios_rule_script_YouTube': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/YouTube/YouTube.yaml"
    },
    'ios_rule_script_Copilot': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Copilot/Copilot.yaml"
    },
    'ios_rule_script_OpenAI': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/OpenAI/OpenAI.yaml"
    },
    'ios_rule_script_Steam': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Steam/Steam.yaml"
    },
    'ios_rule_script_SteamCN': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/SteamCN/SteamCN.yaml"
    },
    'ios_rule_script_Gemini': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Gemini/Gemini.yaml"
    },
    'ios_rule_script_ChinaMax_Classical': {
        ...rpclassical,
        'url': "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/ChinaMax/ChinaMax_Classical.yaml"
    }
};

// 规则
const rules = [
    'RULE-SET,ios_rule_script_Lan,DIRECT,no-resolve',
    'DOMAIN,oyycsdxgvqxm.ap-southeast-1.clawcloudrun.com,DIRECT,no-resolve',//MoonTV 地址
    'RULE-SET,ios_rule_script_Developer,Develop,no-resolve',
    'RULE-SET,ios_rule_script_GitHub,Develop,no-resolve',
    'RULE-SET,ios_rule_script_Jetbrains,Develop,no-resolve',
    'RULE-SET,ios_rule_script_Bing,Bing,no-resolve',
    'RULE-SET,ios_rule_script_Copilot,Bing,no-resolve',
    'RULE-SET,ios_rule_script_Android,Google,no-resolve',
    'RULE-SET,ios_rule_script_Gemini,Google,no-resolve',
    'RULE-SET,ios_rule_script_OneDrive,OneDrive,no-resolve',
    'PROCESS-NAME,ms-teams.exe,Microsoft',
    'RULE-SET,ios_rule_script_Teams,Microsoft,no-resolve',
    'RULE-SET,ios_rule_script_Telegram,Telegram,no-resolve',
    'RULE-SET,ios_rule_script_Twitter,X,no-resolve',
    'RULE-SET,ios_rule_script_TikTok,TikTok,no-resolve',
    'RULE-SET,ios_rule_script_YouTube,YouTube,no-resolve',
    'RULE-SET,ios_rule_script_OpenAI,OpenAI,no-resolve',
    'RULE-SET,ios_rule_script_Steam,Steam,no-resolve',
    'RULE-SET,ios_rule_script_SteamCN,Steam,no-resolve',
    'RULE-SET,ios_rule_script_Google,Google,no-resolve',
    'RULE-SET,ios_rule_script_Microsoft,Microsoft,no-resolve',
    'RULE-SET,ios_rule_script_Apple,Apple,no-resolve',
    'RULE-SET,ios_rule_script_Apple_Domain,Apple,no-resolve',
    'RULE-SET,Ads,AD,no-resolve',
    'RULE-SET,ios_rule_script_ChinaMax_Classical,中国大陆,no-resolve',
    'RULE-SET,ios_rule_script_Proxy_Classical,Global,no-resolve',
    'MATCH,Final'
];

// 代理组通用配置
const area = {'include-all': true, 'proxies': ['DIRECT', 'REJECT'], 'exclude-filter': "剩余|重置|套餐|建议|官网"};
const area_direct = {'include-all': true, 'proxies': ['DIRECT', 'Global'], 'exclude-filter': "剩余|重置|套餐|建议|官网"};
const area_proxy = {'include-all': true, 'proxies': ['Global', 'DIRECT'], 'exclude-filter': "剩余|重置|套餐|建议|官网"};
//代理组
const proxyGroup = [
    {
        ...area,
        "name": "Global",
        "type": "select",
        "icon": "https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/erdongchanyo/Proxy.png"
    },
    {
        "name": "中国大陆",
        "type": "select",
        "icon": "https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/erdongchanyo/CN.png",
        "proxies": ['DIRECT', 'Global', 'REJECT']
    },
    {
        "name": "AD",
        "type": "select",
        "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Advertising.png",
        "proxies": ['REJECT', 'DIRECT', 'Global']
    },
    {
        ...area_proxy,
        "name": "Develop",
        "type": "select",
        "icon": "https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/apps/github_00.png"
    },
    {
        ...area_proxy,
        "name": "Telegram",
        "type": "select",
        "icon": "https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/erdongchanyo/Telegram.png"
    },
    {
        ...area_proxy,
        "name": "X",
        "type": "select",
        "icon": "https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/apps/X.png"
    },
    {
        ...area_proxy,
        "name": "TikTok",
        "type": "select",
        "icon": "https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/erdongchanyo/Tiktok.png"
    },
    {
        ...area_proxy,
        "name": "OpenAI",
        "type": "select",
        "icon": "https://raw.githubusercontent.com/lige47/QuanX-icon-rule/main/icon/chatgpt(white1).png"
    },
    {
        ...area_direct,
        "name": "Steam",
        "type": "select",
        "icon": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/icon/qure/color/Steam.png"
    },
    {
        ...area_proxy,
        "name": "Google",
        "type": "select",
        "icon": "https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/erdongchanyo/Google.png"
    },
    {
        ...area_proxy,
        "name": "YouTube",
        "type": "select",
        "icon": "https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/erdongchanyo/Youtube.png"
    },
    {
        ...area_direct,
        "name": "Microsoft",
        "type": "select",
        "icon": "https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/erdongchanyo/Microsoft.png"
    },
    {
        ...area_proxy,
        "name": "Bing",
        "type": "select",
        "icon": "https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/lige47/bing(3).png"
    },
    {
        ...area_direct,
        "name": "OneDrive",
        "type": "select",
        "icon": "https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/softlyx/OneDrive.png"
    },
    {
        ...area_direct,
        "name": "Apple",
        "type": "select",
        "icon": "https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/erdongchanyo/Apple.png"
    },
    {
        "name": "Final",
        "type": "select",
        "icon": "https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/erdongchanyo/Final.png",
        "proxies": ['Global', 'DIRECT', 'REJECT']
    },
    {
        "name": "Information",
        "type": "select",
        "icon": "https://raw.githubusercontent.com/lige47/QuanX-icon-rule/main/icon/mihomo.png",
        "proxies": ['DIRECT'],
        'include-all': true,
        'filter': "剩余|重置|套餐|建议|官网"
    }
];

// 程序入口
function main(config) {
    const proxyCount = config?.proxies?.length ?? 0;
    const proxyProviderCount =
        typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
    if (proxyCount === 0 && proxyProviderCount === 0) {
        throw new Error("配置文件中未找到任何代理");
    }
    
    config["dns"] = dnsConfig;

    // 覆盖原配置中的代理组
    config["proxy-groups"] = proxyGroup

    // 覆盖原配置中的规则
    config["rule-providers"] = ruleProviders;
    config["rules"] = rules;

    // 返回修改后的配置
    return config;
}