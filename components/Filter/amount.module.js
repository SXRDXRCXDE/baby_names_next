
"use client";
import {Option} from "antd/es/mentions";
import {InputNumber, Select} from "antd";
import {useDispatch} from "react-redux";
import {setStartLetter} from "../../GlobalRedux/Features/StartLetterSlice";
import {setEndLetter} from "../../GlobalRedux/Features/EndLetterSlice";
import {incrementByAmountLength} from "../../GlobalRedux/Features/NameLengthSlice";
import {setGender} from "../../GlobalRedux/Features/GenderSlice";
import {incrementByAmount} from "../../GlobalRedux/Features/YearSlice";
import {setPopular} from "../../GlobalRedux/Features/PopularSlice";
import {setFilterChange} from "../../GlobalRedux/Features/FilterChangeSlice";






export default function AmountModule() {


    const dispatch = useDispatch()


    const start_options = [
        {
            value: 'A',
            label: "A",
        },
        {
            value: 'B',
            label: "B",
        },
        {
            value: 'C',
            label: "C",
        },
        {
            value: 'D',
            label: "D",
        },
        {
            value: 'E',
            label: "E",
        },
        {
            value: 'F',
            label: "F",
        },
        {
            value: 'G',
            label: "G",
        },
        {
            value: 'H',
            label: "H",
        },
        {
            value: 'I',
            label: "I",
        },
        {
            value: 'J',
            label: "J",
        },
        {
            value: 'K',
            label: "K",
        },
        {
            value: 'L',
            label: "L",
        },
        {
            value: 'M',
            label: "M",
        },
        {
            value: 'N',
            label: "N",
        },
        {
            value: 'O',
            label: "O",
        },
        {
            value: 'P',
            label: "P",
        },
        {
            value: 'Q',
            label: "Q",
        },
        {
            value: 'R',
            label: "R",
        },
        {
            value: 'S',
            label: "S",
        },
        {
            value: 'T',
            label: "T",
        },
        {
            value: 'U',
            label: "U",
        },
        {
            value: 'V',
            label: "V",
        },
        {
            value: 'W',
            label: "W",
        },
        {
            value: 'X',
            label: "X",
        },
        {
            value: 'Y',
            label: "Y",
        },
        {
            value: 'Z',
            label: "Z",
        },
    ]


    const Gender_options = [
        {
            value:'M',
            label:'Male'
        },
        {
            value:'F',
            label:'Female'
        },
    ]

    const Sort_options = [
        {
            value:'Popular',
            label:'Popular'
        },
        {
            value:'New',
            label:'New'
        },
        {
            value:'Historical',
            label:'Historical'
        },
    ]

    const years = [];
    const currentYear = new Date().getFullYear();


    for (let year = currentYear; year >= currentYear - 100; year--) {
        years.push(year);
    }

    // function ClearFilters() {
    //     dispatch(setStartLetter(''))
    //     dispatch(setEndLetter(''))
    //     dispatch(incrementByAmountLength(''))
    //     dispatch(setGender(''))
    //     dispatch(incrementByAmount(''))
    //     dispatch(setPopular(''))
    //     dispatch(setFilterChange(true))
    // }

    return (
        <>
            <div>

                <div className={'w-full flex flex-wrap gap-3 items-center justify-center px-5 my-6'}>

                    <div className={'flex flex-row items-center gap-3 font-semibold '}>
                        <span>Starts with</span>
                        <Select
                            defaultValue=" "
                            allowClear={true}
                            style={{
                                width: "50px",
                            }}
                            onChange={(value)=>{
                                if (value !== undefined) {
                                    dispatch(setStartLetter(value));
                                } else {
                                    // Если выбрано значение "очистить", то обнуляем фильтр
                                    dispatch(setStartLetter(''));
                                }
                                dispatch(setFilterChange(true));
                            }}
                            options={start_options}
                        />
                    </div>

                    <div className={'flex flex-row items-center gap-3 font-semibold '}>
                        <span>Ends with</span>
                        <Select
                            defaultValue=" "
                            style={{
                                width: "50px",
                            }}
                            onChange={(value)=>{
                                if (value !== undefined) {
                                    dispatch(setEndLetter(value));
                                } else {
                                    // Если выбрано значение "очистить", то обнуляем фильтр
                                    dispatch(setEndLetter(''));
                                }
                                dispatch(setFilterChange(true));
                            }}
                            options={start_options}
                        />
                    </div>

                    <div className={'flex flex-row items-center gap-3 font-semibold '}>
                        <span>Name length</span>
                        <InputNumber
                            min={1} // Минимальное значение
                            max={15} // Максимальное значение
                            defaultValue={5} // Значение по умолчанию
                            onChange={(value) => {
                                if (value !== undefined) {
                                    dispatch(incrementByAmountLength(value));
                                } else {
                                    // Если выбрано значение "очистить", то обнуляем фильтр
                                    dispatch(incrementByAmountLength(''));
                                }
                                dispatch(setFilterChange(true));
                            }}
                        />
                    </div>


                    <div className={'flex flex-row items-center gap-3 font-semibold '}>
                        <span>Gender</span>
                        <Select
                            defaultValue="M"
                            allowClear={true}
                            style={{
                                width: "80px",
                                padding:"5 px"
                            }}
                            onChange={(value)=>{
                                if (value !== undefined) {
                                    dispatch(setGender(value));
                                } else {
                                    // Если выбрано значение "очистить", то обнуляем фильтр
                                    dispatch(setGender(''));
                                }
                                dispatch(setFilterChange(true));
                            }}
                            options={Gender_options}
                        />
                    </div>

                    <div className={'flex flex-row items-center gap-3 font-semibold '}>
                        <span>Select Year</span>
                        <Select className={'w-16'}
                                allowClear={true}
                            onChange={(value)=>{
                                if (value !== undefined) {
                                    dispatch(incrementByAmount(value));
                                } else {
                                    // Если выбрано значение "очистить", то обнуляем фильтр
                                    dispatch(incrementByAmount(''));
                                }
                                dispatch(setFilterChange(true));
                            }}
                            defaultValue={' '}>
                            {years.map((year, index) => (
                                <Option key={index} value={year}>
                                    {year}
                                </Option>
                            ))}
                        </Select>
                    </div>

                    <div className={'flex flex-row items-center gap-3 font-semibold '}>
                        <span>Sort by</span>
                        <Select
                            allowClear={true}
                            defaultValue=" "
                            style={{
                                width: "100px",
                            }}
                            onChange={(value)=>{
                                if (value !== undefined) {
                                    dispatch(setPopular(value));
                                } else {
                                    // Если выбрано значение "очистить", то обнуляем фильтр
                                    dispatch(setPopular(''));
                                }
                                dispatch(setFilterChange(true));
                            }}
                            options={Sort_options}
                        />
                    </div>


                    {/*<div onClick={ClearFilters} className={'px-5 py-2 rounded-lg bg-[#f2f2f2]'}>Clear filters</div>*/}


                </div>

            </div>
        </>
    )
}