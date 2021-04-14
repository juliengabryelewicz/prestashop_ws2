# (WIP) Prestashop Web Service Node Module

Node module which allows you to connect with PrestaShop (1.6 & 1.7) via Webservice

## Methods availables

If you want to use webservice for specific resources (products, shops, CMS..), you can use these general functions : 

```
const prestashopWs = require("prestashop_ws");

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