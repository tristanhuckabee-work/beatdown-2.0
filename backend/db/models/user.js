'use strict';
const { Model, Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    toSafeObject() {
      const {id, username, email} = this;
      return {id, username, email};
    }
    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPass.toString());
    }
    static getCurrentUserById(id) {
      return User.scope('currentUser').findByPk(id);
    }
    static async login({cred, pass}) {
      const {Op} = require('sequelize');
      const user = await User.scope('loginUser').findOne({
        where: {
          [Op.or]: {
            username: cred,
            email: cred
          }
        }
      });
      if (user && user.validatePassword(pass)) {
        return await User.scope('currentUser').findByPk(user.id);
      }
    }
    static async signup({username, email, pass}) {
      const hashedPass = bcrypt.hashSync(pass);
      const user = await User.create({ username, email, hashedPass })
      return await User.scope('currentUser').findByPk(user.id);
    }

    static associate(models) {
      // define association here
    }
  }
  User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(val) {
          if (Validator.isEmail(val)) {
            throw new Error('Cannot be an email.')
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3,256],
        isEmail: true
      }
    },
    hashedPass: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [60, 60],
      }
    },
    image: {
      type: DataTypes.INTEGER,
    },
    biography: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 450]
      }
    }
  },
  {
    sequelize,
    modelName: 'User',
    defaultScope: {
      attributes: {
        exclude: ['hashedPass', 'email', 'createdAt', 'updatedAt']
      }
    },
    scopes: {
      currentUser: {
        attributes: {
          exclude: ['hashedPass']
        }
      },
      loginUser: {
        attributes: {}
      }
    }
  });
  return User;
};