import { TruncateTextType } from "../types";

export const truncateText = ({text, length}: TruncateTextType) => {
    return text.length < length ? text : `${text.substring(0, length)}...`
}