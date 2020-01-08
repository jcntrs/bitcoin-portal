import Head from 'next/head';
import Navigation from '../components/Navigation';

const MasterPage = (props) => {
    return (
        <div>
            <Head>
                <title>Portal Bitcoin</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="stylesheet" href="https://bootswatch.com/4/solar/bootstrap.min.css" />
            </Head>
            <Navigation />
            <div className="container mt-4">
                {props.children}
            </div>
        </div>
    );
}

export default MasterPage;