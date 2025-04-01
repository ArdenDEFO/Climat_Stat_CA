import sql from 'mssql';

const tempConfig = {
  server: 'DESKTOP-J8V9QME\\SQLEXPRESS',
  database: 'TempDatabase',
  user: 'climastat_user',
  password: 'motdepasse123',
  options: {
    trustServerCertificate: true,
    encrypt: false
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
