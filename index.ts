import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

// only output distinct values, based on the last emitted value
const source$ = from([
  { name: 'Brian'},
  { name: 'Joe'},
  { name: 'Joe'},
  { name: 'Sue'}
]);

source$
  // custom compare based on name
  .pipe(
    distinctUntilChanged((prev, curr) => prev.name === curr.name))
  // output: { name: 'Brian }, { name: 'Joe' }, { name: 'Sue' }
  .subscribe(console.log);