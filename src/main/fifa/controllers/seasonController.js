import { connect, disconnect } from '../../../database/mongo/mongodb.js';
import getSeason from '../services/getSeason.js';
import createSeason from '../services/createSeason.js';
import editSeason from '../services/editSeason.js';
import deleteSeason from "../services/deleteSeason.js";

export async function getSeasonController(req, res, next) {
  const filter = {};
  const projection = {};
  let paginate = true;

  if (req.params.season_id) {
    filter._id = req.params.season_id
    paginate = false;
  }

  try {
    await connect();
    const season = await getSeason(filter, projection)
    await disconnect();

    if (paginate) {
      return res.json({
        message: 'Operação concluída com sucesso.',
        quantity: season.length,
        page: 1,
        pageLength: 1,
        season
      });
    }

    return res.json({
      message: 'Operação concluída com sucesso.',
      season
    });
  } catch (error) {
    Object.assign(error, { customMessage: 'Erro ao buscar temporada.' })
    next(error);
  }
}

export async function getStatisticsController(req, res, next) {
  try {
    await connect();
    const seasons = await getSeason({}, {})
    await disconnect();

    const totals = { matches: 0, goals: 0, assistances: 0 }
    seasons.forEach(season => {
      totals.matches += season.numbers.matches
      totals.goals += season.numbers.goals
      totals.assistances += season.numbers.assistances
    })
    totals.goalParticipations = totals.goals + totals.assistances
    totals.goalsPerMatches = (totals.goals / totals.matches).toFixed(2)
    totals.goalParticipationsPerMatches = (totals.goalParticipations / totals.matches).toFixed(2)

    return res.json({
      message: 'Operação concluída com sucesso.',
      totals
    });
  } catch (error) {
    Object.assign(error, { customMessage: 'Erro ao buscar temporada.' })
    next(error);
  }
}

export async function createSeasonController(req, res, next) {
  const { body } = req

  try {
    await connect();
    const season = await createSeason(body)
    await disconnect();

    return res.status(201).json({
      message: 'Temporada criado com sucesso.',
      season
    });
  } catch (error) {
    Object.assign(error, { customMessage: 'Erro ao criar temporada.' })
    next(error);
  }
}

export async function editSeasonController(req, res, next) {
  const { body, params: { season_id } } = req

  try {
    await connect();
    const season = await editSeason(season_id, body)
    await disconnect();

    return res.status(200).json({
      message: 'Temporada editada com sucesso.',
      season
    });
  } catch (error) {
    Object.assign(error, { customMessage: 'Erro ao editar temporada.' })
    next(error);
  }
}

export async function deleteSeasonController(req, res, next) {
  const { params: { season_id } } = req

  try {
    await connect();
    await deleteSeason(season_id)
    await disconnect();

    return res.status(204).json({
      message: 'Temporada deletada com sucesso.'
    });
  } catch (error) {
    Object.assign(error, { customMessage: 'Erro ao deletar temporada.' })
    next(error);
  }
}