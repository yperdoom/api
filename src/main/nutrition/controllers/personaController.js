import { connect, disconnect } from '../../../database/mongo/mongodb.js';
import getPersona from '../services/persona/getPersona.js';
import createPersona from '../services/persona/createPersona.js';
import editPersona from '../services/persona/editPersona.js';
import deletePersona from "../services/persona/deletePersona.js";
import EnumReturnMessages from '../../../library/enums/returnMessages.js';

export async function getPersonaController(req, res, next) {
  const filter = {};
  const projection = {};
  let paginate = true;

  if (req.params.persona_id) {
    filter._id = req.params.persona_id
    paginate = false;
  }

  try {
    await connect();
    const persona = await getPersona(filter, projection)
    await disconnect();

    if (paginate) {
      return res.json({
        message: EnumReturnMessages.success,
        quantity: persona.length,
        page: 1,
        pageLength: 1,
        persona
      });
    }

    return res.json({
      message: EnumReturnMessages.success,
      persona
    });
  } catch (error) {
    Object.assign(error, { customMessage: EnumReturnMessages.error })
    next(error);
  }
}

export async function createPersonaController(req, res, next) {
  const { body } = req

  try {
    await connect();
    const persona = await createPersona(body)
    await disconnect();

    return res.status(201).json({
      message: EnumReturnMessages.success,
      persona
    });
  } catch (error) {
    Object.assign(error, { customMessage: EnumReturnMessages.error })
    next(error);
  }
}

export async function editPersonaController(req, res, next) {
  const { body, params: { persona_id } } = req

  try {
    await connect();
    const persona = await editPersona(persona_id, body)
    await disconnect();

    return res.status(200).json({
      message: EnumReturnMessages.success,
      persona
    });
  } catch (error) {
    Object.assign(error, { customMessage: EnumReturnMessages.error })
    next(error);
  }
}

export async function deletePersonaController(req, res, next) {
  const { params: { persona_id } } = req

  try {
    await connect();
    await deletePersona(persona_id)
    await disconnect();

    return res.status(204).json({
      message: EnumReturnMessages.success
    });
  } catch (error) {
    Object.assign(error, { customMessage: EnumReturnMessages.error })
    next(error);
  }
}