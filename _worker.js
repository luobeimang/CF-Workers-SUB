
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
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIm5vdGxzIiwNCiAgImFkZCI6ICJ3d3cudmlzYS5jb20uc2ciLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICJkNDY4YmY2ZC1hYTc2LTQ3MzItZTM5Ny0yMTcwZDk3NjgzZDciLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInZtZXNzLmtpa2lqYW5hLnVzLmtnIiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ewogICJ2IjogIjIiLAogICJwcyI6ICJ0bHMiLAogICJhZGQiOiAidm1lc3Mua2lraWphbmEudXMua2ciLAogICJwb3J0IjogMzQwNTYsCiAgImlkIjogImQ0NjhiZjZkLWFhNzYtNDczMi1lMzk3LTIxNzBkOTc2ODNkNyIsCiAgIm5ldCI6ICJ3cyIsCiAgInR5cGUiOiAibm9uZSIsCiAgImhvc3QiOiAiIiwKICAicGF0aCI6ICIvIiwKICAiYXV0aG9yaXR5IjogIiIsCiAgInRscyI6ICJ0bHMiLAogICJzbmkiOiAiIiwKICAiZnAiOiAiIgp9
vless://0c145cc5-9d0d-469b-eea0-2fe54be82f10@167.253.152.247:443?encryption=none&flow=xtls-rprx-vision&security=reality&sni=0c145cc5.com&fp=chrome&pbk=UK7qxWWGfRQcQfwaGpHnqmmqqJBut4jxve8AeDDJ2UI&type=tcp&headerType=none#reality%7Clft8.love%40xray.com
vless://74f452a8-5ce8-45cf-ad1b-b5bf834bb524@167.253.152.247:19646?encryption=none&flow=xtls-rprx-vision&security=tls&sni=167-253-152-247.nip.io&fp=chrome&type=tcp&headerType=none#vision%7CX2x9.love%40xray.com
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInZtZXNzfG9CZTQubG92ZUB4cmF5LmNvbSIsDQogICJhZGQiOiAiMTY3LjI1My4xNTIuMjQ3IiwNCiAgInBvcnQiOiAiMTMzMTUiLA0KICAiaWQiOiAiOTE1Yzk1MjgtYzQyZS00ZDMzLWQxZmUtNzhjMTVkZTVkZjkwIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIvOTE1Yzk1MjgiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=

