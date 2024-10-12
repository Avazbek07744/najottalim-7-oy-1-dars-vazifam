import React, { useEffect, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import lord from '../../axios';

const Home = () => {
    const [skip, setSkip] = useState(0);
    const [pictures, setPictures] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const defaultImage = 'https://via.placeholder.com/150';

    useEffect(() => {
        setLoading(true);
        lord.get(`/photos?_start=${skip}&_limit=10`)
            .then((data) => {
                setPictures((prev) => [...prev, ...data.data]);
                setTotal(20);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [skip]);

    const handleChange = (page) => {
        setCurrentPage(page);
        setSkip((page - 1));
    };

    return (
        <div className='text-center '>
            <div className='max-w-[1200px] mx-auto bg-white px-8 pt-5 rounded-md'>
                <div className='text-center pt-20 mb-14'>
                    <h1 className='text-3xl font-semibold text-black'>Food Blog</h1>
                    <p className='w-[493px] mx-auto mt-5 text-[#7D7878]'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                </div>
                <div className='flex flex-wrap gap-2 justify-center mb-10'>
                    {loading ? (
                        Array.from({ length: 10 }).map((_, index) => (
                            <div key={index} className='w-52 flex flex-wrap'>
                                <img className='rounded-md' src={defaultImage} alt='Default' />
                            </div>
                        ))
                    ) : (
                        pictures.length > 0 && pictures.map((v) => (
                            <div key={v.id} className='w-52 flex flex-wrap'>
                                <img className='rounded-md' src={v.url || defaultImage} alt='' />
                            </div>
                        ))
                    )}
                </div>
                <div className='pb-10'>
                    <ResponsivePagination
                        current={currentPage}
                        total={Math.ceil(total / 10)}
                        onPageChange={handleChange}
                        maxWidth={600}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
