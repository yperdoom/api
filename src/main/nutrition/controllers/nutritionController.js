import { connect, disconnect } from '../../../database/mongo/mongodb.js';
import getNutrition from '../services/nutrition/getNutrition.js';
import createNutrition from '../services/nutrition/createNutrition.js';
import editNutrition from '../services/nutrition/editNutrition.js';
import deleteNutrition from "../services/nutrition/deleteNutrition.js";
import EnumReturnMessages from '../../../library/enums/returnMessages.js';

export async function getNutritionController(req, res, next) {
  const filter = {};
  const projection = {};
  let paginate = true;

  if (req.params.nutrition_id) {
    filter._id = req.params.nutrition_id
    paginate = false;
  }

  try {
    await connect();
    const nutrition = await getNutrition(filter, projection)
    await disconnect();

    if (paginate) {
      return res.json({
        message: EnumReturnMessages.success,
        quantity: nutrition.length,
        page: 1,
        pageLength: 1,
        nutrition
      });
    }

    return res.json({
      message: EnumReturnMessages.success,
      nutrition
    });
  } catch (error) {
    Object.assign(error, { customMessage: EnumReturnMessages.error })
    next(error);
  }
}

export async function createNutritionController(req, res, next) {
  const { body } = req

  try {
    await connect();
    const nutrition = await createNutrition(body)
    await disconnect();

    return res.status(201).json({
      message: EnumReturnMessages.success,
      nutrition
    });
  } catch (error) {
    Object.assign(error, { customMessage: EnumReturnMessages.error })
    next(error);
  }
}

export async function editNutritionController(req, res, next) {
  const { body, params: { nutrition_id } } = req

  try {
    await connect();
    const nutrition = await editNutrition(nutrition_id, body)
    await disconnect();

    return res.status(200).json({
      message: EnumReturnMessages.success,
      nutrition
    });
  } catch (error) {
    Object.assign(error, { customMessage: EnumReturnMessages.error })
    next(error);
  }
}

export async function deleteNutritionController(req, res, next) {
  const { params: { nutrition_id } } = req

  try {
    await connect();
    await deleteNutrition(nutrition_id)
    await disconnect();

    return res.status(204).json({
      message: EnumReturnMessages.success
    });
  } catch (error) {
    Object.assign(error, { customMessage: EnumReturnMessages.error })
    next(error);
  }
}