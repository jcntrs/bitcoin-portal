const BitcoinPrice = ({ bitcoinPrice }) => {

    const { price, percent_change_1h, percent_change_24h, percent_change_7d } = bitcoinPrice;

    return (
        <div className="card text-white bg-success mb-3">
            <h4 className="card-header">Información Actual</h4>
            <div className="card-body">
                <h5 className="card-title"><span className="font-weight-bold">Precio: </span>$ {price.toFixed(2)}</h5>
                <div className="d-md-flex justify-content-between">
                    <p className="card-text">
                        <span className="font-weight-bold">Última Hora: </span>{percent_change_1h} %
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">Últimas 24 Horas: </span>{percent_change_24h} %
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">Últimos 7 Días: </span>{percent_change_7d} %
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BitcoinPrice;