const Portfolio = require('../../models/Portfolio')

module.exports = {
   search: async (req, res, next) => {
       try {
           const { search, categoryId, rating = 'all' } = req.query
           const ports = await Portfolio.find({
               $and: [
                   { title : { $regex : search, $options : 'i' } },
                   { status: 'approved' },
                   categoryId ? { categoryId } : { }
               ]
           }).populate(['reviews', 'categoryId', 'author'])
           ports.forEach((portfolio) => {  // avarage rating
               const length = portfolio.reviews.length
               const arr = portfolio.reviews.map(i=>i.rating)
               const sum = arr.reduce((a, b) => a + b, 0)
               portfolio.rateAvg = sum/length
           })
           const portfolios = ports.filter((port) => {  // filter only rating >= query.rating
                   if(rating === 'all') {
                       return port
                   } else if (rating === 'null') {
                       return port.reviews.length === 0
                   }
                   return port.rateAvg >= rating
               })
               .sort((a, b) => {
                   if(rating === 'all') {
                       if(isNaN(b.rateAvg) && isNaN(a.rateAvg) ){
                           return -b.createdAt
                       }
                       return b.rateAvg - a.rateAvg
                   } else if (rating === 'null') {
                       return -b.createdAt
                   }
                   return b.rateAvg - a.rateAvg
               })
           res.status(200).json({ portfolios })
       }catch (e) {
           throw new Error(e)
       }
   }
}
