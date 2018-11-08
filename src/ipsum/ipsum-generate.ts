import { IIpsumContent, ipsumContentArray } from './ipsum-content';
import { shuffle, indexBy, reduce } from 'lodash/fp';

export const ipsumContentDict = indexBy<IIpsumContent>((content) => content.tag.id)(ipsumContentArray);

/**
 * TODO: do a better job at joining sentences
 * @param tagID
 * @param length
 */
export function generate(tagID: string, length: number = 3) {
  const content = ipsumContentDict[tagID];
  return shuffle(content.sentences)
    .slice(0, length)
    .join('. ') + '.';
}

// const joinSentences = reduce(() => {

// });
