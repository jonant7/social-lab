import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | insight', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:insight');
    assert.ok(route);
  });
});
