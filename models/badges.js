/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('badges', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		image_link: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		score: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		},
		active: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: "1"
		}
	}, {
		tableName: 'badges',
		freezeTableName: true,
		underscored: true
	});


	//Database associations are defined here
	badges.associate = function (models) {
	badges.belongsTo(models.users);
  	};
};
