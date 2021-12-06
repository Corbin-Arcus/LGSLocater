'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    groupGame: {
      type: DataTypes.STRING
    }
  }, {});
  Group.associate = function(models) {
    Group.hasMany(models.UserGroup, {
      as: userGroups,
      foreignKey: groupId
    })

    Group.belongsTo(model.Event, {
      as: event,
      foreignKey: groupId
    })
  };
  return Group;
};
