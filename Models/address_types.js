/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('addressTypes', {
		addressTypeId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ADDRESS_TYPE_ID'
		},
		addressType: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'ADDRESS_TYPE'
		}
	}, {
		tableName: 'address_types'
	});
};
