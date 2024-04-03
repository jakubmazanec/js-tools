// import {type ClassValue, clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

import {type ClassName} from './ClassName.js';

// TODO: is the merging done correctly? write some tests
export function cx(...inputs: ClassName[] /*ClassValue[]*/) {
  // return twMerge(clsx(inputs));
  return twMerge(...inputs);
}
