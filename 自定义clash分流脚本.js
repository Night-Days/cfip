function main(config) {
  // 1. 策略组配置
  config['proxy-groups'] = [
    {
      name: '🚀 节点选择',
      type: 'select',
      proxies: ['♻️ 自动选择', '🇭🇰 香港节点', '🇨🇳 台湾节点', '🇯🇵 日本节点', '🇸🇬 狮城节点', '🇺🇸 美国节点', 'DIRECT']
    },
    {
      name: '♻️ 自动选择',
      type: 'url-test',
      url: 'http://www.gstatic.com/generate_204',
      interval: 300,
      tolerance: 50,
      'include-all': true
    },
    {
      name: '🤖 人工智能',
      type: 'select',
      proxies: ['🇺🇸 美国节点', '🇯🇵 日本节点', '🇸🇬 狮城节点', '🇨🇳 台湾节点', '🚀 节点选择']
    },
    {
      name: '🎬 油管视频',
      type: 'select',
      proxies: ['🚀 节点选择', '🎥 国外媒体', '🇭🇰 香港节点', '🇯🇵 日本节点', '🇸🇬 狮城节点', '🇺🇸 美国节点']
    },
    {
      name: '🎥 奈飞视频',
      type: 'select',
      proxies: ['🎥 国外媒体', '🚀 节点选择', '🇭🇰 香港节点', '🇨🇳 台湾节点', '🇯🇵 日本节点', '🇸🇬 狮城节点', '🇺🇸 美国节点']
    },
    {
      name: '🎥 国外媒体',
      type: 'select',
      proxies: ['🚀 节点选择', '🇭🇰 香港节点', '🇨🇳 台湾节点', '🇯🇵 日本节点', '🇸🇬 狮城节点', '🇺🇸 美国节点', 'DIRECT']
    },
    {
      name: '📲 电报信息',
      type: 'select',
      proxies: ['🚀 节点选择', '🇸🇬 狮城节点', '🇭🇰 香港节点', '🇯🇵 日本节点', '🇺🇸 美国节点']
    },
    {
      name: '💬 微软服务',
      type: 'select',
      proxies: ['DIRECT', '🚀 节点选择', '🇭🇰 香港节点', '🇺🇸 美国节点']
    },
    {
      name: '🛑 广告拦截',
      type: 'select',
      proxies: ['REJECT', 'DIRECT']
    },
    {
      name: '🎯 全球直连',
      type: 'select',
      proxies: ['DIRECT', '🚀 节点选择']
    },
    {
      name: '🐟 漏网之鱼',
      type: 'select',
      proxies: ['🚀 节点选择', 'DIRECT', '♻️ 自动选择']
    },
    // 地区自动归类
    {
      name: '🇭🇰 香港节点',
      type: 'url-test',
      url: 'http://www.gstatic.com/generate_204',
      interval: 300,
      'include-all': true,
      filter: '(?i)港|hk|hongkong|hong kong'
    },
    {
      name: '🇨🇳 台湾节点',
      type: 'url-test',
      url: 'http://www.gstatic.com/generate_204',
      interval: 300,
      'include-all': true,
      filter: '(?i)台|tw|taiwan'
    },
    {
      name: '🇯🇵 日本节点',
      type: 'url-test',
      url: 'http://www.gstatic.com/generate_204',
      interval: 300,
      'include-all': true,
      filter: '(?i)日|jp|japan|东京|大阪'
    },
    {
      name: '🇸🇬 狮城节点',
      type: 'url-test',
      url: 'http://www.gstatic.com/generate_204',
      interval: 300,
      'include-all': true,
      filter: '(?i)新|sg|singapore|狮城'
    },
    {
      name: '🇺🇸 美国节点',
      type: 'url-test',
      url: 'http://www.gstatic.com/generate_204',
      interval: 300,
      'include-all': true,
      filter: '(?i)美|us|united states'
    }
  ];

  // 2. 彻底替换原订阅规则（加入完整的 AI 平台域名库）
  config.rules = [
    // 局域网
    'GEOIP,LAN,DIRECT,no-resolve',

    // 广告拦截
    'DOMAIN-KEYWORD,adservice,🛑 广告拦截',
    'DOMAIN-KEYWORD,adsystem,🛑 广告拦截',
    'DOMAIN-SUFFIX,doubleclick.net,🛑 广告拦截',
    'DOMAIN-SUFFIX,googleadservices.com,🛑 广告拦截',

    // 🤖 人工智能 (完整生态域名)
    // OpenAI / ChatGPT
    'DOMAIN-SUFFIX,openai.com,🤖 人工智能',
    'DOMAIN-SUFFIX,chatgpt.com,🤖 人工智能',
    'DOMAIN-SUFFIX,oaistatic.com,🤖 人工智能',
    'DOMAIN-SUFFIX,oaiusercontent.com,🤖 人工智能',
    'DOMAIN-SUFFIX,ai.com,🤖 人工智能',
    'DOMAIN-SUFFIX,sora.com,🤖 人工智能',
    'DOMAIN-KEYWORD,openaicom,🤖 人工智能',
    'DOMAIN-KEYWORD,chatgpt,🤖 人工智能',
    // Claude / Anthropic
    'DOMAIN-SUFFIX,anthropic.com,🤖 人工智能',
    'DOMAIN-SUFFIX,claude.ai,🤖 人工智能',
    // Google Gemini
    'DOMAIN-SUFFIX,bard.google.com,🤖 人工智能',
    'DOMAIN-SUFFIX,gemini.google.com,🤖 人工智能',
    'DOMAIN-SUFFIX,generativelanguage.googleapis.com,🤖 人工智能',
    // 其他 AI
    'DOMAIN-SUFFIX,perplexity.ai,🤖 人工智能',
    'DOMAIN-SUFFIX,poe.com,🤖 人工智能',
    'DOMAIN-SUFFIX,groq.com,🤖 人工智能',
    'DOMAIN-SUFFIX,mistral.ai,🤖 人工智能',
    'DOMAIN-SUFFIX,cohere.com,🤖 人工智能',

    // 🎬 油管 / 奈飞
    'DOMAIN-SUFFIX,youtube.com,🎬 油管视频',
    'DOMAIN-SUFFIX,googlevideo.com,🎬 油管视频',
    'DOMAIN-SUFFIX,ytimg.com,🎬 油管视频',
    'DOMAIN-SUFFIX,netflix.com,🎥 奈飞视频',
    'DOMAIN-SUFFIX,netflix.net,🎥 奈飞视频',
    'DOMAIN-SUFFIX,nflxext.com,🎥 奈飞视频',

    // 📲 电报
    'DOMAIN-SUFFIX,t.me,📲 电报信息',
    'DOMAIN-SUFFIX,telegram.org,📲 电报信息',
    'IP-CIDR,91.108.4.0/22,📲 电报信息,no-resolve',
    'IP-CIDR,149.154.160.0/20,📲 电报信息,no-resolve',

    // 💬 微软
    'DOMAIN-SUFFIX,microsoft.com,💬 微软服务',
    'DOMAIN-SUFFIX,live.com,💬 微软服务',
    'DOMAIN-SUFFIX,msn.com,💬 微软服务',

    // 🎯 国内直连
    'DOMAIN-SUFFIX,cn,🎯 全球直连',
    'DOMAIN-SUFFIX,baidu.com,🎯 全球直连',
    'DOMAIN-SUFFIX,qq.com,🎯 全球直连',
    'DOMAIN-SUFFIX,bilibili.com,🎯 全球直连',
    'DOMAIN-SUFFIX,taobao.com,🎯 全球直连',
    'GEOIP,CN,🎯 全球直连',

    // 🐟 漏网之鱼兜底
    'MATCH,🐟 漏网之鱼'
  ];

  return config;
}