// ─────────────────────────────────────────────────────────────
//  Quiz questions — Final Exam (exact content, no additions)
// ─────────────────────────────────────────────────────────────

export const questions = [
  {
    id: 1,
    category: "Expert Systems",
    question: "Define what an expert system is and give five different applications for it.",
    answer: `Expert systems are computer applications that use non-algorithmic expertise to solve specific problems.

**Application of Expert systems**

Used in: diagnostic applications, playing chess, financial planning, computer configuration, and real-time systems.`,
  },
  {
    id: 2,
    category: "Expert Systems",
    question: "Draw a functional diagram of an expert system explaining its main components.",
    answer: `**Basic Function of an Expert system**

Consists of: Knowledge base (stores expert knowledge) and Inference engine (draws conclusions).`,
  },
  {
    id: 3,
    category: "Expert Systems",
    question: "Define the main persons interacting with an expert system. Give a brief definition of each.",
    answer: `- **Domain expert** – expert who solves the problem.
- **Knowledge engineer** – converts expert knowledge into the system.
- **User** – uses the system to get advice.
- **System engineer** – builds the system and interface.`,
  },
  {
    id: 4,
    category: "Expert Systems",
    question: "Discuss briefly the advantages and disadvantages of the expert system.",
    answer: `**Advantages:**
- Provide expert-level solutions.
- Work quickly and consistently.
- Can be used in many applications that require human expertise.

**Disadvantages:**
- Increased initial building cost.`,
  },
  {
    id: 5,
    category: "Expert Systems",
    question: "Define the term epistemology and explain its importance to the expert system.",
    answer: `- The study of knowledge.
- Concerned with nature, structure and origins of knowledge.
- Knowledge is of primary importance to expert systems.`,
  },
  {
    id: 6,
    category: "Expert Systems",
    question: "Discuss the difference between posteriori and priori knowledge.",
    answer: `**A PRIORI knowledge**
- Known without experience (by thinking).
- Always true and certain.

**A POSTERIORI knowledge**
- Learned from experience.
- Not always reliable (depends on person).`,
  },
  {
    id: 7,
    category: "Expert Systems",
    question: "Draw the pyramid of knowledge and discuss its basic terms.",
    answer: `Data → Information → Knowledge → Wisdom

*(Draw the pyramid with four levels from bottom to top: Data, Information, Knowledge, Wisdom)*`,
  },
  {
    id: 8,
    category: "Expert Systems",
    question: "Define the main elements of an inference tree. Draw a binary three levels tree.",
    answer: `**Trees**
- Hierarchical structure of nodes and branches.
- Nodes store information, branches connect nodes.
- Top node is root, bottom nodes are leaves.

**Binary trees**
- Each node has one parent (except root).
- Each node has at most two children.`,
  },
  {
    id: 9,
    category: "Semantic Networks",
    question: "Discuss drawings on different types of graphs (cyclic, Acyclic, connected, nonconnected).",
    answer: `1. **A cycle (circuit graph)** – Graph that have the same starting and end point.
2. **Acyclic graph** – Graph that has no cycles.
3. **Connected graph** – Have links to all nodes.
4. **Diagraph** – Graphs with directed arrows.
5. **Lattice**`,
  },
  {
    id: 10,
    category: "Semantic Networks",
    question: "Discuss the main components of the semantic network.",
    answer: `A semantic net is a labelled, directed graph called also a propositional net or associative net.

A proposition is a statement that is either true or false.

It consists of:
- **Nodes:** represent objects, concepts, or situations.
- **Arcs:** show relations between nodes.`,
  },
  {
    id: 11,
    category: "Semantic Networks",
    question: "Discuss the main components of semantic net. Explain the main difference between semantic nets and a general net using an example.",
    answer: `A semantic net is a labelled, directed graph called also a propositional net or associative net.

A proposition is a statement that is either true or false.

It consists of:
- **Nodes:** represent objects, concepts, or situations.
- **Arcs:** show relations between nodes.`,
  },
  {
    id: 12,
    category: "Prolog",
    question: "Define predecessor rule using recursion.",
    answer: `\`\`\`prolog
predecessor(X, Y, [X,Y|_]).
predecessor(X, Y, [_|T]) :-
    predecessor(X, Y, T).
\`\`\``,
  },
  {
    id: 13,
    category: "Prolog",
    question: "Define member rules using two different methods.",
    answer: `**Method 1:**
\`\`\`prolog
member(X, [X|_]).
member(X, [_|T]) :-
    member(X, T).
\`\`\`

**Method 2:**
\`\`\`prolog
member(X, List) :-
    append(_, [X|_], List).
\`\`\``,
  },
  {
    id: 14,
    category: "Prolog",
    question: "Define an insert rule for lists using delete rule.",
    answer: `**Insert an item into list using delete rule**

\`\`\`prolog
insert(X, List, BiggerList) :- del(X, BiggerList, List).
\`\`\``,
  },
  {
    id: 15,
    category: "Logic",
    question: "Discuss the different connectives for propositional logic.",
    answer: `- **Negation (¬):** not A (opposite of A).
- **Conjunction (∧):** A and B (true if both true).
- **Disjunction (∨):** A or B (true if one or both true).
- **Conditional (→):** if A then B (false only if A true and B false).
- **Biconditional (↔):** A iff B (true if both same).`,
  },
  {
    id: 16,
    category: "Prolog",
    question: "Define a delete rule for list.",
    answer: `**Delete an item from list definition**

\`\`\`prolog
del(X, [X|Tail], Tail).
del(X, [Y|Tail], [Y|Tail1]) :-
    del(X, Tail, Tail1).
\`\`\`

**Delete elements from list:**
\`\`\`prolog
del(a, [a,b,a,a], L).
L = [b,a,a];
L = [a,b,a];
L = [a,b,a];
\`\`\``,
  },
  {
    id: 17,
    category: "Prolog",
    question: "Explain the read and write rules functionality in Prolog. Give examples.",
    answer: `**Prolog read rule:**

read/1 reads a term from the user and stores it as a Prolog term.

\`\`\`prolog
main :-
    write('Enter a Prolog term: '),
    read(Term),
    write('You entered: '),
    write(Term),
    nl.
\`\`\``,
  },
  {
    id: 18,
    category: "Prolog",
    question: "Define concatenation rule for two lists.",
    answer: `\`\`\`prolog
?- conc(L1, L2, [a,b,c]).
L1 = []
L2 = [a,b,c];
L1 = [a]
L2 = [b,c];
L1 = [a,b]
L2 = [c];
L1 = [a,b,c]
L2 = [];
No
\`\`\``,
  },
  {
    id: 19,
    category: "Expert Systems",
    question: "Explain uncertainty and their applications in Expert systems.",
    answer: `**Uncertainty in Expert systems**

- Uncertainty is lack of complete information.
- Handled using probability, fuzzy logic, etc.
- Applications: medical diagnosis, decision making, predictions.`,
  },
  {
    id: 20,
    category: "Expert Systems",
    question: "Draw and explain a figure for the development of an expert system.",
    answer: `*(Draw the development lifecycle diagram)*

Steps: Problem identification → Knowledge acquisition → Knowledge representation → System implementation → Testing and evaluation.`,
  },
  {
    id: 21,
    category: "Prolog",
    question: "Define two list rules to evenlength and oddlength that gives true or false depending on the list size.",
    answer: `\`\`\`prolog
evenlength([]).
evenlength([_|Xs]) :-
    oddlength(Xs).

oddlength([_|Xs]) :-
    evenlength(Xs).
\`\`\``,
  },
  {
    id: 22,
    category: "Expert Systems",
    question: "Discuss the main idea of your expert systems project and draw a semantic tree for the knowledge base. State your added rules to the project.",
    answer: `\`\`\`prolog
disease(covid19).
symptom(covid19, fever).
symptom(covid19, cough).
symptom(covid19, tiredness).
advice(covid19, 'Rest and drink fluids').

match_count(Disease, UserSymptoms, Count) :-
    findall(S,
        (symptom(Disease, S), member(S, UserSymptoms)),
        Matches),
    length(Matches, Count).

diagnosis(Disease, UserSymptoms) :-
    match_count(Disease, UserSymptoms, Match),
    Match >= 2,
    score(Disease, UserSymptoms, Score),
    Score >= 30.
\`\`\``,
  },
];
