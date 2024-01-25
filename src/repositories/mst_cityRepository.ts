import prisma from '../db';
import Mst_city from '../models/mst_city';

export default class mst_cityRepository {
  static getMst_cityBycity = async (city: string) => {
    const targetMst_city = await prisma.mst_city.findFirst({
      where: {
        city: city,
      },
    });

    if (!targetMst_city) {
      throw 'getMst_cityBycity: City not found';
    }

    return targetMst_city;
  };
  static viewMst_city = async()=>{
    try {
      const allLabels = await prisma.mst_city.findMany({})

      return allLabels;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  static updateMst_city = async (mst_cityData: Mst_city)=>{
    try{
      const updateLabel = await prisma.mst_city.update({
        where: {
          id: mst_cityData.id,
        },
        data: {
          city: mst_cityData.city,
          province: mst_cityData.province,
          region: mst_cityData.region,
          type: mst_cityData.type
        },
      });
      return updateLabel;
    }catch(error){
      throw String(error || 'Unknown error occurred.');
    }
  }
  static deleteMst_city = async (id:number) => {
    try {
      const deleteMst_city = await prisma.mst_city.delete({
        where:{
          id:id
        }
      })
      return deleteMst_city;
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  }
  static createMst_city = async (mst_cityData: Mst_city) => {
    try {
      await prisma.mst_city.create({
        data: {
          city: mst_cityData.city,
          province: mst_cityData.province,
          region: mst_cityData.region,
          type: mst_cityData.type
        },
      });
    } catch (error) {
      throw String(error || 'Unknown error occurred.');
    }
  };
}