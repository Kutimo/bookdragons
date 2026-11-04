import * as migration_20261016_185911 from './20261016_185911';
import * as migration_20261104_084916 from './20261104_084916';
import * as migration_20261104_095106 from './20261104_095106';
import * as migration_20261104_100247 from './20261104_100247';

export const migrations = [
  {
    up: migration_20261016_185911.up,
    down: migration_20261016_185911.down,
    name: '20261016_185911',
  },
  {
    up: migration_20261104_084916.up,
    down: migration_20261104_084916.down,
    name: '20261104_084916',
  },
  {
    up: migration_20261104_095106.up,
    down: migration_20261104_095106.down,
    name: '20261104_095106',
  },
  {
    up: migration_20261104_100247.up,
    down: migration_20261104_100247.down,
    name: '20261104_100247'
  },
];
