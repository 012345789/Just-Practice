1. make a list of all n words every time a new letter is said. (how?, problem of efficieny: n^n)
2. filter by words that only allow first player to win. (even # of letters)
3. only 
// 4. at any point, use recursion to find out how many "future" words will have odd vs even
    

Qs: when would a CPU "think" it will win?
if the target word(s) has an odd amount of letters
    ---> if words.viable.current.length%2 === 1
            word = 
            

vs when it will lose?
if the word has an even amount of letters
    ---> if word


we want the computer to always think it will lose. then we can predict its next move


examples:

naan - does not work. CPU will not spell the first a
near/neap - 
nite - 
nock - 

establishments:
CPU will not spell n-a-, player will say n-a-a, forcing CPU naan
given a, human player wins with a (naan)
given e, human player wins with k (nekton)
given i, huamn player wins with x (nixie -> nixing)
given o, human player wins with e (noesis or noetic)
given u, human player wins with a (nuance)
given y, human player wins with c (nyctalopia)


//CPU will not spell n-e-, player will say n-e-a, forcing neap/near/neat/
// contradiction: neanderthal

// CPU will not spell n-i-, player will say n-i-d, nidal
// n-o-