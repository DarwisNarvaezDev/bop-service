import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationDb11722982987571 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE pokemon (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    attack INT,
    defense INT,
    hp INT,
    speed INT,
    type VARCHAR(50),
    imageUrl VARCHAR(255)
);   
        `);
        await queryRunner.query(`
                INSERT INTO pokemon (id, name, attack, defense, hp, speed, type, imageUrl) VALUES
(1, 'Pikachu', 4, 3, 3, 6, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png'),
(2, 'Charmander', 4, 3, 3, 4, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png'),
(3, 'Squirtle', 3, 4, 3, 3, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png'),
(4, 'Bulbasur', 4, 3, 3, 3, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png'),
(5, 'Eevee', 4, 3, 4, 5, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE pokemon;")
    }

}
