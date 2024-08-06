import { DataSource , DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: 'bop.sqlite',
  entities: ['dist/**/*.entity.js'],
  migrations: ["dist/Init/*.js"],
  synchronize: true
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;