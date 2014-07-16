# Markup.pcjs

Markup.pcjs stands for "Markup in JavaScript using Parser Combinator".

I came up with the parser combinator approach when reading [Parsing Expression Grammar](http://pdos.csail.mit.edu/papers/parsing:popl04.pdf). I was tring to write a Markdown parser. Because I could not overcome the problem of creating self-calling component, namely recursion, I had to abandon project.

The problem is like this:

```JavaScript
// TemplType <- PrimType (LANGLE TemplType RANGLE)?
var TemplType = sequence(PrimType, optional(sequence(LANGLE, TemplType, RANGLE)));
```

How could I pass an undefined function (aka 'TemplType') to a combinator in order to generate this function?

Now, I want to restart this game __for fun__, with a new idea of implementing recursion (in recursion.js).

Before I finish it or decide to give up, I don't want to reference any parser tutorials/books. So wrong terminologys may overwhelm this project ^_^.
