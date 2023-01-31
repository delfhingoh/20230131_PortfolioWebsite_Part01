const Quality = ({ quality }) => 
{
    return(
        <div className="quality">
            <div className="quality-logo">
                <img src={ quality.logo } alt={ quality.title + " logo"} />
            </div>
            <div className="quality-words">
                <h4 className="quality-title">{ quality.title }</h4>
                <p className="quality-description">{ quality.description }</p>
            </div>
        </div>
    );
};

export default Quality;