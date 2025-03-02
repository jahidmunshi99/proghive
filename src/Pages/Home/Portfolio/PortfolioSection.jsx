import React, { useState } from 'react'
import SectionTitle from '../../../Components/Common/SectionTitle'
import Card from '../../../Components/Common/Card/Card';
import useFetchData from '../../../Hook/useFetchData';
import Loader from '../../../Components/Common/Loader/Loader';
import Container from '../../../Components/Common/Container';

const PortfolioSection = () => {
  const url  = '/Portfolio.json'
  const { data, loading } = useFetchData(url)
  const [ showPost, setShowPost ] = useState(6)
  
  return (
    <div className='bg-slate-800'>
      <Container>
        { loading ? <Loader/> : <div></div>}

        <div>
            <SectionTitle title={"Portfolio"}/>
            {/** Portfolios */}
            <div className='flex flex-wrap md:justify-between md:gap-6 md:pt-10 px-5'>
              {
                data.slice(0, showPost).map((item)=> 
                <Card
                  key={item.id}
                  img = {item.url}
                  title = {item.title}
                  desc = {item. description}        
                >
                </Card>
                )
              }
            </div>
            {/** Load More Button */}
            <div className='flex justify-center items-center text-center mx-auto mt-15'>
              <button className='btn' onClick={()=>setShowPost( showPost + 3)}>Load More</button>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default PortfolioSection