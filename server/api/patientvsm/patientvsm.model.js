'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Patientvsm', {
	id: {
	  type: DataTypes.BIGINT,
	  allowNull: false,
	  primaryKey: true,
	  autoIncrement: true
	},
	reading: DataTypes.INTEGER,
	clinicianid: DataTypes.BIGINT,
	date: DataTypes.STRING,
	diastolic: DataTypes.STRING,
	height: DataTypes.STRING,
	hr: DataTypes.STRING,
	map: DataTypes.STRING,
	o2sat: DataTypes.STRING,
	pain: DataTypes.STRING,
	patientid: DataTypes.BIGINT,
	pulse: DataTypes.STRING,
	respiration: DataTypes.STRING,
	systolic: DataTypes.STRING,
	temperature: DataTypes.STRING,
	weight: DataTypes.STRING,
	bmi: DataTypes.STRING,
	iddevice: {
		type: DataTypes.BIGINT,
		allowNull: false
	}
  });
}
