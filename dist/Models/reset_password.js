'use strict';

/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('resetPassword', {
		resetPasswordId: {
			type: DataTypes.CHAR(30),
			allowNull: false,
			primaryKey: true,
			field: 'RESET_PASSWORD_ID'
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
		cReatedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'cREATED_AT'
		},
		expiredAt: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'EXPIRED_AT'
		}
	}, {
		tableName: 'reset_password'
	});
};