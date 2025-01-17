import log4js from 'log4js';

/**
 * @description The parameters that all environments should have
 */

export class ConfigGlobalDto {
  state: string;
  port: number;
  cpuCount: number;
  queue: {
    active: boolean;
    host: string;
    headersHost: string;
    port: number;
    user: string;
    password: string;
    destination: string;
    heartBeat: string;
  };
  dataBase: {
    name: string;
    host: string;
    port: number;
    user: string;
    password: string;
    acquireConnectionTimeout: number;
    poolMax: number;
    poolMin: number;
  };
  subscription: {
    timeout: number;
  };
  oauth2: {
    jwtSecret: string;
    jwtTokenExpiresIn: string;
  };
  encryption: {
    key: string;
  };
  log: () => log4js.Logger;
}

export default new ConfigGlobalDto();
