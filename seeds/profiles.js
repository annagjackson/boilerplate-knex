exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({user_id: 99901, image: 'http://dl0.creation.com/articles/p100/c10090/aardvark-side.jpg'}),
        knex('profiles').insert({user_id: 99902, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/BABOON-e.JPG/300px-BABOON-e.JPG'}),
        knex('profiles').insert({user_id: 99903, image: 'http://www.dfwk.ru/images/thumb/0/02/Capybara.jpg/300px-Capybara.jpg'}),
        knex('profiles').insert({user_id: 99904, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Rubber_Duck_(8374802487).jpg/300px-Rubber_Duck_(8374802487).jpg'}),
        knex('profiles').insert({user_id: 99905, image: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/120221120954-african-elephant-story-top.jpg'}),
        knex('profiles').insert({user_id: 99906, image: 'http://www.scienceimage.csiro.au/images/embed/300_0_DA3675.jpg'}),
        knex('profiles').insert({user_id: 99907, image: 'https://fbresearch.org/wp-content/uploads/2015/02/iStock_000019773283_Large.jpg'}),
        knex('profiles').insert({user_id: 99908, image: ''}),
        knex('profiles').insert({user_id: 99909, image: ''}),
        knex('profiles').insert({user_id: 99910, image: ''}),
        knex('profiles').insert({user_id: 99911, image: ''}),
        knex('profiles').insert({user_id: 99912, image: ''}),
        knex('profiles').insert({user_id: 99913, image: ''}),
        knex('profiles').insert({user_id: 99914, image: ''}),
        knex('profiles').insert({user_id: 99915, image: ''}),
        knex('profiles').insert({user_id: 99916, image: ''}),
        knex('profiles').insert({user_id: 99917, image: ''}),
        knex('profiles').insert({user_id: 99918, image: ''}),
        knex('profiles').insert({user_id: 99919, image: ''}),
        knex('profiles').insert({user_id: 99920, image: ''}),
        knex('profiles').insert({user_id: 99921, image: ''}),
        knex('profiles').insert({user_id: 99922, image: ''}),
        knex('profiles').insert({user_id: 99923, image: ''}),
        knex('profiles').insert({user_id: 99924, image: ''}),
        knex('profiles').insert({user_id: 99925, image: ''}),
        knex('profiles').insert({user_id: 99926, image: ''})
      ]);
    });
};
