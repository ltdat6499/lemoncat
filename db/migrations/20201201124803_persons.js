exports.up = async (knex) => {
  await knex.raw(`
    CREATE TABLE persons 
    (
      id BIGINT NOT NULL PRIMARY KEY DEFAULT lemoncat.next_id(),
      name TEXT,
      birth DATE,
      born_in TEXT,
      summary TEXT,
      images TEXT[],
      slug TEXT,
      data JSON,
      created_at timestamptz DEFAULT now(),
      updated_at timestamptz DEFAULT now()
    )
  `);
};

exports.down = async (knex) => {
  await knex.raw(`
    DROP TABLE persons
  `);
};
