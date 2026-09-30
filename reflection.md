# Questions

    1. What was the worst problem in the original implementation?
    2. Which refactoring produced the biggest improvement?
    3. What part of the exercise was most difficult?
    4. What mistake did you make and how did you correct it?
    5. Did any change break behaviour? How did you detect it?
    6. How would another developer benefit from your changes?
    7. If the system grew to 50 customer categories, what would you redesign?
    8. What clean-code habit will you carry into future projects?

## Answers

1. What was the worst problem in the original implementation?

   #### The worst problem of the original implementation was the duplicated logic.

2. Which refactoring produced the biggest improvement?

   #### The putting the duplicated logic in a single place, made the code more better to work with and update. And somehow only more structured and easily understandable and can scale well.

3. What part of the exercise was most difficult?
   #### For Me, knowing the logic to isolate and how to handle errors was the most difficult. I wanted to handle to every possible cause for error at once, and still cover every possible misbehaviour by error.
4. What mistake did you make and how did you correct it?
   #### I had made the mistake of putting the error correction into the process payment function. ALthough I also think I made an error in the functions whose only jobs are to display output, and to calculate discount.
5. Did any change break behaviour? How did you detect it?

   #### No. My changes did not break any behaviour.

6. How would another developer benefit from your changes?
   #### A developer who read My could, I'd expect that it'd be greatly easier to know what part of My code to edit or to change when an update is required.
7. If the system grew to 50 customer categories, what would you redesign?
   #### I'd definitely refactor the code to handle tiers dynamically instead of statically by adding the required function, and would pass the right parameter into the function.
8. What clean-code habit will you carry into future projects?
   #### Though this lesson took a bit of time to grasp, the major lesson I really got from it was the importance of writing clear, and clenaly strutured code, and also the habit of ensuring that funcitons are purely responsibly for one and only one thing only.
