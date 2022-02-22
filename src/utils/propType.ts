import { ColorScheme } from "../utils/theme";
import { DetailedHTMLProps } from "./types";
import { CSSObject } from "@emotion/react";
export interface PropTypes<T = HTMLDivElement, E = React.ElementType>
    extends Omit<Partial<DetailedHTMLProps<T>>, "className"> {
    /**  To disable action and styling of element **/
    disable?: boolean;

    /**  To define types of element e.g Tag = 'a'  **/
    as?: E;

    /**  To modify the theme colors styling **/
    colorScheme?: ColorScheme;

    /**  To add custom class **/
    className?: string | string[];

    /**  To provide custom styling **/
    style?: CSSObject;
}
