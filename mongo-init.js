db.createUser({
  user: 'alteza',
  pwd: 'testww',
  roles: [
    {
      role: 'readWrite',
      db: 'alteza-bank-db',
    },
  ],
});

db.accounts.insertMany([
  {
    lastname: 'Wendelaar',
    initials: 'M',
    email: 'M.Wendelaar@alteza.nl',
    street: 'Altezalaan 1',
    city: 'Utrecht',
    phone: '0612345678',
    balance: '10000',
  },
  {
    lastname: 'Kessels',
    initials: 'B',
    email: 'B.Kessels@alteza.nl',
    street: 'Altezastraat 1',
    city: 'Malden',
    phone: '0612345678',
    balance: '10000',
  },
]);
