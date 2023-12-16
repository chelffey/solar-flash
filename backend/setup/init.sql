--- Create a table for the database
CREATE TABLE flashcards
(
    card_id SERIAL NOT NULL,
    name text NOT NULL,
    definition text NOT NULL,
    PRIMARY KEY (card_id)
);

-- Seed data for flashcards table
INSERT INTO flashcards (card_id, name, definition) VALUES (1,  'きがつく', 'to notice');
INSERT INTO flashcards (card_id, name, definition) VALUES (2,  'つかまる', 'to be arrested or caught');
INSERT INTO flashcards (card_id, name, definition) VALUES (3, 'きがえる', 'to change clothes');
INSERT INTO flashcards (card_id, name, definition) VALUES (4,  'しらべる', 'to compare (X と Y を)');