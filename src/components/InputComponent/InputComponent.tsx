import { useState } from "react"

export const InputComponent = function () {
    const [szoveg, setSzoveg] = useState<string>("Tamás");
    const [tomb, setTombItems] = useState<string[]>([])
    const addItem = () => {
        if (szoveg.length) {
            setTombItems([...tomb, szoveg]);
            setSzoveg("");
        };
    };
    return (
        <>
            <br />
            <input type="text" placeholder="Teljes Nev" value={szoveg} onChange={(e) => setSzoveg(e.target.value)} />
            <p>Név: {szoveg}</p>
            <p>Hossza: {szoveg.length}</p>
            <button onClick={addItem}>Hozzaadas</button>
            <ul>
                {
                tomb.map((szoveg, index:number)=>(
                    <li key={index}>{szoveg}</li>
                ))
                }
            </ul>
        </>
    )
}