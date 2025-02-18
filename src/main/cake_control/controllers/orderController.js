import { connect, disconnect } from '../../../database/mongo/mongodb.js';
import getOrder from '../services/getOrder.js';
import createOrder from '../services/createOrder.js';
import editOrder from '../services/editOrder.js';
import deleteOrder from "../services/deleteOrder.js";

export async function getOrderController(req, res, next) {
  const filter = {};
  const projection = {};
  let paginate = true;

  if (req.params.order_id) {
    filter._id = req.params.order_id
    paginate = false;
  }

  try {
    await connect();
    const order = await getOrder(filter, projection)
    await disconnect();

    if (paginate) {
      return res.json({
        message: 'Operação concluída com sucesso.',
        quantity: order.length,
        page: 1,
        pageLength: 1,
        order
      });
    }

    return res.json({
      message: 'Operação concluída com sucesso.',
      order
    });
  } catch (error) {
    Object.assign(error, { customMessage: 'Erro ao buscar pedido.' })
    next(error);
  }
}

export async function createOrderController(req, res, next) {
  const { body } = req

  try {
    await connect();
    const order = await createOrder(body)
    await disconnect();

    return res.status(201).json({
      message: 'Pedido criado com sucesso.',
      order
    });
  } catch (error) {
    Object.assign(error, { customMessage: 'Erro ao criar pedido.' })
    next(error);
  }
}

export async function editOrderController(req, res, next) {
  const { body, params: { order_id } } = req

  try {
    await connect();
    const order = await editOrder(order_id, body)
    await disconnect();

    return res.status(200).json({
      message: 'Pedido criado com sucesso.',
      order
    });
  } catch (error) {
    Object.assign(error, { customMessage: 'Erro ao criar pedido.' })
    next(error);
  }
}

export async function deleteOrderController(req, res, next) {
  const { params: { order_id } } = req

  try {
    await connect();
    const order = await deleteOrder(order_id)
    await disconnect();

    return res.status(200).json({
      message: 'Pedido deletado com sucesso.',
      order
    });
  } catch (error) {
    Object.assign(error, { customMessage: 'Erro ao criar pedido.' })
    next(error);
  }
}