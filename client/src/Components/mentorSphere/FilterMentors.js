import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import state, { setMentors, setPage } from "../../state/index.js";
import Carousel from 'react-bootstrap/Carousel';
import FilterMentor from "./filterMentor.js";
import ReactPaginate from 'react-paginate';

const FilterMentors = ({formData}) => {
    const dispatch = useDispatch();
    const mentor = useSelector((state) => state.mentor);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1)

    const paginate = ({ selected }) => {
      setCurrentPage(selected + 1);
    };
  
    let filter = "";
    const { minPrice, maxPrice, minQualify, maxQualify, groupLessons, qualification} = formData;
    if (minPrice != "")
        filter += `pricePerLesson[gt]=${minPrice}&`;
    if (maxPrice != "")
        filter += `pricePerLesson[lt]=${maxPrice}&`;
    if (minQualify != "")
        filter += `yearOfExpierience[gt]=${minQualify}&`;
    if (maxQualify != "")
        filter += `yearOfExpierience[lt]=${maxQualify}&`;
    if (groupLessons !== "")
        filter += `groupLessons=true&`
    if (qualification != "")
        filter += `qualification=${qualification}&`
        const getMentors = async () => {
        try {
       
        const response = await fetch(`https://noobssossss.onrender.com/mentor?page=${currentPage}&${filter}`, {
            method: 'GET',
        });

        let data = await response.json();
        console.log(data);
        dispatch(setMentors({ mentor: data }));
        } catch (err) {
            console.log(err)
        }

    }

    const handleChange = (currentPage) => {
        setCurrentPage(currentPage + 1)
    }

    useEffect(() => {
        getMentors()
    }, [filter, currentPage])

    return (
        <>
            {(mentor != null && mentor != undefined) && mentor.map(
                ({
                    _id,
                    firstName,
                    lastName,
                    description,
                    qualification,
                    picturePath,
                    pricePerLesson
                }) => (

                            <FilterMentor mentorId={_id} name={`${firstName} ${lastName}`}
                                        description={description}
                                        qualification={qualification}
                                        picturePath={picturePath}
                                        price={pricePerLesson}/>
                )
            )}
            <ReactPaginate
                  onPageChange={paginate}
                  pageCount={4}
                  previousLabel={'Prev'}
                  nextLabel={'Next'}
                  containerClassName={'pagination'}
                  pageLinkClassName={'page-number'}
                  previousLinkClassName={'page-number'}
                  nextLinkClassName={'page-number'}
                  activeLinkClassName={'active'}
                  onClick={handleChange}
               />
        </>
    )
}

export default FilterMentors;
