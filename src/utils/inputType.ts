import { ColorScheme } from "../utils/theme";
export interface InputTypes<T> {
    /**** Input type */
    type: T;
    /** Id should be unique **/
    id?: string;

    /** Trigger action when click on button **/
    onClick?: (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.MouseEvent<HTMLDivElement>,
    ) => void;

    /** Additional Styling of component **/
    style?: React.CSSProperties;

    /** Additional classes for Override or extend the styles applied to the component. **/
    className?: string | string[];

    /** Disable action and styling **/
    disable?: boolean;

    /** Define Button is of which type i.e Anchor **/
    as?: React.ElementType;

    /** Theme based color scheme for styling with different colors **/
    colorScheme?: ColorScheme;

    /** Additional content */
    children?: React.ReactNode;
}
