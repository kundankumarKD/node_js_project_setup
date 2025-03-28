// Option 1: Factory function style (traditional Sequelize)
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING
      },
      description: {
        type : DataTypes.STRING
      },
      price: {
        type : DataTypes.INTEGER
      },
      created_at: {
        type : DataTypes.DATE
      },
      updated_at: {
        type : DataTypes.DATE
      }
    });
  
    return Product;
  };
