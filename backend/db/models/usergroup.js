'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('UserGroup', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  UserGroup.associate = function(models) {
    // associations can be defined here
    UserGroup.hasMany(models.User, {
      as: users,
      foreignKey: userId
    })

    UserGroup.belongsTo(models.Group, {
      as: group,
      foreignKey: groupId
    })
  };
  return UserGroup;
};
