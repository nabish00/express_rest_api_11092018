'use strict';

/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('addresses', {
		addressId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'ADDRESS_ID'
		},
		address: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'ADDRESS'
		},
		city: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'CITY'
		},
		state: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'STATE'
		},
		street: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'STREET'
		},
		adminId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'admins',
				key: 'ADMIN_ID'
			},
			field: 'ADMIN_ID'
		},
		addressTypeId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'address_types',
				key: 'ADDRESS_TYPE_ID'
			},
			field: 'Address_type_id'
		}
	}, {
		tableName: 'addresses'
	});
};