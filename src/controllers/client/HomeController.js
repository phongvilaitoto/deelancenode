const Portfolio = require('../../models/Portfolio')
const User = require('../../models/User')
const status = 'approved'

module.exports = {

    home: async (req, res, next) => {
        try {
            // Pagination
            const { page, perPage } = req.query
            const PerPage = perPage ? parseInt(perPage) : 10
            const Page = page ? parseInt(page): 1
            const port = await Portfolio.find({ status: 'approved' }).map(i=>i.length)
            const length = Math.ceil(port / perPage)
            const portfolios = await Portfolio.find({ status })
                .populate(['author', 'categoryId', 'reviews'])
                .sort('-createdAt')
                .skip((Page * PerPage) - perPage )
                .limit(PerPage)
            res.status(200).json({ portfolios, length })
        }catch (e) {
            throw e
        }
    },
    filterCategory: async (req, res, next) => {
       try {
           // Pagination
           const { page, perPage, categoryId } = req.query
           const PerPage = perPage ? parseInt(perPage) : 10
           const Page = page ? parseInt(page): 1
           const portCate = await Portfolio.find({
               $and: [
                   { categoryId } ,
                   { status }
                   ]
           }).map(i=>i.length)
           const length = Math.ceil(portCate / perPage)
           const portfolios = await Portfolio.find({ $and: [{ categoryId } , { status: 'approved' }] })
               .populate(['author', 'categoryId', 'reviews'])
               .sort({ createdAt: -1 })
               .skip((Page * perPage) - PerPage)
               .limit(PerPage)
           res.status(200).json({ portfolios, length })
       } catch (e) {
           throw e
       }
    },
    searchPortfolio: async (req, res, next) => {
      try {
          const { search } = req.query
          const portfolios = await Portfolio.find({
             $and: [
                 { title : { $regex : search, $options : 'i' } },
                 { status }
             ]
          }).populate(['author', 'categoryId', 'reviews'])
          res.status(200).json({ portfolios })
      }catch (e) {
          throw e
      }
    },

    detail: async (req, res, next) => {
      try {
          const { _id } = req.query
          const portfolio = await Portfolio.findOne({ _id, status: 'approved' })
              .populate(['author', 'categoryId', 'reviews'])
          res.status(200).json({ portfolio })
      }catch (e) {
          throw e
      }
    },

    alsolike: async (req, res, next) => {
        try {
            const { categoryId } = req.query
            const portfolios = await Portfolio.find({ categoryId })
                .populate(['author', 'categoryId', 'reviews'])
           res.status(200).json({ portfolios })
        }catch (e) {
            throw e
        }
    }
}
