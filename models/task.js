'use strict';
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('task', {
    body: DataTypes.STRING,
    done: DataTypes.BOOLEAN
  }, {});
  task.associate = function(models) {
    // associations can be defined here
  };
  return task;
};