vless://d3ad5fbb-dfae-4fc4-a1ac-babe8980edb3@34.81.113.106:31009?type=ws&security=none&path=%2F#tw
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkNOLUNuc2VydmVyc19MTEMiLA0KICAiYWRkIjogInd3dy52aXNhLmNvbS50dyIsDQogICJwb3J0IjogIjQ0MyIsDQogICJpZCI6ICI1MjhhOGQwOS0xNjU5LTQ2N2YtOWMwOC0zZjNjODY2ODcwNDgiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogIm5vbmUiLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIm1vbml0b3JpbmctaW52b2ljZS1yaWNoYXJkLWJ1c2VzLnRyeWNsb3VkZmxhcmUuY29tIiwNCiAgInBhdGgiOiAiL3ZtZXNzP2VkPTIwNDgiLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAibW9uaXRvcmluZy1pbnZvaWNlLXJpY2hhcmQtYnVzZXMudHJ5Y2xvdWRmbGFyZS5jb20iLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAicmFuZG9taXplZCINCn0=
vless://5f7a36ca-81c1-4135-aa97-c5f84a561489@146.56.173.198:12301?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.zara.com&fp=chrome&pbk=UQS83MjJ3IC8g9xvTNfcxUwA2705qd7yEjbWQe8Ivhw&type=tcp&headerType=none#KR-Oracle_Cloud
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIktSLU9yYWNsZV9DbG91ZCIsDQogICJhZGQiOiAid3d3LnZpc2EuY29tLnR3IiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjVmN2EzNmNhLTgxYzEtNDEzNS1hYTk3LWM1Zjg0YTU2MTQ4OSIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAibm9uZSIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiYmVkcm9vbS1wZXJmdW1lLWhvdXNlcy1mcnVpdC50cnljbG91ZGZsYXJlLmNvbSIsDQogICJwYXRoIjogIi92bWVzcz9lZD0yMDQ4IiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogImJlZHJvb20tcGVyZnVtZS1ob3VzZXMtZnJ1aXQudHJ5Y2xvdWRmbGFyZS5jb20iLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAicmFuZG9taXplZCINCn0=
hysteria2://5f7a36ca-81c1-4135-aa97-c5f84a561489@146.56.173.198:12302/?sni=www.bing.com&alpn=h3&insecure=1#KR-Oracle_Cloud
tuic://5f7a36ca-81c1-4135-aa97-c5f84a561489:@146.56.173.198:12303?sni=www.bing.com&alpn=h3&congestion_control=bbr#KR-Oracle_Cloud
vless://155fefb7-0372-4cd0-9920-dca142168387@167.253.152.247:43948?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.zara.com&fp=chrome&pbk=u3Wkc3afBBZV8jzmyZ_49BXp-2vsUJaQTkrzJ2k_0Cg&type=tcp&headerType=none#US-Cloudflare_Warp
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTLUNsb3VkZmxhcmVfV2FycCIsDQogICJhZGQiOiAid3d3LnZpc2EuY29tLnR3IiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjE1NWZlZmI3LTAzNzItNGNkMC05OTIwLWRjYTE0MjE2ODM4NyIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAibm9uZSIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiaXNwLXRyaWFuZ2xlLW5ldHdvcmtpbmctbWkudHJ5Y2xvdWRmbGFyZS5jb20iLA0KICAicGF0aCI6ICIvdm1lc3M/ZWQ9MjA0OCIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJpc3AtdHJpYW5nbGUtbmV0d29ya2luZy1taS50cnljbG91ZGZsYXJlLmNvbSIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICJyYW5kb21pemVkIg0KfQ==
ysteria2://155fefb7-0372-4cd0-9920-dca142168387@167.253.152.247:43951/?sni=www.bing.com&alpn=h3&insecure=1#US-Cloudflare_Warp
tuic://155fefb7-0372-4cd0-9920-dca142168387:KUPFWxDyT1e4hiceHglOw8ex@167.253.152.247:43950?sni=www.bing.com&alpn=h3&congestion_control=bbr#US-Cloudflare_Warp
vless://8313390c-b43d-4a41-a5f0-b2653b16087c@[2a01:4f8:c013:59c0::65]:23223?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.zara.com&fp=chrome&pbk=2IoSz2citqM-_O5_-MhvLGeZVjAe_z2Du_cvwZ9eJm0&type=tcp&headerType=none#DE-Hetzner_Online
vmess://eyAidiI6ICIyIiwgInBzIjogIkRFLUhldHpuZXJfT25saW5lIiwgImFkZCI6ICJ3d3cudmlzYS5jb20udHciLCAicG9ydCI6ICI0NDMiLCAiaWQiOiAiODMxMzM5MGMtYjQzZC00YTQxLWE1ZjAtYjI2NTNiMTYwODdjIiwgImFpZCI6ICIwIiwgInNjeSI6ICJub25lIiwgIm5ldCI6ICJ3cyIsICJ0eXBlIjogIm5vbmUiLCAiaG9zdCI6ICJvYml0dWFyaWVzLWNvbWUtbm90LWR1ZS50cnljbG91ZGZsYXJlLmNvbSIsICJwYXRoIjogIi92bWVzcz9lZD0yMDQ4IiwgInRscyI6ICJ0bHMiLCAic25pIjogIm9iaXR1YXJpZXMtY29tZS1ub3QtZHVlLnRyeWNsb3VkZmxhcmUuY29tIiwgImFscG4iOiAiIiwgImZwIjogInJhbmRvbWl6ZWQiLCAiYWxsb3dsbnNlY3VyZSI6ICJmbGFzZSJ9Cg==
vless://f5908065-df56-4f6b-bea0-d2b0db9bce4b@visa.com:443?encryption=none&security=tls&sni=destroy-writing-nonprofit-plastic.trycloudflare.com&type=ws&host=destroy-writing-nonprofit-plastic.trycloudflare.com&path=%2Ff5908065-df56-4f6b-bea0-d2b0db9bce4b-vless%3Fed%3D2048#CT163%20vless-ws-tls
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
