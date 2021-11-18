const {Model, DataTypes} =require('sequelize');
const sequelize= require('../config/connection');

class Comment extends Model {}
//just like user and project

Comment.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,

    }, text: {
        type: DataTypes.STRING,
    }, date_created:{
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue: DataTypes.NOW,
    }, user_id:{
        type:DataTypes.INTEGER,
        references:{
            model:'user',
            key:'id',
        },
    }, project_id:{
        type:DataTypes.INTEGER,
        references: {
            model:'project',
            key: 'id',
        },    
    },
},
    { 
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',


    });