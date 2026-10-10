# Building my AI engineering portfolio with AI

Ardi Riyadi · 10 October 2026

My goal is to improve my AI engineering skills and understand how far I can use AI to build something useful. This portfolio is one step toward that goal.

It now contains five cases, including Internship Progress Copilot, PharmaCheck AI, and The Polite Scraper. Each links the problem and implementation to evidence. The Evidence Finder lets a visitor search those claims, read their limits, and open the source.

AI did much of the repository inspection, implementation, testing, and deployment work in this collaboration. I supplied facts and design choices for the original cases, reviewed the wording, and read all five cases aloud. When I could not remember my individual choices for the scraper, we used its recorded evidence and stated the AI assistance.

The concrete win is a published portfolio where a reviewer can inspect the work. The scraper's cached rerun contains 60 valid records and zero HTTP requests. Its separate additional-URL failure trial retained those records after a real HTTP 404.

One real break was a Node 24 build assertion on Windows. A Node 22 build succeeded. Another limitation remains visible: PharmaCheck's local OCR matched three fields on one hosted sample but misread 50 mg as 30 mg. Passing tests and a working demo do not establish general accuracy.

I am keeping the address free because my domain budget is zero. My next learning step is to explain, modify, and debug a small part of these projects myself. Producing more code with AI is useful; my own understanding and ability to judge the result still need evidence.

[Live portfolio](https://ardiradi.github.io/) · [Current release](https://github.com/ardiradi/ardiradi.github.io/commit/4fec946d717ce2140e419b6ff0e3e400da1b3e15)
