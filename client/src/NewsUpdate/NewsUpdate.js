import React, { useState } from 'react';
import './NewsUpdate.css'; // Create a CSS file for NewsPage styling
import newsImage1 from './image0.jpg'; // Import your news images
import newsImage2 from '../WhyUs/image1.jpg';
import newsImage3 from '../WhyUs/image2.jpg';
import newsImage4 from '../WhyUs/image3.jpg';

const NewsPage = () => {
    const [showAll, setShowAll] = useState(false);
  
    // Sample news data
    const newsData = [
        {
          id: 1,
          image: newsImage1,
          headline: "Record-Breaking SIP Investments in Mutual Funds",
          description: "Investments through the systematic investment plan or SIP route have been buoyant for the mutual fund industry, hitting new records month after month.",
          url: "https://economictimes.indiatimes.com/markets/stocks/news/wealth-multiplier-rs-10000/month-sip-in-this-hdfc-fund-would-have-turned-to-rs-7-crore-in-over-20-years/articleshow/104963019.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"
        },
        {
          id: 2,
          image: newsImage2,
          headline: "Nifty's Attempt to Find a Base",
          description: "The market swung on both sides this week as it made a strong attempt and held the previous week's low of 18,837. The Nifty traded in a 336-point range and attempted to find a base for itself.",
          url: "https://economictimes.indiatimes.com/markets/stocks/news/dalal-street-week-ahead-nifty-likely-to-extend-gains-protect-profits-at-higher-levels/articleshow/104961668.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"
        },
        {
          id: 3,
          image: newsImage3,
          headline: "9 Stocks to Brighten Your Samvat 2080",
          description: "The Indian economy currently finds itself in a sweet spot of growth and is well-poised for continued resilience in the face of global challenges. Axis Securities shares 9 stocks this Diwali that will brighten your Samvat 2080.",
          url: "https://economictimes.indiatimes.com/markets/stocks/news/diwali-2023-picks-these-9-stocks-by-axis-securities-can-brighten-your-portfolio/bharti-airtel-cmp-924-target-rs-1155-upside-25/slideshow/104961154.cms"
        },
        {
          id: 4,
          image: newsImage4,
          headline: "Challenges of Climate Change",
          description: "Heat, drought, flood, and famine. Evidence of climate change is all around us. To avoid severe consequences from global warming, the consumption of oil, coal, and natural gas needs to be reduced more rapidly, and clean energy sources like wind and solar power need to expand at a faster pace.",
          url: "https://economictimes.indiatimes.com/markets/stocks/news/in-a-warming-world-clean-energy-stocks-fall-while-oil-prospers/articleshow/104960687.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"
        },
        {
          id: 5,
          image: newsImage1,
          headline: "Tesla's Performance and Market Outlook",
          description: "Tesla Inc.'s massive valuation has put it among the biggest firms in the US stock market, but it's also facing performance challenges. It's the biggest underperformer among major companies, and Wall Street's enthusiasm is fading.",
          url: "https://economictimes.indiatimes.com/markets/stocks/news/teslas-dimming-growth-puts-big-seven-biggest-sp500-companies-under-spotlight/articleshow/104960282.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"
        },
        {
          id: 6,
          image: newsImage2,
          headline: "JM Financial's Strong Growth",
          description: "JM Financial has reported a total revenue of Rs. 1214 crore during the period ended September 30, 2023, showing a growth of 38%. The company's net profit for Q2 FY24 is Rs. 195 crore, reflecting an 8% growth compared to the same period in 2022.",
          url: "https://economictimes.indiatimes.com/markets/stocks/earnings/jm-financial-q2-revenue-up-38-profit-rises-to-rs-195-crore/articleshow/104971955.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"
        }
      ];
  
    return (
      <div className="news-page">
        <div className="news-header">
          <h2>Stock Market News</h2>
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Hide' : 'See All'}
          </button>
        </div>
        <div className="news-cards">
        {newsData.slice(0, showAll ? newsData.length : 3).map((news) => (
          <div className="news-card" key={news.id}>
            <img src={news.image} alt={news.headline} />
            <h3>{news.headline}</h3>
            <p>{news.description}</p>
            <a className="read-more-link" href={news.url} target="_blank" rel="noopener noreferrer">
              Read More
              <span className="arrow">→</span>
            </a>
          </div>
        ))}
      </div>
      </div>
    );
  };
  
  export default NewsPage;