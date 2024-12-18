import flagsData from '../api/flags.json'
export default function Flags(){
    return(
        <>
        <ul>
            {flagsData.map((currentElement) => {
                return (
                <li key={currentElement}>
                <div>
                    <img
                     src={currentElement.flag_url}
                     alt='national flag'/>
                </div>
                <h2>Country: {currentElement.country}</h2>
                <h3>Capital: {currentElement.capital}</h3>
                <h3>Population: {currentElement.population}</h3>
                <h3>Language: {currentElement.language}</h3>
                <h3>Country Code: {currentElement.dialingCode}</h3>
            </li>)
            })}
            
        </ul>
        </>
    )
}