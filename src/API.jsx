fetchCategoriasData()
async function fetchCategoriasData() {
    const response = await fetch('Data/Catecorias.json')
    let CategoriasData = await response.json()
    return(CategoriasData)
}