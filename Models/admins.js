/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('admins', {
		adminId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'ADMIN_ID'
		},
		firstName: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'FIRST_NAME'
		},
		lastName: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'LAST_NAME'
		},
		username: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true,
			field: 'USERNAME'
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'PASSWORD'
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true,
			field: 'EMAIL'
		},
		isEmailVerify: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0',
			field: 'IS_EMAIL_VERIFY'
		},
		isMobileNoVerify: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0',
			field: 'IS_MOBILE_NO_VERIFY'
		},
		accountStatus: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '0',
			field: 'ACCOUNT_STATUS'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'CREATED_AT'
		},
		modifiedAt: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'MODIFIED_AT'
		},
		mobileNumberId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'phone_numbers',
				key: 'PHONE_NUMBER_ID'
			},
			field: 'MOBILE_NUMBER_ID'
		},
		isLock: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: '0',
			field: 'IS_LOCK'
		},
		lognum: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'LOGNUM'
		},
		lockDttm: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'LOCK_DTTM'
		}
	}, {
		tableName: 'admins'
	});
};
