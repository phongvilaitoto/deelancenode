const Portfolio = require('../../models/Portfolio')

module.exports = {
   search: async (req, res, next) => {
       try {
           const { search, categoryId } = req.query
           const portfolios = await Portfolio.find({
               $and: [
                   { title : { $regex : search, $options : 'i' } },
                   { status: 'approved' },
                   categoryId ? { categoryId } : { }
               ]
           }).populate(['author', 'categoryId', 'reviews'])
           res.status(200).json({ portfolios })
       }catch (e) {
           throw new Error(e)
       }
   }
}
