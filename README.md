# (WIP) Prestashop Web Service Node Module

Node module which allows you to connect with PrestaShop (1.6 & 1.7) via Webservice

## How to install 

```
npm install prestashop_ws2 --save
```

You'll need to add configuration in your .env file : 

```
PRESTASHOP_WS_KEY="YOUR_WEBSERVICE_KEY"
PRESTASHOP_API_URL="https://your_url.com/api" (do not forget /api on the link)
PRESTASHOP_OUTPUT_FORMAT="XML" (you can use XML or JSON for your result format)
```

## Methods availables

If you want to use webservice for specific resources (products, shops, CMS..), you can use these general functions : 

```
const prestashopWs = require("prestashop_ws2");

const dataGet = await prestashopWs.get("products", {"display" : "full", "filter[id]" : 1}); // GET
const dataGet = await prestashopWs.get("products/1", {}); // other way to use GET
const dataHead = await prestashopWs.head("content_management_system/2", {}); // HEAD
const dataDelete = await prestashopWs.remove("content_management_system/2", {}); //DELETE
const dataPost = await prestashopWs.post("content_management_system", "<your-xml>"); //POST
const dataPut = await prestashopWs.put("content_management_system", "<your-xml>"); //PUT

```

For the second parameters, I recommend to use a blank schema from the PrestaShop DevDocs : 

PrestaShop 1.6 : 

[http://doc.prestashop.com/display/PS16/Web+service+one-page+documentation](http://doc.prestashop.com/display/PS16/Web+service+one-page+documentation)

PrestaShop 1.7 : 
[https://devdocs.prestashop.com/1.7/webservice/resources/](https://devdocs.prestashop.com/1.7/webservice/resources/)