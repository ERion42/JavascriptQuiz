// No Javascript yet

// Pseudo Code
/*
    Define Variables

    Create QA Array

    Functions

    On Activation (click)
    What it does:
        Initialize:
            Hide Initial Button
            Set Timer ()
            Set Score (0)
            Set Completion Percentage (0)
            Set Round number (1)
        
        Round Functions:
            Randomize number (between 1 and questions.length)
            Check isUsed value for the random number, if True restart round function
            Load questionsArray[randomized number]
            Mark isUsed = True for that array entry
            Allow Button Clicks:
                Check button click against questionArray[correct answer]
                    if correct: +100 points
                    if incorrect: +0 points
                    
            Check Win Condition [round = questions.length] 
                if win=true: end game
                if win=false: round++

        round ++
            round+1
            Start round again
        
        End Game
            Enter Initials
            Store Initials and score

    */
