const str = "word counter is a tool that helps you count the number of words and characters in a document. The online tool also works as a sentence counter and calculates the number of sentences, phrases, and paragraphs in a copy as well. It also works as a character counter tool giving you the total number of characters, including punctuation marks, numbers, symbols, etc. So doing it helps you stay within the character limit of your content. Character count is different from letter count, and one of its most important use cases is for SEO purposes. No matter if you're a digital marketer or a social media manager, it comes in handy when you're writing a page title, a meta description, or any social media post."
let wordfrequancy= new Map();
let str1=str.replace(/[^a-zA-Z ]/g, "")
let words = str1.split(" ")
console.log(words)
for(let ele of words){

    if(wordfrequancy.has(ele)){
        wordfrequancy.set(ele,wordfrequancy.get(ele)+1)
    }else{
        wordfrequancy.set(ele,1)
    }
}
console.log(wordfrequancy)
