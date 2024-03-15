"use client";
import MainContainer from "../components/MainContainer/MainContainer";
import Link from "next/link";
import { IoIosFemale, IoIosMale } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { PiInstagramLogo, PiTwitterLogoThin } from "react-icons/pi";
import axios from "axios";
import dynamic from 'next/dynamic';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setFilterChange} from "../GlobalRedux/Features/FilterChangeSlice";

const AmountModule = dynamic(async () => await import('../components/Filter/amount.module'), {
    ssr: false,
});

const Index = () => {

    const startLetter = useSelector((state)=>state.startLetter)
    const endLetter = useSelector((state)=>state.endLetter)
    const nameLength = useSelector((state)=>state.nameLength.value)
    const gender = useSelector((state)=>state.gender)
    const year = useSelector((state)=>state.birthDate.value)
    const sort = useSelector((state)=>state.popular.sort)
    const filterToggle = useSelector((state)=>state.filterChange)

    const [data,setData] = useState([])
    const [handle,setHandle] = useState(true)

    const dispatch = useDispatch()

    function LinkHandler(value) {
        window.scrollTo(0, 0);
    }

    const FooterLinks = [
        { title: "About Us", to: "#" },
        { title: "Contact Us", to: "#" },
        { title: "Privacy Policy", to: "#" },
        { title: "Terms of Service", to: "#" },
    ];


    const FilteredNames = async (startLetter,endLetter,nameLength,gender,birthYear,sortOrder) => {
        try {
            const response = await axios.post('https://babynames-backend.onrender.com/api/filter_names', {
                first_letter: startLetter,
                last_letter: endLetter,
                name_length: nameLength,
                m_gender: gender,
                f_gender: gender,
                birth_year: birthYear,
                sort_order: sortOrder
            });
            setData(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };



    if ( handle || filterToggle ) {
        FilteredNames(startLetter,endLetter,nameLength,gender,year,sort)
        setHandle(false)
        dispatch(setFilterChange(false))

    }

    console.log(data.data)

    const keyword = data?.data?.title?.seo_slug || '';

    return (
        <MainContainer title={data?.data?.title?.seo_title} keyword={keyword}>
            <div className={`w-full h-auto flex flex-col items-center mt-32`}>
                {/*Dynamic slug Baby names*/}
                <div className={'w-full max-[1550px]:px-7 max-w-[1500px] flex flex-col mt-12 '}>
                    <span className={'text-5xl font-bold max-[600px]:text-3xl '}>{data?.data?.title?.seo_title}</span>
                </div>

                {/* Filters */}
                <AmountModule />

                {/* List of Names */}
                <div className={'w-full max-[1550px]:px-3 max-w-[1500px] flex flex-col items-center mt-12 '}>
                    <div className={'flex flex-wrap justify-center items-center gap-x-4 gap-y-10'}>
                        {/* Cards */}
                        {data?.data?.baby_list?.slice(0, 10).map((value, index) =>
                            <Link href={`/${value.name}`}>
                                <div key={index} onClick={() => LinkHandler(value.name)} className={'w-[15rem] h-[15rem] flex flex-col items-center rounded-xl relative overflow-hidden shadow-xl bg-gradient-to-r from-gray-950 to-gray-600'}>
                                    {/* <img src={cover} className={'w-full h-full object-cover absolute top-0 -z-0 brightness-50'} alt={value.name} /> */}
                                    <div className={'w-full h-full flex flex-col items-center z-0'}>
                                        <div className={'w-full h-1/2 flex flex-col items-center justify-between py-4 '}>
                                            <div className={'text-white text-xl font-bold'}>{index + 1}</div>
                                            <div className={'text-white text-3xl underline font-bold'}>{value.name}</div>
                                        </div>
                                        <div className={'w-full h-1/2 flex flex-col items-center justify-end pb-3'}>
                                            <div className={'w-auto flex items-center text-white font-semibold '}>
                                                <div className={'text-lg'}>👶</div>
                                                <span>{value.total_birth_count} newborns</span>
                                            </div>
                                            <div className={'w-auto flex items-center text-white font-semibold gap-1 '}>
                                                <div className={'text-xl text-blue-600'}><IoIosMale /></div>
                                                <span>{value.m_ratio}% Male</span>
                                            </div>
                                            <div className={'w-auto flex items-center text-white font-semibold gap-1 '}>
                                                <div className={'text-xl text-red-600'}><IoIosFemale /></div>
                                                <span>{value.f_ratio}% Female</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className={'w-full h-auto max-[1550px]:px-3 max-w-[1500px] flex flex-col items-center justify-center gap-4  '}>
                    <div className={'w-full flex flex-col items-center my-24 gap-4'}>
                        <div className={'max-[550px]:text-4xl text-6xl font-bold'}>Got feedback?</div>
                        <div className={'w-[600px] max-[700px]:w-auto text-center max-[550px]:text-xl text-2xl font-semibold'}>We'd love to hear from you. Let us know how we can improve our information.</div>
                        <div className={'px-6 py-5 rounded-xl text-xl font-semibold text-white bg-[#1C6EF2] mt-6'}>Submit feedback</div>
                    </div>
                    <div className={'w-full h-auto flex flex-col items-center gap-3 py-12 justify-center'}>
                        <div className={'w-full flex max-[600px]:flex-wrap max-[600px]:justify-center max-[600px]:gap-3 items-center justify-between'}>

                            {FooterLinks.map((value, index)=> <div className={'text-xl max-[600px]:text-[15px] text-[#4A699C]'}>
                                <Link onClick={LinkHandler} key={index} href={value.to}>{value.title}</Link>
                            </div> )}

                        </div>
                        <div className={'flex max-[600px]:flex-wrap max-[600px]:justify-center gap-5 items-center justify-between mt-5 text-4xl text-[#4A699C]'}>
                            <a href={'#'} className={'decoration-0'}><CiFacebook /></a>
                            <a href={'#'} className={'decoration-0'}><PiTwitterLogoThin /></a>
                            <a href={'#'} className={'decoration-0'}><PiInstagramLogo /></a>
                        </div>
                        <div className={'text-xl text-[#4A699C] mt-4'}>© 2022 BabyNames. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default Index;