
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'b3b36dcc-df01-6129-17cf-d26473568ad1'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = '整合订阅';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31

let cacheTTL = 24 ;//小时，缓存时长

//节点链接 + 订阅链接
let MainData = `
vless://f83a211b-ba8c-4f42-867f-5bd44e324062@192.9.131.244:20201?encryption=none&flow=xtls-rprx-vision&security=reality&sni=addons.mozilla.org&fp=chrome&pbk=48ttP2B_efL9KvWr7LKdrBQzb9NlI7HWMgW_gJdWmmc&type=tcp&headerType=none#US-1
vless://f83a211b-ba8c-4f42-867f-5bd44e324062@192.9.131.244:20201?encryption=none&security=reality&sni=addons.mozilla.org&fp=chrome&pbk=48ttP2B_efL9KvWr7LKdrBQzb9NlI7HWMgW_gJdWmmc&type=grpc&authority=&serviceName=grpc&mode=gun#US-2
vless://f83a211b-ba8c-4f42-867f-5bd44e324062@cf.yutian.us.kg:443?encryption=none&security=tls&sni=wa.kiki.ltd.ua&type=ws&host=wa.kiki.ltd.ua&path=%2Fargox-vl%3Fed%3D2048#US-3
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTLTQiLA0KICAiYWRkIjogImNmaXAueHh4eHh4eHgudGsiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiZjgzYTIxMWItYmE4Yy00ZjQyLTg2N2YtNWJkNDRlMzI0MDYyIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJub25lIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ3YS5raWtpLmx0ZC51YSIsDQogICJwYXRoIjogIi9hcmdveC12bT9lZD0yMDQ4IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIndhLmtpa2kubHRkLnVhIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
trojan://f83a211b-ba8c-4f42-867f-5bd44e324062@cmcc.090227.xyz:443?security=tls&sni=wa.kiki.ltd.ua&type=ws&host=wa.kiki.ltd.ua&path=%2Fargox-tr%3Fed%3D2048#US-5
vless://456e3eab-57a7-428a-beba-1882d732d413@193.122.117.76:12001?encryption=none&flow=xtls-rprx-vision&security=reality&sni=addons.mozilla.org&fp=chrome&pbk=EPNDNnNMzt_VzFDcoLBYTzDVKIxCMElyqE_k496F8AE&type=tcp&headerType=none#KR-1
vless://456e3eab-57a7-428a-beba-1882d732d413@193.122.117.76:12001?encryption=none&security=reality&sni=addons.mozilla.org&fp=chrome&pbk=EPNDNnNMzt_VzFDcoLBYTzDVKIxCMElyqE_k496F8AE&type=grpc&authority=&serviceName=grpc&mode=gun#KR-2
vless://456e3eab-57a7-428a-beba-1882d732d413@fan.yutian.us.kg:443?encryption=none&security=tls&sni=na.kiki.ltd.ua&type=ws&host=na.kiki.ltd.ua&path=%2Fargox-vl%3Fed%3D2048#KR-3
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIktSLTQiLA0KICAiYWRkIjogImNmLjA5MDIyNy54eXoiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiNDU2ZTNlYWItNTdhNy00MjhhLWJlYmEtMTg4MmQ3MzJkNDEzIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJub25lIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJuYS5raWtpLmx0ZC51YSIsDQogICJwYXRoIjogIi9hcmdveC12bT9lZD0yMDQ4IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIm5hLmtpa2kubHRkLnVhIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
trojan://456e3eab-57a7-428a-beba-1882d732d413@www.visa.com.sg:443?security=tls&sni=na.kiki.ltd.ua&type=ws&host=na.kiki.ltd.ua&path=%2Fargox-tr%3Fed%3D2048#KR-5
vless://d3ad5fbb-dfae-4fc4-a1ac-babe8980edb3@34.81.113.106:31009?type=ws&security=none&path=%2F#tw
vless://155fefb7-0372-4cd0-9920-dca142168387@167.253.152.247:43948?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.zara.com&fp=chrome&pbk=u3Wkc3afBBZV8jzmyZ_49BXp-2vsUJaQTkrzJ2k_0Cg&type=tcp&headerType=none#US-Cloudflare_Warp
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTLUNsb3VkZmxhcmVfV2FycCIsDQogICJhZGQiOiAid3d3LnZpc2EuY29tLnR3IiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjE1NWZlZmI3LTAzNzItNGNkMC05OTIwLWRjYTE0MjE2ODM4NyIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAibm9uZSIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiaXNwLXRyaWFuZ2xlLW5ldHdvcmtpbmctbWkudHJ5Y2xvdWRmbGFyZS5jb20iLA0KICAicGF0aCI6ICIvdm1lc3M/ZWQ9MjA0OCIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJpc3AtdHJpYW5nbGUtbmV0d29ya2luZy1taS50cnljbG91ZGZsYXJlLmNvbSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICJyYW5kb21pemVkIg0KfQ==
hysteria2://155fefb7-0372-4cd0-9920-dca142168387@167.253.152.247:43951/?sni=www.bing.com&alpn=h3&insecure=1#US-Cloudflare_Warp
tuic://155fefb7-0372-4cd0-9920-dca142168387:KUPFWxDyT1e4hiceHglOw8ex@167.253.152.247:43950?sni=www.bing.com&alpn=h3&congestion_control=bbr#US-Cloudflare_Warp
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkRFIDEiLA0KICAiYWRkIjogInd3dy52aXNhLmNvbS5oayIsDQogICJwb3J0IjogIjIwNTMiLA0KICAiaWQiOiAiODMxMzM5MGMtYjQzZC00YTQxLWE1ZjAtYjI2NTNiMTYwODdjIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJub25lIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJvYml0dWFyaWVzLWNvbWUtbm90LWR1ZS50cnljbG91ZGZsYXJlLmNvbSIsDQogICJwYXRoIjogIi92bWVzcz9lZD0yMDQ4IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIm9iaXR1YXJpZXMtY29tZS1ub3QtZHVlLnRyeWNsb3VkZmxhcmUuY29tIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogInJhbmRvbWl6ZWQiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkRFIDIiLA0KICAiYWRkIjogInd3dy52aXNhLmNvbS5zZyIsDQogICJwb3J0IjogIjg0NDMiLA0KICAiaWQiOiAiODMxMzM5MGMtYjQzZC00YTQxLWE1ZjAtYjI2NTNiMTYwODdjIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJub25lIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJvYml0dWFyaWVzLWNvbWUtbm90LWR1ZS50cnljbG91ZGZsYXJlLmNvbSIsDQogICJwYXRoIjogIi92bWVzcz9lZD0yMDQ4IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIm9iaXR1YXJpZXMtY29tZS1ub3QtZHVlLnRyeWNsb3VkZmxhcmUuY29tIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogInJhbmRvbWl6ZWQiDQp9
vmess://eyAidiI6ICIyIiwgInBzIjogIkRFLUhldHpuZXJfT25saW5lIiwgImFkZCI6ICJ3d3cudmlzYS5jb20udHciLCAicG9ydCI6ICI0NDMiLCAiaWQiOiAiODMxMzM5MGMtYjQzZC00YTQxLWE1ZjAtYjI2NTNiMTYwODdjIiwgImFpZCI6ICIwIiwgInNjeSI6ICJub25lIiwgIm5ldCI6ICJ3cyIsICJ0eXBlIjogIm5vbmUiLCAiaG9zdCI6ICJvYml0dWFyaWVzLWNvbWUtbm90LWR1ZS50cnljbG91ZGZsYXJlLmNvbSIsICJwYXRoIjogIi92bWVzcz9lZD0yMDQ4IiwgInRscyI6ICJ0bHMiLCAic25pIjogIm9iaXR1YXJpZXMtY29tZS1ub3QtZHVlLnRyeWNsb3VkZmxhcmUuY29tIiwgImFscG4iOiAiIiwgImZwIjogInJhbmRvbWl6ZWQiLCAiYWxsb3dsbnNlY3VyZSI6ICJmbGFzZSJ9Cg==
vless://6e9a3f6f-be26-4188-839d-725d0e646320@cf.yutian.us.kg:443?encryption=none&security=tls&sni=ji.kiki.ltd.ua&type=ws&host=ji.kiki.ltd.ua&path=%2Fargox-vl%3Fed%3D2048#RO-1
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJPLTIiLA0KICAiYWRkIjogImNtY2MuMDkwMjI3Lnh5eiIsDQogICJwb3J0IjogIjIwOTYiLA0KICAiaWQiOiAiNmU5YTNmNmYtYmUyNi00MTg4LTgzOWQtNzI1ZDBlNjQ2MzIwIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJub25lIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJqaS5raWtpLmx0ZC51YSIsDQogICJwYXRoIjogIi9hcmdveC12bT9lZD0yMDQ4IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogImppLmtpa2kubHRkLnVhIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
trojan://6e9a3f6f-be26-4188-839d-725d0e646320@cfip.xxxxxxxx.tk:8443?security=tls&sni=ji.kiki.ltd.ua&type=ws&host=ji.kiki.ltd.ua&path=%2Fargox-tr%3Fed%3D2048#RO-3
vless://afb23e23-02ad-475f-874a-c0ff1bd18e20@visa.com.hk:443?encryption=none&security=tls&sni=fetish-wordpress-removed-commander.trycloudflare.com&type=ws&host=fetish-wordpress-removed-commander.trycloudflare.com&path=%2Fargox-vl%3Fed%3D2048#lxc7-Vl
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogImx4YzctVm0iLA0KICAiYWRkIjogInZpc2EuY29tIiwNCiAgInBvcnQiOiAiODQ0MyIsDQogICJpZCI6ICJhZmIyM2UyMy0wMmFkLTQ3NWYtODc0YS1jMGZmMWJkMThlMjAiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogIm5vbmUiLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogImZldGlzaC13b3JkcHJlc3MtcmVtb3ZlZC1jb21tYW5kZXIudHJ5Y2xvdWRmbGFyZS5jb20iLA0KICAicGF0aCI6ICIvYXJnb3gtdm0/ZWQ9MjA0OCIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJmZXRpc2gtd29yZHByZXNzLXJlbW92ZWQtY29tbWFuZGVyLnRyeWNsb3VkZmxhcmUuY29tIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=     
hysteria2://ic3Ww+WyQnfCX2Wj@31.186.85.171:51234/?sni=www.bing.com&alpn=h3&insecure=1#PL-Atman_Sp._z_o.o.
hysteria2://fc44fe6a-f083-4591-9c03-f8d61dc3907f@31.186.85.171:5555/?sni=www.bing.com&alpn=h3&insecure=1#PL-Atman_Sp._z_o.o.
vless://818130f3-1d37-42e8-9c19-6c6309e10921@144.22.133.91:60702?encryption=none&security=reality&sni=addons.mozilla.org&fp=chrome&pbk=rekFm84-qSfHe7xc9zUAb47agIcst9CgN1dBXxBUJwc&type=tcp&headerType=none#%E5%B7%B4%E8%A5%BF-1
vless://818130f3-1d37-42e8-9c19-6c6309e10921@fan.yutian.us.kg:443?encryption=none&security=tls&sni=1.kiki.ltd.ua&type=ws&host=1.kiki.ltd.ua&path=%2Fsba-vl%3Fed%3D2048#%E5%B7%B4%E8%A5%BF-2
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NURGNFx1ODk3Ri0zIiwNCiAgImFkZCI6ICJjZmlwLnh4eHh4eHh4LnRrIiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjgxODEzMGYzLTFkMzctNDJlOC05YzE5LTZjNjMwOWUxMDkyMSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAibm9uZSIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiMS5raWtpLmx0ZC51YSIsDQogICJwYXRoIjogIi9zYmEtdm0/ZWQ9MjA0OCIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIxLmtpa2kubHRkLnVhIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
trojan://818130f3-1d37-42e8-9c19-6c6309e10921@cloudflare.182682.xyz:443?security=tls&sni=1.kiki.ltd.ua&type=ws&host=1.kiki.ltd.ua&path=%2Fsba-tr%3Fed%3D2048#%E5%B7%B4%E8%A5%BF-4
vless://dc66a47d-60a7-49a9-8846-88a959dae578@152.53.44.79:16101?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.svix.com&fp=chrome&pbk=HF6x7UIK68jo8WBOKG8uROYTbsB6RnvI8Mqd9e5DaGU&type=tcp&headerType=none#AT-netcup
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkFULW5ldGN1cCIsDQogICJhZGQiOiAiYWxpeXVuLjIwOTYudXMua2ciLA0KICAicG9ydCI6ICIyMDk2IiwNCiAgImlkIjogImRjNjZhNDdkLTYwYTctNDlhOS04ODQ2LTg4YTk1OWRhZTU3OCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAibm9uZSIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiMi5raWtpLmx0ZC51YSIsDQogICJwYXRoIjogIi92bWVzcz9lZD0yMDQ4IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogIjIua2lraS5sdGQudWEiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAicmFuZG9taXplZCINCn0=

hysteria2://dc66a47d-60a7-49a9-8846-88a959dae578@152.53.44.79:16102/?sni=www.bing.com&alpn=h3&insecure=1#AT-netcup

tuic://dc66a47d-60a7-49a9-8846-88a959dae578:PkyFw5tF1J5n9teypTc0F5yA@152.53.44.79:16103?sni=www.bing.com&alpn=h3&congestion_control=bbr#AT-netcup
`

