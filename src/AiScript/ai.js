intent('What does this app do?', 'What can I do here?', 
      reply('This is a news project.'));

const API_KEY = 'ef371e87d9564f669ff3ed5a0b014504';
let savedArticles = [];

// News by Source
intent('(Provide|Fetch|Get|Show|Share) (with me | me) the (latest|recent) news.', (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    
    api.axios.get(NEWS_API_URL)
    .then((response) => {
        const { data, status } = response;

        if (status !== 200) {
            console.error('Error:', status);
            p.play('Sorry, there was an error fetching the news. Please try again later.');
            return;
        }

        try {
            const { articles } = data;

            if (!articles || !articles.length) {
                p.play('Sorry, no articles were found for this source.');
                return;
            }

            savedArticles = articles;

            p.play({ command: 'news', articles });
            p.play('Here are the (latest|recent) news.');

            p.play('Would you like me to read the headlines?');
            p.then(confirmation);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            p.play('Sorry, there was an error processing the news data. Please try again later.');
        }
    })
    .catch((error) => {
        console.error('Axios request error:', error);
        p.play('Sorry, there was an error fetching the news. Please try again later.');
    });
})

// News by Source
intent('Give me the news from $(source* (.*))', (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;
    
    if(p.source.value) {
        NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(" ").join('-')}`
    }
    
//     console.error("p.source.value", p.source.value)
//     console.error("NEWS_API_URL", NEWS_API_URL)
    
    api.axios.get(NEWS_API_URL)
    .then((response) => {
        const { data, status } = response;

        if (status !== 200) {
            console.error('Error:', status);
            p.play('Sorry, there was an error fetching the news. Please try again later.');
            return;
        }

        try {
            const { articles } = data;

            if (!articles || !articles.length) {
                p.play('Sorry, no articles were found for this source.');
                return;
            }

            savedArticles = articles;

            p.play({ command: 'newHeadlines', articles });
            p.play(`Here are the (latest|recent) ${p.source.value}.`);

            p.play('Would you like me to read the headlines?');
            p.then(confirmation);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            p.play('Sorry, there was an error processing the news data. Please try again later.');
        }
    })
    .catch((error) => {
        console.error('Axios request error:', error);
        p.play('Sorry, there was an error fetching the news. Please try again later.');
    });
})

// News by Term
intent('what\'s up with $(term* (.*))', (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/everything?apiKey=21d063c9aedb49958631f1f4c411ef99`;
    
    if(p.term.value) {
        NEWS_API_URL = `${NEWS_API_URL}&q=${p.term.value.toLowerCase().split(" ").join('-')}`
    }
    
    console.error("p.term.value: ", p.term.value);
    console.error("NEWS_API_URL: ", NEWS_API_URL);
    
    api.axios.get(NEWS_API_URL).then((response) => {
    const { data, status } = response;

    if (status !== 200) {
        console.error('Error:', status);
        p.play('Sorry, there was an error fetching the news. Please try again later.');
        return;
    }

    try {
        const { articles } = data;

        if (!articles || !articles.length) {
            p.play('Sorry, no articles were found for this search term.');
            return;
        }

        savedArticles = articles;

        p.play({ command: 'newHeadlines', articles });
        p.play(`Here are the (latest|recent) articles on ${p.term.value}.`);

        p.play('Would you like me to read the headlines?');
        p.then(confirmation);
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        p.play('Sorry, there was an error processing the news data. Please try again later.');
    }
});
})

// News by Categories
const CATEGORIES = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
const CATEGORIES_INTENT = `${CATEGORIES.map((category) => `${category}~${category}`).join('|')}`;

intent(`(show|what is|tell me|what's|what are|what're|read) (the|) (recent|latest|) $(N news|headlines) (in|about|on|) $(C~ ${CATEGORIES_INTENT})`,
  `(read|show|get|bring me|give me) (the|) (recent|latest) $(C~ ${CATEGORIES_INTENT}) $(N news|headlines)`, (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    
    if(p.C.value) {
        NEWS_API_URL = `${NEWS_API_URL}&category=${p.C.value}`
    }
    
    api.axios.get(NEWS_API_URL)
    .then((response) => {
        const { data, status } = response;

        if (status !== 200) {
            console.error('Error:', status);
            p.play('Sorry, there was an error fetching the news. Please try again later.');
            return;
        }

        try {
            const { articles } = data;

            if (!articles || !articles.length) {
                p.play('Sorry, no articles were found for this category.');
                return;
            }

            savedArticles = articles;

            p.play({ command: 'newHeadlines', articles });

            if (p.C.value) {
                p.play(`Here are the (latest|recent) articles on ${p.C.value}.`);
            } else {
                p.play('Here are the (latest|recent) news');
            }

            p.play('Would you like me to read the headlines?');
            p.then(confirmation);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            p.play('Sorry, there was an error processing the news data. Please try again later.');
        }
    })
    .catch((error) => {
        console.error('Axios request error:', error);
        p.play('Sorry, there was an error fetching the news. Please try again later.');
    });
});

const confirmation = context(() => {
    intent('yes', async (p) => {
        for(let i = 0; i < savedArticles.length; i++){
            p.play({ command: 'highlight', article: savedArticles[i]});
            p.play(`${savedArticles[i].title}`);
        }
    })
    
    intent('no', (p) => {
        p.play('Sure, sounds good to me.')
    })
})

intent('open (the|) (article|) (number|) $(number* (.*))', (p) => {
    if(p.number.value) {
        p.play({ command:'open', number: p.number.value, articles: savedArticles})
    }
})

intent('(go|) back', (p) => {
    p.play('Sure, going back');
    p.play({ command: 'newHeadlines', articles: []})
})