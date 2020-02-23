export interface DeprecationReplacement {
  name: string;
  version: string;
}

export const deprecationReplacements: Map<
  string,
  DeprecationReplacement
> = new Map([['jade', { name: 'pug', version: '2.0.0' }]]);
