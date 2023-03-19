chrome.tabs.onUpdated.addListener((tabId,tab)=>{
    if(tab.url && tab.url.includes("youtube.com/watch")){
        const queryParametres = tab.url.split("?")[1];
        const urlParametres = new URLSearchParams(queryParametres);
        console.log(urlParametres);
        chrome.tabs.sendMessage(tabId,{
            type:"NEW",
            videoId:urlParametres.get("v"),
        });

    }
})