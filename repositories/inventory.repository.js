export class inventoryRepository {
    constructor(Product) {
        this.Product = Product
    }

    getProducts = () => this.Product.findAll({
        order: [['id', 'ASC']]
    })

    getProductById = (id) => this.Product.findByPk(id)

    createProduct = (products) => this.Product.bulkCreate(products, {
        order: [['id', 'ASC']]
    })

    updateProduct = (id, product) => this.Product.update(product, {
        where: { id }
    })

    deleteProduct = (id) => this.Product.destroy({
        where: { id }
    })
}
