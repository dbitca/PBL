import Menu from "../components/Menu"
import appMenu from "../components/appMenu"
import "../style/Document.css"
const Document = () => {
    const data = {
        "Nume": "nume",
        "Prenume": "prenume",
        "Data Nasterii": "01/02/2000",
        "Tipul Vaccinului": "sputnik",
        "Nr doze": 7,
        "Data vaccinarii": "01/02/2020",
        "Emitatorul Vaccinului": "da"
    }
    return(
    <div className="home-page">
        <Menu menu={appMenu}/>
        <div className="home-body">
            <div className="document-title">DOCUMENT</div>
            <div className="document-data">
            {
                Object.keys(data).map((key, e)=>{
                    return (<div key={e+key} className="doc-block">
                        <div className="doc-key"> {key}:</div>
                        <div className="doc-value"> {data[key]} </div>

                    </div>)
                })
            }
        </div>
        </div>
    </div>)
}

export default Document