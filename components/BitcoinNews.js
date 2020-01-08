const BitcoinNews = ({ bitcoinNews }) => {
    return (
        <div className="row">
            {bitcoinNews.map(element => {
                const { urlToImage, url, title, description, source } = element;
                const image = (urlToImage !== '') ? <img src={urlToImage} alt={title} className="card-img-top" /> : <p className="text-center my-5">Imagen no disponible</p>;
                return (
                    <div key={url} className="col-md-6 col-12 mb-4">
                        <div className="card">
                            <div className="card-image">
                                {image}
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">{title}</h3>
                                <p className="card-text">{description}</p>
                                <p className="card-text">{source.name}</p>
                                <a href={url} className="btn btn-primary d-block" target="_blank">Leer Noticia</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default BitcoinNews;