let urls = [];
let subconverter = "subapi-loadbalancing.pages.dev"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		if( subconverter.includes("http://") ){
			subconverter = subconverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subconverter = subconverter.split("//")[1] || subconverter;
		}
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); 
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now())/timestamp * total * 1099511627776 )/2);
		total = total * 1099511627776 ;
		let expire= Math.floor(timestamp / 1000) ;
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
		let 自建节点 ="";
		let 订阅链接 ="";
		for (let x of 重新汇总所有链接) {
			if (x.toLowerCase().startsWith('http')) {
				订阅链接 += x + '\n';
			} else {
				自建节点 += x + '\n';
			}
		}
		MainData = 自建节点;
		urls = await ADD(订阅链接);

		if ( !(token == mytoken || token == fakeToken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
			if (envKey) {
				const URLs = await ADD(env[envKey]);
				const URL = URLs[Math.floor(Math.random() * URLs.length)];
				return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
			}
			return new Response(await nginx(), { 
				status: 200 ,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())){
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || ( url.searchParams.has('clash') && !userAgent.includes('subconverter'))){
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ( (url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))){
				订阅格式 = 'singbox';
			} else if (userAgent.includes('surge') || ( url.searchParams.has('surge') && !userAgent.includes('subconverter'))){
				订阅格式 = 'surge';
			}

			let subconverterUrl ;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			// 初始化缓存
			const cache = caches.default;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('clash')){
				追加UA = 'clash';
			} else if(url.searchParams.has('singbox')){
				追加UA = 'singbox';
			} else if(url.searchParams.has('surge')){
				追加UA = 'surge';
			}
			
			try {
				const responses = await Promise.all(urls.map(async url => {
					const cacheKey = new Request(url);
					
					try {
						// 设置2秒超时
						const controller = new AbortController();
						const timeoutId = setTimeout(() => controller.abort(), 2000);
	
						const response = await fetch(url, {
							method: 'get',
							headers: {
								'Accept': 'text/html,application/xhtml+xml,application/xml;',
								'User-Agent': `${追加UA} cmliu/CF-Workers-SUB ${userAgentHeader}`
							},
							signal: controller.signal
						});
	
						clearTimeout(timeoutId);
	
						if (response.ok) {
							const content = await response.text();
							
							// 请求成功，写入缓存，设置24小时的缓存时间
							const cacheResponse = new Response(content, {
								headers: {
									...response.headers,
									'Cache-Control': `public, max-age=${cacheTTL * 60 * 60}`
								}
							});
							await cache.put(cacheKey, cacheResponse);
							console.log(`更新缓存 ${url}:\n${content.slice(0, 10)}...`);
							if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups')) {
								// Clash 配置
								订阅转换URL += "|" + url;
								return ""; // 返回空字符串，因为这种情况下我们不需要内容
							} else if (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
								// Singbox 配置
								订阅转换URL += "|" + url;
								return ""; // 返回空字符串，因为这种情况下我们不需要内容
							} else {
								return content;
							}
						} else {
							throw new Error('请求失败');
						}
					} catch (error) {
						// 请求失败或超时，尝试从缓存读取
						const cachedResponse = await cache.match(cacheKey);
						if (cachedResponse) {
							const cachedContent = await cachedResponse.text();
							console.log(`使用缓存内容 ${url}:\n${cachedContent.slice(0, 10)}...`);
							return cachedResponse.text();
						} else {
							console.log(`无缓存可用 ${url}`);
							return ""; // 缓存中也没有，返回空字符串
						}
					}
				}));	
			
				for (const response of responses) {
					if (response) {
						req_data += base64Decode(response) + '\n';
					}
				}
			
			} catch (error) {
				console.error('处理 URL 时发生错误：', error);
			}

			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			const text = String.fromCharCode.apply(null, encodedData);
			
			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);
			
			const base64Data = btoa(result);

			if (订阅格式 == 'base64' || token == fakeToken){
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=surge&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			}
			//console.log(订阅转换URL);
			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					return new Response(base64Data ,{
						headers: { 
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				let subconverterContent = await subconverterResponse.text();
				if (订阅格式 == 'clash') subconverterContent =await clashFix(subconverterContent);
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text ;
}

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();
  
	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
	return secondHex.toLowerCase();
}

function clashFix(content) {
	if(content.includes('wireguard') && !content.includes('remote-dns-resolve')){
		let lines;
		if (content.includes('\r\n')){
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}
	
		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}
