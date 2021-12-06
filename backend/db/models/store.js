'use strict';
module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    storeName: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Store.associate = function(models) {
    // associations can be defined here
    Store.belongsTo(model.Event, {
      as: event,
      foreignKey: storeId
    })
  };
  return Store;
};
