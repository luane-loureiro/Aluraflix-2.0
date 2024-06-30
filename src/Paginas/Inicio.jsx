import Banner from "../Components/Banner"
import Categoria from "../Components/Categoria"



const Inicio = () =>{
    const CategoriaDate = [
        {
          id: "01",
          nome: 'Programação',
          cor:  '#00C86F'
        },
        {
          id: "02",
          nome: 'Front-End',
          cor: '#82CFFA'
        },
        {
          id: "03",
          nome: 'Data Science',
          cor: '#A6D157'
        },
        {
          id: "04",
          nome: 'Devops',
          cor: '#E06B69'
        },
        {
          id: "05",
          nome: 'UX e Design',
          cor: '#DB6EBF'
        },
        {
          id: "06",
          nome: 'Mobile',
          cor: '#FFBA05'
        },
        {
          id: "07",
          nome: 'Inovação e Gestão',
          cor: '#FF8A29'
        },
      ];

      const VideosDate = [
        {
          id: "0001",
          favorito: false,
          titulo: 'O que Faz Uma Desenvolvedora Front-End',
          descricao: '',
          link: 'https://www.youtube.com/embed/ZY3-MFxVdEw?si=vGTItEcBC0vRb2n3',
          categoria: 'Front-End'
        },
        {
          id: "0002",
          favorito: false,
          titulo: 'Árvores Binárias',
          descricao: '',
          link: 'https://www.youtube.com/embed/6E169kShoNU?si=CvgAIB9wUQGnUBfk',
          categoria: 'Front-End'
        },
        {
          id:"0003",
          favorito: false,
          titulo: 'UX & Front-End',
          descricao: '',
          link : 'https://www.youtube.com/embed/oGy1qDSfjXo?si=yFB4bHnkHnfFbjuM',
          categoria: 'Front-End'
        }
      ]

    return (
        <div>
        <Banner
            titulo = "SEO com React"
            texto = "Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma Pokedex!"
        />

        {CategoriaDate.map(categoria => 
        <Categoria 
            nome = {categoria.nome}
            cor = {categoria.cor}
            key = {categoria.id}
            videosDate = { VideosDate.filter( Video => Video.categoria === categoria.nome ) }
        />
        )}
        </div>


    )
}
export default Inicio