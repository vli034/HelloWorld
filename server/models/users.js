module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(256),
			allowNull: false
		}
	}, {
		tableName: 'users',
		timestamps: false
	});
};