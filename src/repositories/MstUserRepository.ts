import prisma from '../db';
import User from '../models/mst_users';
import * as bcrypt from 'bcrypt';
import { BCRYPT_SALT_ROUNDS } from '../constants';


export default class MstUserRepository {

  static getUserByUsername = async (username: string) => {
    const targetUser = await prisma.mst_user.findFirst({
      where: {
        username: username,
      },
    });

    if (!targetUser) {
      throw 'getUserByUsername: User not found';
    }

    return targetUser;
  };

   static createUser = async (userData: User) => {
    try {
      bcrypt.hash(
        userData.password as string,
        BCRYPT_SALT_ROUNDS,
        async function (err, hash) {
          if (err) throw err;

         const createmstUser = await prisma.mst_user.create({
            data: {
            //   company_id: userData.company_id,
              username: userData.username,
              password: hash,
              fullname: userData.fullname,
              phone_number: userData.phone_number,
              // created_by: userData.created_by,
              create_date: userData.create_date,
              // updated_by: userData.updated_by,
              update_date: userData.update_date,
              id_locked: userData.id_locked,
            },
          });
          return createmstUser
        }
      );
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };
  // static createUser = async (userData: User) => {
  //   try {

  //     await prisma.mst_user.create({
  //           data: {
  //             // company_id: userData.company_id,
  //             username: userData.username,  
  //             password: userData.password,           
  //             fullname: userData.fullname,        
  //             phone_number:userData.phone_number,        
  //             // created_by:userData.created_by,
  //             create_date:userData.create_date,
  //             // updated_by:userData.updated_by,
  //             update_date:userData.update_date,
  //             id_locked:userData.id_locked,

  //           },
  //         });
          
  //   } catch (error) {
  //     throw String(error || 'Unknown error occurred.');
  //   }
  // };

  

  static getOneUserId = async (id: number)=>{
    const targetOneUser = await prisma.mst_user.findFirst({
      where:{
        id: id
      }
    })
    return targetOneUser;
  }

  static viewUser = async()=>{
    try {
      const allLabels = await prisma.mst_user.findMany({})

      return allLabels;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  static updateUser = async (userData: User)=>{
    try{
      const updateLabel = await prisma.mst_user.update({
        where: {
          id: userData.id,
        },
        data: {
          company_id: userData.company_id,
              username: userData.username,  
              password: userData.password,           
              fullname: userData.fullname,        
              phone_number:userData.phone_number,        
              created_by:userData.created_by,
              create_date:userData.create_date,
              updated_by:userData.updated_by,
              update_date:userData.update_date,
              id_locked:userData.id_locked
        },
      });
      return updateLabel;
    }catch(error){
      throw String(error || 'Unknown error occurred.');
    }
  }
  static deleteUser = async (id:number) => {
    try {
      const deleteUser = await prisma.mst_user.delete({
        where:{
          id:id
        }
      })
      return deleteUser;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
}
