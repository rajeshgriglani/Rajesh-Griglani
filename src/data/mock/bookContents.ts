export interface BookContentsEntry {
  title: string;
  page: number;
  available?: boolean;
}

export interface BookContentsSection {
  part: string;
  entries: BookContentsEntry[];
}

export const BOOK_CONTENTS: BookContentsSection[] = [
  { part: 'Front Matter', entries: [{ title: 'Prologue: The Wallet', page: 9 }, { title: 'Preface', page: 11 }, { title: 'Introduction: The Long Game', page: 13 }] },
  { part: 'Part One · Roots', entries: [{ title: 'The Inheritance of Fire', page: 17, available: true }] },
  { part: 'Part Two · Partition, Family, and Identity', entries: [{ title: 'Sons of Partition', page: 25 }, { title: 'The Burning Road', page: 29 }, { title: 'The Sindhi Question', page: 35 }] },
  { part: 'Part Three · Learning Politics', entries: [{ title: 'The University and the Ideology', page: 41 }, { title: 'Teaching Congress to Congress', page: 45 }] },
  { part: 'Part Four · Congress and the Idea of India', entries: [{ title: 'The Founding Architecture', page: 53 }, { title: 'The Congress I Know', page: 57 }] },
  { part: 'Part Five · Gujarat and the Burning Years', entries: [{ title: 'Gujarat: The Laboratory and the Myth', page: 63 }, { title: 'The Worker Who Stayed', page: 69 }] },
  { part: 'Part Six · Media, Narratives, and Power', entries: [{ title: 'The Great Manufactured Collapse', page: 77 }, { title: 'The Media and the Mirror', page: 81 }, { title: 'The Digital Battlefield', page: 85 }] },
  { part: 'Part Seven · Rahul Gandhi and Bharat Jodo', entries: [{ title: 'The Misread Man', page: 93 }, { title: 'The Long Walk', page: 99 }, { title: 'Sonia Gandhi', page: 105 }, { title: 'Priyanka Gandhi Vadra', page: 109 }] },
  { part: 'Part Eight · Democracy at a Crossroads', entries: [{ title: 'What Welfare Looks Like', page: 115 }, { title: 'Dr Manmohan Singh', page: 119 }, { title: 'The Battle of Ideas', page: 123 }, { title: 'Democratic Institutions Under Stress', page: 125 }] },
  { part: 'Part Nine · The Future of Congress', entries: [{ title: 'From Forty-Four to the Future', page: 133 }, { title: 'What Must Be Done', page: 137 }, { title: 'The Mode of Resistance', page: 141 }] },
  { part: 'Part Ten · The India Yet to Be Built', entries: [{ title: 'Indira Gandhi and Rajiv Gandhi', page: 155 }, { title: 'Federalism and the Republic', page: 159 }, { title: 'The Youth, the Schools, and the India We Are Building', page: 163 }, { title: 'Social Justice and the Unfinished Constitution', page: 165 }, { title: 'The India of Many Faiths', page: 167 }, { title: 'The International Context', page: 169 }, { title: 'The Great Reckoning: 2029 and Beyond', page: 171 }] },
  { part: 'Closing Sections', entries: [{ title: 'Conclusion', page: 177 }, { title: 'Epilogue', page: 181 }, { title: 'A Letter to the Youth of India', page: 185 }, { title: 'Final Reflection', page: 191 }, { title: 'Acknowledgements', page: 195 }, { title: 'About the Author', page: 197 }] },
];