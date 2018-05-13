/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('player_response', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		game_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'games',
				key: 'id'
			}
		},
		question_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'questions',
				key: 'id'
			}
		},
		question_option_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'question_options',
				key: 'id'
			}
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
	}, {
		tableName: 'player_response',
		freezeTableName: true,
		underscored: true
	});

	//Database associations are defined here
	player_response.associate = function (models) {
		player_response.belongsTo(models.users);
		player_response.belongsTo(models.games);
		player_response.belongsTo(models.question_options);
	};

};
