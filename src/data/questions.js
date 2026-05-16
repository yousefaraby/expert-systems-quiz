// ─────────────────────────────────────────────────────────────
//  Quiz questions — NLP Subject
// ─────────────────────────────────────────────────────────────

export const questions = [
  {
    id: 1,
    category: "NLP",
    question: "What is the main goal of the field of Natural Language Processing (NLP)?",
    answer: `To make computers perform useful tasks with human language (like human-machine communication, or processing text/speech).`,
  },
  {
    id: 2,
    category: "NLP",
    question: "What are the three main components of a modern conversational agent?",
    answer: `• Automatic speech recognition
• Natural language understanding
• Language output`,
  },
  {
    id: 3,
    category: "NLP",
    question: "List the five levels of linguistic analysis in NLP.",
    answer: `    Morphology
Syntax
Semantics
Pragmatics
Discourse`,
  },
  {
    id: 4,
    category: "NLP",
    question: "What is the difference between morphology and syntax?",
    answer: `• Morphology: Focuses on the word (how words are built from smaller parts like stems and affixes).
• Syntax: Focuses on the sentence (how words are put together to form correct sentences).`,
  },
  {
    id: 5,
    category: "NLP",
    question: "What is ambiguity in the context of NLP?",
    answer: `When the same input has more than one possible interpretation (multiple linguistic structures).`,
  },
  {
    id: 6,
    category: "NLP",
    question: "Define the following terms: Token, Sentence, Corpus.",
    answer: `• Token: A single unit (a word, number, or punctuation mark).
• Sentence: An ordered sequence of tokens.
• Corpus: A large body of text (contains many sentences).`,
  },
  {
    id: 7,
    category: "Regular Expressions",
    question: "What does the caret (^) do when used inside brackets in a regular expression?",
    answer: `It negates the pattern (matches any character except the ones specified).`,
  },
  {
    id: 8,
    category: "Regular Expressions",
    question: "What is the difference between Kleene * and Kleene +?",
    answer: `• Kleene *: "Zero or more occurrences".
• Kleene +: "One or more occurrences".`,
  },
  {
    id: 9,
    category: "Regular Expressions",
    question: "What does the period (.) represent in a regular expression?",
    answer: `It is a wildcard that matches any single character (except a carriage return).`,
  },
  {
    id: 10,
    category: "Regular Expressions",
    question: `How would you write a regular expression to match both "gray" and "grey"?`,
    answer: `/gr(a|e)y/ or /gray|grey/.`,
  },
  {
    id: 11,
    category: "Regular Expressions",
    question: `What do the following shorthand character classes represent? \\d, \\D, \\w, \\s`,
    answer: `
    • \\d : Any digit (0–9).
• \\D : Any non-digit.
• \\w : Any alphanumeric character or underscore.
• \\s : Any whitespace character (space, tab, newline, etc.).`,
  },
  {
    id: 12,
    category: "Automata",
    question: "What are the three types of automata mentioned and what languages do they define?",
    answer: `• Finite-state automata: define regular languages.
• Pushdown automata: define context-free languages.
• Turing machines: define recursively enumerable languages.`,
  },
  {
    id: 13,
    category: "Automata",
    question: "What is a regular language?",
    answer: `A formal language that can be expressed using a regular expression. It is also a subset of context-free languages.`,
  },
  {
    id: 14,
    category: "Automata",
    question: "What is the relationship between regular expressions and finite-state automata?",
    answer: `They are equivalent: any regular expression can be implemented as a finite-state automaton, and vice versa. Both are used to describe regular languages.`,
  },
  {
    id: 15,
    category: "Automata",
    question: "What are the five parameters that define a finite automaton?",
    answer: `• Q: A finite set of states.
• Σ (Sigma): A finite input alphabet of symbols.
• q₀: The start state.
• F: The set of final states.
• δ (Delta): The transition function.`,
  },
  {
    id: 16,
    category: "Automata",
    question: "What is the difference between a deterministic FSA (DFSA) and a non-deterministic FSA (NFSA)?",
    answer: `• DFSA: Has exactly one transition for each state and input symbol.
• NFSA: Can have multiple possible transitions for the same state and input symbol (including ε-transitions).`,
  },
  {
    id: 17,
    category: "Automata",
    question: "What are ε-transitions in an NFSA?",
    answer: `Transitions (arcs) that have no symbols on them. They allow the automaton to move to another state without consuming any input.`,
  },
  {
    id: 18,
    category: "Morphology",
    question: `Problem 2
Based on the description of a Morphological noun parser, the machine recognizes specific markers like +SG (singular) and +PL (plural) to correspond with morphemes.
For the English word "cats," the lexical level might be represented as cat +N +PL.
1.Provide the correct lexical level representation for the word "foxes."
2.Provide the correct lexical level representation for the word "dog."`,
    answer: `1.	Lexical representation for "foxes":
fox +N +PL
(Explanation: The root is "fox," it is a noun (+N), and it is plural (+PL).)
2.	Lexical representation for "dog":
dog +N +SG
(Explanation: The root is "dog," it is a noun, and it is singular. The singular feature +SG is often explicitly represented in parsers even if it results in a null morpheme.)`,
  },
  {
    id: 19,
    category: "Morphology",
    question: `Problem 2
There are three-tiered system: Lexical, Intermediate, and Surface. The intermediate level uses symbols like ^ (morpheme boundary) and # (word boundary) before spelling changes are applied.
The lexical form for "wishes" is wish +N +PL. Using the example of fox +N +PL as a guide, write the correct string for:
1.The Intermediate Level (inserting ^ and #).
2.The Surface Level (after the E-insertion rule has been applied).`,
    answer: `1.	Intermediate Level:
wish ^ s #
(Explanation: The morpheme boundary symbol ^ is placed between the root "wish" and the plural morpheme "s," and the word boundary # is placed at the end.)
2.	Surface Level:
wishes #
(Explanation: Because "wish" ends with a sibilant sound ("sh"), the E-insertion rule applies, changing wish^s# to wishes#.)`,
  },
  {
    id: 20,
    category: "Morphology",
    question: `Problem 3
According to E-insertion rule, which adds an "e" to the spelling when transitioning from the intermediate form (e.g., fox^s#) to the surface form (e.g., foxes#).
Apply this rule to the following intermediate forms. Write the resulting surface form.
1.watch^s#
2.church^s#
3.boy^s# (Note: Does this word require an 'e' to be inserted for a correct plural? Explain why or why not in one sentence.)`,
    answer: `1.	 watch^s# → watches#
2.	church^s# → churches#
3.	boy^s# → boys#
o	Explanation: Because "boy" ends with a vowel, not a sibilant.`,
  },
  {
    id: 21,
    category: "Morphology",
    question: `Question 4
Finite-State Transducers (FSTs) use rules to map between levels. The E-insertion rule can be thought of as: Insert an e between a sibilant consonant and an s.
Using the notation (where ^ and # are present at the intermediate level), complete the following rewrite rule that an FST might follow to get from the intermediate to the surface level. Assume X represents a sibilant sound (like s, z, sh, ch, x).
X ^ s # → _________________`,
    answer: `  X ^ s # → X e s #
(Explanation: The rule states that when a sibilant (X) is followed by a morpheme boundary and an "s" at the end of a word, the transducer should rewrite that sequence by inserting an "e" before the "s.")`,
  },
  {
    id: 22,
    category: "Morphology",
    question: `Question 5
A linguist runs a morphological parser on a large set of English words. The parser handles the word "fox" correctly (fox +N +PL → foxes). However, when given the word "book" (book +N +PL), the parser incorrectly outputs bookes.
Based on the rules (specifically the E-insertion Rule and the mention of the "other" symbol), why did the parser fail for the word "book"? What assumption did the machine make that was incorrect for this specific word?`,
    answer: `The parser failed because the E-insertion rule was over-applied.
The machine assumed that all nouns require the "e" insertion before adding the plural "s." Based on the lecture's mention of the "other" symbol, a correct parser needs to distinguish between:
1.	Sibilant endings (like x in fox, sh in wish, ch in church) that trigger the rule.
2.	"Other" endings (like the k in book) that are not sibilants and should simply concatenate the "s" without inserting an "e."
The parser lacked the condition to check the final sound of the root; it applied the spelling change rule indiscriminately to every word.`,
  },
  {
    id: 23,
    category: "N-grams",
    question: `Question 4: 
For the given assumption: 
"P(lizard | the other day I was walking along and saw a) = P(lizard | a)" 
a)	What is this assumption called in n-gram modeling? 
b)	 For a bigram model, what is the length of the history that is retained? 
c)	 Give one advantage and one disadvantage of this assumption.`,
    answer: `a)This is the Markov assumption (specifically, the first-order Markov assumption for bigrams).

 b) For a bigram model, only the previous word (history length = 1) is retained.

c)Advantage: Drastically reduces the number of parameters and makes estimation feasible from limited data
Disadvantage: Loses long-range dependencies (e.g., syntactic or semantic relationships beyond the previous word).`,
  },
  {
    id: 24,
    category: "N-grams",
    question: `Question 8 : Short Answer Questions 
a)	Define a language model in your own words. 
b)	b) What is the chain rule used for in language modeling? 
c)	c) How would you estimate P(water | its) using a corpus?`,
    answer: `a) A language model predicts the probability of word sequences and the next word.
b) The chain rule splits sentence probability into conditional probabilities.
c) P(water | its) = count(its water) / count(its)
Count "its water" and divide by count(its).`,
  },
  {
    id: 25,
    category: "N-grams",
    question: `Question 7: 
Assume the following: 
•	P(I want to eat British food) = 0.000080 
•	P(I want to eat Chinese food) = 0.00015 
a) Which sentence has a higher probability according to the model? 
b) Based on the BERP fragments in Slide 11 and 12, which specific bigram probabilities cause the difference? 
c) What does this suggest about the model's "knowledge" of cuisine preferences?`,
    answer: `a) "I want to eat Chinese food" has the higher probability (0.00015 > 0.000080). 
b) Because P(Chinese | eat) is higher than P(British | eat).
 c) The model depends on training data frequency, not real-world knowledge`,
  },
  {
    id: 26,
    category: "N-grams",
    question: `Question 6: 
Assume P(food | to) = 0. 
a)	Explain why this probability is zero in the given BERP table. 
b)	 What problem does this illustrate in simple n-gram models? 
c)	 Name one technique to address this problem.`,
    answer: `a) P(food | to) = 0 because "to food" did not occur in the training data.
b) This shows the data sparsity problem in n-gram models.
c) It can be solved using smoothing, such as Laplace smoothing.`,
  },
  {
    id: 27,
    category: "Morphology",
    question: `Question 4: What are the two main levels of representation in two-level morphology, and what do they represent?`,
    answer: `• Lexical Level: The stem + morphological info (e.g., cat +N +PL).
• Surface Level: The actual final spelling (e.g., cats).`,
  },
  {
    id: 28,
    category: "Morphology",
    question: `Question 5: What is the purpose of morphological parsing ?`,
    answer: `To map between the surface level (actual spelling) and the lexical level (stem + info).`,
  },
  {
    id: 29,
    category: "Morphology",
    question: `Question 6: In the context of two-level morphology transitions, explain the meaning of the notation c:c.`,
    answer: `The symbol is the same on both levels (read 'c', write 'c').`,
  },
  {
    id: 30,
    category: "Morphology",
    question: `Question 7: Explain the meaning of the notation +PL:s in the context of a transition in a two-level morphological model.`,
    answer: `Lexical tag +PL becomes the letter s on the surface level.`,
  },
  {
    id: 31,
    category: "Morphology",
    question: `Question 8: What is the significance of the epsilon ( ) symbol in a transition like N: ?`,
    answer: `The epsilon represents an empty string (it means the lexical tag becomes nothing on the surface level).`,
  },
];
