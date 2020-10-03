module.exports= {
    devServer:{
        proxy:{ // 配置代理
            "/x":{ // 對以/x為開頭的請求進行代理
                target:"https://api.bilibili.com",
                onProxyReq(proxyReq){
                    // add custom header to request
                    proxyReq.setHeader("origin, https://www.bilibili.com");
                    proxyReq.setHeader("trferer, https://www.bilibili.com/v/channel");
                    // or log the req
                }
            }
        }
    }
}