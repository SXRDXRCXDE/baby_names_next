import {useRouter} from "next/router";
import {useState} from "react";
import Link from "next/link";
import axios from "axios";
import CollapseMenu from "../components/CollapseMenu/CollapseMenu";
import MainContainer from "../components/MainContainer/MainContainer";


export default function () {


    const [dataLayout,setLayout] = useState([])
    const [randomNames,setRandomNames] = useState([])

    const [handle,setHandle] = useState(true)

    const [selectedRandomName,setSelectedRandomName] = useState('')


    const Contact_Information = [
        {
            title:'Phone',
            description:'(650) 723-2300'
        },
        {
            title:'Email',
            description:'admission@stanford.edu'
        },
        {
            title:'Address',
            description:'450 Serra Mall, Stanford, CA 94305, United States'
        },
    ]

    const FooterLinks = [
        {
            title: "About BabyName",
            to: "#",
        },
        {
            title: "Privacy Policy",
            to: "#",
        },
        {
            title: "Terms of Service",
            to: "#",
        },
    ]

    async function LinkHandler(value) {
        await window.scrollTo(0,0)
        await setSelectedRandomName(value)
        await postNameRandom()
    }


    const {query} = useRouter()


    const postNameRandom = async () => {
        try {
            const response = await axios.post('https://babynames-backend.onrender.com/api/post_name', {
                name: selectedRandomName
            });
            setLayout(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const postName = async () => {
        try {
            const response = await axios.post('https://babynames-backend.onrender.com/api/post_name', {
                name: query.name
            });
            setLayout(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getRandomNames = async () => {
        try {
            const response = await axios.get('https://babynames-backend.onrender.com/api/get_random_names', {});
            setRandomNames(response.data);
        } catch (error) {
            console.error('Error:', error);
            throw error; // Re-throw the error to handle it in the getServerSideProps
        }
    };



    if (query.name && handle ) {
        postName();
        getRandomNames();
        setHandle(false)
    }

    console.log(dataLayout)

    return(
        <MainContainer title={`Name ` + query.name} keywords={query.name}>
            <div className={`w-full h-auto min-h-screen flex flex-col items-center mt-32`}>

                <div className={'w-full max-[1550px]:px-7 max-w-[1500px] flex flex-col mt-12 '}>

                    <span className={'text-5xl font-bold '}> {query.name} </span>


                    <span className={'text-2xl font-bold mt-16 '}> Overview </span>

                    <p className={'text-[1.3rem] text-black mt-5'}>
                        {dataLayout?.data?.name_overview}
                    </p>

                    <span className={'text-2xl font-bold mt-8 '}> Quick Facts </span>

                    <div className={'w-full max-[600px]:h-auto h-60 flex flex-col  min-[600px]:flex-wrap mt-8 '}>

                        {dataLayout?.data?.quick_facts?.map((value, index)=> <div key={index} className={'max-[600px]:w-full w-1/2 h-20 flex flex-col items-start justify-center border-y border-[#f2f2f2] '}>
                            <div className={'text-xl font-semibold text-[#4A699C]'}>{value.title}</div>
                            <div className={'text-lg text-black'}>{value.body}</div>
                        </div>)}

                    </div>

                    <span className={'text-2xl font-bold my-8 '}> {dataLayout?.data?.faq?.faq_title} </span>

                    {dataLayout?.data?.faq?.faq_body[0].map((value, index)=> <div key={index}>
                        <CollapseMenu title={value.question} answer={value.answer}/>
                    </div>)}


                    <span className={'text-2xl font-bold my-8 '}> Explore Names </span>


                    <div className={'w-full h-auto flex flex-col items-center'}>

                        <div className={'w-auto h-auto flex max-[500px]:flex-col items-center min-[500px]:flex-wrap justify-start gap-3'}>

                            {randomNames?.random_names?.slice(0,5).map((value, index)=> <div key={index} className={'w-[15rem] h-[12rem] flex flex-col items-center justify-center rounded-xl relative bg-black overflow-hidden shadow-xl bg-gradient-to-r from-gray-950 to-gray-600'}>
                                <Link onClick={()=>LinkHandler(value.name)} href={`/${value.name}`} >

                                    {/*<img src={cover} className={'w-full h-full object-cover absolute top-0 left-0 brightness-50 -z-0'}/>*/}

                                    <div className={'w-auto h-auto z-0 text-white underline text-3xl font-semibold'}>{value.name}</div>

                                </Link>
                            </div>)}

                        </div>


                    </div>

                    <span className={'text-2xl font-bold my-8 '}> Explore Categories </span>

                    {/*Filters*/}
                    <div className={'w-auto flex flex-wrap gap-5 items-center justify-start  my-3'}>

                        {dataLayout?.data?.categories.map((value, index)=> <div>
                            <Link href={'/'}  key={index} className={'px-3 py-2 rounded-lg bg-[#f2f2f2] text-xl font-semibold'}>{value.title}</Link>
                        </div>)}

                    </div>

                </div>




                {/*Footer */}
                <div className={'w-full max-[1550px]:px-7 max-w-[1500px] flex flex-col mt-12 '}>

                    <div className={'w-full flex flex-col items-center my-16 gap-4'}>

                        <div className={'max-[550px]:text-4xl text-6xl font-bold'}>Got feedback?</div>
                        <div className={'w-[600px] max-[700px]:w-auto text-center max-[550px]:text-xl text-2xl font-semibold'}>We'd love to hear from you. Let us know how we can improve our information.</div>

                        <div className={'px-6 py-5 rounded-xl text-xl font-semibold text-white bg-[#1C6EF2] mt-6'}>Submit feedback</div>

                    </div>

                    <span className={'text-2xl font-bold my-6 '}> Contact information </span>

                    <div className={'w-full h-auto flex flex-col gap-4'}>

                        {Contact_Information.map((value, index)=>  <div key={index} className={'w-full max-[600px]:flex-col flex  max-[600px]:items-start items-center justify-between'}>
                            <div className={'text-[#4A699C] text-xl'}>{value.title}</div>
                            <div className={'text-black text-xl'}>{value.description}</div>
                        </div>)}

                    </div>

                    <div className={'w-full flex max-[600px]:flex-wrap max-[600px]:justify-center max-[600px]:gap-3 items-center justify-between my-12'}>

                        {FooterLinks.map((value, index)=> <div>
                            <Link onClick={()=>window.scrollTo(0,0)} key={index} href={value.to} className={'text-xl max-[600px]:text-[15px] text-[#4A699C]'}>{value.title}</Link>
                        </div>)}

                    </div>

                </div>

            </div>
        </MainContainer>
    )
}


