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
    // UserGroup.belongsToMany(models.User, {
    //   foreignKey: "groupId",
    //   through: 'UserGroup',
    //   otherKey: 'userId'
    // })

    // UserGroup.belongsTo(models.Group, {
    //   as: "group",
    //   foreignKey: "groupId"
    // })
  };
  return UserGroup;
};
