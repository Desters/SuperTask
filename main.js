const URL = `https://script.googleusercontent.com/macros/echo?user_content_key=Pg2ERlqAnoPUVPS4IG768JrYb2m8KbtzTXVzkrjg2JW38AKcYjQ-D3yfNsgV21GFPAj4-WKufpHaqXsGMtEiO9661IlCvhOlm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnK8oslw9WDNfsv4XLZgtQdSLKJ4AWe4x79z63svT6dw5RvZ7OIAwH3fRn2d6qBvskw5CMRN1q_dOrOOLri2qzbgi3k1UTgvzag&lib=MNFdbqzk2lkFqo8fHaJDHng-d6Oriy55E`;
const DOM = {
    date : document.querySelector(".message-date"),
    body : document.querySelector(".message-body"),
}
const renderDate = () => {
    const now = new Date();
    const nowStr = now.getDate()+"."+(now.getMonth()+1)+"."+now.getFullYear();
    DOM.date.innerText = nowStr;
};

const getTask = () =>{
    fetch(URL).then(r=>r.text()).then(t=>DOM.body.innerText=t);
}

renderDate();
getTask();
