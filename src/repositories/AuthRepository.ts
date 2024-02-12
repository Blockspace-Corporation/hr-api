import prisma from '../db';
// import User from '../models/mst_users';
// import * as bcrypt from 'bcrypt';
// import { BCRYPT_SALT_ROUNDS } from '../constants';

export default class AuthRepository {
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

  // static createUser = async (userData: User) => {
  //   try {
  //     bcrypt.hash(
  //       userData.password as string,
  //       BCRYPT_SALT_ROUNDS,
  //       async function (err, hash) {
  //         if (err) throw err;

  //        const createmstUser = await prisma.mst_user.create({
  //           data: {
  //           //   company_id: userData.company_id,
  //             username: userData.username,
  //             password: hash,
  //             fullname: userData.fullname,
  //             phone_number: userData.phone_number,
  //             created_by: userData.created_by,
  //             create_date: userData.create_date,
  //             updated_by: userData.updated_by,
  //             update_date: userData.update_date,
  //             id_locked: userData.id_locked,
  //           },
  //         });
  //         return createmstUser
  //       }
  //     );
  //   } catch (error) {
  //     throw String(error || 'Unknown error occurred.');
  //   }
  // };
}
