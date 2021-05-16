module.exports = function (sequelize, Sequelize) {
  const Table_1 = sequelize.define('user', {
    name: {
      type: Sequelize.STRING,
      notEmpty: true,
    },

    age: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  })

  return Table_1
}
