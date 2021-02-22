import RealtimeDatabaseAdapter from 'emberfire/adapters/realtime-database';

export default RealtimeDatabaseAdapter.extend({
  enablePersistence: true,
  persistenceSettings: { synchronizeTabs: true }
});
