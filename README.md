# MongoDB End Term Practical Exam — Set B2

This folder contains runnable `mongosh` solutions for the scenarios included in the supplied PDF:

- Scenario 2.1 — Library Members
- Scenario 2.2 — Sales Report

The PDF introduction also refers to Scenarios 2.3 and 2.4, but their requirements and expected output are not present in the supplied three-page file, so no solutions for them are invented here.

## Requirements

- MongoDB Server running locally
- MongoDB Shell (`mongosh`) installed

Run each script with:

```sh
mongosh --file scenario-2.1-library.js
mongosh --file scenario-2.2-sales.js
```

Each script clears only its named collection before seeding it, so it can be run repeatedly. Scenario 2.1 also drops `library.members` at the end because that cleanup is explicitly required by the exam.

## Files

- `MongoDB_End_Term_2_Set_B2.pdf` — the supplied exam paper.
- `scenario-2.1-library.js` — embedded address and borrowed-book queries, update, count, and cleanup.
- `scenario-2.2-sales.js` — seeded orders and the requested aggregation reports.
