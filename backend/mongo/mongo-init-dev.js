db.createUser({
  user: 'username-dev',
  pwd: 'password-dev',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database_test',
    },
  ],
});

db.createCollection('people');

db.people.insert({ name: 'Mika Häkkinen', number: '12-9820349' });
db.people.insert({ name: 'Risto Peltonen', number: '12-9820349' });