module.exports = function(sequelize, DataTypes) {
	return sequelize.define('roles', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		role: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		user_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		}
	}, {
		tableName: 'roles',
		timestamps: false
	});
};