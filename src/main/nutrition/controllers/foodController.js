import { connect, disconnect } from '../../../database/mongo/mongodb.js';
import getFood from '../services/food/getFood.js';
import createFood from '../services/food/createFood.js';
import editFood from '../services/food/editFood.js';
import deleteFood from "../services/food/deleteFood.js";
import EnumReturnMessages from '../../../library/enums/returnMessages.js';

export async function getFoodController(req, res, next) {
  const filter = {};
  const projection = {};
  let paginate = true;

  if (req.params.food_id) {
    filter._id = req.params.food_id
    paginate = false;
  }

  try {
    await connect();
    const food = await getFood(filter, projection)
    await disconnect();

    if (paginate) {
      return res.json({
        message: EnumReturnMessages.success,
        quantity: food.length,
        page: 1,
        pageLength: 1,
        food
      });
    }

    return res.json({
      message: EnumReturnMessages.success,
      food
    });
  } catch (error) {
    Object.assign(error, { customMessage: EnumReturnMessages.error })
    next(error);
  }
}

export async function createFoodController(req, res, next) {
  const { body } = req

  try {
    await connect();
    const food = await createFood(body)
    await disconnect();

    return res.status(201).json({
      message: EnumReturnMessages.success,
      food
    });
  } catch (error) {
    Object.assign(error, { customMessage: EnumReturnMessages.error })
    next(error);
  }
}

export async function editFoodController(req, res, next) {
  const { body, params: { food_id } } = req

  try {
    await connect();
    const food = await editFood(food_id, body)
    await disconnect();

    return res.status(200).json({
      message: EnumReturnMessages.success,
      food
    });
  } catch (error) {
    Object.assign(error, { customMessage: EnumReturnMessages.error })
    next(error);
  }
}

export async function deleteFoodController(req, res, next) {
  const { params: { food_id } } = req

  try {
    await connect();
    await deleteFood(food_id)
    await disconnect();

    return res.status(204).json({
      message: EnumReturnMessages.success
    });
  } catch (error) {
    Object.assign(error, { customMessage: EnumReturnMessages.error })
    next(error);
  }
}