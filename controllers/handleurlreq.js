const { str6_36 } = require('hyperdyperid/lib/str6_36');
const urlmodel = require('../models/urlmodel');

//post request
async function handlepostreq(req, res) {
    const body = req.body
    if (!body.url) {
        return res.status(400).json({ error: "url is required" })
    }
    const shortid = str6_36(8)
    await urlmodel.create({
        urlid: shortid,
        redirecturl: body.url,
        history: [],
        createdby:req.user._id
    })

    return res.render("home",{
        id:shortid
    })
}


//get request for redirecting
async function handlegetreq(req, res) {
    const urlid = req.params.url;
    const entry = await urlmodel.findOneAndUpdate(
        {
            urlid
        }, 
        {
        $push: {
            history: {
                visit_time: Date.now()
            }
        }
    })

    res.redirect(entry.redirecturl)
}

//get request for analytics
async function handleanalyticreq(req,res){
    const urlid=req.params.url;
    const result=await urlmodel.findOne({urlid});
    return res.json({
        clicks:result.history.length,
        analytics:result.history
    })
}

module.exports = {
    handlepostreq,
    handlegetreq,
    handleanalyticreq
};