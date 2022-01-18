export default (sequelize, DataTypes) => {
    const Movie = sequelize.define(
      'movie', {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        film: DataTypes.STRING,
        times: DataTypes.INTEGER,
        watched: DataTypes.BOOLEAN,
        createdOn: DataTypes.STRING,
      }, {
        timestamp: true,
        freezeTableName: true,
      },
    );
  
    return Movie;
};