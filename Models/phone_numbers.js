/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('phoneNumbers', {
		phoneNumberId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'PHONE_NUMBER_ID'
		},
		inputPhoneNumber: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'INPUT_PHONE_NUMBER'
		},
		countryCd: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'COUNTRY_CD'
		},
		nationalFormat: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'NATIONAL_FORMAT'
		},
		isValidNumber: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			field: 'IS_VALID_NUMBER'
		},
		isValidNumberForRegion: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			field: 'IS_VALID_NUMBER_FOR_REGION'
		},
		regionCd: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'REGION_CD'
		},
		e164Format: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'E164_FORMAT'
		},
		originalFormat: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'ORIGINAL_FORMAT'
		},
		internationalFormat: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'INTERNATIONAL_FORMAT'
		},
		adminId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'admins',
				key: 'ADMIN_ID'
			},
			field: 'ADMIN_ID'
		}
	}, {
		tableName: 'phone_numbers'
	});
};
