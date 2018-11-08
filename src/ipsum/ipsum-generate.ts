import { IIpsumContent, ipsumContentArray } from './ipsum-content';
import { shuffle, indexBy, reduce } from 'lodash/fp';

export const ipsumContentDict = indexBy<IIpsumContent>((content) => content.tag.id, ipsumContentArray);

/**
 * @param tagID
 * @param length
 */
export function generate(tagID: string, length: number = 3) {
  const content = ipsumContentDict[tagID];
  const sentences = shuffle(content.sentences);
  sentences.length = length;
  return joinSentences(sentences);
}

const puncDict = indexBy<string>((x) => x, ['.', ',', '...', '!', '?', ':', ';']);
const isPunctuation = (char: string) => !!puncDict[char];
const joinSentences = reduce<string, string>((text, sentence) => {
  return isPunctuation(sentence.charAt(sentence.length - 1)) ? 
    `${text} ${sentence}` :
    `${text} ${sentence}.`;
}, '');
