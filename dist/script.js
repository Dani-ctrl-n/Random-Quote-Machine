const { useState, useEffect } = React;

const RandomQuoteMachine = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleNewQuote = () => {
    fetchQuote();
  };

  const handleTweetQuote = () => {
    const twitterIntentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;
    window.open(twitterIntentUrl, '_blank');
  };


  return /*#__PURE__*/(
    React.createElement("div", { id: "quote-box", className: "text-center" }, /*#__PURE__*/
    React.createElement("div", { id: "text" }, quote), /*#__PURE__*/
    React.createElement("div", { id: "author" }, "- ", author), /*#__PURE__*/
    React.createElement("button", { id: "new-quote", onClick: handleNewQuote }, "New Quote"), /*#__PURE__*/


    React.createElement("a", { id: "tweet-quote", href: "#", onClick: handleTweetQuote }, "#tweet-quote")));




};