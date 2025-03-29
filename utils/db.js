import sql from 'mssql';

const tempConfig = {
  user: 'TON_UTILISATEUR',
  password: 'TON_MOT_DE_PASSE',
  server: 'localhost',
  database: 'TempDatabase',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

const pollutionConfig = {
  ...tempConfig,
  database: 'PollutionDatabase'
};

const precipitationConfig = {
  ...tempConfig,
  database: 'PrecipitationsDatabase'
};

// Pools de connexions
let tempPool, pollutionPool, precipitationPool;

// Fonctions d'accès
export const getTempConnection = async () => {
  if (!tempPool) tempPool = await sql.connect(tempConfig);
  return tempPool;
};

export const getPollutionConnection = async () => {
  if (!pollutionPool) pollutionPool = await sql.connect(pollutionConfig);
  return pollutionPool;
};

export const getPrecipitationConnection = async () => {
  if (!precipitationPool) precipitationPool = await sql.connect(precipitationConfig);
  return precipitationPool;
};

export { sql };
