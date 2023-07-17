import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMentors } from "../../state/index.js";
import Carousel from 'react-bootstrap/Carousel';
import FilterMentor from "./filterMentor.js";

const FilterMentors = ({formData}) => {
    const dispatch = useDispatch();
    const mentor = useSelector((state) => state.mentor);
    let filter = "";
    const { minPrice, maxPrice, minQualify, maxQualify, groupLessons, qualification, } = formData;
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
       
        const response = await fetch(`https://noobssossss.onrender.com/mentor?${filter}`, {
            method: 'GET',
        });

        let data = await response.json();
        console.log(data);
        dispatch(setMentors({ mentor: data }));
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getMentors()
    }, [filter])
    //getMentors()

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
        </>
    )
}

export default FilterMentors;
