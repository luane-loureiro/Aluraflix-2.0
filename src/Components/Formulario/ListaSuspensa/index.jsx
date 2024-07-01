const ListaSuspensa = ({label, items,  valor, aoAlterado, obrigatorio = false}) => {
    return (
    <div>
        <label>{label}</label>
        <select 
            required={obrigatorio} 
            value={valor} 
            onChange={evento => aoAlterado(evento.target.value)}
        >
         
                {itens.map(item => <option key={item}> {item} </option>)}
        </select>
    </div>)
}

export default ListaSuspensa