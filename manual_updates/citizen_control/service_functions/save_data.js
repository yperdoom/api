
import { connect, disconnect } from '../../../src/database/mongo/mongodb.js';
import createCitizen from "../../../src/main/citizen_control/services/createCitizen.js";


export default async function saveData(documents) {
  await connect();
  await createCitizen(documents)
  await disconnect();
  console.log(documents.length);
  await documents.forEach(async data => {

  })
}