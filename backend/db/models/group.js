'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    groupGame: {
      type: DataTypes.STRING
    }
  }, {});
  Group.associate = function(models) {
    // Group.hasMany(models.UserGroup, {
    //   as: "userGroups",
    //   foreignKey: "groupId"
    // })

    Group.hasMany(models.Event, {
      as: "event",
      foreignKey: "groupId"
    })

    Group.belongsToMany(models.User, {
      foreignKey: "groupId",
      through: 'UserGroup',
      otherKey: 'userId'
    })
  };

  return Group;
};
