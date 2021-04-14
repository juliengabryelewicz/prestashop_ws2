const api = require('../../api/general');
const assert = require('assert').strict;

describe("general API", function() {

    it("should get all products", async function() {
        let products = await api.get("products", {})
        assert.strictEqual(products.status, 200);
    });

    it("should get a product", async function() {

        let params = {
            "display": "full",
            "filter[id]" : 1
        }
        let product = await api.get("products", params)
        assert.strictEqual(product.status, 200);
    });

    it("should use HEAD", async function() {

        let params = {
            "display": "full",
            "filter[id]" : 1
        }
        let product = await api.head("products", params)
        assert.strictEqual(product.status, 200);
    });

    it("should return 200 even if no products", async function() {

        let params = {
            "display": "full",
            "filter[id]" : 999999999999
        }
        let product = await api.get("products", params)
        assert.strictEqual(product.status, 200);
    });

    it("should return 400 even if wrong endpoint", async function() {

        let params = {
            "display": "full",
            "filter[id]" : 1
        }
        try{
            let product = await api.get("product", params)
        }catch(err){
            assert.notStrictEqual(err, null);
        }
        
    });
});