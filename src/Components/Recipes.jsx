import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import Loading from './Loading'
import Searchbar from './Searchbar'
import RecipeCard from './RecipeCard'
import { fetchRecipes } from '../utils'

function Recipes() {

    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('vegan')
    const [limit, setLimit] = useState(30)
    const [loading, setLoading] = useState(false)


    const fetchRecip = async () => {

        try {
            
            const data = await fetchRecipes({query, limit})
            setRecipes(data)
            setLoading(false)
        }
        catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false)
        }
        
    }

    const showMor = () => {

        setLimit(prev => prev + 10)
        fetchRecip()
    }

    const handalSearchRecipes = async (e) => {

        e.preventDefault()
        fetchRecip()
    }

    useEffect(() => {
        setLoading(true)
        fetchRecip()

    }, [])

    if(loading){

        return (
            <Loading/>
        )
    }


    const handalChange = (e) => {

        setQuery(e.target.value)
    }


  return (
    <div className='w-full'>
        <div className='w-full flex items-center
         justify-center pt-10 pb-5 px-0 md:px-10'>

            <form className='w-full lg:w-4/4' onSubmit={handalSearchRecipes}>
                <Searchbar placeholder="search your recipes" handleInputChange={handalChange} 
                
                rightIcon={<BiSearchAlt2  className='text-gray-600'/>}/>
            </form>

        </div>
        {
            recipes?.length > 0 ? (

                <>
                    <div className='w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10'>

                        {
                            recipes?.map((item, index) => ( 
                                <RecipeCard recipe={item} key={index} />
                            ))
                        }

                    </div>
                    <div className='flex w-full items-center justify-center py-10'>
                        <button onClick={showMor} className='bg-green-800 text-white px-3 py-1 rounded-full text-sm'>
                            Show more
                        </button>
                    </div>
                </>
            ): <div className='text-white w-full items-center justify-center py-10'>
                <p className='text-center'>No recipes Found</p>
            </div>
        }

    </div>
  )
}

export default Recipes