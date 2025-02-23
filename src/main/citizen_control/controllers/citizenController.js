import { connect, disconnect } from '../../../database/mongo/mongodb.js';
import EnumReturnMessages from '../../../library/enums/returnMessages.js';
import getCitizen from '../services/getCitizen.js';
import createCitizen from '../services/createCitizen.js';
import editCitizen from '../services/editCitizen.js';
import deleteCitizen from "../services/deleteCitizen.js";

export async function getCitizenController(req, res, next) {
  const params = req.params ?? {};
  const query = req.query ?? {};
  const filter = {};
  const projection = {};
  let paginate = true;
  const queryOptions = {};
  if (params.citizen_id) {
    filter._id = params.citizen_id
    paginate = false;
  }
  if (query.limit) {
    queryOptions.limit = query.limit
  }

  try {
    await connect();
    const citizen = await getCitizen(filter, projection, queryOptions)
    await disconnect();

    if (paginate) {
      return res.json({
        message: EnumReturnMessages.success,
        quantity: citizen.length,
        page: 1,
        pageLength: 1,
        citizen
      });
    }

    return res.json({
      message: EnumReturnMessages.success,
      citizen
    });
  } catch (error) {
    Object.assign(error, { customMessage: EnumReturnMessages.error })
    next(error);
  }
}

export async function createCitizenController(req, res, next) {
  const { body } = req

  try {
    await connect();
    const citizen = await createCitizen(body)
    await disconnect();

    return res.status(201).json({
      message: EnumReturnMessages.success,
      citizen
    });
  } catch (error) {
    Object.assign(error, { customMessage: EnumReturnMessages.error })
    next(error);
  }
}

export async function editCitizenController(req, res, next) {
  const { body, params: { citizen_id } } = req

  try {
    await connect();
    const citizen = await editCitizen(citizen_id, body)
    await disconnect();

    return res.status(200).json({
      message: EnumReturnMessages.success,
      citizen
    });
  } catch (error) {
    Object.assign(error, { customMessage: EnumReturnMessages.error })
    next(error);
  }
}

export async function deleteCitizenController(req, res, next) {
  const { params: { citizen_id } } = req

  try {
    await connect();
    await deleteCitizen(citizen_id)
    await disconnect();

    return res.status(204).json({
      message: EnumReturnMessages.success
    });
  } catch (error) {
    Object.assign(error, { customMessage: EnumReturnMessages.error })
    next(error);
  }
}