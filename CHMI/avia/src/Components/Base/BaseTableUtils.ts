import {HeadersBaseSettings} from "../../Typings/TableTypes";



// нам нужно найти в хедерах маппинги для текущей строки и вернуть ключи в верном порядке
export function getMappingForCell<T>(headers: HeadersBaseSettings<T>): Array<keyof T | ""> {
    return [...headers.keys()]
}


// ищем в хедерах присутсвие convertFunction, если оно есть, прогоняет текущее значение через него, если нет, то возвращает текущее значение
export function convert<T>(headers: HeadersBaseSettings<T>, column: keyof T, value: any, row: any) {
    const obj = headers.get(column)
    if (obj && obj.convertFunction) {
        if (obj.emptyDataColumn) {
            return obj.convertFunction(row, column)
        } else {
            return obj.convertFunction(value, column)
        }
    }
    return value
}

export function getCellProps<T>(headers: HeadersBaseSettings<T>, column: keyof T, value: any, row: any) {
    const obj = headers.get(column)
    if (obj && obj.cellProps) {
        if (obj.emptyDataColumn) {
            return obj.cellProps(row)
        } else {
            return obj.cellProps(value)
        }
    }
    return null
}
