const QuoteModel = require("../database/models/quote_model");

async function create (req, res) {
    let { quote, date } = req.body;
    let newQuote = await QuoteModel.create({ quote, date })
        .catch(err => res.status(500).send(err))
    res.json(newQuote);
};

async function index (req, res) {
    console.log(QuoteModel);
    let quotes = await QuoteModel.find()
    res.json(quotes)
};


async function show (req, res) {
    let { id } = req.params
    let quote = await QuoteModel.findById(id);
    res.json(quote)
};

async function edit (req, res) {
    let { id } = req.params;
    let quote = await QuoteModel.findById(id);
    res.json(quote)
};

async function update (req, res) {
    let { id } = req.params;
    let { quote, date } = req.body;
    let quote = await QuoteModel.findByIdAndUpdate(id, { quote, date });
    res.redirect(`/quotes/${id}`)
};


async function destroy (req, res) {
    let { id } = req.params;
    let quote = await QuoteModel.findByIdAndRemove(id)
    res.redirect("/quotes")
};


module.exports = {
    create,
    index,
    show,
    edit,
    update,
    destroy
};