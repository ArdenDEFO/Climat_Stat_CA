import sql from 'mssql';

const tempConfig = {
  server: process.env.DB_SERVER,
  database: process.env.DB_TEMP_DB,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    trustServerCertificate: true,
    encrypt: false
  }
};

const pollutionConfig = {
  ...tempConfig,
  database:  process.env.DB_POLLUTION_DB
};

const precipitationConfig = {
  ...tempConfig,
  database:  process.env.DB_PRECIPITATION_DB
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
