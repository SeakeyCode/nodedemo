(async () => {
  const Sequelize = require('sequelize')

  const sequelize = new Sequelize('my_website', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
  })

  const Fruit = sequelize.define('Fruit', {
    name: { type: Sequelize.STRING(20), allowNull: false },
    price: { type: Sequelize.FLOAT, allowNull: false },
    stock: { type: Sequelize.INTEGER, defaultValue: 0 }
  },{
    timestamps: false
  })

  let ret = await Fruit.sync({force: true})

  // 创建
  ret = await Fruit.create({
    name: '香蕉',
    price: 3.50
  })

  // 查询
  ret = await Fruit.findAll()

  console.log(JSON.stringify(ret))

})()