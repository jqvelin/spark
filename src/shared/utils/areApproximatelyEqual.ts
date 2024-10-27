export const areApproximatelyEqual = ({
    threshold = 1,
    number1,
    number2
}: {
    threshold?: number;
    number1: number;
    number2: number;
}) => {
    return Math.abs(number1 - number2) <= threshold;
};
