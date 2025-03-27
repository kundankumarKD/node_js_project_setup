// Option 1: Factory function style (traditional Sequelize)
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING
      },
      email: {
        type : DataTypes.STRING
      }
    });
  
    return User;
  };
