interface Props {
    children?: React.ReactNode;
    className?: string;
}

export const Grid = ({ children, className }: Props) => {
    return (
        <div
            className={`grid w-full gap-3 md:gap-6 md:grid-cols-2 ${className}`}
        >
            {children}
        </div>
    );
};
