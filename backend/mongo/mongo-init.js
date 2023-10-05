db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
});

db.createCollection('people');

db.people.insert({ name: 'Mika Häkkinen', number: '12-9820349' });
db.people.insert({ name: 'Risto Peltonen', number: '12-9820349' });