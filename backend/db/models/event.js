'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    eventGame: {
      type: DataTypes.STRING,
      allowNull: false
    },
    groupId:{
      type: DataTypes.INTEGER
    }
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.hasMany(models.Group, {
      as: groups,
      foreignKey: groupId
    });

    Event.hasOne(models.Store, {
      as: store,
      foreignKey: storeId
    })
  };
  return Event;
};
