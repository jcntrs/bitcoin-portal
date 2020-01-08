import MasterPage from '../components/MasterPage';
import BitcoinPrice from '../components/BitcoinPrice';
import BitcoinNews from '../components/BitcoinNews';
import fetch from 'isomorphic-unfetch';


const Index = ({ bitcoinPrice, bitcoinNews }) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2 className="mb-4">Precio del Bitcoin</h2>
                <BitcoinPrice bitcoinPrice={bitcoinPrice} />
            </div>
            <div className="col-md-12">
                <h2 className="my-4">Noticias sobre Bitcoin</h2>
                <BitcoinNews bitcoinNews={bitcoinNews} />
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () => {
    const date = new Date();
    const from = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const price = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
    const news = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=${from}&sortBy=publishedAt&apiKey=0be8624741a24c83aacfec3de6653319&language=es`);
    const priceResponse = await price.json();
    const newsResponse = await news.json();
    return {
        bitcoinPrice: priceResponse.data.quotes.USD,
        bitcoinNews: newsResponse.articles
    }
}

export default Index;