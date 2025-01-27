import sequelize from '../config/config';
import { CategoryFactory } from './category.js';
import { ProductFactory } from './product.js';
import { PurchaseFactory } from './purchase.js';
import { SaleFactory } from './sale.js';
import { SupplierFactory } from './supplier.js';
import { TransferFactory } from './transfer.js';
import { Db, Models } from './types';
import 'dotenv/config';

const env = process.env.NODE_ENV as 'development' | 'test' | 'production';

// eslint-disable-next-line no-var
var models: any = {
  Category: CategoryFactory(sequelize),
  Product: ProductFactory(sequelize),
  Purchase: PurchaseFactory(sequelize),
  Sale: SaleFactory(sequelize),
  Supplier: SupplierFactory(sequelize),
  Transfer: TransferFactory(sequelize),
};

export const initModel = async (withoutSync = false) => {
  // Create model associations
  Object.keys(models as Models).forEach((modelKey) => {
    if ('associate' in models[modelKey]) {
      models[modelKey].associate(models);
    }
  });

  if (!withoutSync) {
    // await sequelize.sync({
    //   // alter: true
    //   ...(env == "development" ? {
    //     alter: true
    //   } : {
    //     force: true
    //   })
    // })
    await sequelize.sync()
  }
};

export const db: Db = {
  sequelize,
  ...models,
};
