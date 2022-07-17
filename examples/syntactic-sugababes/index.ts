/* eslint-disable @typescript-eslint/no-unused-vars */
const members2 = {
  Keisha: 'Keisha',
  Mutya: 'Mutya',
  Siobhán: 'Siobhán',
  Heidi: 'Heidi',
  Amelle: 'Amelle',
  Jade: 'Jade',
} as const;
const members = ['Keisha', 'Mutya', 'Siobhán', 'Heidi', 'Amelle', 'Jade'] as const;
type Members = typeof members[number];
// type Members2 = keyof typeof members2;

// Initial
type LineUp1998 = Extract<Members, 'Keisha' | 'Mutya' | 'Siobhán'>; // no intellisense
// or
type LineUp1998_2 = Exclude<Members, 'Heidi' | 'Amelle' | 'Jade'>; // no intellisense
// or
type LineUp1998_3 = keyof Pick<typeof members2, 'Keisha' | 'Mutya' | 'Siobhán'>;
// or
type LineUp1998_4 = keyof Omit<typeof members2, 'Heidi' | 'Amelle' | 'Jade'>;

const members1998: ReadonlyArray<LineUp1998> = ['Keisha', 'Mutya', 'Siobhán'];

// Siobhán left / Heidi joined
type LineUp2001 = Exclude<LineUp1998, 'Siobhán'> | 'Heidi';

const members2001: ReadonlyArray<LineUp2001> = ['Keisha', 'Mutya', 'Heidi'];

// Mutya left / Amelle joined
type LineUp2005 = Exclude<LineUp2001, 'Mutya'> | 'Amelle';

const members2005: ReadonlyArray<LineUp2005> = ['Keisha', 'Heidi', 'Amelle'];

// Keisha left/ Jade joined
type LineUp2009 = Exclude<LineUp2005, 'Keisha'> | 'Jade';

const members2009: ReadonlyArray<LineUp2009> = ['Heidi', 'Amelle', 'Jade'];

// Heidi, Amelle, Amelle left / Keisha, Mutya, "Siobhán joined
// Exclude<LineUp2009, LineUp2009> === never
type LineUp2011 = Exclude<LineUp2009, LineUp2009> | LineUp1998;
// or
type LineUp2011_2 = Exclude<LineUp2009, 'Heidi' | 'Amelle' | 'Amelle'> | LineUp1998;

const members2011: ReadonlyArray<LineUp2011> = ['Keisha', 'Mutya', 'Siobhán'];

type remainingOriginalMembers2001 = LineUp1998 & LineUp2001;
type remainingOriginalMembers2005 = LineUp1998 & LineUp2005;
type remainingOriginalMembers2009 = LineUp1998 & LineUp2009;
type remainingOriginalMembers2011 = LineUp1998 & LineUp2011;
