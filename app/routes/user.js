import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model (params) {
      return this.get('ajax').request(`http://jsonplaceholder.typicode.com/users/${params.user_id}`);
  }
});
