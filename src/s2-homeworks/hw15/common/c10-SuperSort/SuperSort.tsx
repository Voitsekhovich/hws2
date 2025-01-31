import React from 'react'
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa'; // Импортируем иконки
// добавить в проект иконки и импортировать
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {

    if (sort === down) {
        return up; // Переключаем на up
    } else if (sort === up) {
        return ''; // Переключаем на отсутствие сортировки
    } else {
        return down; // Переключаем на down
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        debugger
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? <FaSortDown />
        : sort === up
            ? <FaSortUp />
            : <FaSort />


    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{ cursor: 'pointer' }}
        >
            {icon}
        </span>
    )
}

export default SuperSort
