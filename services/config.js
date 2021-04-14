const dotenv = require( 'dotenv' )
dotenv.config()

const headerXml =  {
    headers: {'Content-Type': 'application/xml'}
};

module.exports = {
    ws_key: process.env.PRESTASHOP_WS_KEY || "",
    output_format: process.env.PRESTASHOP_OUTPUT_FORMAT || "XML",
    base_url: process.env.PRESTASHOP_API_URL || "",
    headerXml,
}