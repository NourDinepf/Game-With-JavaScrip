const game = ()=>{
    let pScore = 0;
    let cScore = 0;


    const  startGame =()=>
    {
        const playBtn = document.querySelector('.intro button');
        const intro = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=>{
            intro.classList.add('fadeOut');
            match.classList.add('fadeIn');

        });
        
    }
    startGame();

    const updateScore = ()=>{
        const playerScore = document.querySelector('.player p');
        const computerScore = document.querySelector('.computer p');
        playerScore.textContent = pScore;
        computerScore.textContent =  cScore;
    };

    const changeImage = ()=>{
        const btn = document.querySelectorAll('.option button');
        const playerHands = document.querySelector('.player-hand');
        const computerHands = document.querySelector('.computer-hand');
        const computerOptions = ['paper','rock', 'scissors'];
        btn.forEach(option =>{
            option.addEventListener('click', function(){
                const computerNumbers = Math.floor(Math.random()*3);
                const computerChoises = computerOptions[computerNumbers];
                compairhands(this.textContent, computerChoises);
                
                //update  images 
                playerHands.src = `./images/${this.textContent}.png`;
                computerHands.src = `./images/${computerChoises}.png`;
            });
            const compairhands = (playerChoies, computerChoises)=>
            {
                const winner = document.querySelector('.winner');
                if (playerChoies===computerChoises)
                {
                    winner.textContent =  "ta3adol hahahhaaha";
                    return;
        
                }
                //check rock
                if (playerChoies === 'rock')
                {
                    if(computerChoises==='scissors')
                    {
                        winner.textContent = 'player wins';
                        pScore++;
                        updateScore();

                        return;
                    }
                   
                    else{
                        winner.textContent = 'computer wins';
                        cScore++;
                        updateScore();
                        return;
                    }

                }
                //check paper
                if (playerChoies === 'paper')
                {
                    if(computerChoises==='scissors')
                    {
                        winner.textContent = 'computer wins';
                        pScore++;
                        updateScore();
                        return;
                    }
                   
                    else{
                        winner.textContent = 'player wins';
                        pScore++;
                        updateScore();
                        return;
                    }
                    
                }
                //check sicossrs
                if (playerChoies === 'scissors')
                {
                    if(computerChoises==='rock')
                    {
                        winner.textContent = 'computer wins';
                        cScore++;
                        updateScore();
                        return;
                    }
                   
                    else{
                        winner.textContent = 'player wins';
                        pScore++;
                        updateScore();
                        return;
                    }
                    
                }

            }


        });

        
        

    }
    changeImage();
   

}
game();