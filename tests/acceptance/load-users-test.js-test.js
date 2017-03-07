import { test } from 'qunit';
import moduleForAcceptance from 'ember-sample-project/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | load users test.js');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});


test('test listing', function(assert) {
  visit('/');

  andThen(function() {
    // this only works when it can get access to that reomote API and assuming the data returned is not changed
    assert.equal(find('#users-table tr').length, 10);
  });
});


test('test clicking', function(assert) {
  visit('/');

  andThen(function() {
    // click the first link
    click(find('a')[0]);
  });

  andThen(function () {
    // should be on the user page with an id of 1
    assert.equal(currentURL(), '/user/1');
  });
});

test('test bookmark', function(assert) {
  visit('/user/1');

  andThen(function() {
    // click the first link
    assert.equal(find('#users-table tr').length, 1);
  });
});
