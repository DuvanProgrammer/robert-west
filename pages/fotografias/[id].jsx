export default function File({file}){
    
    return(
        <div>
            <h1>Archivos de imágenes</h1>
            <img src={file[0].file_urls.thumbnail} alt="" />
        </div>
    )
}

export async function getStaticPaths(){
    const res = await fetch("https://badac.uniandes.edu.co/robertwest/api/items/")
    const posts = await res.json()

    const paths = posts.map(post => {
        return {
            params: { id: (post.id).toString() }
        }
    })

    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const res = await fetch(`https://badac.uniandes.edu.co/robertwest/api/files/?item=${params.id}`)
    const file = await res.json()

    return{
        props:{
            file
        }
    }
}

