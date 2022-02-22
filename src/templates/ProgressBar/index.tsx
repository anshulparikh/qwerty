import React from "react";
import styled from "@emotion/styled";
import { Theme } from "../../context/ThemeProvider";
import { PropTypes } from "../../utils/propType";
import { Property } from "../../utils/types";
import { cx as classNames } from "@emotion/css";

interface ProgressBarPropType
    extends Omit<PropTypes<HTMLProgressElement>, "ref"> {
    /** To set maximum value of progressBar */
    max?: number;

    /** To set minimum value of progressBar */
    min?: number;

    /** To repersent caption of the element */
    label?: string | number;

    /** To set value upto which progressBar is increase */
    value?: number;

    /** To add custom width to the element */
    width?: Property.Width;

    /** To add custom background color on the element */
    backgroundcolor?: string;

    /** If true, show circular-div steps  */
    showSteps?: boolean;

    /** To add starting circular-div step  */
    startpoint?: number | string;

    /** To add end circular-div step  */
    endpoint?: number | string;

    /** To add mid circular-div step  */
    midpoint?: number | string;
}

type StyleProgressProps = {
    theme?: Theme;
    overrideStyle?: PropTypes["style"];
} & Partial<ProgressBarPropType>;

export const EmotionProgressBar = styled("progress", {
    shouldForwardProp: (props: string) => {
        return !["colorScheme", "overrideStyle", "as"].includes(props);
    },
})(
    ({
        theme,
        colorScheme,
        overrideStyle,
        width,
        backgroundcolor,
    }: StyleProgressProps) => {
        return {
            marginRight: 10,
            width: width,
            position: "relative",
            alignSelf: "center",
            height: 10,
            WebkitAppearance: "none",
            "::-webkit-progress-bar": {
                height: 10,
                borderRadius: 20,
                backgroundColor: "#eee",
            },
            "::-webkit-progress-value": {
                height: 10,
                borderRadius: 20,
                backgroundColor: backgroundcolor
                    ? backgroundcolor
                    : colorScheme && theme?.palette[colorScheme]?.main,
            },
            ...overrideStyle,
        };
    },
);

type StyledContainerProps = {
    overrideStyle?: PropTypes["style"];
    theme?: Theme;
} & Partial<ProgressBarPropType>;

const EmotionContainer = styled("div")(
    ({ overrideStyle, width }: StyledContainerProps) => {
        return {
            width,
            display: "inline-flex",
            flexDirection: "column",
            position: "relative",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            fontSize: 14,
            ...overrideStyle,
        };
    },
);

type StyledProgressDotProps = {
    overrideStyle?: PropTypes["style"];
    theme?: Theme;
} & Partial<ProgressBarPropType>;

const EmotionProgressDot = styled("div")(
    ({ colorScheme, theme, overrideStyle }: StyledProgressDotProps) => {
        return {
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            lineHeight: "27px",

            backgroundColor: colorScheme
                ? colorScheme && theme?.palette[colorScheme]?.main
                : "#eee",
            fontSize: "12px",
            fontWeight: 400,
            color: "#1f75c4",
            position: "absolute",
            top: "0px",
            ...overrideStyle,
        };
    },
);

type StyledProgressLabelProps = {
    overrideStyle?: PropTypes["style"];
    theme?: Theme;
} & Partial<ProgressBarPropType>;

/**
 * @function EmotionProgressLabel
 * This function is used to wrap the Label Item for style
 */
export const EmotionProgressLabel = styled.label(
    ({ overrideStyle }: StyledProgressLabelProps) => {
        return {
            paddingBottom: "15px",
            display: "inline-flex",
            justifyContent: "center",
            fontSizes: 16,
            color: "#555",
            ...overrideStyle,
        };
    },
);

export const ProgressBar = React.forwardRef<
    HTMLDivElement,
    React.PropsWithChildren<ProgressBarPropType>
>(
    (
        {
            id,
            children,
            className,
            colorScheme,
            max,
            min,
            showSteps,
            label,
            value,
            width,
            style,
            startpoint,
            endpoint,
            midpoint,
            backgroundcolor,
            ...props
        },
        ref,
    ) => {
        return (
            <EmotionContainer
                id={id}
                className={classNames(className)}
                ref={ref}
                overrideStyle={style}
            >
                {label && (
                    <EmotionProgressLabel colorScheme={colorScheme}>
                        {label}
                    </EmotionProgressLabel>
                )}
                <div style={{ position: "relative" }}>
                    <EmotionProgressBar
                        colorScheme={colorScheme}
                        value={value}
                        max={100}
                        min={0}
                        startpoint={startpoint}
                        midpoint={midpoint}
                        endpoint={endpoint}
                        label={label}
                        width={width}
                        backgroundcolor={backgroundcolor}
                        {...props}
                    />
                    {showSteps && (
                        <div>
                            <EmotionProgressDot
                                backgroundcolor={backgroundcolor}
                                colorScheme={colorScheme}
                                value={value}
                                min={min}
                                startpoint={startpoint}
                                data-active-dot={
                                    value >= 0 ? "actve" : "inactive"
                                }
                                style={{
                                    left: 5,
                                    ...(value >= 0 && {
                                        backgroundColor: backgroundcolor,
                                    }),
                                }}
                            >
                                <span
                                    style={{
                                        position: "relative",
                                        bottom: -20,
                                        left: 5,
                                    }}
                                >
                                    {startpoint}
                                </span>
                            </EmotionProgressDot>
                            <EmotionProgressDot
                                backgroundcolor={backgroundcolor}
                                colorScheme={colorScheme}
                                midpoint={midpoint}
                                value={value}
                                max={max}
                                data-active-dot={
                                    value >= 50 ? "actve" : "inactive"
                                }
                                style={{
                                    left: "45%",
                                    top: "0px",
                                    ...(value >= 50 && {
                                        backgroundColor: backgroundcolor,
                                    }),
                                }}
                            >
                                <span
                                    style={{
                                        position: "relative",
                                        bottom: -20,
                                    }}
                                >
                                    {midpoint}
                                </span>
                            </EmotionProgressDot>
                            <EmotionProgressDot
                                backgroundcolor={backgroundcolor}
                                colorScheme={colorScheme}
                                endpoint={endpoint}
                                value={value}
                                max={max}
                                data-active-dot={
                                    value === 100 ? "actve" : "inactive"
                                }
                                style={{
                                    top: "0px",
                                    right: 15,
                                    ...(value === 100 && {
                                        backgroundColor: backgroundcolor,
                                    }),
                                }}
                            >
                                <span
                                    style={{
                                        position: "relative",
                                        bottom: -20,
                                    }}
                                >
                                    {endpoint}
                                </span>
                            </EmotionProgressDot>
                        </div>
                    )}
                </div>
                {children}
            </EmotionContainer>
        );
    },
);

ProgressBar.defaultProps = {
    value: 0,
    max: 100,
    width: "200px",
    showSteps: true,
};
