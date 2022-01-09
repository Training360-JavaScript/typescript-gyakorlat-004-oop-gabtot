// Importáld be a HumanHero és TransformerHero osztályokat.
import { TransformerHero } from './transformer';
import { HumanHero } from './hero';

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    new HumanHero( 1, 'name1', 'male', 30, 50, 'pic1' ),
    new HumanHero( 2, 'name2', 'female', 30, 50 ),
    new HumanHero( 3, 'name3', 'female', 30, 50, 'pic3' )
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    new TransformerHero( 10, 'name10', 2, 4, 'Wu-Tang' ),
    new TransformerHero( 20, 'name20', 2, 4, 'Wu-Tang', 'pic1'),
    new TransformerHero( 30, 'name30', 2, 4, 'Wu-Tang' )
];
